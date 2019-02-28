import React from "react";
import { Announcement } from "./announcement.jsx";
import { Reset } from "./reset.jsx";
import { Tile } from "./tile.jsx";

//create your first component
export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			gameBoard: [" ", " ", " ", " ", " ", " ", " ", " ", " "],
			turn: "x",
			winner: "s"
		};
	}

	updateBoard(location, turn) {
		if (
			this.state.gameBoard[location] === "x" ||
			this.state.gameBoard[location] === "o" ||
			this.state.winner !== "s"
		) {
			//Invalid move, so we are terminating the function with a return.
			return;
		}

		let currentBoard = this.state.gameBoard;
		currentBoard.splice(location, 1, this.state.turn);
		this.setState({ gameBoard: currentBoard });

		let topRow =
			this.state.gameBoard[0] +
			this.state.gameBoard[1] +
			this.state.gameBoard[2];
		if (topRow === "xxx" || topRow === "ooo") {
			this.setState({ winner: this.state.turn });
			return;
		}

		let middleRow =
			this.state.gameBoard[3] +
			this.state.gameBoard[4] +
			this.state.gameBoard[5];
		if (middleRow === "xxx" || middleRow === "ooo") {
			this.setState({ winner: this.state.turn });
			return;
		}

		let bottomRow =
			this.state.gameBoard[6] +
			this.state.gameBoard[7] +
			this.state.gameBoard[8];
		if (bottomRow === "xxx" || bottomRow === "ooo") {
			this.setState({ winner: this.state.turn });
			return;
		}

		let leftCol =
			this.state.gameBoard[0] +
			this.state.gameBoard[3] +
			this.state.gameBoard[6];
		if (leftCol === "xxx" || leftCol === "ooo") {
			this.setState({ winner: this.state.turn });
			return;
		}

		let middleCol =
			this.state.gameBoard[1] +
			this.state.gameBoard[4] +
			this.state.gameBoard[7];
		if (middleCol === "xxx" || middleCol === "ooo") {
			this.setState({ winner: this.state.turn });
			return;
		}

		let rightCol =
			this.state.gameBoard[2] +
			this.state.gameBoard[5] +
			this.state.gameBoard[8];
		if (rightCol === "xxx" || rightCol === "ooo") {
			this.setState({ winner: this.state.turn });
			return;
		}

		let diagOne =
			this.state.gameBoard[0] +
			this.state.gameBoard[4] +
			this.state.gameBoard[8];
		if (diagOne === "xxx" || diagOne === "ooo") {
			this.setState({ winner: this.state.turn });
			return;
		}

		let diagTwo =
			this.state.gameBoard[2] +
			this.state.gameBoard[4] +
			this.state.gameBoard[6];
		if (diagTwo === "xxx" || diagTwo === "ooo") {
			this.setState({ winner: this.state.turn });
			return;
		}

		let moves = this.state.gameBoard.join("").replace(/ /g, "");
		if (moves.length === 9) {
			this.setState({ winner: "d" });
		}
		this.setState({ turn: this.state.turn === "x" ? "o" : "x" });
	}

	resetGame = () => {
		this.setState({
			gameBoard: [" ", " ", " ", " ", " ", " ", " ", " ", " "],
			turn: "x",
			winner: "s"
		});
	};

	render() {
		return (
			<div>
				<div className="header">
					<h2>Tennessee Tic-Tac-Toe!</h2>
					<Reset reset={this.resetGame} />
				</div>
				<div className="container">
					{this.state.gameBoard.map(
						function(item, index) {
							return (
								<Tile
									key={index}
									location={index}
									value={item}
									updateBoard={this.updateBoard.bind(this)}
									turn={this.state.turn}
								/>
							);
						}.bind(this)
					)}
				</div>
				<div className="endOfGame">
					<Announcement winner={this.state.winner} />
				</div>
			</div>
		);
	}
}
