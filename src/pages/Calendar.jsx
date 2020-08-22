import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from '../components/Button';
import { setDates } from '../redux/_actions';

function Calendar({ setDates, firstDate, startDateOfWeek, endDateOfWeek }) {
  useEffect(() => {
    console.log('First Date', firstDate);
    console.log('See First Date', !firstDate);
    if (!firstDate) {
      setDates(new Date());
    }
  }, [setDates, firstDate]);

  function handleDateFormat(date) {
    return new Intl.DateTimeFormat('en-GB', {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
    }).format(new Date(date));
  }
  return (
    <div className='calendar-page'>
      <p>First Date: {firstDate ? handleDateFormat(firstDate) : firstDate}</p>
      <p>Start of Week: {startDateOfWeek ? handleDateFormat(startDateOfWeek): startDateOfWeek}</p>
      <p>End of Week: {endDateOfWeek? handleDateFormat(endDateOfWeek): endDateOfWeek}</p>
      <Container fluid>
        <Row>
          <Col>
            <Button name='Previous' />
          </Col>
          <Col>
            <Button name='Next' />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    firstDate: state.firstDate,
    startDateOfWeek: state.startDateOfWeek,
    endDateOfWeek: state.endDateOfWeek,
  };
}

export default connect(mapStateToProps, { setDates })(Calendar);
