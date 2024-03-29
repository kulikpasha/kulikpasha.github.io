import { king } from "./king.mjs";
import { rook } from "./rook.mjs";
import { whitepawn } from "./pawns.mjs";
import { blackpawn } from "./pawns.mjs";
import { bishop } from "./bishop.mjs";
import { horse } from "./horse.mjs";
import { queen } from "./queen.mjs";
import { castles } from "./utils.mjs";

export function createState() {
  // prettier-ignore
  return {
    turn: 1,
    field: [
      [{p: -1, t: "R", h: 0, m: 0}, {p: -1, t: "H", h: 0},{p: -1, t: "B", h: 0},{p: -1, t: "Q", h: 0},{p: -1, t: "K", h: 0, m: 0},{p: -1, t: "B", h: 0},{p: -1, t: "H", h: 0},{p: -1, t: "R", h: 0, m: 0}],
      [{p: -1, t: "P", h: 0},{p: -1, t: "P", h: 0},{p: -1, t: "P", h: 0},{p: -1, t: "P", h: 0},{p: -1, t: "P", h: 0},{p: -1, t: "P", h: 0},{p: -1, t: "P", h: 0},{p: -1, t: "P", h: 0}],
      [{t: "&nbsp;", h: 0}, {t: "&nbsp;", h: 0},{t: "&nbsp;", h: 0},{t: "&nbsp;", h: 0},{t: "&nbsp;", h: 0},{t: "&nbsp;", h: 0},{t: "&nbsp;", h: 0},{t: "&nbsp;", h: 0}],
      [{t: "&nbsp;", h: 0}, {t: "&nbsp;", h: 0},{t: "&nbsp;", h: 0},{t: "&nbsp;", h: 0},{t: "&nbsp;", h: 0},{t: "&nbsp;", h: 0},{t: "&nbsp;", h: 0},{t: "&nbsp;", h: 0}],
      [{t: "&nbsp;", h: 0}, {t: "&nbsp;", h: 0},{t: "&nbsp;", h: 0},{t: "&nbsp;", h: 0},{t: "&nbsp;", h: 0},{t: "&nbsp;", h: 0},{t: "&nbsp;", h: 0},{t: "&nbsp;", h: 0}],
      [{t: "&nbsp;", h: 0}, {t: "&nbsp;", h: 0},{t: "&nbsp;", h: 0},{t: "&nbsp;", h: 0},{t: "&nbsp;", h: 0},{t: "&nbsp;", h: 0},{t: "&nbsp;", h: 0},{t: "&nbsp;", h: 0}],
      [{p: 1, t: "P", h: 0}, {p: 1, t: "P", h: 0},{p: 1, t: "P", h: 0},{p: 1, t: "P", h: 0},{p: 1, t: "P", h: 0},{p: 1, t: "P", h: 0},{p: 1, t: "P", h: 0},{p: 1, t: "P", h: 0}],
      [{p: 1, t: "R", h: 0, m: 0}, {p: 1, t: "H", h: 0},{p: 1, t: "B", h: 0},{p: 1, t: "Q", h: 0},{p: 1, t: "K", h: 0, m: 0},{p: 1, t: "B", h: 0},{p: 1, t: "H", h: 0},{p: 1, t: "R", h: 0, m: 0}]
    ],
    frstclick: { x: -1, y: -1, t: 0, p: 0 },
    horseturns: [
      [2, 1],[2, -1],[-2, 1],[-2, -1],[1, 2],[1, -2],[-1, 2],[-1, -2]
    ],
    pd: { i: -1, j:-1 },
  };
}

export function nextTurn(state, i, j) {
  if (
    state.frstclick.t == 0 &&
    state.field[i][j].t != "&nbsp;" &&
    state.field[i][j].p == state.turn
  ) {
    state.frstclick = {
      x: i,
      y: j,
      t: state.field[i][j].t,
      p: state.field[i][j].p,
      m: state.field[i][j].m,
    };
    state.field[i][j].h = 2;
    if (state.field[i][j].t == "K") {
      king(state, i, j);
    } else if (state.field[i][j].t == "Q") {
      queen(state, i, j);
    } else if (state.field[i][j].t == "R") {
      rook(state, i, j);
    } else if (state.field[i][j].t == "B") {
      bishop(state, i, j);
    } else if (state.field[i][j].t == "H") {
      horse(state, i, j);
    } else if (state.field[i][j].t == "P" && state.field[i][j].p == "1") {
      whitepawn(state, i, j);
    } else if (state.field[i][j].t == "P" && state.field[i][j].p == "-1") {
      blackpawn(state, i, j);
    }
  } else {
    attack(state, i, j);
  }
}

function attack(state, i, j) {
  if (
    state.field[i][j].h == 1 ||
    state.field[i][j].h == 3 ||
    state.field[i][j].h == 10
  ) {
    if (state.field[i][j].h == 3 && state.pd.i == i && state.pd.j == j) {
      state.field[state.frstclick.x][j] = { t: "&nbsp;" };
    }
    state.pd.j = 0;
    state.pd.i = 0;
    if (state.frstclick.m === 0) {
      state.field[state.frstclick.x][state.frstclick.y].m = 1;
    }
    if (state.field[i][j].h == 10) {
      state.pd.j = j;
      state.pd.i = i + state.turn;
    }

    state.field[i][j] = state.field[state.frstclick.x][state.frstclick.y];
    state.field[state.frstclick.x][state.frstclick.y] = { t: "&nbsp;" };
    state.turn = state.turn * -1;
  } else if (state.field[i][j].h == 4) {
    castles(state, j);
    if (state.frstclick.m === 0) {
      state.field[state.frstclick.x][state.frstclick.y].m = 1;
    }
    state.turn = state.turn * -1;
  } else {
    for (let x = 0; x < 8; x++) {
      for (let y = 0; y < 8; y++) {
        state.field[x][y].h = 0;
      }
    }
  }

  state.frstclick = { x: -1, y: -1, t: 0, p: 0 };
  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
      state.field[x][y].h = 0;
    }
  }
}
