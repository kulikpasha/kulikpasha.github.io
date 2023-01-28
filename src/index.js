import { printfigure } from "./utils";
const table = document.createElement("table");
table.cellPadding = 0;
table.cellSpacing = 0;

// const ws = new WebSocket("wss://bf43-180-254-226-99.ngrok.io");
const ws = new WebSocket("ws://localhost:3000");

ws.addEventListener("open", onWebSocketOpen);
ws.addEventListener("message", onMessageFromServer);

function onWebSocketOpen(event) {
  const roomId = prompt("Please enter room id");
  sendOpenRoom(roomId);
}

function onMessageFromServer(event) {
  const message = JSON.parse(event.data);
  if (message.type === "next-state") {
    table.innerHTML = "";
    renderfield(message.payload.state);
  }
}

function renderfield(state) {
  for (let i = 0; i < 8; i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j < 8; j++) {
      const td = document.createElement("td");
      if (i % 2 != j % 2 && state.field[i][j].h == 0) {
        td.classList.add("black");
      } else if (i % 2 != j % 2 && state.field[i][j].h == 1) {
        td.classList.add("hoveredblack");
      }
      if (i % 2 == j % 2 && state.field[i][j].h == 1) {
        td.classList.add("hoveredwhite");
      }
      if (state.field[i][j].h == 2) {
        td.classList.add("clicked");
      }
      if (state.field[i][j].h == 3) {
        td.classList.add("attack");
      }
      if (state.field[i][j].h == 4) {
        td.classList.add("castles");
      }
      td.innerHTML = printfigure(state, i, j);
      if (state.field[i][j].p == 1) {
        td.classList.add("playerWhite");
      }
      if (state.field[i][j].p == -1) {
        td.classList.add("playerBlack");
      }
      td.onclick = () => {
        sendNextTurn(i, j);
      };
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  document.body.appendChild(table);
  if (window.innerWidth >= window.innerHeight) {
    table.style.width = document.documentElement.clientHeight;
    table.style.height = document.documentElement.clientHeight;
  } else if (window.innerHeight > window.innerWidth) {
    table.style.width = document.documentElement.clientWidth;
    table.style.height = document.documentElement.clientWidth;
  }
}

function sendNextTurn(i, j) {
  ws.send(JSON.stringify({ type: "next-turn", payload: { i, j } }));
}

function sendOpenRoom(roomId) {
  ws.send(JSON.stringify({ type: "open-room", payload: { roomId } }));
}
