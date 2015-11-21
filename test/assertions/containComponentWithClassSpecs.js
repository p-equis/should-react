import '../../src';
import React from 'react/addons'
const render = React.addons.TestUtils.renderIntoDocument;

describe('containComponentWithClass', () => {
  
  context('when the root element contains at least one element with the class', () => {
    it('passes', () => {
      const root = render(<p><div className='css-class'/></p>);
      root.should.containComponentWithClass('css-class');
    });
  });

});
