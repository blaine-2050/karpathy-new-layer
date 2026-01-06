# The New Software Layer

*A guide for scientists and engineers who have used ChatGPT but haven't followed the AI industry closely*

---

## Part 1: How This Document Was Made

This section shows the prompt that generated the timeline below. The entire project—document, demo server, and all—was created by giving these English-language instructions to Claude Code, an AI coding assistant.

### The Original Prompt

```markdown
You are a gifted writer with deep technical knowledge of computing up to 2023
when ChatGPT caught the public's attention. In addition you follow developments
at Anthropic, OpenAI, Google, DeepSeek, Moonshot and Qwen closely. You are also
familiar with Karpathy's role in AI over the last 15 years.
```

### What Karpathy said:

> "There's a new programmable layer of abstraction to master (in addition to the usual layers below) involving agents, subagents, their prompts, contexts, memory, modes, permissions, tools, plugins, skills, hooks, MCP, LSP, slash commands, workflows, IDE integrations, and a need to build an all-encompassing mental model for strengths and pitfalls of fundamentally stochastic, fallible, unintelligible and changing entities suddenly intermingled with what used to be good old fashioned engineering."

### Additional guidance provided:

```markdown
A broader perspective:
- The phrase 'the usual layers' could be extended with git, GitHub, and Unix
  terminals for most readers who began engaging with ChatGPT in late 2022.
- Mention some of the important models: GPT-3, DeepSeek, various versions of
  Claude including Opus 4.5 and others you think are milestones.

The task:
Using search and writing tools, write a timeline of the adoption of all the
tools and key models between November 2022 and the end of 2025.

- There should be at least one entry for each of the terms listed above.
- Each term must include a short but useful definition for a scientist or
  engineer with years of experience, but no experience with AI except for
  casually using ChatGPT on occasions.
- Do not assume your reader is a fan of AI or LLMs. You will lose credibility
  if you don't mention problems and concerns.
```

### Tools used

```markdown
- Claude Code with access to the Exa MCP server for web search
- Standard file reading, writing, and terminal tools
```

---

## Part 2: Who Is Andrej Karpathy?

Andrej Karpathy (born 1986) is one of the most influential figures in modern AI. He earned his PhD at Stanford working on neural networks for computer vision under Fei-Fei Li. He was a founding member of OpenAI (2016-2017), then served as Director of AI at Tesla (2017-2022) leading the Autopilot computer vision team. He returned briefly to OpenAI (2023-2024) before founding Eureka Labs, an AI education company. His educational videos on YouTube and his Stanford course CS231n have taught deep learning to hundreds of thousands. When Karpathy comments on AI, practitioners listen.

---

## Part 3: The Timeline

### Foundation Layer: What Karpathy Assumes You Know

Before diving into AI-specific tools, here are the "usual layers below" that most software professionals already use:

<div class="term-entry">

**Unix Terminals** *(1970s)*

A text-based interface for interacting with a computer's operating system. You type commands; the computer executes them.

*Why it matters now:* Most AI coding tools run in terminals. Claude Code, for instance, is a command-line application. Understanding basic shell commands (cd, ls, grep, pipes) is prerequisite knowledge for using modern AI development tools.

</div>

<div class="term-entry">

**Git** *(2005)*

A distributed version control system created by Linus Torvalds for managing source code. It tracks changes to files over time and enables multiple people to collaborate without overwriting each other's work.

*Why it matters now:* AI coding assistants frequently interact with git—creating commits, reading diffs, understanding project history. If an AI tool "understands your codebase," it often does so partly through git history.

</div>

<div class="term-entry">

**GitHub** *(2008)*

A web-based platform built on git that hosts code repositories and adds collaboration features like pull requests, issues, and code review.

*Why it matters now:* GitHub became the training ground for AI code models. GitHub Copilot emerged directly from this platform. Most AI coding workflows assume GitHub (or similar platforms like GitLab) for code hosting and collaboration.

</div>

---

### The Timeline: November 2022 – December 2025

#### 2022

**November 30, 2022: ChatGPT Released**

OpenAI releases ChatGPT, a conversational AI assistant based on GPT-3.5. It becomes the fastest-growing consumer technology product in history, reaching 100 million users within two months.

<div class="term-entry">

**Large Language Model (LLM)**

A neural network trained on vast amounts of text (books, websites, code) that learns to predict the next word in a sequence. This simple objective, scaled up enormously, produces systems that can write essays, answer questions, and generate code. GPT-3 (released June 2020) was trained on 175 billion parameters and 45 terabytes of text.

</div>

<div class="term-entry">

**Prompts**

The text you give to an LLM to get a response. Prompt engineering—the craft of writing effective instructions—became a new skill. Unlike traditional programming where syntax errors produce clear failures, prompts operate in a fuzzy space where small wording changes can dramatically alter outputs.

</div>

<div class="term-entry">

**Context**

The information available to the model when generating a response. Early ChatGPT had a ~4,000 token context window (roughly 3,000 words). Everything you wanted the model to "know" had to fit in that window. This limitation drove much subsequent innovation.

</div>

**First signs of trouble**: Users quickly discovered "hallucinations"—confident-sounding responses that were factually wrong. The model would cite non-existent papers, invent historical events, and produce plausible-looking code that didn't work. This remains an unsolved problem.

---

#### 2023

**March 2023: Claude (First Version) and GPT-4**

Anthropic releases Claude in limited trials. Founded by former OpenAI researchers Dario and Daniela Amodei, Anthropic positioned itself as focused on AI safety—building AI systems that are "helpful, harmless, and honest."

Days later, OpenAI releases GPT-4, their first multimodal model (accepting both text and images). GPT-4 demonstrated human-level performance on many professional exams, including passing a simulated bar exam in the top 10%.

**April 2023: Cursor IDE Launches**

Cursor releases version 0.2.0, rebuilding their editor on top of VSCodium (an open-source VS Code variant). Their pitch: an IDE designed from the ground up for "pair-programming with AI."

<div class="term-entry">

**IDE Integrations**

Ways to connect AI capabilities directly into code editors like VS Code, JetBrains IDEs, or Cursor. Rather than switching to a browser to use ChatGPT, developers could get AI assistance inside their coding environment.

</div>

**November 2023: DeepSeek Coder**

DeepSeek, a Chinese AI company founded by quantitative trading firm High-Flyer, releases DeepSeek Coder. This marked the beginning of serious competition from outside the US/UK AI labs.

**The concern about concentration**: By late 2023, critics noted that AI development was concentrated in a handful of well-funded companies (OpenAI, Anthropic, Google DeepMind). The capital requirements—hundreds of millions for training runs—created barriers to entry. DeepSeek would later challenge this assumption.

---

#### 2024

**Throughout 2024: The Agent Concept Emerges**

The AI industry shifts from chatbots (respond to one query) toward agents (take actions over multiple steps to accomplish goals).

<div class="term-entry">

**Agent**

An AI system that can take actions in the world—not just generate text, but execute code, browse the web, read files, call APIs. An agent might receive the task "fix this bug" and autonomously: read relevant code, identify the problem, write a fix, run tests, and submit a pull request.

</div>

<div class="term-entry">

**Subagents**

Agents that work for other agents. A main agent might spawn specialized subagents for different subtasks—one for research, one for coding, one for testing. This mirrors how human teams divide labor.

</div>

<div class="term-entry">

**Tools**

Specific capabilities an agent can invoke—reading files, searching the web, executing code, calling external services. Tools extend what an AI can do beyond pure text generation.

</div>

<div class="term-entry">

**Permissions**

Controls on what actions an agent can take without human approval. Can it write files? Execute shell commands? Make API calls that cost money? Permission systems became crucial as agents gained real-world capabilities.

</div>

<div class="term-entry">

**Modes**

Different operational configurations for AI assistants. A "planning mode" might analyze a task without taking action. An "execution mode" might act autonomously. Modes let users control how much latitude they give the AI.

</div>

**November 25, 2024: Model Context Protocol (MCP) Released**

Anthropic open-sources MCP, a protocol for connecting AI assistants to external data sources and tools.

<div class="term-entry">

**MCP (Model Context Protocol)**

A standardized way for AI systems to access databases, APIs, file systems, and other data sources. Before MCP, every integration was custom. MCP aims to be a universal connector—write an MCP server once, and any MCP-compatible AI can use it.

</div>

<div class="term-entry">

**LSP (Language Server Protocol)**

Released by Microsoft in 2016, LSP solved a similar problem for code editors. Before LSP, every editor needed custom integration for every programming language. LSP standardized how editors communicate with language-specific tools (autocomplete, error checking, go-to-definition). MCP is conceptually similar but for AI-to-data connections rather than editor-to-language connections.

</div>

**December 2024: DeepSeek-V3**

DeepSeek releases V3, a large language model that achieved competitive performance at a fraction of the training cost claimed by US labs. This sparked intense debate about whether AI development truly required billions in capital.

---

#### 2025

**January 2025: DeepSeek-R1 Shocks the Industry**

DeepSeek releases R1, the first open-source model matching OpenAI's o1 on reasoning benchmarks. More remarkably, they claimed training costs of under $6 million—a fraction of competitor estimates.

**The efficiency question**: DeepSeek's success raised uncomfortable questions. Were US labs inefficient? Were cost estimates inflated? Or was DeepSeek benefiting from unreported subsidies? The debate remains unresolved, but DeepSeek demonstrated that the AI capability frontier wasn't exclusively American.

**February 24, 2025: Claude Sonnet 3.7 and Claude Code**

Anthropic releases Claude Sonnet 3.7, their first "hybrid reasoning model," and Claude Code, a command-line tool for agentic coding.

<div class="term-entry">

**Claude Code**

A terminal application that connects to Claude and can read your codebase, write files, execute commands, and run tests. Unlike IDE integrations that assist with individual lines of code, Claude Code operates at the project level—understanding architecture, making multi-file changes, running builds.

</div>

<div class="term-entry">

**Skills**

Pre-packaged capabilities that extend what an AI assistant can do. In Claude Code, skills are collections of slash commands, agents, and configurations bundled for specific tasks. A "code review" skill might include prompts, workflows, and tool configurations optimized for reviewing pull requests.

</div>

<div class="term-entry">

**Hooks**

Custom actions triggered by specific events. When Claude Code reads a file, commits code, or executes a command, hooks can run additional logic—enforcing code standards, logging actions, or integrating with external systems.

</div>

<div class="term-entry">

**Slash Commands**

Shortcuts triggered by typing "/" followed by a command name. `/commit` might stage and commit changes. `/review` might analyze code for issues. Slash commands provide quick access to complex workflows.

</div>

<div class="term-entry">

**Workflows**

Sequences of actions that accomplish larger goals. A deployment workflow might run tests, build artifacts, update version numbers, create a release, and deploy to production. AI assistants increasingly orchestrate these multi-step processes.

</div>

<div class="term-entry">

**Memory**

The ability for AI systems to retain information across conversations. Without memory, each conversation starts fresh. Memory systems store user preferences, project context, and past interactions. This remains technically challenging—what to remember, how long to keep it, how to retrieve relevant memories.

</div>

**May 22, 2025: Claude 4 Released**

Anthropic releases Claude 4 (Sonnet 4 and Opus 4), showing significant improvements in coding, agents, and computer use. Claude Opus 4 achieves state-of-the-art results on software engineering benchmarks.

**September 29, 2025: Claude Sonnet 4.5**

Further improvements, particularly for agents and long-running coding tasks.

**October 29, 2025: Cursor 2.0 and Composer**

Cursor releases version 2.0 with "Composer," their own frontier model optimized for low-latency coding. The interface shifts from file-centric to agent-centric—users focus on outcomes while agents handle implementation details.

**November 24, 2025: Claude Opus 4.5**

Anthropic's most capable model to date. Pricing drops to $5/$25 per million tokens, making Opus-tier capabilities more accessible.

---

## The Concerns You Should Know About

This timeline would be incomplete without acknowledging serious problems:

### Hallucinations Remain Unsolved
LLMs still confidently generate false information. They cite papers that don't exist, produce code with subtle bugs, and state incorrect facts with authoritative tone. No amount of prompt engineering reliably prevents this.

### The Black Box Problem
We don't fully understand why these models work. They're trained on data, they produce useful outputs, but the internal reasoning is opaque. When an AI makes a mistake, debugging is guesswork. Traditional software fails in predictable ways; AI fails in surprising ones.

### Environmental and Economic Costs
Training frontier models requires enormous compute resources. The environmental impact of AI datacenters is substantial and growing. The capital concentration in a handful of companies raises questions about who controls this technology.

### Job Displacement
AI coding assistants genuinely increase productivity. The implications for employment are unclear. Will demand for software grow to absorb displaced workers? Will new roles emerge? The honest answer: we don't know.

### Security and Trust
Giving AI agents write access to codebases, permission to execute commands, and ability to make API calls creates attack surfaces. Prompt injection—tricking an AI into executing malicious instructions—is a demonstrated vulnerability.

### Dependence on Changing Systems
Models get updated. APIs change. Pricing shifts. Building on AI systems means building on foundations that evolve monthly. The "stochastic, fallible, unintelligible and changing entities" Karpathy describes aren't stable platforms—they're moving targets.

---

## What This Means for You

If you're a scientist or engineer who has used ChatGPT casually, here's the practical takeaway:

A new layer of tooling now sits between you and your work. This layer involves AI assistants that can take actions (agents), standardized protocols for connecting AI to data (MCP), integrated development environments designed around AI collaboration (Cursor, Claude Code), and a vocabulary of concepts (prompts, context, memory, tools, hooks, skills) that didn't exist in professional software development three years ago.

You don't need to master all of this immediately. But understanding that this layer exists—and that it's fundamentally different from traditional software—is the first step toward using it effectively.

The tools are powerful. They are also stochastic (outputs vary even for identical inputs), fallible (they make mistakes), unintelligible (we can't fully explain their behavior), and changing (updated frequently). Working with them requires a different mental model than working with deterministic software.

That mental model is what Karpathy is pointing at. Building it takes time and experimentation. This timeline is a starting point.

---

## Key Dates Summary

| Date | Event |
|------|-------|
| 1970s | Unix terminals established |
| 2005 | Git created |
| 2008 | GitHub founded |
| 2016 | Language Server Protocol (LSP) released |
| June 2020 | GPT-3 released |
| June 2021 | GitHub Copilot technical preview |
| June 2022 | GitHub Copilot general availability |
| Nov 30, 2022 | ChatGPT released |
| March 2023 | Claude (first version), GPT-4 released |
| April 2023 | Cursor 0.2.0 |
| Nov 2023 | DeepSeek Coder released |
| Nov 25, 2024 | Model Context Protocol (MCP) released |
| Dec 2024 | DeepSeek-V3 released |
| Jan 2025 | DeepSeek-R1 released |
| Feb 24, 2025 | Claude Sonnet 3.7, Claude Code released |
| May 22, 2025 | Claude 4 released |
| Sep 29, 2025 | Claude Sonnet 4.5 released |
| Oct 29, 2025 | Cursor 2.0, Composer released |
| Nov 24, 2025 | Claude Opus 4.5 released |

---

## Part 4: A Working Example

This section demonstrates the concepts above with a self-referential demo: a web server that shows the files used to create it.

### What the demo shows

1. **Self-reference**: The website displays the very Markdown files that specified its creation
2. **AI-generated code**: The Node.js server was written by Claude Code from English instructions
3. **Claude Code components in action**:
   - `CLAUDE.md` - project context file
   - `.claude/skills/` - a skill definition for starting the server
   - `.claude/hooks.md` - example hook configurations

### File structure

```
deploy/
├── karpathy-new-layer.md           # This document
├── CLAUDE.md                       # Project context for Claude Code
├── .claude/
│   ├── skills/
│   │   └── start-demo-server.md    # Skill to launch the server
│   └── hooks.md                    # Hook examples
└── demo-server/
    ├── package.json
    └── server.js                   # Express server
```

### Running the demo locally

```bash
cd demo-server
npm install
npm start
# Open http://localhost:3000
```

### What you'll see

- **Home**: Overview of what the demo demonstrates
- **Timeline**: This document rendered as HTML
- **Specifications**: The Markdown files that defined everything (expandable)
- **Files**: Directory listing of the entire project

### The point

The "source code" for this project is largely English text in Markdown files. Claude Code read these specifications and generated working software. This is the "new programmable layer" Karpathy describes—where natural language becomes a programming interface.

---

*Written December 2025*
