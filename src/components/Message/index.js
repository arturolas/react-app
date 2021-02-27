import React from 'react';

function Message(props) {
  console.log(props.amount.length);
  if (props.amount.length === 0) {
    return (<div className="alert alert-primary" role="alert">
      Ingresa una cantidad para hacer la conversion
    </div>)
  }
  return (
    <div className="alert alert-primary" role="alert">
      Tus {props.amount} dolares en soles es {props.change}
    </div>
  )
}

export default Message;