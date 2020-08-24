import React from 'react';
import { connect } from 'react-redux';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import PropTypes from 'prop-types';
import { dayIsSelected } from '../redux/_actions/creators';

function DropDownComponent({ holidays, daySelected, dayIsSelected }) {
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
                onClick={() => dayIsSelected(holidayDate)}
              >
                {holidayDate.day}
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
  daySelected: {day: 'Mon'},
};
function mapStateToProps(state) {
  return {
    holidays: state.holidays,
    daySelected: state.daySelected,
  };
}

export default connect(mapStateToProps, { dayIsSelected })(DropDownComponent);
