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
function WeekMenu({ startDateOfWeek, dateSelected, inputEventType }) {
  return (
    <Col xs={6} sm={9} md={6}>
      <Row className="justify-content-end">
        <Button name="Previous" />
        <strong className="mx-2 my-2">
          {" "}
          <span>
            {inputEventType === "setDatesByDay"
              ? handleDateDisplay(startDateOfWeek)
              : handleDateDisplay(dateSelected)}
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
  dateSelected: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  inputEventType: PropTypes.string
};

function mapStateToProps(state) {
  return {
    dateSelected: state.dateSelected,
    startDateOfWeek: state.startDateOfWeek,
    inputEventType: state.inputEventType
  };
}

export default connect(mapStateToProps, null)(WeekMenu);
