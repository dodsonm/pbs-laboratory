# STATIC BUILDS
# Includes a watcher for less files.
#
# PREREQUISITE: Node.js
#
# You must have both a less & its corresponding css file in place before the
# watcher will pick it up.
#
# Node dependencies are installed locally into the project
#
# TODO: add js minifying

NODE_DEPENDENCIES = coffee-script@1.6.1 less@1.3.3 supervisor@0.5.2
SUPERVISOR = node_modules/.bin/supervisor
# less
LESSC = node_modules/.bin/lessc
LESS_FLAGS = -x#--yui-compress
LESS_ROOT = less
CSS_ROOT = css
CSS_FILES = $(shell find $(CSS_ROOT) -name *.css -print)

# coffee
COFFEEC = node_modules/.bin/coffee
COFFEE_FLAGS = -wco
COFFEE_ROOT = coffee
JS_ROOT = js


build: node_modules css

node_modules:
	npm install $(NODE_DEPENDENCIES)

css: $(CSS_FILES)

$(CSS_ROOT)/%.css: $(LESS_ROOT)/%.less
	$(LESSC) $(LESS_FLAGS) $< > $@

watcher-less:
	@$(SUPERVISOR) -q -w $(LESS_ROOT) -e less -n exit -x make --

watcher-coffee:
	@$(COFFEEC) $(COFFEE_FLAGS) $(JS_ROOT) $(COFFEE_ROOT)
