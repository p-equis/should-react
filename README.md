# should-react
shouldjs extensions to make testing reactjs a little easier

[![Build Status](https://travis-ci.org/p-equis/should-react.svg?branch=master)](https://travis-ci.org/p-equis/should-react)


## use cases

- checking that a component exists

```
var rootComponent = ReactTestUtils.renderIntoDocument(...);
var SubComponent = require(...);

rootComponent.should.containComponentWithType(SubComponent);
```

- or that it *doesn't*, using normal shouldjs chaining:

```
rootComponent.should.not.containComponentWithType(SubComponent);
```
