import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import CalendarItem from './Item';

function CalendarList({ holidays }) {
  const getCalendarList = Object.keys(holidays).map((item) => {
    const holidayDate = holidays[item].holidayDate;
    const holidayTypes = holidays[item].holidayType;
    return (
        <CalendarItem  key={item} holidayTypes={holidayTypes} holidayDate={holidayDate} />
    );
  });
  return (
    <Row className='my-4'>
      {getCalendarList}
    </Row>
  );
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
