import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonComponent from "./Button";

function CalendarHeader() {
  return (
    <React.Fragment>
      <Row className="pt-4">
        <Col xs={7} md={10}>
          <h5 className="className='pt-4'"> Events Calendar </h5>
        </Col>

        <Col xs={5} md={2} style={{ textAlign: "right" }}>
          <ButtonComponent name="Today" />
        </Col>
      </Row>
      <div>
        <Dropdown.Divider />
      </div>
    </React.Fragment>
  );
}

export default CalendarHeader;
