import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ButtonComponent from '../components/Button';
import { setDatesByDate } from '../redux/_actions';
import DropDownComponent from '../components/DropDown';

function Calendar({ setDatesByDate, firstDate, startDateOfWeek, endDateOfWeek }) {
  useEffect(() => {
    if (!firstDate) {
      setDatesByDate(new Date());
    }
  }, [setDatesByDate, firstDate]);

  function handleDateFormat(date) {
    return new Intl.DateTimeFormat(undefined, {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
    }).format(new Date(date));
  }
  return (
    <div className='calendar-page'>
      <Container fluid>
        <Row>
          <Col>
            <p>
              First Date: {firstDate ? handleDateFormat(firstDate) : firstDate}
            </p>
            <p>
              Start of Week:{' '}
              {startDateOfWeek
                ? handleDateFormat(startDateOfWeek)
                : startDateOfWeek}
            </p>
            <p>
              End of Week:{' '}
              {endDateOfWeek ? handleDateFormat(endDateOfWeek) : endDateOfWeek}
            </p>
          </Col>
          <Col>
            <DropDownComponent />
          </Col>
        </Row>
        <Row>
          <Col>
            <ButtonComponent name='Previous' />
          </Col>
          <Col>
            <ButtonComponent name='Next' />
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

export default connect(mapStateToProps, { setDatesByDate })(Calendar);
