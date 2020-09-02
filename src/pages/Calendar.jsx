import React, { useEffect } from "react";
import { connect } from "react-redux";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import CalendarList from "../components/calendar/List";
import CalendarHeader from "../components/Header";
import DayMenu from "../components/menu/Day";
import WeekMenu from "../components/menu/Week";

import { setDatesByDate } from "../redux/_actions";

function Calendar({ setDatesByDate, dateSelected, inputEventType }) {
  useEffect(() => {
    if (!dateSelected && inputEventType !== "setDatesByDay") {
      setDatesByDate(new Date());
    }
    // eslint-disable-next-line
  }, []);
  return (
    <div className="calendar-page">
      <Container>
        <CalendarHeader />
        <Row className="px-3 my-4">
          <DayMenu />
          <WeekMenu />
        </Row>
        <CalendarList />
      </Container>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    dateSelected: state.dateSelected,
    inputEventType: state.inputEventType
  };
}

export default connect(mapStateToProps, { setDatesByDate })(Calendar);
