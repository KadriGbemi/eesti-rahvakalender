import React from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { updateDates } from '../redux/_actions';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';
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
      variant='outline-primary'
      onClick={(evt) => {
        evt.preventDefault();
        console.log('Onclick', daySelected);
        console.log('Onclick name', name);
        console.log('Onclick inputEventType', inputEventType);
        inputEventType === 'setDatesByDate' || name === 'Today'
          ? updateDates(name === 'Today'? new Date() : dateSelected, name, inputEventType)
          : updateDates(daySelected, name, inputEventType);
      }}
    >
      {name === 'Previous' ? (
        <span>
          {' '}
          <AiOutlineDoubleLeft /> {name}
        </span>
      ) : name === 'Today' ? (
        name
      ) : (
        <span>
          {name} <AiOutlineDoubleRight />
        </span>
      )}
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
