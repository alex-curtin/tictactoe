import { WIN_CONDITIONS, X, O } from '../constants';

const checkDefense = board => {
  console.log('2. checking for defensive move');
  const potWin = WIN_CONDITIONS.find(([a, b, c]) => {
    const boardCon = [board[a], board[b], board[c]];
    const xs = boardCon.filter(sq => sq === X);
    const ox = boardCon.filter(sq => sq === O);
    return xs.length === 2 && ox.length === 0;
  });
  if (!potWin) return null;
  return potWin.find(sq => board[sq] !== X);
};

const checkWin = board => {
  console.log('1. checking for win');
  const potWin = WIN_CONDITIONS.find(([a, b, c]) => {
    const boardCon = [board[a], board[b], board[c]];
    if (boardCon.some(sq => sq === X)) return false;
    return boardCon.filter(sq => sq === O).length === 2;
  });
  if (!potWin) return null;
  return potWin.find(sq => board[sq] !== O);
};

const checkOffense = board => {
  console.log('3. checking for offensive move');
  const row = WIN_CONDITIONS.find(([a, b, c]) => {
    const boardCon = [board[a], board[b], board[c]];
    const hasX = boardCon.some(sq => sq === X);
    const hasO = boardCon.some(sq => sq === O);
    return !hasX && hasO;
  });
  if (!row) return null;
  const pos = row.find(sq => !board[sq]);
  return pos === -1 ? null : pos;
};

const choseRandom = board => {
  console.log('4. choosing at random');
  const openSqs = board
    .map((sq, idx) => (sq ? null : idx))
    .filter(sq => sq !== null);
  console.log('open squares ', openSqs);
  const move = openSqs[Math.floor(Math.random() * openSqs.length)];
  return move;
};

export const computerMove = board => {
  return (
    checkWin(board) ??
    checkDefense(board) ??
    checkOffense(board) ??
    choseRandom(board)
  );
};
