import React from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { setDates} from '../redux/_actions';
import PropTypes from 'prop-types';

function ButtonComponent({ name, setDates }) {
  return (
    <Button
      variant='primary'
      onClick={(evt) => {
        evt.preventDefault();
        setDates(new Date());
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

export default connect(mapStateToProps, { setDates})(ButtonComponent);
