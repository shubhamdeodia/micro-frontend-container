
#!/usr/bin/env node
"use strict";

const path = require('path');
const bootstrap = require('commitizen/dist/cli/git-cz').bootstrap;

bootstrap({
  cliPath: path.join(__dirname, '../../node_modules/commitizen'),
  // this is new
  config: {
    "commitizen": {
      "path": "./node_modules/@digitalroute/cz-conventional-changelog-for-jira",
      "jiraLocation": "pre-description",
      "jiraPrepend": "[",
      "jiraAppend": "]"
    }
  }
});