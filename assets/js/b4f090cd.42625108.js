"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2378],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>N});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),k=d(n),N=r,c=k["".concat(o,".").concat(N)]||k[N]||s[N]||i;return n?a.createElement(c,p(p({ref:t},m),{},{components:n})):a.createElement(c,p({ref:t},m))}));function N(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,p=new Array(i);p[0]=k;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var d=2;d<i;d++)p[d]=n[d];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4186:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={id:"core.BaseRouter",title:"Interface: BaseRouter<T>",sidebar_label:"BaseRouter",custom_edit_url:null},p=void 0,l={unversionedId:"api/interfaces/core.BaseRouter",id:"api/interfaces/core.BaseRouter",title:"Interface: BaseRouter<T>",description:"core.BaseRouter",source:"@site/docs/api/interfaces/core.BaseRouter.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/core.BaseRouter",permalink:"/routingjs/docs/api/interfaces/core.BaseRouter",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"core.BaseRouter",title:"Interface: BaseRouter<T>",sidebar_label:"BaseRouter",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Valhalla",permalink:"/routingjs/docs/api/classes/valhalla.Valhalla"},next:{title:"ClientConstructorArgs",permalink:"/routingjs/docs/api/interfaces/core.ClientConstructorArgs"}},o={},d=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Implemented by",id:"implemented-by",level:2},{value:"Properties",id:"properties",level:2},{value:"client",id:"client",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"directions",id:"directions",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"Defined in",id:"defined-in-1",level:4},{value:"mapMatch",id:"mapmatch",level:3},{value:"Type declaration",id:"type-declaration-1",level:4},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns-1",level:5},{value:"Defined in",id:"defined-in-2",level:4},{value:"matrix",id:"matrix",level:3},{value:"Type declaration",id:"type-declaration-2",level:4},{value:"Parameters",id:"parameters-2",level:5},{value:"Returns",id:"returns-2",level:5},{value:"Defined in",id:"defined-in-3",level:4},{value:"reachability",id:"reachability",level:3},{value:"Type declaration",id:"type-declaration-3",level:4},{value:"Parameters",id:"parameters-3",level:5},{value:"Returns",id:"returns-3",level:5},{value:"Defined in",id:"defined-in-4",level:4}],m={toc:d};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/routingjs/docs/api/modules/core"},"core"),".BaseRouter"),(0,r.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"T")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,r.kt)("a",{parentName:"td",href:"/routingjs/docs/api/interfaces/core.Waypoint"},(0,r.kt)("inlineCode",{parentName:"a"},"Waypoint")))))),(0,r.kt)("h2",{id:"implemented-by"},"Implemented by"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/routingjs/docs/api/classes/graphhopper.GraphHopper"},(0,r.kt)("inlineCode",{parentName:"a"},"GraphHopper"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/routingjs/docs/api/classes/ors.ORS"},(0,r.kt)("inlineCode",{parentName:"a"},"ORS"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/routingjs/docs/api/classes/osrm.OSRM"},(0,r.kt)("inlineCode",{parentName:"a"},"OSRM"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/routingjs/docs/api/classes/valhalla.Valhalla"},(0,r.kt)("inlineCode",{parentName:"a"},"Valhalla")))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"client"},"client"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"client"),": ",(0,r.kt)("a",{parentName:"p",href:"/routingjs/docs/api/classes/core.Client"},(0,r.kt)("inlineCode",{parentName:"a"},"Client")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Record"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">",", ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"Record"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">",", ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"Record"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">",">"),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/gis-ops/routingjs/blob/b19e7dc/packages/core/BaseRouter.ts#L57"},"packages/core/BaseRouter.ts:57")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"directions"},"directions"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"directions"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"locations"),": (","[",(0,r.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),"]"," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"T"),")[], ",(0,r.kt)("inlineCode",{parentName:"p"},"profile"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"directionsOpts?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Record"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"symbol"),", ",(0,r.kt)("a",{parentName:"p",href:"/routingjs/docs/api/modules/core#jsonvalue"},(0,r.kt)("inlineCode",{parentName:"a"},"JSONValue")),">",", ",(0,r.kt)("inlineCode",{parentName:"p"},"dryRun?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/routingjs/docs/api/classes/core.Directions"},(0,r.kt)("inlineCode",{parentName:"a"},"Directions")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">",">"),(0,r.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"locations"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"profile"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"directionsOpts?"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"dryRun?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/routingjs/docs/api/classes/core.Directions"},(0,r.kt)("inlineCode",{parentName:"a"},"Directions")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">",">"),(0,r.kt)("h5",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"locations")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(","[",(0,r.kt)("inlineCode",{parentName:"td"},"number"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"number"),"]"," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"T"),")[]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"profile")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"directionsOpts?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Record"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"number")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"symbol"),", ",(0,r.kt)("a",{parentName:"td",href:"/routingjs/docs/api/modules/core#jsonvalue"},(0,r.kt)("inlineCode",{parentName:"a"},"JSONValue")),">")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"dryRun?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean"))))),(0,r.kt)("h5",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/routingjs/docs/api/classes/core.Directions"},(0,r.kt)("inlineCode",{parentName:"a"},"Directions")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">",">"),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/gis-ops/routingjs/blob/b19e7dc/packages/core/BaseRouter.ts#L63"},"packages/core/BaseRouter.ts:63")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"mapmatch"},"mapMatch"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"mapMatch"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"locations"),": (","[",(0,r.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),"]"," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"T"),")[], ",(0,r.kt)("inlineCode",{parentName:"p"},"profile"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"mapMatchOpts?"),": ",(0,r.kt)("a",{parentName:"p",href:"/routingjs/docs/api/interfaces/core.JSONObject"},(0,r.kt)("inlineCode",{parentName:"a"},"JSONObject")),", ",(0,r.kt)("inlineCode",{parentName:"p"},"dryRun?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/routingjs/docs/api/classes/core.Directions"},(0,r.kt)("inlineCode",{parentName:"a"},"Directions")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">",">"),(0,r.kt)("h4",{id:"type-declaration-1"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"locations"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"profile"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"mapMatchOpts?"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"dryRun?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/routingjs/docs/api/classes/core.Directions"},(0,r.kt)("inlineCode",{parentName:"a"},"Directions")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">",">"),(0,r.kt)("h5",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"locations")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(","[",(0,r.kt)("inlineCode",{parentName:"td"},"number"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"number"),"]"," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"T"),")[]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"profile")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"mapMatchOpts?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/routingjs/docs/api/interfaces/core.JSONObject"},(0,r.kt)("inlineCode",{parentName:"a"},"JSONObject")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"dryRun?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean"))))),(0,r.kt)("h5",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/routingjs/docs/api/classes/core.Directions"},(0,r.kt)("inlineCode",{parentName:"a"},"Directions")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">",">"),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/gis-ops/routingjs/blob/b19e7dc/packages/core/BaseRouter.ts#L85"},"packages/core/BaseRouter.ts:85")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"matrix"},"matrix"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"matrix"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"locations"),": (","[",(0,r.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),"]"," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"T"),")[], ",(0,r.kt)("inlineCode",{parentName:"p"},"profile"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"matrixOpts?"),": ",(0,r.kt)("a",{parentName:"p",href:"/routingjs/docs/api/interfaces/core.JSONObject"},(0,r.kt)("inlineCode",{parentName:"a"},"JSONObject")),", ",(0,r.kt)("inlineCode",{parentName:"p"},"dryRun?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/routingjs/docs/api/classes/core.Matrix"},(0,r.kt)("inlineCode",{parentName:"a"},"Matrix")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">",">"),(0,r.kt)("h4",{id:"type-declaration-2"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"locations"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"profile"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"matrixOpts?"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"dryRun?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/routingjs/docs/api/classes/core.Matrix"},(0,r.kt)("inlineCode",{parentName:"a"},"Matrix")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">",">"),(0,r.kt)("h5",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"locations")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(","[",(0,r.kt)("inlineCode",{parentName:"td"},"number"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"number"),"]"," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"T"),")[]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"profile")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"matrixOpts?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/routingjs/docs/api/interfaces/core.JSONObject"},(0,r.kt)("inlineCode",{parentName:"a"},"JSONObject")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"dryRun?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean"))))),(0,r.kt)("h5",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/routingjs/docs/api/classes/core.Matrix"},(0,r.kt)("inlineCode",{parentName:"a"},"Matrix")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">",">"),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/gis-ops/routingjs/blob/b19e7dc/packages/core/BaseRouter.ts#L70"},"packages/core/BaseRouter.ts:70")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"reachability"},"reachability"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"reachability"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"location"),": ","[",(0,r.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),"]"," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"T"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"profile"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"intervals"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),"[], ",(0,r.kt)("inlineCode",{parentName:"p"},"isochronesOpts?"),": ",(0,r.kt)("a",{parentName:"p",href:"/routingjs/docs/api/interfaces/core.JSONObject"},(0,r.kt)("inlineCode",{parentName:"a"},"JSONObject")),", ",(0,r.kt)("inlineCode",{parentName:"p"},"dryRun?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/routingjs/docs/api/classes/core.Isochrones"},(0,r.kt)("inlineCode",{parentName:"a"},"Isochrones")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">",">"),(0,r.kt)("h4",{id:"type-declaration-3"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"location"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"profile"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"intervals"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"isochronesOpts?"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"dryRun?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/routingjs/docs/api/classes/core.Isochrones"},(0,r.kt)("inlineCode",{parentName:"a"},"Isochrones")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">",">"),(0,r.kt)("h5",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"location")),(0,r.kt)("td",{parentName:"tr",align:"left"},"[",(0,r.kt)("inlineCode",{parentName:"td"},"number"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"number"),"]"," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"T"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"profile")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"intervals")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"),"[]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"isochronesOpts?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/routingjs/docs/api/interfaces/core.JSONObject"},(0,r.kt)("inlineCode",{parentName:"a"},"JSONObject")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"dryRun?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean"))))),(0,r.kt)("h5",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/routingjs/docs/api/classes/core.Isochrones"},(0,r.kt)("inlineCode",{parentName:"a"},"Isochrones")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">",">"),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/gis-ops/routingjs/blob/b19e7dc/packages/core/BaseRouter.ts#L77"},"packages/core/BaseRouter.ts:77")))}s.isMDXComponent=!0}}]);