import React from "react";
import "../../styles/announcement.scss";
import PropType from "prop-types";

export class Announcement extends React.Component {
	render() {
		let message = "";

		if (this.props.winner === "d") message = "It's a draw!";
		else message = `${this.props.winner.toUpperCase()} is the winner!`;

		return (
			<div
				className={this.props.winner !== "s" ? "visible" : "invisible"}>
				<h3>Game Over: {message}</h3>
			</div>
		);
	}
}

Announcement.propTypes = {
	winner: PropType.string
};
