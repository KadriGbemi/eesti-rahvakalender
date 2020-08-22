import React from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { updateFirstDate } from '../redux/_actions';
import PropTypes from 'prop-types';

function ButtonComponent({ name, updateFirstDate, firstDate }) {
  return (
    <Button
      variant='primary'
      onClick={(evt) => {
        evt.preventDefault();
        updateFirstDate(firstDate, name);
      }}
    >
      {name}
    </Button>
  );
}

ButtonComponent.propTypes = {
  name: PropTypes.string.isRequired,
  updateFirstDate: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    firstDate: state.firstDate,
  };
}

export default connect(mapStateToProps, { updateFirstDate })(ButtonComponent);
