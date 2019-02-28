import React from "react";
import PropType from "prop-types";

export class Reset extends React.Component {
	render() {
		return <button onClick={this.props.reset}>Reset</button>;
	}
}

Reset.propTypes = {
	reset: PropType.func
};
