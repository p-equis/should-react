import should from 'should';
import React from 'react/addons';
const ReactTestUtils = React.addons.TestUtils;

should.Assertion.add('containComponentWithClass', function (className) {
    this.params = {
      obj: this.obj.getDOMNode()._localName,
      operator: 'to contain component of className',
      expected: className
    };

    const componentToSearch = this.obj;

    ReactTestUtils.scryRenderedDOMComponentsWithClass(componentToSearch, className).length.should.be.greaterThan(0, '');
  }
);
