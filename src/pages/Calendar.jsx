import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from '../components/Button';
import { setDates } from '../redux/_actions';

function Calendar({ setDates, firstDate, startDateOfWeek, endDateOfWeek }) {
  useEffect(() => {
    setDates(new Date());
  }, [setDates]);

  function handleDateFormat(date) {
    return new Intl.DateTimeFormat('en-GB', {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
    }).format(new Date(date));
  }
  return (
    <div className='calendar-page'>
      <p>First Date: {handleDateFormat(firstDate)}</p>
      <p>Start of Week: {handleDateFormat(startDateOfWeek)}</p>
      <p>End of Week: {handleDateFormat(endDateOfWeek)}</p>
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
