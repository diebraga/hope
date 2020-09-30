/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// import { Container } from './styles';

const Alert: React.FC = ({ alerts }: any) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert: any) => (
    <div key={alert.id} className={`${alert.alertType}`}>
      {alert.msg}
    </div>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state: any): any => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
