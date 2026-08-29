import{a as ni,b as ti,N as Rt,L as In,g as Mr,r as Z,d as ri,e as ke,u as ai,H as ii}from"./vendor-CMo2K_MD.js";import{R as Pn,P as oi,a as si,C as li,T as On,B as ui,X as Mt,Y as Nt,b as ci,L as di,c as mi,d as pi}from"./charts-DlREgHWS.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}})();var jn={exports:{}},Ge={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tt;function fi(){if(Tt)return Ge;Tt=1;var e=ni(),t=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function i(s,l,u){var d,c={},f=null,p=null;u!==void 0&&(f=""+u),l.key!==void 0&&(f=""+l.key),l.ref!==void 0&&(p=l.ref);for(d in l)r.call(l,d)&&!o.hasOwnProperty(d)&&(c[d]=l[d]);if(s&&s.defaultProps)for(d in l=s.defaultProps,l)c[d]===void 0&&(c[d]=l[d]);return{$$typeof:t,type:s,key:f,ref:p,props:c,_owner:a.current}}return Ge.Fragment=n,Ge.jsx=i,Ge.jsxs=i,Ge}var zt;function hi(){return zt||(zt=1,jn.exports=fi()),jn.exports}var m=hi(),ln={},Ft;function gi(){if(Ft)return ln;Ft=1;var e=ti();return ln.createRoot=e.createRoot,ln.hydrateRoot=e.hydrateRoot,ln}var bi=gi();const xi=[{to:"/diagnostico",label:"Diagnóstico"},{to:"/biblioteca",label:"Biblioteca"},{to:"/calculadora",label:"Calculadora"},{to:"/simulador",label:"Simulador"},{to:"/app",label:"App"},{to:"/conhecimento",label:"Conhecimento"}];function vi(){return m.jsx("header",{className:"topbar",children:m.jsxs("div",{className:"wrap topbar__inner",children:[m.jsxs(Rt,{to:"/",className:"brand","aria-label":"ECOMNIX — página inicial",children:[m.jsx("span",{className:"brand__mark","aria-hidden":"true"}),"ECOMNIX"]}),m.jsx("nav",{className:"topbar__nav","aria-label":"Navegação principal",children:xi.map(e=>m.jsx(Rt,{to:e.to,className:({isActive:t})=>t?"active":void 0,children:e.label},e.to))})]})})}function yi(){return m.jsx("footer",{className:"footer",children:m.jsxs("div",{className:"wrap footer__grid",children:[m.jsxs("div",{children:[m.jsx("strong",{children:"ECOMNIX"}),m.jsx("p",{style:{marginTop:8},children:"Plataforma de referência nacional em democratização do crédito de carbono. Conteúdo educacional — não é oferta de crédito de carbono nem promessa de renda."})]}),m.jsxs("div",{children:[m.jsx("strong",{children:"Módulos"}),m.jsx("p",{style:{marginTop:8,lineHeight:2},children:"Diagnóstico · Biblioteca · Calculadora · Simulador · App · Conhecimento"})]}),m.jsxs("div",{children:[m.jsx("strong",{children:"Integridade"}),m.jsx("p",{style:{marginTop:8},children:"Processamento no cliente, sem coleta de dados pessoais. Todo dado factual é citado com fonte. WCAG 2.2 AA."})]})]})})}const ki=[{to:"/diagnostico",num:"01",titulo:"Diagnóstico",desc:"Concentração de créditos de carbono no Brasil, com dados públicos citados."},{to:"/biblioteca",num:"02",titulo:"Biblioteca",desc:"Iniciativas: queimadas, matas ciliares, reflorestamento, economia circular, cidades."},{to:"/calculadora",num:"03",titulo:"Calculadora",desc:"Pegada de carbono (transporte, energia, resíduos) em créditos simulados."},{to:"/simulador",num:"04",titulo:"Simulador de resgate",desc:"Simulação educativa do ciclo de vida de um crédito — sem transação real."},{to:"/app",num:"05",titulo:"App móvel",desc:"Mockup navegável de smartphone e smartwatch (especificação funcional)."},{to:"/conhecimento",num:"06",titulo:"Conhecimento",desc:"Base de conhecimento — os 21 capítulos do livro."}];function Ci(){return m.jsxs(m.Fragment,{children:[m.jsx("section",{className:"hero",children:m.jsxs("div",{className:"wrap",children:[m.jsx("p",{className:"mono",style:{textTransform:"uppercase",letterSpacing:"0.06em",fontSize:"0.78rem",color:"rgba(255,255,255,0.7)",margin:0},children:"Inteligência regenerativa"}),m.jsx("h1",{style:{marginTop:8},children:"Democratizar o crédito de carbono no Brasil"}),m.jsx("p",{children:"A ECOMNIX é uma plataforma de referência nacional que diagnostica a concentração do mercado, educa sobre a pegada e o ciclo de vida do crédito, e aponta caminhos de inclusão — com dados citados e processamento no cliente."}),m.jsxs("div",{className:"hero__stats",children:[m.jsxs("div",{className:"hero__stat",children:[m.jsx("div",{className:"num",children:"92,2%"}),m.jsx("div",{className:"lbl",children:"dos créditos nacionais sob um único padrão (VCS/Verra)"})]}),m.jsxs("div",{className:"hero__stat",children:[m.jsx("div",{className:"num",children:"45,2 mi"}),m.jsx("div",{className:"lbl",children:"créditos gerados em 2021 (vs 2,2 mi em 2018)"})]}),m.jsxs("div",{className:"hero__stat",children:[m.jsx("div",{className:"num",children:"2,145 Gt"}),m.jsx("div",{className:"lbl",children:"emissões brutas do Brasil em 2024 (SEEG)"})]})]}),m.jsxs("div",{style:{marginTop:24,display:"flex",gap:12,flexWrap:"wrap"},children:[m.jsx(In,{className:"btn btn--tertiary",to:"/diagnostico",children:"Ver o diagnóstico"}),m.jsx(In,{className:"btn btn--ghost",to:"/calculadora",style:{color:"#fff",borderColor:"rgba(255,255,255,0.6)"},children:"Calcular minha pegada"})]})]})}),m.jsx("section",{className:"section",children:m.jsxs("div",{className:"wrap",children:[m.jsx("h2",{children:"Módulos"}),m.jsx("p",{style:{color:"var(--ink-soft)"},children:"Seis frentes, uma plataforma."}),m.jsx("div",{className:"module-nav",children:ki.map(e=>m.jsxs(In,{className:"module-card",to:e.to,children:[m.jsx("span",{className:"num",children:e.num}),m.jsx("h3",{children:e.titulo}),m.jsx("p",{style:{margin:0,color:"var(--ink-soft)",fontSize:"0.9rem"},children:e.desc})]},e.to))})]})})]})}function _e({kicker:e,title:t,lede:n,children:r}){return m.jsxs("div",{style:{maxWidth:760,marginBottom:24},children:[e&&m.jsx("p",{className:"mono",style:{textTransform:"uppercase",letterSpacing:"0.06em",fontSize:"0.75rem",color:"var(--tertiary)",margin:0},children:e}),m.jsx("h1",{style:{marginTop:4},children:t}),n&&m.jsx("p",{style:{color:"var(--ink-soft)",fontSize:"1.05rem"},children:n}),r&&m.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:r})]})}const wi={observado:"Dado observado",estimativa:"Estimativa",cenario:"Cenário",proposta:"Proposta",conceito:"Conceito experimental"};function kn({kind:e}){return m.jsx("span",{className:`nature-tag nature-tag--${e}`,title:"Natureza da informação exibida",children:wi[e]})}const Rn=[{label:"VCS (Verra)",value:92.2,unidade:"%",nota:"Padrão dominante do mercado voluntário"},{label:"ACR",value:6,unidade:"%",nota:"American Carbon Registry"},{label:"Gold Standard",value:1.9,unidade:"%",nota:"GS"}],Si=[{label:"Mudança de uso da terra",value:42,unidade:"%",ano:2024},{label:"Agropecuária",value:29,unidade:"%",ano:2024},{label:"Energia",value:20,unidade:"%",ano:2024},{label:"Resíduos",value:5,unidade:"%",ano:2024},{label:"Processos industriais",value:4,unidade:"%",ano:2024}],qt=[{label:"Agropecuária",value:42,unidade:"%",ano:2024},{label:"Energia",value:29,unidade:"%",ano:2024},{label:"Mudança de uso da terra",value:17,unidade:"%",ano:2024},{label:"Processos industriais",value:6,unidade:"%",ano:2024},{label:"Resíduos",value:6,unidade:"%",ano:2024}],Ei=[{label:"2019",value:10129,unidade:"km²",ano:2019},{label:"2020",value:10851,unidade:"km²",ano:2020},{label:"2021",value:13038,unidade:"km²",ano:2021},{label:"2022",value:11594,unidade:"km²",ano:2022},{label:"2023",value:9064,unidade:"km²",ano:2023},{label:"2024",value:6288,unidade:"km²",ano:2024}],Ai=[{label:"Emissões brutas totais do Brasil",value:2.145,unidade:"Gt CO₂e",ano:2024},{label:"Emissões líquidas do Brasil",value:1.489,unidade:"Gt CO₂e",ano:2024},{label:"Renováveis na matriz elétrica",value:88.2,unidade:"%",ano:2024},{label:"Créditos VCS emitidos (global, acumulado)",value:1300,unidade:"milhões",ano:2025}],Ii=[{instituicao:"FGV Agro / OCBio (Observatório de Bioeconomia)",titulo:"O avanço do mercado voluntário de carbono no Brasil: desafios estruturais, técnicos e científicos",ano:"05/2022",url:"https://agro.fgv.br/publicacao/ocbio-o-avanco-do-mercado-voluntario-de-carbono-no-brasil-desafios-estruturais-tecnicos"},{instituicao:"Berkeley Carbon Trading Project (UC Berkeley)",titulo:"Voluntary Registry Offsets Database (base dos percentuais por padrão)",ano:2022,url:"https://gspp.berkeley.edu/research-and-impact/centers/cepp/projects/berkeley-carbon-trading-project"},{instituicao:"Ecosystem Marketplace",titulo:"State of the Voluntary Carbon Markets (geração de créditos 2018–2021)",ano:2021,url:"https://www.ecosystemmarketplace.com/"},{instituicao:"Observatório do Clima / SEEG",titulo:"SEEG 2024 (13ª edição) — Sistema de Estimativas de Emissões e Remoções de GEE",ano:2024,url:"https://seeg.eco.br/"},{instituicao:"INPE",titulo:"PRODES — Monitoramento do Desmatamento da Amazônia Legal por Satélite",ano:2024,url:"https://terrabrasilis.dpi.inpe.br/app/dashboard/deforestation/biomes/legal_amazon/rates"},{instituicao:"Verra",titulo:"Verra Annual Report 2025 — VCUs acumulados (1,3 bi) e emissões/aposentadoria em 2025",ano:2025,url:"https://verra.org/wp-content/uploads/2026/07/Verra-AR_Final_.pdf"}],Dt=["#0e3b2e","#2f6b4f","#c2571b"];function Pi(){return m.jsx("section",{className:"section page-top",children:m.jsxs("div",{className:"wrap",children:[m.jsxs(_e,{kicker:"Módulo 01 · Diagnóstico",title:"A concentração do crédito de carbono no Brasil",lede:m.jsx(m.Fragment,{children:"O mercado voluntário brasileiro é dominado por um único padrão de certificação. Este painel usa dados públicos para mostrar a assimetria — o ponto de partida do argumento de democratização."}),children:[m.jsx(kn,{kind:"observado"}),m.jsx("span",{className:"chip",children:"Dados públicos com fonte citada"})]}),m.jsxs("div",{className:"grid grid--2",children:[m.jsxs("div",{className:"card",children:[m.jsx("h3",{children:"Créditos nacionais por padrão"}),m.jsx("p",{style:{fontSize:"0.85rem",color:"var(--ink-soft)"},children:"92,2% dos créditos brasileiros foram certificados pelo padrão VCS (Verra)."}),m.jsx(Pn,{width:"100%",height:260,children:m.jsxs(oi,{children:[m.jsx(si,{data:Rn,dataKey:"value",nameKey:"label",cx:"50%",cy:"50%",innerRadius:50,outerRadius:90,paddingAngle:2,children:Rn.map((e,t)=>m.jsx(li,{fill:Dt[t%Dt.length]},t))}),m.jsx(On,{formatter:e=>`${e}%`})]})}),m.jsxs("table",{className:"table",children:[m.jsx("thead",{children:m.jsxs("tr",{children:[m.jsx("th",{children:"Padrão"}),m.jsx("th",{className:"num",children:"%"})]})}),m.jsx("tbody",{children:Rn.map(e=>m.jsxs("tr",{children:[m.jsx("td",{children:e.label}),m.jsxs("td",{className:"num",children:[e.value.toLocaleString("pt-BR"),"%"]})]},e.label))})]})]}),m.jsxs("div",{className:"card",children:[m.jsx("h3",{children:"Emissões do Brasil por setor — SEEG 2024 (13ª ed.)"}),m.jsx("p",{style:{fontSize:"0.85rem",color:"var(--ink-soft)"},children:"Total bruto: 2,145 Gt CO₂e. Nas emissões brutas, a mudança de uso da terra lidera (42%)."}),m.jsx(Pn,{width:"100%",height:260,children:m.jsxs(ui,{data:Si,margin:{left:8},children:[m.jsx(Mt,{dataKey:"label",tick:{fontSize:10},interval:0,angle:-15,textAnchor:"end",height:60}),m.jsx(Nt,{unit:"%",tick:{fontSize:11}}),m.jsx(On,{formatter:e=>`${e}%`}),m.jsx(ci,{dataKey:"value",fill:"#2f6b4f",radius:[4,4,0,0]})]})})]})]}),m.jsxs("div",{className:"callout callout--warn",style:{marginTop:16},children:[m.jsx("strong",{children:"A virada de 2024."})," Nas emissões ",m.jsx("em",{children:"líquidas"})," (descontadas as remoções), a agropecuária passou a liderar (",qt[0].value,"%), superando a mudança de uso da terra (",qt[2].value,"%). É a primeira vez na série SEEG — e reforça que o eixo agropecuária/uso do solo é central para a democratização do crédito de carbono."]}),m.jsxs("div",{className:"grid grid--2",style:{marginTop:16},children:[m.jsxs("div",{className:"card",children:[m.jsx("h3",{children:"Desmatamento da Amazônia Legal (km²/ano)"}),m.jsx("p",{style:{fontSize:"0.85rem",color:"var(--ink-soft)"},children:"PRODES/INPE — queda recente, patamar ainda alto."}),m.jsx(Pn,{width:"100%",height:240,children:m.jsxs(di,{data:Ei,margin:{left:8},children:[m.jsx(mi,{strokeDasharray:"3 3",stroke:"#e2ddd3"}),m.jsx(Mt,{dataKey:"label",tick:{fontSize:11}}),m.jsx(Nt,{tick:{fontSize:11}}),m.jsx(On,{}),m.jsx(pi,{type:"monotone",dataKey:"value",stroke:"#c2571b",strokeWidth:2,dot:{r:3}})]})})]}),m.jsxs("div",{className:"card",children:[m.jsx("h3",{children:"Indicadores de contexto"}),m.jsxs("table",{className:"table",children:[m.jsx("thead",{children:m.jsxs("tr",{children:[m.jsx("th",{children:"Indicador"}),m.jsx("th",{className:"num",children:"Valor"})]})}),m.jsx("tbody",{children:Ai.map(e=>m.jsxs("tr",{children:[m.jsx("td",{children:e.label}),m.jsxs("td",{className:"num",children:[e.value.toLocaleString("pt-BR")," ",e.unidade]})]},e.label))})]})]})]}),m.jsxs("div",{className:"callout callout--warn",style:{marginTop:24},children:[m.jsx("strong",{children:"Leitura do diagnóstico."})," A concentração em um único padrão (92,2% VCS) contrasta com a dispersão territorial e social dos serviços ecossistêmicos que geram os créditos. A democratização passa por governança, transparência e inclusão — temas da Parte II e III do livro."]}),m.jsxs("div",{className:"ficha",style:{marginTop:24},children:[m.jsx("h3",{children:"Fontes (verificadas)"}),m.jsx("ul",{style:{paddingLeft:18,margin:0},children:Ii.map(e=>m.jsxs("li",{style:{marginBottom:8},children:[m.jsx("strong",{children:e.instituicao})," — ",e.titulo," (",e.ano,")."," ",m.jsx("a",{href:e.url,target:"_blank",rel:"noreferrer",children:e.url})]},e.url))})]})]})})}function Oi(e,t){const n={};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const ji=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Ri=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Mi={};function _t(e,t){return(Mi.jsx?Ri:ji).test(e)}const Ni=/[ \t\n\f\r]/g;function Ti(e){return typeof e=="object"?e.type==="text"?Bt(e.value):!1:Bt(e)}function Bt(e){return e.replace(Ni,"")===""}class tn{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r)}}tn.prototype.normal={};tn.prototype.property={};tn.prototype.space=void 0;function Nr(e,t){const n={},r={};for(const a of e)Object.assign(n,a.property),Object.assign(r,a.normal);return new tn(n,r,t)}function Qn(e){return e.toLowerCase()}class te{constructor(t,n){this.attribute=n,this.property=t}}te.prototype.attribute="";te.prototype.booleanish=!1;te.prototype.boolean=!1;te.prototype.commaOrSpaceSeparated=!1;te.prototype.commaSeparated=!1;te.prototype.defined=!1;te.prototype.mustUseProperty=!1;te.prototype.number=!1;te.prototype.overloadedBoolean=!1;te.prototype.property="";te.prototype.spaceSeparated=!1;te.prototype.space=void 0;let zi=0;const T=Me(),K=Me(),Yn=Me(),E=Me(),H=Me(),je=Me(),ae=Me();function Me(){return 2**++zi}const Jn=Object.freeze(Object.defineProperty({__proto__:null,boolean:T,booleanish:K,commaOrSpaceSeparated:ae,commaSeparated:je,number:E,overloadedBoolean:Yn,spaceSeparated:H},Symbol.toStringTag,{value:"Module"})),Mn=Object.keys(Jn);class lt extends te{constructor(t,n,r,a){let o=-1;if(super(t,n),Lt(this,"space",a),typeof r=="number")for(;++o<Mn.length;){const i=Mn[o];Lt(this,Mn[o],(r&Jn[i])===Jn[i])}}}lt.prototype.defined=!0;function Lt(e,t,n){n&&(e[t]=n)}function Be(e){const t={},n={};for(const[r,a]of Object.entries(e.properties)){const o=new lt(r,e.transform(e.attributes||{},r),a,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(o.mustUseProperty=!0),t[r]=o,n[Qn(r)]=r,n[Qn(o.attribute)]=r}return new tn(t,n,e.space)}const Tr=Be({properties:{ariaActiveDescendant:null,ariaAtomic:K,ariaAutoComplete:null,ariaBusy:K,ariaChecked:K,ariaColCount:E,ariaColIndex:E,ariaColSpan:E,ariaControls:H,ariaCurrent:null,ariaDescribedBy:H,ariaDetails:null,ariaDisabled:K,ariaDropEffect:H,ariaErrorMessage:null,ariaExpanded:K,ariaFlowTo:H,ariaGrabbed:K,ariaHasPopup:null,ariaHidden:K,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:H,ariaLevel:E,ariaLive:null,ariaModal:K,ariaMultiLine:K,ariaMultiSelectable:K,ariaOrientation:null,ariaOwns:H,ariaPlaceholder:null,ariaPosInSet:E,ariaPressed:K,ariaReadOnly:K,ariaRelevant:null,ariaRequired:K,ariaRoleDescription:H,ariaRowCount:E,ariaRowIndex:E,ariaRowSpan:E,ariaSelected:K,ariaSetSize:E,ariaSort:null,ariaValueMax:E,ariaValueMin:E,ariaValueNow:E,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function zr(e,t){return t in e?e[t]:t}function Fr(e,t){return zr(e,t.toLowerCase())}const Fi=Be({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:je,acceptCharset:H,accessKey:H,action:null,allow:null,allowFullScreen:T,allowPaymentRequest:T,allowUserMedia:T,alpha:T,alt:null,as:null,async:T,autoCapitalize:null,autoComplete:H,autoFocus:T,autoPlay:T,blocking:H,capture:null,charSet:null,checked:T,cite:null,className:H,closedBy:null,colorSpace:null,cols:E,colSpan:E,command:null,commandFor:null,content:null,contentEditable:K,controls:T,controlsList:H,coords:E|je,crossOrigin:null,data:null,dateTime:null,decoding:null,default:T,defer:T,dir:null,dirName:null,disabled:T,download:Yn,draggable:K,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:T,formTarget:null,headers:H,height:E,hidden:Yn,high:E,href:null,hrefLang:null,htmlFor:H,httpEquiv:H,id:null,imageSizes:null,imageSrcSet:null,inert:T,inputMode:null,integrity:null,is:null,isMap:T,itemId:null,itemProp:H,itemRef:H,itemScope:T,itemType:H,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:T,low:E,manifest:null,max:null,maxLength:E,media:null,method:null,min:null,minLength:E,multiple:T,muted:T,name:null,nonce:null,noModule:T,noValidate:T,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:T,optimum:E,pattern:null,ping:H,placeholder:null,playsInline:T,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:T,referrerPolicy:null,rel:H,required:T,reversed:T,rows:E,rowSpan:E,sandbox:H,scope:null,scoped:T,seamless:T,selected:T,shadowRootClonable:T,shadowRootCustomElementRegistry:T,shadowRootDelegatesFocus:T,shadowRootMode:null,shadowRootSerializable:T,shape:null,size:E,sizes:null,slot:null,span:E,spellCheck:K,src:null,srcDoc:null,srcLang:null,srcSet:null,start:E,step:null,style:null,tabIndex:E,target:null,title:null,translate:null,type:null,typeMustMatch:T,useMap:null,value:K,width:E,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:H,axis:null,background:null,bgColor:null,border:E,borderColor:null,bottomMargin:E,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:T,declare:T,event:null,face:null,frame:null,frameBorder:null,hSpace:E,leftMargin:E,link:null,longDesc:null,lowSrc:null,marginHeight:E,marginWidth:E,noResize:T,noHref:T,noShade:T,noWrap:T,object:null,profile:null,prompt:null,rev:null,rightMargin:E,rules:null,scheme:null,scrolling:K,standby:null,summary:null,text:null,topMargin:E,valueType:null,version:null,vAlign:null,vLink:null,vSpace:E,allowTransparency:null,autoCorrect:null,autoSave:null,credentialless:T,disablePictureInPicture:T,disableRemotePlayback:T,exportParts:je,part:H,prefix:null,property:null,results:E,security:null,unselectable:null},space:"html",transform:Fr}),qi=Be({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",maskType:"mask-type",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:ae,accentHeight:E,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:E,amplitude:E,arabicForm:null,ascent:E,attributeName:null,attributeType:null,azimuth:E,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:E,by:null,calcMode:null,capHeight:E,className:H,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:E,diffuseConstant:E,direction:null,display:null,dur:null,divisor:E,dominantBaseline:null,download:T,dx:null,dy:null,edgeMode:null,editable:null,elevation:E,enableBackground:null,end:null,event:null,exponent:E,externalResourcesRequired:null,fill:null,fillOpacity:E,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:je,g2:je,glyphName:je,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:E,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:E,horizOriginX:E,horizOriginY:E,id:null,ideographic:E,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:E,k:E,k1:E,k2:E,k3:E,k4:E,kernelMatrix:ae,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:E,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskType:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:E,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:E,overlineThickness:E,paintOrder:null,panose1:null,path:null,pathLength:E,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:H,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:E,pointsAtY:E,pointsAtZ:E,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:ae,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:ae,rev:ae,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:ae,requiredFeatures:ae,requiredFonts:ae,requiredFormats:ae,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:E,specularExponent:E,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:E,strikethroughThickness:E,string:null,stroke:null,strokeDashArray:ae,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:E,strokeOpacity:E,strokeWidth:null,style:null,surfaceScale:E,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:ae,tabIndex:E,tableValues:null,target:null,targetX:E,targetY:E,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:ae,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:E,underlineThickness:E,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:E,values:null,vAlphabetic:E,vMathematical:E,vectorEffect:null,vHanging:E,vIdeographic:E,version:null,vertAdvY:E,vertOriginX:E,vertOriginY:E,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:E,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:zr}),qr=Be({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),Dr=Be({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:Fr}),_r=Be({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),Di={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},_i=/[A-Z]/g,Vt=/-[a-z]/g,Bi=/^data[-\w.:]+$/i;function Li(e,t){const n=Qn(t);let r=t,a=te;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&Bi.test(t)){if(t.charAt(4)==="-"){const o=t.slice(5).replace(Vt,Ui);r="data"+o.charAt(0).toUpperCase()+o.slice(1)}else{const o=t.slice(4);if(!Vt.test(o)){let i=o.replace(_i,Vi);i.charAt(0)!=="-"&&(i="-"+i),t="data"+i}}a=lt}return new a(r,t)}function Vi(e){return"-"+e.toLowerCase()}function Ui(e){return e.charAt(1).toUpperCase()}const $i=Nr([Tr,Fi,qr,Dr,_r],"html"),ut=Nr([Tr,qi,qr,Dr,_r],"svg");function Gi(e){return e.join(" ").trim()}var Fe={},Nn,Ut;function Hi(){if(Ut)return Nn;Ut=1;var e=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,t=/\n/g,n=/^\s*/,r=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,a=/^:\s*/,o=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,i=/^[;\s]*/,s=/^\s+|\s+$/g,l=`
`,u="/",d="*",c="",f="comment",p="declaration";function b(w,x){if(typeof w!="string")throw new TypeError("First argument must be a string");if(!w)return[];x=x||{};var A=1,S=1;function F(M){var P=M.match(t);P&&(A+=P.length);var $=M.lastIndexOf(l);S=~$?M.length-$:S+M.length}function N(){var M={line:A,column:S};return function(P){return P.position=new y(M),L(),P}}function y(M){this.start=M,this.end={line:A,column:S},this.source=x.source}y.prototype.content=w;function q(M){var P=new Error(x.source+":"+A+":"+S+": "+M);if(P.reason=M,P.filename=x.source,P.line=A,P.column=S,P.source=w,!x.silent)throw P}function V(M){var P=M.exec(w);if(P){var $=P[0];return F($),w=w.slice($.length),P}}function L(){V(n)}function v(M){var P;for(M=M||[];P=O();)P!==!1&&M.push(P);return M}function O(){var M=N();if(!(u!=w.charAt(0)||d!=w.charAt(1))){for(var P=2;c!=w.charAt(P)&&(d!=w.charAt(P)||u!=w.charAt(P+1));)++P;if(P+=2,c===w.charAt(P-1))return q("End of comment missing");var $=w.slice(2,P-2);return S+=2,F($),w=w.slice(P),S+=2,M({type:f,comment:$})}}function j(){var M=N(),P=V(r);if(P){if(O(),!V(a))return q("property missing ':'");var $=V(o),X=M({type:p,property:C(P[0].replace(e,c)),value:$?C($[0].replace(e,c)):c});return V(i),X}}function U(){var M=[];v(M);for(var P;P=j();)P!==!1&&(M.push(P),v(M));return M}return L(),U()}function C(w){return w?w.replace(s,c):c}return Nn=b,Nn}var $t;function Wi(){if($t)return Fe;$t=1;var e=Fe&&Fe.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(Fe,"__esModule",{value:!0}),Fe.default=n;const t=e(Hi());function n(r,a){let o=null;if(!r||typeof r!="string")return o;const i=(0,t.default)(r),s=typeof a=="function";return i.forEach(l=>{if(l.type!=="declaration")return;const{property:u,value:d}=l;s?a(u,d,l):d&&(o=o||{},o[u]=d)}),o}return Fe}var He={},Gt;function Ki(){if(Gt)return He;Gt=1,Object.defineProperty(He,"__esModule",{value:!0}),He.camelCase=void 0;var e=/^--[a-zA-Z0-9_-]+$/,t=/-([a-z])/g,n=/^[^-]+$/,r=/^-(webkit|moz|ms|o|khtml)-/,a=/^-(ms)-/,o=function(u){return!u||n.test(u)||e.test(u)},i=function(u,d){return d.toUpperCase()},s=function(u,d){return"".concat(d,"-")},l=function(u,d){return d===void 0&&(d={}),o(u)?u:(u=u.toLowerCase(),d.reactCompat?u=u.replace(a,s):u=u.replace(r,s),u.replace(t,i))};return He.camelCase=l,He}var We,Ht;function Xi(){if(Ht)return We;Ht=1;var e=We&&We.__importDefault||function(a){return a&&a.__esModule?a:{default:a}},t=e(Wi()),n=Ki();function r(a,o){var i={};return!a||typeof a!="string"||(0,t.default)(a,function(s,l){s&&l&&(i[(0,n.camelCase)(s,o)]=l)}),i}return r.default=r,We=r,We}var Qi=Xi();const Yi=Mr(Qi),Br=Lr("end"),ct=Lr("start");function Lr(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function Vr(e){const t=ct(e),n=Br(e);if(t&&n)return{start:t,end:n}}function Qe(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?Wt(e.position):"start"in e||"end"in e?Wt(e):"line"in e||"column"in e?Zn(e):""}function Zn(e){return Kt(e&&e.line)+":"+Kt(e&&e.column)}function Wt(e){return Zn(e&&e.start)+"-"+Zn(e&&e.end)}function Kt(e){return e&&typeof e=="number"?e:1}class J extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let a="",o={},i=!1;if(n&&("line"in n&&"column"in n?o={place:n}:"start"in n&&"end"in n?o={place:n}:"type"in n?o={ancestors:[n],place:n.position}:o={...n}),typeof t=="string"?a=t:!o.cause&&t&&(i=!0,a=t.message,o.cause=t),!o.ruleId&&!o.source&&typeof r=="string"){const l=r.indexOf(":");l===-1?o.ruleId=r:(o.source=r.slice(0,l),o.ruleId=r.slice(l+1))}if(!o.place&&o.ancestors&&o.ancestors){const l=o.ancestors[o.ancestors.length-1];l&&(o.place=l.position)}const s=o.place&&"start"in o.place?o.place.start:o.place;this.ancestors=o.ancestors||void 0,this.cause=o.cause||void 0,this.column=s?s.column:void 0,this.fatal=void 0,this.file="",this.message=a,this.line=s?s.line:void 0,this.name=Qe(o.place)||"1:1",this.place=o.place||void 0,this.reason=this.message,this.ruleId=o.ruleId||void 0,this.source=o.source||void 0,this.stack=i&&o.cause&&typeof o.cause.stack=="string"?o.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}J.prototype.file="";J.prototype.name="";J.prototype.reason="";J.prototype.message="";J.prototype.stack="";J.prototype.column=void 0;J.prototype.line=void 0;J.prototype.ancestors=void 0;J.prototype.cause=void 0;J.prototype.fatal=void 0;J.prototype.place=void 0;J.prototype.ruleId=void 0;J.prototype.source=void 0;const dt={}.hasOwnProperty,Ji=new Map,Zi=/[A-Z]/g,eo=new Set(["table","tbody","thead","tfoot","tr"]),no=new Set(["td","th"]),Ur="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function to(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=co(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=uo(n,t.jsx,t.jsxs)}const a={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?ut:$i,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},o=$r(a,e,void 0);return o&&typeof o!="string"?o:a.create(e,a.Fragment,{children:o||void 0},void 0)}function $r(e,t,n){if(t.type==="element")return ro(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return ao(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return oo(e,t,n);if(t.type==="mdxjsEsm")return io(e,t);if(t.type==="root")return so(e,t,n);if(t.type==="text")return lo(e,t)}function ro(e,t,n){const r=e.schema;let a=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(a=ut,e.schema=a),e.ancestors.push(t);const o=Hr(e,t.tagName,!1),i=mo(e,t);let s=pt(e,t);return eo.has(t.tagName)&&(s=s.filter(function(l){return typeof l=="string"?!Ti(l):!0})),Gr(e,i,o,t),mt(i,s),e.ancestors.pop(),e.schema=r,e.create(t,o,i,n)}function ao(e,t){if(t.data&&t.data.estree&&e.evaluater){const r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}Ze(e,t.position)}function io(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);Ze(e,t.position)}function oo(e,t,n){const r=e.schema;let a=r;t.name==="svg"&&r.space==="html"&&(a=ut,e.schema=a),e.ancestors.push(t);const o=t.name===null?e.Fragment:Hr(e,t.name,!0),i=po(e,t),s=pt(e,t);return Gr(e,i,o,t),mt(i,s),e.ancestors.pop(),e.schema=r,e.create(t,o,i,n)}function so(e,t,n){const r={};return mt(r,pt(e,t)),e.create(t,e.Fragment,r,n)}function lo(e,t){return t.value}function Gr(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r)}function mt(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function uo(e,t,n){return r;function r(a,o,i,s){const u=Array.isArray(i.children)?n:t;return s?u(o,i,s):u(o,i)}}function co(e,t){return n;function n(r,a,o,i){const s=Array.isArray(o.children),l=ct(r);return t(a,o,i,s,{columnNumber:l?l.column-1:void 0,fileName:e,lineNumber:l?l.line:void 0},void 0)}}function mo(e,t){const n={};let r,a;for(a in t.properties)if(a!=="children"&&dt.call(t.properties,a)){const o=fo(e,a,t.properties[a]);if(o){const[i,s]=o;e.tableCellAlignToStyle&&i==="align"&&typeof s=="string"&&no.has(t.tagName)?r=s:n[i]=s}}if(r){const o=n.style||(n.style={});o[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function po(e,t){const n={};for(const r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const o=r.data.estree.body[0];o.type;const i=o.expression;i.type;const s=i.properties[0];s.type,Object.assign(n,e.evaluater.evaluateExpression(s.argument))}else Ze(e,t.position);else{const a=r.name;let o;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const s=r.value.data.estree.body[0];s.type,o=e.evaluater.evaluateExpression(s.expression)}else Ze(e,t.position);else o=r.value===null?!0:r.value;n[a]=o}return n}function pt(e,t){const n=[];let r=-1;const a=e.passKeys?new Map:Ji;for(;++r<t.children.length;){const o=t.children[r];let i;if(e.passKeys){const l=o.type==="element"?o.tagName:o.type==="mdxJsxFlowElement"||o.type==="mdxJsxTextElement"?o.name:void 0;if(l){const u=a.get(l)||0;i=l+"-"+u,a.set(l,u+1)}}const s=$r(e,o,i);s!==void 0&&n.push(s)}return n}function fo(e,t,n){const r=Li(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?Oi(n):Gi(n)),r.property==="style"){let a=typeof n=="object"?n:ho(e,String(n));return e.stylePropertyNameCase==="css"&&(a=go(a)),["style",a]}return[e.elementAttributeNameCase==="react"&&r.space?Di[r.property]||r.property:r.attribute,n]}}function ho(e,t){try{return Yi(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return{};const r=n,a=new J("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw a.file=e.filePath||void 0,a.url=Ur+"#cannot-parse-style-attribute",a}}function Hr(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){const a=t.split(".");let o=-1,i;for(;++o<a.length;){const s=_t(a[o])?{type:"Identifier",name:a[o]}:{type:"Literal",value:a[o]};i=i?{type:"MemberExpression",object:i,property:s,computed:!!(o&&s.type==="Literal"),optional:!1}:s}r=i}else r=_t(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){const a=r.value;return dt.call(e.components,a)?e.components[a]:a}if(e.evaluater)return e.evaluater.evaluateExpression(r);Ze(e)}function Ze(e,t){const n=new J("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=Ur+"#cannot-handle-mdx-estrees-without-createevaluater",n}function go(e){const t={};let n;for(n in e)dt.call(e,n)&&(t[bo(n)]=e[n]);return t}function bo(e){let t=e.replace(Zi,xo);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function xo(e){return"-"+e.toLowerCase()}const Tn={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},vo={};function ft(e,t){const n=vo,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,a=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return Wr(e,r,a)}function Wr(e,t,n){if(yo(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return Xt(e.children,t,n)}return Array.isArray(e)?Xt(e,t,n):""}function Xt(e,t,n){const r=[];let a=-1;for(;++a<e.length;)r[a]=Wr(e[a],t,n);return r.join("")}function yo(e){return!!(e&&typeof e=="object")}const Qt=document.createElement("i");function ht(e){const t="&"+e+";";Qt.innerHTML=t;const n=Qt.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function ie(e,t,n,r){const a=e.length;let o=0,i;if(t<0?t=-t>a?0:a+t:t=t>a?a:t,n=n>0?n:0,r.length<1e4)i=Array.from(r),i.unshift(t,n),e.splice(...i);else for(n&&e.splice(t,n);o<r.length;)i=r.slice(o,o+1e4),i.unshift(t,0),e.splice(...i),o+=1e4,t+=1e4}function oe(e,t){return e.length>0?(ie(e,e.length,0,t),e):t}const Yt={}.hasOwnProperty;function Kr(e){const t={};let n=-1;for(;++n<e.length;)ko(t,e[n]);return t}function ko(e,t){let n;for(n in t){const a=(Yt.call(e,n)?e[n]:void 0)||(e[n]={}),o=t[n];let i;if(o)for(i in o){Yt.call(a,i)||(a[i]=[]);const s=o[i];Co(a[i],Array.isArray(s)?s:s?[s]:[])}}}function Co(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);ie(e,0,0,r)}function Xr(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function de(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const ee=Se(/[A-Za-z]/),Y=Se(/[\dA-Za-z]/),wo=Se(/[#-'*+\--9=?A-Z^-~]/);function bn(e){return e!==null&&(e<32||e===127)}const et=Se(/\d/),So=Se(/[\dA-Fa-f]/),Eo=Se(/[!-/:-@[-`{-~]/);function R(e){return e!==null&&e<-2}function W(e){return e!==null&&(e<0||e===32)}function D(e){return e===-2||e===-1||e===32}const Cn=Se(/\p{P}|\p{S}/u),Re=Se(/\s/);function Se(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function Le(e){const t=[];let n=-1,r=0,a=0;for(;++n<e.length;){const o=e.charCodeAt(n);let i="";if(o===37&&Y(e.charCodeAt(n+1))&&Y(e.charCodeAt(n+2)))a=2;else if(o<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o))||(i=String.fromCharCode(o));else if(o>55295&&o<57344){const s=e.charCodeAt(n+1);o<56320&&s>56319&&s<57344?(i=String.fromCharCode(o,s),a=1):i="�"}else i=String.fromCharCode(o);i&&(t.push(e.slice(r,n),encodeURIComponent(i)),r=n+a+1,i=""),a&&(n+=a,a=0)}return t.join("")+e.slice(r)}function B(e,t,n,r){const a=r?r-1:Number.POSITIVE_INFINITY;let o=0;return i;function i(l){return D(l)?(e.enter(n),s(l)):t(l)}function s(l){return D(l)&&o++<a?(e.consume(l),s):(e.exit(n),t(l))}}const Ao={tokenize:Io};function Io(e){const t=e.attempt(this.parser.constructs.contentInitial,r,a);let n;return t;function r(s){if(s===null){e.consume(s);return}return e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),B(e,t,"linePrefix")}function a(s){return e.enter("paragraph"),o(s)}function o(s){const l=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=l),n=l,i(s)}function i(s){if(s===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(s);return}return R(s)?(e.consume(s),e.exit("chunkText"),o):(e.consume(s),i)}}const Po={tokenize:Oo},Jt={tokenize:jo};function Oo(e){const t=this,n=[];let r=0,a,o,i;return s;function s(S){if(r<n.length){const F=n[r];return t.containerState=F[1],e.attempt(F[0].continuation,l,u)(S)}return u(S)}function l(S){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,a&&A();const F=t.events.length;let N=F,y;for(;N--;)if(t.events[N][0]==="exit"&&t.events[N][1].type==="chunkFlow"){y=t.events[N][1].end;break}x(r);let q=F;for(;q<t.events.length;)t.events[q][1].end={...y},q++;return ie(t.events,N+1,0,t.events.slice(F)),t.events.length=q,u(S)}return s(S)}function u(S){if(r===n.length){if(!a)return f(S);if(a.currentConstruct&&a.currentConstruct.concrete)return b(S);t.interrupt=!!(a.currentConstruct&&!a._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(Jt,d,c)(S)}function d(S){return a&&A(),x(r),f(S)}function c(S){return t.parser.lazy[t.now().line]=r!==n.length,i=t.now().offset,b(S)}function f(S){return t.containerState={},e.attempt(Jt,p,b)(S)}function p(S){return r++,n.push([t.currentConstruct,t.containerState]),f(S)}function b(S){if(S===null){a&&A(),x(0),e.consume(S);return}return a=a||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:a,contentType:"flow",previous:o}),C(S)}function C(S){if(S===null){w(e.exit("chunkFlow"),!0),x(0),e.consume(S);return}return R(S)?(e.consume(S),w(e.exit("chunkFlow")),r=0,t.interrupt=void 0,s):(e.consume(S),C)}function w(S,F){const N=t.sliceStream(S);if(F&&N.push(null),S.previous=o,o&&(o.next=S),o=S,a.defineSkip(S.start),a.write(N),t.parser.lazy[S.start.line]){let y=a.events.length;for(;y--;)if(a.events[y][1].start.offset<i&&(!a.events[y][1].end||a.events[y][1].end.offset>i))return;const q=t.events.length;let V=q,L,v;for(;V--;)if(t.events[V][0]==="exit"&&t.events[V][1].type==="chunkFlow"){if(L){v=t.events[V][1].end;break}L=!0}for(x(r),y=q;y<t.events.length;)t.events[y][1].end={...v},y++;ie(t.events,V+1,0,t.events.slice(q)),t.events.length=y}}function x(S){let F=n.length;for(;F-- >S;){const N=n[F];t.containerState=N[1],N[0].exit.call(t,e)}n.length=S}function A(){a.write([null]),o=void 0,a=void 0,t.containerState._closeFlow=void 0}}function jo(e,t,n){return B(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function De(e){if(e===null||W(e)||Re(e))return 1;if(Cn(e))return 2}function wn(e,t,n){const r=[];let a=-1;for(;++a<e.length;){const o=e[a].resolveAll;o&&!r.includes(o)&&(t=o(t,n),r.push(o))}return t}const nt={name:"attention",resolveAll:Ro,tokenize:Mo};function Ro(e,t){let n=-1,r,a,o,i,s,l,u,d;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;l=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const c={...e[r][1].end},f={...e[n][1].start};Zt(c,-l),Zt(f,l),i={type:l>1?"strongSequence":"emphasisSequence",start:c,end:{...e[r][1].end}},s={type:l>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:f},o={type:l>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[n][1].start}},a={type:l>1?"strong":"emphasis",start:{...i.start},end:{...s.end}},e[r][1].end={...i.start},e[n][1].start={...s.end},u=[],e[r][1].end.offset-e[r][1].start.offset&&(u=oe(u,[["enter",e[r][1],t],["exit",e[r][1],t]])),u=oe(u,[["enter",a,t],["enter",i,t],["exit",i,t],["enter",o,t]]),u=oe(u,wn(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),u=oe(u,[["exit",o,t],["enter",s,t],["exit",s,t],["exit",a,t]]),e[n][1].end.offset-e[n][1].start.offset?(d=2,u=oe(u,[["enter",e[n][1],t],["exit",e[n][1],t]])):d=0,ie(e,r-1,n-r+3,u),n=r+u.length-d-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function Mo(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,a=De(r);let o;return i;function i(l){return o=l,e.enter("attentionSequence"),s(l)}function s(l){if(l===o)return e.consume(l),s;const u=e.exit("attentionSequence"),d=De(l),c=!d||d===2&&a||n.includes(l),f=!a||a===2&&d||n.includes(r);return u._open=!!(o===42?c:c&&(a||!f)),u._close=!!(o===42?f:f&&(d||!c)),t(l)}}function Zt(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const No={name:"autolink",tokenize:To};function To(e,t,n){let r=0;return a;function a(p){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),o}function o(p){return ee(p)?(e.consume(p),i):p===64?n(p):u(p)}function i(p){return p===43||p===45||p===46||Y(p)?(r=1,s(p)):u(p)}function s(p){return p===58?(e.consume(p),r=0,l):(p===43||p===45||p===46||Y(p))&&r++<32?(e.consume(p),s):(r=0,u(p))}function l(p){return p===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.exit("autolink"),t):p===null||p===32||p===60||bn(p)?n(p):(e.consume(p),l)}function u(p){return p===64?(e.consume(p),d):wo(p)?(e.consume(p),u):n(p)}function d(p){return Y(p)?c(p):n(p)}function c(p){return p===46?(e.consume(p),r=0,d):p===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.exit("autolink"),t):f(p)}function f(p){if((p===45||Y(p))&&r++<63){const b=p===45?f:c;return e.consume(p),b}return n(p)}}const rn={partial:!0,tokenize:zo};function zo(e,t,n){return r;function r(o){return D(o)?B(e,a,"linePrefix")(o):a(o)}function a(o){return o===null||R(o)?t(o):n(o)}}const Qr={continuation:{tokenize:qo},exit:Do,name:"blockQuote",tokenize:Fo};function Fo(e,t,n){const r=this;return a;function a(i){if(i===62){const s=r.containerState;return s.open||(e.enter("blockQuote",{_container:!0}),s.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(i),e.exit("blockQuoteMarker"),o}return n(i)}function o(i){return D(i)?(e.enter("blockQuotePrefixWhitespace"),e.consume(i),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(i))}}function qo(e,t,n){const r=this;return a;function a(i){return D(i)?B(e,o,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(i):o(i)}function o(i){return e.attempt(Qr,t,n)(i)}}function Do(e){e.exit("blockQuote")}const Yr={name:"characterEscape",tokenize:_o};function _o(e,t,n){return r;function r(o){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(o),e.exit("escapeMarker"),a}function a(o){return Eo(o)?(e.enter("characterEscapeValue"),e.consume(o),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(o)}}const Jr={name:"characterReference",tokenize:Bo};function Bo(e,t,n){const r=this;let a=0,o,i;return s;function s(c){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(c),e.exit("characterReferenceMarker"),l}function l(c){return c===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(c),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),o=31,i=Y,d(c))}function u(c){return c===88||c===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(c),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),o=6,i=So,d):(e.enter("characterReferenceValue"),o=7,i=et,d(c))}function d(c){if(c===59&&a){const f=e.exit("characterReferenceValue");return i===Y&&!ht(r.sliceSerialize(f))?n(c):(e.enter("characterReferenceMarker"),e.consume(c),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return i(c)&&a++<o?(e.consume(c),d):n(c)}}const er={partial:!0,tokenize:Vo},nr={concrete:!0,name:"codeFenced",tokenize:Lo};function Lo(e,t,n){const r=this,a={partial:!0,tokenize:N};let o=0,i=0,s;return l;function l(y){return u(y)}function u(y){const q=r.events[r.events.length-1];return o=q&&q[1].type==="linePrefix"?q[2].sliceSerialize(q[1],!0).length:0,s=y,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),d(y)}function d(y){return y===s?(i++,e.consume(y),d):i<3?n(y):(e.exit("codeFencedFenceSequence"),D(y)?B(e,c,"whitespace")(y):c(y))}function c(y){return y===null||R(y)?(e.exit("codeFencedFence"),r.interrupt?t(y):e.check(er,C,F)(y)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),f(y))}function f(y){return y===null||R(y)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),c(y)):D(y)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),B(e,p,"whitespace")(y)):y===96&&y===s?n(y):(e.consume(y),f)}function p(y){return y===null||R(y)?c(y):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),b(y))}function b(y){return y===null||R(y)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),c(y)):y===96&&y===s?n(y):(e.consume(y),b)}function C(y){return e.attempt(a,F,w)(y)}function w(y){return e.enter("lineEnding"),e.consume(y),e.exit("lineEnding"),x}function x(y){return o>0&&D(y)?B(e,A,"linePrefix",o+1)(y):A(y)}function A(y){return y===null||R(y)?e.check(er,C,F)(y):(e.enter("codeFlowValue"),S(y))}function S(y){return y===null||R(y)?(e.exit("codeFlowValue"),A(y)):(e.consume(y),S)}function F(y){return e.exit("codeFenced"),t(y)}function N(y,q,V){let L=0;return v;function v(P){return y.enter("lineEnding"),y.consume(P),y.exit("lineEnding"),O}function O(P){return y.enter("codeFencedFence"),D(P)?B(y,j,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(P):j(P)}function j(P){return P===s?(y.enter("codeFencedFenceSequence"),U(P)):V(P)}function U(P){return P===s?(L++,y.consume(P),U):L>=i?(y.exit("codeFencedFenceSequence"),D(P)?B(y,M,"whitespace")(P):M(P)):V(P)}function M(P){return P===null||R(P)?(y.exit("codeFencedFence"),q(P)):V(P)}}}function Vo(e,t,n){const r=this;return a;function a(i){return i===null?n(i):(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),o)}function o(i){return r.parser.lazy[r.now().line]?n(i):t(i)}}const zn={name:"codeIndented",tokenize:$o},Uo={partial:!0,tokenize:Go};function $o(e,t,n){const r=this;return a;function a(u){return e.enter("codeIndented"),B(e,o,"linePrefix",5)(u)}function o(u){const d=r.events[r.events.length-1];return d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?i(u):n(u)}function i(u){return u===null?l(u):R(u)?e.attempt(Uo,i,l)(u):(e.enter("codeFlowValue"),s(u))}function s(u){return u===null||R(u)?(e.exit("codeFlowValue"),i(u)):(e.consume(u),s)}function l(u){return e.exit("codeIndented"),t(u)}}function Go(e,t,n){const r=this;return a;function a(i){return r.parser.lazy[r.now().line]?n(i):R(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),a):B(e,o,"linePrefix",5)(i)}function o(i){const s=r.events[r.events.length-1];return s&&s[1].type==="linePrefix"&&s[2].sliceSerialize(s[1],!0).length>=4?t(i):R(i)?a(i):n(i)}}const Ho={name:"codeText",previous:Ko,resolve:Wo,tokenize:Xo};function Wo(e){let t=e.length-4,n=3,r,a;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)a===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(a=r):(r===t||e[r][1].type==="lineEnding")&&(e[a][1].type="codeTextData",r!==a+2&&(e[a][1].end=e[r-1][1].end,e.splice(a+2,r-a-2),t-=r-a-2,r=a+2),a=void 0);return e}function Ko(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function Xo(e,t,n){let r=0,a,o;return i;function i(c){return e.enter("codeText"),e.enter("codeTextSequence"),s(c)}function s(c){return c===96?(e.consume(c),r++,s):(e.exit("codeTextSequence"),l(c))}function l(c){return c===null?n(c):c===32?(e.enter("space"),e.consume(c),e.exit("space"),l):c===96?(o=e.enter("codeTextSequence"),a=0,d(c)):R(c)?(e.enter("lineEnding"),e.consume(c),e.exit("lineEnding"),l):(e.enter("codeTextData"),u(c))}function u(c){return c===null||c===32||c===96||R(c)?(e.exit("codeTextData"),l(c)):(e.consume(c),u)}function d(c){return c===96?(e.consume(c),a++,d):a===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(c)):(o.type="codeTextData",u(c))}}class Qo{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){const r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){const a=n||0;this.setCursor(Math.trunc(t));const o=this.right.splice(this.right.length-a,Number.POSITIVE_INFINITY);return r&&Ke(this.left,r),o.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),Ke(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),Ke(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const n=this.left.splice(t,Number.POSITIVE_INFINITY);Ke(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);Ke(this.left,n.reverse())}}}function Ke(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function Zr(e){const t={};let n=-1,r,a,o,i,s,l,u;const d=new Qo(e);for(;++n<d.length;){for(;n in t;)n=t[n];if(r=d.get(n),n&&r[1].type==="chunkFlow"&&d.get(n-1)[1].type==="listItemPrefix"&&(l=r[1]._tokenizer.events,o=0,o<l.length&&l[o][1].type==="lineEndingBlank"&&(o+=2),o<l.length&&l[o][1].type==="content"))for(;++o<l.length&&l[o][1].type!=="content";)l[o][1].type==="chunkText"&&(l[o][1]._isInFirstContentOfListItem=!0,o++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,Yo(d,n)),n=t[n],u=!0);else if(r[1]._container){for(o=n,a=void 0;o--;)if(i=d.get(o),i[1].type==="lineEnding"||i[1].type==="lineEndingBlank")i[0]==="enter"&&(a&&(d.get(a)[1].type="lineEndingBlank"),i[1].type="lineEnding",a=o);else if(!(i[1].type==="linePrefix"||i[1].type==="listItemIndent"))break;a&&(r[1].end={...d.get(a)[1].start},s=d.slice(a,n),s.unshift(r),d.splice(a,n-a+1,s))}}return ie(e,0,Number.POSITIVE_INFINITY,d.slice(0)),!u}function Yo(e,t){const n=e.get(t)[1],r=e.get(t)[2];let a=t-1;const o=[];let i=n._tokenizer;i||(i=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(i._contentTypeTextTrailing=!0));const s=i.events,l=[],u={};let d,c,f=-1,p=n,b=0,C=0;const w=[C];for(;p;){for(;e.get(++a)[1]!==p;);o.push(a),p._tokenizer||(d=r.sliceStream(p),p.next||d.push(null),c&&i.defineSkip(p.start),p._isInFirstContentOfListItem&&(i._gfmTasklistFirstContentOfListItem=!0),i.write(d),p._isInFirstContentOfListItem&&(i._gfmTasklistFirstContentOfListItem=void 0)),c=p,p=p.next}for(p=n;++f<s.length;)s[f][0]==="exit"&&s[f-1][0]==="enter"&&s[f][1].type===s[f-1][1].type&&s[f][1].start.line!==s[f][1].end.line&&(C=f+1,w.push(C),p._tokenizer=void 0,p.previous=void 0,p=p.next);for(i.events=[],p?(p._tokenizer=void 0,p.previous=void 0):w.pop(),f=w.length;f--;){const x=s.slice(w[f],w[f+1]),A=o.pop();l.push([A,A+x.length-1]),e.splice(A,2,x)}for(l.reverse(),f=-1;++f<l.length;)u[b+l[f][0]]=b+l[f][1],b+=l[f][1]-l[f][0]-1;return u}const Jo={resolve:es,tokenize:ns},Zo={partial:!0,tokenize:ts};function es(e){return Zr(e),e}function ns(e,t){let n;return r;function r(s){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),a(s)}function a(s){return s===null?o(s):R(s)?e.check(Zo,i,o)(s):(e.consume(s),a)}function o(s){return e.exit("chunkContent"),e.exit("content"),t(s)}function i(s){return e.consume(s),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,a}}function ts(e,t,n){const r=this;return a;function a(i){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),B(e,o,"linePrefix")}function o(i){if(i===null||R(i))return n(i);const s=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&s&&s[1].type==="linePrefix"&&s[2].sliceSerialize(s[1],!0).length>=4?t(i):e.interrupt(r.parser.constructs.flow,n,t)(i)}}function ea(e,t,n,r,a,o,i,s,l){const u=l||Number.POSITIVE_INFINITY;let d=0;return c;function c(x){return x===60?(e.enter(r),e.enter(a),e.enter(o),e.consume(x),e.exit(o),f):x===null||x===32||x===41||bn(x)?n(x):(e.enter(r),e.enter(i),e.enter(s),e.enter("chunkString",{contentType:"string"}),C(x))}function f(x){return x===62?(e.enter(o),e.consume(x),e.exit(o),e.exit(a),e.exit(r),t):(e.enter(s),e.enter("chunkString",{contentType:"string"}),p(x))}function p(x){return x===62?(e.exit("chunkString"),e.exit(s),f(x)):x===null||x===60||R(x)?n(x):(e.consume(x),x===92?b:p)}function b(x){return x===60||x===62||x===92?(e.consume(x),p):p(x)}function C(x){return!d&&(x===null||x===41||W(x))?(e.exit("chunkString"),e.exit(s),e.exit(i),e.exit(r),t(x)):d<u&&x===40?(e.consume(x),d++,C):x===41?(e.consume(x),d--,C):x===null||x===32||x===40||bn(x)?n(x):(e.consume(x),x===92?w:C)}function w(x){return x===40||x===41||x===92?(e.consume(x),C):C(x)}}function na(e,t,n,r,a,o){const i=this;let s=0,l;return u;function u(p){return e.enter(r),e.enter(a),e.consume(p),e.exit(a),e.enter(o),d}function d(p){return s>999||p===null||p===91||p===93&&!l||p===94&&!s&&"_hiddenFootnoteSupport"in i.parser.constructs?n(p):p===93?(e.exit(o),e.enter(a),e.consume(p),e.exit(a),e.exit(r),t):R(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),d):(e.enter("chunkString",{contentType:"string"}),c(p))}function c(p){return p===null||p===91||p===93||R(p)||s++>999?(e.exit("chunkString"),d(p)):(e.consume(p),l||(l=!D(p)),p===92?f:c)}function f(p){return p===91||p===92||p===93?(e.consume(p),s++,c):c(p)}}function ta(e,t,n,r,a,o){let i;return s;function s(f){return f===34||f===39||f===40?(e.enter(r),e.enter(a),e.consume(f),e.exit(a),i=f===40?41:f,l):n(f)}function l(f){return f===i?(e.enter(a),e.consume(f),e.exit(a),e.exit(r),t):(e.enter(o),u(f))}function u(f){return f===i?(e.exit(o),l(i)):f===null?n(f):R(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),B(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),d(f))}function d(f){return f===i||f===null||R(f)?(e.exit("chunkString"),u(f)):(e.consume(f),f===92?c:d)}function c(f){return f===i||f===92?(e.consume(f),d):d(f)}}function Ye(e,t){let n;return r;function r(a){return R(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),n=!0,r):D(a)?B(e,r,n?"linePrefix":"lineSuffix")(a):t(a)}}const rs={name:"definition",tokenize:is},as={partial:!0,tokenize:os};function is(e,t,n){const r=this;let a;return o;function o(p){return e.enter("definition"),i(p)}function i(p){return na.call(r,e,s,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(p)}function s(p){return a=de(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),p===58?(e.enter("definitionMarker"),e.consume(p),e.exit("definitionMarker"),l):n(p)}function l(p){return W(p)?Ye(e,u)(p):u(p)}function u(p){return ea(e,d,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(p)}function d(p){return e.attempt(as,c,c)(p)}function c(p){return D(p)?B(e,f,"whitespace")(p):f(p)}function f(p){return p===null||R(p)?(e.exit("definition"),r.parser.defined.push(a),t(p)):n(p)}}function os(e,t,n){return r;function r(s){return W(s)?Ye(e,a)(s):n(s)}function a(s){return ta(e,o,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(s)}function o(s){return D(s)?B(e,i,"whitespace")(s):i(s)}function i(s){return s===null||R(s)?t(s):n(s)}}const ss={name:"hardBreakEscape",tokenize:ls};function ls(e,t,n){return r;function r(o){return e.enter("hardBreakEscape"),e.consume(o),a}function a(o){return R(o)?(e.exit("hardBreakEscape"),t(o)):n(o)}}const us={name:"headingAtx",resolve:cs,tokenize:ds};function cs(e,t){let n=e.length-2,r=3,a,o;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(a={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},o={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},ie(e,r,n-r+1,[["enter",a,t],["enter",o,t],["exit",o,t],["exit",a,t]])),e}function ds(e,t,n){let r=0;return a;function a(d){return e.enter("atxHeading"),o(d)}function o(d){return e.enter("atxHeadingSequence"),i(d)}function i(d){return d===35&&r++<6?(e.consume(d),i):d===null||W(d)?(e.exit("atxHeadingSequence"),s(d)):n(d)}function s(d){return d===35?(e.enter("atxHeadingSequence"),l(d)):d===null||R(d)?(e.exit("atxHeading"),t(d)):D(d)?B(e,s,"whitespace")(d):(e.enter("atxHeadingText"),u(d))}function l(d){return d===35?(e.consume(d),l):(e.exit("atxHeadingSequence"),s(d))}function u(d){return d===null||d===35||W(d)?(e.exit("atxHeadingText"),s(d)):(e.consume(d),u)}}const ms=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],tr=["pre","script","style","textarea"],ps={concrete:!0,name:"htmlFlow",resolveTo:gs,tokenize:bs},fs={partial:!0,tokenize:vs},hs={partial:!0,tokenize:xs};function gs(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function bs(e,t,n){const r=this;let a,o,i,s,l;return u;function u(g){return d(g)}function d(g){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(g),c}function c(g){return g===33?(e.consume(g),f):g===47?(e.consume(g),o=!0,C):g===63?(e.consume(g),a=3,r.interrupt?t:h):ee(g)?(e.consume(g),i=String.fromCharCode(g),w):n(g)}function f(g){return g===45?(e.consume(g),a=2,p):g===91?(e.consume(g),a=5,s=0,b):ee(g)?(e.consume(g),a=4,r.interrupt?t:h):n(g)}function p(g){return g===45?(e.consume(g),r.interrupt?t:h):n(g)}function b(g){const ue="CDATA[";return g===ue.charCodeAt(s++)?(e.consume(g),s===ue.length?r.interrupt?t:j:b):n(g)}function C(g){return ee(g)?(e.consume(g),i=String.fromCharCode(g),w):n(g)}function w(g){if(g===null||g===47||g===62||W(g)){const ue=g===47,Ee=i.toLowerCase();return!ue&&!o&&tr.includes(Ee)?(a=1,r.interrupt?t(g):j(g)):ms.includes(i.toLowerCase())?(a=6,ue?(e.consume(g),x):r.interrupt?t(g):j(g)):(a=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(g):o?A(g):S(g))}return g===45||Y(g)?(e.consume(g),i+=String.fromCharCode(g),w):n(g)}function x(g){return g===62?(e.consume(g),r.interrupt?t:j):n(g)}function A(g){return D(g)?(e.consume(g),A):v(g)}function S(g){return g===47?(e.consume(g),v):g===58||g===95||ee(g)?(e.consume(g),F):D(g)?(e.consume(g),S):v(g)}function F(g){return g===45||g===46||g===58||g===95||Y(g)?(e.consume(g),F):N(g)}function N(g){return g===61?(e.consume(g),y):D(g)?(e.consume(g),N):S(g)}function y(g){return g===null||g===60||g===61||g===62||g===96?n(g):g===34||g===39?(e.consume(g),l=g,q):D(g)?(e.consume(g),y):V(g)}function q(g){return g===l?(e.consume(g),l=null,L):g===null||R(g)?n(g):(e.consume(g),q)}function V(g){return g===null||g===34||g===39||g===47||g===60||g===61||g===62||g===96||W(g)?N(g):(e.consume(g),V)}function L(g){return g===47||g===62||D(g)?S(g):n(g)}function v(g){return g===62?(e.consume(g),O):n(g)}function O(g){return g===null||R(g)?j(g):D(g)?(e.consume(g),O):n(g)}function j(g){return g===45&&a===2?(e.consume(g),$):g===60&&a===1?(e.consume(g),X):g===62&&a===4?(e.consume(g),le):g===63&&a===3?(e.consume(g),h):g===93&&a===5?(e.consume(g),fe):R(g)&&(a===6||a===7)?(e.exit("htmlFlowData"),e.check(fs,he,U)(g)):g===null||R(g)?(e.exit("htmlFlowData"),U(g)):(e.consume(g),j)}function U(g){return e.check(hs,M,he)(g)}function M(g){return e.enter("lineEnding"),e.consume(g),e.exit("lineEnding"),P}function P(g){return g===null||R(g)?U(g):(e.enter("htmlFlowData"),j(g))}function $(g){return g===45?(e.consume(g),h):j(g)}function X(g){return g===47?(e.consume(g),i="",se):j(g)}function se(g){if(g===62){const ue=i.toLowerCase();return tr.includes(ue)?(e.consume(g),le):j(g)}return ee(g)&&i.length<8?(e.consume(g),i+=String.fromCharCode(g),se):j(g)}function fe(g){return g===93?(e.consume(g),h):j(g)}function h(g){return g===62?(e.consume(g),le):g===45&&a===2?(e.consume(g),h):j(g)}function le(g){return g===null||R(g)?(e.exit("htmlFlowData"),he(g)):(e.consume(g),le)}function he(g){return e.exit("htmlFlow"),t(g)}}function xs(e,t,n){const r=this;return a;function a(i){return R(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),o):n(i)}function o(i){return r.parser.lazy[r.now().line]?n(i):t(i)}}function vs(e,t,n){return r;function r(a){return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),e.attempt(rn,t,n)}}const ys={name:"htmlText",tokenize:ks};function ks(e,t,n){const r=this;let a,o,i;return s;function s(h){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(h),l}function l(h){return h===33?(e.consume(h),u):h===47?(e.consume(h),N):h===63?(e.consume(h),S):ee(h)?(e.consume(h),V):n(h)}function u(h){return h===45?(e.consume(h),d):h===91?(e.consume(h),o=0,b):ee(h)?(e.consume(h),A):n(h)}function d(h){return h===45?(e.consume(h),p):n(h)}function c(h){return h===null?n(h):h===45?(e.consume(h),f):R(h)?(i=c,X(h)):(e.consume(h),c)}function f(h){return h===45?(e.consume(h),p):c(h)}function p(h){return h===62?$(h):h===45?f(h):c(h)}function b(h){const le="CDATA[";return h===le.charCodeAt(o++)?(e.consume(h),o===le.length?C:b):n(h)}function C(h){return h===null?n(h):h===93?(e.consume(h),w):R(h)?(i=C,X(h)):(e.consume(h),C)}function w(h){return h===93?(e.consume(h),x):C(h)}function x(h){return h===62?$(h):h===93?(e.consume(h),x):C(h)}function A(h){return h===null||h===62?$(h):R(h)?(i=A,X(h)):(e.consume(h),A)}function S(h){return h===null?n(h):h===63?(e.consume(h),F):R(h)?(i=S,X(h)):(e.consume(h),S)}function F(h){return h===62?$(h):S(h)}function N(h){return ee(h)?(e.consume(h),y):n(h)}function y(h){return h===45||Y(h)?(e.consume(h),y):q(h)}function q(h){return R(h)?(i=q,X(h)):D(h)?(e.consume(h),q):$(h)}function V(h){return h===45||Y(h)?(e.consume(h),V):h===47||h===62||W(h)?L(h):n(h)}function L(h){return h===47?(e.consume(h),$):h===58||h===95||ee(h)?(e.consume(h),v):R(h)?(i=L,X(h)):D(h)?(e.consume(h),L):$(h)}function v(h){return h===45||h===46||h===58||h===95||Y(h)?(e.consume(h),v):O(h)}function O(h){return h===61?(e.consume(h),j):R(h)?(i=O,X(h)):D(h)?(e.consume(h),O):L(h)}function j(h){return h===null||h===60||h===61||h===62||h===96?n(h):h===34||h===39?(e.consume(h),a=h,U):R(h)?(i=j,X(h)):D(h)?(e.consume(h),j):(e.consume(h),M)}function U(h){return h===a?(e.consume(h),a=void 0,P):h===null?n(h):R(h)?(i=U,X(h)):(e.consume(h),U)}function M(h){return h===null||h===34||h===39||h===60||h===61||h===96?n(h):h===47||h===62||W(h)?L(h):(e.consume(h),M)}function P(h){return h===47||h===62||W(h)?L(h):n(h)}function $(h){return h===62?(e.consume(h),e.exit("htmlTextData"),e.exit("htmlText"),t):n(h)}function X(h){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),se}function se(h){return D(h)?B(e,fe,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(h):fe(h)}function fe(h){return e.enter("htmlTextData"),i(h)}}const gt={name:"labelEnd",resolveAll:Es,resolveTo:As,tokenize:Is},Cs={tokenize:Ps},ws={tokenize:Os},Ss={tokenize:js};function Es(e){let t=-1;const n=[];for(;++t<e.length;){const r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const a=r.type==="labelImage"?4:2;r.type="data",t+=a}}return e.length!==n.length&&ie(e,0,e.length,n),e}function As(e,t){let n=e.length,r=0,a,o,i,s;for(;n--;)if(a=e[n][1],o){if(a.type==="link"||a.type==="labelLink"&&a._inactive)break;e[n][0]==="enter"&&a.type==="labelLink"&&(a._inactive=!0)}else if(i){if(e[n][0]==="enter"&&(a.type==="labelImage"||a.type==="labelLink")&&!a._balanced&&(o=n,a.type!=="labelLink")){r=2;break}}else a.type==="labelEnd"&&(i=n);const l={type:e[o][1].type==="labelLink"?"link":"image",start:{...e[o][1].start},end:{...e[e.length-1][1].end}},u={type:"label",start:{...e[o][1].start},end:{...e[i][1].end}},d={type:"labelText",start:{...e[o+r+2][1].end},end:{...e[i-2][1].start}};return s=[["enter",l,t],["enter",u,t]],s=oe(s,e.slice(o+1,o+r+3)),s=oe(s,[["enter",d,t]]),s=oe(s,wn(t.parser.constructs.insideSpan.null,e.slice(o+r+4,i-3),t)),s=oe(s,[["exit",d,t],e[i-2],e[i-1],["exit",u,t]]),s=oe(s,e.slice(i+1)),s=oe(s,[["exit",l,t]]),ie(e,o,e.length,s),e}function Is(e,t,n){const r=this;let a=r.events.length,o,i;for(;a--;)if((r.events[a][1].type==="labelImage"||r.events[a][1].type==="labelLink")&&!r.events[a][1]._balanced){o=r.events[a][1];break}return s;function s(f){return o?o._inactive?c(f):(i=r.parser.defined.includes(de(r.sliceSerialize({start:o.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(f),e.exit("labelMarker"),e.exit("labelEnd"),l):n(f)}function l(f){return f===40?e.attempt(Cs,d,i?d:c)(f):f===91?e.attempt(ws,d,i?u:c)(f):i?d(f):c(f)}function u(f){return e.attempt(Ss,d,c)(f)}function d(f){return t(f)}function c(f){return o._balanced=!0,n(f)}}function Ps(e,t,n){return r;function r(c){return e.enter("resource"),e.enter("resourceMarker"),e.consume(c),e.exit("resourceMarker"),a}function a(c){return W(c)?Ye(e,o)(c):o(c)}function o(c){return c===41?d(c):ea(e,i,s,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(c)}function i(c){return W(c)?Ye(e,l)(c):d(c)}function s(c){return n(c)}function l(c){return c===34||c===39||c===40?ta(e,u,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(c):d(c)}function u(c){return W(c)?Ye(e,d)(c):d(c)}function d(c){return c===41?(e.enter("resourceMarker"),e.consume(c),e.exit("resourceMarker"),e.exit("resource"),t):n(c)}}function Os(e,t,n){const r=this;return a;function a(s){return na.call(r,e,o,i,"reference","referenceMarker","referenceString")(s)}function o(s){return r.parser.defined.includes(de(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(s):n(s)}function i(s){return n(s)}}function js(e,t,n){return r;function r(o){return e.enter("reference"),e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),a}function a(o){return o===93?(e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),e.exit("reference"),t):n(o)}}const Rs={name:"labelStartImage",resolveAll:gt.resolveAll,tokenize:Ms};function Ms(e,t,n){const r=this;return a;function a(s){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(s),e.exit("labelImageMarker"),o}function o(s){return s===91?(e.enter("labelMarker"),e.consume(s),e.exit("labelMarker"),e.exit("labelImage"),i):n(s)}function i(s){return s===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(s):t(s)}}const Ns={name:"labelStartLink",resolveAll:gt.resolveAll,tokenize:Ts};function Ts(e,t,n){const r=this;return a;function a(i){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(i),e.exit("labelMarker"),e.exit("labelLink"),o}function o(i){return i===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(i):t(i)}}const Fn={name:"lineEnding",tokenize:zs};function zs(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),B(e,t,"linePrefix")}}const hn={name:"thematicBreak",tokenize:Fs};function Fs(e,t,n){let r=0,a;return o;function o(u){return e.enter("thematicBreak"),i(u)}function i(u){return a=u,s(u)}function s(u){return u===a?(e.enter("thematicBreakSequence"),l(u)):r>=3&&(u===null||R(u))?(e.exit("thematicBreak"),t(u)):n(u)}function l(u){return u===a?(e.consume(u),r++,l):(e.exit("thematicBreakSequence"),D(u)?B(e,s,"whitespace")(u):s(u))}}const ne={continuation:{tokenize:Bs},exit:Vs,name:"list",tokenize:_s},qs={partial:!0,tokenize:Us},Ds={partial:!0,tokenize:Ls};function _s(e,t,n){const r=this,a=r.events[r.events.length-1];let o=a&&a[1].type==="linePrefix"?a[2].sliceSerialize(a[1],!0).length:0,i=0;return s;function s(p){const b=r.containerState.type||(p===42||p===43||p===45?"listUnordered":"listOrdered");if(b==="listUnordered"?!r.containerState.marker||p===r.containerState.marker:et(p)){if(r.containerState.type||(r.containerState.type=b,e.enter(b,{_container:!0})),b==="listUnordered")return e.enter("listItemPrefix"),p===42||p===45?e.check(hn,n,u)(p):u(p);if(!r.interrupt||p===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),l(p)}return n(p)}function l(p){return et(p)&&++i<10?(e.consume(p),l):(!r.interrupt||i<2)&&(r.containerState.marker?p===r.containerState.marker:p===41||p===46)?(e.exit("listItemValue"),u(p)):n(p)}function u(p){return e.enter("listItemMarker"),e.consume(p),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||p,e.check(rn,r.interrupt?n:d,e.attempt(qs,f,c))}function d(p){return r.containerState.initialBlankLine=!0,o++,f(p)}function c(p){return D(p)?(e.enter("listItemPrefixWhitespace"),e.consume(p),e.exit("listItemPrefixWhitespace"),f):n(p)}function f(p){return r.containerState.size=o+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(p)}}function Bs(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(rn,a,o);function a(s){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,B(e,t,"listItemIndent",r.containerState.size+1)(s)}function o(s){return r.containerState.furtherBlankLines||!D(s)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,i(s)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(Ds,t,i)(s))}function i(s){return r.containerState._closeFlow=!0,r.interrupt=void 0,B(e,e.attempt(ne,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(s)}}function Ls(e,t,n){const r=this;return B(e,a,"listItemIndent",r.containerState.size+1);function a(o){const i=r.events[r.events.length-1];return i&&i[1].type==="listItemIndent"&&i[2].sliceSerialize(i[1],!0).length===r.containerState.size?t(o):n(o)}}function Vs(e){e.exit(this.containerState.type)}function Us(e,t,n){const r=this;return B(e,a,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function a(o){const i=r.events[r.events.length-1];return!D(o)&&i&&i[1].type==="listItemPrefixWhitespace"?t(o):n(o)}}const rr={name:"setextUnderline",resolveTo:$s,tokenize:Gs};function $s(e,t){let n=e.length,r,a,o;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(a=n)}else e[n][1].type==="content"&&e.splice(n,1),!o&&e[n][1].type==="definition"&&(o=n);const i={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[a][1].type="setextHeadingText",o?(e.splice(a,0,["enter",i,t]),e.splice(o+1,0,["exit",e[r][1],t]),e[r][1].end={...e[o][1].end}):e[r][1]=i,e.push(["exit",i,t]),e}function Gs(e,t,n){const r=this;let a;return o;function o(u){let d=r.events.length,c;for(;d--;)if(r.events[d][1].type!=="lineEnding"&&r.events[d][1].type!=="linePrefix"&&r.events[d][1].type!=="content"){c=r.events[d][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||c)?(e.enter("setextHeadingLine"),a=u,i(u)):n(u)}function i(u){return e.enter("setextHeadingLineSequence"),s(u)}function s(u){return u===a?(e.consume(u),s):(e.exit("setextHeadingLineSequence"),D(u)?B(e,l,"lineSuffix")(u):l(u))}function l(u){return u===null||R(u)?(e.exit("setextHeadingLine"),t(u)):n(u)}}const Hs={tokenize:Ws};function Ws(e){const t=this,n=e.attempt(rn,r,e.attempt(this.parser.constructs.flowInitial,a,B(e,e.attempt(this.parser.constructs.flow,a,e.attempt(Jo,a)),"linePrefix")));return n;function r(o){if(o===null){e.consume(o);return}return e.enter("lineEndingBlank"),e.consume(o),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function a(o){if(o===null){e.consume(o);return}return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const Ks={resolveAll:aa()},Xs=ra("string"),Qs=ra("text");function ra(e){return{resolveAll:aa(e==="text"?Ys:void 0),tokenize:t};function t(n){const r=this,a=this.parser.constructs[e],o=n.attempt(a,i,s);return i;function i(d){return u(d)?o(d):s(d)}function s(d){if(d===null){n.consume(d);return}return n.enter("data"),n.consume(d),l}function l(d){return u(d)?(n.exit("data"),o(d)):(n.consume(d),l)}function u(d){if(d===null)return!0;const c=a[d];let f=-1;if(c)for(;++f<c.length;){const p=c[f];if(!p.previous||p.previous.call(r,r.previous))return!0}return!1}}}function aa(e){return t;function t(n,r){let a=-1,o;for(;++a<=n.length;)o===void 0?n[a]&&n[a][1].type==="data"&&(o=a,a++):(!n[a]||n[a][1].type!=="data")&&(a!==o+2&&(n[o][1].end=n[a-1][1].end,n.splice(o+2,a-o-2),a=o+2),o=void 0);return e?e(n,r):n}}function Ys(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const r=e[n-1][1],a=t.sliceStream(r);let o=a.length,i=-1,s=0,l;for(;o--;){const u=a[o];if(typeof u=="string"){for(i=u.length;u.charCodeAt(i-1)===32;)s++,i--;if(i)break;i=-1}else if(u===-2)l=!0,s++;else if(u!==-1){o++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(s=0),s){const u={type:n===e.length||l||s<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:o?i:r.start._bufferIndex+i,_index:r.start._index+o,line:r.end.line,column:r.end.column-s,offset:r.end.offset-s},end:{...r.end}};r.end={...u.start},r.start.offset===r.end.offset?Object.assign(r,u):(e.splice(n,0,["enter",u,t],["exit",u,t]),n+=2)}n++}return e}const Js={42:ne,43:ne,45:ne,48:ne,49:ne,50:ne,51:ne,52:ne,53:ne,54:ne,55:ne,56:ne,57:ne,62:Qr},Zs={91:rs},el={[-2]:zn,[-1]:zn,32:zn},nl={35:us,42:hn,45:[rr,hn],60:ps,61:rr,95:hn,96:nr,126:nr},tl={38:Jr,92:Yr},rl={[-5]:Fn,[-4]:Fn,[-3]:Fn,33:Rs,38:Jr,42:nt,60:[No,ys],91:Ns,92:[ss,Yr],93:gt,95:nt,96:Ho},al={null:[nt,Ks]},il={null:[42,95]},ol={null:[]},sl=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:il,contentInitial:Zs,disable:ol,document:Js,flow:nl,flowInitial:el,insideSpan:al,string:tl,text:rl},Symbol.toStringTag,{value:"Module"}));function ll(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const a={},o=[];let i=[],s=[];const l={attempt:q(N),check:q(y),consume:A,enter:S,exit:F,interrupt:q(y,{interrupt:!0})},u={code:null,containerState:{},defineSkip:C,events:[],now:b,parser:e,previous:null,sliceSerialize:f,sliceStream:p,write:c};let d=t.tokenize.call(u,l);return t.resolveAll&&o.push(t),u;function c(O){return i=oe(i,O),w(),i[i.length-1]!==null?[]:(V(t,0),u.events=wn(o,u.events,u),u.events)}function f(O,j){return cl(p(O),j)}function p(O){return ul(i,O)}function b(){const{_bufferIndex:O,_index:j,line:U,column:M,offset:P}=r;return{_bufferIndex:O,_index:j,line:U,column:M,offset:P}}function C(O){a[O.line]=O.column,v()}function w(){let O;for(;r._index<i.length;){const j=i[r._index];if(typeof j=="string")for(O=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===O&&r._bufferIndex<j.length;)x(j.charCodeAt(r._bufferIndex));else x(j)}}function x(O){d=d(O)}function A(O){R(O)?(r.line++,r.column=1,r.offset+=O===-3?2:1,v()):O!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===i[r._index].length&&(r._bufferIndex=-1,r._index++)),u.previous=O}function S(O,j){const U=j||{};return U.type=O,U.start=b(),u.events.push(["enter",U,u]),s.push(U),U}function F(O){const j=s.pop();return j.end=b(),u.events.push(["exit",j,u]),j}function N(O,j){V(O,j.from)}function y(O,j){j.restore()}function q(O,j){return U;function U(M,P,$){let X,se,fe,h;return Array.isArray(M)?he(M):"tokenize"in M?he([M]):le(M);function le(Q){return Ve;function Ve(ye){const Ne=ye!==null&&Q[ye],Te=ye!==null&&Q.null,sn=[...Array.isArray(Ne)?Ne:Ne?[Ne]:[],...Array.isArray(Te)?Te:Te?[Te]:[]];return he(sn)(ye)}}function he(Q){return X=Q,se=0,Q.length===0?$:g(Q[se])}function g(Q){return Ve;function Ve(ye){return h=L(),fe=Q,Q.partial||(u.currentConstruct=Q),Q.name&&u.parser.constructs.disable.null.includes(Q.name)?Ee():Q.tokenize.call(j?Object.assign(Object.create(u),j):u,l,ue,Ee)(ye)}}function ue(Q){return O(fe,h),P}function Ee(Q){return h.restore(),++se<X.length?g(X[se]):$}}}function V(O,j){O.resolveAll&&!o.includes(O)&&o.push(O),O.resolve&&ie(u.events,j,u.events.length-j,O.resolve(u.events.slice(j),u)),O.resolveTo&&(u.events=O.resolveTo(u.events,u))}function L(){const O=b(),j=u.previous,U=u.currentConstruct,M=u.events.length,P=Array.from(s);return{from:M,restore:$};function $(){r=O,u.previous=j,u.currentConstruct=U,u.events.length=M,s=P,v()}}function v(){r.line in a&&r.column<2&&(r.column=a[r.line],r.offset+=a[r.line]-1)}}function ul(e,t){const n=t.start._index,r=t.start._bufferIndex,a=t.end._index,o=t.end._bufferIndex;let i;if(n===a)i=[e[n].slice(r,o)];else{if(i=e.slice(n,a),r>-1){const s=i[0];typeof s=="string"?i[0]=s.slice(r):i.shift()}o>0&&i.push(e[a].slice(0,o))}return i}function cl(e,t){let n=-1;const r=[];let a;for(;++n<e.length;){const o=e[n];let i;if(typeof o=="string")i=o;else switch(o){case-5:{i="\r";break}case-4:{i=`
`;break}case-3:{i=`\r
`;break}case-2:{i=t?" ":"	";break}case-1:{if(!t&&a)continue;i=" ";break}default:i=String.fromCharCode(o)}a=o===-2,r.push(i)}return r.join("")}function dl(e){const r={constructs:Kr([sl,...(e||{}).extensions||[]]),content:a(Ao),defined:[],document:a(Po),flow:a(Hs),lazy:{},string:a(Xs),text:a(Qs)};return r;function a(o){return i;function i(s){return ll(r,o,s)}}}function ml(e){for(;!Zr(e););return e}const ar=/[\0\t\n\r]/g;function pl(){let e=1,t="",n=!0,r;return a;function a(o,i,s){const l=[];let u,d,c,f,p;for(o=t+(typeof o=="string"?o.toString():new TextDecoder(i||void 0).decode(o)),c=0,t="",n&&(o.charCodeAt(0)===65279&&c++,n=void 0);c<o.length;){if(ar.lastIndex=c,u=ar.exec(o),f=u&&u.index!==void 0?u.index:o.length,p=o.charCodeAt(f),!u){t=o.slice(c);break}if(p===10&&c===f&&r)l.push(-3),r=void 0;else switch(r&&(l.push(-5),r=void 0),c<f&&(l.push(o.slice(c,f)),e+=f-c),p){case 0:{l.push(65533),e++;break}case 9:{for(d=Math.ceil(e/4)*4,l.push(-2);e++<d;)l.push(-1);break}case 10:{l.push(-4),e=1;break}default:r=!0,e=1}c=f+1}return s&&(r&&l.push(-5),t&&l.push(t),l.push(null)),l}}const fl=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function hl(e){return e.replace(fl,gl)}function gl(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const a=n.charCodeAt(1),o=a===120||a===88;return Xr(n.slice(o?2:1),o?16:10)}return ht(n)||e}const ia={}.hasOwnProperty;function bl(e,t,n){return t&&typeof t=="object"&&(n=t,t=void 0),xl(n)(ml(dl(n).document().write(pl()(e,t,!0))))}function xl(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(Ot),autolinkProtocol:L,autolinkEmail:L,atxHeading:o(At),blockQuote:o(Te),characterEscape:L,characterReference:L,codeFenced:o(sn),codeFencedFenceInfo:i,codeFencedFenceMeta:i,codeIndented:o(sn,i),codeText:o(Ha,i),codeTextData:L,data:L,codeFlowValue:L,definition:o(Wa),definitionDestinationString:i,definitionLabelString:i,definitionTitleString:i,emphasis:o(Ka),hardBreakEscape:o(It),hardBreakTrailing:o(It),htmlFlow:o(Pt,i),htmlFlowData:L,htmlText:o(Pt,i),htmlTextData:L,image:o(Xa),label:i,link:o(Ot),listItem:o(Qa),listItemValue:f,listOrdered:o(jt,c),listUnordered:o(jt),paragraph:o(Ya),reference:g,referenceString:i,resourceDestinationString:i,resourceTitleString:i,setextHeading:o(At),strong:o(Ja),thematicBreak:o(ei)},exit:{atxHeading:l(),atxHeadingSequence:N,autolink:l(),autolinkEmail:Ne,autolinkProtocol:ye,blockQuote:l(),characterEscapeValue:v,characterReferenceMarkerHexadecimal:Ee,characterReferenceMarkerNumeric:Ee,characterReferenceValue:Q,characterReference:Ve,codeFenced:l(w),codeFencedFence:C,codeFencedFenceInfo:p,codeFencedFenceMeta:b,codeFlowValue:v,codeIndented:l(x),codeText:l(P),codeTextData:v,data:v,definition:l(),definitionDestinationString:F,definitionLabelString:A,definitionTitleString:S,emphasis:l(),hardBreakEscape:l(j),hardBreakTrailing:l(j),htmlFlow:l(U),htmlFlowData:v,htmlText:l(M),htmlTextData:v,image:l(X),label:fe,labelText:se,lineEnding:O,link:l($),listItem:l(),listOrdered:l(),listUnordered:l(),paragraph:l(),referenceString:ue,resourceDestinationString:h,resourceTitleString:le,resource:he,setextHeading:l(V),setextHeadingLineSequence:q,setextHeadingText:y,strong:l(),thematicBreak:l()}};oa(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(k){let I={type:"root",children:[]};const z={stack:[I],tokenStack:[],config:t,enter:s,exit:u,buffer:i,resume:d,data:n},_=[];let G=-1;for(;++G<k.length;)if(k[G][1].type==="listOrdered"||k[G][1].type==="listUnordered")if(k[G][0]==="enter")_.push(G);else{const ce=_.pop();G=a(k,ce,G)}for(G=-1;++G<k.length;){const ce=t[k[G][0]];ia.call(ce,k[G][1].type)&&ce[k[G][1].type].call(Object.assign({sliceSerialize:k[G][2].sliceSerialize},z),k[G][1])}if(z.tokenStack.length>0){const ce=z.tokenStack[z.tokenStack.length-1];(ce[1]||ir).call(z,void 0,ce[0])}for(I.position={start:Ce(k.length>0?k[0][1].start:{line:1,column:1,offset:0}),end:Ce(k.length>0?k[k.length-2][1].end:{line:1,column:1,offset:0})},G=-1;++G<t.transforms.length;)I=t.transforms[G](I)||I;return I}function a(k,I,z){let _=I-1,G=-1,ce=!1,Ae,ge,Ue,$e;for(;++_<=z;){const re=k[_];switch(re[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{re[0]==="enter"?G++:G--,$e=void 0;break}case"lineEndingBlank":{re[0]==="enter"&&(Ae&&!$e&&!G&&!Ue&&(Ue=_),$e=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:$e=void 0}if(!G&&re[0]==="enter"&&re[1].type==="listItemPrefix"||G===-1&&re[0]==="exit"&&(re[1].type==="listUnordered"||re[1].type==="listOrdered")){if(Ae){let ze=_;for(ge=void 0;ze--;){const be=k[ze];if(be[1].type==="lineEnding"||be[1].type==="lineEndingBlank"){if(be[0]==="exit")continue;ge&&(k[ge][1].type="lineEndingBlank",ce=!0),be[1].type="lineEnding",ge=ze}else if(!(be[1].type==="linePrefix"||be[1].type==="blockQuotePrefix"||be[1].type==="blockQuotePrefixWhitespace"||be[1].type==="blockQuoteMarker"||be[1].type==="listItemIndent"))break}Ue&&(!ge||Ue<ge)&&(Ae._spread=!0),Ae.end=Object.assign({},ge?k[ge][1].start:re[1].end),k.splice(ge||_,0,["exit",Ae,re[2]]),_++,z++}if(re[1].type==="listItemPrefix"){const ze={type:"listItem",_spread:!1,start:Object.assign({},re[1].start),end:void 0};Ae=ze,k.splice(_,0,["enter",ze,re[2]]),_++,z++,Ue=void 0,$e=!0}}}return k[I][1]._spread=ce,z}function o(k,I){return z;function z(_){s.call(this,k(_),_),I&&I.call(this,_)}}function i(){this.stack.push({type:"fragment",children:[]})}function s(k,I,z){this.stack[this.stack.length-1].children.push(k),this.stack.push(k),this.tokenStack.push([I,z||void 0]),k.position={start:Ce(I.start),end:void 0}}function l(k){return I;function I(z){k&&k.call(this,z),u.call(this,z)}}function u(k,I){const z=this.stack.pop(),_=this.tokenStack.pop();if(_)_[0].type!==k.type&&(I?I.call(this,k,_[0]):(_[1]||ir).call(this,k,_[0]));else throw new Error("Cannot close `"+k.type+"` ("+Qe({start:k.start,end:k.end})+"): it’s not open");z.position.end=Ce(k.end)}function d(){return ft(this.stack.pop())}function c(){this.data.expectingFirstListItemValue=!0}function f(k){if(this.data.expectingFirstListItemValue){const I=this.stack[this.stack.length-2];I.start=Number.parseInt(this.sliceSerialize(k),10),this.data.expectingFirstListItemValue=void 0}}function p(){const k=this.resume(),I=this.stack[this.stack.length-1];I.lang=k}function b(){const k=this.resume(),I=this.stack[this.stack.length-1];I.meta=k}function C(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function w(){const k=this.resume(),I=this.stack[this.stack.length-1];I.value=k.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function x(){const k=this.resume(),I=this.stack[this.stack.length-1];I.value=k.replace(/(\r?\n|\r)$/g,"")}function A(k){const I=this.resume(),z=this.stack[this.stack.length-1];z.label=I,z.identifier=de(this.sliceSerialize(k)).toLowerCase()}function S(){const k=this.resume(),I=this.stack[this.stack.length-1];I.title=k}function F(){const k=this.resume(),I=this.stack[this.stack.length-1];I.url=k}function N(k){const I=this.stack[this.stack.length-1];if(!I.depth){const z=this.sliceSerialize(k).length;I.depth=z}}function y(){this.data.setextHeadingSlurpLineEnding=!0}function q(k){const I=this.stack[this.stack.length-1];I.depth=this.sliceSerialize(k).codePointAt(0)===61?1:2}function V(){this.data.setextHeadingSlurpLineEnding=void 0}function L(k){const z=this.stack[this.stack.length-1].children;let _=z[z.length-1];(!_||_.type!=="text")&&(_=Za(),_.position={start:Ce(k.start),end:void 0},z.push(_)),this.stack.push(_)}function v(k){const I=this.stack.pop();I.value+=this.sliceSerialize(k),I.position.end=Ce(k.end)}function O(k){const I=this.stack[this.stack.length-1];if(this.data.atHardBreak){const z=I.children[I.children.length-1];z.position.end=Ce(k.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(I.type)&&(L.call(this,k),v.call(this,k))}function j(){this.data.atHardBreak=!0}function U(){const k=this.resume(),I=this.stack[this.stack.length-1];I.value=k}function M(){const k=this.resume(),I=this.stack[this.stack.length-1];I.value=k}function P(){const k=this.resume(),I=this.stack[this.stack.length-1];I.value=k}function $(){const k=this.stack[this.stack.length-1];if(this.data.inReference){const I=this.data.referenceType||"shortcut";k.type+="Reference",k.referenceType=I,delete k.url,delete k.title}else delete k.identifier,delete k.label;this.data.referenceType=void 0}function X(){const k=this.stack[this.stack.length-1];if(this.data.inReference){const I=this.data.referenceType||"shortcut";k.type+="Reference",k.referenceType=I,delete k.url,delete k.title}else delete k.identifier,delete k.label;this.data.referenceType=void 0}function se(k){const I=this.sliceSerialize(k),z=this.stack[this.stack.length-2];z.label=hl(I),z.identifier=de(I).toLowerCase()}function fe(){const k=this.stack[this.stack.length-1],I=this.resume(),z=this.stack[this.stack.length-1];if(this.data.inReference=!0,z.type==="link"){const _=k.children;z.children=_}else z.alt=I}function h(){const k=this.resume(),I=this.stack[this.stack.length-1];I.url=k}function le(){const k=this.resume(),I=this.stack[this.stack.length-1];I.title=k}function he(){this.data.inReference=void 0}function g(){this.data.referenceType="collapsed"}function ue(k){const I=this.resume(),z=this.stack[this.stack.length-1];z.label=I,z.identifier=de(this.sliceSerialize(k)).toLowerCase(),this.data.referenceType="full"}function Ee(k){this.data.characterReferenceType=k.type}function Q(k){const I=this.sliceSerialize(k),z=this.data.characterReferenceType;let _;z?(_=Xr(I,z==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):_=ht(I);const G=this.stack[this.stack.length-1];G.value+=_}function Ve(k){const I=this.stack.pop();I.position.end=Ce(k.end)}function ye(k){v.call(this,k);const I=this.stack[this.stack.length-1];I.url=this.sliceSerialize(k)}function Ne(k){v.call(this,k);const I=this.stack[this.stack.length-1];I.url="mailto:"+this.sliceSerialize(k)}function Te(){return{type:"blockquote",children:[]}}function sn(){return{type:"code",lang:null,meta:null,value:""}}function Ha(){return{type:"inlineCode",value:""}}function Wa(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function Ka(){return{type:"emphasis",children:[]}}function At(){return{type:"heading",depth:0,children:[]}}function It(){return{type:"break"}}function Pt(){return{type:"html",value:""}}function Xa(){return{type:"image",title:null,url:"",alt:null}}function Ot(){return{type:"link",title:null,url:"",children:[]}}function jt(k){return{type:"list",ordered:k.type==="listOrdered",start:null,spread:k._spread,children:[]}}function Qa(k){return{type:"listItem",spread:k._spread,checked:null,children:[]}}function Ya(){return{type:"paragraph",children:[]}}function Ja(){return{type:"strong",children:[]}}function Za(){return{type:"text",value:""}}function ei(){return{type:"thematicBreak"}}}function Ce(e){return{line:e.line,column:e.column,offset:e.offset}}function oa(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?oa(e,r):vl(e,r)}}function vl(e,t){let n;for(n in t)if(ia.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function ir(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+Qe({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+Qe({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+Qe({start:t.start,end:t.end})+") is still open")}function yl(e){const t=this;t.parser=n;function n(r){return bl(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function kl(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function Cl(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function wl(e,t){const n=t.value?t.value+`
`:"",r={},a=t.lang?t.lang.split(/\s+/):[];a.length>0&&(r.className=["language-"+a[0]]);let o={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(o.data={meta:t.meta}),e.patch(t,o),o=e.applyData(t,o),o={type:"element",tagName:"pre",properties:{},children:[o]},e.patch(t,o),o}function Sl(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function El(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Al(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),a=Le(r.toLowerCase()),o=e.footnoteOrder.indexOf(r);let i,s=e.footnoteCounts.get(r);s===void 0?(s=0,e.footnoteOrder.push(r),i=e.footnoteOrder.length):i=o+1,s+=1,e.footnoteCounts.set(r,s);const l={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+a,id:n+"fnref-"+a+(s>1?"-"+s:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(i)}]};e.patch(t,l);const u={type:"element",tagName:"sup",properties:{},children:[l]};return e.patch(t,u),e.applyData(t,u)}function Il(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Pl(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function sa(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];const a=e.all(t),o=a[0];o&&o.type==="text"?o.value="["+o.value:a.unshift({type:"text",value:"["});const i=a[a.length-1];return i&&i.type==="text"?i.value+=r:a.push({type:"text",value:r}),a}function Ol(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return sa(e,t);const a={src:Le(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(a.title=r.title);const o={type:"element",tagName:"img",properties:a,children:[]};return e.patch(t,o),e.applyData(t,o)}function jl(e,t){const n={src:Le(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function Rl(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function Ml(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return sa(e,t);const a={href:Le(r.url||"")};r.title!==null&&r.title!==void 0&&(a.title=r.title);const o={type:"element",tagName:"a",properties:a,children:e.all(t)};return e.patch(t,o),e.applyData(t,o)}function Nl(e,t){const n={href:Le(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function Tl(e,t,n){const r=e.all(t),a=n?zl(n):la(t),o={},i=[];if(typeof t.checked=="boolean"){const d=r[0];let c;d&&d.type==="element"&&d.tagName==="p"?c=d:(c={type:"element",tagName:"p",properties:{},children:[]},r.unshift(c)),c.children.length>0&&c.children.unshift({type:"text",value:" "}),c.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),o.className=["task-list-item"]}let s=-1;for(;++s<r.length;){const d=r[s];(a||s!==0||d.type!=="element"||d.tagName!=="p")&&i.push({type:"text",value:`
`}),d.type==="element"&&d.tagName==="p"&&!a?i.push(...d.children):i.push(d)}const l=r[r.length-1];l&&(a||l.type!=="element"||l.tagName!=="p")&&i.push({type:"text",value:`
`});const u={type:"element",tagName:"li",properties:o,children:i};return e.patch(t,u),e.applyData(t,u)}function zl(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=la(n[r])}return t}function la(e){const t=e.spread;return t??e.children.length>1}function Fl(e,t){const n={},r=e.all(t);let a=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++a<r.length;){const i=r[a];if(i.type==="element"&&i.tagName==="li"&&i.properties&&Array.isArray(i.properties.className)&&i.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const o={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,o),e.applyData(t,o)}function ql(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Dl(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function _l(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Bl(e,t){const n=e.all(t),r=n.shift(),a=[];if(r){const i={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],i),a.push(i)}if(n.length>0){const i={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},s=ct(t.children[1]),l=Br(t.children[t.children.length-1]);s&&l&&(i.position={start:s,end:l}),a.push(i)}const o={type:"element",tagName:"table",properties:{},children:e.wrap(a,!0)};return e.patch(t,o),e.applyData(t,o)}function Ll(e,t,n){const r=n?n.children:void 0,o=(r?r.indexOf(t):1)===0?"th":"td",i=n&&n.type==="table"?n.align:void 0,s=i?i.length:t.children.length;let l=-1;const u=[];for(;++l<s;){const c=t.children[l],f={},p=i?i[l]:void 0;p&&(f.align=p);let b={type:"element",tagName:o,properties:f,children:[]};c&&(b.children=e.all(c),e.patch(c,b),b=e.applyData(c,b)),u.push(b)}const d={type:"element",tagName:"tr",properties:{},children:e.wrap(u,!0)};return e.patch(t,d),e.applyData(t,d)}function Vl(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const or=9,sr=32;function Ul(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),a=0;const o=[];for(;r;)o.push(lr(t.slice(a,r.index),a>0,!0),r[0]),a=r.index+r[0].length,r=n.exec(t);return o.push(lr(t.slice(a),a>0,!1)),o.join("")}function lr(e,t,n){let r=0,a=e.length;if(t){let o=e.codePointAt(r);for(;o===or||o===sr;)r++,o=e.codePointAt(r)}if(n){let o=e.codePointAt(a-1);for(;o===or||o===sr;)a--,o=e.codePointAt(a-1)}return a>r?e.slice(r,a):""}function $l(e,t){const n={type:"text",value:Ul(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function Gl(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const Hl={blockquote:kl,break:Cl,code:wl,delete:Sl,emphasis:El,footnoteReference:Al,heading:Il,html:Pl,imageReference:Ol,image:jl,inlineCode:Rl,linkReference:Ml,link:Nl,listItem:Tl,list:Fl,paragraph:ql,root:Dl,strong:_l,table:Bl,tableCell:Vl,tableRow:Ll,text:$l,thematicBreak:Gl,toml:un,yaml:un,definition:un,footnoteDefinition:un};function un(){}const ua=-1,Sn=0,Je=1,xn=2,bt=3,xt=4,vt=5,yt=6,ca=7,da=8,{defineProperty:Wl}=Object,ma=typeof self=="object"?self:globalThis,ur=(e,t)=>{switch(e){case"Function":case"SharedWorker":case"Worker":case"eval":case"setInterval":case"setTimeout":throw new TypeError("unable to deserialize "+e)}return new ma[e](t)},Kl=(e,t)=>{const n=(a,o)=>(e.set(o,a),a),r=a=>{if(e.has(a))return e.get(a);const[o,i]=t[a];switch(o){case Sn:case ua:return n(i,a);case Je:{const s=n([],a);for(const l of i)s.push(r(l));return s}case xn:{const s=n({},a);for(const[l,u]of i){const d=r(l),c=r(u);d==="__proto__"?Wl(s,d,{value:c,configurable:!0,enumerable:!0,writable:!0}):s[d]=c}return s}case bt:return n(new Date(i),a);case xt:{const{source:s,flags:l}=i;return n(new RegExp(s,l),a)}case vt:{const s=n(new Map,a);for(const[l,u]of i)s.set(r(l),r(u));return s}case yt:{const s=n(new Set,a);for(const l of i)s.add(r(l));return s}case ca:{const{name:s,message:l}=i;return n(typeof ma[s]=="function"?ur(s,l):new Error(l),a)}case da:return n(BigInt(i),a);case"BigInt":return n(Object(BigInt(i)),a);case"ArrayBuffer":return n(new Uint8Array(i).buffer,i);case"DataView":{const{buffer:s}=new Uint8Array(i);return n(new DataView(s),i)}case"-0":return-0}return n(ur(o,i),a)};return r},cr=e=>Kl(new Map,e)(0),Oe="",{toString:Xl}={},{keys:Ql,is:Yl}=Object,Xe=e=>{const t=typeof e;if(t!=="object"||!e)return[Sn,t];const n=Xl.call(e).slice(8,-1);switch(n){case"Array":return[Je,Oe];case"Object":return[xn,Oe];case"Date":return[bt,Oe];case"RegExp":return[xt,Oe];case"Map":return[vt,Oe];case"Set":return[yt,Oe];case"DataView":return[Je,n]}return n.includes("Array")?[Je,n]:e instanceof Error?[ca,e.name||"Error"]:[xn,n]},cn=([e,t])=>e===Sn&&(t==="function"||t==="symbol"),Jl=(e,t,n,r)=>{const a=(i,s)=>{const l=r.push(i)-1;return n.set(s,l),l},o=i=>{if(n.has(i))return n.get(i);let[s,l]=Xe(i);switch(s){case Sn:{let d=i;switch(l){case"bigint":s=da,d=i.toString();break;case"number":if(!i&&Yl(i,-0))return r.push(["-0"])-1;break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+l);d=null;break;case"undefined":return a([ua],i)}return a([s,d],i)}case Je:{if(l){let f=i;return l==="DataView"?f=new Uint8Array(i.buffer):l==="ArrayBuffer"&&(f=new Uint8Array(i)),a([l,[...f]],i)}const d=[],c=a([s,d],i);for(const f of i)d.push(o(f));return c}case xn:{if(l)switch(l){case"BigInt":return a([l,i.toString()],i);case"Boolean":case"Number":case"String":return a([l,i.valueOf()],i)}if(t&&"toJSON"in i)return o(i.toJSON());const d=[],c=a([s,d],i);for(const f of Ql(i))(e||!cn(Xe(i[f])))&&d.push([o(f),o(i[f])]);return c}case bt:return a([s,isNaN(i.getTime())?Oe:i.toISOString()],i);case xt:{const{source:d,flags:c}=i;return a([s,{source:d,flags:c}],i)}case vt:{const d=[],c=a([s,d],i);for(const[f,p]of i)(e||!(cn(Xe(f))||cn(Xe(p))))&&d.push([o(f),o(p)]);return c}case yt:{const d=[],c=a([s,d],i);for(const f of i)(e||!cn(Xe(f)))&&d.push(o(f));return c}}const{message:u}=i;return a([s,{name:l,message:u}],i)};return o},dr=(e,{json:t,lossy:n}={})=>{const r=[];return Jl(!(t||n),!!t,new Map,r)(e),r},en=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?cr(dr(e,t)):structuredClone(e):(e,t)=>cr(dr(e,t));function Zl(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function eu(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function nu(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||Zl,r=e.options.footnoteBackLabel||eu,a=e.options.footnoteLabel||"Footnotes",o=e.options.footnoteLabelTagName||"h2",i=e.options.footnoteLabelProperties||{className:["sr-only"]},s=[];let l=-1;for(;++l<e.footnoteOrder.length;){const u=e.footnoteById.get(e.footnoteOrder[l]);if(!u)continue;const d=e.all(u),c=String(u.identifier).toUpperCase(),f=Le(c.toLowerCase());let p=0;const b=[],C=e.footnoteCounts.get(c);for(;C!==void 0&&++p<=C;){b.length>0&&b.push({type:"text",value:" "});let A=typeof n=="string"?n:n(l,p);typeof A=="string"&&(A={type:"text",value:A}),b.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+f+(p>1?"-"+p:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(l,p),className:["data-footnote-backref"]},children:Array.isArray(A)?A:[A]})}const w=d[d.length-1];if(w&&w.type==="element"&&w.tagName==="p"){const A=w.children[w.children.length-1];A&&A.type==="text"?A.value+=" ":w.children.push({type:"text",value:" "}),w.children.push(...b)}else d.push(...b);const x={type:"element",tagName:"li",properties:{id:t+"fn-"+f},children:e.wrap(d,!0)};e.patch(u,x),s.push(x)}if(s.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:o,properties:{...en(i),id:"footnote-label"},children:[{type:"text",value:a}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(s,!0)},{type:"text",value:`
`}]}}const En=(function(e){if(e==null)return iu;if(typeof e=="function")return An(e);if(typeof e=="object")return Array.isArray(e)?tu(e):ru(e);if(typeof e=="string")return au(e);throw new Error("Expected function, string, or object as test")});function tu(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=En(e[n]);return An(r);function r(...a){let o=-1;for(;++o<t.length;)if(t[o].apply(this,a))return!0;return!1}}function ru(e){const t=e;return An(n);function n(r){const a=r;let o;for(o in e)if(a[o]!==t[o])return!1;return!0}}function au(e){return An(t);function t(n){return n&&n.type===e}}function An(e){return t;function t(n,r,a){return!!(ou(n)&&e.call(this,n,typeof r=="number"?r:void 0,a||void 0))}}function iu(){return!0}function ou(e){return e!==null&&typeof e=="object"&&"type"in e}const pa=[],su=!0,tt=!1,lu="skip";function fa(e,t,n,r){let a;typeof t=="function"&&typeof n!="function"?(r=n,n=t):a=t;const o=En(a),i=r?-1:1;s(e,void 0,[])();function s(l,u,d){const c=l&&typeof l=="object"?l:{};if(typeof c.type=="string"){const p=typeof c.tagName=="string"?c.tagName:typeof c.name=="string"?c.name:void 0;Object.defineProperty(f,"name",{value:"node ("+(l.type+(p?"<"+p+">":""))+")"})}return f;function f(){let p=pa,b,C,w;if((!t||o(l,u,d[d.length-1]||void 0))&&(p=uu(n(l,d)),p[0]===tt))return p;if("children"in l&&l.children){const x=l;if(x.children&&p[0]!==lu)for(C=(r?x.children.length:-1)+i,w=d.concat(x);C>-1&&C<x.children.length;){const A=x.children[C];if(b=s(A,C,w)(),b[0]===tt)return b;C=typeof b[1]=="number"?b[1]:C+i}}return p}}}function uu(e){return Array.isArray(e)?e:typeof e=="number"?[su,e]:e==null?pa:[e]}function kt(e,t,n,r){let a,o,i;typeof t=="function"&&typeof n!="function"?(o=void 0,i=t,a=n):(o=t,i=n,a=r),fa(e,o,s,a);function s(l,u){const d=u[u.length-1],c=d?d.children.indexOf(l):void 0;return i(l,c,d)}}const rt={}.hasOwnProperty,cu={};function du(e,t){const n=t||cu,r=new Map,a=new Map,o=new Map,i={...Hl,...n.handlers},s={all:u,applyData:pu,definitionById:r,footnoteById:a,footnoteCounts:o,footnoteOrder:[],handlers:i,one:l,options:n,patch:mu,wrap:hu};return kt(e,function(d){if(d.type==="definition"||d.type==="footnoteDefinition"){const c=d.type==="definition"?r:a,f=String(d.identifier).toUpperCase();c.has(f)||c.set(f,d)}}),s;function l(d,c){const f=d.type,p=s.handlers[f];if(rt.call(s.handlers,f)&&p)return p(s,d,c);if(s.options.passThrough&&s.options.passThrough.includes(f)){if("children"in d){const{children:C,...w}=d,x=en(w);return x.children=s.all(d),x}return en(d)}return(s.options.unknownHandler||fu)(s,d,c)}function u(d){const c=[];if("children"in d){const f=d.children;let p=-1;for(;++p<f.length;){const b=s.one(f[p],d);if(b){if(p&&f[p-1].type==="break"&&(!Array.isArray(b)&&b.type==="text"&&(b.value=mr(b.value)),!Array.isArray(b)&&b.type==="element")){const C=b.children[0];C&&C.type==="text"&&(C.value=mr(C.value))}Array.isArray(b)?c.push(...b):c.push(b)}}}return c}}function mu(e,t){e.position&&(t.position=Vr(e))}function pu(e,t){let n=t;if(e&&e.data){const r=e.data.hName,a=e.data.hChildren,o=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{const i="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:i}}n.type==="element"&&o&&Object.assign(n.properties,en(o)),"children"in n&&n.children&&a!==null&&a!==void 0&&(n.children=a)}return n}function fu(e,t){const n=t.data||{},r="value"in t&&!(rt.call(n,"hProperties")||rt.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function hu(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function mr(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function pr(e,t){const n=du(e,t),r=n.one(e,void 0),a=nu(n),o=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return a&&o.children.push({type:"text",value:`
`},a),o}function gu(e,t){return e&&"run"in e?async function(n,r){const a=pr(n,{file:r,...t});await e.run(a,r)}:function(n,r){return pr(n,{file:r,...e||t})}}function fr(e){if(e)throw e}var qn,hr;function bu(){if(hr)return qn;hr=1;var e=Object.prototype.hasOwnProperty,t=Object.prototype.toString,n=Object.defineProperty,r=Object.getOwnPropertyDescriptor,a=function(u){return typeof Array.isArray=="function"?Array.isArray(u):t.call(u)==="[object Array]"},o=function(u){if(!u||t.call(u)!=="[object Object]")return!1;var d=e.call(u,"constructor"),c=u.constructor&&u.constructor.prototype&&e.call(u.constructor.prototype,"isPrototypeOf");if(u.constructor&&!d&&!c)return!1;var f;for(f in u);return typeof f>"u"||e.call(u,f)},i=function(u,d){n&&d.name==="__proto__"?n(u,d.name,{enumerable:!0,configurable:!0,value:d.newValue,writable:!0}):u[d.name]=d.newValue},s=function(u,d){if(d==="__proto__")if(e.call(u,d)){if(r)return r(u,d).value}else return;return u[d]};return qn=function l(){var u,d,c,f,p,b,C=arguments[0],w=1,x=arguments.length,A=!1;for(typeof C=="boolean"&&(A=C,C=arguments[1]||{},w=2),(C==null||typeof C!="object"&&typeof C!="function")&&(C={});w<x;++w)if(u=arguments[w],u!=null)for(d in u)c=s(C,d),f=s(u,d),C!==f&&(A&&f&&(o(f)||(p=a(f)))?(p?(p=!1,b=c&&a(c)?c:[]):b=c&&o(c)?c:{},i(C,{name:d,newValue:l(A,b,f)})):typeof f<"u"&&i(C,{name:d,newValue:f}));return C},qn}var xu=bu();const Dn=Mr(xu);function at(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function vu(){const e=[],t={run:n,use:r};return t;function n(...a){let o=-1;const i=a.pop();if(typeof i!="function")throw new TypeError("Expected function as last argument, not "+i);s(null,...a);function s(l,...u){const d=e[++o];let c=-1;if(l){i(l);return}for(;++c<a.length;)(u[c]===null||u[c]===void 0)&&(u[c]=a[c]);a=u,d?yu(d,s)(...u):i(null,...u)}}function r(a){if(typeof a!="function")throw new TypeError("Expected `middelware` to be a function, not "+a);return e.push(a),t}}function yu(e,t){let n;return r;function r(...i){const s=e.length>i.length;let l;s&&i.push(a);try{l=e.apply(this,i)}catch(u){const d=u;if(s&&n)throw d;return a(d)}s||(l&&l.then&&typeof l.then=="function"?l.then(o,a):l instanceof Error?a(l):o(l))}function a(i,...s){n||(n=!0,t(i,...s))}function o(i){a(null,i)}}const me={basename:ku,dirname:Cu,extname:wu,join:Su,sep:"/"};function ku(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');an(e);let n=0,r=-1,a=e.length,o;if(t===void 0||t.length===0||t.length>e.length){for(;a--;)if(e.codePointAt(a)===47){if(o){n=a+1;break}}else r<0&&(o=!0,r=a+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let i=-1,s=t.length-1;for(;a--;)if(e.codePointAt(a)===47){if(o){n=a+1;break}}else i<0&&(o=!0,i=a+1),s>-1&&(e.codePointAt(a)===t.codePointAt(s--)?s<0&&(r=a):(s=-1,r=i));return n===r?r=i:r<0&&(r=e.length),e.slice(n,r)}function Cu(e){if(an(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function wu(e){an(e);let t=e.length,n=-1,r=0,a=-1,o=0,i;for(;t--;){const s=e.codePointAt(t);if(s===47){if(i){r=t+1;break}continue}n<0&&(i=!0,n=t+1),s===46?a<0?a=t:o!==1&&(o=1):a>-1&&(o=-1)}return a<0||n<0||o===0||o===1&&a===n-1&&a===r+1?"":e.slice(a,n)}function Su(...e){let t=-1,n;for(;++t<e.length;)an(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":Eu(n)}function Eu(e){an(e);const t=e.codePointAt(0)===47;let n=Au(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function Au(e,t){let n="",r=0,a=-1,o=0,i=-1,s,l;for(;++i<=e.length;){if(i<e.length)s=e.codePointAt(i);else{if(s===47)break;s=47}if(s===47){if(!(a===i-1||o===1))if(a!==i-1&&o===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(l=n.lastIndexOf("/"),l!==n.length-1){l<0?(n="",r=0):(n=n.slice(0,l),r=n.length-1-n.lastIndexOf("/")),a=i,o=0;continue}}else if(n.length>0){n="",r=0,a=i,o=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(a+1,i):n=e.slice(a+1,i),r=i-a-1;a=i,o=0}else s===46&&o>-1?o++:o=-1}return n}function an(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const Iu={cwd:Pu};function Pu(){return"/"}function it(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function Ou(e){if(typeof e=="string")e=new URL(e);else if(!it(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return ju(e)}function ju(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const r=t.codePointAt(n+2);if(r===70||r===102){const a=new TypeError("File URL path must not include encoded / characters");throw a.code="ERR_INVALID_FILE_URL_PATH",a}}return decodeURIComponent(t)}const _n=["history","path","basename","stem","extname","dirname"];class ha{constructor(t){let n;t?it(t)?n={path:t}:typeof t=="string"||Ru(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":Iu.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<_n.length;){const o=_n[r];o in n&&n[o]!==void 0&&n[o]!==null&&(this[o]=o==="history"?[...n[o]]:n[o])}let a;for(a in n)_n.includes(a)||(this[a]=n[a])}get basename(){return typeof this.path=="string"?me.basename(this.path):void 0}set basename(t){Ln(t,"basename"),Bn(t,"basename"),this.path=me.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?me.dirname(this.path):void 0}set dirname(t){gr(this.basename,"dirname"),this.path=me.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?me.extname(this.path):void 0}set extname(t){if(Bn(t,"extname"),gr(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=me.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){it(t)&&(t=Ou(t)),Ln(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?me.basename(this.path,this.extname):void 0}set stem(t){Ln(t,"stem"),Bn(t,"stem"),this.path=me.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){const a=this.message(t,n,r);throw a.fatal=!0,a}info(t,n,r){const a=this.message(t,n,r);return a.fatal=void 0,a}message(t,n,r){const a=new J(t,n,r);return this.path&&(a.name=this.path+":"+a.name,a.file=this.path),a.fatal=!1,this.messages.push(a),a}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function Bn(e,t){if(e&&e.includes(me.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+me.sep+"`")}function Ln(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function gr(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function Ru(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const Mu=(function(e){const r=this.constructor.prototype,a=r[e],o=function(){return a.apply(o,arguments)};return Object.setPrototypeOf(o,r),o}),Nu={}.hasOwnProperty;class Ct extends Mu{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=vu()}copy(){const t=new Ct;let n=-1;for(;++n<this.attachers.length;){const r=this.attachers[n];t.use(...r)}return t.data(Dn(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?($n("data",this.frozen),this.namespace[t]=n,this):Nu.call(this.namespace,t)&&this.namespace[t]||void 0:t?($n("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const a=n.call(t,...r);typeof a=="function"&&this.transformers.use(a)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=dn(t),r=this.parser||this.Parser;return Vn("parse",r),r(String(n),n)}process(t,n){const r=this;return this.freeze(),Vn("process",this.parser||this.Parser),Un("process",this.compiler||this.Compiler),n?a(void 0,n):new Promise(a);function a(o,i){const s=dn(t),l=r.parse(s);r.run(l,s,function(d,c,f){if(d||!c||!f)return u(d);const p=c,b=r.stringify(p,f);Fu(b)?f.value=b:f.result=b,u(d,f)});function u(d,c){d||!c?i(d):o?o(c):n(void 0,c)}}}processSync(t){let n=!1,r;return this.freeze(),Vn("processSync",this.parser||this.Parser),Un("processSync",this.compiler||this.Compiler),this.process(t,a),xr("processSync","process",n),r;function a(o,i){n=!0,fr(o),r=i}}run(t,n,r){br(t),this.freeze();const a=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?o(void 0,r):new Promise(o);function o(i,s){const l=dn(n);a.run(t,l,u);function u(d,c,f){const p=c||t;d?s(d):i?i(p):r(void 0,p,f)}}}runSync(t,n){let r=!1,a;return this.run(t,n,o),xr("runSync","run",r),a;function o(i,s){fr(i),a=s,r=!0}}stringify(t,n){this.freeze();const r=dn(n),a=this.compiler||this.Compiler;return Un("stringify",a),br(t),a(t,r)}use(t,...n){const r=this.attachers,a=this.namespace;if($n("use",this.frozen),t!=null)if(typeof t=="function")l(t,n);else if(typeof t=="object")Array.isArray(t)?s(t):i(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function o(u){if(typeof u=="function")l(u,[]);else if(typeof u=="object")if(Array.isArray(u)){const[d,...c]=u;l(d,c)}else i(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function i(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");s(u.plugins),u.settings&&(a.settings=Dn(!0,a.settings,u.settings))}function s(u){let d=-1;if(u!=null)if(Array.isArray(u))for(;++d<u.length;){const c=u[d];o(c)}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function l(u,d){let c=-1,f=-1;for(;++c<r.length;)if(r[c][0]===u){f=c;break}if(f===-1)r.push([u,...d]);else if(d.length>0){let[p,...b]=d;const C=r[f][1];at(C)&&at(p)&&(p=Dn(!0,C,p)),r[f]=[u,p,...b]}}}}const Tu=new Ct().freeze();function Vn(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function Un(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function $n(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function br(e){if(!at(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function xr(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function dn(e){return zu(e)?e:new ha(e)}function zu(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function Fu(e){return typeof e=="string"||qu(e)}function qu(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const Du="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",vr=[],yr={allowDangerousHtml:!0},_u=/^(https?|ircs?|mailto|xmpp)$/i,Bu=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function Lu(e){const t=Vu(e),n=Uu(e);return $u(t.runSync(t.parse(n),n),e)}function Vu(e){const t=e.rehypePlugins||vr,n=e.remarkPlugins||vr,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...yr}:yr;return Tu().use(yl).use(n).use(gu,r).use(t)}function Uu(e){const t=e.children||"",n=new ha;return typeof t=="string"&&(n.value=t),n}function $u(e,t){const n=t.allowedElements,r=t.allowElement,a=t.components,o=t.disallowedElements,i=t.skipHtml,s=t.unwrapDisallowed,l=t.urlTransform||Gu;for(const d of Bu)Object.hasOwn(t,d.from)&&(""+d.from+(d.to?"use `"+d.to+"` instead":"remove it")+Du+d.id,void 0);return kt(e,u),to(e,{Fragment:m.Fragment,components:a,ignoreInvalidStyle:!0,jsx:m.jsx,jsxs:m.jsxs,passKeys:!0,passNode:!0});function u(d,c,f){if(d.type==="raw"&&f&&typeof c=="number")return i?f.children.splice(c,1):f.children[c]={type:"text",value:d.value},c;if(d.type==="element"){let p;for(p in Tn)if(Object.hasOwn(Tn,p)&&Object.hasOwn(d.properties,p)){const b=d.properties[p],C=Tn[p];(C===null||C.includes(d.tagName))&&(d.properties[p]=l(String(b||""),p,d))}}if(d.type==="element"){let p=n?!n.includes(d.tagName):o?o.includes(d.tagName):!1;if(!p&&r&&typeof c=="number"&&(p=!r(d,c,f)),p&&f&&typeof c=="number")return s&&d.children?f.children.splice(c,1,...d.children):f.children.splice(c,1),c}}}function Gu(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),a=e.indexOf("/");return t===-1||a!==-1&&t>a||n!==-1&&t>n||r!==-1&&t>r||_u.test(e.slice(0,t))?e:""}function kr(e,t){const n=String(e);if(typeof t!="string")throw new TypeError("Expected character");let r=0,a=n.indexOf(t);for(;a!==-1;)r++,a=n.indexOf(t,a+t.length);return r}function Hu(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function Wu(e,t,n){const a=En((n||{}).ignore||[]),o=Ku(t);let i=-1;for(;++i<o.length;)fa(e,"text",s);function s(u,d){let c=-1,f;for(;++c<d.length;){const p=d[c],b=f?f.children:void 0;if(a(p,b?b.indexOf(p):void 0,f))return;f=p}if(f)return l(u,d)}function l(u,d){const c=d[d.length-1],f=o[i][0],p=o[i][1];let b=0;const w=c.children.indexOf(u);let x=!1,A=[];f.lastIndex=0;let S=f.exec(u.value);for(;S;){const F=S.index,N={index:S.index,input:S.input,stack:[...d,u]};let y=p(...S,N);if(typeof y=="string"&&(y=y.length>0?{type:"text",value:y}:void 0),y===!1?f.lastIndex=F+1:(b!==F&&A.push({type:"text",value:u.value.slice(b,F)}),Array.isArray(y)?A.push(...y):y&&A.push(y),b=F+S[0].length,x=!0),!f.global)break;S=f.exec(u.value)}return x?(b<u.value.length&&A.push({type:"text",value:u.value.slice(b)}),c.children.splice(w,1,...A)):A=[u],w+A.length}}function Ku(e){const t=[];if(!Array.isArray(e))throw new TypeError("Expected find and replace tuple or list of tuples");const n=!e[0]||Array.isArray(e[0])?e:[e];let r=-1;for(;++r<n.length;){const a=n[r];t.push([Xu(a[0]),Qu(a[1])])}return t}function Xu(e){return typeof e=="string"?new RegExp(Hu(e),"g"):e}function Qu(e){return typeof e=="function"?e:function(){return e}}const Gn="phrasing",Hn=["autolink","link","image","label"];function Yu(){return{transforms:[ac],enter:{literalAutolink:Zu,literalAutolinkEmail:Wn,literalAutolinkHttp:Wn,literalAutolinkWww:Wn},exit:{literalAutolink:rc,literalAutolinkEmail:tc,literalAutolinkHttp:ec,literalAutolinkWww:nc}}}function Ju(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:Gn,notInConstruct:Hn},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:Gn,notInConstruct:Hn},{character:":",before:"[ps]",after:"\\/",inConstruct:Gn,notInConstruct:Hn}]}}function Zu(e){this.enter({type:"link",title:null,url:"",children:[]},e)}function Wn(e){this.config.enter.autolinkProtocol.call(this,e)}function ec(e){this.config.exit.autolinkProtocol.call(this,e)}function nc(e){this.config.exit.data.call(this,e);const t=this.stack[this.stack.length-1];t.type,t.url="http://"+this.sliceSerialize(e)}function tc(e){this.config.exit.autolinkEmail.call(this,e)}function rc(e){this.exit(e)}function ac(e){Wu(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,ic],[/(?<=^|\s|\p{P}|\p{S})([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu,oc]],{ignore:["link","linkReference"]})}function ic(e,t,n,r,a){let o="";if(!ga(a)||(/^w/i.test(t)&&(n=t+n,t="",o="http://"),!sc(n)))return!1;const i=lc(n+r);if(!i[0])return!1;const s={type:"link",title:null,url:o+t+i[0],children:[{type:"text",value:t+i[0]}]};return i[1]?[s,{type:"text",value:i[1]}]:s}function oc(e,t,n,r){return!ga(r,!0)||/[-\d_]$/.test(n)?!1:{type:"link",title:null,url:"mailto:"+t+"@"+n,children:[{type:"text",value:t+"@"+n}]}}function sc(e){const t=e.split(".");return!(t.length<2||t[t.length-1]&&(/_/.test(t[t.length-1])||!/[a-zA-Z\d]/.test(t[t.length-1]))||t[t.length-2]&&(/_/.test(t[t.length-2])||!/[a-zA-Z\d]/.test(t[t.length-2])))}function lc(e){const t=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!t)return[e,void 0];e=e.slice(0,t.index);let n=t[0],r=n.indexOf(")");const a=kr(e,"(");let o=kr(e,")");for(;r!==-1&&a>o;)e+=n.slice(0,r+1),n=n.slice(r+1),r=n.indexOf(")"),o++;return[e,n]}function ga(e,t){const n=e.input.charCodeAt(e.index-1);return(e.index===0||Re(n)||Cn(n))&&(!t||n!==47)}ba.peek=bc;function uc(){this.buffer()}function cc(e){this.enter({type:"footnoteReference",identifier:"",label:""},e)}function dc(){this.buffer()}function mc(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e)}function pc(e){const t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=de(this.sliceSerialize(e)).toLowerCase(),n.label=t}function fc(e){this.exit(e)}function hc(e){const t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=de(this.sliceSerialize(e)).toLowerCase(),n.label=t}function gc(e){this.exit(e)}function bc(){return"["}function ba(e,t,n,r){const a=n.createTracker(r);let o=a.move("[^");const i=n.enter("footnoteReference"),s=n.enter("reference");return o+=a.move(n.safe(n.associationId(e),{after:"]",before:o})),s(),i(),o+=a.move("]"),o}function xc(){return{enter:{gfmFootnoteCallString:uc,gfmFootnoteCall:cc,gfmFootnoteDefinitionLabelString:dc,gfmFootnoteDefinition:mc},exit:{gfmFootnoteCallString:pc,gfmFootnoteCall:fc,gfmFootnoteDefinitionLabelString:hc,gfmFootnoteDefinition:gc}}}function vc(e){let t=!1;return e&&e.firstLineBlank&&(t=!0),{handlers:{footnoteDefinition:n,footnoteReference:ba},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function n(r,a,o,i){const s=o.createTracker(i);let l=s.move("[^");const u=o.enter("footnoteDefinition"),d=o.enter("label");return l+=s.move(o.safe(o.associationId(r),{before:l,after:"]"})),d(),l+=s.move("]:"),r.children&&r.children.length>0&&(s.shift(4),l+=s.move((t?`
`:" ")+o.indentLines(o.containerFlow(r,s.current()),t?xa:yc))),u(),l}}function yc(e,t,n){return t===0?e:xa(e,t,n)}function xa(e,t,n){return(n?"":"    ")+e}const kc=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];va.peek=Ac;function Cc(){return{canContainEols:["delete"],enter:{strikethrough:Sc},exit:{strikethrough:Ec}}}function wc(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:kc}],handlers:{delete:va}}}function Sc(e){this.enter({type:"delete",children:[]},e)}function Ec(e){this.exit(e)}function va(e,t,n,r){const a=n.createTracker(r),o=n.enter("strikethrough");let i=a.move("~~");return i+=n.containerPhrasing(e,{...a.current(),before:i,after:"~"}),i+=a.move("~~"),o(),i}function Ac(){return"~"}function Ic(e){return e.length}function Pc(e,t){const n=t||{},r=(n.align||[]).concat(),a=n.stringLength||Ic,o=[],i=[],s=[],l=[];let u=0,d=-1;for(;++d<e.length;){const C=[],w=[];let x=-1;for(e[d].length>u&&(u=e[d].length);++x<e[d].length;){const A=Oc(e[d][x]);if(n.alignDelimiters!==!1){const S=a(A);w[x]=S,(l[x]===void 0||S>l[x])&&(l[x]=S)}C.push(A)}i[d]=C,s[d]=w}let c=-1;if(typeof r=="object"&&"length"in r)for(;++c<u;)o[c]=Cr(r[c]);else{const C=Cr(r);for(;++c<u;)o[c]=C}c=-1;const f=[],p=[];for(;++c<u;){const C=o[c];let w="",x="";C===99?(w=":",x=":"):C===108?w=":":C===114&&(x=":");let A=n.alignDelimiters===!1?1:Math.max(1,l[c]-w.length-x.length);const S=w+"-".repeat(A)+x;n.alignDelimiters!==!1&&(A=w.length+A+x.length,A>l[c]&&(l[c]=A),p[c]=A),f[c]=S}i.splice(1,0,f),s.splice(1,0,p),d=-1;const b=[];for(;++d<i.length;){const C=i[d],w=s[d];c=-1;const x=[];for(;++c<u;){const A=C[c]||"";let S="",F="";if(n.alignDelimiters!==!1){const N=l[c]-(w[c]||0),y=o[c];y===114?S=" ".repeat(N):y===99?N%2?(S=" ".repeat(N/2+.5),F=" ".repeat(N/2-.5)):(S=" ".repeat(N/2),F=S):F=" ".repeat(N)}n.delimiterStart!==!1&&!c&&x.push("|"),n.padding!==!1&&!(n.alignDelimiters===!1&&A==="")&&(n.delimiterStart!==!1||c)&&x.push(" "),n.alignDelimiters!==!1&&x.push(S),x.push(A),n.alignDelimiters!==!1&&x.push(F),n.padding!==!1&&x.push(" "),(n.delimiterEnd!==!1||c!==u-1)&&x.push("|")}b.push(n.delimiterEnd===!1?x.join("").replace(/ +$/,""):x.join(""))}return b.join(`
`)}function Oc(e){return e==null?"":String(e)}function Cr(e){const t=typeof e=="string"?e.codePointAt(0):0;return t===67||t===99?99:t===76||t===108?108:t===82||t===114?114:0}function jc(e,t,n,r){const a=n.enter("blockquote"),o=n.createTracker(r);o.move("> "),o.shift(2);const i=n.indentLines(n.containerFlow(e,o.current()),Rc);return a(),i}function Rc(e,t,n){return">"+(n?"":" ")+e}function Mc(e,t){return wr(e,t.inConstruct,!0)&&!wr(e,t.notInConstruct,!1)}function wr(e,t,n){if(typeof t=="string"&&(t=[t]),!t||t.length===0)return n;let r=-1;for(;++r<t.length;)if(e.includes(t[r]))return!0;return!1}function Sr(e,t,n,r){let a=-1;for(;++a<n.unsafe.length;)if(n.unsafe[a].character===`
`&&Mc(n.stack,n.unsafe[a]))return/[ \t]/.test(r.before)?"":" ";return`\\
`}function Nc(e,t){const n=String(e);let r=n.indexOf(t),a=r,o=0,i=0;if(typeof t!="string")throw new TypeError("Expected substring");for(;r!==-1;)r===a?++o>i&&(i=o):o=1,a=r+t.length,r=n.indexOf(t,a);return i}function Tc(e,t){return!!(t.options.fences===!1&&e.value&&!e.lang&&/[^ \r\n]/.test(e.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value))}function zc(e){const t=e.options.fence||"`";if(t!=="`"&&t!=="~")throw new Error("Cannot serialize code with `"+t+"` for `options.fence`, expected `` ` `` or `~`");return t}function Fc(e,t,n,r){const a=zc(n),o=e.value||"",i=a==="`"?"GraveAccent":"Tilde";if(Tc(e,n)){const c=n.enter("codeIndented"),f=n.indentLines(o,qc);return c(),f}const s=n.createTracker(r),l=a.repeat(Math.max(Nc(o,a)+1,3)),u=n.enter("codeFenced");let d=s.move(l);if(e.lang){const c=n.enter(`codeFencedLang${i}`);d+=s.move(n.safe(e.lang,{before:d,after:" ",encode:["`"],...s.current()})),c()}if(e.lang&&e.meta){const c=n.enter(`codeFencedMeta${i}`);d+=s.move(" "),d+=s.move(n.safe(e.meta,{before:d,after:`
`,encode:["`"],...s.current()})),c()}return d+=s.move(`
`),o&&(d+=s.move(o+`
`)),d+=s.move(l),u(),d}function qc(e,t,n){return(n?"":"    ")+e}function wt(e){const t=e.options.quote||'"';if(t!=='"'&&t!=="'")throw new Error("Cannot serialize title with `"+t+"` for `options.quote`, expected `\"`, or `'`");return t}function Dc(e,t,n,r){const a=wt(n),o=a==='"'?"Quote":"Apostrophe",i=n.enter("definition");let s=n.enter("label");const l=n.createTracker(r);let u=l.move("[");return u+=l.move(n.safe(n.associationId(e),{before:u,after:"]",...l.current()})),u+=l.move("]: "),s(),!e.url||/[\0- \u007F]/.test(e.url)?(s=n.enter("destinationLiteral"),u+=l.move("<"),u+=l.move(n.safe(e.url,{before:u,after:">",...l.current()})),u+=l.move(">")):(s=n.enter("destinationRaw"),u+=l.move(n.safe(e.url,{before:u,after:e.title?" ":`
`,...l.current()}))),s(),e.title&&(s=n.enter(`title${o}`),u+=l.move(" "+a),u+=l.move(n.safe(e.title,{before:u,after:a,...l.current()})),u+=l.move(a),s()),i(),u}function _c(e){const t=e.options.emphasis||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize emphasis with `"+t+"` for `options.emphasis`, expected `*`, or `_`");return t}function nn(e){return"&#x"+e.toString(16).toUpperCase()+";"}function vn(e,t,n){const r=De(e),a=De(t);return r===void 0?a===void 0?n==="_"?{inside:!0,outside:!0}:{inside:!1,outside:!1}:a===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:r===1?a===void 0?{inside:!1,outside:!1}:a===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:a===void 0?{inside:!1,outside:!1}:a===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}ya.peek=Bc;function ya(e,t,n,r){const a=_c(n),o=n.enter("emphasis"),i=n.createTracker(r),s=i.move(a);let l=i.move(n.containerPhrasing(e,{after:a,before:s,...i.current()}));const u=l.charCodeAt(0),d=vn(r.before.charCodeAt(r.before.length-1),u,a);d.inside&&(l=nn(u)+l.slice(1));const c=l.charCodeAt(l.length-1),f=vn(r.after.charCodeAt(0),c,a);f.inside&&(l=l.slice(0,-1)+nn(c));const p=i.move(a);return o(),n.attentionEncodeSurroundingInfo={after:f.outside,before:d.outside},s+l+p}function Bc(e,t,n){return n.options.emphasis||"*"}function Lc(e,t){let n=!1;return kt(e,function(r){if("value"in r&&/\r?\n|\r/.test(r.value)||r.type==="break")return n=!0,tt}),!!((!e.depth||e.depth<3)&&ft(e)&&(t.options.setext||n))}function Vc(e,t,n,r){const a=Math.max(Math.min(6,e.depth||1),1),o=n.createTracker(r);if(Lc(e,n)){const d=n.enter("headingSetext"),c=n.enter("phrasing"),f=n.containerPhrasing(e,{...o.current(),before:`
`,after:`
`});return c(),d(),f+`
`+(a===1?"=":"-").repeat(f.length-(Math.max(f.lastIndexOf("\r"),f.lastIndexOf(`
`))+1))}const i="#".repeat(a),s=n.enter("headingAtx"),l=n.enter("phrasing");o.move(i+" ");let u=n.containerPhrasing(e,{before:"# ",after:`
`,...o.current()});return/^[\t ]/.test(u)&&(u=nn(u.charCodeAt(0))+u.slice(1)),u=u?i+" "+u:i,n.options.closeAtx&&(u+=" "+i),l(),s(),u}ka.peek=Uc;function ka(e){return e.value||""}function Uc(){return"<"}Ca.peek=$c;function Ca(e,t,n,r){const a=wt(n),o=a==='"'?"Quote":"Apostrophe",i=n.enter("image");let s=n.enter("label");const l=n.createTracker(r);let u=l.move("![");return u+=l.move(n.safe(e.alt,{before:u,after:"]",...l.current()})),u+=l.move("]("),s(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(s=n.enter("destinationLiteral"),u+=l.move("<"),u+=l.move(n.safe(e.url,{before:u,after:">",...l.current()})),u+=l.move(">")):(s=n.enter("destinationRaw"),u+=l.move(n.safe(e.url,{before:u,after:e.title?" ":")",...l.current()}))),s(),e.title&&(s=n.enter(`title${o}`),u+=l.move(" "+a),u+=l.move(n.safe(e.title,{before:u,after:a,...l.current()})),u+=l.move(a),s()),u+=l.move(")"),i(),u}function $c(){return"!"}wa.peek=Gc;function wa(e,t,n,r){const a=e.referenceType,o=n.enter("imageReference");let i=n.enter("label");const s=n.createTracker(r);let l=s.move("![");const u=n.safe(e.alt,{before:l,after:"]",...s.current()});l+=s.move(u+"]["),i();const d=n.stack;n.stack=[],i=n.enter("reference");const c=n.safe(n.associationId(e),{before:l,after:"]",...s.current()});return i(),n.stack=d,o(),a==="full"||!u||u!==c?l+=s.move(c+"]"):a==="shortcut"?l=l.slice(0,-1):l+=s.move("]"),l}function Gc(){return"!"}Sa.peek=Hc;function Sa(e,t,n){let r=e.value||"",a="`",o=-1;for(;new RegExp("(^|[^`])"+a+"([^`]|$)").test(r);)a+="`";for(/[^ \r\n]/.test(r)&&(/^[ \r\n]/.test(r)&&/[ \r\n]$/.test(r)||/^`|`$/.test(r))&&(r=" "+r+" ");++o<n.unsafe.length;){const i=n.unsafe[o],s=n.compilePattern(i);let l;if(i.atBreak)for(;l=s.exec(r);){let u=l.index;r.charCodeAt(u)===10&&r.charCodeAt(u-1)===13&&u--,r=r.slice(0,u)+" "+r.slice(l.index+1)}}return a+r+a}function Hc(){return"`"}function Ea(e,t){const n=ft(e);return!!(!t.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type==="text"&&(n===e.url||"mailto:"+n===e.url)&&/^[a-z][a-z+.-]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}Aa.peek=Wc;function Aa(e,t,n,r){const a=wt(n),o=a==='"'?"Quote":"Apostrophe",i=n.createTracker(r);let s,l;if(Ea(e,n)){const d=n.stack;n.stack=[],s=n.enter("autolink");let c=i.move("<");return c+=i.move(n.containerPhrasing(e,{before:c,after:">",...i.current()})),c+=i.move(">"),s(),n.stack=d,c}s=n.enter("link"),l=n.enter("label");let u=i.move("[");return u+=i.move(n.containerPhrasing(e,{before:u,after:"](",...i.current()})),u+=i.move("]("),l(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(l=n.enter("destinationLiteral"),u+=i.move("<"),u+=i.move(n.safe(e.url,{before:u,after:">",...i.current()})),u+=i.move(">")):(l=n.enter("destinationRaw"),u+=i.move(n.safe(e.url,{before:u,after:e.title?" ":")",...i.current()}))),l(),e.title&&(l=n.enter(`title${o}`),u+=i.move(" "+a),u+=i.move(n.safe(e.title,{before:u,after:a,...i.current()})),u+=i.move(a),l()),u+=i.move(")"),s(),u}function Wc(e,t,n){return Ea(e,n)?"<":"["}Ia.peek=Kc;function Ia(e,t,n,r){const a=e.referenceType,o=n.enter("linkReference");let i=n.enter("label");const s=n.createTracker(r);let l=s.move("[");const u=n.containerPhrasing(e,{before:l,after:"]",...s.current()});l+=s.move(u+"]["),i();const d=n.stack;n.stack=[],i=n.enter("reference");const c=n.safe(n.associationId(e),{before:l,after:"]",...s.current()});return i(),n.stack=d,o(),a==="full"||!u||u!==c?l+=s.move(c+"]"):a==="shortcut"?l=l.slice(0,-1):l+=s.move("]"),l}function Kc(){return"["}function St(e){const t=e.options.bullet||"*";if(t!=="*"&&t!=="+"&&t!=="-")throw new Error("Cannot serialize items with `"+t+"` for `options.bullet`, expected `*`, `+`, or `-`");return t}function Xc(e){const t=St(e),n=e.options.bulletOther;if(!n)return t==="*"?"-":"*";if(n!=="*"&&n!=="+"&&n!=="-")throw new Error("Cannot serialize items with `"+n+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(n===t)throw new Error("Expected `bullet` (`"+t+"`) and `bulletOther` (`"+n+"`) to be different");return n}function Qc(e){const t=e.options.bulletOrdered||".";if(t!=="."&&t!==")")throw new Error("Cannot serialize items with `"+t+"` for `options.bulletOrdered`, expected `.` or `)`");return t}function Pa(e){const t=e.options.rule||"*";if(t!=="*"&&t!=="-"&&t!=="_")throw new Error("Cannot serialize rules with `"+t+"` for `options.rule`, expected `*`, `-`, or `_`");return t}function Yc(e,t,n,r){const a=n.enter("list"),o=n.bulletCurrent;let i=e.ordered?Qc(n):St(n);const s=e.ordered?i==="."?")":".":Xc(n);let l=t&&n.bulletLastUsed?i===n.bulletLastUsed:!1;if(!e.ordered){const d=e.children?e.children[0]:void 0;if((i==="*"||i==="-")&&d&&(!d.children||!d.children[0])&&n.stack[n.stack.length-1]==="list"&&n.stack[n.stack.length-2]==="listItem"&&n.stack[n.stack.length-3]==="list"&&n.stack[n.stack.length-4]==="listItem"&&n.indexStack[n.indexStack.length-1]===0&&n.indexStack[n.indexStack.length-2]===0&&n.indexStack[n.indexStack.length-3]===0&&(l=!0),Pa(n)===i&&d){let c=-1;for(;++c<e.children.length;){const f=e.children[c];if(f&&f.type==="listItem"&&f.children&&f.children[0]&&f.children[0].type==="thematicBreak"){l=!0;break}}}}l&&(i=s),n.bulletCurrent=i;const u=n.containerFlow(e,r);return n.bulletLastUsed=i,n.bulletCurrent=o,a(),u}function Jc(e){const t=e.options.listItemIndent||"one";if(t!=="tab"&&t!=="one"&&t!=="mixed")throw new Error("Cannot serialize items with `"+t+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return t}function Zc(e,t,n,r){const a=Jc(n);let o=n.bulletCurrent||St(n);t&&t.type==="list"&&t.ordered&&(o=(typeof t.start=="number"&&t.start>-1?t.start:1)+(n.options.incrementListMarker===!1?0:t.children.indexOf(e))+o);let i=o.length+1;(a==="tab"||a==="mixed"&&(t&&t.type==="list"&&t.spread||e.spread))&&(i=Math.ceil(i/4)*4);const s=n.createTracker(r);s.move(o+" ".repeat(i-o.length)),s.shift(i);const l=n.enter("listItem"),u=n.indentLines(n.containerFlow(e,s.current()),d);return l(),u;function d(c,f,p){return f?(p?"":" ".repeat(i))+c:(p?o:o+" ".repeat(i-o.length))+c}}function ed(e,t,n,r){const a=n.enter("paragraph"),o=n.enter("phrasing"),i=n.containerPhrasing(e,r);return o(),a(),i}const nd=En(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function td(e,t,n,r){return(e.children.some(function(i){return nd(i)})?n.containerPhrasing:n.containerFlow).call(n,e,r)}function rd(e){const t=e.options.strong||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize strong with `"+t+"` for `options.strong`, expected `*`, or `_`");return t}Oa.peek=ad;function Oa(e,t,n,r){const a=rd(n),o=n.enter("strong"),i=n.createTracker(r),s=i.move(a+a);let l=i.move(n.containerPhrasing(e,{after:a,before:s,...i.current()}));const u=l.charCodeAt(0),d=vn(r.before.charCodeAt(r.before.length-1),u,a);d.inside&&(l=nn(u)+l.slice(1));const c=l.charCodeAt(l.length-1),f=vn(r.after.charCodeAt(0),c,a);f.inside&&(l=l.slice(0,-1)+nn(c));const p=i.move(a+a);return o(),n.attentionEncodeSurroundingInfo={after:f.outside,before:d.outside},s+l+p}function ad(e,t,n){return n.options.strong||"*"}function id(e,t,n,r){return n.safe(e.value,r)}function od(e){const t=e.options.ruleRepetition||3;if(t<3)throw new Error("Cannot serialize rules with repetition `"+t+"` for `options.ruleRepetition`, expected `3` or more");return t}function sd(e,t,n){const r=(Pa(n)+(n.options.ruleSpaces?" ":"")).repeat(od(n));return n.options.ruleSpaces?r.slice(0,-1):r}const ja={blockquote:jc,break:Sr,code:Fc,definition:Dc,emphasis:ya,hardBreak:Sr,heading:Vc,html:ka,image:Ca,imageReference:wa,inlineCode:Sa,link:Aa,linkReference:Ia,list:Yc,listItem:Zc,paragraph:ed,root:td,strong:Oa,text:id,thematicBreak:sd};function ld(){return{enter:{table:ud,tableData:Er,tableHeader:Er,tableRow:dd},exit:{codeText:md,table:cd,tableData:Kn,tableHeader:Kn,tableRow:Kn}}}function ud(e){const t=e._align;this.enter({type:"table",align:t.map(function(n){return n==="none"?null:n}),children:[]},e),this.data.inTable=!0}function cd(e){this.exit(e),this.data.inTable=void 0}function dd(e){this.enter({type:"tableRow",children:[]},e)}function Kn(e){this.exit(e)}function Er(e){this.enter({type:"tableCell",children:[]},e)}function md(e){let t=this.resume();this.data.inTable&&(t=t.replace(/\\([\\|])/g,pd));const n=this.stack[this.stack.length-1];n.type,n.value=t,this.exit(e)}function pd(e,t){return t==="|"?t:e}function fd(e){const t=e||{},n=t.tableCellPadding,r=t.tablePipeAlign,a=t.stringLength,o=n?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:f,table:i,tableCell:l,tableRow:s}};function i(p,b,C,w){return u(d(p,C,w),p.align)}function s(p,b,C,w){const x=c(p,C,w),A=u([x]);return A.slice(0,A.indexOf(`
`))}function l(p,b,C,w){const x=C.enter("tableCell"),A=C.enter("phrasing"),S=C.containerPhrasing(p,{...w,before:o,after:o});return A(),x(),S}function u(p,b){return Pc(p,{align:b,alignDelimiters:r,padding:n,stringLength:a})}function d(p,b,C){const w=p.children;let x=-1;const A=[],S=b.enter("table");for(;++x<w.length;)A[x]=c(w[x],b,C);return S(),A}function c(p,b,C){const w=p.children;let x=-1;const A=[],S=b.enter("tableRow");for(;++x<w.length;)A[x]=l(w[x],p,b,C);return S(),A}function f(p,b,C){let w=ja.inlineCode(p,b,C);return C.stack.includes("tableCell")&&(w=w.replace(/\|/g,"\\$&")),w}}function hd(){return{exit:{taskListCheckValueChecked:Ar,taskListCheckValueUnchecked:Ar,paragraph:bd}}}function gd(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:xd}}}function Ar(e){const t=this.stack[this.stack.length-2];t.type,t.checked=e.type==="taskListCheckValueChecked"}function bd(e){const t=this.stack[this.stack.length-2];if(t&&t.type==="listItem"&&typeof t.checked=="boolean"){const n=this.stack[this.stack.length-1];n.type;const r=n.children[0];if(r&&r.type==="text"){const a=t.children;let o=-1,i;for(;++o<a.length;){const s=a[o];if(s.type==="paragraph"){i=s;break}}i===n&&(r.value=r.value.slice(1),r.value.length===0?n.children.shift():n.position&&r.position&&typeof r.position.start.offset=="number"&&(r.position.start.column++,r.position.start.offset++,n.position.start=Object.assign({},r.position.start)))}}this.exit(e)}function xd(e,t,n,r){const a=e.children[0],o=typeof e.checked=="boolean"&&a&&a.type==="paragraph",i="["+(e.checked?"x":" ")+"] ",s=n.createTracker(r);o&&s.move(i);let l=ja.listItem(e,t,n,{...r,...s.current()});return o&&(l=l.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,u)),l;function u(d){return d+i}}function vd(){return[Yu(),xc(),Cc(),ld(),hd()]}function yd(e){return{extensions:[Ju(),vc(e),wc(),fd(e),gd()]}}const kd={tokenize:Id,partial:!0},Ra={tokenize:Pd,partial:!0},Ma={tokenize:Od,partial:!0},Na={tokenize:jd,partial:!0},Cd={tokenize:Rd,partial:!0},Ta={name:"wwwAutolink",tokenize:Ed,previous:Fa},za={name:"protocolAutolink",tokenize:Ad,previous:qa},ve={name:"emailAutolink",tokenize:Sd,previous:Da},pe={};function wd(){return{text:pe}}let Ie=48;for(;Ie<123;)pe[Ie]=ve,Ie++,Ie===58?Ie=65:Ie===91&&(Ie=97);pe[43]=ve;pe[45]=ve;pe[46]=ve;pe[95]=ve;pe[72]=[ve,za];pe[104]=[ve,za];pe[87]=[ve,Ta];pe[119]=[ve,Ta];function Sd(e,t,n){const r=this;let a,o;return i;function i(c){return!ot(c)||!Da.call(r,r.previous)||Et(r.events)?n(c):(e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),s(c))}function s(c){return ot(c)?(e.consume(c),s):c===64?(e.consume(c),l):n(c)}function l(c){return c===46?e.check(Cd,d,u)(c):c===45||c===95||Y(c)?(o=!0,e.consume(c),l):d(c)}function u(c){return e.consume(c),a=!0,l}function d(c){return o&&a&&ee(r.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),t(c)):n(c)}}function Ed(e,t,n){const r=this;return a;function a(i){return i!==87&&i!==119||!Fa.call(r,r.previous)||Et(r.events)?n(i):(e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(kd,e.attempt(Ra,e.attempt(Ma,o),n),n)(i))}function o(i){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),t(i)}}function Ad(e,t,n){const r=this;let a="",o=!1;return i;function i(c){return(c===72||c===104)&&qa.call(r,r.previous)&&!Et(r.events)?(e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),a+=String.fromCodePoint(c),e.consume(c),s):n(c)}function s(c){if(ee(c)&&a.length<5)return a+=String.fromCodePoint(c),e.consume(c),s;if(c===58){const f=a.toLowerCase();if(f==="http"||f==="https")return e.consume(c),l}return n(c)}function l(c){return c===47?(e.consume(c),o?u:(o=!0,l)):n(c)}function u(c){return c===null||bn(c)||W(c)||Re(c)||Cn(c)?n(c):e.attempt(Ra,e.attempt(Ma,d),n)(c)}function d(c){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),t(c)}}function Id(e,t,n){let r=0;return a;function a(i){return(i===87||i===119)&&r<3?(r++,e.consume(i),a):i===46&&r===3?(e.consume(i),o):n(i)}function o(i){return i===null?n(i):t(i)}}function Pd(e,t,n){let r,a,o;return i;function i(u){return u===46||u===95?e.check(Na,l,s)(u):u===null||W(u)||Re(u)||u!==45&&Cn(u)?l(u):(o=!0,e.consume(u),i)}function s(u){return u===95?r=!0:(a=r,r=void 0),e.consume(u),i}function l(u){return a||r||!o?n(u):t(u)}}function Od(e,t){let n=0,r=0;return a;function a(i){return i===40?(n++,e.consume(i),a):i===41&&r<n?o(i):i===33||i===34||i===38||i===39||i===41||i===42||i===44||i===46||i===58||i===59||i===60||i===63||i===93||i===95||i===126?e.check(Na,t,o)(i):i===null||W(i)||Re(i)?t(i):(e.consume(i),a)}function o(i){return i===41&&r++,e.consume(i),a}}function jd(e,t,n){return r;function r(s){return s===33||s===34||s===39||s===41||s===42||s===44||s===46||s===58||s===59||s===63||s===95||s===126?(e.consume(s),r):s===38?(e.consume(s),o):s===93?(e.consume(s),a):s===60||s===null||W(s)||Re(s)?t(s):n(s)}function a(s){return s===null||s===40||s===91||W(s)||Re(s)?t(s):r(s)}function o(s){return ee(s)?i(s):n(s)}function i(s){return s===59?(e.consume(s),r):ee(s)?(e.consume(s),i):n(s)}}function Rd(e,t,n){return r;function r(o){return e.consume(o),a}function a(o){return Y(o)?n(o):t(o)}}function Fa(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||W(e)}function qa(e){return!ee(e)}function Da(e){return!(e===47||ot(e))}function ot(e){return e===43||e===45||e===46||e===95||Y(e)}function Et(e){let t=e.length,n=!1;for(;t--;){const r=e[t][1];if((r.type==="labelLink"||r.type==="labelImage")&&!r._balanced){n=!0;break}if(r._gfmAutolinkLiteralWalkedInto){n=!1;break}}return e.length>0&&!n&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),n}const Md={tokenize:Bd,partial:!0};function Nd(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:qd,continuation:{tokenize:Dd},exit:_d}},text:{91:{name:"gfmFootnoteCall",tokenize:Fd},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:Td,resolveTo:zd}}}}function Td(e,t,n){const r=this;let a=r.events.length;const o=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let i;for(;a--;){const l=r.events[a][1];if(l.type==="labelImage"){i=l;break}if(l.type==="gfmFootnoteCall"||l.type==="labelLink"||l.type==="label"||l.type==="image"||l.type==="link")break}return s;function s(l){if(!i||!i._balanced)return n(l);const u=de(r.sliceSerialize({start:i.end,end:r.now()}));return u.codePointAt(0)!==94||!o.includes(u.slice(1))?n(l):(e.enter("gfmFootnoteCallLabelMarker"),e.consume(l),e.exit("gfmFootnoteCallLabelMarker"),t(l))}}function zd(e,t){let n=e.length;for(;n--;)if(e[n][1].type==="labelImage"&&e[n][0]==="enter"){e[n][1];break}e[n+1][1].type="data",e[n+3][1].type="gfmFootnoteCallLabelMarker";const r={type:"gfmFootnoteCall",start:Object.assign({},e[n+3][1].start),end:Object.assign({},e[e.length-1][1].end)},a={type:"gfmFootnoteCallMarker",start:Object.assign({},e[n+3][1].end),end:Object.assign({},e[n+3][1].end)};a.end.column++,a.end.offset++,a.end._bufferIndex++;const o={type:"gfmFootnoteCallString",start:Object.assign({},a.end),end:Object.assign({},e[e.length-1][1].start)},i={type:"chunkString",contentType:"string",start:Object.assign({},o.start),end:Object.assign({},o.end)},s=[e[n+1],e[n+2],["enter",r,t],e[n+3],e[n+4],["enter",a,t],["exit",a,t],["enter",o,t],["enter",i,t],["exit",i,t],["exit",o,t],e[e.length-2],e[e.length-1],["exit",r,t]];return e.splice(n,e.length-n+1,...s),e}function Fd(e,t,n){const r=this,a=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let o=0,i;return s;function s(c){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(c),e.exit("gfmFootnoteCallLabelMarker"),l}function l(c){return c!==94?n(c):(e.enter("gfmFootnoteCallMarker"),e.consume(c),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",u)}function u(c){if(o>999||c===93&&!i||c===null||c===91||W(c))return n(c);if(c===93){e.exit("chunkString");const f=e.exit("gfmFootnoteCallString");return a.includes(de(r.sliceSerialize(f)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(c),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),t):n(c)}return W(c)||(i=!0),o++,e.consume(c),c===92?d:u}function d(c){return c===91||c===92||c===93?(e.consume(c),o++,u):u(c)}}function qd(e,t,n){const r=this,a=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let o,i=0,s;return l;function l(b){return e.enter("gfmFootnoteDefinition")._container=!0,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(b),e.exit("gfmFootnoteDefinitionLabelMarker"),u}function u(b){return b===94?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(b),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",d):n(b)}function d(b){if(i>999||b===93&&!s||b===null||b===91||W(b))return n(b);if(b===93){e.exit("chunkString");const C=e.exit("gfmFootnoteDefinitionLabelString");return o=de(r.sliceSerialize(C)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(b),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),f}return W(b)||(s=!0),i++,e.consume(b),b===92?c:d}function c(b){return b===91||b===92||b===93?(e.consume(b),i++,d):d(b)}function f(b){return b===58?(e.enter("definitionMarker"),e.consume(b),e.exit("definitionMarker"),a.includes(o)||a.push(o),B(e,p,"gfmFootnoteDefinitionWhitespace")):n(b)}function p(b){return t(b)}}function Dd(e,t,n){return e.check(rn,t,e.attempt(Md,t,n))}function _d(e){e.exit("gfmFootnoteDefinition")}function Bd(e,t,n){const r=this;return B(e,a,"gfmFootnoteDefinitionIndent",5);function a(o){const i=r.events[r.events.length-1];return i&&i[1].type==="gfmFootnoteDefinitionIndent"&&i[2].sliceSerialize(i[1],!0).length===4?t(o):n(o)}}function Ld(e){let n=(e||{}).singleTilde;const r={name:"strikethrough",tokenize:o,resolveAll:a};return n==null&&(n=!0),{text:{126:r},insideSpan:{null:[r]},attentionMarkers:{null:[126]}};function a(i,s){let l=-1;for(;++l<i.length;)if(i[l][0]==="enter"&&i[l][1].type==="strikethroughSequenceTemporary"&&i[l][1]._close){let u=l;for(;u--;)if(i[u][0]==="exit"&&i[u][1].type==="strikethroughSequenceTemporary"&&i[u][1]._open&&i[l][1].end.offset-i[l][1].start.offset===i[u][1].end.offset-i[u][1].start.offset){i[l][1].type="strikethroughSequence",i[u][1].type="strikethroughSequence";const d={type:"strikethrough",start:Object.assign({},i[u][1].start),end:Object.assign({},i[l][1].end)},c={type:"strikethroughText",start:Object.assign({},i[u][1].end),end:Object.assign({},i[l][1].start)},f=[["enter",d,s],["enter",i[u][1],s],["exit",i[u][1],s],["enter",c,s]],p=s.parser.constructs.insideSpan.null;p&&ie(f,f.length,0,wn(p,i.slice(u+1,l),s)),ie(f,f.length,0,[["exit",c,s],["enter",i[l][1],s],["exit",i[l][1],s],["exit",d,s]]),ie(i,u-1,l-u+3,f),l=u+f.length-2;break}}for(l=-1;++l<i.length;)i[l][1].type==="strikethroughSequenceTemporary"&&(i[l][1].type="data");return i}function o(i,s,l){const u=this.previous,d=this.events;let c=0;return f;function f(b){return u===126&&d[d.length-1][1].type!=="characterEscape"?l(b):(i.enter("strikethroughSequenceTemporary"),p(b))}function p(b){const C=De(u);if(b===126)return c>1?l(b):(i.consume(b),c++,p);if(c<2&&!n)return l(b);const w=i.exit("strikethroughSequenceTemporary"),x=De(b);return w._open=!x||x===2&&!!C,w._close=!C||C===2&&!!x,s(b)}}}class Vd{constructor(){this.map=[]}add(t,n,r){Ud(this,t,n,r)}consume(t){if(this.map.sort(function(o,i){return o[0]-i[0]}),this.map.length===0)return;let n=this.map.length;const r=[];for(;n>0;)n-=1,r.push(t.slice(this.map[n][0]+this.map[n][1]),this.map[n][2]),t.length=this.map[n][0];r.push(t.slice()),t.length=0;let a=r.pop();for(;a;){for(const o of a)t.push(o);a=r.pop()}this.map.length=0}}function Ud(e,t,n,r){let a=0;if(!(n===0&&r.length===0)){for(;a<e.map.length;){if(e.map[a][0]===t){e.map[a][1]+=n,e.map[a][2].push(...r);return}a+=1}e.map.push([t,n,r])}}function $d(e,t){let n=!1;const r=[];for(;t<e.length;){const a=e[t];if(n){if(a[0]==="enter")a[1].type==="tableContent"&&r.push(e[t+1][1].type==="tableDelimiterMarker"?"left":"none");else if(a[1].type==="tableContent"){if(e[t-1][1].type==="tableDelimiterMarker"){const o=r.length-1;r[o]=r[o]==="left"?"center":"right"}}else if(a[1].type==="tableDelimiterRow")break}else a[0]==="enter"&&a[1].type==="tableDelimiterRow"&&(n=!0);t+=1}return r}function Gd(){return{flow:{null:{name:"table",tokenize:Hd,resolveAll:Wd}}}}function Hd(e,t,n){const r=this;let a=0,o=0,i;return s;function s(v){let O=r.events.length-1;for(;O>-1;){const M=r.events[O][1].type;if(M==="lineEnding"||M==="linePrefix")O--;else break}const j=O>-1?r.events[O][1].type:null,U=j==="tableHead"||j==="tableRow"?y:l;return U===y&&r.parser.lazy[r.now().line]?n(v):U(v)}function l(v){return e.enter("tableHead"),e.enter("tableRow"),u(v)}function u(v){return v===124||(i=!0,o+=1),d(v)}function d(v){return v===null?n(v):R(v)?o>1?(o=0,r.interrupt=!0,e.exit("tableRow"),e.enter("lineEnding"),e.consume(v),e.exit("lineEnding"),p):n(v):D(v)?B(e,d,"whitespace")(v):(o+=1,i&&(i=!1,a+=1),v===124?(e.enter("tableCellDivider"),e.consume(v),e.exit("tableCellDivider"),i=!0,d):(e.enter("data"),c(v)))}function c(v){return v===null||v===124||W(v)?(e.exit("data"),d(v)):(e.consume(v),v===92?f:c)}function f(v){return v===92||v===124?(e.consume(v),c):c(v)}function p(v){return r.interrupt=!1,r.parser.lazy[r.now().line]?n(v):(e.enter("tableDelimiterRow"),i=!1,D(v)?B(e,b,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(v):b(v))}function b(v){return v===45||v===58?w(v):v===124?(i=!0,e.enter("tableCellDivider"),e.consume(v),e.exit("tableCellDivider"),C):N(v)}function C(v){return D(v)?B(e,w,"whitespace")(v):w(v)}function w(v){return v===58?(o+=1,i=!0,e.enter("tableDelimiterMarker"),e.consume(v),e.exit("tableDelimiterMarker"),x):v===45?(o+=1,x(v)):v===null||R(v)?F(v):N(v)}function x(v){return v===45?(e.enter("tableDelimiterFiller"),A(v)):N(v)}function A(v){return v===45?(e.consume(v),A):v===58?(i=!0,e.exit("tableDelimiterFiller"),e.enter("tableDelimiterMarker"),e.consume(v),e.exit("tableDelimiterMarker"),S):(e.exit("tableDelimiterFiller"),S(v))}function S(v){return D(v)?B(e,F,"whitespace")(v):F(v)}function F(v){return v===124?b(v):v===null||R(v)?!i||a!==o?N(v):(e.exit("tableDelimiterRow"),e.exit("tableHead"),t(v)):N(v)}function N(v){return n(v)}function y(v){return e.enter("tableRow"),q(v)}function q(v){return v===124?(e.enter("tableCellDivider"),e.consume(v),e.exit("tableCellDivider"),q):v===null||R(v)?(e.exit("tableRow"),t(v)):D(v)?B(e,q,"whitespace")(v):(e.enter("data"),V(v))}function V(v){return v===null||v===124||W(v)?(e.exit("data"),q(v)):(e.consume(v),v===92?L:V)}function L(v){return v===92||v===124?(e.consume(v),V):V(v)}}function Wd(e,t){let n=-1,r=!0,a=0,o=[0,0,0,0],i=[0,0,0,0],s=!1,l=0,u,d,c;const f=new Vd;for(;++n<e.length;){const p=e[n],b=p[1];p[0]==="enter"?b.type==="tableHead"?(s=!1,l!==0&&(Ir(f,t,l,u,d),d=void 0,l=0),u={type:"table",start:Object.assign({},b.start),end:Object.assign({},b.end)},f.add(n,0,[["enter",u,t]])):b.type==="tableRow"||b.type==="tableDelimiterRow"?(r=!0,c=void 0,o=[0,0,0,0],i=[0,n+1,0,0],s&&(s=!1,d={type:"tableBody",start:Object.assign({},b.start),end:Object.assign({},b.end)},f.add(n,0,[["enter",d,t]])),a=b.type==="tableDelimiterRow"?2:d?3:1):a&&(b.type==="data"||b.type==="tableDelimiterMarker"||b.type==="tableDelimiterFiller")?(r=!1,i[2]===0&&(o[1]!==0&&(i[0]=i[1],c=mn(f,t,o,a,void 0,c),o=[0,0,0,0]),i[2]=n)):b.type==="tableCellDivider"&&(r?r=!1:(o[1]!==0&&(i[0]=i[1],c=mn(f,t,o,a,void 0,c)),o=i,i=[o[1],n,0,0])):b.type==="tableHead"?(s=!0,l=n):b.type==="tableRow"||b.type==="tableDelimiterRow"?(l=n,o[1]!==0?(i[0]=i[1],c=mn(f,t,o,a,n,c)):i[1]!==0&&(c=mn(f,t,i,a,n,c)),a=0):a&&(b.type==="data"||b.type==="tableDelimiterMarker"||b.type==="tableDelimiterFiller")&&(i[3]=n)}for(l!==0&&Ir(f,t,l,u,d),f.consume(t.events),n=-1;++n<t.events.length;){const p=t.events[n];p[0]==="enter"&&p[1].type==="table"&&(p[1]._align=$d(t.events,n))}return e}function mn(e,t,n,r,a,o){const i=r===1?"tableHeader":r===2?"tableDelimiter":"tableData",s="tableContent";n[0]!==0&&(o.end=Object.assign({},qe(t.events,n[0])),e.add(n[0],0,[["exit",o,t]]));const l=qe(t.events,n[1]);if(o={type:i,start:Object.assign({},l),end:Object.assign({},l)},e.add(n[1],0,[["enter",o,t]]),n[2]!==0){const u=qe(t.events,n[2]),d=qe(t.events,n[3]),c={type:s,start:Object.assign({},u),end:Object.assign({},d)};if(e.add(n[2],0,[["enter",c,t]]),r!==2){const f=t.events[n[2]],p=t.events[n[3]];if(f[1].end=Object.assign({},p[1].end),f[1].type="chunkText",f[1].contentType="text",n[3]>n[2]+1){const b=n[2]+1,C=n[3]-n[2]-1;e.add(b,C,[])}}e.add(n[3]+1,0,[["exit",c,t]])}return a!==void 0&&(o.end=Object.assign({},qe(t.events,a)),e.add(a,0,[["exit",o,t]]),o=void 0),o}function Ir(e,t,n,r,a){const o=[],i=qe(t.events,n);a&&(a.end=Object.assign({},i),o.push(["exit",a,t])),r.end=Object.assign({},i),o.push(["exit",r,t]),e.add(n+1,0,o)}function qe(e,t){const n=e[t],r=n[0]==="enter"?"start":"end";return n[1][r]}const Kd={name:"tasklistCheck",tokenize:Qd};function Xd(){return{text:{91:Kd}}}function Qd(e,t,n){const r=this;return a;function a(l){return r.previous!==null||!r._gfmTasklistFirstContentOfListItem?n(l):(e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(l),e.exit("taskListCheckMarker"),o)}function o(l){return W(l)?(e.enter("taskListCheckValueUnchecked"),e.consume(l),e.exit("taskListCheckValueUnchecked"),i):l===88||l===120?(e.enter("taskListCheckValueChecked"),e.consume(l),e.exit("taskListCheckValueChecked"),i):n(l)}function i(l){return l===93?(e.enter("taskListCheckMarker"),e.consume(l),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),s):n(l)}function s(l){return R(l)?t(l):D(l)?e.check({tokenize:Yd},t,n)(l):n(l)}}function Yd(e,t,n){return B(e,r,"whitespace");function r(a){return a===null?n(a):t(a)}}function Jd(e){return Kr([wd(),Nd(),Ld(e),Gd(),Xd()])}const Zd={};function em(e){const t=this,n=e||Zd,r=t.data(),a=r.micromarkExtensions||(r.micromarkExtensions=[]),o=r.fromMarkdownExtensions||(r.fromMarkdownExtensions=[]),i=r.toMarkdownExtensions||(r.toMarkdownExtensions=[]);a.push(Jd(n)),o.push(vd()),i.push(yd(n))}const Pe=["ariaDescribedBy","ariaLabel","ariaLabelledBy"],Pr={ancestors:{tbody:["table"],td:["table"],th:["table"],thead:["table"],tfoot:["table"],tr:["table"]},attributes:{a:[...Pe,"dataFootnoteBackref","dataFootnoteRef",["className","data-footnote-backref"],"href"],blockquote:["cite"],code:[["className",/^language-./]],del:["cite"],div:["itemScope","itemType"],dl:[...Pe],h2:[["className","sr-only"]],img:[...Pe,"longDesc","src"],input:[["disabled",!0],["type","checkbox"]],ins:["cite"],li:[["className","task-list-item"]],ol:[...Pe,["className","contains-task-list"]],q:["cite"],section:["dataFootnotes",["className","footnotes"]],source:["srcSet"],summary:[...Pe],table:[...Pe],ul:[...Pe,["className","contains-task-list"]],"*":["abbr","accept","acceptCharset","accessKey","action","align","alt","axis","border","cellPadding","cellSpacing","char","charOff","charSet","checked","clear","colSpan","color","cols","compact","coords","dateTime","dir","encType","frame","hSpace","headers","height","hrefLang","htmlFor","id","isMap","itemProp","label","lang","maxLength","media","method","multiple","name","noHref","noShade","noWrap","open","prompt","readOnly","rev","rowSpan","rows","rules","scope","selected","shape","size","span","start","summary","tabIndex","title","useMap","vAlign","value","width"]},clobber:["ariaDescribedBy","ariaLabelledBy","id","name"],clobberPrefix:"user-content-",protocols:{cite:["http","https"],href:["http","https","irc","ircs","mailto","xmpp"],longDesc:["http","https"],src:["http","https"]},required:{input:{disabled:!0,type:"checkbox"}},strip:["script"],tagNames:["a","b","blockquote","br","code","dd","del","details","div","dl","dt","em","h1","h2","h3","h4","h5","h6","hr","i","img","input","ins","kbd","li","ol","p","picture","pre","q","rp","rt","ruby","s","samp","section","source","span","strike","strong","sub","summary","sup","table","tbody","td","tfoot","th","thead","tr","tt","ul","var"]},we={}.hasOwnProperty;function nm(e,t){let n={type:"root",children:[]};const r={schema:t?{...Pr,...t}:Pr,stack:[]},a=_a(r,e);return a&&(Array.isArray(a)?a.length===1?n=a[0]:n.children=a:n=a),n}function _a(e,t){if(t&&typeof t=="object"){const n=t;switch(typeof n.type=="string"?n.type:""){case"comment":return tm(e,n);case"doctype":return rm(e,n);case"element":return am(e,n);case"root":return im(e,n);case"text":return om(e,n)}}}function tm(e,t){if(e.schema.allowComments){const n=typeof t.value=="string"?t.value:"",r=n.indexOf("-->"),o={type:"comment",value:r<0?n:n.slice(0,r)};return on(o,t),o}}function rm(e,t){if(e.schema.allowDoctypes){const n={type:"doctype"};return on(n,t),n}}function am(e,t){const n=typeof t.tagName=="string"?t.tagName:"";e.stack.push(n);const r=Ba(e,t.children),a=sm(e,t.properties);e.stack.pop();let o=!1;if(n&&n!=="*"&&(!e.schema.tagNames||e.schema.tagNames.includes(n))&&(o=!0,e.schema.ancestors&&we.call(e.schema.ancestors,n))){const s=e.schema.ancestors[n];let l=-1;for(o=!1;++l<s.length;)e.stack.includes(s[l])&&(o=!0)}if(!o)return e.schema.strip&&!e.schema.strip.includes(n)?r:void 0;const i={type:"element",tagName:n,properties:a,children:r};return on(i,t),i}function im(e,t){const r={type:"root",children:Ba(e,t.children)};return on(r,t),r}function om(e,t){const r={type:"text",value:typeof t.value=="string"?t.value:""};return on(r,t),r}function Ba(e,t){const n=[];if(Array.isArray(t)){const r=t;let a=-1;for(;++a<r.length;){const o=_a(e,r[a]);o&&(Array.isArray(o)?n.push(...o):n.push(o))}}return n}function sm(e,t){const n=e.stack[e.stack.length-1],r=e.schema.attributes,a=e.schema.required,o=r&&we.call(r,n)?r[n]:void 0,i=r&&we.call(r,"*")?r["*"]:void 0,s=t&&typeof t=="object"?t:{},l={};let u;for(u in s)if(we.call(s,u)){const d=s[u];let c=Or(e,jr(o,u),u,d);c==null&&(c=Or(e,jr(i,u),u,d)),c!=null&&(l[u]=c)}if(a&&we.call(a,n)){const d=a[n];for(u in d)we.call(d,u)&&!we.call(l,u)&&(l[u]=d[u])}return l}function Or(e,t,n,r){return t?Array.isArray(r)?lm(e,t,n,r):La(e,t,n,r):void 0}function lm(e,t,n,r){let a=-1;const o=[];for(;++a<r.length;){const i=La(e,t,n,r[a]);(typeof i=="number"||typeof i=="string")&&o.push(i)}return o}function La(e,t,n,r){if(!(typeof r!="boolean"&&typeof r!="number"&&typeof r!="string")&&um(e,n,r)){if(typeof t=="object"&&t.length>1){let a=!1,o=0;for(;++o<t.length;){const i=t[o];if(i&&typeof i=="object"&&"flags"in i){if(i.test(String(r))){a=!0;break}}else if(i===r){a=!0;break}}if(!a)return}return e.schema.clobber&&e.schema.clobberPrefix&&e.schema.clobber.includes(n)?e.schema.clobberPrefix+r:r}}function um(e,t,n){const r=e.schema.protocols&&we.call(e.schema.protocols,t)?e.schema.protocols[t]:void 0;if(!r||r.length===0)return!0;const a=String(n),o=a.indexOf(":"),i=a.indexOf("?"),s=a.indexOf("#"),l=a.indexOf("/");if(o<0||l>-1&&o>l||i>-1&&o>i||s>-1&&o>s)return!0;let u=-1;for(;++u<r.length;){const d=r[u];if(o===d.length&&a.slice(0,d.length)===d)return!0}return!1}function on(e,t){const n=Vr(t);t.data&&(e.data=en(t.data)),n&&(e.position=n)}function jr(e,t){let n,r=-1;if(e)for(;++r<e.length;){const a=e[r],o=typeof a=="string"?a:a[0];if(o===t)return a;o==="data*"&&(n=a)}if(t.length>4&&t.slice(0,4).toLowerCase()==="data")return n}function cm(e){return function(t){return nm(t,e)}}const dm=e=>e.startsWith("https://")?e:"";function Va({content:e}){return m.jsx("div",{className:"markdown",children:m.jsx(Lu,{remarkPlugins:[em],rehypePlugins:[cm],urlTransform:dm,children:e})})}const Rr="./";function Ua({info:e}){const t=String(e.numero).padStart(2,"0"),n=`${Rr}ilustracoes/png/${t}-${e.slug}-final.png`,r=`${Rr}ilustracoes/svg/${t}-${e.slug}.svg`,a=`Ilustração do capítulo ${e.numero}, ${e.titulo}: ${e.tema}.`;return m.jsxs("figure",{className:"ilustracao",children:[m.jsx("img",{src:n,alt:a,loading:"lazy",width:768,height:512}),m.jsxs("figcaption",{children:["Ilustração ",e.numero," — capítulo ",e.numero," · editorial vetorial · ComfyUI · Estúdio/ECOMNIX · ",m.jsx("a",{href:r,download:!0,children:"Baixar SVG"})]})]})}const mm=[{slug:"queimadas",titulo:"Queimadas e prevenção",descricao:"Monitoramento, brigadas comunitárias e redução de incêndios florestais como fonte de emissões evitadas.",capitulo:8},{slug:"matas-ciliares",titulo:"Matas ciliares",descricao:"Restauração de áreas de preservação permanente ao longo de cursos d’água, proteção de nascentes e serviços ecossistêmicos.",capitulo:9},{slug:"reflorestamento",titulo:"Reflorestamento e desertificação",descricao:"Recuperação de áreas degradadas, combate à desertificação e remoção de carbono por restauração florestal.",capitulo:10},{slug:"economia-circular",titulo:"Economia circular urbana",descricao:"Resíduos, reciclagem inclusiva (catadores), compostagem e fechamento de ciclos materiais nas cidades.",capitulo:13},{slug:"cidades-responsivas",titulo:"Cidades responsivas",descricao:"Infraestrutura urbana de baixo carbono, mobilidade, energia e resiliência climática local.",capitulo:14}],pm=[{numero:1,parte:"Parte I — Fundamentos",titulo:"Emissões de GEE: origem e fontes"},{numero:2,parte:"Parte I — Fundamentos",titulo:"Linha do tempo climática"},{numero:3,parte:"Parte I — Fundamentos",titulo:"Consequências"},{numero:4,parte:"Parte I — Fundamentos",titulo:"Por que mitigar compensa"},{numero:5,parte:"Parte II — O mercado",titulo:"Como funciona um crédito de carbono (regulado/voluntário, MRV, SBCE)"},{numero:6,parte:"Parte II — O mercado",titulo:"Diagnóstico de assimetria"},{numero:7,parte:"Parte II — O mercado",titulo:"O paradoxo da conservação"},{numero:8,parte:"Parte III — Eixos de atuação",titulo:"Biomas: Caatinga e Cerrado"},{numero:9,parte:"Parte III — Eixos de atuação",titulo:"Matas ciliares"},{numero:10,parte:"Parte III — Eixos de atuação",titulo:"Reflorestamento e desertificação"},{numero:11,parte:"Parte III — Eixos de atuação",titulo:"Monitoramento tecnológico"},{numero:12,parte:"Parte III — Eixos de atuação",titulo:"Ciência aplicada"},{numero:13,parte:"Parte III — Eixos de atuação",titulo:"Economia circular urbana"},{numero:14,parte:"Parte III — Eixos de atuação",titulo:"Cidades responsivas"},{numero:15,parte:"Parte III — Eixos de atuação",titulo:"Crédito de carbono individual"},{numero:16,parte:"Parte III — Eixos de atuação",titulo:"Modelos de financiamento"},{numero:17,parte:"Parte IV — Ferramentas",titulo:"Calculadora de pegada gamificada"},{numero:18,parte:"Parte IV — Ferramentas",titulo:"Simulador de acúmulo/resgate"},{numero:19,parte:"Parte IV — Ferramentas",titulo:"Conceito de app móvel/smartwatch"},{numero:20,parte:"Fechamento",titulo:"Estatísticas consolidadas por eixo"},{numero:21,parte:"Fechamento",titulo:"Chamada à ação institucional"}],fm=`# Capítulo 1 — O que são as emissões de gases de efeito estufa

> **Registro técnico:** acessível ao público amplo, com camada de método para o leitor
> especializado. Fontes primárias citadas ao final. Versão 1.0 (rascunho, gate F0).

## 1.1 O efeito estufa como um orçamento, não como um "vilão"

A atmosfera da Terra contém gases que retêm parte do calor irradiado pela superfície —
o **efeito estufa natural**. Sem ele, a temperatura média do planeta seria cerca de
−18 °C, incompatível com a vida como a conhecemos. O problema não é o efeito estufa em
si, mas o **excesso**: a atividade humana vem adicionando, à atmosfera, uma quantidade
de gases que desequilibra esse balanço energético.

A metáfora mais precisa para o leitor não-especialista é a de um **orçamento de carbono**:
a atmosfera suporta um estoque finito de gases de efeito estufa (GEE) antes que o
aquecimento ultrapasse um limite de risco. Emitir mais do que esse orçamento permite é
como gastar além da conta — com uma diferença cruel: a "dívida" climática leva décadas
para se manifestar e séculos para ser revertida (ver Capítulo 2).

## 1.2 Quais são os gases e por que se fala em "CO₂ equivalente"

Nem todo gás aquece igual. Para comparar emissões de naturezas diferentes, usa-se o
**potencial de aquecimento global (GWP)** — quanto calor cada gás retém em relação ao
CO₂, num horizonte de 100 anos:

| Gás | Sigla | Fontes principais | GWP (100 anos) |
|---|---|---|---|
| Dióxido de carbono | CO₂ | Combustíveis fósseis, desmatamento, processos industriais | 1 (referência) |
| Metano | CH₄ | Pecuária (fermentação entérica), arrozais, aterros, extração de gás | ≈ 28× |
| Óxido nitroso | N₂O | Fertilizantes nitrogenados, queima de biomassa | ≈ 265× |
| Gases fluorados | HFCs, PFCs, SF₆, NF₃ | Refrigeração, ar-condicionado, indústria elétrica | centenas a dezenas de milhares × |

A unidade **tCO₂e** (tonelada de dióxido de carbono equivalente) converte todos os gases
para o "poder de aquecimento" do CO₂, permitindo somar e comparar. Os valores de GWP
seguem o Painel Intergovernamental sobre Mudanças Climáticas (IPCC), usado nos
inventários nacionais.

## 1.3 As cinco grandes fontes (setores emissores)

O sistema de contabilidade brasileiro — o **SEEG** (Sistema de Estimativas de Emissões e
Remoções de Gases de Efeito Estufa), do Observatório do Clima — organiza as emissões em
cinco setores:

1. **Mudança de uso da terra e florestas** — desmatamento e queimadas que convertem
   floresta em pasto ou lavoura, liberando o carbono armazenado na vegetação e no solo.
2. **Agropecuária** — fermentação entérica do rebanho bovino (metano), manejo de solos e
   fertilizantes (N₂O), queima de resíduos agrícolas.
3. **Energia** — geração de eletricidade a partir de fósseis, transporte (gasolina,
   diesel, querosene de aviação), uso industrial de combustíveis.
4. **Processos industriais e uso de produtos** — cimento, siderurgia, química.
5. **Resíduos** — decomposição de resíduos sólidos em aterros/lixões (metano) e
   tratamento de efluentes.

## 1.4 O caso brasileiro: um perfil incomum no mundo

Em escala global, a queima de combustíveis fósseis para **energia e transporte** domina
as emissões (cerca de três quartos do CO₂ global). O Brasil é uma exceção estrutural:

- Em **2023**, o Brasil emitiu cerca de **2,3 bilhões de toneladas de CO₂e**, uma queda
  de **12%** em relação a 2022 — puxada sobretudo pela redução do desmatamento na
  Amazônia (fonte: SEEG/Observatório do Clima).
- A **mudança de uso da terra** respondeu pela maior fatia das emissões brutas em 2023
  (**46%**), seguida da **agropecuária** (**28%**). Energia, processos industriais e
  resíduos completam o restante (SEEG 2023).

Isso tem uma consequência estratégica decisiva para este livro: **no Brasil, o maior
potencial de redução de emissões não está em trocar a matriz elétrica (já majoritariamente
renovável), mas em mudar a forma como o território é usado e como a agropecuária é
conduzida.** É exatamente nesse terreno que atuam os créditos de carbono e as soluções
da Parte III.

## 1.5 Por que isso importa para a justiça climática

A distribuição das fontes de emissão não é socialmente neutra. Grandes desmatadores e
grandes pecuaristas emitem muito e, em geral, têm acesso a capital e tecnologia; quem
historicamente preservou a vegetação nativa — povos indígenas, quilombolas, agricultores
familiares — emite pouco e frequentemente fica **fora** dos mecanismos de compensação.
Esse descompasso entre "quem emite" e "quem conserva" é o fio condutor que liga este
capítulo ao diagnóstico da Parte II.

## Fontes citadas

1. **SEEG / Observatório do Clima** — "Gases de Efeito Estufa em 2023" (emissões totais,
   queda de 12%, participação setorial). Disponível em: https://seeg.eco.br e
   https://energiaeambiente.org.br/produto/emissoesdegasesdeefeitoestufaem2023 (acesso
   jun/2026).
2. **IPCC AR6 (WGI)** — base científica do efeito estufa e valores de GWP.
3. **MCTI — Inventário Nacional de GEE** — contabilidade oficial brasileira (referência
   metodológica complementar ao SEEG).

> **Nota de verificação:** os números deste capítulo foram checados contra as fontes
> primárias em jun/2026. Valores de GWP seguem a convenção de inventário (IPCC AR5,
> usada nos relatórios nacionais); o IPCC AR6 atualiza ligeiramente alguns valores, o
> que não altera a ordem de grandeza nem o argumento.
`,hm=`# Capítulo 2 — A linha do tempo climática: por que a ação política chega tarde

> **Registro:** rascunho v1.0. Fontes verificadas em 29/08/2026 (dossiê
> \`dossiers/dossie_clima_parte1.md\`, Agente Clima). Base física: IPCC AR6.

## 2.1 O aquecimento já medido

O aquecimento causado por atividades humanas já é de **~1,1 °C em relação a 1850–1900**,
e o limite de **1,5 °C** deve ser atingido no início dos anos 2030 (IPCC AR6; WMO). Este
capítulo não discute *se* o clima muda — discute *por que* a resposta humana é tão lenta
diante de uma mudança tão bem documentada.

## 2.2 O CO₂ fica: o tempo de residência

A causa do atraso começa na física do carbono. Um pulso de CO₂ emitido hoje não
desaparece amanhã: **15–40% permanece na atmosfera por mais de 1.000 anos, e 10–25% por
cerca de 10.000 anos** (IPCC AR6 WG1, Cap. 5). Ou seja, a emissão de agora é uma
"dívida" climática que se paga por milênios — muito além de qualquer horizonte eleitoral.

## 2.3 A inércia térmica do oceano

O oceano absorve a maior parte do calor em excesso, funcionando como um amortecedor que
**atrasa** a resposta da temperatura da superfície. Mesmo depois de emissões líquidas
zero, o oceano profundo continua a aquecer — é o chamado **Zero Emissions Commitment
(ZEC)** (Palazzo Corner et al., 2023). O sistema climático, em outras palavras, tem
"memória": o que emitimos hoje só se manifesta plenamente em décadas.

## 2.4 Mudanças irreversíveis

Muitas alterações em oceanos, mantos de gelo e nível do mar são **irreversíveis por
séculos a milênios** (IPCC AR6 Synthesis). Para várias consequências, não há "volta" no
tempo de uma geração — há apenas a escolha de **quão pior** será o ponto de chegada.

## 2.5 A desconexão temporal e o desafio político

A consequência prática desses três fatos físicos é o cerne deste capítulo: existe uma
**desconexão temporal** entre a causa (emitir agora) e o efeito pleno (aquecimento
distribuído por décadas e séculos). O custo da inação é **invisível no horizonte
político** — o eleitor não sente hoje o dano da emissão de hoje, então o incentivo para
agir é estruturalmente fraco.

É por isso que este livro insiste em instrumentos **econômicos** (Parte III): eles
traduzem um custo distante e difuso em um preço presente e concreto — o que a política
sozinha não consegue fazer.

## Fontes citadas

1. IPCC AR6 WG1 (2021), The Physical Science Basis. DOI: 10.1017/9781009157896
2. IPCC AR6 Synthesis Report (2023) — SPM. DOI: 10.1017/9781009157940
3. Palazzo Corner, S. et al. (2023), The Zero Emissions Commitment. Front. Sci. 1:1170744. DOI: 10.3389/fsci.2023.1170744
4. WMO — Climate change widespread, rapid and intensifying. https://wmo.int/news/media-centre/climate-change-widespread-rapid-and-intensifying-ipcc
5. Carbon Brief — In-depth Q&A: IPCC AR6. https://www.carbonbrief.org/in-depth-qa-the-ipccs-sixth-assessment-report-on-climate-science
`,gm=`# Capítulo 3 — Consequências: o que o aquecimento já faz e fará

> **Registro:** rascunho v1.0. Fontes verificadas em 29/08/2026 (dossiê
> \`dossiers/dossie_clima_parte1.md\`). Base: IPCC AR6 WG2 + Synthesis Report.

## 3.1 Segurança alimentar e hídrica

Os eventos extremos já reduziram a **segurança alimentar e hídrica**, expondo **milhões
de pessoas à insegurança alimentar aguda**, com os maiores impactos na América do Sul,
África e Ásia (IPCC AR6 WG2). Aproximadamente **metade da população mundial** já sofre
escassez hídrica severa em parte do ano — combinação de fatores climáticos e não
climáticos (IPCC AR6 Synthesis).

## 3.2 Biodiversidade sob risco

O aquecimento de curto prazo e o aumento de extremos colocam ecossistemas terrestres,
de água doce, costeiros e marinhos em **risco alto a muito alto de perda de
biodiversidade** (IPCC AR6 WG2). Incêndios florestais — como os que este livro trata na
Parte III — afetam ecossistemas, espécies, pessoas, bens, economia e saúde.

## 3.3 Deslocamento populacional

Extremos climáticos **impulsionam deslocamento em todas as regiões** (alta confiança).
Mais de **20 milhões de pessoas são deslocadas internamente por ano** por eventos
extremos desde 2008 — tempestades e cheias como causas principais (IPCC AR6 WG2). Esse
é um dos canais mais diretos entre mudança climática e crise humanitária.

## 3.4 Uma mortalidade desproporcional — e injusta

Entre 2010 e 2020, a **mortalidade humana por cheias, secas e tempestades foi 15× maior**
em regiões altamente vulneráveis (IPCC AR6 Synthesis). Este é o dado que conecta a
mudança climática à **justiça**: os danos não se distribuem igualmente — recaem com mais
força sobre quem menos emitiu e menos tem recursos para se adaptar.

## 3.5 O padrão que atravessa o livro

Todos esses impactos têm uma assinatura comum: são **assimétricos**. Atingem primeiro e
com mais força os vulneráveis — povos tradicionais, pequenos agricultores, populações
urbanas periféricas — exatamente os grupos que este livro propõe transformar de
"vítimas" em "protagonistas" da solução (Parte III).

## Fontes citadas

1. IPCC AR6 WG2 (2022), Impacts, Adaptation and Vulnerability — SPM. DOI: 10.1017/9781009325844
2. IPCC AR6 Synthesis Report (2023) — SPM. DOI: 10.1017/9781009157940
`,bm=`# Capítulo 4 — Por que mitigar compensa: o custo da inação é maior que o da ação

> **Registro:** rascunho v1.0. Fontes verificadas em 29/08/2026 (dossiê
> \`dossiers/dossie_clima_parte1.md\` + busca complementar Stern/BCG).

## 4.1 O achado central do IPCC

A conclusão econômica mais importante vem do **IPCC AR6 WG3**: modelos que incorporam os
danos econômicos da mudança do clima indicam que o **custo global de limitar o
aquecimento a 2 °C ao longo do século XXI é inferior aos benefícios econômicos globais
de reduzir o aquecimento** — exceto se os danos climáticos estiverem na extremidade
baixa das estimativas. Estudos recentes sobre as implicações econômicas líquidas da
descarbonização, contabilizando os danos evitados, apontam **benefício geral da
transição**.

Em linguagem simples: **não agir custa mais do que agir.**

## 4.2 A referência clássica: o Relatório Stern

O **Relatório Stern (2006)** quantificou essa assimetria de forma pioneira: mitigar
custaria da ordem de **1% do PIB mundial por ano**, enquanto o custo da inação poderia
ser de **5 a 20 vezes maior**. Estimativas posteriores reforçam a ordem de grandeza — a
análise do BCG aponta perda de **10% a 15% do PIB global até 2100** no cenário de
inação.

## 4.3 A barreira caiu — e não é tecnológica

O custo das opções de mitigação **despencou na última década** — a energia solar
fotovoltaica, por exemplo, caiu cerca de **uma ordem de magnitude** (IPCC AR6 WG3). Isso
tem uma implicação direta para a tese deste livro: se a tecnologia está cada vez mais
barata, a barreira à transição é **política e arquitetônica**, não técnica.

## 4.4 A tradução econômica para o Brasil

No Brasil, o Capítulo 8 mostra a mesma assimetria em escala micro: prevenir queimadas
custa **US$ 3,7–11,2/ha/ano**, enquanto a perda evitada chega a **US$ 565/ha/ano** — até
**25× o custo**. O padrão é idêntico do global ao local: **o problema não é falta de
recurso, é falta de direcionamento.**

## 4.5 A conclusão da Parte I

Os quatro primeiros capítulos convergem: (1) sabemos de onde vêm as emissões; (2) elas
agem com um atraso que trava a política; (3) as consequências são graves e assimétricas;
(4) e, ainda assim, mitigar é economicamente racional. A pergunta que resta — e que a
Parte II enfrenta — é: **por que, então, o mercado de carbono que deveria financiar a
mitigação acaba excluindo quem mais contribui para ela?**

## Fontes citadas

1. IPCC AR6 WG3 (2022), Mitigation of Climate Change — SPM. DOI: 10.1017/9781009157926
2. Stern, N. (2006), The Economics of Climate Change (Stern Review). https://www.lse.ac.uk/granthaminstitute/publication/the-economics-of-climate-change-the-stern-review/
3. BCG — custo da inação climática (10–15% PIB até 2100). https://www.noticiasagricolas.com.br/noticias/tempo-e-clima/392434-custo-da-inacao-climatica-leva-a-perda-de-10-a-15-do-pib-global-ate-2100-alerta-bcg.html
4. IPEA (2010) — O debate sobre o financiamento dos custos. https://repositorio.ipea.gov.br/bitstreams/a40cd547-376b-4928-8e12-2774bc003e10/download
5. Oliveira, A.S. (2018), tese UFV. https://locus.ufv.br/items/67e05553-d31f-46a3-86b7-f04735e6b116
`,xm=`# Capítulo 5 — Como funciona um crédito de carbono e o novo marco brasileiro (SBCE)

> **Registro:** rascunho v1.0. Fontes primárias verificadas em 29/08/2026 (dossiê
> \`dossiers/dossie_sbce_mercado.md\` + \`~/OSF_ARTIGO1_v1.0-preOSF/ARTIGO1_LEVANTAMENTO_CERTIFICADORAS.md\`).

## 5.1 O que é (e o que não é) um crédito de carbono

Um **crédito de carbono** é, na prática, um título que representa **1 tonelada de
dióxido de carbono equivalente (1 tCO₂e)** que deixou de ser emitida (redução) ou que
foi retirada da atmosfera (remoção). Quem o compra usa esse título para "compensar"
uma emissão própria que não conseguiu evitar.

O ponto crítico — e o coração de toda a controvérsia do mercado — é a **adicionalidade**:
provar que a redução/remoção **não teria acontecido sem o projeto**. Um crédito sem
adicionalidade real não compensa nada (ver Capítulo 6).

## 5.2 Dois mercados, lógicas distintas

| | Mercado regulado | Mercado voluntário |
|---|---|---|
| Quem obriga | Lei (cap-and-trade) | Ninguém — decisão voluntária |
| Ativo | Cota de emissão (CBE) + offset (CRVE) | Crédito voluntário (Verra, Gold Standard…) |
| Finalidade | Cumprir teto legal | Compensação/ESG/marketing |
| Verificação | Órgão gestor + organismo acreditado | Certificadora privada + auditoria |

O mercado **regulado** impõe um teto decrescente de emissões a grandes emissores. O
**voluntário** é onde empresas e pessoas físicas compram créditos por escolha própria.
O Brasil acaba de instituir o primeiro (SBCE, seção 5.5) enquanto o segundo já opera há
duas décadas.

## 5.3 O tripé MRV — Monitoramento, Relato e Verificação

Todo crédito confiável depende de três etapas:

1. **Monitoramento (M)** — medir, com método padronizado, o carbono que o projeto
   evita ou remove (satélite, torres de fluxo, inventário de biomassa).
2. **Relato (R)** — registrar essas medições de forma auditável.
3. **Verificação (V)** — um terceiro independente (organismo de inspeção acreditado)
   confirma que os números são verdadeiros e que a metodologia foi cumprida.

A ausência de MRV acessível é a principal barreira de entrada dos pequenos produtores
(seção 5.7) — e o elo que liga este capítulo ao diagnóstico do Capítulo 6.

## 5.4 Os padrões: uma arquitetura concentrada

No mercado voluntário brasileiro, a certificação é dominada por um padrão: a **Verra/VCS**
responde por cerca de **92,2%** dos créditos nacionais (FGV Agro/OCBio 2022). Estimativas
mais recentes (Berkeley Carbon Trading Project, citado em consulta pública BNDES/MMA
2025) indicam que **duas certificadoras internacionais concentram, em média, 99% das
certificações no Brasil desde 2019**.

Frente a essa concentração, emergem certificadoras nacionais (ver dossiê de certificadoras):
- **Tero Carbon** (Manaus-AM) — foco em pequenos/médios produtores, AFOLU, rastreabilidade
  via blockchain, integrada ao CAD Trust.
- **Lux Carbon Standard** (Blumenau-SC) — primeira certificadora nacional privada.
- **Certificadora nacional do BNDES** — anunciada, em construção, para reduzir a
  dependência de padrões internacionais e dar soberania ao mercado.

## 5.5 O SBCE — Lei nº 15.042/2024

Sancionada em **11/12/2024**, a **Lei nº 15.042/2024** institui o **Sistema Brasileiro
de Comércio de Emissões (SBCE)** — o mercado regulado brasileiro, em regime de
**cap-and-trade** (teto máximo de emissões por período). Dois ativos:

- **CBE** (Cota Brasileira de Emissões) — direito de emitir 1 tCO₂e, outorgado gratuita
  ou onerosamente aos regulados sob o teto.
- **CRVE** (Certificado de Redução ou Remoção Verificada de Emissões) — offset de 1 tCO₂e
  de projetos externos ao SBCE (metodologias credenciadas), com limites por Plano
  Nacional de Alocação.

**Limiares de inclusão (art. 30):** quem emite mais de **10.000 tCO₂e/ano** entra nas
obrigações de monitoramento e relato; acima de **25.000 tCO₂e/ano**, também na
conciliação periódica (compliance). A **produção primária agropecuária está expressamente
excluída** (art. 1º, § 2º) — decisão central para a tese deste livro.

**Governança e regulamentação em curso:** governança tripartite (Comitê Interministerial
+ órgão gestor + Comitê Técnico Consultivo). O órgão gestor permanente ainda não foi
criado; o Decreto nº 12.677/2025 criou a **Secretaria Extraordinária do Mercado de
Carbono (SEMC)** no Ministério da Fazenda como gestora interina. O cronograma legal (art.
50) prevê cinco fases até a implementação plena — as regras operacionais de MRV ainda
estão em consulta pública (MF nº 1/2026).

**Recursos e sanções:** multas de R$ 50 mil a R$ 20 milhões (ou até 3% do faturamento,
4% em reincidência). Receitas: **≥75% ao Fundo Nacional sobre Mudança do Clima, ≥15% à
operação do SBCE, ≥5% a povos indígenas e comunidades tradicionais**.

## 5.6 O tamanho do mercado

- **Mercado voluntário global (2024):** ~US$ 535 milhões em transações, preço médio
  ~US$ 6/tCO₂e, 182 Mt de créditos aposentados (Ecosystem Marketplace, SOVCM 2025).
- **Brasil (Sylvera, 2025):** fornecimento estimado de 273,9 Mt; preços médios muito
  desiguais — **ARR (reflorestamento) US$ 38,67** contra **REDD+ US$ 5,54**.
- **Precificação de carbono global (Banco Mundial, 2026):** ~30% das emissões globais
  cobertas por precificação direta; >US$ 107 bi arrecadados em 2025.

## 5.7 A barreira do MRV para pequenos produtores

O limiar de 10.000 tCO₂e/ano deixa **toda a agricultura familiar e os pequenos
emissores sem obrigação — e, na prática, sem acesso** aos mecanismos. Os custos de
certificação (auditorias, validação técnica, monitoramento contínuo, taxas) são descritos
na consulta pública BNDES/MMA (2025) como "elevados e muitas vezes proibitivos" para
pequenos produtores e comunidades tradicionais. Globalmente, sistemas agroalimentares
respondem por ~11% dos projetos do mercado voluntário, mas geram apenas **~1% dos
créditos emitidos** (Climate Policy Initiative/FAO).

Este é o nó estrutural que o restante do livro enfrenta: o mecanismo que deveria
recompensar quem conserva exclui, por desenho de custo, exatamente os que mais conservam.

## Fontes citadas

1. Lei nº 15.042/2024 (Planalto) — https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2024/lei/l15042.htm
2. Decreto nº 12.677/2025 (SEMC) — https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/decreto/D12677.htm
3. CVM — Resolução CVM 223/2024 e FAQ Mercado Regulado de Carbono (10/09/2025).
4. Ecosystem Marketplace / Forest Trends — SOVCM 2025 (29/05/2025) — https://www.ecosystemmarketplace.com/articles/sovcm-2025-finds-the-voluntary-carbon-market-in-transition-demand-holding-steady-as-turnover-stabilizes
5. Banco Mundial — State and Trends of Carbon Pricing 2026.
6. Sylvera — Brazil carbon market analysis (06/11/2025) — https://www.sylvera.com/pt-br/blog/brazil-carbon-market-analysis
7. FGV Agro / OCBio (2022) — https://agro.fgv.br/publicacao/ocbio-mercado-de-carbono-voluntario-no-brasil-na-realidade-e-na-pratica
8. BNDES/MMA — consulta pública certificação do mercado voluntário (2025) — https://blogdodesenvolvimento.bndes.gov.br/categoria/meio-ambiente-e-clima/Mercado-voluntario-de-carbono-no-Brasil-contribuicoes-da-consulta-publica/
9. Climate Policy Initiative (30/03/2026) — https://www.climatepolicyinitiative.org/can-carbon-finance-work-for-smallholder-agriculture/
`,vm=`# Capítulo 6 — Diagnóstico de assimetria: quem concentra os benefícios do carbono

> **Registro:** rascunho v1.0. Material de integridade: todo caso é ATRIBUÍDO à fonte
> (veículo + data + status processual), nunca apresentado como apuração própria. Foco
> no padrão estrutural, não em biografias. Fontes verificadas em 22/06/2026 (dossiê
> \`DOSSIE_FRAUDE_CARBONO_TERRAS.md\`).

## 6.1 A concentração começa na certificação

O mercado voluntário de carbono brasileiro é **altamente concentrado em um único
padrão**: a certificadora internacional **Verra/VCS** responde por cerca de **92,2%**
dos créditos nacionais, contra 6,0% da ACR e 1,9% da Gold Standard (FGV Agro / OCBio,
2022, com base no Berkeley Carbon Trading Project). **Escopo:** esse dado refere-se ao
mercado **brasileiro, ano 2022** — não deve ser extrapolado para o mercado global, onde
agências de rating apontam participação da Verra menor. A consequência é que a arquitetura
de confiança do mercado — quem define "o que vale como crédito" — está, na prática, nas
mãos de um único padrão global.

Essa concentração não é, por si só, prova de irregularidade. Mas ela concentra o risco:
quando a metodologia desse padrão falha, a falha se propaga para quase todo o mercado
brasileiro.

## 6.2 Três camadas de fragilidade que se conectam

A documentação reunida aponta três padrões estruturais — não anomalias isoladas — que
se reforçam mutuamente:

1. **Fragilidade metodológica (adicionalidade).** Créditos que não representam redução
   real de emissões.
2. **Fragilidade fundiária.** Terras públicas, da União ou indígenas tratadas como
   propriedade privada para gerar crédito.
3. **Violação de direitos de povos tradicionais.** Ausência de Consentimento Livre,
   Prévio e Informado (CLPI) e contratos assimétricos com comunidades.

## 6.3 Fichas de caso (atribuídas às fontes)

> **Critério editorial:** cada caso é parafraseado, com fonte, data e status. Não se
> faz citação literal extensa; não se usam apelidos; não se acusa pessoa física sem
> processo litigado. O que se extrai de cada caso é o **padrão**, não a biografia.

### Ficha 6.1 — Integridade metodológica dos créditos (adicionalidade)
- **Fonte:** The Guardian (com Die Zeit e SourceMaterial), 18 jan 2023.
- **Alegação (atribuída):** uma investigação de 9 meses concluiu que mais de 90% dos
  créditos REDD+ da Verra analisados seriam "phantom credits" — 94,9 milhões de
  créditos emitidos contra ~5,5 milhões de reduções reais.
- **Status:** reportagem investigativa; não é decisão judicial. A Verra contestou a
  metodologia do estudo.
- **Padrão extraído:** o problema da **adicionalidade** — provar que a redução não
  ocorreria sem o projeto — é estrutural, não um defeito pontual.

### Ficha 6.2 — Terras públicas tratadas como privadas
- **Fonte:** Washington Post, 2024 (investigação de 6 meses).
- **Alegação (atribuída):** mais da metade dos projetos florestais na Amazônia
  brasileira estaria sobreposta a terras públicas; 29 de 35 projetos certificados
  estariam sobre terra pública, com valor superior a US$ 212 milhões.
- **Fonte oficial correlata:** Polícia Federal, **Operação Greenwashing** (5 jun 2024):
  organização suspeita de vender ~R$ 180 milhões em créditos de áreas da União
  invadidas. A Justiça determinou o bloqueio/sequestro de bens no valor de **R$ 1,6
  bilhão** — valor corroborado por cobertura jornalística (InfoMoney, G1, CNN Brasil),
  pois a nota oficial da PF está hoje atrás de login no gov.br —, com prisões decretadas.
- **Status:** a operação policial é fonte oficial; as alegações seguem em apuração/
  processo. Nenhuma condenação transitada em julgado é afirmada aqui.
- **Padrão extraído:** o vácuo de governança fundiária permite que terra pública vire
  "ativo" privado de carbono.

### Ficha 6.3 — Terras indígenas e ausência de CLPI
- **Fonte:** Mongabay, 11 nov 2025.
- **Alegação (atribuída):** empresas sem capacidade técnica firmaram contratos de
  carbono com comunidades indígenas no Brasil e na Bolívia cobrindo mais de 8,5 milhões
  de hectares, com jargão técnico (blockchain, smart contracts) e sem Consentimento
  Livre, Prévio e Informado; a Funai teria alertado e o Ministério Público pedido a
  anulação dos contratos.
- **Status:** pedido de anulação pelo MP; não é decisão judicial definitiva.
- **Padrão extraído:** assimetria de informação e de poder de negociação entre
  desenvolvedores e comunidades tradicionais.

### Ficha 6.4 — O padrão se repete fora do Brasil
- **Fonte:** Human Rights Watch, 28 fev 2024.
- **Alegação (atribuída):** o projeto Southern Cardamom REDD+ (Camboja), certificado
  pela Verra, teria violado direitos do povo Chong, com 31 meses de operação antes de
  qualquer consulta às comunidades.
- **Status:** relatório de direitos humanos; a Verra teria suspendido a emissão de
  créditos em jun/2023 após receber as evidências.
- **Padrão extraído:** a falha é **sistêmica** — repete-se sob a mesma certificadora em
  outro continente —, reforçando que se trata de arquitetura de governança, não de
  exceção brasileira.

## 6.4 A leitura estrutural (o que o livro afirma, com base no que está documentado)

Os casos acima não provam que "todo crédito de carbono é fraude". Provam algo mais
preciso: **na ausência de uma arquitetura regulatória robusta, o vácuo de governança do
mercado voluntário é preenchido pela expropriação exatamente dos grupos que este livro
defende** — povos indígenas, quilombolas, ribeirinhos e agricultores familiares.

A assimetria tem três faces:
- **Assimetria de certificação** — 92,2% em um padrão, com barreiras de custo e
  metodologia que excluem pequenos projetos.
- **Assimetria fundiária** — quem detém terra regularizada e capital jurídico acessa o
  mercado; quem conserva por tradição e não tem título é alvo, não beneficiário.
- **Assimetria de informação** — comunidades negociam sem tradução, sem advogado
  independente e sem dados de MRV, frente a estruturas empresariais profissionalizadas.

## 6.5 O que este capítulo NÃO afirma

- Não afirma condenação judicial de qualquer pessoa física nomeada.
- Não generaliza: reconhece que existem projetos legítimos e certificadoras emergentes
  (ver Capítulo 5 e as certificadoras nacionais Tero Carbon e LuxCS).
- Distingue **controvérsia documentada** (reportagens, operações policiais, relatórios
  de direitos humanos) de **suspeita não confirmada** (alegações sem fonte rastreável
  foram excluídas).

## Fontes citadas

1. The Guardian (2023) — "Revealed: more than 90% of rainforest carbon offsets..."
   https://www.theguardian.com/environment/2023/jan/18/revealed-forest-carbon-offsets-biggest-provider-worthless-verra-aoe
2. Washington Post (2024) — https://www.washingtonpost.com/world/interactive/2024/brazil-amazon-carbon-credit-offsets/
3. Polícia Federal (2024) — Operação Greenwashing:
   https://www.gov.br/pf/pt-br/assuntos/noticias/2024/06/pf-deflagra-operacao-greenwashing-para-investigar-venda-irregular-de-creditos-de-carbono
4. Mongabay (2025) — https://news.mongabay.com/2025/11/how-a-green-gold-rush-in-the-amazon-led-to-dubious-carbon-deals-on-indigenous-lands/
5. Human Rights Watch (2024) — https://www.hrw.org/news/2024/02/28/cambodia-carbon-offsetting-project-violates-indigenous-groups-rights
6. FGV Agro / OCBio (2022) — participação de certificadoras no mercado voluntário BR
   https://agro.fgv.br/publicacao/ocbio-mercado-de-carbono-voluntario-no-brasil-na-realidade-e-na-pratica
7. InfoMoney (2024) — corrobora o bloqueio de R$ 1,6 bi na Operação Greenwashing:
   https://www.infomoney.com.br/politica/pf-desarticula-esquema-de-venda-ilegal-de-credito-de-carbono-para-multinacionais/
`,ym=`# Capítulo 7 — O paradoxo da conservação: quem preserva recebe menos

> **Registro:** rascunho v1.0. Síntese dos capítulos 5 e 6 + lente teórica de justiça
> climática (Schlosberg; Fraser) estabelecida no programa de pesquisa (DIRETRIZ §2 B2).

## 7.1 O paradoxo em uma frase

O mercado de carbono, tal como está desenhado, premia **quem historicamente explorou** e
penaliza **quem historicamente preservou**. Quem desmatou tem terra regularizada, capital
jurídico e escala para acessar certificação e crédito; quem conservou por tradição — povos
indígenas, quilombolas, agricultores familiares — enfrenta barreiras de título, custo e
informação que o mantêm fora do mecanismo.

## 7.2 A face empírica do paradoxo

Os dois capítulos anteriores documentam a face concreta:

- **Concentração na certificação** (Cap. 5): ~92,2% dos créditos brasileiros num único
  padrão (Verra), com custos de MRV "proibitivos" para pequenos (consulta BNDES/MMA 2025).
- **Concentração fundiária** (Cap. 6): mais da metade dos projetos na Amazônia sobrepostos
  a terras públicas (Washington Post, 2024); a Operação Greenwashing (PF, 2024) expôs a
  apropriação de áreas da União para gerar crédito.
- **Violação de direitos** (Cap. 6): contratos com indígenas sem Consentimento Livre,
  Prévio e Informado (Mongabay, 2025), e o mesmo padrão replicado no Camboja (HRW, 2024).

A leitura estrutural: **na ausência de arquitetura regulatória, o vácuo de governança é
preenchido pela expropriação dos grupos que este livro defende.**

## 7.3 A lente da justiça climática

O paradoxo não é um acidente: ele tem nome na teoria. A justiça climática, na formulação
de **David Schlosberg**, tem três dimensões que o mercado viola sistematicamente:

1. **Justiça distributiva** — a distribuição dos benefícios é invertida (concentrada em
   grandes projetos).
2. **Reconhecimento** — os saberes e direitos dos povos tradicionais não são reconhecidos
   como base legítima do valor do carbono que conservam.
3. **Participação (procedimental)** — as comunidades não participam das decisões que as
   afetam (ausência de CLPI, contratos sem tradução ou advogado independente).

**Nancy Fraser** acrescenta o conceito de **paridade de participação**: uma sociedade é
justa quando todos podem participar como pares — o que exige redistribuição, reconhecimento
e representação. O mercado voluntário, ao tratar o território conservado como ativo
financeiro sem o titular do território, viola exatamente essa paridade.

## 7.4 Por que o paradoxo é estrutural (e não moral)

Este livro evita o enquadramento moral ("empresas más"). O paradoxo é **estrutural** —
emerge de três barreiras que se reforçam:

- **Barreira de título**: sem certidão de domínio individualizada (cadeia dominial), áreas
  coletivas e territórios tradicionais não entram no sistema.
- **Barreira de custo**: auditoria, validação e monitoramento contínuo têm custo fixo alto,
  inviável para pequena escala.
- **Barreira de informação**: assimetria entre desenvolvedor profissionalizado e comunidade
  sem tradução, sem dados de MRV, sem assessoria jurídica própria.

## 7.5 A virada: de vítima a protagonista

O paradoxo define o problema; a Parte III define a saída. Se a exclusão é produzida pela
**arquitetura** (certificação concentrada, MRV caro, título exigente), então a solução é
**rearquitetar**: certificação nacional acessível, MRV comunitário, repasse cooperativo e
pagamento direto por serviços ambientais. O objetivo não é "incluir os excluídos" no modelo
atual — é **mudar o modelo** para que ele recompense quem conserva.

## Fontes citadas

1. Schlosberg, D. (2007), *Defining Environmental Justice: Theories, Movements, and Nature*. Oxford University Press. https://academic.oup.com/book/4798
2. Fraser, N. (2008), *Scales of Justice: Reimagining Political Space in a Globalizing World*. Columbia University Press. https://cup.columbia.edu/book/scales-of-justice/9780231519625/
3. Capítulos 5 e 6 deste livro (concentração na certificação e na terra; casos documentados).
4. FGV Agro/OCBio (2022); BNDES/MMA (2025); Washington Post (2024); PF/Operação Greenwashing (2024); Mongabay (2025); Human Rights Watch (2024).
`,km=`# Capítulo 8 — Biomas estratégicos: Caatinga e Cerrado na prevenção de queimadas

> **Registro:** rascunho v1.0. Fontes verificadas em 29/08/2026 (dossiê
> \`dossiers/dossie_caatinga_cerrado.md\`, preparado pelo Agente Clima). Itens sem fonte
> primária marcados NÃO VERIFICADO.

## 8.1 Por que estes dois biomas decidem o jogo

O **Cerrado** e a **Caatinga** concentram uma parcela desproporcional do risco
climático brasileiro por uma razão simples: são biomas **adaptados ao fogo e à seca**,
mas que estão sendo empurrados para além de seus limiares naturais pela combinação de
desmatamento, mudança climática e uso inadequado do fogo.

- O Cerrado é a savana mais biodiversa do planeta e a "caixa-d'água" do Brasil — nele
  nascem rios que abastecem as principais bacias do país.
- A Caatinga, único bioma exclusivamente brasileiro, abriga **cerca de 28,6 milhões de
  pessoas** — uma das áreas semiáridas mais populosas e vulneráveis do mundo.

## 8.2 O fogo como sintoma de uma economia desalinhada

Em **2024**, o Brasil queimou **30,8 milhões de hectares** — alta de **79%** sobre 2023
e a maior área desde 2019 (MapBiomas Fogo/Monitor do Fogo). O **Cerrado** respondeu por
**9,7 milhões de hectares**, dos quais **85% em vegetação nativa**. Na série longa
1985–2024, **89,5 milhões de hectares** do Cerrado queimaram ao menos uma vez — **45%
do bioma**. Cerrado + Amazônia respondem por **86%** de toda a área queimada do país no
período.

Esses números não são "desastres naturais": são, em grande parte, o resultado de uma
**economia que não paga para prevenir**. É exatamente aqui que entra o argumento central
deste capítulo.

## 8.3 A conta que ninguém fecha: prevenir custa uma fração do que se perde

A fonte quantitativa mais importante para este capítulo é a tese de doutorado de
**Oliveira (2018, Universidade Federal de Viçosa)**, que estimou perdas econômicas e
custos de manejo de incêndios no Cerrado e na Amazônia:

- **Perda econômica pelo fogo:** até **US$ 183 ± 30 por hectare/ano** (produção
  sustentável de madeira) e até **US$ 565 por hectare/ano** em regiões de alto lucro
  agrícola.
- **Investimento em mitigação do fogo:** apenas **US$ 3,7 por hectare/ano** em terras
  públicas e **US$ 11,2 por hectare/ano** em terras privadas.
- **Benefício/custo:** em áreas de alto estoque de carbono e agricultura lucrativa, os
  benefícios da prevenção podem ser **até 25× maiores que os custos**.
- **Benefício privado:** a prevenção gera **benefício privado significativo para o
  produtor** que adere a programas de mitigação.

Reforço independente, em escala nacional: o **Banco Mundial (2025)** estimou os danos
dos incêndios de 2024 em **US$ 35,9 bilhões (~1,5% do PIB)**, 85% acima da média
2019–2023 — incluindo US$ 17,1 bi em perdas produtivas, US$ 9,8 bi em carbono e US$ 7,1
bi em mortalidade (~8.240 mortes prematuras por material particulado). E o custo
operacional do combate é alto na ponta: um único incêndio de grande porte (REBIO
Sooretama) custou **R$ 17,6 mil/dia** mais **R$ 64,3 mil/mês** de depreciação (Silva et
al., 2022, Ciência Florestal).

**A leitura estrutural:** a tese quantifica a assimetria "perda evitada ≫ custo de
mitigação" e conclui que os recursos hoje **não são direcionados à prevenção**. Ou seja,
é mais barato e mais racional prevenir do que combater — mas o sistema atual paga pelo
combate, não pela prevenção.

## 8.4 O Manejo Integrado do Fogo (MIF) — e a evidência de que funciona

O **Manejo Integrado do Fogo (MIF)** inverte a lógica: em vez de apenas combater o fogo
quando ele vira incêndio, planeja-se a paisagem, reduz-se o combustível acumulado e
usa-se a queima prescrita de forma controlada, respeitando a ecologia de cada bioma.

A evidência de eficácia é direta: um **programa-piloto de MIF (2014)** na Chapada das
Mesas, Jalapão e Serra Geral do Tocantins reduziu **até 57% da área queimada** e **até
39% das emissões de GEE** por incêndios, em três anos (IPAM/ISPN). O IPAM estima que o
MIF pode **reduzir pela metade a área queimada** — e estimativas de eficácia da queima prescrita
chegam a **até 85% de redução** (Bond & Keeley 2005) —, com a ressalva técnica de que a
queima prescrita do Cerrado não se aplica a florestas úmidas.

A base legal foi consolidada: a **Lei nº 14.944/2024** (31/07/2024) instituiu a
**Política Nacional de Manejo Integrado do Fogo**, com o Comitê Nacional de MIF e o
Sisfogo, alterando o Código Florestal e a Lei de Crimes Ambientais.

## 8.5 A vulnerabilidade climática da Caatinga

O **Primeiro Relatório de Avaliação Nacional (RAN1) do PBMC (2014)** aponta o Nordeste
como a região mais vulnerável do país. Para a Caatinga, em cenário pessimista
(**RCP8.5**), projeta-se **aumento de ~4,0 °C na temperatura e redução de ~0,3 mm/dia
na precipitação até 2100** (Torres et al., 2017).

> **Nota de precisão:** circula o número "4,5 °C e −50% de chuva", mas o valor
> verificado em fonte primária é **+4,0 °C e −0,3 mm/dia (RCP8.5)**.

A desertificação já é mensurável (MapBiomas 1985–2020): em **112 municípios da Caatinga
(9%)**, há Áreas Suscetíveis à Desertificação classificadas como "muito grave/grave",
com perda de **0,3 Mha de vegetação nativa**, redução de **8,27% na superfície de água**
e **queda de 40% na água natural**. A proteção é mínima: apenas **~1% do território da
Caatinga** está em Unidade de Conservação de proteção integral.

## 8.6 O incentivo direto ao produtor — a ponte para a solução

O argumento deste capítulo sustenta uma política concreta: **pagar quem previne**. A
base legal já existe em parte:

- **Lei nº 14.119/2021** (Política Nacional de Pagamento por Serviços Ambientais —
  PNPSA) cria o PSA voluntário, elegível a **produtores rurais, povos indígenas e
  comunidades tradicionais**, para manter/recuperar/melhorar serviços ecossistêmicos
  (incluindo regulação climática e hídrica).
- Combinada ao **MIF** e a **mecanismos de crédito de carbono**, essa política permite
  converter a prevenção de queimadas em **renda direta** para quem historicamente
  conserva.

A equação do capítulo, em uma linha: **a perda evitada (até US$ 565/ha/ano) supera em
até 25× o custo da prevenção (US$ 3,7–11,2/ha/ano) — e quem deveria receber essa
diferença é o produtor que conserva.**

## 8.7 O que ainda não se sabe (transparência)

Três quantificações permanecem **NÃO VERIFICADAS** por falta de fonte primária, e por
isso **não recebem número** neste capítulo:
1. Custo unitário de implementação do MIF/queima prescrita em R$/ha para o Cerrado.
2. Valor monetizado do potencial de prevenção específico da Caatinga (a tese da UFV
   cobre Cerrado + Amazônia, não a Caatinga).
3. Estudo EMBRAPA/IPAM de ponta a ponta ("incentivo → adesão → área evitada → valor").

## Fontes citadas

1. Oliveira, A.S. (2018). Tese de doutorado (UFV) — perdas econômicas e custos de manejo
   de incêndios. https://locus.ufv.br/items/67e05553-d31f-46a3-86b7-f04735e6b116
2. IPAM (2022). Manejo do fogo como estratégia para reduzir incêndios. https://ipam.org.br/manejo-do-fogo-como-estrategia-para-reduzir-incendios/
3. ISPN (2022). Incêndios podem ser reduzidos pela metade seguindo o MIF. https://ispn.org.br/noticia/incendios-podem-ser-reduzidos-pela-metade-seguindo-estrategia-do-mif/
4. MapBiomas Fogo/Monitor do Fogo (via Agência Brasil, 22/01/2025) — 30,8 Mha/2024.
5. Almeida et al. (2020). Rev. bras. meteorol. 35(3). DOI 10.1590/0102-7786353002
6. Agência Senado (2024). Mudanças climáticas ameaçam a Caatinga. https://www12.senado.leg.br/noticias/infomaterias/2024/02/mudancas-climaticas-ameacam-a-caatinga-com-desertificacao-e-perda-de-especies
7. Lei nº 14.119/2021 (PNPSA). https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/l14119.htm
8. Lei nº 14.944/2024 (Política Nacional de Manejo Integrado do Fogo), 31/07/2024.
9. Banco Mundial (2025) — danos dos incêndios de 2024 (US$ 35,9 bi; ~1,5% do PIB).
10. Silva et al. (2022), Ciência Florestal — custo operacional do combate. DOI 10.5902/1980509861333
11. Bond & Keeley (2005) — eficácia da queima prescrita.
`,Cm=`# Capítulo 9 — Matas ciliares: a infraestrutura natural da segurança hídrica

> **Registro:** rascunho v1.0. Fontes verificadas em 29/08/2026 (dossiê
> \`dossiers/dossie_parte3_biomas.txt\`).

## 9.1 A proteção que a lei exige

As matas ciliares — a vegetação que margeia rios e nascentes — são protegidas pelo
**Código Florestal (Lei 12.651/2012)** como Áreas de Preservação Permanente (APPs). A
faixa mínima varia de **30 metros** (cursos d'água com menos de 10 m de largura) até
**500 metros** (rios com mais de 600 m). Não é rigor ambiental: é infraestrutura —
a vegetação ciliar segura o solo, filtra sedimentos, recarrega aquíferos e amortece o
pico das cheias.

## 9.2 A função que ninguém vê até faltar

Os números da **ANA (Conjuntura dos Recursos Hídricos, dados de 2022)** dimensionam o
que está em jogo:

- Mais de **1,5 milhão de pessoas afetadas por cheias** (alagamentos, enxurradas,
  inundações) em 2022.
- Cerca de **7 milhões de pessoas afetadas por secas e estiagens** (45% das ocorrências
  no Nordeste).
- Retirada total de água de **2.035,2 m³/s** (~64 trilhões de litros/ano).

A recomposição de matas ciliares age diretamente sobre os dois extremos — cheia e seca
— porque regula infiltração, recarga e retenção de sedimentos.

## 9.3 O passivo que a anistia criou

Uma estimativa acadêmica (**Guidotti et al., 2017**, *Sustentabilidade em Debate*)
calculou que a anistia de APPs prevista no Código Florestal abriu mão da conservação de
**~4,5 milhões de hectares** de APPs — áreas com papel fundamental para a água e o
controle de sedimentos. É um passivo que ainda pode ser revertido via **restauração
remunerada**.

## 9.4 O nexo com o crédito de carbono

Restaurar mata ciliar gera duplo dividendo: **remoção de carbono** (vegetação em
crescimento) e **serviço hídrico** (controle de cheia e assoreamento). O instrumento que
conecta os dois já existe — o **PSA (Lei 14.119/2021)** e o crédito de carbono —, mas a
integração com o planejamento de bacias ainda é incipiente, sobretudo em APPs urbanas e
periurbanas (lacuna documentada).

## Fontes citadas

1. Lei nº 12.651/2012 (Código Florestal), art. 4º. https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12651.htm
2. ANA — Conjuntura dos Recursos Hídricos no Brasil 2023 (dados 2022). https://www.snirh.gov.br/portal/centrais-de-conteudos/conjuntura-dos-recursos-hidricos/conjunturainforme2023.pdf
3. MapBiomas Alerta — RAD2024 (15/05/2025) — 0,8% dos imóveis concentraram 81,4% dos alertas.
4. Guidotti et al. (2017), Sustentabilidade em Debate 5(1) — anistia de ~4,5 Mha de APPs. https://www.researchgate.net/publication/317278692_NUMEROS_DETALHADOS_DO_NOVO_CODIGO_FLORESTAL_E_SUAS_IMPLICACOES_PARA_OS_PRAs_PRINCIPAIS_RESULTADOS_E_CONSIDERACOES
5. Lei nº 14.119/2021 (PNPSA).
`,wm=`# Capítulo 10 — Reflorestamento e combate à desertificação com protagonismo dos povos

> **Registro:** rascunho v1.0. Fontes verificadas em 29/08/2026 (dossiê
> \`dossiers/dossie_parte3_biomas.txt\`).

## 10.1 A desertificação que já é mensurável

As **Áreas Suscetíveis à Desertificação (ASD)** ocupam cerca de **1,34 milhão de km²**
(≈16% do território nacional) e atingem diretamente cerca de **30 milhões de pessoas**
(Oliveira Santana et al., 2007). O **Plano de Ação Brasileiro de Combate à
Desertificação (PAB Brasil 2024)** eleva o alcance para **~39 milhões de pessoas em mais
de 1.600 municípios**, com horizonte 2024–2043.

## 10.2 A meta de restauração

O **PROVEG/PLANAVEG** (Decreto 8.972/2017) fixou a meta de recuperar pelo menos **12
milhões de hectares** de vegetação nativa até 2030 — reafirmada no Planaveg 2.0. É a
maior meta de restauração do planeta. O gargalo: **não há série pública consolidada de
hectares efetivamente restaurados** (o monitoramento do Planaveg 2.0 ainda está em
estruturação).

## 10.3 O protagonismo que os dados comprovam

O dado mais forte deste capítulo inverte a narrativa comum de que a conservação precisa
"incluir" os povos tradicionais — na verdade, eles já são os guardiões do território:

- **Terras Indígenas** ocupam **14,8% do território nacional** e respondem por apenas
  **1,3% do desmatamento** do país — 15.938 ha em 2024 (−24% vs. 2023), com **dois
  terços das TIs sem nenhum evento de desmatamento** (MapBiomas Alerta RAD2024).
- A população indígena soma **1.694.836 pessoas** (Censo 2022), das quais 622.844 vivendo
  em Terras Indígenas.

Ou seja: as TIs funcionam como **barreira territorial à conversão** — o mesmo papel de
conservação que este livro defende remunerar, e não expropriar.

## 10.4 Do reconhecimento à remuneração

O próximo passo lógico é transformar esse protagonismo em **renda**: restauração e
manutenção da vegetação nativa conduzidas por povos indígenas, quilombolas e assentados,
remuneradas via PSA e crédito de carbono. A lacuna é de sistematização — não há série
nacional de projetos de restauração liderados por esses povos (documentados apenas em
estudos de caso) — e de segurança jurídica (a demarcação está travada pelo marco
temporal, Lei 14.701/2023, comprometendo a barreira documentada).

## Fontes citadas

1. PAB Brasil 2024 (MMA). https://www.gov.br/participamaisbrasil/plano-de-acao-brasileiro-de-combate-a-desertificacao-e-mitigacao-dos-efeitos-da-seca-pab-brasil-2024
2. Oliveira Santana et al. (2007), via IICA — Panorama das ASD.
3. Decreto 8.972/2017 (PROVEG). https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2017/decreto/d8972.htm
4. MapBiomas Alerta — RAD2024 (15/05/2025).
5. IBGE — O Brasil Indígena (Censo 2022). https://www.ibge.gov.br/brasil-indigena/
`,Sm=`# Capítulo 11 — Monitoramento tecnológico: satélites, drones, torres e brigadas

> **Registro:** rascunho v1.0. Fontes verificadas em 29/08/2026 (dossiê
> \`dossiers/dossie_parte3_biomas.txt\`).

## 11.1 A revolução do monitoramento por satélite

O Brasil tem um dos sistemas de monitoramento ambiental mais avançados do mundo, com
duas grandes linhas públicas:

- **DETER (INPE)** — alertas rápidos: na Amazônia caíram **45% em 2023/2024** (para
  4.314,76 km²) e outros **36% no ciclo 2025/2026** (2.874,38 km²), novo mínimo
  histórico; no Cerrado, 5.119,46 km² (−7,8%).
- **PRODES (INPE)** — taxa oficial: desmatamento da Amazônia Legal em 2024 de **6.288
  km²**, queda de **30,6%** (menor em 9 anos).
- **MapBiomas Alerta (RAD2024)** — validação independente: **60.983 alertas**, somando
  **1.242.079 hectares** desmatados em 2024 (−32,4%), com detecção mínima de 0,3 ha.

A tecnologia funciona: o desmatamento caiu em todos os biomas. Mas há uma lacuna crítica
— **alerta de satélite não é auto de infração**. A conversão de alerta em punição
depende de fiscalização em campo, cuja fila cresce mais rápido que a capacidade de
resposta.

## 11.2 Garimpo ilegal: o alvo em expansão

**40% da área de garimpo da Amazônia foi aberta nos últimos 5 anos** (até 2022), e a
Amazônia concentrava **91,6% da área minerada do país** (MapBiomas Mineração). O
monitoramento de garimpo é derivado de mapeamento anual, com defasagem de ~1 ano — não
há alerta diário específico para garimpo ilegal.

## 11.3 Brigadas comunitárias e o Manejo Integrado do Fogo

O combate no terreno ganhou base legal recente: a **Lei 14.944/2024** instituiu a
Política Nacional de Manejo Integrado do Fogo, e a **Portaria IBAMA nº 114/2024**
autorizou o Prevfogo a contratar brigadas federais temporárias (15–17 brigadistas por
brigada). A lacuna: as brigadas dependem de **contratação temporária anual**, sem
carreira permanente — instabilidade que compromete a continuidade.

## 11.4 Drones e torres: o elo que falta

Drones e torres de detecção são a ponte entre o satélite e o terreno — mas seu uso **não
é padronizado nem reportado nacionalmente**. Fechar essa lacuna (cobertura por estado
pública, protocolo único) é pré-requisito para que o monitoramento comunitário gere
crédito de carbono auditável.

## 11.5 O ponto para este livro

Monitoramento não é só fiscalização: é a **base do MRV** que torna o crédito de carbono
verificável. Quando a mesma tecnologia que derruba o desmatamento também **certifica** a
conservação feita por comunidades e pequenos produtores, ela deixa de ser só punitiva e
passa a ser **remuneradora** — o eixo central da Parte III.

## Fontes citadas

1. INPE — DETER e PRODES (Nota Técnica PRODES 2024).
2. MapBiomas Alerta — RAD2024 (20/05/2025). https://alerta.mapbiomas.org/2025/05/20/desmatamento-caiu-em-todos-os-biomas-brasileiros-em-2024
3. MapBiomas Mineração — 91,6% da área garimpada na Amazônia.
4. Lei nº 14.944/2024 (Política Nacional de Manejo Integrado do Fogo).
5. Portaria IBAMA nº 114/2024 (Prevfogo).
`,Em=`# Capítulo 12 — Ciência aplicada: biodigestores, metano entérico e catalisadores

> **Registro:** rascunho v1.0. Fontes verificadas em 29/08/2026 (dossiê
> \`dossiers/dossie_parte3_biomas.txt\`).

## 12.1 O alvo certo: o metano da pecuária

A agropecuária brasileira emitiu **631,2 MtCO₂e em 2023** — e somente a **fermentação
entérica** (o "arroto" bovino) respondeu por **355,1 MtCO₂e, ~56% do setor** (SEEG/OC,
cálculo Imaflora). É o maior alvo único de mitigação do país — e o metano é um gás ~28×
mais potente que o CO₂, o que torna sua redução de altíssimo impacto no curto prazo.

## 12.2 Aditivos anti-metano: a ciência que já funciona

Pesquisa da **Embrapa Pecuária Sudeste** (publicada no *Journal of Animal Science*, DOI
10.1093/jas/skag068, financiada pela FAPESP) testou o aditivo **3-NOP (Bovaer)** em gado
Nelore confinado e obteve redução de metano entérico de **13,2% (65 mg/kg) a 26,7% (85
mg/kg)**, sem prejuízo de desempenho ou saúde animal.

O gargalo é de **escala**: os aditivos ainda não têm registro e uso comercial amplo no
Brasil (regulamentação MAPA/ANVISA em curso). A P&D de excelência não virou adoção de
campo — um problema de política, não de ciência.

## 12.3 Biodigestores: o potencial subutilizado

O Brasil fechou 2023 com **1.365 plantas de biogás/biometano** registradas (+32% vs.
2022) — mas utiliza **menos de 2%** do potencial de **84,6 bilhões de Nm³/ano**
(CIBiogás/World Biogas Association). A **Lei 14.993/2024 (Combustível do Futuro)** cria
demanda cativa ao impor **1% de biometano no gás natural a partir de 2026** — o estímulo
que faltava para a cadeia.

## 12.4 Catalisadores e P&D de ponta

A conversão de CO₂ capturado em metano sintético (**power-to-methane**) tem base
científica consolidada em revisão peer-reviewed (*Chemical Engineering Research and
Design*, 2023) — catalisadores de Ni suportados para metanação de CO₂. No Brasil, essa
P&D concentra-se em grupos de **universidades públicas** (USP, Unicamp, UFRGS, UFSCar),
mas permanece em escala laboratorial/piloto.

## 12.5 A tese deste capítulo

O padrão é recorrente: **o Brasil tem a ciência, mas não o financiamento de escala para
aplicá-la.** É exatamente aqui que o retorno de créditos de carbono (Cap. 16) entra como
mecanismo: converter a mitigação já validada em laboratório em **renda de campo**, com o
crédito de carbono financiando a adoção por produtores que hoje não conseguem pagar o
custo inicial.

## Fontes citadas

1. SEEG/Observatório do Clima (cálculo Imaflora, 07/11/2024) — agropecuária 631,2 MtCO₂e; entérica 355,1. https://imaflora.org/noticias/seeg-agropecuaria-foi-o-setor-que-mais-aumentou-emissoes-de-gases-do-efeito-estufa-em-2023
2. Embrapa Pecuária Sudeste / J. Animal Science (2025) — 3-NOP em Nelore. DOI 10.1093/jas/skag068
3. CIBiogás — Panorama do Biogás 2023. https://cibiogas.org/en/noticias/producao-de-biogas-no-brasil-poderia-abastecer-40-mil-onibus-por-ano
4. Lei nº 14.993/2024 (Combustível do Futuro). https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2024/lei/l14993.htm
5. Chem. Eng. Res. Des. (2023) — revisão de metanação de CO₂. https://www.sciencedirect.com/science/article/pii/S0263876223007700
`,Am=`# Capítulo 13 — Economia circular urbana: catadores, resíduos e energia distribuída

> **Registro:** rascunho v1.0. Fontes verificadas em 29/08/2026 (dossiê
> \`dossiers/dossie_economia_circular_cidades.txt\`).

## 13.1 A espinha dorsal invisível da reciclagem

O Brasil tem na reciclagem um paradoxo que este livro já encontrou na conservação
florestal: quem faz o trabalho pesado é quem menos recebe.

- O **Censo 2010** registrou **387.910 catadores** de materiais recicláveis; o
  **MNCR** estima cerca de **800 mil** (70% mulheres); estimativas de 2022 apontam
  **mais de 1 milhão** (IPEA; MNCR; The Conversation).
- Em 2023, o Brasil gerou **~81 milhões de toneladas** de resíduos sólidos urbanos,
  das quais **41,5% tiveram destinação inadequada** (ABREMA 2024).
- Cerca de **700 mil catadores autônomos** coletaram **4,5 milhões de toneladas**
  (5,6% do total); dos 6,7 Mt reinseridos na cadeia, **67,2% vieram de catadores
  informais** — contra apenas 32,8% de serviços públicos/cooperativas.

Ou seja: a maior parte da reciclagem real do país é feita por trabalhadores informais,
que capturam uma fração ínfima do valor econômico que geram.

## 13.2 Resíduos orgânicos como fonte de energia

O resíduo orgânico urbano é uma mina de energia desperdiçada:

- Uma única unidade da **CEASA de Curitiba** gera, em média, **31 toneladas de
  resíduos orgânicos por dia** (Banco do Nordeste, 2020) — matéria-prima para
  biodigestão/biometano e hidrogênio verde.
- O Brasil produz cerca de **291 milhões de toneladas/ano** de resíduos
  agroindustriais (IPEA, via Insper Agro in Data), base potencial para rotas de
  **hidrogênio verde** via gaseificação/biometano.

O nexo com o crédito de carbono é direto: transformar resíduo orgânico em biometano
evita emissões de metano (um GEE ~28× mais potente que o CO₂) e pode gerar créditos —
mas a rota ainda está em **escala piloto** no Brasil.

## 13.3 Energia distribuída e cooperativismo

O cooperativismo de energia é uma base real e crescente: em **2022** havia **582
cooperativas geradoras** de energia, com **+154 em 2023** (Sistema OCB). Parques
fotovoltaicos cooperativados permitem que comunidades e pequenos produtores sejam
**donos** da geração — e não apenas consumidores —, um passo essencial para a
democratização econômica que este livro defende.

## 13.4 A lacuna que trava o crédito para catadores

Há uma barreira técnica que impede que a reciclagem gere crédito de carbono de forma
justa: **não existe fator de emissão padronizado por material reciclado** no Brasil.
Cada projeto usa uma metodologia diferente, o que inviabiliza comparabilidade e
auditoria. Sem isso, cooperativas de catadores — que fazem a mitigação real — ficam
fora do mercado de carbono, repetindo o padrão de exclusão diagnosticado na Parte II.

## Fontes citadas

1. ABREMA — Panorama dos Resíduos Sólidos no Brasil 2024. https://www.abrema.org.br/2024/12/11/mais-de-41-dos-residuos-urbanos-tiveram-destinacao-inadequada-em-2023/
2. IPEA — Situação Social das Catadoras e Catadores. https://www.ipea.gov.br/igualdaderacial/
3. The Conversation (2025) — papel estratégico dos catadores na crise climática.
4. Banco do Nordeste — Revista Econômica do Nordeste (CEASA Curitiba, 31 t/dia).
5. Insper Agro in Data / IPEA — resíduos agroindustriais (~291 Mt/ano).
6. Sistema OCB — Panorama Energia Cooperativa (582 geradoras/2022).
7. Lei nº 12.305/2010 (Política Nacional de Resíduos Sólidos). https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2010/lei/l12305.htm
`,Im=`# Capítulo 14 — Cidades responsivas: aterros, arborização e rios urbanos

> **Registro:** rascunho v1.0. Fontes verificadas em 29/08/2026 (dossiê
> \`dossiers/dossie_economia_circular_cidades.txt\`).

## 14.1 O caso que abriu o caminho: aterro Bandeirantes

O **aterro sanitário Bandeirantes** (São Paulo) foi o **primeiro aterro do mundo a
vender créditos de carbono** no âmbito do Protocolo de Kyoto. Sua referência técnica é
grande: pode receber **Reduções Certificadas de Emissões correspondentes a 16,1 milhões
de toneladas de CO₂e** até o esgotamento do biogás (IPEA). A lógica é limpa: capturar o
metano do lixo e transformá-lo em energia evita emissões e gera crédito.

O problema é o **alcance**. Em 2023, **41,5% dos resíduos urbanos brasileiros (~33
milhões de toneladas) ainda foram para lixões e aterros sem controle** (ABREMA 2024) —
justamente o estrato com maior potencial de metanização financiada por crédito. O
mecanismo que funciona em Bandeirantes continua descoberto na maior parte do país.

## 14.2 Arborização urbana: uma desigualdade medível

O **Censo 2022 (IBGE)** trouxe um número revelador: **58,7 milhões de pessoas — 33,7%
da população — moram em vias públicas sem arborização**. A capital mais arborizada do
Sul/Sudeste é Curitiba, evidenciando forte desigualdade intraurbana no acesso ao verde.

A arborização urbana não é estética: árvores reduzem ilhas de calor, retêm água de
chuva, filtram poluentes e sequestram carbono. O modelo cooperativado — plantar e
manter árvores com participação comunitária e retorno por crédito de carbono — é uma
via ainda pouco explorada, e sem série anual de monitoramento (o dado só existe por
censo, 2010 e 2022).

## 14.3 Rios urbanos: o custo da despoluição tardia

A despoluição do **Rio Tietê** consumiu **mais de R$ 17,3 bilhões** de recursos
públicos em 8 anos (TCE-SP), em interceptores, coletores-tronco e estações de
tratamento. É a evidência de que **recuperar é muito mais caro do que preservar** — a
mesma assimetria econômica do Capítulo 8, transposta para a água.

A integração da recuperação de rios/canais com créditos de carbono (metanização de
efluentes, recuperação de matas ciliares urbanas) é **praticamente inexplorada** no
Brasil — uma oportunidade concreta de financiar o que hoje depende só de orçamento
público.

## 14.4 O ponto comum

Aterros, arborização e rios urbanos têm o mesmo traço estrutural: são infraestruturas
que geram **benefício público enorme** mas que dependem de orçamento público escasso.
O crédito de carbono pode ser a alavanca que transforma esse passivo em ativo — desde
que a repartição de benefícios alcance municípios e comunidades, e não apenas grandes
operadores privados (lacuna sem indicador público de monitoramento).

## Fontes citadas

1. IPEA — Desafios do Desenvolvimento (aterro Bandeirantes, 16,1 MtCO₂e).
2. Prefeitura de São Paulo — "Aterro vende créditos de carbono". https://prefeitura.sp.gov.br/web/comunicacao/w/noticias/134371
3. ABREMA — Panorama dos Resíduos Sólidos 2024.
4. IBGE — Censo 2022, Características Urbanísticas do Entorno dos Domicílios.
5. TCE-SP — despoluição do Tietê (R$ 17,3 bi em 8 anos). https://www.tce.sp.gov.br/6524-8-anos-despoluicao-rio-tiete-ja-consumiu-mais-r-173-bi-recursos-publicos
6. MCTI — Legado do MDL no Brasil (Autoridade Nacional Designada).
`,Pm=`# Capítulo 15 — Crédito de carbono individual: a pegada pessoal como porta de entrada

> **Registro:** rascunho v1.0. Fontes verificadas em 29/08/2026 (dossiê
> \`dossiers/dossie_credito_individual_financiamento.txt\` + \`dossie_sbce_mercado.md\`).
> Itens sem fonte auditada marcados NÃO VERIFICADO.

## 15.1 Dois sentidos de "crédito individual"

O termo tem dois significados que é preciso separar:

1. **Compensação individual** — a pessoa física calcula sua pegada e compra créditos
   para neutralizá-la (o modelo do Ambify, abaixo).
2. **Geração individual** — a pessoa gera crédito a partir de ações cotidianas
   verificáveis (pedalar, compostar, reciclar), trocando por recompensas.

Este capítulo trata dos dois, porque ambos respondem à mesma pergunta: como o
indivíduo entra num mercado desenhado para grandes emissores?

## 15.2 O caso que inaugurou o varejo: Ambify

O **Ambify** (Ambipar), lançado em dezembro/2021, foi o **primeiro app brasileiro** a
permitir que pessoa física calculasse a pegada e comprasse créditos — antes restrito a
grandes empresas. Opera com **blockchain (Binance Smart Chain)**, créditos **Verra/VCS**
(1 crédito = 1 tCO₂e) e destina **5%** de cada compensação a projetos sociais
(Instituto Jô Clemente, Médicos sem Fronteiras, Instituto Luz Alliance).

É uma referência de arquitetura — mas a exceção, não a regra: a maioria dos apps que
convertem "pedalar/compostar/reciclar" em créditos **não usa metodologia registrada com
verificação por terceira parte** (risco alto de greenwashing).

## 15.3 O mercado individual em expansão

- O mercado voluntário global foi estimado em **US$ 5,3 bilhões em 2025**, com projeção
  de **US$ 52,4 bilhões em 2033** (CAGR 32,2%); o segmento de **pessoas físicas é o de
  crescimento mais rápido**, embora empresas ainda respondam por **62,1% da receita**
  (Grand View Research).
- Projeções independentes variam muito (S&P ~US$ 4 bi/ano em 2030; BCG/Shell US$ 10–40
  bi; McKinsey mercado acima de US$ 50 bi; Deloitte ~US$ 100 bi em consumidores) — a
  dispersão indica **incerteza**, não consenso.

## 15.4 Mobilidade ativa e recompensa

O modelo "mensurar ação cotidiana → crédito → recompensa" já existe em iniciativas como
**FCarbon + Bikebox**, que convertem **quilômetros pedalados em créditos de carbono**
(mensuração automática via app). Outros apps brasileiros (Carbono Neutro, Ecolife)
oferecem cálculo de pegada + compensação + recompensas — mas **nenhum publica métricas
auditadas** de usuários ou volumes compensados (NÃO VERIFICADO).

## 15.5 Os limites que este livro registra

1. **Sem padrão verificado** — apps que geram "crédito individual" raramente usam
   metodologias registradas com adicionalidade comprovada.
2. **Sem dado público** — não há estatística oficial (BCB/CVM/MMA) de volume
   transacionado por pessoa física.
3. **Exclusão digital** — o modelo pressupõe smartphone e conectividade, tendendo a
   beneficiar usuários urbanos de renda média/alta.
4. **Fragmentação** — iniciativas isoladas, sem interoperabilidade nem regra de
   reconhecimento no futuro SBCE.

A conclusão honesta: o crédito individual é uma **porta de entrada educativa** poderosa,
mas ainda não é — e talvez não deva ser — um substituto da mudança estrutural. Seu maior
valor pode estar em **engajar** o cidadão na transição, não em "compensar" o problema.

## Fontes citadas

1. Ambipar/Forbes (19/01/2022) — lançamento do Ambify. https://ambipar.com/noticias/ambipar-lanca-app-para-compra-de-creditos-de-carbono-por-pessoa-fisica/
2. Grand View Research — Voluntary Carbon Credit Market (2025).
3. S&P Global (12/03/2025) — VCM até US$ 4 bi/ano 2030.
4. FCarbon — Bikebox (pedalar gera crédito; data NÃO VERIFICADA).
5. BNDES — calculadoras públicas de emissões evitadas/removidas.
6. FGV — Registro Público de Emissões. https://registropublicodeemissoes.fgv.br/
`,Om=`# Capítulo 16 — Modelos de financiamento: fomento, poder público e repasse cooperativo

> **Registro:** rascunho v1.0. Fontes verificadas em 29/08/2026 (dossiê
> \`dossiers/dossie_credito_individual_financiamento.txt\`).

## 16.1 O Fundo Clima e o papel do BNDES

O **Fundo Nacional sobre Mudança do Clima (Fundo Clima)**, criado em 2009 (Lei 12.114) e
operado pelo **BNDES** como agente financeiro, é o principal instrumento público de
fomento climático brasileiro:

- De 2013 a 2023, aprovou **R$ 3 bilhões**; em **2024** — primeiro ano com recursos de
  títulos soberanos sustentáveis — aprovou **R$ 10,2 bilhões**, valor equivalente a
  **75%** do aprovado pelo Green Climate Fund (ONU) no mesmo ano (BNDES).
- As operações aprovadas em 2024 devem evitar/remover, em média, **4,0 milhões de
  tCO₂e/ano**.
- Até 2024: **119 projetos**, ~R$ 1,8 bilhão em desembolsos e mais de R$ 1,1 bilhão em
  doações internalizadas.

## 16.2 O papel do poder público: do fomento ao mercado regulado

A **Lei 15.042/2024 (SBCE)** é a mudança institucional mais importante: cria o primeiro
mercado regulado **cap-and-trade** do país e o **CRVE** (Certificado de Redução ou
Remoção Verificada de Emissões) — a porta de entrada de florestas, restauração e
agropecuária no mercado regulado. A regulamentação detalhada (órgão gestor, leilões,
percentual de gratuidade) ainda estava **pendente em 29/08/2026**, gerando incerteza
jurídica para financiamentos de longo prazo.

## 16.3 A estrutura de repasse cooperativo

Chegar ao pequeno produtor exige capilaridade — e ela já existe no cooperativismo de
crédito. O **Sicredi**, maior cooperativa de crédito do país, foi o **principal agente
repassador do BNDES em 2023**, em parceria de mais de 25 anos. O BNDES opera o Fundo
Clima também por agentes financeiros cadastrados (bancos e cooperativas de crédito),
e mantém a linha **Crédito Cooperativas** para cooperativas de produtores rurais.

Esse é o canal institucional por onde o incentivo direto ao produtor (a política central
da Parte III) pode, de fato, chegar à ponta.

## 16.4 O desbalanceamento que precisa ser corrigido

O dado mais incômodo do dossiê: no inventário do BNDES de 2024, a **restauração de
biomas nativos** removeu apenas **~15 mil tCO₂e**, contra **~9,3 milhões** do plantio
florestal comercial. Ou seja, **os recursos climáticos públicos fluem majoritariamente
para monocultura**, não para restauração com benefício comunitário.

Soma-se a isso a queda do mercado voluntário (FGV: **−89%** no volume de créditos
emitidos em 2023 vs. 2021, com o número de estados geradores caindo à metade) — sinal
de instabilidade que afasta justamente os pequenos.

## 16.5 A direção proposta

Um modelo de financiamento coerente com este livro precisa de três eixos:
1. **Fomento direcionado** — Fundo Clima e BNDES priorizando restauração nativa e
   pequenos produtores, não monocultura.
2. **Repasse cooperativo** — usar a capilaridade das cooperativas de crédito para
   chegar a comunidades e agricultores familiares.
3. **Regra de repartição de benefícios** — regular, no SBCE, como povos indígenas e
   comunidades tradicionais recebem pelos créditos gerados em seus territórios
   (lacuna ainda sem regra publicada).

## Fontes citadas

1. BNDES — Estudo Especial: Emissões de GEE evitadas/removidas com apoio do Fundo Clima.
2. BNDES — Relatório Anual 2024.
3. Lei nº 15.042/2024 (SBCE). https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2024/lei/l15042.htm
4. Agência Brasil (23/07/2024) — mercado voluntário recua em 2023 (estudo FGV).
5. Sicredi — principal agente repassador BNDES 2023.
6. Climate Policy Initiative (2021) — Crédito para investimento da agropecuária e o clima.
7. Lei nº 12.114/2009 (Fundo Clima).
`,jm=`# Capítulo 17 — Calculadora de pegada gamificada

> **Registro:** rascunho v1.0. Especificação funcional — implementada como Módulo 3 da
> plataforma ECOMNIX v2 (engine \`calculadora.ts\`, motores em teste).

## 17.1 Objetivo

Transformar o conceito abstrato de "pegada de carbono" em uma **experiência mensurável
e engajadora** para o cidadão. A calculadora não é um fim em si: é a porta de entrada
educativa que conecta o indivíduo à transição (ver Cap. 15).

## 17.2 O que a calculadora mede

Três eixos de consumo cotidiano, com fatores de emissão de referência pública (GHG
Protocol / BNDES):

1. **Transporte** — km percorridos por modal (carro, ônibus, moto, bicicleta, a pé),
   com fatores por tipo de combustível.
2. **Energia** — consumo residencial (kWh/mês) e fonte da matriz.
3. **Resíduos** — geração de lixo (kg/mês) e percentual reciclado/compostado.

**Saída:** estimativa em **tCO₂e/ano** + equivalência em "créditos simulados"
(1 crédito = 1 tCO₂e), mais comparações pedagógicas ("equivale a X árvores/ano").

## 17.3 Camada de gamificação

Para engajar sem banalizar o problema:

- **Missões semanais** — trocar uma viagem de carro por bicicleta, reduzir consumo,
  separar recicláveis.
- **Marcos progressivos** — níveis de "descarbonização pessoal" com recompensas
  simbólicas (selos), nunca monetização real.
- **Feedback comparativo** — evolução do próprio usuário ao longo do tempo (não ranking
  entre pessoas, para evitar competição social).

## 17.4 Privacidade por desenho

Requisito não-negociável (briefing §6.3): **todo o cálculo roda no navegador do
usuário**, sem envio de dados a servidor, sem persistência e sem coleta de informação
pessoal sensível. A gamificação usa apenas estado local e opcional, mediante
consentimento explícito.

## 17.5 O que a calculadora NÃO faz

- Não emite crédito real nem transaciona valores.
- Não substitui a redução estrutural de emissões (a compensação individual é
  complementar, não substituta — Cap. 15).
- Não usa metodologia proprietária: os fatores são públicos e citáveis.

## Fonte metodológica

- BNDES — calculadoras públicas de emissões evitadas/removidas.
- GHG Protocol — fatores de emissão de referência.
- FGV — Registro Público de Emissões.
`,Rm=`# Capítulo 18 — Simulador de acúmulo e resgate de créditos

> **Registro:** rascunho v1.0. Especificação funcional — implementada como Módulo 4 da
> plataforma ECOMNIX v2 (engine \`resgate.ts\`, motores em teste).

## 18.1 Objetivo

Demonstrar, de forma **lúdica e educativa**, como funciona a lógica de acumular e
resgatar créditos — sem que o usuário confunda simulação com transação real.

## 18.2 A mecânica

O usuário acumula "créditos simulados" (a partir da calculadora do Cap. 17 ou de
cenários pré-definidos) e os converte em **categorias de recompensa**:

- **Mobilidade** — passagens, bicicleta, transporte público.
- **Bem-estar** — hospedagem, experiências de turismo regenerativo.
- **Educação** — cursos, materiais.
- **Doação** — aporte a cooperativas e projetos comunitários (a destinação mais coerente
  com a tese do livro).

## 18.3 O aviso de não-transação (obrigatório)

A interface deve deixar **explícito e permanente** que se trata de **simulação
educativa**, não de uma transação real: nenhum valor é movimentado, nenhum crédito é
emitido, nenhum dado é persistido em servidor.

## 18.4 A função pedagógica

O simulador ensina três conceitos que estruturam o livro:

1. **Acúmulo** — a pegada reduzida "rende" crédito proporcional ao esforço.
2. **Resgate** — o crédito tem valor de uso social, não só financeiro.
3. **Integridade** — a simulação mostra que crédito sem adicionalidade e verificação
   "não vale" (o resgate é bloqueado para créditos sem lastro, ilustrando o MRV).

## 18.5 Por que simular e não transacionar

A escolha por simulação (e não por um marketplace real) é deliberada: um marketplace
real exigiria licença financeira, verificação de créditos e exporia usuários a risco de
greenwashing. A simulação entrega o valor educacional **sem** os riscos — e prepara o
terreno para um eventual mercado regulado futuro (SBCE).

## Fonte metodológica

- Lei nº 15.042/2024 (SBCE) — enquadramento do mercado regulado/voluntário.
- Cap. 15 deste livro — limites e riscos do crédito individual.
`,Mm=`# Capítulo 19 — Conceito de aplicativo móvel e smartwatch

> **Registro:** rascunho v1.0. Especificação funcional de um conceito (mockup navegável
> na plataforma), não um aplicativo publicável.

## 19.1 A visão

Um aplicativo que coloca a pegada de carbono **no pulso e no bolso** do cidadão,
fechando o ciclo "medir → reduzir → compensar → resgatar" do Cap. 15 em uma experiência
contínua e de baixo atrito.

## 19.2 Telas essenciais (smartphone)

1. **Dashboard de pegada** — pegada diária/semanal/mensal em tCO₂e, com decomposição
   por atividade (transporte, energia, resíduos).
2. **Monitor de ações** — missões ativas (mobilidade ativa, compostagem, coleta seletiva)
   e progresso.
3. **Saldo de créditos** — créditos simulados acumulados e histórico.
4. **Resgate** — categorias de recompensa (Cap. 18).
5. **Educação** — micro-conteúdos conectando a ação individual ao eixo estrutural.

## 19.3 A camada smartwatch

O relógio resolve o problema do **atrito** da mensuração:

- **Detecção automática de mobilidade ativa** — caminhada, corrida, pedalada (como o
  modelo FCarbon + Bikebox, Cap. 15).
- **Nudge comportamental** — lembretes discretos de missão, sem vigilância.
- **Resumo de pulso** — pegada do dia e "saldo" em um único olhar.

## 19.4 Princípios de desenho

- **Privacidade no dispositivo** — dados processados localmente; nada sensível em
  servidor (mesmo requisito dos Cap. 17–18).
- **Acessibilidade WCAG 2.1/2.2 AA** — o app deve incluir, não excluir.
- **Gamificação ética** — recompensas simbólicas, sem exploração de vício ou competição
  social.

## 19.5 Limites explícitos

Este é um **conceito** (mockup), não um produto: não há código publicável, integração
com lojas de aplicativo, nem coleta de dados de saúde/locais em produção. A exclusão
digital apontada no Cap. 15 permanece como limitação conhecida — o app é complementar às
políticas públicas, nunca substituto delas.

## Fonte metodológica

- Cap. 15 (crédito individual) e Cap. 17–18 (ferramentas) deste livro.
- FCarbon + Bikebox (referência de mensuração de mobilidade ativa).
`,Nm=`# Capítulo 20 — Estatísticas consolidadas e potencial por eixo de atuação

> **Registro:** rascunho v1.0. Síntese dos números verificados ao longo do livro. Nenhum
> número novo foi introduzido; todos remetem aos capítulos e dossiês de origem. Onde não
> há fonte primária, está marcado NÃO VERIFICADO.

## 20.1 Os números que este livro pode sustentar

| Eixo | Número-chave (fonte) | Cap. |
|---|---|---|
| Emissões | Brasil ~2,3 GtCO₂e/2023 (−12%); uso da terra 46%, agropecuária 28% (SEEG) | 1 |
| Inércia climática | CO₂ fica 15–40% por >1.000 anos; ZEC atrasa resposta (IPCC) | 2 |
| Impacto humano | >20 mi deslocados/ano; mortalidade 15× em vulneráveis (IPCC) | 3 |
| Custo | Mitigar < benefícios de reduzir aquecimento (IPCC AR6 WG3) | 4 |
| Certificação | 92,2% Verra (BR/2022); 2 certificadoras = 99% desde 2019 | 5 |
| Exclusão MRV | Limiar 10.000 tCO₂e/ano exclui agricultura familiar; agroalimentos = 1% dos créditos | 5 |
| Fraudes | PF Greenwashing: R$180 mi em créditos irregulares (corroborado) | 6 |
| Queimadas | 30,8 Mha/2024; prevenção US$ 3,7–11,2/ha vs perda até US$ 565/ha (25×) | 8 |
| MIF | −57% área queimada, −39% emissões em 3 anos (piloto 2014) | 8 |
| Caatinga | +4,0 °C (RCP8.5); 112 municípios em desertificação grave; 1% protegida | 8 |
| Matas ciliares | Anistia de ~4,5 Mha de APPs (Guidotti 2017) | 9 |
| Restauração | Meta 12 Mha (PROVEG); TIs = 14,8% do território, só 1,3% do desmatamento | 10 |
| Monitoramento | Desmatamento Amazônia −30,6% (PRODES 2024); alerta ≠ infração | 11 |
| Metano | Fermentação entérica 355,1 MtCO₂e; 3-NOP −13% a −27% | 12 |
| Biodigestores | 1.365 plantas; <2% do potencial de 84,6 bi Nm³/ano | 12 |
| Resíduos | 41,5% destinação inadequada; 67,2% da reciclagem por catadores informais | 13 |
| Aterros | Bandeirantes: 16,1 MtCO₂e (1º do mundo em crédito por resíduo) | 14 |
| Crédito individual | VCM US$ 5,3 bi (2025) → US$ 52,4 bi (2033); indivíduos = segmento que mais cresce | 15 |
| Financiamento | Fundo Clima R$ 10,2 bi (2024); restauração nativa 15 mil vs monocultura 9,3 mi tCO₂e | 16 |

## 20.2 A leitura transversal

Três padrões emergem da tabela:

1. **A mitigação é barata onde se mede** — prevenir fogo custa uma fração da perda; o
   gargalo é direcionamento, não recurso (Cap. 4, 8).
2. **A exclusão é estrutural** — 92,2% de concentração, limiar de MRV que exclui a
   agricultura familiar, 1% dos créditos vindo do agroalimentar (Cap. 5, 6, 7).
3. **A ciência está pronta, o financiamento não** — 3-NOP validado em laboratório,
   biodigestores a <2% do potencial, restauração nativa recebendo uma fração mínima
   (Cap. 12, 16).

## 20.3 O que NÃO foi quantificado (transparência)

Três monetizações permanecem **NÃO VERIFICADAS** por falta de fonte primária — e este
livro **não atribui número** a elas:

1. Custo unitário de implementação do MIF em R$/ha (Cap. 8).
2. Valor monetizado do potencial de prevenção específico da Caatinga (Cap. 8).
3. Volume financeiro agregado de compensação por pessoa física no Brasil (Cap. 15).

A honestidade aqui é parte do argumento: um mercado que não publica esses dados é um
mercado que não pode ser **auditado** — e a falta de auditoria é, ela mesma, a evidência
central do diagnóstico da Parte II.
`,Tm=`# Capítulo 21 — Chamada à ação institucional

> **Registro:** rascunho v1.0. Fechamento do livro — síntese propositiva, sem introduzir
> dado novo.

## 21.1 A tese, em uma frase

**O mercado de carbono brasileiro, tal como desenhado, produz a exclusão dos que mais
conservam — e a tecnologia, se orientada à justiça, pode inverter essa equação.**

## 21.2 O que cada ator deve fazer

### Governo e Poder Público
- **Regulamentar o SBCE (Lei 15.042/2024) com MRV acessível** — criar metodologias
  nacionais para Cerrado e Caatinga, e uma certificadora pública (BNDES) que reduza a
  dependência de padrões estrangeiros.
- **Garantir repartição de benefícios** — os ≥5% destinados a povos indígenas e
  comunidades tradicionais (art. 28) precisam virar mecanismo operacional, não promessa.
- **Fazer cumprir a meta de 12 Mha de restauração** (PROVEG) com monitoramento público
  contínuo.

### Bancos de fomento (BNDES, Fundo Clima)
- **Redirecionar o portfólio** — hoje a restauração nativa recebe uma fração mínima
  frente à monocultura (Cap. 16); o financiamento climático deve priorizar quem
  conserva.
- **Capilarizar via cooperativas de crédito** — usar a rede existente (Sicredi e outras)
  para chegar a pequenos produtores.

### Universidades e ciência
- **Transformar P&D em escala** — os aditivos anti-metano, biodigestores e catalisadores
  já validados (Cap. 12) precisam de ponte para o campo, financiada pelo retorno de
  créditos.
- **Produzir os dados que faltam** — o custo do MIF, a monetização da Caatinga e o MRV
  comunitário são lacunas que a academia pode fechar (Cap. 20).

### Sociedade civil, cooperativas e cidadãos
- **Exigir integridade** — crédito sem adicionalidade e sem verificação não compensa
  nada; o consumidor e o cidadão têm papel de fiscal.
- **Organizar-se em cooperativas** — a economia circular e a energia distribuída (Cap.
  13) mostram que a escala vem da associação, não da subordinação.

## 21.3 O convite que fecha o livro

Este livro começou com uma pergunta física (de onde vêm as emissões) e termina com uma
pergunta de justiça: **a quem pertence o valor do carbono que a floresta em pé e o solo
conservado geram?**

A resposta técnica já existe — satélite, MRV, blockchain, biodigestores. O que falta é a
**decisão política** de direcionar essa tecnologia para quem historicamente conservou.
Quando isso acontecer, a fronteira da justiça climática deixará de ser um problema e
passará a ser um **ecossistema regenerativo** — a plataforma ECOMNIX e as ferramentas da
Parte IV são um convite concreto para começar.
`,zm={cap01:fm,cap02:hm,cap03:gm,cap04:bm,cap05:xm,cap06:vm,cap07:ym,cap08:km,cap09:Cm,cap10:wm,cap11:Sm,cap12:Em,cap13:Am,cap14:Im,cap15:Pm,cap16:Om,cap17:jm,cap18:Rm,cap19:Mm,cap20:Nm,cap21:Tm},st=pm.map(e=>({numero:e.numero,parte:e.parte,titulo:e.titulo,slug:`cap${String(e.numero).padStart(2,"0")}`,conteudo:zm[`cap${String(e.numero).padStart(2,"0")}`]??""}));function Fm(e){return st.find(t=>t.numero===e)}const qm=[{numero:1,slug:"emissions",titulo:"Emissões de GEE — orçamento de carbono",tema:"Atmosfera como conta, calor retido e cinco setores emissores"},{numero:2,slug:"timeline",titulo:"Linha do tempo climática",tema:"Emissão hoje e consequência décadas depois; inércia climática"},{numero:3,slug:"consequences",titulo:"Consequências",tema:"Eventos extremos, biodiversidade, água e alimento, deslocamento"},{numero:4,slug:"balance",titulo:"Por que mitigar compensa",tema:"Balança entre custo pesado da inação e custo leve da mitigação"},{numero:5,slug:"credit",titulo:"Como funciona um crédito",tema:"MRV, mercado regulado e voluntário, registro público de ativos"},{numero:6,slug:"asymmetry",titulo:"Diagnóstico de assimetria",tema:"Concentração de benefícios e exclusão de pequenos participantes"},{numero:7,slug:"paradox",titulo:"Paradoxo da conservação",tema:"Quem conserva recebe menos enquanto exploração acessa capital"},{numero:8,slug:"fire",titulo:"Biomas Caatinga e Cerrado",tema:"Fogo, prevenção, combate e manejo integrado"},{numero:9,slug:"river",titulo:"Matas ciliares",tema:"Rios, enchentes, assoreamento e segurança hídrica"},{numero:10,slug:"reforest",titulo:"Reflorestamento e desertificação",tema:"Árvores retornando e comunidades como protagonistas"},{numero:11,slug:"monitor",titulo:"Monitoramento tecnológico",tema:"Satélites, drones, torres e brigadas comunitárias"},{numero:12,slug:"science",titulo:"Ciência aplicada",tema:"Biodigestores, metano entérico, catalisadores e pesquisa universitária"},{numero:13,slug:"circular",titulo:"Economia circular urbana",tema:"Cooperativas de reciclagem, hidrogênio verde e energia solar compartilhada"},{numero:14,slug:"cities",titulo:"Cidades responsivas",tema:"Aterros, arborização urbana e rios urbanos recuperados"},{numero:15,slug:"individual",titulo:"Crédito individual",tema:"Aplicativo de pegada, mobilidade ativa, compostagem e resgate"},{numero:16,slug:"finance",titulo:"Modelos de financiamento",tema:"Bancos de fomento, poder público e repasse cooperativo"},{numero:17,slug:"calculator",titulo:"Calculadora de pegada gamificada",tema:"Interface lúdica para cálculo de pegada e progresso"},{numero:18,slug:"simulator",titulo:"Simulador de acúmulo e resgate",tema:"Créditos convertidos em recompensas em simulação educativa"},{numero:19,slug:"devices",titulo:"Aplicativo móvel e smartwatch",tema:"Monitoramento integrado no celular e no pulso"},{numero:20,slug:"dashboard",titulo:"Estatísticas consolidadas",tema:"Panorama de impacto por eixo em infográfico"},{numero:21,slug:"action",titulo:"Chamada à ação",tema:"Governo, bancos, universidades e sociedade civil agindo em conjunto"}];function $a(e){return qm.find(t=>t.numero===e)}function Dm(){return m.jsx("section",{className:"section page-top",children:m.jsxs("div",{className:"wrap wrap--narrow",children:[m.jsx(_e,{kicker:"Módulo 02 · Biblioteca",title:"Biblioteca de iniciativas",lede:"Cinco eixos de atuação (Parte III do livro), com o capítulo correspondente na íntegra."}),mm.map(e=>{const t=Fm(e.capitulo),n=$a(e.capitulo);return m.jsxs("details",{className:"chapter",children:[m.jsxs("summary",{children:[m.jsxs("span",{className:"num",children:["Cap. ",e.capitulo]}),m.jsx("span",{children:e.titulo})]}),m.jsxs("div",{className:"chapter__body",children:[m.jsx("p",{style:{color:"var(--ink-soft)",fontStyle:"italic"},children:e.descricao}),n&&m.jsx(Ua,{info:n}),t?m.jsx(Va,{content:t.conteudo}):m.jsx("p",{children:"Capítulo ainda não disponível."})]})]},e.slug)})]})})}function xe({label:e,value:t,min:n,max:r,step:a,unit:o="",onChange:i}){return m.jsxs("div",{className:"ctl",children:[m.jsxs("label",{className:"ctl__label",htmlFor:`slider-${e.replace(/\s+/g,"-")}`,children:[m.jsx("span",{children:e}),m.jsxs("span",{className:"ctl__value",children:[t.toLocaleString("pt-BR")," ",o]})]}),m.jsx("input",{id:`slider-${e.replace(/\s+/g,"-")}`,type:"range",min:n,max:r,step:a,value:t,onChange:s=>i(Number(s.target.value))})]})}function Ga({label:e,value:t,onChange:n,options:r}){return m.jsxs("div",{className:"ctl",children:[m.jsx("span",{className:"ctl__label",children:m.jsx("span",{children:e})}),m.jsx("div",{className:"chips",role:"group","aria-label":e,children:r.map(a=>m.jsx("button",{type:"button",className:"chip-btn","aria-pressed":t===a.value,onClick:()=>n(a.value),children:a.label},a.value))})]})}function yn({label:e,value:t,kind:n="default",hint:r}){const a=n==="amber"?"stat--amber":n==="green"?"stat--green":"";return m.jsxs("div",{className:"card",children:[m.jsx("p",{style:{margin:0,fontSize:"0.85rem",color:"var(--ink-soft)"},children:e}),m.jsx("div",{className:`stat ${a}`,children:t}),r&&m.jsx("p",{style:{margin:"8px 0 0",fontSize:"0.8rem",color:"var(--ink-faint)"},children:r})]})}const _m={gasolina:{kgPorUnidade:.18,fonte:"faixa nacional (EPE/DEFRA)"},etanol:{kgPorUnidade:.11,fonte:"faixa nacional (EPE/DEFRA)"},diesel:{kgPorUnidade:.19,fonte:"faixa nacional (EPE/DEFRA)"},eletrico:{kgPorUnidade:.012,fonte:"matriz elétrica BR (SIN)"}},pn={moto:{kgPorUnidade:.085},onibus:{kgPorUnidade:.1},metro:{kgPorUnidade:.028},aviao:{kgPorUnidade:.18}},Bm=.1,Lm=3,Vm=13,Um=.5,$m=.5,Gm=1;function Hm(e){const t=Math.max(e.carroKmAno,0)*_m[e.combustivel].kgPorUnidade,n=Math.max(e.motoKmAno,0)*pn.moto.kgPorUnidade,r=Math.max(e.onibusKmAno,0)*pn.onibus.kgPorUnidade,a=Math.max(e.metroKmAno,0)*pn.metro.kgPorUnidade,o=Math.max(e.aviaoKmAno,0)*pn.aviao.kgPorUnidade,i=t+n+r+a+o,s=Math.max(e.kwhMes,0)*12*Bm,l=Math.max(e.botijoesGLPMes,0)*12*Vm*Lm,u=s+l,d=Math.max(e.kgResiduosMes,0)*12,c=Math.min(Math.max(e.pctReciclado,0),100),f=d*(c/100),b=(d-f)*Um-f*$m,C=i+u+b,w=C/1e3,x=w/Gm;return{categorias:[{rotulo:"Transporte",kgAno:i,fonte:"TRANSPORTE_CARRO / MOBILIDADE"},{rotulo:"Energia",kgAno:u,fonte:"FATOR_ELETRICO_SIN + GLP"},{rotulo:"Resíduos (líquido)",kgAno:b,fonte:"RESIDUO_*"}],totalKgAno:Math.max(C,0),totalTonAno:Math.max(w,0),creditosSimulados:Math.max(x,0)}}const Xn=e=>e.toLocaleString("pt-BR",{maximumFractionDigits:2});function Wm(){const[e,t]=Z.useState("gasolina"),[n,r]=Z.useState(1e4),[a,o]=Z.useState(0),[i,s]=Z.useState(2e3),[l,u]=Z.useState(1500),[d,c]=Z.useState(2e3),[f,p]=Z.useState(180),[b,C]=Z.useState(1),[w,x]=Z.useState(30),[A,S]=Z.useState(20),N=Hm({combustivel:e,carroKmAno:n,motoKmAno:a,onibusKmAno:i,metroKmAno:l,aviaoKmAno:d,kwhMes:f,botijoesGLPMes:b,kgResiduosMes:w,pctReciclado:A});return m.jsx("section",{className:"section page-top",children:m.jsxs("div",{className:"wrap",children:[m.jsxs(_e,{kicker:"Módulo 03 · Calculadora",title:"Calculadora de pegada de carbono",lede:m.jsxs(m.Fragment,{children:["Estime sua pegada anual em três dimensões — transporte, energia e resíduos — e veja a equivalência em ",m.jsx("strong",{children:"créditos simulados"})," (1 crédito = 1 tCO₂e). Processamento 100% no cliente, sem persistência."]}),children:[m.jsx(kn,{kind:"estimativa"}),m.jsx("span",{className:"chip",children:"Sem coleta de dados"})]}),m.jsxs("div",{className:"sim",children:[m.jsxs("div",{className:"sim-controls card",children:[m.jsx("h3",{className:"ctl-group",children:"Transporte"}),m.jsx(Ga,{label:"Combustível do carro",value:e,onChange:t,options:[{value:"gasolina",label:"Gasolina"},{value:"etanol",label:"Etanol"},{value:"diesel",label:"Diesel"},{value:"eletrico",label:"Elétrico"}]}),m.jsx(xe,{label:"Carro (km/ano)",value:n,min:0,max:4e4,step:500,unit:"km",onChange:r}),m.jsx(xe,{label:"Moto (km/ano)",value:a,min:0,max:2e4,step:500,unit:"km",onChange:o}),m.jsx(xe,{label:"Ônibus (km/ano)",value:i,min:0,max:15e3,step:200,unit:"km",onChange:s}),m.jsx(xe,{label:"Metrô (km/ano)",value:l,min:0,max:15e3,step:200,unit:"km",onChange:u}),m.jsx(xe,{label:"Avião doméstico (km/ano)",value:d,min:0,max:3e4,step:500,unit:"km",onChange:c}),m.jsx("h3",{className:"ctl-group",children:"Energia"}),m.jsx(xe,{label:"Eletricidade (kWh/mês)",value:f,min:0,max:1e3,step:10,unit:"kWh",onChange:p}),m.jsx(xe,{label:"Gás de cozinha (botijões/mês)",value:b,min:0,max:6,step:1,unit:"botijão",onChange:C}),m.jsx("h3",{className:"ctl-group",children:"Resíduos"}),m.jsx(xe,{label:"Resíduos gerados (kg/mês)",value:w,min:0,max:100,step:1,unit:"kg",onChange:x}),m.jsx(xe,{label:"Reciclados/compostados (%)",value:A,min:0,max:100,step:1,unit:"%",onChange:S})]}),m.jsxs("div",{className:"sim-results",children:[m.jsx(yn,{label:"Pegada estimada anual",value:`${Xn(N.totalTonAno)} t CO₂e`,kind:"amber",hint:"Transporte + energia + resíduos (líquido)"}),m.jsx(yn,{label:"Equivalência em créditos simulados",value:Xn(N.creditosSimulados),kind:"green",hint:"1 crédito simulado = 1 tCO₂e (educacional, não certificado)"}),m.jsxs("div",{className:"card",style:{marginTop:16},children:[m.jsx("h3",{children:"Decomposição (kg CO₂e/ano)"}),N.categorias.map(y=>{const q=N.totalKgAno>0?Math.min(Math.max(y.kgAno,0)/N.totalKgAno*100,100):0;return m.jsxs("div",{style:{marginBottom:12},children:[m.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"0.85rem"},children:[m.jsx("span",{children:y.rotulo}),m.jsxs("span",{className:"mono",children:[Xn(y.kgAno)," kg"]})]}),m.jsx("div",{className:"meter",role:"progressbar","aria-valuenow":Math.round(q),"aria-valuemin":0,"aria-valuemax":100,"aria-label":`${y.rotulo} ${Math.round(q)}%`,children:m.jsx("span",{style:{width:`${q}%`}})})]},y.rotulo)})]}),m.jsxs("div",{className:"callout callout--warn",style:{marginTop:16},children:[m.jsx("strong",{children:"Natureza educacional."})," Os fatores são estimativas de ordem de grandeza com fonte declarada. A pegada aqui é uma estimativa — não uma medição pessoal, e não gera crédito certificado."]})]})]})]})})}const gn={compensar:{rotulo:"Compensar minha pegada",descricao:"Retira créditos simulados para neutralizar a pegada calculada."},projeto:{rotulo:"Aportar em projeto",descricao:"Aloca créditos simulados a uma iniciativa (reflorestamento, matas ciliares)."},aposentar:{rotulo:"Aposentar (retire)",descricao:"Aposenta permanentemente os créditos simulados — sem reuso."},doar:{rotulo:"Doar",descricao:"Transfere créditos simulados a outro agente (simulado)."}},Km=48,Xm=5556,Qm="Simulação educativa — não há transação real, crédito certificado ou valor monetário envolvido.";function Ym(e){const t=Math.max(e.creditosDisponiveis,0),n=Math.max(e.quantidade,0),r=gn[e.tipo],a={tipo:e.tipo,rotuloTipo:r.rotulo,creditosUsados:0,creditosRestantes:t,arvoresEquivalentes:0,kmCarroEquivalentes:0,avisoEducacional:Qm};return n<=0?{...a,ok:!1,erro:"Quantidade deve ser maior que zero."}:n>t?{...a,ok:!1,erro:"Quantidade excede os créditos simulados disponíveis."}:{...a,ok:!0,creditosUsados:n,creditosRestantes:t-n,arvoresEquivalentes:n*Km,kmCarroEquivalentes:n*Xm}}const fn=e=>e.toLocaleString("pt-BR",{maximumFractionDigits:2});function Jm(){const[e,t]=Z.useState(10),[n,r]=Z.useState("compensar"),[a,o]=Z.useState(3),i=Ym({creditosDisponiveis:e,tipo:n,quantidade:a});return m.jsx("section",{className:"section page-top",children:m.jsxs("div",{className:"wrap",children:[m.jsxs(_e,{kicker:"Módulo 04 · Simulador",title:"Simulador de resgate (educativo)",lede:m.jsxs(m.Fragment,{children:["Demonstre a ",m.jsx("strong",{children:"mecânica"})," do ciclo de vida de um crédito — compensar, aportar, aposentar ou doar — sem nenhuma transação real. Tudo é simulado e efêmero."]}),children:[m.jsx(kn,{kind:"conceito"}),m.jsx("span",{className:"chip",children:"Não é transação real"})]}),m.jsxs("div",{className:"sim",children:[m.jsxs("div",{className:"sim-controls card",children:[m.jsx("h3",{className:"ctl-group",children:"Parâmetros"}),m.jsxs("div",{className:"ctl",children:[m.jsxs("label",{className:"ctl__label",htmlFor:"creditos-disponiveis",children:[m.jsx("span",{children:"Créditos simulados disponíveis"}),m.jsx("span",{className:"ctl__value",children:e})]}),m.jsx("input",{id:"creditos-disponiveis",type:"range",min:0,max:100,step:1,value:e,onChange:s=>t(Number(s.target.value))})]}),m.jsx(Ga,{label:"Tipo de resgate",value:n,onChange:r,options:Object.keys(gn).map(s=>({value:s,label:gn[s].rotulo}))}),m.jsxs("div",{className:"ctl",children:[m.jsxs("label",{className:"ctl__label",htmlFor:"quantidade",children:[m.jsx("span",{children:"Quantidade a resgatar"}),m.jsx("span",{className:"ctl__value",children:a})]}),m.jsx("input",{id:"quantidade",type:"range",min:0,max:e,step:1,value:a,onChange:s=>o(Number(s.target.value))})]}),m.jsx("p",{style:{fontSize:"0.8rem",color:"var(--ink-soft)",margin:0},children:gn[n].descricao})]}),m.jsxs("div",{className:"sim-results",children:[i.ok?m.jsxs(m.Fragment,{children:[m.jsx(yn,{label:i.rotuloTipo,value:`${fn(i.creditosUsados)} créditos`,kind:"amber"}),m.jsx(yn,{label:"Créditos restantes",value:fn(i.creditosRestantes),kind:"green"}),m.jsxs("div",{className:"card",style:{marginTop:16},children:[m.jsx("h3",{children:"Equivalências (ordem de grandeza)"}),m.jsxs("p",{style:{margin:0,fontSize:"0.9rem"},children:[m.jsx("span",{className:"mono",children:fn(i.arvoresEquivalentes)})," árvores/ano de absorção ·"," ",m.jsx("span",{className:"mono",children:fn(i.kmCarroEquivalentes)})," km de carro a gasolina evitados."]})]})]}):m.jsx("div",{className:"card card--flat",style:{borderColor:"var(--danger)"},children:m.jsxs("p",{style:{color:"var(--danger)",margin:0},children:[m.jsx("strong",{children:"Atenção:"})," ",i.erro]})}),m.jsxs("div",{className:"callout callout--danger",style:{marginTop:16},children:[m.jsx("strong",{children:i.avisoEducacional})," Crédito simulado ≠ crédito de carbono certificado. Nenhum dado é armazenado ou transmitido."]})]})]})]})})}function Zm(){return m.jsx("section",{className:"section page-top",children:m.jsxs("div",{className:"wrap wrap--narrow",children:[m.jsx(_e,{kicker:"Módulo 05 · App móvel",title:"Mockup navegável (smartphone e smartwatch)",lede:"Especificação funcional do conceito de app ECOMNIX — não é um aplicativo publicável. Ilustra o que o capítulo 19 descreve.",children:m.jsx(kn,{kind:"conceito"})}),m.jsxs("div",{className:"grid grid--2",style:{alignItems:"start"},children:[m.jsxs("div",{className:"device-frame device-frame--phone",children:[m.jsxs("div",{className:"device-bar",children:[m.jsx("span",{children:"ECOMNIX"}),m.jsx("span",{style:{fontSize:"0.7rem",fontFamily:"var(--font-mono)"},children:"3,4 t"})]}),m.jsxs("div",{className:"device-screen",children:[m.jsx("p",{className:"mono",style:{fontSize:"0.72rem",color:"var(--ink-faint)",margin:"0 0 8px"},children:"Pegada anual estimada"}),m.jsx("div",{className:"stat stat--amber",children:"3,4 t CO₂e"}),m.jsx("div",{className:"meter",style:{margin:"8px 0 16px"},children:m.jsx("span",{style:{width:"52%"}})}),m.jsxs("div",{className:"card card--flat",style:{padding:12,marginBottom:12},children:[m.jsx("strong",{style:{fontSize:"0.9rem"},children:"Créditos simulados"}),m.jsx("div",{className:"stat stat--green",style:{fontSize:"1.3rem"},children:"3,4"}),m.jsx("p",{style:{margin:0,fontSize:"0.78rem",color:"var(--ink-faint)"},children:"Equivalência educacional, não crédito certificado."})]}),m.jsxs("div",{style:{display:"flex",gap:8},children:[m.jsx("span",{className:"btn btn--primary",style:{flex:1,textAlign:"center",padding:"8px"},children:"Compensar"}),m.jsx("span",{className:"btn btn--ghost",style:{flex:1,textAlign:"center",padding:"8px"},children:"Aportar"})]}),m.jsx("p",{style:{margin:"12px 0 0",fontSize:"0.72rem",color:"var(--ink-faint)"},children:"Processamento local. Nenhum dado sai do dispositivo."})]})]}),m.jsxs("div",{children:[m.jsxs("div",{className:"watch-frame",children:[m.jsx("span",{className:"mono",style:{fontSize:"0.6rem",color:"#8fb",marginBottom:4},children:"ECOMNIX"}),m.jsx("span",{style:{fontFamily:"var(--font-mono)",fontSize:"1.4rem"},children:"0,8 t"}),m.jsx("span",{style:{fontSize:"0.62rem",color:"rgba(255,255,255,0.7)"},children:"redução simulada"})]}),m.jsxs("div",{className:"callout callout--warn",style:{marginTop:24},children:[m.jsx("strong",{children:"Especificação funcional."})," O mockup define telas, fluxos e mensagens de integridade — não implementa autenticação, transação ou integração com registros."]})]})]})]})})}function ep(){const e=Array.from(new Set(st.map(t=>t.parte)));return m.jsx("section",{className:"section page-top",children:m.jsxs("div",{className:"wrap wrap--narrow",children:[m.jsx(_e,{kicker:"Módulo 06 · Conhecimento",title:"Base de conhecimento",lede:"Os 21 capítulos do livro ECOMNIX, na íntegra, com as ilustrações. Clique em um capítulo para ler."}),e.map(t=>m.jsxs("div",{children:[m.jsx("h3",{className:"chapter-part",children:t}),st.filter(n=>n.parte===t).map(n=>{const r=$a(n.numero);return m.jsxs("details",{className:"chapter",children:[m.jsxs("summary",{children:[m.jsx("span",{className:"num",children:String(n.numero).padStart(2,"0")}),m.jsx("span",{children:n.titulo})]}),m.jsxs("div",{className:"chapter__body",children:[r&&m.jsx(Ua,{info:r}),m.jsx(Va,{content:n.conteudo})]})]},n.numero)})]},t))]})})}function np(){const{pathname:e}=ai();return Z.useEffect(()=>{window.scrollTo({top:0,behavior:"instant"})},[e]),null}function tp(){return m.jsx("section",{className:"section",children:m.jsxs("div",{className:"wrap wrap--narrow",children:[m.jsx("h1",{children:"Página não encontrada"}),m.jsx("p",{children:"O endereço acessado não existe."}),m.jsx("a",{className:"btn btn--primary",href:"#/",children:"Voltar ao início"})]})})}function rp(){return m.jsxs(m.Fragment,{children:[m.jsx("a",{className:"skip-link",href:"#main",children:"Pular para o conteúdo"}),m.jsx(vi,{}),m.jsxs("main",{id:"main",children:[m.jsx(np,{}),m.jsxs(ri,{children:[m.jsx(ke,{path:"/",element:m.jsx(Ci,{})}),m.jsx(ke,{path:"/diagnostico",element:m.jsx(Pi,{})}),m.jsx(ke,{path:"/biblioteca",element:m.jsx(Dm,{})}),m.jsx(ke,{path:"/calculadora",element:m.jsx(Wm,{})}),m.jsx(ke,{path:"/simulador",element:m.jsx(Jm,{})}),m.jsx(ke,{path:"/app",element:m.jsx(Zm,{})}),m.jsx(ke,{path:"/conhecimento",element:m.jsx(ep,{})}),m.jsx(ke,{path:"*",element:m.jsx(tp,{})})]})]}),m.jsx(yi,{})]})}bi.createRoot(document.getElementById("root")).render(m.jsx(Z.StrictMode,{children:m.jsx(ii,{children:m.jsx(rp,{})})}));
