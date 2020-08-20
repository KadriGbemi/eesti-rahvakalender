import React from 'react';
import Button from 'react-bootstrap/Button';

import PropTypes from 'prop-types';

function ButtonComponent({ name }) {
  return <Button variant='primary'>{name}</Button>;
}

ButtonComponent.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ButtonComponent;
