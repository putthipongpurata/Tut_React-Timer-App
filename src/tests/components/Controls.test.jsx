import React from 'react';
import ReactDom from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jQuery';

import Controls from 'components/Controls';

describe('Controls', () => {

  it('Should exist', () => {
    expect(Controls).toExist();
  });

  describe('render', () => {
    
    it('Should render pause when started', () => {
      let controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started"/>);
      let $el = $(ReactDom.findDOMNode(controls));
      let $button = $el.find('button:contains(Pause)');

      expect($button.length).toBe(1);
    });

    it('Should render start when paused', () => {
      let controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused"/>);
      let $el = $(ReactDom.findDOMNode(controls));
      let $button = $el.find('button:contains(Start)');
      
      expect($button.length).toBe(1);
    });

  });

});