import { checksafety, checkcastles } from "./utils";
export function king(ctx, i, j) {
  for (let x = -1; x < 2; x++) {
    for (let y = -1; y < 2; y++) {
      if (
        i + x < 8 &&
        i + x > -1 &&
        j + y < 8 &&
        j + y > -1 &&
        checksafety(ctx, i + x, j + y)
      ) {
        if (ctx.field[i + x][j + y].t == "&nbsp;") {
          ctx.field[i + x][j + y].h = 1;
        } else if (
          ctx.field[i + x][j + y].p != ctx.frstclick.p &&
          checksafety(ctx, i + x, j + y)
        ) {
          ctx.field[i + x][j + y].h = 3;
        }
      }
    }
  }
  checkcastles(ctx);
}
