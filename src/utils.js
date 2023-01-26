export function printfigure(ctx, i, j) {
  if (ctx.field[i][j].p === 1) {
    if (ctx.field[i][j].t === "K") {
      return `<img src="/pic/Wking.png">`;
    } else if (ctx.field[i][j].t === "R") {
      return `<img src="/pic/Wrook.png">`;
    } else if (ctx.field[i][j].t === "B") {
      return `<img src="/pic/Wbishop.png">`;
    } else if (ctx.field[i][j].t === "H") {
      return `<img src="/pic/Whorse.png">`;
    } else if (ctx.field[i][j].t === "P") {
      return `<img src="/pic/Wpawn.png">`;
    } else if (ctx.field[i][j].t === "Q") {
      return `<img src="/pic/Wqueen.png">`;
    }
  } else if (ctx.field[i][j].p === -1) {
    if (ctx.field[i][j].t === "K") {
      return `<img src="/pic/Bking.png">`;
    } else if (ctx.field[i][j].t === "R") {
      return `<img src="/pic/Brook.png">`;
    } else if (ctx.field[i][j].t === "B") {
      return `<img src="/pic/Bbishop.png">`;
    } else if (ctx.field[i][j].t === "H") {
      return `<img src="/pic/Bhorse.png">`;
    } else if (ctx.field[i][j].t === "P") {
      return `<img src="/pic/Bpawn.png">`;
    } else if (ctx.field[i][j].t === "Q") {
      return `<img src="/pic/Bqueen.png">`;
    }
  } else {
    return "&nbsp;";
  }
}
