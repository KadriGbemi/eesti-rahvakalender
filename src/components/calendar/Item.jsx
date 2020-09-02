import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { days, handleEventColor } from "../../helper";
import PropTypes from "prop-types";

function CalendarItem({ holidayDate, holidayTypes }) {
  const holidayDay = holidayDate ? new Date(holidayDate.date).getDate() : null;
  const holidayDayOfWeek = holidayDate
    ? new Date(holidayDate.date).getDay()
    : null;
  const getEvents = (holidayTypes || []).map((event, index) => {
    return (
      <Card
        key={index}
        variant="primary"
        className="py-2 my-2"
        style={{
          textAlign: "center",
          backgroundColor: handleEventColor(event.type),
          color: "#fdf4f0"
        }}
      >
        {event.name}
      </Card>
    );
  });
  return holidayDate ? (
    <Col
      xs={12}
      sm
      className="px-0"
      style={{
        border: "0.1px solid #318FCE"
      }}
    >
      <Card className="w-100 px-0 h-100 d-inline-block">
        <div>
          <p
            style={{
              textAlign: "center",
              backgroundColor: "#318FCE",
              color: "#eff6fb"
            }}
          >
            <strong>{days[holidayDayOfWeek]}</strong> <br />
            <span>{holidayDay}</span>
          </p>
        </div>
        <div className="w-100 h-75 d-inline-block py-3 px-1">
          {holidayTypes ? getEvents : null}
        </div>
      </Card>
    </Col>
  ) : null;
}

CalendarItem.propTypes = {
  holidayDate: PropTypes.object,
  holidayTypes: PropTypes.array
};
export default CalendarItem;
