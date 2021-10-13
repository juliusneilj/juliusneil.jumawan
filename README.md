# Automation Assessment

1. What other possible scenario’s would you suggest for testing the Jupiter Toys application?
   - Purchase products with Start Shopping entry point.
   - Checkout all items in cart.
   - Remove one or more items in cart.
   - Remove all items in cart.
   - Increase product quantity in cart and checkout.
   - Decrease product quantity in cart and checkout.
   - Login and checkout any products.
   - Login and checkout previously added products in cart.
   - Remove one or more items in cart and then checkout.
2. Jupiter Toys is expected to grow and expand its offering into books, tech, and modern art. We are expecting the of tests will grow to a very large number.
   - What approaches could you used to reduce overall execution time?
     - To reduce execution, we can integrate the framework with continuious integration(CI) tools like Buildkite or Jenkins so we can schedule test executions anytime that will help improve the efficiency of test executions. Parallel test executions also help reduce the execution time as multiple tests can be run on the same time. Lastly and more importantly, using dynamic/smart waits instead of pause commands help us lessen test execution by great amounts.
   - How will your framework cater for this?
     - As my framework uses webdriverio and cucumber, CI tools integration, parallel test executions and smart waits are easily configurable in the framework to handle different requirements. Webdriverio especially is adaptable to smart waits as explicit waiting is already built-in to Webdriverio commands. Webdriverio also has a straightforward setup when setting up parallet tests and CI tools. Built-in support is also provided when we integrate our framework to cloud services.
3. Describe when to use a BDD approach to automation and when NOT to use BDD
   - BDD approach is best to use in automation when feature requirements are also written in BDD. Non-technical stakeholders can help us create feature files that we need to test and when the application to test is ready, we can fill in the steps to do the desired actions. Since BDD is written in simple language, everyone in the project will have an idea on the tests that are executed and they can advise if we have missing tests that they want to cover.
   - BDD is not the best approach when tests are complicated and are difficult to describe in BDD.

# How to Setup and Run Test

After cloning and opening in Visual Studio Code, run in bash the ff:

> `npm install`

Once done, you can run a specific feature by running:

> `./spec-runner.sh features/[featurename].feature`

A sample of this is:

> `./spec-runner.sh features/shop.feature`

To run all the feature files, use:

> `./node_modules/.bin/wdio wdio.conf.js`

# Setting Up Prettier for Whole Project

1. Install Prettier through npm.
   > `npm install --save-dev prettier`
2. Create .prettierrc in the project root folder.
3. Add desired configs.
