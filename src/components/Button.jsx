import React from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { updateDateSetByDate, setDatesByDay } from '../redux/_actions';
import PropTypes from 'prop-types';

function ButtonComponent({
  name,
  updateDateSetByDate,
  firstDate,
  inputEventType,
  daySelected,
  setDatesByDay
}) {
  return (
    <Button
      variant='primary'
      onClick={(evt) => {
        evt.preventDefault();

        inputEventType === 'setDatesByDate'
          ? updateDateSetByDate(new Date(firstDate), name)
          : setDatesByDay(daySelected);
      }}
    >
      {name}
    </Button>
  );
}

ButtonComponent.propTypes = {
  name: PropTypes.string.isRequired,
  updateDateSetByDate: PropTypes.func.isRequired,
  inputEventType: PropTypes.string,
};

ButtonComponent.defaultProps = {
  inputEventType: null,
  daySelected: {},
};

function mapStateToProps(state) {
  return {
    firstDate: state.firstDate,
    inputEventType: state.inputEventType,
    daySelected: state.daySelected,
  };
}

export default connect(mapStateToProps, { updateDateSetByDate, setDatesByDay })(
  ButtonComponent
);
