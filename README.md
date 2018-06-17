nebcontractchecker
===================

static checker for nebulas javascript smart contract

# Dependencies

* nodejs 8+

# Build

* `npm install`
* `npm install -g browserify flow-bin`
* `browserify index.js -o js/nebcheck.bundle.js`
* cd to `background` and run `flow start` and run `node index.js`

# Usage

* run background/index.js using node.js
* visit index.html
