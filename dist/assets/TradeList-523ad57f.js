import{_ as z,o as s,c as _,a as h,t as y,h as x,m as q,d as H,k as T,w as m,b as n,g as $,aA as Z,D as ie,r as k,i as b,u as G,j as W,l as A,q as j,s as re,n as ne,aB as se,E as M,x as de,R as ue}from"./index-040ab3ec.js";import{_ as ce,D as K}from"./InfoBox-02d7780a.js";const me={name:"CloseBoxMultipleIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},fe=["aria-hidden","aria-label"],ve=["fill","width","height"],pe={d:"M4 20H18V22H4C2.9 22 2 21.11 2 20V6H4V20M20.22 2H7.78C6.8 2 6 2.8 6 3.78V16.22C6 17.2 6.8 18 7.78 18H20.22C21.2 18 22 17.2 22 16.22V3.78C22 2.8 21.2 2 20.22 2M19 13.6L17.6 15L14 11.4L10.4 15L9 13.6L12.6 10L9 6.4L10.4 5L14 8.6L17.6 5L19 6.4L15.4 10L19 13.6Z"},be={key:0};function ye(t,l,e,c,f,v){return s(),_("span",q(t.$attrs,{"aria-hidden":!e.title,"aria-label":e.title,class:"material-design-icon close-box-multiple-icon",role:"img",onClick:l[0]||(l[0]=i=>t.$emit("click",i))}),[(s(),_("svg",{fill:e.fillColor,class:"material-design-icon__svg",width:e.size,height:e.size,viewBox:"0 0 24 24"},[h("path",pe,[e.title?(s(),_("title",be,y(e.title),1)):x("",!0)])],8,ve))],16,fe)}const xe=z(me,[["render",ye]]),_e={name:"GestureTapIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},ge=["aria-hidden","aria-label"],ke=["fill","width","height"],Ve={d:"M10,9A1,1 0 0,1 11,8A1,1 0 0,1 12,9V13.47L13.21,13.6L18.15,15.79C18.68,16.03 19,16.56 19,17.14V21.5C18.97,22.32 18.32,22.97 17.5,23H11C10.62,23 10.26,22.85 10,22.57L5.1,18.37L5.84,17.6C6.03,17.39 6.3,17.28 6.58,17.28H6.8L10,19V9M11,5A4,4 0 0,1 15,9C15,10.5 14.2,11.77 13,12.46V11.24C13.61,10.69 14,9.89 14,9A3,3 0 0,0 11,6A3,3 0 0,0 8,9C8,9.89 8.39,10.69 9,11.24V12.46C7.8,11.77 7,10.5 7,9A4,4 0 0,1 11,5Z"},Ce={key:0};function $e(t,l,e,c,f,v){return s(),_("span",q(t.$attrs,{"aria-hidden":!e.title,"aria-label":e.title,class:"material-design-icon gesture-tap-icon",role:"img",onClick:l[0]||(l[0]=i=>t.$emit("click",i))}),[(s(),_("svg",{fill:e.fillColor,class:"material-design-icon__svg",width:e.size,height:e.size,viewBox:"0 0 24 24"},[h("path",Ve,[e.title?(s(),_("title",Ce,y(e.title),1)):x("",!0)])],8,ke))],16,ge)}const Te=z(_e,[["render",$e]]),he={name:"CloseBoxIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},we=["aria-hidden","aria-label"],Le=["fill","width","height"],Be={d:"M19,3H16.3H7.7H5A2,2 0 0,0 3,5V7.7V16.4V19A2,2 0 0,0 5,21H7.7H16.4H19A2,2 0 0,0 21,19V16.3V7.7V5A2,2 0 0,0 19,3M15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4L13.4,12L17,15.6L15.6,17Z"},Ae={key:0};function Fe(t,l,e,c,f,v){return s(),_("span",q(t.$attrs,{"aria-hidden":!e.title,"aria-label":e.title,class:"material-design-icon close-box-icon",role:"img",onClick:l[0]||(l[0]=i=>t.$emit("click",i))}),[(s(),_("svg",{fill:e.fillColor,class:"material-design-icon__svg",width:e.size,height:e.size,viewBox:"0 0 24 24"},[h("path",Be,[e.title?(s(),_("title",Ae,y(e.title),1)):x("",!0)])],8,Le))],16,we)}const N=z(he,[["render",Fe]]),Ee={class:"d-flex flex-column"},Oe=H({__name:"TradeActions",props:{botApiVersion:{type:Number,default:1},trade:{type:Object,required:!0}},emits:["forceExit","forceExitPartial","cancelOpenOrder","deleteTrade"],setup(t){return(l,e)=>{const c=k("b-button");return s(),_("div",Ee,[t.botApiVersion<=1.1?(s(),T(c,{key:0,class:"btn-xs text-start",size:"sm",title:"Forceexit",onClick:e[0]||(e[0]=f=>l.$emit("forceExit",t.trade))},{default:m(()=>[n(N,{size:16,title:"Forceexit",class:"me-1"}),$("Forceexit ")]),_:1})):x("",!0),t.botApiVersion>1.1?(s(),T(c,{key:1,class:"btn-xs text-start",size:"sm",title:"Forceexit limit",onClick:e[1]||(e[1]=f=>l.$emit("forceExit",t.trade,"limit"))},{default:m(()=>[n(N,{size:16,title:"Forceexit limit",class:"me-1"}),$("Forceexit limit ")]),_:1})):x("",!0),t.botApiVersion>1.1?(s(),T(c,{key:2,class:"btn-xs text-start mt-1",size:"sm",title:"Forceexit market",onClick:e[2]||(e[2]=f=>l.$emit("forceExit",t.trade,"market"))},{default:m(()=>[n(N,{size:16,title:"Forceexit market",class:"me-1"}),$("Forceexit market ")]),_:1})):x("",!0),t.botApiVersion>2.16?(s(),T(c,{key:3,class:"btn-xs text-start mt-1",size:"sm",title:"Forceexit partial",onClick:e[3]||(e[3]=f=>l.$emit("forceExitPartial",t.trade))},{default:m(()=>[n(xe,{size:16,title:"Forceexit partial",class:"me-1"}),$("Forceexit partial ")]),_:1})):x("",!0),t.botApiVersion>=2.24&&t.trade.open_order_id?(s(),T(c,{key:4,class:"btn-xs text-start mt-1",size:"sm",title:"Cancel open orders",onClick:e[4]||(e[4]=f=>l.$emit("cancelOpenOrder",t.trade))},{default:m(()=>[n(Z,{size:16,title:"Cancel open order",class:"me-1"}),$("Cancel open order ")]),_:1})):x("",!0),n(c,{class:"btn-xs text-start mt-1",size:"sm",title:"Delete trade",onClick:e[5]||(e[5]=f=>l.$emit("deleteTrade",t.trade))},{default:m(()=>[n(ie,{size:16,title:"Delete trade",class:"me-1"}),$(" Delete ")]),_:1})])}}}),Se=H({__name:"TradeActionsPopover",props:{trade:{type:Object,required:!0},id:{type:Number,required:!0},botApiVersion:{type:Number,required:!0}},emits:["forceExit","forceExitPartial","cancelOpenOrder","deleteTrade"],setup(t,{emit:l}){const e=b(!1),c=(i,d=void 0)=>{e.value=!1,l("forceExit",i,d)},f=i=>{e.value=!1,l("forceExitPartial",i)},v=i=>{e.value=!1,l("cancelOpenOrder",i)};return(i,d)=>{const V=k("b-button"),B=k("b-popover");return s(),_("div",null,[n(V,{id:`btn-actions-${t.id}`,class:"btn-xs",size:"sm",title:"Actions",onClick:d[0]||(d[0]=w=>e.value=!e.value)},{default:m(()=>[n(Te,{size:16,title:"Actions"})]),_:1},8,["id"]),n(B,{target:`btn-actions-${t.id}`,title:`Actions for ${t.trade.pair}`,triggers:"manual",show:e.value,placement:"left"},{default:m(()=>[n(Oe,{trade:t.trade,"bot-api-version":t.botApiVersion,onForceExit:c,onForceExitPartial:f,onDeleteTrade:d[1]||(d[1]=w=>{e.value=!1,i.$emit("deleteTrade",t.trade)}),onCancelOpenOrder:v},null,8,["trade","bot-api-version"]),n(V,{class:"mt-1 w-100 text-start",size:"sm",onClick:d[2]||(d[2]=w=>e.value=!1)},{default:m(()=>[n(Z,{size:16,title:"Close popup",class:"me-1"}),$("Close Actions menu ")]),_:1})]),_:1},8,["target","title","show"])])}}}),Ie=["onSubmit"],ze=h("br",null,null,-1),He=H({__name:"ForceExitForm",props:{trade:{type:Object,required:!0},modelValue:{required:!0,default:!1,type:Boolean}},emits:["update:modelValue"],setup(t,{emit:l}){const e=t,c=G(),f=b(),v=b(void 0),i=b("limit"),d=()=>{var u;return(u=f.value)==null?void 0:u.checkValidity()},V=W({get(){return e.modelValue},set(p){l("update:modelValue",p)}}),B=()=>{if(!d())return;const p={tradeid:String(e.trade.trade_id)};i.value&&(p.ordertype=i.value),v.value&&(p.amount=v.value),c.activeBot.forceexit(p),V.value=!1},w=()=>{var p,u,F,E;v.value=e.trade.amount,c.activeBot.botApiVersion>1.1&&(i.value=((u=(p=c.activeBot.botState)==null?void 0:p.order_types)==null?void 0:u.force_exit)||((E=(F=c.activeBot.botState)==null?void 0:F.order_types)==null?void 0:E.exit)||"limit")},C=()=>{B()};return(p,u)=>{const F=k("b-form-input"),E=k("b-form-group"),S=k("b-form-select"),P=k("b-modal");return s(),_("div",null,[n(P,{id:"forceexit-modal",modelValue:A(V),"onUpdate:modelValue":u[3]||(u[3]=L=>ne(V)?V.value=L:null),title:"Force exiting a trade",onShow:w,onHidden:w,onOk:C},{default:m(()=>[h("form",{ref_key:"form",ref:f,onSubmit:re(B,["stop","prevent"])},[h("p",null,[h("span",null,"Exiting Trade #"+y(t.trade.trade_id)+" "+y(t.trade.pair)+".",1),ze,h("span",null,"Currently owning "+y(t.trade.amount)+" "+y(t.trade.base_currency),1)]),A(c).activeBot.botApiVersion>1.12?(s(),T(E,{key:0,label:`*Amount in ${t.trade.base_currency} [optional]`,"label-for":"stake-input","invalid-feedback":"Amount must be empty or a positive number",state:v.value!==void 0&&v.value>0},{default:m(()=>[n(F,{id:"stake-input",modelValue:v.value,"onUpdate:modelValue":u[0]||(u[0]=L=>v.value=L),type:"number",step:"0.000001",onKeydown:j(C,["enter","native"])},null,8,["modelValue","onKeydown"]),n(F,{id:"stake-input",modelValue:v.value,"onUpdate:modelValue":u[1]||(u[1]=L=>v.value=L),type:"range",step:"0.000001",min:"0",max:t.trade.amount,onKeydown:j(C,["enter","native"])},null,8,["modelValue","max","onKeydown"])]),_:1},8,["label","state"])):x("",!0),A(c).activeBot.botApiVersion>1.1?(s(),T(E,{key:1,label:"*OrderType","label-for":"ordertype-input","invalid-feedback":"OrderType",state:i.value!==void 0},{default:m(()=>[n(S,{modelValue:i.value,"onUpdate:modelValue":u[2]||(u[2]=L=>i.value=L),class:"ms-2",options:["market","limit"],style:{"min-width":"7em"},size:"sm"},null,8,["modelValue"])]),_:1},8,["state"])):x("",!0)],40,Ie)]),_:1},8,["modelValue"])])}}}),Pe={class:"h-100 overflow-auto w-100"},De={class:"w-100 d-flex justify-content-between"},Me=H({__name:"TradeList",props:{trades:{required:!0,type:Array},title:{default:"Trades",type:String},stakeCurrency:{required:!1,default:"",type:String},activeTrades:{default:!1,type:Boolean},showFilter:{default:!1,type:Boolean},multiBotView:{default:!1,type:Boolean},emptyText:{default:"No Trades to show.",type:String}},setup(t){const l=t,e=G(),c=se(),f=b(1),v=b(),i=b(""),d=b({}),V=l.activeTrades?200:15,B=b(),w=b(!1),C=b(!1),p=b(""),u=b(null),F=[{key:"actions"}],E=[{key:"close_timestamp",label:"Close date"},{key:"exit_reason",label:"Close Reason"}],S=a=>M(a,e.activeBot.stakeCurrencyDecimals),P=W(()=>l.trades.length),L=[l.multiBotView?{key:"botName",label:"Bot"}:{key:"actions"},{key:"trade_id",label:"ID"},{key:"pair",label:"Pair"},{key:"amount",label:"Amount"},{key:"stake_amount",label:"Stake amount"},{key:"open_rate",label:"Open rate",formatter:a=>M(a)},{key:l.activeTrades?"current_rate":"close_rate",label:l.activeTrades?"Current rate":"Close rate",formatter:a=>M(a)},{key:"profit",label:l.activeTrades?"Current profit %":"Profit %",formatter:(a,r,g)=>{if(!g)return"";const O=g;return`${de(O.profit_ratio,2)} ${`(${S(O.profit_abs)})`}`}},{key:"open_timestamp",label:"Open date"},...l.activeTrades?F:E],I=b(void 0),J=(a,r=void 0)=>{d.value=a,u.value=1,p.value=`Really exit trade ${a.trade_id} (Pair ${a.pair}) using ${r} Order?`,C.value=!0,I.value=r},Q=()=>{if(u.value===0){const a={tradeid:String(d.value.trade_id),botId:d.value.botId};e.deleteTradeMulti(a).catch(r=>console.log(r.response))}if(u.value===1){const a={tradeid:String(d.value.trade_id),botId:d.value.botId};I.value&&(a.ordertype=I.value),e.forceSellMulti(a).then(r=>console.log(r)).catch(r=>console.log(r.response))}if(u.value===3){const a={tradeid:String(d.value.trade_id),botId:d.value.botId};e.cancelOpenOrderMulti(a)}I.value=void 0,C.value=!1},X=a=>{p.value=`Really delete trade ${a.trade_id} (Pair ${a.pair})?`,u.value=0,d.value=a,C.value=!0},Y=a=>{d.value=a,w.value=!0},ee=a=>{p.value=`Cancel open order for trade ${a.trade_id} (Pair ${a.pair})?`,d.value=a,u.value=3,C.value=!0},te=(a,r,g)=>{l.activeTrades&&(g.preventDefault(),console.log(a))},ae=a=>{l.multiBotView&&e.selectedBot!==a.botId&&e.selectBot(a.botId),a&&a.trade_id!==e.activeBot.detailTradeId?(e.activeBot.setDetailTrade(a),l.multiBotView&&c.push({name:"Freqtrade Trading"})):e.activeBot.setDetailTrade(null)},le=()=>{var a;if(e.activeBot.detailTradeId){const r=l.trades.findIndex(g=>g.trade_id===e.activeBot.detailTradeId);r>=0?(a=B.value)==null||a.selectRow(r):(console.log(`Unsetting item for tradeid ${v.value}`),v.value=void 0)}};return ue(()=>e.activeBot.detailTradeId,a=>{var g;l.trades.findIndex(O=>O.trade_id===a)<0&&((g=B.value)==null||g.clearSelected())}),(a,r)=>{const g=k("b-table"),O=k("b-pagination"),R=k("b-form-input"),oe=k("b-modal");return s(),_("div",Pe,[n(g,{ref_key:"tradesTable",ref:B,small:"",hover:"",stacked:"md",items:t.trades.filter(o=>{var D,U;return o.pair.toLowerCase().includes(i.value.toLowerCase())||((D=o.exit_reason)==null?void 0:D.toLowerCase().includes(i.value.toLowerCase()))||((U=o.enter_tag)==null?void 0:U.toLowerCase().includes(i.value.toLowerCase()))}),fields:L,"show-empty":"","empty-text":t.emptyText,"per-page":A(V),"current-page":f.value,"primary-key":"botTradeId",selectable:"","select-head":!1,"select-mode":"single",onRowContextmenu:te,onRowClicked:ae,onRowSelected:le},{"cell(actions)":m(o=>[n(Se,{id:o.index,trade:o.item,"bot-api-version":A(e).activeBot.botApiVersion,onDeleteTrade:D=>X(o.item),onForceExit:J,onForceExitPartial:Y,onCancelOpenOrder:ee},null,8,["id","trade","bot-api-version","onDeleteTrade"])]),"cell(pair)":m(o=>[h("span",null,y(`${o.item.pair}${o.item.open_order_id===void 0||o.item.open_order_id===null?"":"*"}`),1)]),"cell(trade_id)":m(o=>[$(y(o.item.trade_id)+" "+y(A(e).activeBot.botApiVersion>2&&o.item.trading_mode!=="spot"?"| "+(o.item.is_short?"Short":"Long"):""),1)]),"cell(stake_amount)":m(o=>[$(y(S(o.item.stake_amount))+" "+y(o.item.trading_mode!=="spot"?`(${o.item.leverage}x)`:""),1)]),"cell(profit)":m(o=>[n(ce,{trade:o.item},null,8,["trade"])]),"cell(open_timestamp)":m(o=>[n(K,{date:o.item.open_timestamp},null,8,["date"])]),"cell(close_timestamp)":m(o=>[n(K,{date:o.item.close_timestamp},null,8,["date"])]),_:1},8,["items","empty-text","per-page","current-page"]),h("div",De,[t.activeTrades?x("",!0):(s(),T(O,{key:0,modelValue:f.value,"onUpdate:modelValue":r[0]||(r[0]=o=>f.value=o),"total-rows":A(P),"per-page":A(V),"aria-controls":"my-table"},null,8,["modelValue","total-rows","per-page"])),t.showFilter?(s(),T(R,{key:1,modelValue:i.value,"onUpdate:modelValue":r[1]||(r[1]=o=>i.value=o),type:"text",placeholder:"Filter",size:"sm",style:{width:"unset"}},null,8,["modelValue"])):x("",!0)]),t.activeTrades?(s(),T(He,{key:0,modelValue:w.value,"onUpdate:modelValue":r[2]||(r[2]=o=>w.value=o),trade:d.value},null,8,["modelValue","trade"])):x("",!0),n(oe,{modelValue:C.value,"onUpdate:modelValue":r[3]||(r[3]=o=>C.value=o),title:"Exit trade",onOk:Q},{default:m(()=>[$(y(p.value),1)]),_:1},8,["modelValue"])])}}});const Re=z(Me,[["__scopeId","data-v-d1a60aa9"]]);export{xe as F,Re as T};
//# sourceMappingURL=TradeList-523ad57f.js.map
