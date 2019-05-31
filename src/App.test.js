import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16'

import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter })

/** 
 * Factory function to create a ShallowWrapper for the App component
 * @function setup
 * @param {object} props - Component props to specific to this setup
 * @param {any} state = Initial state for setup
 * @returns {ShallowWrapper}
*/
const setup = (props={}, state=null) => {
  return shallow(<App {...props} />)
}

/** 
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within
 * @param {string} val = Value of data-test attribute for search
 * @returns {ShallowWarpper}
*/
const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`)
}

test('should render without error', () => {
  const wrapper = setup()
  const appComponent = findByTestAttr(wrapper, 'component-app')
  expect(appComponent.length).toBe(1)
});
test('should render increment button', () => {
  const wrapper = setup()
  const button = findByTestAttr(wrapper, 'increment-button')
  expect(button.length).toBe(1)
});
test('should render counter display', () => {
  const wrapper = setup()
  const counterDisplay = findByTestAttr(wrapper, 'counter-display')
  expect(counterDisplay.length).toBe(1)
});
test('counter starts at zero', () => {

});
test('clickng button increments counter display', () => {

});
