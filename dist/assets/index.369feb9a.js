(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const d of i)if(d.type==="childList")for(const r of d.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const d={};return i.integrity&&(d.integrity=i.integrity),i.referrerpolicy&&(d.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?d.credentials="include":i.crossorigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function t(i){if(i.ep)return;i.ep=!0;const d=e(i);fetch(i.href,d)}})();function n(f,l,e){let t=1;f.field[f.frstclick.x][f.frstclick.y].t="&nbsp;";for(let i=l-1;i>-1;i--)if(f.field[i][e].t!="&nbsp;"){f.field[i][e].p!=f.frstclick.p&&(f.field[i][e].t=="R"||f.field[i][e].t=="Q")&&(t=0);break}for(let i=l+1;i<8;i++){f.field[i][e].t!="&nbsp;"&&f.field[i][e].p!=f.frstclick.p&&(f.field[i][e].t=="R"||f.field[i][e].t=="Q")&&(t=0);break}for(let i=e-1;i>-1;i--)if(f.field[l][i].t!="&nbsp;"){f.field[l][i].p!=f.frstclick.p&&(f.field[l][i].t=="R"||f.field[l][i].t=="Q")&&(t=0);break}for(let i=e+1;i<8;i++)if(f.field[l][i].t!="&nbsp;"){f.field[l][i].p!=f.frstclick.p&&(f.field[l][i].t=="R"||f.field[l][i].t=="Q")&&(t=0);break}for(let i=1;i<9;i++)if(l-i>-1&&e-i>-1&&f.field[l-i][e-i].t!="&nbsp;"){f.field[l-i][e-i].p!=f.frstclick.p&&(f.field[l-i][e-i].t=="B"||f.field[l-i][e-i].t=="Q")&&(t=0);break}for(let i=1;i<9;i++)if(l-i>-1&&e+i<8&&f.field[l-i][e+i].t!="&nbsp;"){f.field[l-i][e+i].p!=f.frstclick.p&&(f.field[l-i][e+i].t=="B"||f.field[l-i][e+i].t=="Q")&&(t=0);break}for(let i=1;i<9;i++)if(l+i<8&&e-i>-1&&f.field[l+i][e-i].t!="&nbsp;"){f.field[l+i][e-i].p!=f.frstclick.p&&(f.field[l+i][e-i].t=="B"||f.field[l+i][e-i].t=="Q")&&(t=0);break}for(let i=1;i<9;i++)if(l+i<8&&e+i<8&&f.field[l+i][e+i].t!="&nbsp;"){f.field[l+i][e+i].p!=f.frstclick.p&&(f.field[l+i][e+i].t=="B"||f.field[l+i][e+i].t=="Q")&&(t=0);break}for(let i=0;i<8;i++)f.horseturns[i][0]+l<8&&f.horseturns[i][1]+e<8&&f.horseturns[i][0]+l>-1&&f.horseturns[i][1]+e>-1&&f.field[l+f.horseturns[i][0]][e+f.horseturns[i][1]].t=="H"&&f.field[l+f.horseturns[i][0]][e+f.horseturns[i][1]].p!=f.frstclick.p&&(t=0);f.frstclick.p=="-1"?(l+1<8&&e+1<8&&f.field[l+1][e+1].t=="P"&&f.field[l+1][e+1].p=="1"&&(t=0),l+1<8&&e-1>-1&&f.field[l+1][e-1].t=="P"&&f.field[l+1][e-1].p=="1"&&(t=0)):(l-1>-1&&e+1<8&&f.field[l-1][e+1].t=="P"&&f.field[l-1][e+1].p=="-1"&&(t=0),l-1>-1&&e-1>-1&&f.field[l-1][e-1].t=="P"&&f.field[l-1][e-1].p=="-1"&&(t=0));for(let i=-1;i<2;i++)for(let d=-1;d<2;d++)l+i<8&&l+i>-1&&e+d<8&&e+d>-1&&f.field[l+i][e+d].t=="K"&&f.field[l+i][e+d].p!=f.frstclick.p&&(t=0);return f.field[f.frstclick.x][f.frstclick.y].t="K",t==1}function h(f,l,e){for(let t=-1;t<2;t++)for(let i=-1;i<2;i++)l+t<8&&l+t>-1&&e+i<8&&e+i>-1&&n(f.field,l+t,e+i)&&(f.field[l+t][e+i].t=="&nbsp;"?f.field[l+t][e+i].h=1:f.field[l+t][e+i].p!=f.frstclick.p&&n(field,l+t,e+i)&&(f.field[l+t][e+i].h=3));f.wscp&&f.field[l][e].p==1&&(f.field[7][7].h=4),f.bscp&&f.field[l][e].p==-1&&(f.field[0][7].h=4),f.wlcp&&f.field[l][e].p==1&&(f.field[7][0].h=4),f.blcp&&f.field[l][e].p==-1&&(f.field[0][0].h=4)}const p=document.createElement("table");p.cellPadding=0;p.cellSpacing=0;const s={field:[[{p:-1,t:"R",h:0},{p:-1,t:"H",h:0},{p:-1,t:"B",h:0},{p:-1,t:"Q",h:0},{p:-1,t:"K",h:0},{p:-1,t:"B",h:0},{p:-1,t:"H",h:0},{p:-1,t:"R",h:0}],[{p:-1,t:"P",h:0},{p:-1,t:"P",h:0},{p:-1,t:"P",h:0},{p:-1,t:"P",h:0},{p:-1,t:"P",h:0},{p:-1,t:"P",h:0},{p:-1,t:"P",h:0},{p:-1,t:"P",h:0}],[{t:"&nbsp;",h:0},{t:"&nbsp;",h:0},{t:"&nbsp;",h:0},{t:"&nbsp;",h:0},{t:"&nbsp;",h:0},{t:"&nbsp;",h:0},{t:"&nbsp;",h:0},{t:"&nbsp;",h:0}],[{t:"&nbsp;",h:0},{t:"&nbsp;",h:0},{t:"&nbsp;",h:0},{t:"&nbsp;",h:0},{t:"&nbsp;",h:0},{t:"&nbsp;",h:0},{t:"&nbsp;",h:0},{t:"&nbsp;",h:0}],[{t:"&nbsp;",h:0},{t:"&nbsp;",h:0},{t:"&nbsp;",h:0},{t:"&nbsp;",h:0},{t:"&nbsp;",h:0},{t:"&nbsp;",h:0},{t:"&nbsp;",h:0},{t:"&nbsp;",h:0}],[{t:"&nbsp;",h:0},{t:"&nbsp;",h:0},{t:"&nbsp;",h:0},{t:"&nbsp;",h:0},{t:"&nbsp;",h:0},{t:"&nbsp;",h:0},{t:"&nbsp;",h:0},{t:"&nbsp;",h:0}],[{p:1,t:"P",h:0},{p:1,t:"P",h:0},{p:1,t:"P",h:0},{p:1,t:"P",h:0},{p:1,t:"P",h:0},{p:1,t:"P",h:0},{p:1,t:"P",h:0},{p:1,t:"P",h:0}],[{p:1,t:"R",h:0},{p:1,t:"H",h:0},{p:1,t:"B",h:0},{p:1,t:"Q",h:0},{p:1,t:"K",h:0},{p:1,t:"B",h:0},{p:1,t:"H",h:0},{p:1,t:"R",h:0}]],frstclick:{x:-1,y:-1,t:0,p:0},horseturns:[[2,1],[2,-1],[-2,1],[-2,-1],[1,2],[1,-2],[-1,2],[-1,-2]],wscp:!0,bscp:!0,wlcp:!0,blcp:!0};function b(){for(let f=0;f<8;f++){const l=document.createElement("tr");for(let e=0;e<8;e++){const t=document.createElement("td");f%2!=e%2&&s.field[f][e].h==0?t.classList.add("black"):f%2!=e%2&&s.field[f][e].h==1&&t.classList.add("hoveredblack"),f%2==e%2&&s.field[f][e].h==1&&t.classList.add("hoveredwhite"),s.field[f][e].h==2&&t.classList.add("clicked"),s.field[f][e].h==3&&t.classList.add("attack"),s.field[f][e].h==4&&t.classList.add("castles"),t.innerHTML="&nbsp;",t.innerHTML=s.field[f][e].t,s.field[f][e].p==1&&t.classList.add("playerWhite"),s.field[f][e].p==-1&&t.classList.add("playerBlack"),t.onclick=()=>{o(f,e)},l.appendChild(t)}p.appendChild(l)}document.body.appendChild(p)}function o(f,l){s.frstclick.t==0&&s.field[f][l].t!="&nbsp;"?(s.frstclick={x:f,y:l,t:s.field[f][l].t,p:s.field[f][l].p},s.field[f][l].h=2,s.field[f][l].t=="K"?h(s,f,l):s.field[f][l].t=="Q"?L(f,l):s.field[f][l].t=="R"?w(f,l):s.field[f][l].t=="B"?y(f,l):s.field[f][l].t=="P"&&s.field[f][l].p=="1"?u(f,l):s.field[f][l].t=="P"&&s.field[f][l].p=="-1"?P(f,l):s.field[f][l].t=="H"&&m(s,f,l)):a(f,l),p.innerHTML="",renderctx.field()}function a(f,l){if(s.field[f][l].h==1||s.field[f][l].h==3)s.field[f][l]=s.field[s.frstclick.x][s.frstclick.y],s.field[s.frstclick.x][s.frstclick.y]={t:"&nbsp;"};else if(s.field[f][l].h==4&&l==7)c(s.field[f][l].p);else if(s.field[f][l].h==4&&l==0)k(s.field[f][l].p);else for(let e=0;e<8;e++)for(let t=0;t<8;t++)s.field[e][t].h=0;s.frstclick={x:-1,y:-1,t:0,p:0};for(let e=0;e<8;e++)for(let t=0;t<8;t++)s.field[e][t].h=0}function c(f){f==1&&(s.field[7][6]={p:1,t:"K",h:0},s.field[7][5]={p:1,t:"R",h:0},s.field[7][4]={t:"&nbsp;",h:0},s.field[7][7]={t:"&nbsp;",h:0},s.wscp=!1,s.wlcp=!1),f==-1&&(s.field[0][6]={p:-1,t:"K",h:0},s.field[0][5]={p:-1,t:"R",h:0},s.field[0][4]={t:"&nbsp;",h:0},s.field[0][7]={t:"&nbsp;",h:0},s.bscp=!1,s.blcp=!1)}function k(f){f==1&&(s.field[7][2]={p:1,t:"K",h:0},s.field[7][3]={p:1,t:"R",h:0},s.field[7][4]={t:"&nbsp;",h:0},s.field[7][0]={t:"&nbsp;",h:0},s.wscp=!1,s.wlcp=!1),f==-1&&(s.field[0][2]={p:-1,t:"K",h:0},s.field[0][3]={p:-1,t:"R",h:0},s.field[0][4]={t:"&nbsp;",h:0},s.field[0][0]={t:"&nbsp;",h:0},s.bscp=!1,s.blcp=!1)}function u(f,l){f-1>-1&&s.field[f-1][l].t=="&nbsp;"&&(s.field[f-1][l].h=1),f-1>-1&&l-1>-1&&s.field[f-1][l-1].t!="&nbsp;"&&s.field[f-1][l-1].p!=s.frstclick.p&&(s.field[f-1][l-1].h=3),f-1>-1&&l+1<8&&s.field[f-1][l+1].t!="&nbsp;"&&s.field[f-1][l+1].p!=s.frstclick.p&&(s.field[f-1][l+1].h=3),f==6&&s.field[f-1][l].t=="&nbsp;"&&s.field[f-2][l].t=="&nbsp;"&&(s.field[f-2][l].h=1)}function P(f,l){f+1<8&&s.field[f+1][l].t=="&nbsp;"&&(s.field[f+1][l].h=1),f+1<8&&l+1<8&&s.field[f+1][l+1].t!="&nbsp;"&&s.field[f+1][l+1].p!=s.frstclick.p&&(s.field[f+1][l+1].h=3),f+1<8&&l-1>-1&&s.field[f+1][l-1].t!="&nbsp;"&&s.field[f+1][l-1].p!=s.frstclick.p&&(s.field[f+1][l-1].h=3),f==1&&s.field[f+1][l].t=="&nbsp;"&&s.field[f+2][l].t=="&nbsp;"&&(s.field[f+2][l].h=1)}function y(f,l){for(let e=0;e<8;e++)if(f-e-1>-1&&l-e-1>-1){if(s.field[f-e-1][l-e-1].t=="&nbsp;")s.field[f-e-1][l-e-1].h=1;else if(s.field[f-e-1][l-e-1]!="&nbsp;"){s.field[f-e-1][l-e-1].p!=s.frstclick.p&&(s.field[f-e-1][l-e-1].h=3);break}}for(let e=0;e<8;e++)if(f+e+1<8&&l-e-1>-1){if(s.field[f+e+1][l-e-1].t=="&nbsp;")s.field[f+e+1][l-e-1].h=1;else if(s.field[f+e+1][l-e-1]!="&nbsp;"){s.field[f+e+1][l-e-1].p!=s.frstclick.p&&(s.field[f+e+1][l-e-1].h=3);break}}for(let e=0;e<8;e++)if(f+e+1<8&&l+e+1<8){if(s.field[f+e+1][l+e+1].t=="&nbsp;")s.field[f+e+1][l+e+1].h=1;else if(s.field[f+e+1][l+e+1]!="&nbsp;"){s.field[f+e+1][l+e+1].p!=s.frstclick.p&&(s.field[f+e+1][l+e+1].h=3);break}}for(let e=0;e<8;e++)if(f-e-1>-1&&l+e+1<8){if(s.field[f-e-1][l+e+1].t=="&nbsp;")s.field[f-e-1][l+e+1].h=1;else if(s.field[f-e-1][l+e+1]!="&nbsp;"){s.field[f-e-1][l+e+1].p!=s.frstclick.p&&(s.field[f-e-1][l+e+1].h=3);break}}}function m(f,l,e){for(let t=0;t<8;t++)f.horseturns[t][0]+l<8&&f.horseturns[t][1]+e<8&&f.horseturns[t][0]+l>-1&&f.horseturns[t][1]+e>-1&&(f.field[l+f.horseturns[t][0]][e+f.horseturns[t][1]].t=="&nbsp;"?f.field[l+f.horseturns[t][0]][e+f.horseturns[t][1]].h=1:f.field[l+f.horseturns[t][0]][e+f.horseturns[t][1]].p!=f.frstclick.p&&(f.field[l+f.horseturns[t][0]][e+f.horseturns[t][1]].h=3))}function L(f,l){for(let e=0;e<8;e++)if(f-e-1>-1&&l-e-1>-1){if(s.field[f-e-1][l-e-1].t=="&nbsp;")s.field[f-e-1][l-e-1].h=1;else if(s.field[f-e-1][l-e-1]!="&nbsp;"){s.field[f-e-1][l-e-1].p!=s.frstclick.p&&(s.field[f-e-1][l-e-1].h=3);break}}for(let e=0;e<8;e++)if(f+e+1<8&&l-e-1>-1){if(s.field[f+e+1][l-e-1].t=="&nbsp;")s.field[f+e+1][l-e-1].h=1;else if(s.field[f+e+1][l-e-1]!="&nbsp;"){s.field[f+e+1][l-e-1].p!=s.frstclick.p&&(s.field[f+e+1][l-e-1].h=3);break}}for(let e=0;e<8;e++)if(f+e+1<8&&l+e+1<8){if(s.field[f+e+1][l+e+1].t=="&nbsp;")s.field[f+e+1][l+e+1].h=1;else if(s.field[f+e+1][l+e+1]!="&nbsp;"){s.field[f+e+1][l+e+1].p!=s.frstclick.p&&(s.field[f+e+1][l+e+1].h=3);break}}for(let e=0;e<8;e++)if(f-e-1>-1&&l+e+1<8){if(s.field[f-e-1][l+e+1].t=="&nbsp;")s.field[f-e-1][l+e+1].h=1;else if(s.field[f-e-1][l+e+1]!="&nbsp;"){s.field[f-e-1][l+e+1].p!=s.frstclick.p&&(s.field[f-e-1][l+e+1].h=3);break}}for(let e=f-1;e>-1;e--)if(s.field[e][l].t=="&nbsp;")s.field[e][l].h=1;else if(s.field[e][l].t!="&nbsp;"){s.field[e][l].p!=s.frstclick.p&&(s.field[e][l].h=3);break}for(let e=f+1;e<8;e++)if(s.field[e][l].t=="&nbsp;")s.field[e][l].h=1;else if(s.field[e][l].t!="&nbsp;"){s.field[e][l].p!=s.frstclick.p&&(s.field[e][l].h=3);break}for(let e=l-1;e>-1;e--)if(s.field[f][e].t=="&nbsp;")s.field[f][e].h=1;else if(s.field[f][e].t!="&nbsp;"){s.field[f][e].p!=s.frstclick.p&&(s.field[f][e].h=3);break}for(let e=l+1;e<8;e++)if(s.field[f][e].t=="&nbsp;")s.field[f][e].h=1;else if(s.field[f][e].t!="&nbsp;"){s.field[f][e].p!=s.frstclick.p&&(s.field[f][e].h=3);break}}function w(f,l){for(let e=f-1;e>-1;e--)if(s.field[e][l].t=="&nbsp;")s.field[e][l].h=1;else if(s.field[e][l].t!="&nbsp;"){s.field[e][l].p!=s.frstclick.p&&(s.field[e][l].h=3);break}for(let e=f+1;e<8;e++)if(s.field[e][l].t=="&nbsp;")s.field[e][l].h=1;else if(s.field[e][l].t!="&nbsp;"){s.field[e][l].p!=s.frstclick.p&&(s.field[e][l].h=3);break}for(let e=l-1;e>-1;e--)if(s.field[f][e].t=="&nbsp;")s.field[f][e].h=1;else if(s.field[f][e].t!="&nbsp;"){s.field[f][e].p!=s.frstclick.p&&(s.field[f][e].h=3);break}for(let e=l+1;e<8;e++)if(s.field[f][e].t=="&nbsp;")s.field[f][e].h=1;else if(s.field[f][e].t!="&nbsp;"){s.field[f][e].p!=s.frstclick.p&&(s.field[f][e].h=3);break}}b();