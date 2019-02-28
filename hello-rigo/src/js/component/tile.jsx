import React from "react";
import PropType from "prop-types";

export class Tile extends React.Component {
	tileClick(props) {
		props.updateBoard(props.location, props.turn);
	}

	render() {
		return (
			<div
				className={"tile " + this.props.location}
				onClick={() => this.tileClick(this.props)}>
				<p>{this.props.value}</p>
			</div>
		);
	}
}

Tile.propTypes = {
	value: PropType.string,
	location: PropType.number
};
