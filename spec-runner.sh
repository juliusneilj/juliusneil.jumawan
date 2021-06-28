#!/bin/bash
./node_modules/.bin/wdio wdio.conf.js --spec $1

# To run spec file, type spec-runner.sh [spec/feature file]
# ./spec-runner.sh features/test.feature