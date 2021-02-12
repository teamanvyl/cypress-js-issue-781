# A repo to provide a reproducible instance of Cypress.js Issue #781

This code is meant to illustrate the issue described in cypress-io/cypress#781. The issue does look to be related to XHR requests that were initiated in one request but do not complete until just prior to the next test. To reproduce you'll need to use ruby, bundler, and yarn:

1. `bundle install`
2. `yarn install`
3. `./app.rb` to start the Sinatra app
4. `yarn run cypress open`

When you run the `cookies_spec.js` you should see the first `can login` spec succeed and the second `render logged out state` fail. The work around that I am currently using is to do what others have suggested and introducing a `visit` into a `afterEach` hook that takes the browser to a non-existent page so as to ensure the browser window cancels out any pending XHR requests that may affect cookies (or localstrage for that matter, as was the case with our app). You can uncomment the `afterEach` line to see this workaround resolve the issue.
