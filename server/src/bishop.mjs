export function bishop(ctx, i, j) {
  for (let x = 0; x < 8; x++) {
    if (i - x - 1 > -1 && j - x - 1 > -1) {
      if (ctx.field[i - x - 1][j - x - 1].t == "&nbsp;") {
        ctx.field[i - x - 1][j - x - 1].h = 1;
      } else if (ctx.field[i - x - 1][j - x - 1] != "&nbsp;") {
        if (ctx.field[i - x - 1][j - x - 1].p != ctx.frstclick.p) {
          ctx.field[i - x - 1][j - x - 1].h = 3;
        }
        break;
      }
    }
  }
  for (let x = 0; x < 8; x++) {
    if (i + x + 1 < 8 && j - x - 1 > -1) {
      if (ctx.field[i + x + 1][j - x - 1].t == "&nbsp;") {
        ctx.field[i + x + 1][j - x - 1].h = 1;
      } else if (ctx.field[i + x + 1][j - x - 1] != "&nbsp;") {
        if (ctx.field[i + x + 1][j - x - 1].p != ctx.frstclick.p) {
          ctx.field[i + x + 1][j - x - 1].h = 3;
        }
        break;
      }
    }
  }
  for (let x = 0; x < 8; x++) {
    if (i + x + 1 < 8 && j + x + 1 < 8) {
      if (ctx.field[i + x + 1][j + x + 1].t == "&nbsp;") {
        ctx.field[i + x + 1][j + x + 1].h = 1;
      } else if (ctx.field[i + x + 1][j + x + 1] != "&nbsp;") {
        if (ctx.field[i + x + 1][j + x + 1].p != ctx.frstclick.p) {
          ctx.field[i + x + 1][j + x + 1].h = 3;
        }
        break;
      }
    }
  }
  for (let x = 0; x < 8; x++) {
    if (i - x - 1 > -1 && j + x + 1 < 8) {
      if (ctx.field[i - x - 1][j + x + 1].t == "&nbsp;") {
        ctx.field[i - x - 1][j + x + 1].h = 1;
      } else if (ctx.field[i - x - 1][j + x + 1] != "&nbsp;") {
        if (ctx.field[i - x - 1][j + x + 1].p != ctx.frstclick.p) {
          ctx.field[i - x - 1][j + x + 1].h = 3;
        }
        break;
      }
    }
  }
}
