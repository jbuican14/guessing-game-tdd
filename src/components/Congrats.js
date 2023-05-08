import React from "react";
import PropTypes from "prop-types";
/**
 * Description: Functional react component for congratulatory message
 * @function
 * @param {object} props - React proops
 * @returns {JSX.Element} -  rendered a component (or null if 'success' prop is )
 */
export default function Congrats({success}) {
  if (success) {
    return (
      <div data-testid="congrats-element">
        <span data-testid="congrats-message">
          Congrats ! How did you guess the word!
        </span>
      </div>
    );
  } else {
    return <div data-testid="congrats-element"></div>;
  }
}

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};
