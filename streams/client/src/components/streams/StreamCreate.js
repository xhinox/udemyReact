import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamCreate extends React.Component {
  onSubmit = formValues => {
    this.props.createStream(formValues);
  };

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    return (
      <section>
        <h3>Create a stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </section>
    );
  }
}

export default connect(
  null,
  { createStream }
)(StreamCreate);
