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
      <Row className='pt-4'>
        <Col xs={7} md={10}>
          <h5 className="className='pt-4'"> Events Calendar </h5>
        </Col>

        {/* <p className="col-md-4">
          Filter by date: <FaCalendar />
        </p> */}
        <Col xs={5} md={2} style={{ textAlign: 'right' }}>
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
