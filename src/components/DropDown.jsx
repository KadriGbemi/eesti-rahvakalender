import React from 'react';
import { connect } from 'react-redux';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import PropTypes from 'prop-types';
import { setDatesByDay } from '../redux/_actions/';

function DropDownComponent({ holidays, daySelected, setDatesByDay }) {
  return (
    <DropdownButton
      id='dropdown-basic-button'
      variant='outline-primary'
      title={daySelected.day}
    >
      {holidays
        ? Object.keys(holidays).map((item) => {
            const holidayDate = holidays[item].holidayDate;
            return (
              <Dropdown.Item
                key={item}
                onClick={(e) => {
                  e.preventDefault();
                  console.log('Clicked');
                  setDatesByDay(holidayDate);
                }}
              >
                {holidayDate
                  ? holidayDate.day && holidayDate.day !== daySelected.day
                    ? holidayDate.day
                    : null
                  : null}
              </Dropdown.Item>
            );
          })
        : null}
    </DropdownButton>
  );
}

DropDownComponent.propTypes = {
  daySelected: PropTypes.any,
};

DropDownComponent.defaultProps = {
  daySelected: { day: 'Mon' },
  holidays: {},
};
function mapStateToProps(state) {
  return {
    holidays: state.holidays,
    daySelected: state.daySelected,
  };
}

export default connect(mapStateToProps, { setDatesByDay })(DropDownComponent);
