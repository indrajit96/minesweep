import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board';
import './index.css';

class Game extends React.Component {

    /*
    Beginner: 10 mines, 8x8 board
    Intermediate: 20 mines, 12x12 board
    Expert: 40 mines, 16x16 board
    */
    state = {
        height: 8,
        width: 8,
        mines: 20,
    };

    handleGameStart = () => {
        let difficulty = document.querySelector("#level_select");
        if (difficulty.value === "beginner") {
            this.setState({
                height: 8,
                width: 8,
                mines: 20,
            });
        }
        if (difficulty.value === "intermediate") {
            this.setState({
                height: 12,
                width: 12,
                mines: 40,
            });
        }
        if (difficulty.value === "expert") {
            this.setState({
                height: 16,
                width: 16,
                mines: 80,
            });
        }
    }

    render() {
        const { height, width, mines } = this.state;
        return (
            <div className="game">
                <div className="game-info">
                    <div className="instructions">
                        <h2>Rules</h2>
                        <p>Please look them up before you start.</p>
                        <h2>IT'S NOT LUCK BASED</h2>
                    </div>
                    <h4>Let the GAME begin</h4>
                    <span className="info">How GOOD you think you are :
                        <select id="level_select">
                            <option value="beginner"> Beginner </option>
                            <option value="intermediate"> Intermediate </option>
                            <option value="expert"> Expert </option>
                        </select>
                    </span>
                    <br></br>
                    <br></br>
                    <br></br>
                    <button onClick={this.handleGameStart}>Start</button>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>

                <Board height={height} width={width} mines={mines} />
                
            </div>
        );
    }
}

ReactDOM.render(<Game />, document.getElementById('root'));