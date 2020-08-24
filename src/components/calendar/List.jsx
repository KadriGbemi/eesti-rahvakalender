import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function CalendarList({ holidays }) {
  const listItems = Object.keys(holidays).map((item) => {
    const holidayDate = holidays[item].holidayDate ;
    const holidayType = holidays[item].holidayType;
    const date = holidayDate ? new Date(holidayDate.date).getDay(): null
    return (
      <li key={item}>
        {holidayType ? holidayType[0].name : date}
      </li>
    );
  });
  return <ul>{listItems}</ul>;
}

CalendarList.propTypes = {
  holidays: PropTypes.object,
};

CalendarList.defaultProps = {
    holidays: {},
  };

function mapStateToProps(state) {
  return {
    holidays: state.holidays,
  };
}

export default connect(mapStateToProps, null)(CalendarList);
