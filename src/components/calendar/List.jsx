import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import CalendarItem from './Item';

function CalendarList({ holidays, holidayKeys}) {
  const getCalendarList = (holidayKeys|| []).map((item) => {
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
  return <Row>{getCalendarList}</Row>;
}

CalendarList.propTypes = {
  holidays: PropTypes.object,
  holidayKeys: PropTypes.object
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
