import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from '../components/Button';
import { setFirstDate } from '../redux/_actions';

function Calendar({ setFirstDate , firstDate}) {
  useEffect(() => {
    setFirstDate(new Date());
  }, [setFirstDate]);

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

export default connect(null, { setFirstDate })(Calendar);
