import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function handleDateFormat(dateObj) {
  console.log('Date format Item', dateObj.date);
  return new Intl.DateTimeFormat(undefined, {
    year: 'numeric',
    month: 'numeric',
    day: '2-digit',
  }).format(new Date(dateObj.date));
}
function CalendarItem({ holidayDate, holidayTypes, daySelected }) {
  const holidayDay = holidayDate ? new Date(holidayDate.date).getDate() : null;
  console.log('Calendar Item', holidayDate);
  const getEvents = (holidayTypes || []).map((type) => {
    return (
      <Card
        key={type}
        pill
        variant='primary'
        className='py-3'
        style={{
          textAlign: 'center',
          backgroundColor: '#eb9269',
          color: '#fdf4f0',
        }}
      >
        {type.name}
      </Card>
    );
  });
  return holidayDate ? (
    <Col xs={12} sm className='px-0' style={{ border: '0.5px solid #ddd' }}>
      <div className='w-100 h-25 d-inline-block'>
        <p
          style={{
            backgroundColor: '#346175',
            color: '#d6dfe3',
            textAlign: 'center',
          }}
        >
          {handleDateFormat(holidayDate)}
        </p>
      </div>
      <div className='w-100 h-75 d-inline-block py-3 px-1'>
        {holidayTypes ? (
          getEvents
        ) : (
          <h5
            className='py-3'
            style={{ textAlign: 'center', color: '#4987a4' }}
          >
            {holidayDay}
          </h5>
        )}
      </div>
    </Col>
  ) : null;
}

function mapStateToProps(state) {
  return {
    daySelected: state.daySelected,
  };
}

export default connect(mapStateToProps, null)(CalendarItem);
