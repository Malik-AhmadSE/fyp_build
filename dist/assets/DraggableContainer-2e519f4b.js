import{u as h,aD as g,aJ as f,aF as b,aG as v,aH as C,aI as S}from"./install-14bb9389.js";import{d as p,aq as $,j as r,_ as u,o as m,k as x,h as D,r as T,c as k,a as c,ag as _,g as w,t as A}from"./index-040ab3ec.js";import{j as B,k as I,f as O,g as R}from"./install-0a409133.js";h([B,I,f,O,b,v,C,S,R]);const i="Absolute profit",l="Trade Count",N=p({components:{"v-chart":g},props:{dailyStats:{type:Object,required:!0},showTitle:{type:Boolean,default:!0}},setup(a){const s=$(),n=r(()=>{var t;return a.dailyStats.data.reduce((e,o)=>o.abs_profit<e?o.abs_profit:e,(t=a.dailyStats.data[0])==null?void 0:t.abs_profit)}),d=r(()=>{var t;return a.dailyStats.data.reduce((e,o)=>o.abs_profit>e?o.abs_profit:e,(t=a.dailyStats.data[0])==null?void 0:t.abs_profit)});return{dailyChartOptions:r(()=>({title:{text:"Daily profit",show:a.showTitle},backgroundColor:"rgba(0, 0, 0, 0)",dataset:{dimensions:["date","abs_profit","trade_count"],source:a.dailyStats.data},tooltip:{trigger:"axis",axisPointer:{type:"line",label:{backgroundColor:"#6a7985"}}},legend:{data:[i,l],right:"5%"},xAxis:[{type:"category"}],visualMap:[{dimension:1,seriesIndex:0,show:!1,pieces:[{max:0,min:n.value,color:"red"},{min:0,max:d.value,color:"green"}]}],yAxis:[{type:"value",name:i,splitLine:{show:!1},nameRotate:90,nameLocation:"middle",nameGap:40},{type:"value",name:l,nameRotate:90,nameLocation:"middle",nameGap:30}],series:[{type:"line",name:i},{type:"bar",name:l,itemStyle:{color:"rgba(150,150,150,0.3)"},yAxisIndex:1}]})),settingsStore:s}}});function j(a,s,n,d,y,t){const e=T("v-chart");return a.dailyStats.data?(m(),x(e,{key:0,option:a.dailyChartOptions,theme:a.settingsStore.chartTheme,autoresize:""},null,8,["option","theme"])):D("",!0)}const F=u(N,[["render",j],["__scopeId","data-v-3284153b"]]),q={class:"card h-100 w-100"},G={class:"drag-header card-header"},H={class:"card-body h-100 w-100 overflow-auto"},L=p({__name:"DraggableContainer",props:{header:{required:!1,type:String,default:""}},setup(a){return(s,n)=>(m(),k("div",q,[c("div",G,[_(s.$slots,"header",{},()=>[w(A(a.header),1)],!0)]),c("div",H,[_(s.$slots,"default",{},void 0,!0)])]))}});const P=u(L,[["__scopeId","data-v-9757edc5"]]);export{F as D,P as a};
//# sourceMappingURL=DraggableContainer-2e519f4b.js.map