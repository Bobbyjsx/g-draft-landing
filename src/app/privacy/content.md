---
title: "Privacy Policy"
---

# Privacy Policy

**Last Updated: May 18, 2026**

g-draft is built with a "Privacy-First" architecture. We believe your code is your business, and our tool is designed to keep it that way.

## 1. Local-First Processing
g-draft operates primarily as a local CLI and TUI tool. All analysis of your Git diffs, processing of commit messages, and generation of PR descriptions happens on your local machine or through the AI agents you explicitly configure.

## 2. No Source Code Collection
g-draft does not have a centralized backend that stores your source code. We do not collect, store, or sell your source code or Git history.

## 3. Persistent Local Storage
g-draft stores logs, cache, and configuration data locally in your home directory (typically `~/.gdraft/`). This data remains on your machine and is never uploaded to our servers.

## 4. Third-Party AI Providers
g-draft is a "Bring Your Own Agent" (BYOA) tool. When you use g-draft with a provider like Claude, Gemini, or OpenAI, your code diffs are sent to those respective services for processing. 

**Important:** Your use of these AI providers is governed by their respective privacy policies and terms of service. We recommend reviewing the privacy settings of your chosen AI agent.

## 5. Usage Telemetry (Future)
To help us improve the tool, we may implement usage telemetry in the future using **PostHog**. If enabled, this would collect anonymized data such as:
- Command usage (e.g., `gdraft commit`, `gdraft review`)
- AI generation performance (duration in milliseconds)
- Error rates and specific error messages
- Technical environment metadata (OS version, Node.js version, terminal type)

**Note:** We will NEVER collect your source code, Git diffs, or prompts through telemetry. Telemetry will be opt-in or clearly configurable via your local settings.

## 6. Changes to This Policy
We may update this policy from time to time as the tool evolves. Any changes will be reflected by updating the "Last Updated" date at the top of this page.
