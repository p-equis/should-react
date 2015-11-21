# should-react
shouldjs extensions to make testing reactjs a little easier

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
