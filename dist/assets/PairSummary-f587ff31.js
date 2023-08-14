import{d as S,u as $,j as A,A as h,x as L,k as c,w as v,r as C,o as s,c as P,L as M,l as d,a as q,g as w,t as E,h as m,K as N,_ as V}from"./index-040ab3ec.js";import{_ as j,P as R}from"./InfoBox-02d7780a.js";const D=["title"],F=S({__name:"PairSummary",props:{pairlist:{required:!0,type:Array},currentLocks:{required:!1,type:Array,default:()=>[]},trades:{required:!0,type:Array},sortMethod:{default:"normal",type:String},backtestMode:{required:!1,default:!1,type:Boolean}},setup(p){const l=p,u=$(),B=A(()=>{const o=[];return l.pairlist.forEach(r=>{const e=l.trades.filter(a=>a.pair===r),i=l.currentLocks.filter(a=>a.pair===r);let t="",n;i.sort((a,x)=>a.lock_end_timestamp>x.lock_end_timestamp?-1:1),i.length>0&&([n]=i,t=`${h(n.lock_end_timestamp)} - ${n.reason}`);let f="",_=0,y=0;e.forEach(a=>{_+=a.profit_ratio,y+=a.profit_abs??0});const g=e.length,k=g?e[0]:void 0;e.length>0&&(f=`Current profit: ${L(_)}`),k&&(f+=`
Open since: ${h(k.open_timestamp)}`),o.push({pair:r,trade:k,locks:n,lockReason:t,profitString:f,profit:_,profitAbs:y,tradeCount:g})}),l.sortMethod==="profit"?o.sort((r,e)=>r.profit>e.profit?-1:1):o.sort((r,e)=>r.trade&&!e.trade?-1:r.trade&&e.trade?r.trade.trade_id>e.trade.trade_id?1:-1:!r.locks&&e.locks?-1:r.locks&&e.locks?r.locks.lock_end_timestamp>e.locks.lock_end_timestamp?1:-1:1),o});return(o,r)=>{const e=C("b-list-group-item"),i=C("b-list-group");return s(),c(i,null,{default:v(()=>[(s(!0),P(N,null,M(d(B),t=>(s(),c(e,{key:t.pair,button:"",class:"d-flex justify-content-between align-items-center py-1",active:t.pair===d(u).activeBot.selectedPair,title:`${t.pair} - ${t.tradeCount} trades`,onClick:n=>d(u).activeBot.selectedPair=t.pair},{default:v(()=>[q("div",null,[w(E(t.pair)+" ",1),t.locks?(s(),P("span",{key:0,title:t.lockReason}," 🔒 ",8,D)):m("",!0)]),t.trade&&!p.backtestMode?(s(),c(j,{key:0,trade:t.trade},null,8,["trade"])):m("",!0),p.backtestMode&&t.tradeCount>0?(s(),c(R,{key:1,"profit-ratio":t.profit,"profit-abs":t.profitAbs,"stake-currency":d(u).activeBot.stakeCurrency},null,8,["profit-ratio","profit-abs","stake-currency"])):m("",!0)]),_:2},1032,["active","title","onClick"]))),128))]),_:1})}}});const O=V(F,[["__scopeId","data-v-506fd533"]]);export{O as P};
//# sourceMappingURL=PairSummary-f587ff31.js.map
