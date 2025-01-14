CONFIG=./config/sandbox_gemini.cfg
EXCHANGE=gemini
CURRENCY=USD


runconfig: build ## Clean and make target, run target
	python3 -m algocoin --config=$(CONFIG)

run:  clean build  ## Clean and make target, run target
	python3 -m algocoin --live --verbose=$(VERBOSE) --exchange=$(EXCHANGE)

sandbox: build  ## Clean and make target, run target
	python3 -m algocoin --sandbox --verbose=$(VERBOSE) -exchange=$(EXCHANGE)

backtest_config: ## Clean and make target, run backtest
	python3 -m algocoin --config=./config/backtest_gemini.cfg

backtest: ## Clean and make target, run backtest
	python3 -m algocoin --backtest --verbose=$(VERBOSE) --exchange=$(EXCHANGE)

backtest_inline:  ## Clean and make target, run backtest, plot in terminal
	bash -c "export MPLBACKEND=\"module://itermplot\";	export ITERMPLOT=\"rv\"; python3 -m algocoin backtest $(VERBOSE) $(EXCHANGE)"

boost:  ## Install boost python dependencies on os x with homebrew
	brew install boost boost-python3
	sudo ln -s /usr/local/lib/libboost_python37.dylib /usr/local/lib/libboost_python.dylib

buildext: ## build the package extensions
	python3 setup.py build_ext

build: ## build the package
	python3 setup.py build

install: ## install the package
	python3 setup.py install

dist:  ## dist to pypi
	python3 setup.py sdist upload -r pypi

js:  ## build the js
	yarn
	yarn build

tests: ## Clean and Make unit tests
	python3 -m pytest -v ./algocoin/tests --cov=algocoin
	yarn test

test: clean build lint ## run the tests for travis CI
	@ python3 -m pytest -v ./algocoin/tests --cov=algocoin
	yarn test

test_verbose: ## run the tests with full output
	@ python3 -m pytest -vv ./algocoin/tests --cov=algocoin
	yarn test

lint: ## run linter
	flake8 algocoin 
	yarn lint

annotate: ## MyPy type annotation check
	mypy -s algocoin 

annotate_l: ## MyPy type annotation check - count only
	mypy -s algocoin | wc -l 

docs:  ## Build the sphinx docs
	make -C docs html

clean: ## clean the repository
	find . -name "__pycache__" | xargs rm -rf
	find . -name "*.pyc" | xargs rm -rf
	rm -rf .coverage cover htmlcov logs build dist *.egg-info
	find . -name "*.so"  | xargs rm -rf
	make -C ./docs clean

# Thanks to Francoise at marmelab.com for this
.DEFAULT_GOAL := help
help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

print-%:
	@echo '$*=$($*)'

.PHONY: clean run runconfig sandbox backtest backtest_config test tests test_verbose help install docs data dist js build buildext boost
