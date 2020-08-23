import React from 'react';
import { connect } from 'react-redux';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import PropTypes from 'prop-types';

function DropDownComponent({ startDateOfWeek }) {
  return (
    <DropdownButton
      id='dropdown-basic-button'
      variant='outline-primary'
      title={(new Date(startDateOfWeek)).getDay()}
    >
      <Dropdown.Item>Action</Dropdown.Item>
      <Dropdown.Item>Another action</Dropdown.Item>
      <Dropdown.Item>Something else</Dropdown.Item>
    </DropdownButton>
  );
}

DropDownComponent.propTypes = {};

function mapStateToProps(state) {
  return {
    startDateOfWeek: state.firstDate,
  };
}

export default connect(mapStateToProps, null)(DropDownComponent);
