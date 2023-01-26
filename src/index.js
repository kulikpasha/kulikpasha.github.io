import { printfigure } from "./utils";
const table = document.createElement("table");
table.cellPadding = 0;
table.cellSpacing = 0;

const BASE_URL = "http://localhost:3000";

function start() {
  fetch(`${BASE_URL}/start`, { method: "GET" })
    .then((response) => response.json())
    .then((state) => {
      renderfield(state);
    });
}

start();

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
        sendAction(i, j);
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

function sendAction(i, j) {
  fetch(`${BASE_URL}/action`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ i, j }),
  })
    .then((response) => response.json())
    .then((nextState) => {
      table.innerHTML = "";
      renderfield(nextState);
    });
}
