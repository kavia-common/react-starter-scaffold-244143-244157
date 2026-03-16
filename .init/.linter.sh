#!/bin/bash
cd /home/kavia/workspace/code-generation/react-starter-scaffold-244143-244157/react_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

