import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

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
          <Col sm={3} md={6}>
            <Row>
              <p className='mx-2 my-2'> First Day:</p>
              <span>
                <DropDownComponent />
              </span>
            </Row>
          </Col>
          <Col sm={9} md={6}>
            <Row className='justify-content-end'>
              <ButtonComponent name='Previous' />
              <span className='mx-2 my-2'>
                {inputEventType === 'setDatesByDay'
                  ? startDateOfWeek
                    ? handleDateFormat(startDateOfWeek)
                    : startDateOfWeek
                  : dateSelected
                  ? handleDateFormat(dateSelected)
                  : dateSelected}
              </span>
              <ButtonComponent name='Next' />
            </Row>
          </Col>
        </Row>
        <Row className='my-4'>
          <Col xs={12} sm className='px-0' style={{ border: '0.5px solid #ddd' }}>
            <div className='w-100 h-50 d-inline-block'>
              <p style={{ backgroundColor: '#ddd', textAlign:'center' }}>Tue 24</p>
            </div>
            <div className='w-100 h-50 d-inline-block' style={{ textAlign:'center' }}>
              <h5>25</h5>
            </div>
          </Col>
          <Col xs={12} sm className='px-0' style={{ border: '0.5px solid #ddd' }}>
            <div className='w-100 h-50 d-inline-block'>
              <p style={{ backgroundColor: '#ddd', textAlign:'center' }}>Tue 24</p>
            </div>
            <div className='w-100 h-50 d-inline-block' style={{ textAlign:'center' }}>
              <h5>25</h5>
            </div>
          </Col>
          <Col xs={12} sm className='px-0' style={{ border: '0.5px solid #ddd' }}>
            <div className='w-100 h-50 d-inline-block'>
              <p style={{ backgroundColor: '#ddd', textAlign:'center' }}>Tue 24</p>
            </div>
            <div className='w-100 h-50 d-inline-block' style={{ textAlign:'center' }}>
              <h5>25</h5>
            </div>
          </Col>
          <Col xs={12} sm className='px-0' style={{ border: '0.5px solid #ddd' }}>
            <div className='w-100 h-50 d-inline-block'>
              <p style={{ backgroundColor: '#ddd', textAlign:'center' }}>Tue 24</p>
            </div>
            <div className='w-100 h-50 d-inline-block' style={{ textAlign:'center' }}>
              <h5>25</h5>
            </div>
          </Col>
          <Col xs={12} sm className='px-0' style={{ border: '0.5px solid #ddd' }}>
            <div className='w-100 h-50 d-inline-block'>
              <p style={{ backgroundColor: '#ddd', textAlign:'center' }}>Tue 24</p>
            </div>
            <div className='w-100 h-50 d-inline-block' style={{ textAlign:'center' }}>
              <h5>25</h5>
            </div>
          </Col>
          <Col xs={12} sm className='px-0' style={{ border: '0.5px solid #ddd' }}>
            <div className='w-100 h-50 d-inline-block'>
              <p style={{ backgroundColor: '#ddd', textAlign:'center' }}>Tue 24</p>
            </div>
            <div className='w-100 h-50 d-inline-block' style={{ textAlign:'center' }}>
              <h5>25</h5>
            </div>
          </Col>
          <Col xs={12} sm className='px-0' style={{ border: '0.5px solid #ddd' }}>
            <div className='w-100 h-50 d-inline-block'>
              <p style={{ backgroundColor: '#ddd', textAlign:'center' }}>Tue 24</p>
            </div>
            <div className='w-100 h-50 d-inline-block' style={{ textAlign:'center' }}>
              <h5>25</h5>
            </div>
          </Col>

        </Row>

        {/* <CalendarList /> */}
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
