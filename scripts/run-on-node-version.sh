#! /bin/bash

# Thanks to Night Train:
# https://stackoverflow.com/questions/48250235/how-to-setup-travis-to-skip-script-on-particular-nodejs-version
# https://docs.travis-ci.com/user/customizing-the-build/#Implementing-Complex-Build-Steps
#
# To use this, create this file (e.g. under scripts folder: ./scripts/run-on-node-version.sh)
# and give it execution permission: chmod ugo+x scripts/run-on-node-version.sh
# Then you can use it in CI configurations, e.g. .travis.yml:
#   - ./scripts/run-on-node-version.sh latest "npm install --no-save coveralls && npm run coveralls"

if [ $1 = 'latest' ]; then
  target_version=$(npm info node version);
else
  target_version=$1;
fi
node_version=$(node -v);
if [ ${node_version:1:1} = ${target_version:0:1} ]; then
  echo "Detected ${node_version}, satisfying ${target_version}. Executing command";
  eval $2;
else
  echo "NodeJS ${node_version} instead of latest (${target_version:0:1}) is detected. Skipping command";
fi
