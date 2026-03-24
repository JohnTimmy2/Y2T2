import React, { useState } from "react";
import Entity from "./Entity";
import GameOver from "./GameOver";
import Log from "./Log";

// ----------------------------------------------------------------------------------------------------------
// HELPER FUNCTIONS
// ----------------------------------------------------------------------------------------------------------
function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function createLogAttack(isPlayer, damage) {
  return {
    isPlayer: isPlayer,
    isDamage: true,
    text: ` takes ${damage} damages`,
  };
}

function createLogHeal(healing) {
  return {
    isPlayer: true,
    isDamage: false,
    text: ` heals ${healing} life points`,
  };
}

function Game() {
  // ----------------------------------------------------------------------------------------------------------
  // STATES & VARIABLES
  // ----------------------------------------------------------------------------------------------------------
  const [playerHealth, setPlayerHealth] = useState(100);
  const [monsterHealth, setMonsterHealth] = useState(100);
  const [turnCount, setTurnCount] = useState(0);
  const [logs, setLogs] = useState([]);
  const [gameOver, setGameOver] = useState(null); // "win", "lose", "draw"

  // ----------------------------------------------------------------------------------------------------------
  // BUTTONS EVENT FUNCTIONS
  // ----------------------------------------------------------------------------------------------------------
  function attackHandler() {
    const damage = getRandomValue(5, 12);
    setMonsterHealth((prev) => Math.max(prev - damage, 0));
    addLog(createLogAttack(true, damage));
    monsterAttack();
    setTurnCount((prev) => prev + 1);
  }

  function specialAttackHandler() {
    if (turnCount % 3 !== 0) return;
    const damage = getRandomValue(10, 25);
    setMonsterHealth((prev) => Math.max(prev - damage, 0));
    addLog(createLogAttack(true, damage));
    monsterAttack();
    setTurnCount((prev) => prev + 1);
  }

  function healHandler() {
    const heal = getRandomValue(8, 20);
    setPlayerHealth((prev) => Math.min(prev + heal, 100));
    addLog(createLogHeal(heal));
    monsterAttack();
    setTurnCount((prev) => prev + 1);
  }

  function suicideHandler() {
    setPlayerHealth(0);
    setGameOver("lose");
  }

  function monsterAttack() {
    const damage = getRandomValue(8, 15);
    setPlayerHealth((prev) => Math.max(prev - damage, 0));
    addLog(createLogAttack(false, damage));
  }

  function restartGame() {
    setPlayerHealth(100);
    setMonsterHealth(100);
    setTurnCount(0);
    setLogs([]);
    setGameOver(null);
  }

  function addLog(log) {
    setLogs((prevLogs) => [log, ...prevLogs]);
  }

  // ----------------------------------------------------------------------------------------------------------
  // CHECK GAME OVER
  // ----------------------------------------------------------------------------------------------------------
  if (!gameOver) {
    if (playerHealth <= 0 && monsterHealth <= 0) {
      setGameOver("draw");
    } else if (playerHealth <= 0) {
      setGameOver("lose");
    } else if (monsterHealth <= 0) {
      setGameOver("win");
    }
  }

  // ----------------------------------------------------------------------------------------------------------
  // MAIN TEMPLATE
  // ----------------------------------------------------------------------------------------------------------
  return (
    <>
      <Entity name="Monster" health={monsterHealth} />
      <Entity name="Player" health={playerHealth} />

      {gameOver && (
        <GameOver
          title={
            gameOver === "win"
              ? "You won!"
              : gameOver === "lose"
              ? "You lost!"
              : "It's a draw!"
          }
          restartGame={restartGame}
        />
      )}

      {!gameOver && (
        <section id="controls">
          <button onClick={attackHandler}>ATTACK</button>
          <button onClick={specialAttackHandler} disabled={turnCount % 3 !== 0}>
            SPECIAL !
          </button>
          <button onClick={healHandler}>HEAL</button>
          <button onClick={suicideHandler}>KILL YOURSELF</button>
        </section>
      )}

      <Log logs={logs} />
    </>
  );
}

export default Game;
