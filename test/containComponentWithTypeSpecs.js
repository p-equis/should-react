import should from 'should';
import '../lib/assertions/containComponentWithType';
import React from 'react/addons'
const ReactTestUtils = React.addons.TestUtils;

describe('containComponentWithType', () => {
  
  class Type extends React.Component {
    render() { return <span>shouldjs</span>; }
  }

  context('when the root element contains at least one instance of the type', () => {
    xit('passes', () => {
      root = ReactTestUtils.renderIntoDocument(
        <div>
          <Type/>
        </div>
      );

      root.should.containComponentOfType(Type);
    });
  });

});
