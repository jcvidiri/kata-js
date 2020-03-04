NAME = kata-js
BUILD_DIR = ./build
ESLINT = eslint
BABEL = babel
BABEL_WATCH = babel-watch
MOCHA = mocha
MAINJS_FILE = index.js

start:
	@node $(BUILD_DIR)/$(MAINJS_FILE)
build:
	@make clean
	@mkdir -p $(BUILD_DIR)
	@$(BABEL) ./src -s -D -d $(BUILD_DIR)
clean:
	@rm -rf $(BUILD_DIR)
code-style:
	@$(ESLINT) --fix ./src
test:
	@$(MOCHA) --require babel-register $(shell find ./tests -name '*spec.js')

.PHONY: build code-style test