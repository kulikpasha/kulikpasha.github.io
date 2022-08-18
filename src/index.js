import { king } from "./king";
import { rook } from "./rook";
import { whitepawn } from "./pawns";
import { blackpawn } from "./pawns";
import { bishop } from "./bishop";
import { horse } from "./horse";
import { queen } from "./queen";
import { checkcastles } from "./checkcastlespossibility";
const table = document.createElement("table");
table.cellPadding = 0;
table.cellSpacing = 0;

// prettier-ignore
const ctx = {
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
};

function renderfield() {
  for (let i = 0; i < 8; i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j < 8; j++) {
      const td = document.createElement("td");
      if (i % 2 != j % 2 && ctx.field[i][j].h == 0) {
        td.classList.add("black");
      } else if (i % 2 != j % 2 && ctx.field[i][j].h == 1) {
        td.classList.add("hoveredblack");
      }
      if (i % 2 == j % 2 && ctx.field[i][j].h == 1) {
        td.classList.add("hoveredwhite");
      }
      if (ctx.field[i][j].h == 2) {
        td.classList.add("clicked");
      }
      if (ctx.field[i][j].h == 3) {
        td.classList.add("attack");
      }
      if (ctx.field[i][j].h == 4) {
        td.classList.add("castles");
      }
      td.innerHTML = "&nbsp;";
      td.innerHTML = ctx.field[i][j].t;
      if (ctx.field[i][j].p == 1) {
        td.classList.add("playerWhite");
      }
      if (ctx.field[i][j].p == -1) {
        td.classList.add("playerBlack");
      }
      td.onclick = () => {
        wasclick(i, j);
      };
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  document.body.appendChild(table);
}

function wasclick(i, j) {
  if (
    ctx.frstclick.t == 0 &&
    ctx.field[i][j].t != "&nbsp;" &&
    ctx.field[i][j].p == ctx.turn
  ) {
    ctx.frstclick = {
      x: i,
      y: j,
      t: ctx.field[i][j].t,
      p: ctx.field[i][j].p,
      m: ctx.field[i][j].m,
    };
    ctx.field[i][j].h = 2;
    if (ctx.field[i][j].t == "K") {
      king(ctx, i, j);
    } else if (ctx.field[i][j].t == "Q") {
      queen(ctx, i, j);
    } else if (ctx.field[i][j].t == "R") {
      rook(ctx, i, j);
    } else if (ctx.field[i][j].t == "B") {
      bishop(ctx, i, j);
    } else if (ctx.field[i][j].t == "P" && ctx.field[i][j].p == "1") {
      whitepawn(ctx, i, j);
    } else if (ctx.field[i][j].t == "P" && ctx.field[i][j].p == "-1") {
      blackpawn(ctx, i, j);
    } else if (ctx.field[i][j].t == "H") {
      horse(ctx, i, j);
    }
  } else attack(i, j);
  table.innerHTML = "";
  renderfield();
}

function attack(i, j) {
  if (ctx.frstclick.m === 0) {
    ctx.field[ctx.frstclick.x][ctx.frstclick.y].m = 1;
  }
  if (ctx.field[i][j].h == 1 || ctx.field[i][j].h == 3) {
    ctx.field[i][j] = ctx.field[ctx.frstclick.x][ctx.frstclick.y];
    ctx.field[ctx.frstclick.x][ctx.frstclick.y] = { t: "&nbsp;" };
    ctx.turn = ctx.turn * -1;
  } else if (ctx.field[i][j].h == 4) {
    ctx.field[7][6] = { p: 1, t: "K", h: 0 };
    ctx.field[7][5] = { p: 1, t: "R", h: 0 };
    ctx.field[7][4] = { t: "&nbsp;", h: 0 };
    ctx.field[7][7] = { t: "&nbsp;", h: 0 };
  } else {
    for (let x = 0; x < 8; x++) {
      for (let y = 0; y < 8; y++) {
        ctx.field[x][y].h = 0;
      }
    }
  }

  ctx.frstclick = { x: -1, y: -1, t: 0, p: 0 };
  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
      ctx.field[x][y].h = 0;
    }
  }
}

renderfield();
