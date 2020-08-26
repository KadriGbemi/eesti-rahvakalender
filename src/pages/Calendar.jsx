import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ButtonComponent from '../components/Button';
import { setDatesByDate } from '../redux/_actions';
import DropDownComponent from '../components/DropDown';
import CalendarList from '../components/calendar/List'

function Calendar({
  setDatesByDate,
  dateSelected,
  startDateOfWeek,
  endDateOfWeek,
  inputEventType
}) {
  useEffect(() => {
    if (!dateSelected && inputEventType !== "setDatesByDay") {
      setDatesByDate(new Date());
    }
    // eslint-disable-next-line
  }, []);

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
              Date Selected: {dateSelected ? handleDateFormat(dateSelected) : dateSelected}
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
          First Day of the Week: <DropDownComponent />
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
        <Row>
          <CalendarList />
        </Row>
      </Container>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    dateSelected: state.dateSelected,
    startDateOfWeek: state.startDateOfWeek,
    endDateOfWeek: state.endDateOfWeek,
    inputEventType: state.inputEventType
  };
}

export default connect(mapStateToProps, { setDatesByDate })(Calendar);
