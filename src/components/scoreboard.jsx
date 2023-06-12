import { useLocalStorage } from '../hooks';

import './scoreboard.css';

const ScoreBoard = ({ winCount, lossCount, tieCount }) => {
  return (
    <div className="scoreboard">
      <div className="score-container">
        Wins: <span>{winCount}</span>
      </div>
      <div className="score-container">
        Losses: <span>{lossCount}</span>
      </div>
      <div className="score-container">
        Ties: <span>{tieCount}</span>
      </div>
    </div>
  );
};

export default ScoreBoard;
