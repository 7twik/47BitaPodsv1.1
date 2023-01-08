import React from 'react';
import Toast from 'react-bootstrap/Toast';

import ToastContainer from 'react-bootstrap/ToastContainer';
const ToastD = () => {
  const [showA, setShowA] = React.useState(true);
  const [position, setPosition] = React.useState('top-start');
  const toggleShowA = () => setShowA(!showA);
  return (
    <div>
      <ToastContainer>
      <Toast show={showA} onClose={toggleShowA}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
        </Toast>
        </ToastContainer>
    </div>
  )
}

export default ToastD;