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
mkdirp(path.join(PROJECT_ROOT, '.claude/commands/bmad/bmm/workflows'));

// Agent wrappers
const agentWrappers = [
  {
    name: 'elliot',
    description: 'Elliot - Senior coding mentor',
    file: 'elliot.md',
    target: '@_bmad/bmm/agents/elliot.agent.yaml'
  },
  {
    name: 'pm',
    description: 'PM - Product Manager',
    file: 'pm.md',
    target: '@_bmad/bmm/agents/pm.agent.yaml'
  }
];

for (const agent of agentWrappers) {
  const content = `---
name: '${agent.name}'
description: '${agent.description}'
---
You must fully embody this agent's persona and follow all activation instructions exactly as specified. NEVER break character until given an exit command.

<agent-activation CRITICAL="TRUE">
1. LOAD the FULL agent file from ${agent.target}
2. READ its entire contents - this contains the complete agent persona, menu, and instructions
3. Execute ALL activation steps exactly as written in the agent file
4. Follow the agent's persona and menu system precisely
5. Stay in character throughout the session
</agent-activation>
`;
  writeFile(path.join(PROJECT_ROOT, '.claude/commands/bmad/bmm/agents', agent.file), content);
}

// Workflow wrappers
const workflowWrappers = [
  {
    name: 'create-prd',
    description: 'Create a new PRD through collaborative discovery',
    file: 'create-prd.md',
    target: '@_bmad/bmm/workflows/prd/workflow-create-prd.md'
  },
  {
    name: 'edit-prd',
    description: 'Edit an existing PRD',
    file: 'edit-prd.md',
    target: '@_bmad/bmm/workflows/prd/workflow-edit-prd.md'
  },
  {
    name: 'validate-prd',
    description: 'Validate a PRD for completeness',
    file: 'validate-prd.md',
    target: '@_bmad/bmm/workflows/prd/workflow-validate-prd.md'
  },
  {
    name: 'project',
    description: 'Create project context and architecture docs',
    file: 'project.md',
    target: '@_bmad/bmm/workflows/project/workflow.md'
  },
  {
    name: 'plan-epics',
    description: 'Break down requirements into feature groups and work units',
    file: 'plan-epics.md',
    target: '@_bmad/bmm/workflows/3-solutioning/plan-epics/workflow.md'
  }
];

for (const workflow of workflowWrappers) {
  const content = `---
description: '${workflow.description}'
---

IT IS CRITICAL THAT YOU FOLLOW THIS COMMAND: LOAD the FULL ${workflow.target}, READ its entire contents and follow its directions exactly!
`;
  writeFile(path.join(PROJECT_ROOT, '.claude/commands/bmad/bmm/workflows', workflow.file), content);
}

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
console.log('\n  Agents:');
console.log('    /elliot       - Senior coding mentor');
console.log('    /pm           - Product Manager');
console.log('\n  Workflows:');
console.log('    /create-prd   - Create a new PRD');
console.log('    /edit-prd     - Edit an existing PRD');
console.log('    /validate-prd - Validate a PRD');
console.log('    /project      - Create project context & architecture');
console.log('    /plan-epics   - Break down into feature groups');
console.log('\nRestart Claude Code to use the new commands.\n');
