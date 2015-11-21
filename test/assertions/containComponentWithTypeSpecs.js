import should from 'should';
import '../../src/assertions/containComponentWithType';
import React from 'react/addons'
const render = React.addons.TestUtils.renderIntoDocument;

describe('containComponentWithType', () => {
  
  class Type extends React.Component {
    render() { return <span>shouldjs</span>; }
  }

  context('when the root element contains at least one instance of the type', () => {
    it('passes', () => {
      const root = render(<a><Type/></a>);
      root.should.containComponentWithType(Type);
    });
  });

});
