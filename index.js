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
