#! /usr/bin/env bash

set -e
set -o pipefail

npm run test
mv -v ./playwright-report/* ./playwright-report-all/
