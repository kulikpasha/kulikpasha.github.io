import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import expressWs from "express-ws";

import { nextTurn } from "./state.mjs";
import { getRoomState, updateRoomState } from "./db.mjs";

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(express.static("static"));
expressWs(app);

const port = process.env.PORT || 3000;
// const port = 3000;
console.log(port);

function sendStateToClient(ws, state) {
  ws.send(JSON.stringify({ type: "next-state", payload: { state } }));
}

const rooms = {};

app.ws("/", (currClientWs, req) => {
  let roomId = "";
  currClientWs.on("message", async (data) => {
    const message = JSON.parse(data);
    if (message.type === "open-room") {
      roomId = message.payload.roomId;
      let room = rooms[roomId];
      if (!room) {
        try {
          room = { state: await getRoomState(roomId), clients: [] };
          rooms[roomId] = room;
        } catch (error) {
          console.error("error from getRoomState", error);
        }
      }
      if (room.clients.length < 2) {
        room.clients.push(currClientWs);
        sendStateToClient(currClientWs, room.state);
      }
    } else if (message.type === "next-turn") {
      if (!roomId) return;
      const room = rooms[roomId];
      nextTurn(room.state, message.payload.i, message.payload.j);
      updateRoomState(roomId, room.state);
      room.clients.forEach((clientWs) => {
        sendStateToClient(clientWs, room.state);
      });
    }
  });

  currClientWs.on("close", () => {
    if (!roomId) return;
    rooms[roomId].clients = rooms[roomId].clients.filter((clientWs) => {
      return currClientWs !== clientWs;
    });
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
