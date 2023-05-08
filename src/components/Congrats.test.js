import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Congrats from "./Congrats";
// import { checkPropTypes } from 'prop-types';
import checkPropTypes from "check-prop-types";
import {checkProps} from "../util/util";

/**
 * Description : @function setup
 * @param {object} props={}
 * @returns {JSX component}
 */
const setup = (props = {}) => {
  return render(<Congrats {...props} />);
};

test("loads without error", () => {
  setup({success: true});
  const elm = screen.getByTestId("congrats-element");
  expect(elm).toBeInTheDocument();
});

test('renders no text when "success" prop is false', () => {
  setup({success: false});
  const elm = screen.getByTestId("congrats-element");
  expect(elm).toBeEmptyDOMElement();
});

test("renders non-empty congrats message when success prop is true", () => {
  setup({success: true});
  const message = screen.getByTestId("congrats-element");
  expect(message).not.toBeEmptyDOMElement();
});

test("does not throw warning with expected props", () => {
  const expectedProps = {success: false};
  checkProps(Congrats, expectedProps);
});
