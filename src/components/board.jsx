import Square from './square';

import './board.css';

export const Board = ({ board, clickSquare, winningRow }) => {
  return (
    <div className="board">
      {board.map((sq, idx) => (
        <Square
          key={idx}
          square={sq}
          idx={idx}
          clickSquare={clickSquare}
          win={winningRow?.includes(idx)}
        />
      ))}
    </div>
  );
};

export default Board;
