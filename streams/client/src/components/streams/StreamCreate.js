import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createStream } from "../../actions";

class StreamCreate extends React.Component {
	renderError = ({ error, touched }) => {
		if (touched && error) {
			return (
				<footer className="ui error message">
					<div className="header">{error}</div>
				</footer>
			);
		}
	};

	renderInput = ({ input, label, meta }) => {
		const className = `field ${meta.error && meta.touched ? "error" : ""}`;
		return (
			<div className={className}>
				<label>{label}</label>
				<input {...input} autoComplete="off" />
				{this.renderError(meta)}
			</div>
		);
	};

	onSubmit = formValues => {
		this.props.createStream(formValues);
	};

	render() {
		return (
			<form
				className="ui form error"
				onSubmit={this.props.handleSubmit(this.onSubmit)}
			>
				<Field
					name="title"
					label="Enter title"
					component={this.renderInput}
				/>
				<Field
					name="description"
					label="Enter description"
					component={this.renderInput}
				/>
				<button className="ui button primary">Send</button>
			</form>
		);
	}
}

const validate = formValues => {
	const errors = {};
	if (!formValues.title) {
		errors.title = "u must enter a title";
	}
	if (!formValues.description) {
		errors.description = "u must enter a description";
	}

	return errors;
};

const formWrapped = reduxForm({
	form: "streamCreate",
	validate: validate
})(StreamCreate);

export default connect(
	null,
	{ createStream }
)(formWrapped);
