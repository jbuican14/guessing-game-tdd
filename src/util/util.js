import checkPropTypes from "check-prop-types";

export const checkProps = (component, confirmingProps) => {
  const propErr = checkPropTypes(
    component.propTypes,
    confirmingProps,
    "prop",
    component.name
  );
  expect(propErr).toBeUndefined();
};
