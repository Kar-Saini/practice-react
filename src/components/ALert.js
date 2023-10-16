import React from "react";

export default function Alert(props) {
  const captalize = (word) => {
    let newWord = word.charAt(0).toUpperCase();
    return newWord + word.slice(1);
  };
  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <p>
          {captalize(props.alert.type)} : {props.alert.msg}
        </p>
      </div>
    )
  );
}
