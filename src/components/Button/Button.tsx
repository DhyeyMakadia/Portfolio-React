import React from "react";

export default function Button(props: any) {
  return (
    <button
      type="button"
      className={`btn ${props.class}`}
      onClick={props.click}
    >
      {props.btnText}
    </button>
  );
}
