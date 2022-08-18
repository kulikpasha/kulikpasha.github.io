export function printfigure(ctx, i, j) {
  if (ctx.field[i][j].p === 1) {
    if (ctx.field[i][j].t === "K") {
      return `<img src="Wking.png">`;
    } else if (ctx.field[i][j].t === "R") {
      return `<img src="Wrook.png">`;
    } else if (ctx.field[i][j].t === "B") {
      return `<img src="Wbishop.png">`;
    } else if (ctx.field[i][j].t === "H") {
      return `<img src="Whorse.png">`;
    } else if (ctx.field[i][j].t === "P") {
      return `<img src="Wpawn.png">`;
    } else if (ctx.field[i][j].t === "Q") {
      return `<img src="Wqueen.png">`;
    }
  } else if (ctx.field[i][j].p === -1) {
    if (ctx.field[i][j].t === "K") {
      return `<img src="Bking.png">`;
    } else if (ctx.field[i][j].t === "R") {
      return `<img src="Brook.png">`;
    } else if (ctx.field[i][j].t === "B") {
      return `<img src="Bbishop.png">`;
    } else if (ctx.field[i][j].t === "H") {
      return `<img src="Bhorse.png">`;
    } else if (ctx.field[i][j].t === "P") {
      return `<img src="Bpawn.png">`;
    } else if (ctx.field[i][j].t === "Q") {
      return `<img src="Bqueen.png">`;
    }
  } else {
    return "&nbsp;";
  }
}
