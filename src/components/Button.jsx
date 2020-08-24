import React from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { updateDateSetByDate, setDatesByDay } from '../redux/_actions';
import PropTypes from 'prop-types';

function ButtonComponent({ name, updateDateSetByDate, firstDate, actionType }) {
  return (
    <Button
      variant='primary'
      onClick={(evt) => {
        evt.preventDefault();
        actionType === 'setDatesByDate'
          ? updateDateSetByDate(new Date(firstDate), name)
          : setDatesByDay(new Date());
      }}
    >
      {name}
    </Button>
  );
}

ButtonComponent.propTypes = {
  name: PropTypes.string.isRequired,
  updateDateSetByDate: PropTypes.func.isRequired,
  actionType: PropTypes.string,
};

ButtonComponent.defaultProps = {
  actionType: null,
};

function mapStateToProps(state) {
  return {
    firstDate: state.firstDate,
    actionType: state.actionType,
  };
}

export default connect(mapStateToProps, { updateDateSetByDate })(ButtonComponent);
