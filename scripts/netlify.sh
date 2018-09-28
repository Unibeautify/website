#!/usr/bin/env bash
set -e

pwd
ls -la

# Install beautifiers
pip install black
pip install --upgrade sqlparse
pip install yapf

# Build docs
yarn install
yarn docs

# Build website
cd website/
yarn install
yarn build
