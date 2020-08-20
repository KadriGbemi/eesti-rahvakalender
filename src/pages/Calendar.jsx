import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from '../components/Button';
function Calendar() {
  return (
    <div className='calendar-page'>
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

export default Calendar;
