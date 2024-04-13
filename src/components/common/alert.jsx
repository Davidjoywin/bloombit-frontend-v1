import {useState} from 'react';

import {get_operation} from '../../config';

const Alert = () => {
  const [operation, setOperation] = useState(null);

  const operation_obj = get_operation(operation);

  let text = operation_obj;

  return (
    <div className="alert-container">
      <span>Welcome back david</span>
    </div>
  )
}

export default Alert;