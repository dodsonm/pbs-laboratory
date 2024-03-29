# Includes a watcher for less files.
#
# PREREQUISITE: Node.js, BASH shell
#
# NOTE: You must have both a less & its corresponding css file in place before the
# watcher will pick it up.
#
# NOTE: Node dependencies are installed locally into the project
#
# TODO: add js minifying

HTML5_BP_REPO = git@github.com:dodsonm/html5-boilerplate.git
WEB_ROOT = $(CURDIR)/website

NODE_DEPENDENCIES = coffee-script@1.6.1 less@1.3.3 supervisor@0.5.2 jamjs@0.2.15
JAM_DEPENDENCIES = jquery jquery-ui underscore backbone bootstrap

JAMPM = $(CURDIR)/node_modules/.bin/jam
SUPERVISOR = $(CURDIR)/node_modules/.bin/supervisor

# less
LESSC = $(CURDIR)/node_modules/.bin/lessc
LESS_FLAGS = -x#--yui-compress
LESS_ROOT = $(WEB_ROOT)/less
CSS_ROOT = $(WEB_ROOT)/css
CSS_FILES = $(shell find $(CSS_ROOT) -name *.css -print)

# coffee
COFFEEC = $(CURDIR)/node_modules/.bin/coffee
COFFEE_FLAGS = -wco
COFFEE_ROOT = coffee
JS_ROOT = js


build: css
#core node_modules js_modules
#css

clean:
	rm -rf website node_modules

core:
	git clone $(HTML5_BP_REPO) tmp
	cd tmp; git archive HEAD --format zip --output ../tmp.zip;
	rm -rf tmp/
	unzip tmp.zip -d $(WEB_ROOT)
	rm -f tmp.zip
	mkdir $(WEB_ROOT)/less

node_modules:
	npm install $(NODE_DEPENDENCIES)

js_modules:
	cd $(WEB_ROOT); $(JAMPM) install $(JAM_DEPENDENCIES)

css: $(CSS_FILES)

$(CSS_ROOT)/%.css: $(LESS_ROOT)/%.less
	$(LESSC) $(LESS_FLAGS) $< > $@

watcher-less:
	@$(SUPERVISOR) -q -w $(LESS_ROOT) -e less -n exit -x make --

watcher-coffee:
	@$(COFFEEC) $(COFFEE_FLAGS) $(JS_ROOT) $(COFFEE_ROOT)
