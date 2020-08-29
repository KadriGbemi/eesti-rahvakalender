import React from 'react';
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';

function CalendarItem({holidayDay, holidayTypes}) {
  // const getCalendarList = holidayTypes.map((type) => {
  //   return (
  //     <Row key={item} className='my-4'>
  //       <CalendarItem holidayTypes={holidayTypes} holidayDay={holidayDay}/>
  //     </Row>
  //   );
  // });
  return (
    <Col xs={12} sm className='px-0' style={{ border: '0.5px solid #ddd' }}>
        <div className='w-100 h-50 d-inline-block'>
          <p style={{ backgroundColor: '#ddd', textAlign: 'center' }}>Tue 24</p>
        </div>
        <div
          className='w-100 h-50 d-inline-block'
          style={{ textAlign: 'center' }}
        >
          <h5>25</h5>
        </div>
      </Col>
  );
}

CalendarItem.propTypes = {};

export default CalendarItem;
