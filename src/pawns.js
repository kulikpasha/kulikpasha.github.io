// prettier-ignore
export function whitepawn(ctx, i, j) {
    if (i - 1 > -1) {
      if (ctx.field[i - 1][j].t == "&nbsp;") {
        ctx.field[i - 1][j].h = 1;
      }
    }
    if (i - 1 > -1 && j - 1 > -1) {
      if (ctx.field[i - 1][j - 1].t != "&nbsp;" && ctx.field[i - 1][j - 1].p != ctx.frstclick.p) {
        ctx.field[i - 1][j - 1].h = 3;
      }
    }
    if (i - 1 > -1 && j + 1 < 8) {
      if (ctx.field[i - 1][j + 1].t != "&nbsp;" && ctx.field[i - 1][j + 1].p != ctx.frstclick.p) {
        ctx.field[i - 1][j + 1].h = 3;
      }
    }
    if (i == 6 && ctx.field[i - 1][j].t == "&nbsp;" && ctx.field[i - 2][j].t == "&nbsp;") {
      ctx.field[i - 2][j].h = 1;
    }
  }

// prettier-ignore
export function blackpawn(ctx, i, j) {
    if (i + 1 < 8) {
      if (ctx.field[i + 1][j].t == "&nbsp;") {
        ctx.field[i + 1][j].h = 1;
      }
    }
    if (i + 1 < 8 && j + 1 < 8) {
      if (ctx.field[i + 1][j + 1].t != "&nbsp;" && ctx.field[i + 1][j + 1].p != ctx.frstclick.p) {
        ctx.field[i + 1][j + 1].h = 3;
      }
    }
    if (i + 1 < 8 && j - 1 > -1) {
      if (ctx.field[i + 1][j - 1].t != "&nbsp;" && ctx.field[i + 1][j - 1].p != ctx.frstclick.p) {
        ctx.field[i + 1][j - 1].h = 3;
      }
    }
    if (i == 1 && ctx.field[i + 1][j].t == "&nbsp;" && ctx.field[i + 2][j].t == "&nbsp;") {
      ctx.field[i + 2][j].h = 1;
    }
  }
