#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const PROJECT_ROOT = process.cwd();

// IDE configurations
const IDE_CONFIGS = {
  'claude-code': {
    name: 'Claude Code',
    commandsDir: '.claude/commands/bmad/bmm',
    agentsDir: '.claude/commands/bmad/bmm/agents',
    workflowsDir: '.claude/commands/bmad/bmm/workflows',
  },
  cursor: {
    name: 'Cursor',
    commandsDir: '.cursor/commands/bmad/bmm',
    agentsDir: '.cursor/commands/bmad/bmm/agents',
    workflowsDir: '.cursor/commands/bmad/bmm/workflows',
  },
  windsurf: {
    name: 'Windsurf',
    commandsDir: '.windsurf/workflows/bmad/bmm',
    agentsDir: '.windsurf/workflows/bmad/bmm/agents',
    workflowsDir: '.windsurf/workflows/bmad/bmm/workflows',
  },
};

// Detect installed IDEs
function detectIDEs() {
  const detected = [];
  for (const [id, config] of Object.entries(IDE_CONFIGS)) {
    const baseDir = config.commandsDir.split('/').slice(0, 2).join('/');
    if (fs.existsSync(path.join(PROJECT_ROOT, baseDir))) {
      detected.push(id);
    }
  }
  return detected;
}

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

// Create agent wrapper
function createAgentWrapper(ide, agent) {
  const ideConfig = IDE_CONFIGS[ide];
  const content = `---
name: '${agent.name}'
description: '${agent.description}'
---
You must fully embody this agent's persona and follow all activation instructions exactly as specified. NEVER break character until given an exit command.

<agent-activation CRITICAL="TRUE">
1. LOAD the FULL agent file from @_bmad/bmm/agents/${agent.file}
2. READ its entire contents - this contains the complete agent persona, menu, and instructions
3. Execute ALL activation steps exactly as written in the agent file
4. Follow the agent's persona and menu system precisely
5. Stay in character throughout the session
</agent-activation>
`;
  writeFile(path.join(PROJECT_ROOT, ideConfig.agentsDir, agent.wrapperFile), content);
}

// Create workflow wrapper
function createWorkflowWrapper(ide, workflow) {
  const ideConfig = IDE_CONFIGS[ide];
  const content = `---
description: '${workflow.description}'
---

IT IS CRITICAL THAT YOU FOLLOW THIS COMMAND: LOAD the FULL @_bmad/bmm/workflows/${workflow.target}, READ its entire contents and follow its directions exactly!
`;
  writeFile(path.join(PROJECT_ROOT, ideConfig.workflowsDir, workflow.wrapperFile), content);
}

// Agent definitions
const AGENTS = [
  {
    name: 'elliot',
    description: 'Elliot - Senior coding mentor',
    file: 'elliot.agent.yaml',
    wrapperFile: 'elliot.md',
  },
  {
    name: 'pm',
    description: 'PM - Product Manager',
    file: 'pm.agent.yaml',
    wrapperFile: 'pm.md',
  },
];

// Workflow definitions
const WORKFLOWS = [
  {
    name: 'create-prd',
    description: 'Create a new PRD through collaborative discovery',
    target: 'prd/workflow-create-prd.md',
    wrapperFile: 'create-prd.md',
  },
  {
    name: 'edit-prd',
    description: 'Edit an existing PRD',
    target: 'prd/workflow-edit-prd.md',
    wrapperFile: 'edit-prd.md',
  },
  {
    name: 'validate-prd',
    description: 'Validate a PRD for completeness',
    target: 'prd/workflow-validate-prd.md',
    wrapperFile: 'validate-prd.md',
  },
  {
    name: 'project',
    description: 'Create project context and architecture docs',
    target: 'project/workflow.md',
    wrapperFile: 'project.md',
  },
  {
    name: 'plan-epics',
    description: 'Break down requirements into feature groups and work units',
    target: '3-solutioning/plan-epics/workflow.md',
    wrapperFile: 'plan-epics.md',
  },
];

console.log('\n🧭 BMAD Mentor Installer\n');

// Detect or get IDE from args
let targetIDEs = [];
const args = process.argv.slice(2);
const ideArg = args.find(arg => arg.startsWith('--ide='));
if (ideArg) {
  const ides = ideArg.split('=')[1].split(',');
  targetIDEs = ides.filter(ide => IDE_CONFIGS[ide]);
} else {
  // Auto-detect
  targetIDEs = detectIDEs();
  if (targetIDEs.length === 0) {
    // Default to claude-code if nothing detected
    targetIDEs = ['claude-code'];
    console.log('No IDE detected, defaulting to Claude Code.');
    console.log('Use --ide=cursor or --ide=windsurf for other IDEs.\n');
  }
}

console.log(`Installing for: ${targetIDEs.map(ide => IDE_CONFIGS[ide].name).join(', ')}\n`);

// 1. Copy content files to _bmad/
console.log('📦 Copying content files to _bmad/bmm/...');
mkdirp(path.join(PROJECT_ROOT, '_bmad/bmm/agents'));
mkdirp(path.join(PROJECT_ROOT, '_bmad/bmm/workflows'));

const srcDir = path.join(__dirname, 'src');
copyDir(path.join(srcDir, 'agents'), path.join(PROJECT_ROOT, '_bmad/bmm/agents'));
copyDir(path.join(srcDir, 'workflows'), path.join(PROJECT_ROOT, '_bmad/bmm/workflows'));

// 2. Create IDE command wrappers for each selected IDE
for (const ide of targetIDEs) {
  const ideConfig = IDE_CONFIGS[ide];
  console.log(`\n📋 Creating ${ideConfig.name} command wrappers...`);

  mkdirp(path.join(PROJECT_ROOT, ideConfig.agentsDir));
  mkdirp(path.join(PROJECT_ROOT, ideConfig.workflowsDir));

  for (const agent of AGENTS) {
    createAgentWrapper(ide, agent);
  }

  for (const workflow of WORKFLOWS) {
    createWorkflowWrapper(ide, workflow);
  }
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
console.log('\nSupported IDEs: claude-code, cursor, windsurf');
console.log('Usage: npx bmad-mentor --ide=cursor');
console.log('\nRestart your IDE to use the new commands.\n');
