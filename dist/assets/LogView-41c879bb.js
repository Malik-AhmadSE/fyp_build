import{d,u as g,z as f,j as m,_ as i,c as _,H as $,I as L,a as v,b as l,w as x,r as p,o as u,g as V}from"./index-040ab3ec.js";const b=d({name:"LogViewer",setup(){const e=g();f(async()=>{e.activeBot.getLogs()});const s=m(()=>{let a="";for(let n=0,r=e.activeBot.lastLogs.length;n<r;n+=1){const t=e.activeBot.lastLogs[n],o=t[4].indexOf("state='")+7,c=t[4].indexOf("'",o);t[4].substring(o,c),a+=`${t[0]} - ${t[2]} - ${t[3]} - ${t[4]}
`}return a});return{botStore:e,formattedLogs:s}}});const w={class:"d-flex h-100 p-0 align-items-start"};function B(e,s,a,n,r,t){const o=p("b-button");return u(),_("div",w,[$(v("textarea",{"onUpdate:modelValue":s[0]||(s[0]=c=>e.formattedLogs=c),class:"h-100",readonly:""},null,512),[[L,e.formattedLogs]]),l(o,{id:"refresh-logs",size:"sm",onClick:e.botStore.activeBot.getLogs},{default:x(()=>[V("↻")]),_:1},8,["onClick"])])}const h=i(b,[["render",B],["__scopeId","data-v-d9afb327"]]),C=d({name:"LogView",components:{LogViewer:h}}),k={class:"p-4 h-100"};function y(e,s,a,n,r,t){const o=p("LogViewer");return u(),_("div",k,[l(o)])}const S=i(C,[["render",y]]);export{S as default};
//# sourceMappingURL=LogView-41c879bb.js.map
