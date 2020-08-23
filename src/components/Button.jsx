import React from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { updateFirstDate, setDatesByDay } from '../redux/_actions';
import PropTypes from 'prop-types';

function ButtonComponent({ name, updateFirstDate, firstDate, actionType }) {
  return (
    <Button
      variant='primary'
      onClick={(evt) => {
        evt.preventDefault();
        actionType === 'setDates'
          ? updateFirstDate(new Date(firstDate), name)
          : setDatesByDay(new Date());
      }}
    >
      {name}
    </Button>
  );
}

ButtonComponent.propTypes = {
  name: PropTypes.string.isRequired,
  updateFirstDate: PropTypes.func.isRequired,
  actionType: PropTypes.string,
};

ButtonComponent.defaultProps = {
  actionType: 'setDates',
};

function mapStateToProps(state) {
  return {
    firstDate: state.firstDate,
    actionType: state.actionType,
  };
}

export default connect(mapStateToProps, { updateFirstDate })(ButtonComponent);
