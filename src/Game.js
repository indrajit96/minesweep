import * as React from 'react'
import Board from './Board'
class Game extends React.Component {
    state = {
        h: 8,
        w: 8,
        m: 10
    };

    render () {
        const {h,w,m} = this.state;
        return (
            <div className = 'game'>
                <Board height={h} width={w} mines={m} />
            </div>
        );
    }
  }
  
    export default Game;