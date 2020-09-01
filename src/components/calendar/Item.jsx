import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { days } from '../../helper';
import PropTypes from 'prop-types';


function CalendarItem({ holidayDate, holidayTypes }) {
  const holidayDay = holidayDate ? new Date(holidayDate.date).getDate() : null;
  const holidayDayOfWeek = holidayDate
    ? new Date(holidayDate.date).getDay()
    : null;
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
            border: '#d6dfe3 0.5px solid',
            color: '#346175',
            textAlign: 'center',
          }}
        >
         <strong>{days[holidayDayOfWeek]}</strong>  <br />
          {holidayDay}
        </p>
      </div>
      <div className='w-100 h-75 d-inline-block py-3 px-1'>
        {holidayTypes ? getEvents : null}
      </div>
    </Col>
  ) : null;
}

CalendarItem.propTypes = {
  holidayDate: PropTypes.object,
  holidayTypes: PropTypes.array
};
export default CalendarItem;
