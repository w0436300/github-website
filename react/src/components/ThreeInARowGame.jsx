import { useEffect, useMemo, useState } from 'react';
import { usePortfolioStore } from '../store.js';

const WIN_LINES = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6],
];

function getWinner(board) {
  for (const [a, b, c] of WIN_LINES) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) return board[a];
  }
  return null;
}

function chooseComputerMove(board) {
  const available = board.map((cell, index) => cell ? null : index).filter((index) => index !== null);
  for (const player of ['O', 'X']) {
    for (const index of available) {
      const preview = [...board];
      preview[index] = player;
      if (getWinner(preview) === player) return index;
    }
  }
  if (available.includes(4)) return 4;
  const corners = [0, 2, 6, 8].filter((index) => available.includes(index));
  if (corners.length) return corners[Math.floor(Math.random() * corners.length)];
  return available[Math.floor(Math.random() * available.length)];
}

export default function ThreeInARowGame() {
  const open = usePortfolioStore((state) => state.miniGameOpen);
  const setOpen = usePortfolioStore((state) => state.setMiniGameOpen);
  const [board, setBoard] = useState(() => Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(true);
  const winner = useMemo(() => getWinner(board), [board]);
  const isDraw = !winner && board.every(Boolean);

  const restart = () => {
    setBoard(Array(9).fill(null));
    setPlayerTurn(true);
  };

  useEffect(() => {
    if (open) restart();
  }, [open]);

  useEffect(() => {
    if (!open || playerTurn || winner || isDraw) return undefined;
    const timer = window.setTimeout(() => {
      setBoard((current) => {
        const move = chooseComputerMove(current);
        if (move === undefined) return current;
        const next = [...current];
        next[move] = 'O';
        return next;
      });
      setPlayerTurn(true);
    }, 420);
    return () => window.clearTimeout(timer);
  }, [open, playerTurn, winner, isDraw]);

  if (!open) return null;

  const status = winner === 'X'
    ? 'You won! ✦'
    : winner === 'O'
      ? 'Claire wins this round!'
      : isDraw
        ? 'A perfect draw!'
        : playerTurn ? 'Your turn — place X' : 'Claire is thinking…';

  const play = (index) => {
    if (!playerTurn || board[index] || winner || isDraw) return;
    setBoard((current) => current.map((cell, cellIndex) => cellIndex === index ? 'X' : cell));
    setPlayerTurn(false);
  };

  return (
    <div className="mini-game-layer" role="presentation" onMouseDown={() => setOpen(false)}>
      <section className="mini-game-card" role="dialog" aria-modal="true" aria-labelledby="mini-game-title" onMouseDown={(event) => event.stopPropagation()}>
        <button type="button" className="mini-game-close" onClick={() => setOpen(false)} aria-label="Close game">×</button>
        <div className="mini-game-heading">
          <img src={`${import.meta.env.BASE_URL || '/'}img/claire-dialogue.png`} alt="" />
          <div><span>TAKE A BREAK</span><h2 id="mini-game-title">Three in a Row</h2></div>
        </div>
        <p className="mini-game-status" aria-live="polite">{status}</p>
        <div className="mini-game-board" role="grid" aria-label="Three in a Row board">
          {board.map((cell, index) => (
            <button
              type="button"
              className={`mini-game-cell ${cell ? `is-${cell.toLowerCase()}` : ''}`}
              key={index}
              onClick={() => play(index)}
              disabled={Boolean(cell) || !playerTurn || Boolean(winner) || isDraw}
              aria-label={cell ? `Cell ${index + 1}: ${cell}` : `Play cell ${index + 1}`}
            >{cell}</button>
          ))}
        </div>
        <div className="mini-game-actions">
          <button type="button" className="game-choice secondary-choice" onClick={() => setOpen(false)}>Back to the water</button>
          <button type="button" className="game-choice primary-choice" onClick={restart}>Play again ↻</button>
        </div>
      </section>
    </div>
  );
}
