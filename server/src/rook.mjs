export function rook(ctx, i, j) {
  for (let x = i - 1; x > -1; x--) {
    if (ctx.field[x][j].t == "&nbsp;") {
      ctx.field[x][j].h = 1;
    } else if (ctx.field[x][j].t != "&nbsp;") {
      if (ctx.field[x][j].p != ctx.frstclick.p) {
        ctx.field[x][j].h = 3;
      }
      break;
    }
  }
  for (let x = i + 1; x < 8; x++) {
    if (ctx.field[x][j].t == "&nbsp;") {
      ctx.field[x][j].h = 1;
    } else if (ctx.field[x][j].t != "&nbsp;") {
      if (ctx.field[x][j].p != ctx.frstclick.p) {
        ctx.field[x][j].h = 3;
      }
      break;
    }
  }
  for (let x = j - 1; x > -1; x--) {
    if (ctx.field[i][x].t == "&nbsp;") {
      ctx.field[i][x].h = 1;
    } else if (ctx.field[i][x].t != "&nbsp;") {
      if (ctx.field[i][x].p != ctx.frstclick.p) {
        ctx.field[i][x].h = 3;
      }
      break;
    }
  }
  for (let x = j + 1; x < 8; x++) {
    if (ctx.field[i][x].t == "&nbsp;") {
      ctx.field[i][x].h = 1;
    } else if (ctx.field[i][x].t != "&nbsp;") {
      if (ctx.field[i][x].p != ctx.frstclick.p) {
        ctx.field[i][x].h = 3;
      }
      break;
    }
  }
}
