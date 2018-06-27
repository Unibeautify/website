#!/usr/bin/env bash
set -e

npm install
npm run docs
cd website/
npm install
npm run build
