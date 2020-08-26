import React from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { updateDates } from '../redux/_actions';
import PropTypes from 'prop-types';

function ButtonComponent({
  name,
  updateDates,
  dateSelected,
  inputEventType,
  daySelected,
}) {
  return (
    <Button
      variant='primary'
      onClick={(evt) => {
        evt.preventDefault();
        console.log('Onclick', daySelected);
        console.log('Onclick name', name);
        console.log('Onclick inputEventType',inputEventType);
        inputEventType === 'setDatesByDate'
          ? updateDates(dateSelected, name, inputEventType)
          : updateDates(daySelected, name, inputEventType);
      }}
    >
      {name}
    </Button>
  );
}

ButtonComponent.propTypes = {
  name: PropTypes.string.isRequired,
  updateDates: PropTypes.func.isRequired,
  inputEventType: PropTypes.string,
};

ButtonComponent.defaultProps = {
  inputEventType: null,
  daySelected: {},
};

function mapStateToProps(state) {
  return {
    dateSelected: state.dateSelected,
    inputEventType: state.inputEventType,
    daySelected: state.daySelected,
    startDateOfWeek: state.startDateOfWeek,
    endDateOfWeek: state.endDateOfWeek,
  };
}

export default connect(mapStateToProps, { updateDates })(ButtonComponent);
