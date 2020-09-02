import React from "react";
import { connect } from "react-redux";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Button from "../Button";
import { handleDateFormat, dateOptions } from "../../helper";

import PropTypes from "prop-types";

function handleDateDisplay(data) {
  return data ? handleDateFormat(data, dateOptions) : data;
}
function WeekMenu({ startDateOfWeek, endDateOfWeek }) {
  return (
    <Col xs={7} md={8}>
      <Row className="justify-content-end">
        <Button name="Previous" />
        <strong className="mx-3 my-2">
          {" "}
          <span>
            {handleDateDisplay(startDateOfWeek) +
              " to " +
              handleDateDisplay(endDateOfWeek)}
          </span>
        </strong>
        <Button name="Next" />
      </Row>
    </Col>
  );
}

WeekMenu.propTypes = {
  startDateOfWeek: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date)
  ]),
  endDateOfWeek: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date)
  ])
};

function mapStateToProps(state) {
  return {
    startDateOfWeek: state.startDateOfWeek,
    endDateOfWeek: state.endDateOfWeek
  };
}

export default connect(mapStateToProps, null)(WeekMenu);
