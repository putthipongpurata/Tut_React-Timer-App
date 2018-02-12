import React from 'react';
import ReactDom from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';
import Clock from 'components/Clock';

describe('Clock', () => {

  it('Should exist', () => {
    expect(Clock).toExist();
  });
  
  describe('render', () => {

    it('Should render clock to output', () => {
      let clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
      let $el = $(ReactDom.findDOMNode(clock));
      let actualText = $el.find('.clock-text').text();

      expect(actualText).toBe('01:02');
    });

  });

  describe('Format seconds', () => {

    it('Should format seconds', () => {
      let clock = TestUtils.renderIntoDocument(<Clock/>);
      let seconds = 615;
      let expected = '10:15';
      let actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });

    it('Should format seconds when min/sec are less than 10', () => {
      let clock = TestUtils.renderIntoDocument(<Clock/>);
      let seconds = 61;
      let expected = '01:01';
      let actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });

  });

});