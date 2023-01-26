export function horse(ctx, i, j) {
  for (let x = 0; x < 8; x++) {
    if (
      ctx.horseturns[x][0] + i < 8 &&
      ctx.horseturns[x][1] + j < 8 &&
      ctx.horseturns[x][0] + i > -1 &&
      ctx.horseturns[x][1] + j > -1
    ) {
      if (
        ctx.field[i + ctx.horseturns[x][0]][j + ctx.horseturns[x][1]].t ==
        "&nbsp;"
      ) {
        ctx.field[i + ctx.horseturns[x][0]][j + ctx.horseturns[x][1]].h = 1;
      } else {
        if (
          ctx.field[i + ctx.horseturns[x][0]][j + ctx.horseturns[x][1]].p !=
          ctx.frstclick.p
        ) {
          ctx.field[i + ctx.horseturns[x][0]][j + ctx.horseturns[x][1]].h = 3;
        }
      }
    }
  }
}
