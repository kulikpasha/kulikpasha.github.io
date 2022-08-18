//import { checksafety } from "./utils";

export function checkcastles(ctx) {
  if (
    ctx.turn == 1 &&
    ctx.field[7][7].m == 0 &&
    ctx.field[7][6].t == "&nbsp;" &&
    ctx.field[7][5].t == "&nbsp;"
  ) {
    return true;
  } else {
    return false;
  }
}

// function shortcastles(player) {
//   if (player == 1 && ctx.wscp == true) {
//     ctx.field[7][6] = { p: 1, t: "K", h: 0 };
//     ctx.field[7][5] = { p: 1, t: "R", h: 0 };
//     ctx.field[7][4] = { t: "&nbsp;", h: 0 };
//     ctx.field[7][7] = { t: "&nbsp;", h: 0 };
//   }
//   if (player == -1 && ctx.bscp == true) {
//     ctx.field[0][6] = { p: -1, t: "K", h: 0 };
//     ctx.field[0][5] = { p: -1, t: "R", h: 0 };
//     ctx.field[0][4] = { t: "&nbsp;", h: 0 };
//     ctx.field[0][7] = { t: "&nbsp;", h: 0 };
//   }
// }
// function longcastles(player) {
//   if (player == 1 && ctx.wlcp == true) {
//     ctx.field[7][2] = { p: 1, t: "K", h: 0 };
//     ctx.field[7][3] = { p: 1, t: "R", h: 0 };
//     ctx.field[7][4] = { t: "&nbsp;", h: 0 };
//     ctx.field[7][0] = { t: "&nbsp;", h: 0 };
//   }
//   if (player == -1 && ctx.blcp == true) {
//     ctx.field[0][2] = { p: -1, t: "K", h: 0 };
//     ctx.field[0][3] = { p: -1, t: "R", h: 0 };
//     ctx.field[0][4] = { t: "&nbsp;", h: 0 };
//     ctx.field[0][0] = { t: "&nbsp;", h: 0 };
//   }
// }
