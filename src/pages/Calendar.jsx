import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ButtonComponent from '../components/Button';
import { setDatesByDate } from '../redux/_actions';
import DropDownComponent from '../components/DropDown';
import CalendarList from '../components/calendar/List';
import CalendarHeader from '../components/calendar/Header';
import { AiOutlineInsertRowLeft } from 'react-icons/ai';

function Calendar({
  setDatesByDate,
  dateSelected,
  startDateOfWeek,
  endDateOfWeek,
  inputEventType,
}) {
  useEffect(() => {
    if (!dateSelected && inputEventType !== 'setDatesByDay') {
      setDatesByDate(new Date());
    }
    // eslint-disable-next-line
  }, []);

  function handleDateFormat(date) {
    return new Intl.DateTimeFormat(undefined, {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
    }).format(new Date(date));
  }
  return (
    <div className='calendar-page'>
      <Container>
        <CalendarHeader />
        <Row className='px-2 my-4'>
          <Col xs={6} sm={3} md={6}>
            <Row>
              <strong>
                <p className='mx-2 my-2'> First Day:</p>
              </strong>
              <span>
                <DropDownComponent />
              </span>
            </Row>
          </Col>
          <Col xs={6} sm={9} md={6}>
            <Row className='justify-content-end'>
              <ButtonComponent name='Previous' />
              <strong className='mx-2 my-2'>
                {' '}
                <span>
                  {inputEventType === 'setDatesByDay'
                    ? startDateOfWeek
                      ? handleDateFormat(startDateOfWeek)
                      : startDateOfWeek
                    : dateSelected
                    ? handleDateFormat(dateSelected)
                    : dateSelected}
                </span>
              </strong>
              <ButtonComponent name='Next' />
            </Row>
          </Col>
        </Row>
        <CalendarList />
      </Container>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    dateSelected: state.dateSelected,
    startDateOfWeek: state.startDateOfWeek,
    endDateOfWeek: state.endDateOfWeek,
    inputEventType: state.inputEventType,
  };
}

export default connect(mapStateToProps, { setDatesByDate })(Calendar);
