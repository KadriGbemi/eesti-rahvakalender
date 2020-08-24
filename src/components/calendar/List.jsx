import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function CalendarList({ holidays }) {
  const listItems = holidays.map((item) => {
    const holidayDate = holidays[item].holidayDate;
    return <li>{new Date(holidayDate.date)}</li>;
  });
  return <ul>{listItems}</ul>;
}

CalendarList.propTypes = {
  holidays: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    holidays: state.holidays,
  };
}

export default connect(mapStateToProps, null)(CalendarList);
