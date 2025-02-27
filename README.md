# Threat Fabric test engineer assignment

## Generic requirements for both test frameworks

Make sure you have installed node v18+ as some dependencies need it.

Run this command to verify: `node -v`

Also make sure you have `npm` installed in your system.

Run `npm -v` to be able to install the packages.

### Install the packages

Clone this repository and run `npm i` to install the dependencies.

## Test implementation (API)

These tests are implemented with `supertest` and use `mocha` as the test framework. They are written in JS.

You can find the tests under the `test/` directory.

Visit this [link](https://www.npmjs.com/package/supertest) for more information on _supertest_. I choose this test framework as it's a lightweight one and quite easy to set up and run, making the whole process a bliss.

### Running the API tests

You can easily run the test collection by running `npm test`. This will trigger the Mocha test framework and will execute the test cases on the CLI.

### Test report

After the test run, two reports will be automatically created under `mochawesome-report`, one in html and another one in json format.

## Test implementation (UI tests)

These tests are implemented with `Playwright`, a popular and modern tool to write and debug e2e/UI tests. You can find the spec files under `playwright-tests`.

I chose this test framework as it is easy to set up and provides many features to make test actions and assertions a great and flawless experience. It is also a very good choice if you want to introduce it to other devs (non-QA profiles), as it provides a very similar experience to other tools that they are already used to, such as _Jest_.

### Running the Web tests

There are different ways of triggering these tests:

- Headed UI mode: Run `npm run play:open` This will open the `Playwright` app letting you to choose which spec to execute and inspect
- Headless mode: Run `npm run play:run` This will execute the specs from the CLI

### Test report

After running the tests in headless mode, a test report will be created in the `playwright-report` directory

### Notes

- `Playwright` tests are currently configured to run on Firefox only and with `1` retry for non-CI runs
- I am aware that I could write the API tests also using `Playwright`, but I used `supertest` to demonstrate that I am able to stand up another framework and not only `Playwright`. In case I needed to set up a test framework just to test APIs, `Playwright` might be an overkill as it brings in many capabilities with it. `supertest` is a lightweight framework designed to test APIs, so I believe it's a good choice for it, also because we may want to decouple UI and API tests in a bigger project.
- I also added two very simple CI pipelines using _Github Actions_ to run the API and web tests and make the test results available. This is also useful for me to see how the tests perform over time. Feel free to move on to the "Actions" section to see the CI runs and test reports.

### Improvements to be made

- X-browser testing: Include other browsers and devices in the project list to make sure the tests also pass for those
- Take care of flaky tests
- Find a healthy balance for parallel tests and workers as we want to have quick feedback but without affecting test reliability and being mindful of CI spending
