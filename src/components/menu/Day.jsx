import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import DropDown from "../DropDown";

export default function DayMenu() {
  return (
    <Col xs={6} sm={3} md={6}>
      <Row>
        <strong>
          <p className="mr-2 my-2"> First Day:</p>
        </strong>
        <span>
          <DropDown />
        </span>
      </Row>
    </Col>
  );
}
