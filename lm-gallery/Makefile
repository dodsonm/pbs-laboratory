# TODO: Need some kind of auto-detection when a new less file is added.
# Right now, you have to manually compile lessc and run make again
# before the watcher picks it up. You also have to manually create folders
# before the compiler can write to them.

# TODO: add minifying

NODE_DEPENDENCIES = coffee-script@1.6.1 less@1.3.3 supervisor@0.5.2
LESSC = node_modules/.bin/lessc
SUPERVISOR = node_modules/.bin/supervisor
COFFEEC = node_modules/.bin/coffee
LESS_ROOT = less
LESS_FLAGS = -x
CSS_ROOT = css
COFFEE_ROOT = coffee
COFFEE_FLAGS = -wco
JS_ROOT = js
CSS_FILES = $(shell find $(CSS_ROOT) -name *.css -print)

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
