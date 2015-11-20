import should from 'should';
import React from 'react/addons';
const ReactTestUtils = React.addons.TestUtils;

should.Assertion.add(
  'containComponentWithType',
  function (type) {
    this.params = {
      obj: this.obj.getDOMNode()._localName,
      operator: 'to contain component of type',
      expected: type.displayName
    };

    var componentToSearch = this.obj;

    ReactTestUtils.scryRenderedComponentsWithType(componentToSearch, type).length.should.be.greaterThan(0, '');
  }
);
