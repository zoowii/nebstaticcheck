nebcontractchecker
===================

static checker for nebulas javascript smart contract

# Dependencies

* nodejs 8+

# Build

* `npm install`
* `npm install -g browserify flow-bin pm2`
* `browserify index.js -o js/nebcheck.bundle.js`
* cd to `background` and run `flow start` and run `pm2 start index.js --name "nebstaticcheck-backend"`

# Usage

* run background/index.js using node.js
* visit index.html
