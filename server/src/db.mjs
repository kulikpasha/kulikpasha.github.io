import sqlite3 from "sqlite3";
import { dirname } from "path";
import { fileURLToPath } from "url";

import { createState } from "./state.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dbFile = __dirname + "/../chess.sqlite";
console.log(dbFile);

const db = new sqlite3.Database(
  dbFile,
  sqlite3.OPEN_CREATE | sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) throw err;
  }
);

db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS rooms(room_id text unique, state text)");
});

export function getRoomState(roomId) {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM rooms WHERE room_id = ?", [roomId], (err, rows) => {
      if (err) {
        reject(err);
        return;
      }

      if (rows.length > 0) {
        resolve(JSON.parse(rows[0].state));
        return;
      }

      const state = createState();
      const sql = "INSERT INTO rooms (room_id, state) VALUES(?, ?)";
      const statement = db.prepare(sql);
      statement.run([roomId, JSON.stringify(state)], (err) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(state);
      });
      statement.finalize();
    });
  });
}

export function updateRoomState(roomId, nextState) {
  const sql = "UPDATE rooms SET state = ? WHERE room_id = ?";
  db.run(sql, [JSON.stringify(nextState), roomId], (err) => {
    if (err) throw err;
  });
}
