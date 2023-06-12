import { useEffect, useState } from 'react';

import Board from './board';
import ResetButton from './reset-button';
import { computerMove } from '../lib/computer';
import { WIN_CONDITIONS, COMPUTER, PLAYER, X, O } from '../constants';

const EMPTY_BOARD = Array.from({ length: 9 }, (_, i) => null);

const checkForWinner = board => {
  const row = WIN_CONDITIONS.find(([a, b, c]) => {
    return board[a] && board[a] === board[b] && board[b] === board[c];
  });
  return row ? { winner: board[row[0]], row } : null;
};

const App = () => {
  const [board, setBoard] = useState(EMPTY_BOARD);
  const [turn, setTurn] = useState(PLAYER);
  const [turnCount, setTurnCount] = useState(0);
  const [winningRow, setWinningRow] = useState(null);

  const resetGame = () => {
    setBoard(EMPTY_BOARD);
    setTurn(PLAYER);
    setTurnCount(0);
    setWinningRow(null);
  };

  const makeMove = (id, fill = X) => {
    const newBoard = [...board];
    newBoard[id] = fill;
    setBoard(newBoard);
    setTurnCount(turnCount + 1);
  };

  const clickSquare = id => {
    if (turn !== PLAYER) return;
    makeMove(id);
  };

  useEffect(() => {
    if (turn === COMPUTER) {
      const id = computerMove(board);
      makeMove(id, O);
    }
  }, [turn]);

  useEffect(() => {
    const win = checkForWinner(board);
    if (win) {
      const { winner, row } = win;
      setTurn(null);
      setWinningRow(row);
    } else {
      if (turnCount === 0) {
        setTurn(PLAYER);
      } else {
        setTurn(turn === PLAYER ? COMPUTER : PLAYER);
      }
    }
  }, [board]);

  return (
    <div>
      <ResetButton resetGame={resetGame} />
      <Board board={board} clickSquare={clickSquare} winningRow={winningRow} />
    </div>
  );
};

export default App;
