#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const PROJECT_ROOT = process.cwd();

// Create directory if it doesn't exist
function mkdirp(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`✓ Created ${path.relative(PROJECT_ROOT, dir)}/`);
  }
}

// Copy file
function copyFile(src, dest) {
  fs.copyFileSync(src, dest);
  console.log(`✓ Copied ${path.relative(PROJECT_ROOT, dest)}`);
}

// Copy directory recursively
function copyDir(src, dest) {
  mkdirp(dest);
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      copyFile(srcPath, destPath);
    }
  }
}

// Write file with content
function writeFile(dest, content) {
  fs.writeFileSync(dest, content);
  console.log(`✓ Created ${path.relative(PROJECT_ROOT, dest)}`);
}

console.log('\n🧭 Installing BMAD Mentor module...\n');

// 1. Copy content files to _bmad/
console.log('📦 Copying content files to _bmad/bmm/...');
mkdirp(path.join(PROJECT_ROOT, '_bmad/bmm/agents'));
mkdirp(path.join(PROJECT_ROOT, '_bmad/bmm/workflows'));

const srcDir = path.join(__dirname, 'src');
copyDir(path.join(srcDir, 'agents'), path.join(PROJECT_ROOT, '_bmad/bmm/agents'));
copyDir(path.join(srcDir, 'workflows'), path.join(PROJECT_ROOT, '_bmad/bmm/workflows'));

// 2. Create Claude Code command wrappers
console.log('\n📋 Creating Claude Code command wrappers...');
mkdirp(path.join(PROJECT_ROOT, '.claude/commands/bmad/bmm/agents'));

// Elliot wrapper
const elliotWrapper = `---
name: 'elliot'
description: 'Elliot - Senior coding mentor'
---
You must fully embody this agent's persona and follow all activation instructions exactly as specified. NEVER break character until given an exit command.

<agent-activation CRITICAL="TRUE">
1. LOAD the FULL agent file from @_bmad/bmm/agents/elliot.agent.yaml
2. READ its entire contents - this contains the complete agent persona, menu, and instructions
3. Execute ALL activation steps exactly as written in the agent file
4. Follow the agent's persona and menu system precisely
5. Stay in character throughout the session
</agent-activation>
`;
writeFile(path.join(PROJECT_ROOT, '.claude/commands/bmad/bmm/agents/elliot.md'), elliotWrapper);

// PM wrapper
const pmWrapper = `---
name: 'pm'
description: 'PM - Product Manager'
---
You must fully embody this agent's persona and follow all activation instructions exactly as specified. NEVER break character until given an exit command.

<agent-activation CRITICAL="TRUE">
1. LOAD the FULL agent file from @_bmad/bmm/agents/pm.agent.yaml
2. READ its entire contents - this contains the complete agent persona, menu, and instructions
3. Execute ALL activation steps exactly as written in the agent file
4. Follow the agent's persona and menu system precisely
5. Stay in character throughout the session
</agent-activation>
`;
writeFile(path.join(PROJECT_ROOT, '.claude/commands/bmad/bmm/agents/pm.md'), pmWrapper);

// 3. Create context files if they don't exist
console.log('\n📄 Creating context files...');
const projectMd = path.join(PROJECT_ROOT, 'project.md');
const taskMd = path.join(PROJECT_ROOT, 'task.md');
const tasksDir = path.join(PROJECT_ROOT, 'tasks');

if (!fs.existsSync(projectMd)) {
  writeFile(projectMd, `# Project Context

Describe your project architecture, tech stack, and key decisions here.

## Tech Stack
-

## Architecture Decisions
-

## Key Patterns
-
`);
}

if (!fs.existsSync(taskMd)) {
  writeFile(taskMd, `# Current Task

## Description

## Acceptance Criteria
- [ ]

## In Scope
-

## Out of Scope
-
`);
}

mkdirp(tasksDir);

console.log('\n✅ BMAD Mentor installed successfully!\n');
console.log('Available commands:');
console.log('  /elliot  - Senior coding mentor');
console.log('  /pm      - Product Manager');
console.log('\nRestart Claude Code to use the new commands.\n');
