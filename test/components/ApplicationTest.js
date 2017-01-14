/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;
import createComponent from 'helpers/shallowRenderHelper';

import Application from 'components/Application';

describe('Application', function () {

  beforeEach(function () {
    this.ApplicationComponent = createComponent(Application);
  });

  it('should have some children', function () {
    expect(this.ApplicationComponent.props.children).to.not.equal(undefined);
  });
});
