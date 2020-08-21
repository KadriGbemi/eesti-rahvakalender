import React from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { setFirstDate } from '../redux/_actions';
import PropTypes from 'prop-types';

function ButtonComponent({ name, setFirstDate }) {
  return (
    <Button
      variant='primary'
      onClick={(evt) => {
        evt.preventDefault();
        setFirstDate(new Date());
      }}
    >
      {name}
    </Button>
  );
}

ButtonComponent.propTypes = {
  name: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    firstDate: state.firstDate,
  };
}

export default connect(mapStateToProps, { setFirstDate })(ButtonComponent);
