import {useState} from 'react';

import {create_operations, send_alert} from '../../config';


const Alert = () => {

  let alert = send_alert();
  
  if (alert) {
    return (
      <div className="alert-container">
        <span>{alert}</span>
      </div>
    )
  }
}

export default Alert;