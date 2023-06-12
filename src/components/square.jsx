import './square.css';

const Square = ({ square, idx, clickSquare, win }) => {
  return (
    <div
      className={`square ${square ? 'disabled' : ''} ${win ? 'win' : ''}`}
      onClick={() => clickSquare(idx)}
    >
      {square}
    </div>
  );
};

export default Square;
