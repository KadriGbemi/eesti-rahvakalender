import React from "react";
import { connect } from "react-redux";

import Row from "react-bootstrap/Row";
import CalendarItem from "./Item";

import PropTypes from "prop-types";
function CalendarList({ holidays, holidayKeys }) {
  const getCalendarList = (holidayKeys || []).map(item => {
    const holidayDate = holidays[item].holidayDate;
    const holidayTypes = holidays[item].holidayType;
    return (
      <CalendarItem
        key={item}
        holidayTypes={holidayTypes}
        holidayDate={holidayDate}
      />
    );
  });
  return <Row className="mx-2 mx-md-0 ">{getCalendarList}</Row>;
}

CalendarList.propTypes = {
  holidays: PropTypes.object,
  holidayKeys: PropTypes.array
};

CalendarList.defaultProps = {
  holidays: {},
  holidayKeys: []
};

function mapStateToProps(state) {
  return {
    holidays: state.holidays,
    holidayKeys: state.holidayKeys
  };
}

export default connect(mapStateToProps, null)(CalendarList);
