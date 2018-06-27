#!/usr/bin/env bash
set -e

pwd
ls -la

# Install beautifiers
pip install black

# Build docs
npm install
npm run docs

# Build website
cd website/
npm install
npm run build
