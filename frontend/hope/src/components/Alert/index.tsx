/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Fade } from 'react-awesome-reveal';
import { connect } from 'react-redux';

const Alert: React.FC = ({ alerts }: any) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert: any) => (
    <Fade direction="down" triggerOnce duration={1500}>
      <div key={alert.id} className={`${alert.alertType}`}>
        {alert.msg}
      </div>
    </Fade>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state: any): any => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
