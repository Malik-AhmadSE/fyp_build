import{_ as u,J as p,o as a,c as l,a as t,b as i,w as g,K as S,L as $,r as b,g as x,t as c,p as B,e as w}from"./index-040ab3ec.js";import k from"./create_Bot-acf9bf57.js";const N={name:"dell_bot",data(){return{}},props:{name_bot:String},methods:{async dellete(){if(confirm(`Are You Sure To Delete ${this.name_bot}`)){const e={bot_name:this.name_bot},s=await p.post("http://127.0.0.1:8000/delete/",JSON.stringify(e));console.log("deleted"),s.status===200?(this.$parent.refreshBotList(),alert(`Bot "${e.bot_name}" Delleted successfully!`)):alert("Bot is not Deleted yet")}else alert(`You Saved The "${this.name_bot}" Bot,Successfully!`)}}};function D(e,s,h,m,r,o){return a(),l("div",null,[t("button",{onClick:s[0]||(s[0]=(..._)=>o.dellete&&o.dellete(..._)),class:"btn"},"Delete")])}const I=u(N,[["render",D],["__scopeId","data-v-fd7d48b9"]]);const C={name:"start_bot",props:{name_bot:String},methods:{async send(){const e={botname:this.name_bot};console.log(e.botname),(await p.post("http://127.0.0.1:8000/startbot/",JSON.stringify(e))).status===200?alert(`"${e.botname}" is Started Sucessfully!`):alert("Bot Unable to Run!")}}};function L(e,s,h,m,r,o){return a(),l("div",null,[t("button",{onClick:s[0]||(s[0]=(..._)=>o.send&&o.send(..._)),class:"btn"},"Start")])}const T=u(C,[["render",L],["__scopeId","data-v-95953670"]]);const J={name:"show_list_bot",components:{dell_bot:I,start_bot:T,create_Bot:k},data(){return{bots:[]}},created(){this.fetch_bot_list()},methods:{async fetch_bot_list(){const e=await p.get("http://127.0.0.1:8000/show/");this.bots=e.data},refreshBotList(){this.fetch_bot_list()}}},d=e=>(B("data-v-266d339c"),e=e(),w(),e),V={key:0},A=d(()=>t("h1",null,"Not Bot Exist",-1)),E={class:"btn btn-secondary btn-md look"},O=d(()=>t("br",null,null,-1)),Y=d(()=>t("br",null,null,-1)),F={key:1},K=d(()=>t("tr",null,[t("th",{class:"third"},"sr. No"),t("th",{class:"frst"},"Name"),t("th",{class:"frst"},"Strategy"),t("th",{class:"frst"},"Port Address"),t("th",{class:"sec"},"Delete"),t("th",{class:"sec"},"Start")],-1));function P(e,s,h,m,r,o){const _=b("router-link"),f=b("dell_bot"),y=b("start_bot");return r.bots.length===0?(a(),l("div",V,[A,t("div",E,[i(_,{class:"create",to:"/create_Bot"},{default:g(()=>[x("Tap to Create new bot")]),_:1})]),O,Y])):(a(),l("div",F,[t("table",null,[K,(a(!0),l(S,null,$(r.bots,(n,v)=>(a(),l("tr",{key:n.botname},[t("td",null,c(v+1),1),t("td",null,c(n.botname),1),t("td",null,c(n.strategy),1),t("td",null,c(n.port),1),t("td",null,[i(f,{name_bot:n.botname},null,8,["name_bot"])]),t("td",null,[i(y,{name_bot:n.botname},null,8,["name_bot"])])]))),128))])]))}const j=u(J,[["render",P],["__scopeId","data-v-266d339c"]]);export{j as default};
//# sourceMappingURL=show_list_bot-a261149f.js.map