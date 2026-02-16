#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const PROJECT_ROOT = process.cwd();

// IDE configurations (all BMAD-supported platforms)
const IDE_CONFIGS = {
  // Recommended
  'claude-code': {
    name: 'Claude Code',
    preferred: true,
    category: 'cli',
    commandsDir: '.claude/commands/bmad/bmm',
    agentsDir: '.claude/commands/bmad/bmm/agents',
    workflowsDir: '.claude/commands/bmad/bmm/workflows',
    detectDir: '.claude',
  },
  cursor: {
    name: 'Cursor',
    preferred: true,
    category: 'ide',
    commandsDir: '.cursor/commands/bmad/bmm',
    agentsDir: '.cursor/commands/bmad/bmm/agents',
    workflowsDir: '.cursor/commands/bmad/bmm/workflows',
    detectDir: '.cursor',
  },
  windsurf: {
    name: 'Windsurf',
    preferred: true,
    category: 'ide',
    commandsDir: '.windsurf/workflows/bmad/bmm',
    agentsDir: '.windsurf/workflows/bmad/bmm/agents',
    workflowsDir: '.windsurf/workflows/bmad/bmm/workflows',
    detectDir: '.windsurf',
  },
  // Other IDEs
  cline: {
    name: 'Cline',
    preferred: false,
    category: 'ide',
    commandsDir: '.cline/commands/bmad/bmm',
    agentsDir: '.cline/commands/bmad/bmm/agents',
    workflowsDir: '.cline/commands/bmad/bmm/workflows',
    detectDir: '.cline',
  },
  opencode: {
    name: 'OpenCode',
    preferred: false,
    category: 'ide',
    commandsDir: '.opencode/commands/bmad/bmm',
    agentsDir: '.opencode/commands/bmad/bmm/agents',
    workflowsDir: '.opencode/commands/bmad/bmm/workflows',
    detectDir: '.opencode',
  },
  auggie: {
    name: 'Auggie',
    preferred: false,
    category: 'cli',
    commandsDir: '.auggie/commands/bmad/bmm',
    agentsDir: '.auggie/commands/bmad/bmm/agents',
    workflowsDir: '.auggie/commands/bmad/bmm/workflows',
    detectDir: '.auggie',
  },
  roo: {
    name: 'Roo Cline',
    preferred: false,
    category: 'ide',
    commandsDir: '.roo/commands/bmad/bmm',
    agentsDir: '.roo/commands/bmad/bmm/agents',
    workflowsDir: '.roo/commands/bmad/bmm/workflows',
    detectDir: '.roo',
  },
  rovo: {
    name: 'Rovo',
    preferred: false,
    category: 'ide',
    commandsDir: '.rovo/commands/bmad/bmm',
    agentsDir: '.rovo/commands/bmad/bmm/agents',
    workflowsDir: '.rovo/commands/bmad/bmm/workflows',
    detectDir: '.rovo',
  },
  'rovo-dev': {
    name: 'Rovo Dev',
    preferred: false,
    category: 'ide',
    commandsDir: '.rovo-dev/commands/bmad/bmm',
    agentsDir: '.rovo-dev/commands/bmad/bmm/agents',
    workflowsDir: '.rovo-dev/commands/bmad/bmm/workflows',
    detectDir: '.rovo-dev',
  },
  kiro: {
    name: 'Kiro',
    preferred: false,
    category: 'ide',
    commandsDir: '.kiro/commands/bmad/bmm',
    agentsDir: '.kiro/commands/bmad/bmm/agents',
    workflowsDir: '.kiro/commands/bmad/bmm/workflows',
    detectDir: '.kiro',
  },
  'github-copilot': {
    name: 'GitHub Copilot',
    preferred: false,
    category: 'ide',
    commandsDir: '.github/copilot/commands/bmad/bmm',
    agentsDir: '.github/copilot/commands/bmad/bmm/agents',
    workflowsDir: '.github/copilot/commands/bmad/bmm/workflows',
    detectDir: '.github',
  },
  codex: {
    name: 'Codex',
    preferred: false,
    category: 'cli',
    commandsDir: '.codex/commands/bmad/bmm',
    agentsDir: '.codex/commands/bmad/bmm/agents',
    workflowsDir: '.codex/commands/bmad/bmm/workflows',
    detectDir: '.codex',
  },
  qwen: {
    name: 'QwenCoder',
    preferred: false,
    category: 'ide',
    commandsDir: '.qwen/commands/bmad/bmm',
    agentsDir: '.qwen/commands/bmad/bmm/agents',
    workflowsDir: '.qwen/commands/bmad/bmm/workflows',
    detectDir: '.qwen',
  },
  gemini: {
    name: 'Gemini CLI',
    preferred: false,
    category: 'cli',
    commandsDir: '.gemini/commands/bmad/bmm',
    agentsDir: '.gemini/commands/bmad/bmm/agents',
    workflowsDir: '.gemini/commands/bmad/bmm/workflows',
    detectDir: '.gemini',
  },
  iflow: {
    name: 'iFlow',
    preferred: false,
    category: 'ide',
    commandsDir: '.iflow/commands/bmad/bmm',
    agentsDir: '.iflow/commands/bmad/bmm/agents',
    workflowsDir: '.iflow/commands/bmad/bmm/workflows',
    detectDir: '.iflow',
  },
  kilo: {
    name: 'KiloCoder',
    preferred: false,
    category: 'ide',
    commandsDir: '.kilo/commands/bmad/bmm',
    agentsDir: '.kilo/commands/bmad/bmm/agents',
    workflowsDir: '.kilo/commands/bmad/bmm/workflows',
    detectDir: '.kilo',
  },
  crush: {
    name: 'Crush',
    preferred: false,
    category: 'ide',
    commandsDir: '.crush/commands/bmad/bmm',
    agentsDir: '.crush/commands/bmad/bmm/agents',
    workflowsDir: '.crush/commands/bmad/bmm/workflows',
    detectDir: '.crush',
  },
  antigravity: {
    name: 'Google Antigravity',
    preferred: false,
    category: 'ide',
    commandsDir: '.antigravity/commands/bmad/bmm',
    agentsDir: '.antigravity/commands/bmad/bmm/agents',
    workflowsDir: '.antigravity/commands/bmad/bmm/workflows',
    detectDir: '.antigravity',
  },
  trae: {
    name: 'Trae',
    preferred: false,
    category: 'ide',
    commandsDir: '.trae/commands/bmad/bmm',
    agentsDir: '.trae/commands/bmad/bmm/agents',
    workflowsDir: '.trae/commands/bmad/bmm/workflows',
    detectDir: '.trae',
  },
};

// Detect installed IDEs
function detectIDEs() {
  const detected = [];
  for (const [id, config] of Object.entries(IDE_CONFIGS)) {
    if (fs.existsSync(path.join(PROJECT_ROOT, config.detectDir))) {
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

console.log('\n🧭 BMAD For Humans Installer\n');

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

console.log('\n✅ BMAD For Humans installed successfully!\n');
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
console.log('\nSupported IDEs:');
const preferred = Object.entries(IDE_CONFIGS).filter(([,c]) => c.preferred).map(([id]) => id).join(', ');
const others = Object.entries(IDE_CONFIGS).filter(([,c]) => !c.preferred).map(([id]) => id).join(', ');
console.log(`  Recommended: ${preferred}`);
console.log(`  Others: ${others}`);
console.log('\nUsage: npx bmad-for-humans --ide=cursor');
console.log('\nRestart your IDE to use the new commands.\n');
