#! /usr/bin/env bash

set -e
set -o pipefail

npm run init
mv -v ./test-results/* ./test-results-all/
npm run others
mv -v ./test-results/* ./test-results-all/
npm run cleanup
mv -v ./test-results/* ./test-results-all/
npm run usecase
mv -v ./test-results/* ./test-results-all/