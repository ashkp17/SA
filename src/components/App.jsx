import React, { useRef, useState, useCallback } from "react";
import produce from "immer";

const noRows = 30;
const noCols = 30;

const redun = [
  [0.1],
  [0, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0]
];

function App() {
  const gridGenerator = () => {
    const rows = [];
    for (let i = 0; i < noRows; i++) {
      rows.push(Array.from(Array(noCols), () => 0));
    }
    return rows;
  };

  const [grid, setCell] = useState(() => {
    return gridGenerator();
  });

  const genRandomGame = () => {
    const rows = [];
    for (let i = 0; i < noRows; i++) {
      rows.push(
        Array.from(Array(noCols), () => (Math.random() > 0.5 ? 1 : 0))
      );
    }
    return rows;
  };

  const [Simulation, setSimulation] = useState(false);

  const runningRef = useRef(Simulation);
  runningRef.current = Simulation;

  const runGame = useCallback(() => {
    if (!runningRef.current) {
      return;
    }
    setCell((g) => {
      return produce(g, (gridCopy) => {
        for (let i = 0; i < noRows; i++) {
          for (let k = 0; k < noCols; k++) {
            let neighbors = 0;
            redun.forEach(([x, y]) => {
              const newI = i + x;
              const newK = k + y;
              if (newI >= 0 && newK >= 0 && newI < noRows && newK < noCols) {
                neighbors += g[newI][newK];
              }
            });
            if (neighbors < 2 || neighbors > 3) {
              gridCopy[i][k] = 0;
            } else if (g[i][k] === 0 && neighbors === 3) {
              gridCopy[i][k] = 1;
            }
          }
        }
      });
    });
    setTimeout(runGame, 100);
  }, []);

  return (
    <>
  
      <div
        style={{
          display: "grid",
          justifyContent: "center",
          gridTemplateColumns: `repeat(${noCols}, 20px)`
        }}
      >
        {grid.map((rows, i) =>
          rows.map((col, k) => (
            <div
              className="table"
              onClick={() => {
                const newGrid = produce(grid, (gridCopy) => {
                  gridCopy[i][k] = grid[i][k] ? 0 : 1;
                });
                setCell(newGrid);
              }}
              key={`${i}-${k}`}
              style={{
                width: 15,
                height: 15,
                background: grid[i][k] ? "#000" : undefined
              }}
            ></div>
          ))
        )}
      </div>
      <button
          onClick={() => {
            setCell(genRandomGame());
          }}
        >
          Random Stimulation
        </button>
      <button
        onClick={() => {
          setSimulation(!Simulation);
          if (!Simulation) {
            runningRef.current = true;
            runGame();
          }
        }}
      >
        {Simulation ? "Stop" : "start"} Simulation
      </button>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center"
        }}
      >
        <button
          onClick={() => {
            setCell(gridGenerator());
          }}
        >
          Reset
        </button>
        
      </div>
      <div style={{ justifyContent: "space-between", textAlign: "left" }}>
       
      </div>
    </>
  );
}

export default App;
