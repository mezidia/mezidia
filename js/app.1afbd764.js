(function(e){function t(t){for(var n,s,l=t[0],i=t[1],o=t[2],u=0,m=[];u<l.length;u++)s=l[u],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&m.push(a[s][0]),a[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);b&&b(t);while(m.length)m.shift()();return r.push.apply(r,o||[]),c()}function c(){for(var e,t=0;t<r.length;t++){for(var c=r[t],n=!0,l=1;l<c.length;l++){var i=c[l];0!==a[i]&&(n=!1)}n&&(r.splice(t--,1),e=s(s.s=c[0]))}return e}var n={},a={app:0},r=[];function s(t){if(n[t])return n[t].exports;var c=n[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,s),c.l=!0,c.exports}s.m=e,s.c=n,s.d=function(e,t,c){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(s.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(c,n,function(t){return e[t]}.bind(null,n));return c},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/mezidia/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var o=0;o<l.length;o++)t(l[o]);var b=i;r.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},"56d7":function(e,t,c){"use strict";c.r(t);c("e260"),c("e6cf"),c("cca6"),c("a79d");var n=c("7a23"),a={class:"container-fluid p-0"},r=Object(n["f"])("hr",{class:"m-0"},null,-1),s={key:2},l=Object(n["f"])("hr",{class:"m-0"},null,-1),i={key:5},o=Object(n["f"])("hr",{class:"m-0"},null,-1),b=Object(n["f"])("hr",{class:"m-0"},null,-1),u=Object(n["f"])("hr",{class:"m-0"},null,-1),m=Object(n["f"])("hr",{class:"m-0"},null,-1);function f(e,t,c,f,j,d){var p=Object(n["k"])("Navbar"),O=Object(n["k"])("About"),g=Object(n["k"])("Loader"),h=Object(n["k"])("Projects"),v=Object(n["k"])("Members"),k=Object(n["k"])("Skills"),w=Object(n["k"])("Interests"),y=Object(n["k"])("Awards"),x=Object(n["k"])("Form");return Object(n["g"])(),Object(n["c"])("div",null,[Object(n["f"])(p,{items:j.navbaritems},null,8,["items"]),Object(n["f"])("div",a,[Object(n["f"])(O,{icons:j.aboutIcons,projects:j.aboutProjects},null,8,["icons","projects"]),r,j.loading?(Object(n["g"])(),Object(n["c"])(g,{key:0})):j.projects.length?(Object(n["g"])(),Object(n["c"])(h,{key:1,projects:j.projects},null,8,["projects"])):(Object(n["g"])(),Object(n["c"])("p",s,"No projects")),l,j.loading?(Object(n["g"])(),Object(n["c"])(g,{key:3})):j.members.length?(Object(n["g"])(),Object(n["c"])(v,{key:4,members:j.members},null,8,["members"])):(Object(n["g"])(),Object(n["c"])("p",i,"No members")),o,Object(n["f"])(k,{skills:j.skills},null,8,["skills"]),b,Object(n["f"])(w),u,Object(n["f"])(y,{awards:j.awards},null,8,["awards"]),m,Object(n["f"])(x)])])}var j=c("b85c"),d=(c("d3b7"),c("b0c0"),c("bfd7")),p=c.n(d),O={class:"navbar navbar-expand-lg navbar-dark bg-primary fixed-top",id:"sideNav"},g=Object(n["f"])("a",{class:"navbar-brand js-scroll-trigger",href:"https://github.com/mezidia",target:"blank"},[Object(n["f"])("span",{class:"d-block d-lg-none"},"Mezidia"),Object(n["f"])("span",{class:"d-none d-lg-block"},[Object(n["f"])("img",{class:"img-fluid img-profile rounded-circle mx-auto mb-2",src:p.a,alt:"Profile image"})])],-1),h=Object(n["f"])("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(n["f"])("span",{class:"navbar-toggler-icon"})],-1),v={class:"collapse navbar-collapse",id:"navbarSupportedContent"},k={class:"navbar-nav"};function w(e,t,c,a,r,s){var l=Object(n["k"])("NavbarItem");return Object(n["g"])(),Object(n["c"])("nav",O,[g,h,Object(n["f"])("div",v,[Object(n["f"])("ul",k,[(Object(n["g"])(!0),Object(n["c"])(n["a"],null,Object(n["j"])(c.items,(function(e){return Object(n["g"])(),Object(n["c"])(l,{key:e,item:e},null,8,["item"])})),128))])])])}c("9911");var y={class:"nav-item"};function x(e,t,c,a,r,s){return Object(n["g"])(),Object(n["c"])("li",y,[Object(n["f"])("a",{class:"nav-link js-scroll-trigger",href:c.item.link},Object(n["l"])(c.item.name),9,["href"])])}var z={props:{item:{type:Object,required:!0}}};z.render=x;var _=z,M={props:["items"],components:{NavbarItem:_}};M.render=w;var P=M,I={class:"resume-section",id:"about"},S={class:"resume-section-content"},A=Object(n["d"])('<h1 class="mb-0"><span class="text-primary">ME</span><span class="head-animation">ZIDIA</span></h1><div class="subheading mb-5"> 03056 Politekhnichna Street · Kyiv · <a href="mailto:mezidiaofficial@gmail.com">mezidiaofficial@gmail.com</a></div>',2),T={class:"lead mb-5"},q=Object(n["e"])("We are the young organization of smart, creative and interesting people. Every day we learn something new, create and improve ourselves. We also like to have fun together and play. And We make applications for people. If you are new here and want to join our team, first fill out the "),L=Object(n["f"])("a",{href:"#newMembers"},"form",-1),N=Object(n["e"])(" and view our working projects: "),C={class:"social-icons"};function W(e,t,c,a,r,s){var l=Object(n["k"])("AboutProject"),i=Object(n["k"])("AboutIcon");return Object(n["g"])(),Object(n["c"])("section",I,[Object(n["f"])("div",S,[A,Object(n["f"])("p",T,[q,L,N,Object(n["f"])("ul",null,[(Object(n["g"])(!0),Object(n["c"])(n["a"],null,Object(n["j"])(c.projects,(function(e){return Object(n["g"])(),Object(n["c"])(l,{key:e,project:e},null,8,["project"])})),128))])]),Object(n["f"])("div",C,[(Object(n["g"])(!0),Object(n["c"])(n["a"],null,Object(n["j"])(c.icons,(function(e){return Object(n["g"])(),Object(n["c"])(i,{key:e,icon:e},null,8,["icon"])})),128))])])])}function E(e,t,c,a,r,s){return Object(n["g"])(),Object(n["c"])("a",{class:"social-icon",href:c.icon.link,title:c.icon.title,target:"blank"},[Object(n["f"])("i",{class:c.icon.icon_class},null,2)],8,["href","title"])}var B={props:{icon:{type:Object,required:!0}}};B.render=E;var F=B;function G(e,t,c,a,r,s){return Object(n["g"])(),Object(n["c"])("li",null,[Object(n["f"])("a",{href:c.project.link,target:"_blank"},Object(n["l"])(c.project.name),9,["href"])])}var U={props:{project:{type:Object,required:!0}}};U.render=G;var V=U,Y={props:["icons","projects"],components:{AboutIcon:F,AboutProject:V}};Y.render=W;var H=Y,Z={class:"resume-section",id:"projects"},D={class:"resume-section-content"},J=Object(n["f"])("h2",{class:"mb-5"},"Projects",-1);function K(e,t,c,a,r,s){var l=Object(n["k"])("Project");return Object(n["g"])(),Object(n["c"])("section",Z,[Object(n["f"])("div",D,[J,(Object(n["g"])(!0),Object(n["c"])(n["a"],null,Object(n["j"])(c.projects,(function(e){return Object(n["g"])(),Object(n["c"])(l,{key:e,project:e},null,8,["project"])})),128))])])}c("a4d3"),c("e01a");var R={class:"d-flex flex-column flex-md-row justify-content-between mb-5"},Q={class:"flex-grow-1"},X={class:"flex-shrink-0"},$={class:"text-primary"};function ee(e,t,c,a,r,s){return Object(n["g"])(),Object(n["c"])("div",R,[Object(n["f"])("div",Q,[Object(n["f"])("a",{class:"h3 mb-0",href:c.project.html_url,target:"blank"},Object(n["l"])(c.project.name),9,["href"]),Object(n["f"])("p",null,Object(n["l"])(c.project.description),1)]),Object(n["f"])("div",X,[Object(n["f"])("span",$,Object(n["l"])(s.fixTime),1)])])}c("fb6a");var te={props:{project:{type:Object,required:!0}},computed:{fixTime:function(){return this.project.created_at.slice(0,-10)}}};te.render=ee;var ce=te,ne={props:["projects"],components:{Project:ce}};ne.render=K;var ae=ne,re={class:"resume-section",id:"members"},se={class:"resume-section-content"},le=Object(n["f"])("h2",{class:"mb-5"},"Members",-1);function ie(e,t,c,a,r,s){var l=Object(n["k"])("Member");return Object(n["g"])(),Object(n["c"])("section",re,[Object(n["f"])("div",se,[le,(Object(n["g"])(!0),Object(n["c"])(n["a"],null,Object(n["j"])(c.members,(function(e){return Object(n["g"])(),Object(n["c"])(l,{key:e,member:e},null,8,["member"])})),128))])])}var oe={class:"d-flex flex-column flex-md-row justify-content-between mb-5"},be={class:"flex-grow-1"},ue={class:"mb-0"},me={class:"subheading mb-3"};function fe(e,t,c,a,r,s){return Object(n["g"])(),Object(n["c"])("div",oe,[Object(n["f"])("div",be,[Object(n["f"])("h3",ue,Object(n["l"])(c.member.name),1),Object(n["f"])("div",me,[Object(n["f"])("a",{href:c.member.html_url,target:"blank"},"@"+Object(n["l"])(c.member.login),9,["href"])]),Object(n["f"])("div",null,Object(n["l"])(c.member.bio),1)]),Object(n["f"])("img",{src:c.member.avatar_url,width:"50",height:"50",alt:"User photo"},null,8,["src"])])}var je={props:{member:{type:Object,required:!0}}};je.render=fe;var de=je,pe={props:["members"],components:{Member:de}};pe.render=ie;var Oe=pe,ge={class:"resume-section",id:"skills"},he={class:"resume-section-content"},ve=Object(n["f"])("h2",{class:"mb-5"},"Our Skills",-1),ke=Object(n["f"])("div",{class:"subheading mb-3"},"Programming Languages & Tools",-1),we={class:"list-inline dev-icons"},ye=Object(n["d"])('<div class="subheading mb-3">Workflow</div><ul class="fa-ul mb-0"><li><span class="fa-li"><i class="fas fa-check"></i></span> Responsive Design </li><li><span class="fa-li"><i class="fas fa-check"></i></span> Cross Platfrom useful applications </li><li><span class="fa-li"><i class="fas fa-check"></i></span> Modern technoligies </li><li><span class="fa-li"><i class="fas fa-check"></i></span> Good feedback </li></ul>',2);function xe(e,t,c,a,r,s){var l=Object(n["k"])("Skill");return Object(n["g"])(),Object(n["c"])("section",ge,[Object(n["f"])("div",he,[ve,ke,Object(n["f"])("ul",we,[(Object(n["g"])(!0),Object(n["c"])(n["a"],null,Object(n["j"])(c.skills,(function(e){return Object(n["g"])(),Object(n["c"])(l,{key:e,skill:e},null,8,["skill"])})),128))]),ye])])}var ze={class:"list-inline-item"};function _e(e,t,c,a,r,s){return Object(n["g"])(),Object(n["c"])("li",ze,[Object(n["f"])("i",{class:c.skill},null,2)])}var Me={props:{skill:{type:String,required:!0}}};Me.render=_e;var Pe=Me,Ie={props:["skills"],components:{Skill:Pe}};Ie.render=xe;var Se=Ie,Ae={class:"resume-section",id:"interests"},Te=Object(n["f"])("div",{class:"resume-section-content"},[Object(n["f"])("h2",{class:"mb-5"},"Interests"),Object(n["f"])("p",null,"Most of the members of the organization met at the university. We all love to create. We are different, but we find common interests: both at work and at leisure. We spend every day together. If we don't see each other, we meet online."),Object(n["f"])("p",{class:"mb-0"},"But everyone can tell more about themselves.")],-1);function qe(e,t){return Object(n["g"])(),Object(n["c"])("section",Ae,[Te])}const Le={};Le.render=qe;var Ne=Le,Ce={class:"resume-section",id:"awards"},We={class:"resume-section-content"},Ee=Object(n["f"])("h2",{class:"mb-5"},"Awards & Certifications",-1),Be={class:"fa-ul mb-0"};function Fe(e,t,c,a,r,s){var l=Object(n["k"])("Award");return Object(n["g"])(),Object(n["c"])("section",Ce,[Object(n["f"])("div",We,[Ee,Object(n["f"])("ul",Be,[(Object(n["g"])(!0),Object(n["c"])(n["a"],null,Object(n["j"])(c.awards,(function(e){return Object(n["g"])(),Object(n["c"])(l,{key:e,award:e},null,8,["award"])})),128))])])])}var Ge=Object(n["f"])("span",{class:"fa-li"},[Object(n["f"])("i",{class:"fas fa-trophy text-warning"})],-1);function Ue(e,t,c,a,r,s){return Object(n["g"])(),Object(n["c"])("li",null,[Ge,Object(n["e"])(" "+Object(n["l"])(c.award),1)])}var Ve={props:{award:{type:String,required:!0}}};Ve.render=Ue;var Ye=Ve,He={props:["awards"],components:{Award:Ye}};He.render=Fe;var Ze=He,De={class:"resume-section",id:"newMembers"},Je={class:"resume-section-content"},Ke=Object(n["f"])("h2",{class:"mb-5"},"New members",-1),Re=Object(n["f"])("p",null,[Object(n["e"])("If you want to be the "),Object(n["f"])("strong",null,"new member of this organization"),Object(n["e"])(", submit the form below. If you have additional questions, ask @mezgoodle in Telegram or write an email which is in "),Object(n["f"])("i",null,"About"),Object(n["e"])(" section.")],-1),Qe=Object(n["f"])("p",{class:"mb-0"},[Object(n["e"])("We have no requirements, only "),Object(n["f"])("i",null,"desire is important"),Object(n["e"])(".")],-1),Xe={key:0,class:"alert alert-danger d-flex align-items-center mt-3",role:"alert"},$e=Object(n["f"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-x-lg mr-2",viewBox:"0 0 16 16"},[Object(n["f"])("path",{d:"M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"})],-1),et=Object(n["f"])("div",null," Error while sending email ",-1),tt={key:1,class:"alert alert-success d-flex align-items-center mt-3",role:"alert"},ct=Object(n["f"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-check-circle mr-2",viewBox:"0 0 16 16"},[Object(n["f"])("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),Object(n["f"])("path",{d:"M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"})],-1),nt=Object(n["f"])("div",null," Email was successfully sended ",-1),at=Object(n["f"])("label",null,"Your email",-1),rt=Object(n["f"])("label",null,"Your name",-1),st=Object(n["f"])("label",null,"Your comments",-1),lt=Object(n["f"])("button",{type:"submit",class:"btn btn-primary mt-3"},"Submit",-1);function it(e,t,c,a,r,s){return Object(n["g"])(),Object(n["c"])("section",De,[Object(n["f"])("div",Je,[Ke,Re,Qe,r.error?(Object(n["g"])(),Object(n["c"])("div",Xe,[$e,et])):r.sended?(Object(n["g"])(),Object(n["c"])("div",tt,[ct,nt])):(Object(n["g"])(),Object(n["c"])("form",{key:2,class:"pt-3",onSubmit:t[4]||(t[4]=Object(n["o"])((function(){return s.sendEmail&&s.sendEmail.apply(s,arguments)}),["prevent"]))},[at,Object(n["n"])(Object(n["f"])("input",{class:"form-control",required:"",type:"email",placeholder:"name@example.com","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.email=e}),name:"email"},null,512),[[n["m"],r.email]]),rt,Object(n["n"])(Object(n["f"])("input",{class:"form-control",required:"",type:"text",maxlength:"25",placeholder:"Enter name","onUpdate:modelValue":t[2]||(t[2]=function(e){return r.name=e}),name:"name"},null,512),[[n["m"],r.name]]),st,Object(n["n"])(Object(n["f"])("textarea",{class:"form-control",type:"text",placeholder:"Your comments",rows:"3","onUpdate:modelValue":t[3]||(t[3]=function(e){return r.message=e}),name:"message"},"\n        ",512),[[n["m"],r.message]]),lt],32))])])}var ot=c("0f91"),bt=c.n(ot),ut={data:function(){return{email:"",name:"",message:"",sended:!1,error:!1}},methods:{sendEmail:function(e){try{bt.a.sendForm("service_sp6z45v","template_d5pneq8",e.target,"user_TZrOrBt41LsvPCLcZaWB7",{name:this.name,email:this.email,message:this.message})}catch(t){this.error=!0,console.log({error:t})}this.sended=!0,this.name="",this.email="",this.message=""}}};ut.render=it;var mt=ut,ft=Object(n["p"])("data-v-225d0f40");Object(n["i"])("data-v-225d0f40");var jt={class:"lds-ring"},dt=Object(n["f"])("div",null,null,-1),pt=Object(n["f"])("div",null,null,-1),Ot=Object(n["f"])("div",null,null,-1),gt=Object(n["f"])("div",null,null,-1);Object(n["h"])();var ht=ft((function(e,t){return Object(n["g"])(),Object(n["c"])("div",jt,[dt,pt,Ot,gt])}));c("a80f");const vt={};vt.render=ht,vt.__scopeId="data-v-225d0f40";var kt=vt,wt={name:"App",mounted:function(){var e=this;fetch("https://api.github.com/orgs/mezidia/repos").then((function(e){return e.json()})).then((function(t){setTimeout((function(){e.projects=t}),1e3)})),fetch("https://api.github.com/orgs/mezidia/members").then((function(e){return e.json()})).then((function(t){var c,n=Object(j["a"])(t);try{for(n.s();!(c=n.n()).done;){var a=c.value;fetch(a.url).then((function(e){return e.json()})).then((function(t){setTimeout((function(){e.members.push({login:t.login,name:t.name,avatar_url:t.avatar_url,html_url:t.html_url,bio:t.bio}),e.loading=!1}),1e3)}))}}catch(r){n.e(r)}finally{n.f()}}))},data:function(){return{navbaritems:[{link:"#about",name:"About"},{link:"#projects",name:"Projects"},{link:"#members",name:"Members"},{link:"#skills",name:"Skills"},{link:"#interests",name:"Interests"},{link:"#awards",name:"Awards"},{link:"#newMembers",name:"New members"}],aboutIcons:[{link:"https://github.com/mezidia",title:"About",icon_class:"fab fa-github"},{link:"https://t.me/sylvenis",title:"Maxim Telegram profile",icon_class:"fab fa-telegram"},{link:"https://www.facebook.com/profile.php?id=100005721694357",title:"Maxim Facebook profile",icon_class:"fab fa-facebook-f"}],aboutProjects:[{link:"https://github.com/mezidia/song-helper",name:"song-helper"},{link:"https://github.com/mezidia/Telegramia",name:"Telegramia"},{link:"https://github.com/mezidia/mezidia-inspector",name:"mezidia-inspector"},{link:"https://github.com/mezidia/SIGame",name:"SIGame"},{link:"https://github.com/mezidia/pet_detector",name:"pet-detector"},{link:"https://github.com/mezidia/grechka.com",name:"grechka.com"}],skills:["fab fa-html5","fab fa-css3-alt","fab fa-js-square","fab fa-react","fab fa-node-js","fab fa-npm","fab fa-python","fab fa-unity","fab fa-android","fab fa-docker","fab fa-php"],awards:["Many Coursera courses from @VsIG and @gazinaft","Hacktoberfest 2020","Hacktoberfest 2021","INT20H"],projects:[],members:[],loading:!0}},components:{Navbar:P,About:H,Projects:ae,Members:Oe,Skills:Se,Interests:Ne,Awards:Ze,Form:mt,Loader:kt}};wt.render=f;var yt=wt;c("a347");Object(n["b"])(yt).mount("#app")},"619e":function(e,t,c){},a347:function(e,t,c){},a80f:function(e,t,c){"use strict";c("619e")},bfd7:function(e,t,c){e.exports=c.p+"img/MezidiaLogoTransparent.b5c65bc5.png"}});
//# sourceMappingURL=app.1afbd764.js.map