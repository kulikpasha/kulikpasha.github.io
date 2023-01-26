export function checksafety(ctx, i, j) {
  let safe = 1;
  ctx.field[ctx.frstclick.x][ctx.frstclick.y].t = "&nbsp;";
  for (let x = i - 1; x > -1; x--) {
    if (ctx.field[x][j].t != "&nbsp;") {
      if (
        ctx.field[x][j].p != ctx.frstclick.p &&
        (ctx.field[x][j].t == "R" || ctx.field[x][j].t == "Q")
      ) {
        safe = 0;
      }
      break;
    }
  }
  for (let x = i + 1; x < 8; x++) {
    if (ctx.field[x][j].t != "&nbsp;") {
      if (
        ctx.field[x][j].p != ctx.frstclick.p &&
        (ctx.field[x][j].t == "R" || ctx.field[x][j].t == "Q")
      ) {
        safe = 0;
      }
    }
    break;
  }

  for (let x = j - 1; x > -1; x--) {
    if (ctx.field[i][x].t != "&nbsp;") {
      if (
        ctx.field[i][x].p != ctx.frstclick.p &&
        (ctx.field[i][x].t == "R" || ctx.field[i][x].t == "Q")
      ) {
        safe = 0;
      }
      break;
    }
  }
  for (let x = j + 1; x < 8; x++) {
    if (ctx.field[i][x].t != "&nbsp;") {
      if (
        ctx.field[i][x].p != ctx.frstclick.p &&
        (ctx.field[i][x].t == "R" || ctx.field[i][x].t == "Q")
      ) {
        safe = 0;
      }
      break;
    }
  }
  for (let x = 1; x < 9; x++) {
    if (i - x > -1 && j - x > -1) {
      if (ctx.field[i - x][j - x].t != "&nbsp;") {
        if (
          ctx.field[i - x][j - x].p != ctx.frstclick.p &&
          (ctx.field[i - x][j - x].t == "B" || ctx.field[i - x][j - x].t == "Q")
        ) {
          safe = 0;
        }
        break;
      }
    }
  }
  for (let x = 1; x < 9; x++) {
    if (i - x > -1 && j + x < 8) {
      if (ctx.field[i - x][j + x].t != "&nbsp;") {
        if (
          ctx.field[i - x][j + x].p != ctx.frstclick.p &&
          (ctx.field[i - x][j + x].t == "B" || ctx.field[i - x][j + x].t == "Q")
        ) {
          safe = 0;
        }
        break;
      }
    }
  }
  for (let x = 1; x < 9; x++) {
    if (i + x < 8 && j - x > -1) {
      if (ctx.field[i + x][j - x].t != "&nbsp;") {
        if (
          ctx.field[i + x][j - x].p != ctx.frstclick.p &&
          (ctx.field[i + x][j - x].t == "B" || ctx.field[i + x][j - x].t == "Q")
        ) {
          safe = 0;
        }
        break;
      }
    }
  }
  for (let x = 1; x < 9; x++) {
    if (i + x < 8 && j + x < 8) {
      if (ctx.field[i + x][j + x].t != "&nbsp;") {
        if (
          ctx.field[i + x][j + x].p != ctx.frstclick.p &&
          (ctx.field[i + x][j + x].t == "B" || ctx.field[i + x][j + x].t == "Q")
        ) {
          safe = 0;
        }
        break;
      }
    }
  }
  for (let x = 0; x < 8; x++) {
    if (
      ctx.horseturns[x][0] + i < 8 &&
      ctx.horseturns[x][1] + j < 8 &&
      ctx.horseturns[x][0] + i > -1 &&
      ctx.horseturns[x][1] + j > -1
    ) {
      if (
        ctx.field[i + ctx.horseturns[x][0]][j + ctx.horseturns[x][1]].t == "H"
      ) {
        if (
          ctx.field[i + ctx.horseturns[x][0]][j + ctx.horseturns[x][1]].p !=
          ctx.frstclick.p
        ) {
          safe = 0;
        }
      }
    }
  }
  if (ctx.frstclick.p == "-1") {
    if (
      i + 1 < 8 &&
      j + 1 < 8 &&
      ctx.field[i + 1][j + 1].t == "P" &&
      ctx.field[i + 1][j + 1].p == "1"
    ) {
      safe = 0;
    }
    if (
      i + 1 < 8 &&
      j - 1 > -1 &&
      ctx.field[i + 1][j - 1].t == "P" &&
      ctx.field[i + 1][j - 1].p == "1"
    ) {
      safe = 0;
    }
  } else {
    if (
      i - 1 > -1 &&
      j + 1 < 8 &&
      ctx.field[i - 1][j + 1].t == "P" &&
      ctx.field[i - 1][j + 1].p == "-1"
    ) {
      safe = 0;
    }
    if (
      i - 1 > -1 &&
      j - 1 > -1 &&
      ctx.field[i - 1][j - 1].t == "P" &&
      ctx.field[i - 1][j - 1].p == "-1"
    ) {
      safe = 0;
    }
  }
  for (let x = -1; x < 2; x++) {
    for (let y = -1; y < 2; y++) {
      if (i + x < 8 && i + x > -1 && j + y < 8 && j + y > -1) {
        if (
          ctx.field[i + x][j + y].t == "K" &&
          ctx.field[i + x][j + y].p != ctx.frstclick.p
        ) {
          safe = 0;
        }
      }
    }
  }
  ctx.field[ctx.frstclick.x][ctx.frstclick.y].t = "K";
  if (safe == 1) {
    return true;
  } else {
    return false;
  }
}

export function checkcastles(ctx) {
  if (ctx.turn == 1 && ctx.field[7][4].m == 0 && checksafety(ctx, 7, 4)) {
    if (
      ctx.field[7][7].m == 0 &&
      ctx.field[7][6].t == "&nbsp;" &&
      ctx.field[7][5].t == "&nbsp;" &&
      checksafety(ctx, 7, 6) &&
      checksafety(ctx, 7, 5)
    ) {
      ctx.field[7][7].h = 4;
    }
    if (
      ctx.field[7][0].m == 0 &&
      ctx.field[7][1].t == "&nbsp;" &&
      ctx.field[7][2].t == "&nbsp;" &&
      ctx.field[7][3].t == "&nbsp;" &&
      checksafety(ctx, 7, 1) &&
      checksafety(ctx, 7, 2) &&
      checksafety(ctx, 7, 3)
    ) {
      ctx.field[7][0].h = 4;
    }
  }
  if (ctx.turn == -1 && ctx.field[0][4].m == 0 && checksafety(ctx, 0, 4)) {
    if (
      ctx.field[0][7].m == 0 &&
      ctx.field[0][6].t == "&nbsp;" &&
      ctx.field[0][5].t == "&nbsp;" &&
      checksafety(ctx, 0, 6) &&
      checksafety(ctx, 0, 5)
    ) {
      ctx.field[0][7].h = 4;
    }
    if (
      ctx.field[0][0].m == 0 &&
      ctx.field[0][1].t == "&nbsp;" &&
      ctx.field[0][2].t == "&nbsp;" &&
      ctx.field[0][3].t == "&nbsp;" &&
      checksafety(ctx, 0, 1) &&
      checksafety(ctx, 0, 2) &&
      checksafety(ctx, 0, 3)
    ) {
      ctx.field[0][0].h = 4;
    }
  }
}

export function castles(ctx, j) {
  if (ctx.turn == 1 && j == 7) {
    ctx.field[7][6] = { p: 1, t: "K", h: 0 };
    ctx.field[7][5] = { p: 1, t: "R", h: 0 };
    ctx.field[7][4] = { t: "&nbsp;", h: 0 };
    ctx.field[7][7] = { t: "&nbsp;", h: 0 };
  }
  if (ctx.turn == -1 && j == 7) {
    ctx.field[0][6] = { p: -1, t: "K", h: 0 };
    ctx.field[0][5] = { p: -1, t: "R", h: 0 };
    ctx.field[0][4] = { t: "&nbsp;", h: 0 };
    ctx.field[0][7] = { t: "&nbsp;", h: 0 };
  }
  if (ctx.turn == 1 && j == 0) {
    ctx.field[7][2] = { p: 1, t: "K", h: 0 };
    ctx.field[7][3] = { p: 1, t: "R", h: 0 };
    ctx.field[7][4] = { t: "&nbsp;", h: 0 };
    ctx.field[7][0] = { t: "&nbsp;", h: 0 };
  }
  if (ctx.turn == -1 && j == 0) {
    ctx.field[0][2] = { p: -1, t: "K", h: 0 };
    ctx.field[0][3] = { p: -1, t: "R", h: 0 };
    ctx.field[0][4] = { t: "&nbsp;", h: 0 };
    ctx.field[0][0] = { t: "&nbsp;", h: 0 };
  }
}
