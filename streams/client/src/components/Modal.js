import React from "react";
import ReactDOM from "react-dom";

const Modal = props => {
  return ReactDOM.createPortal(
    <section
      onClick={props.onDismiss}
      className="ui dimmer modals visible active"
    >
      <article
        onClick={e => e.stopPropagation()}
        className="ui standar modal visible active"
      >
        <header className="header">{props.title}</header>
        <article className="content">{props.content}</article>
        <footer className="actions">{props.actions}</footer>
      </article>
    </section>,
    document.querySelector("#modal")
  );
};

export default Modal;
