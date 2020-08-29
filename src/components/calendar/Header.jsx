import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaCalendar } from 'react-icons/fa';
import Dropdown from 'react-bootstrap/Dropdown';

import ButtonComponent from '../../components/Button';

import PropTypes from 'prop-types';

function CalendarHeader(props) {
  return (
    <React.Fragment>
      <Row>
        <h3 className='col-md-8'>
          <FaCalendar /> Events Calendar
        </h3>
        {/* <p className="col-md-4">
          Filter by date: <FaCalendar />
        </p> */}
        <Col className='justify-content-center'>
          <ButtonComponent name='Today' />
        </Col>
      </Row>
      <div>
        <Dropdown.Divider />
      </div>
    </React.Fragment>
  );
}

CalendarHeader.propTypes = {};

export default CalendarHeader;
