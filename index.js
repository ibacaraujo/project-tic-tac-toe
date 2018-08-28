class Square extends React.Component {
	render() {
	  return (
      <button className="square">
        {/*TODO*/}
      </button>
	  )
	}
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square />;
  }
  
  render() {
    return (
      <div>Board</div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}
