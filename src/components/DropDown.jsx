import React from "react";
import { connect } from "react-redux";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import PropTypes from "prop-types";
import { setDatesByDay } from "../redux/_actions/";
import { handleDateFormat } from "../helper";

function DropDownComponent({
  holidays,
  daySelected,
  setDatesByDay,
  holidayKeys
}) {
  function handleDateDisplay(dateInput) {
    return (
      dateInput.day +
      " - " +
      handleDateFormat(dateInput, {
        month: "short",
        day: "numeric"
      })
    );
  }
  return (
    <DropdownButton
      id="dropdown-basic-button"
      variant="outline-primary"
      title={handleDateDisplay(daySelected)}
    >
      {(holidayKeys || []).map(item => {
        const holidayDate = holidays[item].holidayDate;
        return (
          <Dropdown.Item
            key={item}
            style={{ color: "#318FCE" }}
            onClick={e => {
              e.preventDefault();
              setDatesByDay(holidayDate);
            }}
          >
            {holidayDate
              ? holidayDate.day && holidayDate.day !== daySelected.day
                ? handleDateDisplay(holidayDate)
                : null
              : null}
          </Dropdown.Item>
        );
      })}
    </DropdownButton>
  );
}

DropDownComponent.propTypes = {
  daySelected: PropTypes.any,
  holidays: PropTypes.object,
  holidayKeys: PropTypes.array,
  setDatesByDay: PropTypes.func
};

DropDownComponent.defaultProps = {
  daySelected: { day: "Mon", date: new Date() },
  holidays: {},
  holidayKeys: [],
  setDatesByDay: () => {}
};
function mapStateToProps(state) {
  return {
    holidays: state.holidays,
    holidayKeys: state.holidayKeys,
    daySelected: state.daySelected
  };
}

export default connect(mapStateToProps, { setDatesByDay })(DropDownComponent);
