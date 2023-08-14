import{aD as f,u as b,aJ as g,aF as y,aG as C,aH as v,aI as $}from"./install-14bb9389.js";import{d as T,aq as x,j as p,_ as w,c as B,a as D,k,h as P,b as L,w as R,Q as z,r as d,o as u,A as G}from"./index-040ab3ec.js";import{j as O,e as S,k as I,g as N,h as M}from"./install-0a409133.js";function V(t,s){const r=Math.min(...t),n=(Math.max(...t)-r)*1.01/s,e=[...Array(s).keys()].map(o=>[Math.round((r+o*n)*1e3)/1e3,0]);for(let o=0;o<t.length;o++){const l=Math.min(Math.floor((t[o]-r)/n),s-1);isNaN(l)||e[l][1]++}return e}b([O,g,y,S,C,v,$]);const h="Trade count",j=T({name:"ProfitDistributionChart",components:{"v-chart":f},props:{trades:{required:!0,type:Array},showTitle:{default:!0,type:Boolean}},setup(t){const s=x(),r=[10,15,20,25,50],c=p(()=>{const e=t.trades.map(o=>o.profit_ratio);return V(e,s.profitDistributionBins)}),n=p(()=>({title:{text:"Profit distribution",show:t.showTitle},backgroundColor:"rgba(0, 0, 0, 0)",dataset:{source:c.value},tooltip:{trigger:"axis",axisPointer:{type:"line",label:{backgroundColor:"#6a7985"}}},legend:{data:[h],right:"5%"},xAxis:{type:"category",name:"Profit %",nameLocation:"middle",nameGap:25},yAxis:[{type:"value",name:h,splitLine:{show:!1},nameRotate:90,nameLocation:"middle",nameGap:35,position:"left"}],series:[{type:"bar",name:h,animation:!0,encode:{x:"x0",y:"y0"}}]}));return{settingsStore:s,chartOptions:n,binOptions:r}}});const F={class:"d-flex flex-column h-100 position-relative"},H={class:"flex-grow-1 order-2"};function q(t,s,r,c,n,e){const o=d("v-chart"),l=d("b-form-select"),i=d("b-form-group");return u(),B("div",F,[D("div",H,[t.trades?(u(),k(o,{key:0,option:t.chartOptions,autoresize:"",theme:t.settingsStore.chartTheme},null,8,["option","theme"])):P("",!0)]),L(i,{class:z(["w-25 order-1",t.showTitle?"ms-5 ps-5":"position-absolute"]),label:"Bins","label-for":"input-bins","label-cols":"6","content-cols":"6",size:"sm"},{default:R(()=>[L(l,{id:"input-bins",modelValue:t.settingsStore.profitDistributionBins,"onUpdate:modelValue":s[0]||(s[0]=m=>t.settingsStore.profitDistributionBins=m),size:"sm",options:t.binOptions},null,8,["modelValue","options"])]),_:1},8,["class"])])}const Y=w(j,[["render",q],["__scopeId","data-v-4921b3a4"]]);b([O,I,g,y,S,C,v,$]);const _="Profit",U=T({name:"CumProfitChart",components:{"v-chart":f},props:{trades:{required:!0,type:Array},showTitle:{default:!0,type:Boolean},profitColumn:{default:"profit_abs",type:String}},setup(t){const s=x(),r=p(()=>{const n=[],e={},o=t.trades.slice().sort((i,m)=>i.close_timestamp>m.close_timestamp?1:-1);let l=0;for(let i=0,m=o.length;i<m;i+=1){const a=o[i];a.close_timestamp&&a[t.profitColumn]&&(l+=a[t.profitColumn],e[a.close_timestamp]?(e[a.close_timestamp].profit+=a[t.profitColumn],e[a.close_timestamp][a.botId]?e[a.close_timestamp][a.botId]+=a[t.profitColumn]:e[a.close_timestamp][a.botId]=l):e[a.close_timestamp]={profit:l,[a.botId]:l},n.push({date:a.close_timestamp,profit:l,[a.botId]:l}))}return Object.entries(e).map(([i,m])=>({date:parseInt(i,10),profit:m.profit}))}),c=p(()=>({title:{text:"Cumulative Profit",show:t.showTitle},backgroundColor:"rgba(0, 0, 0, 0)",dataset:{dimensions:["date","profit"],source:r.value},tooltip:{trigger:"axis",axisPointer:{type:"line",label:{backgroundColor:"#6a7985"}}},legend:{data:[_],right:"5%"},useUTC:!1,xAxis:{type:"time"},yAxis:[{type:"value",name:_,splitLine:{show:!1},nameRotate:90,nameLocation:"middle",nameGap:40}],grid:{bottom:80},dataZoom:[{type:"inside",start:0,end:100},{show:!0,type:"slider",bottom:10,start:0,end:100}],series:[{type:"line",name:_,animation:!0,step:"end",lineStyle:{color:s.chartTheme==="dark"?"#c2c2c2":"black"},itemStyle:{color:s.chartTheme==="dark"?"#c2c2c2":"black"}}]}));return{settingsStore:s,cumulativeData:r,chartOptions:c}}});function Z(t,s,r,c,n,e){const o=d("v-chart");return t.trades?(u(),k(o,{key:0,option:t.chartOptions,autoresize:"",theme:t.settingsStore.chartTheme},null,8,["option","theme"])):P("",!0)}const tt=w(U,[["render",Z],["__scopeId","data-v-5671736c"]]);b([O,I,g,y,S,C,v,$,N,M]);const A="Profit %",E="#9be0a8",J=T({name:"TradesLogChart",components:{"v-chart":f},props:{trades:{required:!0,type:Array},showTitle:{default:!0,type:Boolean}},setup(t){const s=x(),r=p(()=>{const n=[],e=t.trades.slice(0).sort((o,l)=>o.close_timestamp>l.close_timestamp?1:-1);for(let o=0,l=e.length;o<l;o+=1){const i=e[o],m=[o,(i.profit_ratio*100).toFixed(2),i.pair,i.botName,G(i.close_timestamp),i.is_short===void 0||!i.is_short?"Long":"Short"];n.push(m)}return n}),c=p(()=>{const n=r.value.length>0?(1-50/r.value.length)*100:100;return{title:{text:"Trades log",show:t.showTitle},backgroundColor:"rgba(0, 0, 0, 0)",dataset:{dimensions:["date","profit"],source:r.value},tooltip:{trigger:"axis",formatter:e=>{const o=e[0].data[3]?` | ${e[0].data[3]}`:"";return`${e[0].data[2]} | ${e[0].data[5]} ${o}<br>${e[0].data[4]}<br>Profit ${e[0].data[1]} %`},axisPointer:{type:"line",label:{backgroundColor:"#6a7985"}}},xAxis:{type:"value",show:!1},yAxis:[{type:"value",name:A,splitLine:{show:!1},nameRotate:90,nameLocation:"middle",nameGap:30}],grid:{bottom:80},dataZoom:[{type:"inside",start:n,end:100},{show:!0,type:"slider",bottom:10,start:n,end:100}],visualMap:[{show:!0,seriesIndex:0,pieces:[{max:0,color:"#f84960"},{min:0,color:"#2ed191"}]}],series:[{type:"bar",name:A,barGap:"0%",barCategoryGap:"0%",animation:!1,label:{show:!0,position:"top",rotate:90,offset:[7.5,7.5],formatter:"{@[1]} %",color:s.chartTheme==="dark"?"#c2c2c2":"#3c3c3c"},encode:{x:0,y:1},itemStyle:{color:E}}]}});return{settingsStore:s,chartData:r,chartOptions:c}}});function Q(t,s,r,c,n,e){const o=d("v-chart");return t.trades.length>0?(u(),k(o,{key:0,option:t.chartOptions,autoresize:"",theme:t.settingsStore.chartTheme},null,8,["option","theme"])):P("",!0)}const et=w(J,[["render",Q],["__scopeId","data-v-32d5e410"]]);export{tt as C,Y as P,et as T};
//# sourceMappingURL=TradesLog-488572af.js.map
