import { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
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

function StarCatchGame({ onBack }) {
  const [playerX, setPlayerX] = useState(50);
  const [stars, setStars] = useState([]);
  const [score, setScore] = useState(0);
  const [misses, setMisses] = useState(0);
  const [running, setRunning] = useState(true);
  const fieldRef = useRef(null);
  const playerXRef = useRef(50);

  const movePlayer = (next) => {
    const value = Math.max(8, Math.min(92, next));
    playerXRef.current = value;
    setPlayerX(value);
  };

  const restart = () => {
    setStars([]);
    setScore(0);
    setMisses(0);
    movePlayer(50);
    setRunning(true);
  };

  useEffect(() => {
    if (!running) return undefined;
    const spawnTimer = window.setInterval(() => {
      setStars((current) => [...current, { id: `${Date.now()}-${Math.random()}`, x: 8 + Math.random() * 84, y: -8 }]);
    }, 620);
    return () => window.clearInterval(spawnTimer);
  }, [running]);

  useEffect(() => {
    if (!running) return undefined;
    const fallTimer = window.setInterval(() => {
      setStars((current) => {
        let caught = 0;
        let missed = 0;
        const next = [];
        current.forEach((star) => {
          const moved = { ...star, y: star.y + 2.9 };
          if (moved.y >= 78 && moved.y <= 92 && Math.abs(moved.x - playerXRef.current) < 12) caught += 1;
          else if (moved.y > 100) missed += 1;
          else next.push(moved);
        });
        if (caught) setScore((value) => value + caught);
        if (missed) setMisses((value) => value + missed);
        return next;
      });
    }, 42);
    return () => window.clearInterval(fallTimer);
  }, [running]);

  useEffect(() => {
    if (misses >= 3) setRunning(false);
  }, [misses]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'ArrowLeft' || event.key.toLowerCase() === 'a') {
        event.preventDefault();
        movePlayer(playerXRef.current - 7);
      }
      if (event.key === 'ArrowRight' || event.key.toLowerCase() === 'd') {
        event.preventDefault();
        movePlayer(playerXRef.current + 7);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const followPointer = (event) => {
    if (!fieldRef.current || !running) return;
    const bounds = fieldRef.current.getBoundingClientRect();
    movePlayer(((event.clientX - bounds.left) / bounds.width) * 100);
  };

  return (
    <>
      <div className="star-catch-score"><b>Score {score}</b><span>{'♥'.repeat(Math.max(0, 3 - misses))}{'♡'.repeat(Math.min(3, misses))}</span></div>
      <div className="star-catch-field" ref={fieldRef} onPointerDown={followPointer} onPointerMove={(event) => { if (event.buttons) followPointer(event); }}>
        <span className="star-catch-hint">← A · drag · D →</span>
        {stars.map((star) => <i key={star.id} className="falling-star" style={{ left: `${star.x}%`, top: `${star.y}%` }}>★</i>)}
        <div className="star-catch-player" style={{ left: `${playerX}%` }} aria-label="Beaver catcher">🦫<small>▰</small></div>
        {!running && <div className={`star-catch-result ${score >= 10 ? 'is-win' : 'is-encourage'}`}><strong>{score >= 10 ? 'YOU WIN!!! ✦' : 'Great try — go again! ♥'}</strong><span>You caught {score} stars</span></div>}
      </div>
      <div className="mini-game-actions">
        <button type="button" className="game-choice secondary-choice" onClick={onBack}>Choose another game</button>
        <button type="button" className="game-choice primary-choice" onClick={restart}>Play again ↻</button>
      </div>
    </>
  );
}

const MATCH_SYMBOLS = ['★', '☁', '♥', '✦'];
const createMatchDeck = () => [...MATCH_SYMBOLS, ...MATCH_SYMBOLS]
  .map((symbol, index) => ({ id: `${symbol}-${index}`, symbol }))
  .sort(() => Math.random() - 0.5);

function LilyPadMatch({ onBack }) {
  const [cards, setCards] = useState(createMatchDeck);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);
  const locked = flipped.length === 2;

  const restart = () => {
    setCards(createMatchDeck());
    setFlipped([]);
    setMatched([]);
    setMoves(0);
  };

  useEffect(() => {
    if (flipped.length !== 2) return undefined;
    const [first, second] = flipped;
    const isMatch = cards[first].symbol === cards[second].symbol;
    const timer = window.setTimeout(() => {
      if (isMatch) setMatched((current) => [...current, cards[first].id, cards[second].id]);
      setFlipped([]);
    }, isMatch ? 420 : 700);
    return () => window.clearTimeout(timer);
  }, [cards, flipped]);

  const reveal = (index) => {
    if (locked || flipped.includes(index) || matched.includes(cards[index].id)) return;
    setFlipped((current) => [...current, index]);
    if (flipped.length === 1) setMoves((value) => value + 1);
  };

  const complete = matched.length === cards.length;
  return (
    <>
      <p className={`mini-game-status ${complete ? 'is-win' : 'is-playing'}`} aria-live="polite">{complete ? `YOU WIN!!! All pairs matched in ${moves} moves ✦` : `Find all four pairs · ${moves} moves`}</p>
      <div className="lily-match-board" role="grid" aria-label="Lily Pad Match board">
        {cards.map((card, index) => {
          const visible = flipped.includes(index) || matched.includes(card.id);
          return <button type="button" key={card.id} className={`lily-match-card ${visible ? 'is-visible' : ''} ${matched.includes(card.id) ? 'is-matched' : ''}`} onClick={() => reveal(index)} aria-label={visible ? card.symbol : `Hidden lily pad ${index + 1}`}>{visible ? card.symbol : '●'}</button>;
        })}
      </div>
      <div className="mini-game-actions">
        <button type="button" className="game-choice secondary-choice" onClick={onBack}>Choose another game</button>
        <button type="button" className="game-choice primary-choice" onClick={restart}>Shuffle ↻</button>
      </div>
    </>
  );
}

export default function ThreeInARowGame() {
  const open = usePortfolioStore((state) => state.miniGameOpen);
  const setOpen = usePortfolioStore((state) => state.setMiniGameOpen);
  const startWorldGame = usePortfolioStore((state) => state.startWorldGame);
  const [gameMode, setGameMode] = useState(null);
  const [board, setBoard] = useState(() => Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(true);
  const winner = useMemo(() => getWinner(board), [board]);
  const isDraw = !winner && board.every(Boolean);

  const restart = () => {
    setBoard(Array(9).fill(null));
    setPlayerTurn(true);
  };

  useEffect(() => {
    if (open) {
      restart();
      setGameMode(null);
    }
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
    ? 'YOU WIN!!! Brilliant move! ✦'
    : winner === 'O'
      ? 'So close! You’ve got the next round ♥'
      : isDraw
        ? 'Great match — it’s a draw! ✦'
        : playerTurn ? 'Your turn — place X' : 'Claire is thinking…';
  const statusTone = winner === 'X' ? 'is-win' : winner === 'O' ? 'is-encourage' : isDraw ? 'is-draw' : 'is-playing';

  const play = (index) => {
    if (!playerTurn || board[index] || winner || isDraw) return;
    setBoard((current) => current.map((cell, cellIndex) => cellIndex === index ? 'X' : cell));
    setPlayerTurn(false);
  };

  return createPortal((
    <div className="mini-game-layer" role="presentation" onMouseDown={() => setOpen(false)}>
      <section className="mini-game-card" role="dialog" aria-modal="true" aria-labelledby="mini-game-title" onMouseDown={(event) => event.stopPropagation()}>
        <button type="button" className="mini-game-close" onClick={() => setOpen(false)} aria-label="Close game">×</button>
        <div className="mini-game-heading">
          <img src={`${import.meta.env.BASE_URL || '/'}img/claire-dialogue.png`} alt="" />
          <div><span>TAKE A BREAK</span><h2 id="mini-game-title">{gameMode === 'stars' ? 'Beaver Star Catch' : gameMode === 'three' ? 'Three in a Row' : gameMode === 'match' ? 'Lily Pad Match' : 'Pick a quick game'}</h2></div>
        </div>
        {!gameMode && (
          <div className="mini-game-picker">
            <button type="button" onClick={() => setGameMode('stars')}><b>★</b><span><strong>Beaver Star Catch</strong><small>Catch stars · 30 seconds</small></span></button>
            <button type="button" onClick={startWorldGame}><b>≈</b><span><strong>Paddleboard Dodge</strong><small>Return to the ocean · dodge obstacles</small></span></button>
            <button type="button" onClick={() => setGameMode('three')}><b>×○</b><span><strong>Three in a Row</strong><small>A quick strategy round</small></span></button>
            <button type="button" onClick={() => setGameMode('match')}><b>●</b><span><strong>Lily Pad Match</strong><small>Find four matching pairs</small></span></button>
            <button type="button" className="game-choice secondary-choice" onClick={() => setOpen(false)}>Back to the water</button>
          </div>
        )}
        {gameMode === 'stars' && <StarCatchGame onBack={() => setGameMode(null)} />}
        {gameMode === 'match' && <LilyPadMatch onBack={() => setGameMode(null)} />}
        {gameMode === 'three' && (
          <>
            <p className={`mini-game-status ${statusTone}`} aria-live="polite">{status}</p>
            <div className="mini-game-board" role="grid" aria-label="Three in a Row board">
              {board.map((cell, index) => (
                <button type="button" className={`mini-game-cell ${cell ? `is-${cell.toLowerCase()}` : ''}`} key={index} onClick={() => play(index)} disabled={Boolean(cell) || !playerTurn || Boolean(winner) || isDraw} aria-label={cell ? `Cell ${index + 1}: ${cell}` : `Play cell ${index + 1}`}>{cell}</button>
              ))}
            </div>
            <div className="mini-game-actions">
              <button type="button" className="game-choice secondary-choice" onClick={() => setGameMode(null)}>Choose another game</button>
              <button type="button" className="game-choice primary-choice" onClick={restart}>Play again ↻</button>
            </div>
          </>
        )}
      </section>
    </div>
  ), document.body);
}
