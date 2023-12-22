import{c as p}from"./chunks/constants.01c4bef2.js";import{_ as y,o as _,c as d,k as s,t as l,C as u,H as i,a as n,Q as o}from"./chunks/framework.51d6c45b.js";const F={props:["params"],methods:{async add(){if(!window.keplr)alert("Please install keplr extension");else{if(window.keplr.experimentalSuggestChain)try{await window.keplr.experimentalSuggestChain({chainId:this.params.chainId,chainName:this.params.chainName,rpc:this.params.rpc,rest:this.params.rest,bip44:{coinType:118},bech32Config:{bech32PrefixAccAddr:"celestia",bech32PrefixAccPub:"celestiapub",bech32PrefixValAddr:"celestiavaloper",bech32PrefixValPub:"celestiavaloperpub",bech32PrefixConsAddr:"celestiavalcons",bech32PrefixConsPub:"celestiavalconspub"},currencies:[{coinDenom:"TIA",coinMinimalDenom:"utia",coinDecimals:6,coinGeckoId:"celestia"}],feeCurrencies:[{coinDenom:"TIA",coinMinimalDenom:"utia",coinDecimals:6,coinGeckoId:"celestia",gasPriceStep:{low:.01,average:.02,high:.1}}],stakeCurrency:{coinDenom:"TIA",coinMinimalDenom:"utia",coinDecimals:6,coinGeckoId:"celestia"}})}catch{alert("Failed to suggest the chain")}const t=this.params.chainId;await window.keplr.enable(t)}}}},A={class:"center"};function C(t,c,E,h,a,r){return _(),d("div",A,[s("button",{class:"keplrButton",onClick:c[0]||(c[0]=(...e)=>r.add&&r.add(...e))},l(`Add/switch to ${E.params.chainName}`),1)])}const m=y(F,[["render",C],["__scopeId","data-v-ff114fb5"]]),w={components:{AddNetworkKeplr:m},data(){return{constants:p,ARABICA_PARAMS:{chainId:`${p.arabicaChainId}`,chainName:"Arabica devnet",rpc:`${p.arabicaRpcUrl}`,rest:`${p.arabicaRestUrl}`},MOCHA_PARAMS:{chainId:`${p.mochaChainId}`,chainName:"Mocha testnet",rpc:`${p.mochaRpcUrl}`,rest:`${p.mochaRestUrl}`},MAINNET_PARAMS:{chainId:`${p.mainnetChainId}`,chainName:"Celestia",rpc:`${p.mainnetRpcUrl}`,rest:`${p.mainnetRestUrl}`}}}},un=JSON.parse('{"title":"Keplr integration with Celestia","description":"How you can add Celestia network parameters to Keplr.","frontmatter":{"description":"How you can add Celestia network parameters to Keplr.","next":{"text":"Integrating Leap for developers","link":"developers/leap"},"head":[["meta",{"name":"og:title","content":"Keplr integration with Celestia | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"developers/keplr.md","filePath":"developers/keplr.md","lastUpdated":1702996021000}'),T=o("",12),b=s("p",null,[n("Behind the scenes, here are the parameters we are passing to the "),s("code",null,"AddNetworkKeplr"),n(" function:")],-1),g={class:"vp-code-group vp-adaptive-theme"},k=o("",1),q={class:"blocks"},D={class:"language-js vp-adaptive-theme active"},I=s("button",{title:"Copy Code",class:"copy"},null,-1),f=s("span",{class:"lang"},"js",-1),B={class:"shiki github-dark vp-code-dark"},P=s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'@site/src/components/AddNetworkKeplr'")],-1),N=s("span",{class:"line"},null,-1),S=o("",1),v={class:"line"},R={style:{color:"#9ECBFF"}},x=s("span",{class:"line"},[s("span",{style:{color:"#9ECBFF"}},"  chainName: 'Celestia',")],-1),M={class:"line"},K={style:{color:"#9ECBFF"}},V={class:"line"},U={style:{color:"#9ECBFF"}},j=s("span",{class:"line"},[s("span",{style:{color:"#9ECBFF"}},"}`"),s("span",{style:{color:"#E1E4E8"}},"}")],-1),O=s("span",{class:"line"},null,-1),G=o("",1),H={class:"shiki github-light vp-code-light"},z=s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'@site/src/components/AddNetworkKeplr'")],-1),L=s("span",{class:"line"},null,-1),Q=o("",1),J={class:"line"},Y={style:{color:"#032F62"}},W=s("span",{class:"line"},[s("span",{style:{color:"#032F62"}},"  chainName: 'Celestia',")],-1),X={class:"line"},Z={style:{color:"#032F62"}},$={class:"line"},ss={style:{color:"#032F62"}},ns=s("span",{class:"line"},[s("span",{style:{color:"#032F62"}},"}`"),s("span",{style:{color:"#24292E"}},"}")],-1),as=s("span",{class:"line"},null,-1),ls=o("",1),os={class:"language-js vp-adaptive-theme"},ps=s("button",{title:"Copy Code",class:"copy"},null,-1),es=s("span",{class:"lang"},"js",-1),ts={class:"shiki github-dark vp-code-dark"},cs=s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'@site/src/components/AddNetworkKeplr'")],-1),rs=s("span",{class:"line"},null,-1),is=o("",1),Es={class:"line"},ys={style:{color:"#9ECBFF"}},_s=s("span",{class:"line"},[s("span",{style:{color:"#9ECBFF"}},"  chainName: 'Mocha testnet',")],-1),ds={class:"line"},hs={style:{color:"#9ECBFF"}},us={class:"line"},Fs={style:{color:"#9ECBFF"}},As=s("span",{class:"line"},[s("span",{style:{color:"#9ECBFF"}},"}`"),s("span",{style:{color:"#E1E4E8"}},"}")],-1),Cs=s("span",{class:"line"},null,-1),ms=o("",1),ws={class:"shiki github-light vp-code-light"},Ts=s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'@site/src/components/AddNetworkKeplr'")],-1),bs=s("span",{class:"line"},null,-1),gs=o("",1),ks={class:"line"},qs={style:{color:"#032F62"}},Ds=s("span",{class:"line"},[s("span",{style:{color:"#032F62"}},"  chainName: 'Mocha testnet',")],-1),Is={class:"line"},fs={style:{color:"#032F62"}},Bs={class:"line"},Ps={style:{color:"#032F62"}},Ns=s("span",{class:"line"},[s("span",{style:{color:"#032F62"}},"}`"),s("span",{style:{color:"#24292E"}},"}")],-1),Ss=s("span",{class:"line"},null,-1),vs=o("",1),Rs={class:"language-js vp-adaptive-theme"},xs=s("button",{title:"Copy Code",class:"copy"},null,-1),Ms=s("span",{class:"lang"},"js",-1),Ks={class:"shiki github-dark vp-code-dark"},Vs=s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'@site/src/components/AddNetworkKeplr'")],-1),Us=s("span",{class:"line"},null,-1),js=o("",1),Os={class:"line"},Gs={style:{color:"#9ECBFF"}},Hs=s("span",{class:"line"},[s("span",{style:{color:"#9ECBFF"}},"  chainName: 'Arabica devnet',")],-1),zs={class:"line"},Ls={style:{color:"#9ECBFF"}},Qs={class:"line"},Js={style:{color:"#9ECBFF"}},Ys=s("span",{class:"line"},[s("span",{style:{color:"#9ECBFF"}},"}`"),s("span",{style:{color:"#E1E4E8"}},"}")],-1),Ws=s("span",{class:"line"},null,-1),Xs=o("",1),Zs={class:"shiki github-light vp-code-light"},$s=s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'@site/src/components/AddNetworkKeplr'")],-1),sn=s("span",{class:"line"},null,-1),nn=o("",1),an={class:"line"},ln={style:{color:"#032F62"}},on=s("span",{class:"line"},[s("span",{style:{color:"#032F62"}},"  chainName: 'Arabica devnet',")],-1),pn={class:"line"},en={style:{color:"#032F62"}},tn={class:"line"},cn={style:{color:"#032F62"}},rn=s("span",{class:"line"},[s("span",{style:{color:"#032F62"}},"}`"),s("span",{style:{color:"#24292E"}},"}")],-1),En=s("span",{class:"line"},null,-1),yn=o("",1);function _n(t,c,E,h,a,r){const e=u("AddNetworkKeplr");return _(),d("div",null,[T,i(e,{params:a.MAINNET_PARAMS},null,8,["params"]),i(e,{params:a.MOCHA_PARAMS},null,8,["params"]),i(e,{params:a.ARABICA_PARAMS},null,8,["params"]),b,s("div",g,[k,s("div",q,[s("div",D,[I,f,s("pre",B,[s("code",null,[P,n(`
`),N,n(`
`),S,n(`
`),s("span",v,[s("span",R,"  chainId: '"+l(a.constants.mainnetChainId)+"',",1)]),n(`
`),x,n(`
`),s("span",M,[s("span",K,"  rpc: '"+l(a.constants.mainnetRpcUrl)+"',",1)]),n(`
`),s("span",V,[s("span",U,"  rest: '"+l(a.constants.mainnetRestUrl)+"'",1)]),n(`
`),j,n(`
`),O,n(`
`),G])]),s("pre",H,[s("code",null,[z,n(`
`),L,n(`
`),Q,n(`
`),s("span",J,[s("span",Y,"  chainId: '"+l(a.constants.mainnetChainId)+"',",1)]),n(`
`),W,n(`
`),s("span",X,[s("span",Z,"  rpc: '"+l(a.constants.mainnetRpcUrl)+"',",1)]),n(`
`),s("span",$,[s("span",ss,"  rest: '"+l(a.constants.mainnetRestUrl)+"'",1)]),n(`
`),ns,n(`
`),as,n(`
`),ls])])]),s("div",os,[ps,es,s("pre",ts,[s("code",null,[cs,n(`
`),rs,n(`
`),is,n(`
`),s("span",Es,[s("span",ys,"  chainId: '"+l(a.constants.mochaChainId)+"',",1)]),n(`
`),_s,n(`
`),s("span",ds,[s("span",hs,"  rpc: '"+l(a.constants.mochaRpcUrl)+"',",1)]),n(`
`),s("span",us,[s("span",Fs,"  rest: '"+l(a.constants.mochaRestUrl)+"'",1)]),n(`
`),As,n(`
`),Cs,n(`
`),ms])]),s("pre",ws,[s("code",null,[Ts,n(`
`),bs,n(`
`),gs,n(`
`),s("span",ks,[s("span",qs,"  chainId: '"+l(a.constants.mochaChainId)+"',",1)]),n(`
`),Ds,n(`
`),s("span",Is,[s("span",fs,"  rpc: '"+l(a.constants.mochaRpcUrl)+"',",1)]),n(`
`),s("span",Bs,[s("span",Ps,"  rest: '"+l(a.constants.mochaRestUrl)+"'",1)]),n(`
`),Ns,n(`
`),Ss,n(`
`),vs])])]),s("div",Rs,[xs,Ms,s("pre",Ks,[s("code",null,[Vs,n(`
`),Us,n(`
`),js,n(`
`),s("span",Os,[s("span",Gs,"  chainId: '"+l(a.constants.arabicaChainId)+"',",1)]),n(`
`),Hs,n(`
`),s("span",zs,[s("span",Ls,"  rpc: '"+l(a.constants.arabicaRpcUrl)+"',",1)]),n(`
`),s("span",Qs,[s("span",Js,"  rest: '"+l(a.constants.arabicaRestUrl)+"'",1)]),n(`
`),Ys,n(`
`),Ws,n(`
`),Xs])]),s("pre",Zs,[s("code",null,[$s,n(`
`),sn,n(`
`),nn,n(`
`),s("span",an,[s("span",ln,"  chainId: '"+l(a.constants.arabicaChainId)+"',",1)]),n(`
`),on,n(`
`),s("span",pn,[s("span",en,"  rpc: '"+l(a.constants.arabicaRpcUrl)+"',",1)]),n(`
`),s("span",tn,[s("span",cn,"  rest: '"+l(a.constants.arabicaRestUrl)+"'",1)]),n(`
`),rn,n(`
`),En,n(`
`),yn])])])])])])}const Fn=y(w,[["render",_n]]);export{un as __pageData,Fn as default};
