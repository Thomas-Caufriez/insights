#!/bin/bash
git config core.hooksPath .githooks
chmod +x .githooks/post-commit
chmod +x .githooks/pre-push
echo "Hooks configurés ✅"
