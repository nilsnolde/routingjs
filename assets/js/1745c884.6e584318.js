"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4745],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),o=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=o(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),k=o(a),h=i,m=k["".concat(s,".").concat(h)]||k[h]||u[h]||l;return a?n.createElement(m,r(r({ref:t},d),{},{components:a})):n.createElement(m,r({ref:t},d))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=k;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,r[1]=p;for(var o=2;o<l;o++)r[o]=a[o];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},9891:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var n=a(7462),i=(a(7294),a(3905));const l={id:"valhalla.ValhallaManeuvers",title:"Interface: ValhallaManeuvers",sidebar_label:"ValhallaManeuvers",custom_edit_url:null},r=void 0,p={unversionedId:"api/interfaces/valhalla.ValhallaManeuvers",id:"api/interfaces/valhalla.ValhallaManeuvers",title:"Interface: ValhallaManeuvers",description:"valhalla.ValhallaManeuvers",source:"@site/docs/api/interfaces/valhalla.ValhallaManeuvers.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/valhalla.ValhallaManeuvers",permalink:"/routingjs/docs/api/interfaces/valhalla.ValhallaManeuvers",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"valhalla.ValhallaManeuvers",title:"Interface: ValhallaManeuvers",sidebar_label:"ValhallaManeuvers",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"ValhallaLocation",permalink:"/routingjs/docs/api/interfaces/valhalla.ValhallaLocation"},next:{title:"ValhallaMatrixOpts",permalink:"/routingjs/docs/api/interfaces/valhalla.ValhallaMatrixOpts"}},s={},o=[{value:"Properties",id:"properties",level:2},{value:"arrive_instruction",id:"arrive_instruction",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"begin_shape_index",id:"begin_shape_index",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"begin_street_names",id:"begin_street_names",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"bss_maneuver_type",id:"bss_maneuver_type",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"depart_instruction",id:"depart_instruction",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"end_shape_index",id:"end_shape_index",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"ferry",id:"ferry",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"gate",id:"gate",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"highway",id:"highway",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"instruction",id:"instruction",level:3},{value:"Defined in",id:"defined-in-9",level:4},{value:"length",id:"length",level:3},{value:"Defined in",id:"defined-in-10",level:4},{value:"rough",id:"rough",level:3},{value:"Defined in",id:"defined-in-11",level:4},{value:"roundabout_exit_count",id:"roundabout_exit_count",level:3},{value:"Defined in",id:"defined-in-12",level:4},{value:"sign",id:"sign",level:3},{value:"Index signature",id:"index-signature",level:4},{value:"Defined in",id:"defined-in-13",level:4},{value:"street_names",id:"street_names",level:3},{value:"Defined in",id:"defined-in-14",level:4},{value:"time",id:"time",level:3},{value:"Defined in",id:"defined-in-15",level:4},{value:"toll",id:"toll",level:3},{value:"Defined in",id:"defined-in-16",level:4},{value:"transit_info",id:"transit_info",level:3},{value:"Index signature",id:"index-signature-1",level:4},{value:"Defined in",id:"defined-in-17",level:4},{value:"travel_mode",id:"travel_mode",level:3},{value:"Defined in",id:"defined-in-18",level:4},{value:"travel_type",id:"travel_type",level:3},{value:"Defined in",id:"defined-in-19",level:4},{value:"type",id:"type",level:3},{value:"Defined in",id:"defined-in-20",level:4},{value:"verbal_arrive_instruction",id:"verbal_arrive_instruction",level:3},{value:"Defined in",id:"defined-in-21",level:4},{value:"verbal_depart_instruction",id:"verbal_depart_instruction",level:3},{value:"Defined in",id:"defined-in-22",level:4},{value:"verbal_multi_cue",id:"verbal_multi_cue",level:3},{value:"Defined in",id:"defined-in-23",level:4},{value:"verbal_post_transition_instruction",id:"verbal_post_transition_instruction",level:3},{value:"Defined in",id:"defined-in-24",level:4},{value:"verbal_pre_transition_instruction",id:"verbal_pre_transition_instruction",level:3},{value:"Defined in",id:"defined-in-25",level:4},{value:"verbal_transition_alert_instruction",id:"verbal_transition_alert_instruction",level:3},{value:"Defined in",id:"defined-in-26",level:4}],d={toc:o};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/routingjs/docs/api/modules/valhalla"},"valhalla"),".ValhallaManeuvers"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"arrive_instruction"},"arrive","_","instruction"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"arrive","_","instruction"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Written arrive time instruction. Typically used with a transit maneuver."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'"Arrive: 8:10 AM at 34 St - Herald Sq"\n')),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/gis-ops/routingjs/blob/b19e7dc/packages/valhalla/parameters.ts#L323"},"packages/valhalla/parameters.ts:323")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"begin_shape_index"},"begin","_","shape","_","index"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"begin","_","shape","_","index"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"Index into the list of shape points for the start of the maneuver."),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/gis-ops/routingjs/blob/b19e7dc/packages/valhalla/parameters.ts#L284"},"packages/valhalla/parameters.ts:284")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"begin_street_names"},"begin","_","street","_","names"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"begin","_","street","_","names"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,i.kt)("p",null,"When present, these are the street names at the beginning (transition point) of the\nnonobvious maneuver (if they are different than the names that are consistent along the\nentire nonobvious maneuver)."),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/gis-ops/routingjs/blob/b19e7dc/packages/valhalla/parameters.ts#L278"},"packages/valhalla/parameters.ts:278")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"bss_maneuver_type"},"bss","_","maneuver","_","type"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"bss","_","maneuver","_","type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"NoneAction"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"RentBikeAtBikeShare"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"ReturnBikeAtBikeShare"')),(0,i.kt)("p",null,"Used when travel_mode is bikeshare. Describes bike share maneuver."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,i.kt)("p",null,'The default value is "NoneAction".'),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/gis-ops/routingjs/blob/b19e7dc/packages/valhalla/parameters.ts#L353"},"packages/valhalla/parameters.ts:353")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"depart_instruction"},"depart","_","instruction"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"depart","_","instruction"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Written depart time instruction. Typically used with a transit maneuver,"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'"Depart: 8:04 AM from 8 St - NYU"\n')),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/gis-ops/routingjs/blob/b19e7dc/packages/valhalla/parameters.ts#L310"},"packages/valhalla/parameters.ts:310")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"end_shape_index"},"end","_","shape","_","index"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"end","_","shape","_","index"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"Index into the list of shape points for the end of the maneuver."),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/gis-ops/routingjs/blob/b19e7dc/packages/valhalla/parameters.ts#L286"},"packages/valhalla/parameters.ts:286")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"ferry"},"ferry"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"ferry"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"True if a ferry is encountered on this maneuver."),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/gis-ops/routingjs/blob/b19e7dc/packages/valhalla/parameters.ts#L296"},"packages/valhalla/parameters.ts:296")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"gate"},"gate"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"gate"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"True if a gate is encountered on this maneuver."),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/gis-ops/routingjs/blob/b19e7dc/packages/valhalla/parameters.ts#L294"},"packages/valhalla/parameters.ts:294")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"highway"},"highway"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"highway"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"True if a highway is encountered on this maneuver."),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/gis-ops/routingjs/blob/b19e7dc/packages/valhalla/parameters.ts#L290"},"packages/valhalla/parameters.ts:290")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"instruction"},"instruction"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"instruction"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Written maneuver instruction. Describes the maneuver."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'"Turn right onto Main Street"\n')),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/gis-ops/routingjs/blob/b19e7dc/packages/valhalla/parameters.ts#L247"},"packages/valhalla/parameters.ts:247")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"length"},"length"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"length"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"Maneuver length in the units specified."),(0,i.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/gis-ops/routingjs/blob/b19e7dc/packages/valhalla/parameters.ts#L282"},"packages/valhalla/parameters.ts:282")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"rough"},"rough"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"rough"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"True if the maneuver is unpaved or rough pavement, or has any portions that have rough pavement."),(0,i.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/gis-ops/routingjs/blob/b19e7dc/packages/valhalla/parameters.ts#L292"},"packages/valhalla/parameters.ts:292")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"roundabout_exit_count"},"roundabout","_","exit","_","count"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"roundabout","_","exit","_","count"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"The spoke to exit roundabout after entering."),(0,i.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/gis-ops/routingjs/blob/b19e7dc/packages/valhalla/parameters.ts#L303"},"packages/valhalla/parameters.ts:303")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"sign"},"sign"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"sign"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("p",null,"Contains the interchange guide information at a road junction associated with this maneuver."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"See"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://valhalla.readthedocs.io/en/latest/api/turn-by-turn/api-reference/#trip-legs-and-maneuvers"},"https://valhalla.readthedocs.io/en/latest/api/turn-by-turn/api-reference/#trip-legs-and-maneuvers")," the list of maneuver types for details."),(0,i.kt)("h4",{id:"index-signature"},"Index signature"),(0,i.kt)("p",null,"\u25aa ","[k: ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"]",": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,i.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/gis-ops/routingjs/blob/b19e7dc/packages/valhalla/parameters.ts#L301"},"packages/valhalla/parameters.ts:301")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"street_names"},"street","_","names"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"street","_","names"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,i.kt)("p",null,"List of street names that are consistent along the entire nonobvious maneuver."),(0,i.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/gis-ops/routingjs/blob/b19e7dc/packages/valhalla/parameters.ts#L272"},"packages/valhalla/parameters.ts:272")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"time"},"time"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"time"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"Estimated time along the maneuver in seconds."),(0,i.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/gis-ops/routingjs/blob/b19e7dc/packages/valhalla/parameters.ts#L280"},"packages/valhalla/parameters.ts:280")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"toll"},"toll"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"toll"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"True if the maneuver has any toll, or portions of the maneuver are subject to a toll."),(0,i.kt)("h4",{id:"defined-in-16"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/gis-ops/routingjs/blob/b19e7dc/packages/valhalla/parameters.ts#L288"},"packages/valhalla/parameters.ts:288")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"transit_info"},"transit","_","info"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"transit","_","info"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("p",null,"Contains the attributes that describe a specific transit route."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"See"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://valhalla.readthedocs.io/en/latest/api/turn-by-turn/api-reference/#trip-legs-and-maneuvers"},"https://valhalla.readthedocs.io/en/latest/api/turn-by-turn/api-reference/#trip-legs-and-maneuvers")," the list of maneuver types for details."),(0,i.kt)("h4",{id:"index-signature-1"},"Index signature"),(0,i.kt)("p",null,"\u25aa ","[k: ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"]",": ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"defined-in-17"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/gis-ops/routingjs/blob/b19e7dc/packages/valhalla/parameters.ts#L336"},"packages/valhalla/parameters.ts:336")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"travel_mode"},"travel","_","mode"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"travel","_","mode"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"ValhallaTravelMode")),(0,i.kt)("h4",{id:"defined-in-18"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/gis-ops/routingjs/blob/b19e7dc/packages/valhalla/parameters.ts#L342"},"packages/valhalla/parameters.ts:342")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"travel_type"},"travel","_","type"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"travel","_","type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"ValhallaTravelType")),(0,i.kt)("p",null,"Travel type for drive."),(0,i.kt)("h4",{id:"defined-in-19"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/gis-ops/routingjs/blob/b19e7dc/packages/valhalla/parameters.ts#L346"},"packages/valhalla/parameters.ts:346")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"type"},"type"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"defined-in-20"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/gis-ops/routingjs/blob/b19e7dc/packages/valhalla/parameters.ts#L239"},"packages/valhalla/parameters.ts:239")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"verbal_arrive_instruction"},"verbal","_","arrive","_","instruction"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"verbal","_","arrive","_","instruction"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Text suitable for use as a verbal arrive time instruction. Typically used with a transit\nmaneuver."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'"Arrive at 8:10 AM at 34 St - Herald Sq"\n')),(0,i.kt)("h4",{id:"defined-in-21"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/gis-ops/routingjs/blob/b19e7dc/packages/valhalla/parameters.ts#L330"},"packages/valhalla/parameters.ts:330")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"verbal_depart_instruction"},"verbal","_","depart","_","instruction"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"verbal","_","depart","_","instruction"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Text suitable for use as a verbal depart time instruction. Typically used with a\ntransit maneuver."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'"Depart at 8:04 AM from 8 St - NYU"\n')),(0,i.kt)("h4",{id:"defined-in-22"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/gis-ops/routingjs/blob/b19e7dc/packages/valhalla/parameters.ts#L317"},"packages/valhalla/parameters.ts:317")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"verbal_multi_cue"},"verbal","_","multi","_","cue"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"verbal","_","multi","_","cue"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"True if the verbal_pre_transition_instruction has been appended with the verbal\ninstruction of the next maneuver."),(0,i.kt)("h4",{id:"defined-in-23"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/gis-ops/routingjs/blob/b19e7dc/packages/valhalla/parameters.ts#L341"},"packages/valhalla/parameters.ts:341")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"verbal_post_transition_instruction"},"verbal","_","post","_","transition","_","instruction"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"verbal","_","post","_","transition","_","instruction"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Text suitable for use as a verbal message immediately after the maneuver transition."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'"Continue on U.S. 2 22 for 3.9 miles"\n')),(0,i.kt)("h4",{id:"defined-in-24"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/gis-ops/routingjs/blob/b19e7dc/packages/valhalla/parameters.ts#L270"},"packages/valhalla/parameters.ts:270")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"verbal_pre_transition_instruction"},"verbal","_","pre","_","transition","_","instruction"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"verbal","_","pre","_","transition","_","instruction"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Text suitable for use as a verbal message immediately prior to the maneuver transition."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'"Turn right onto North Prince Street, U.S. 2 22"\n')),(0,i.kt)("h4",{id:"defined-in-25"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/gis-ops/routingjs/blob/b19e7dc/packages/valhalla/parameters.ts#L262"},"packages/valhalla/parameters.ts:262")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"verbal_transition_alert_instruction"},"verbal","_","transition","_","alert","_","instruction"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"verbal","_","transition","_","alert","_","instruction"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Text suitable for use as a verbal alert in a navigation application. The transition alert\ninstruction will prepare the user for the forthcoming transition."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'"Turn right onto North Prince Street"\n')),(0,i.kt)("h4",{id:"defined-in-26"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/gis-ops/routingjs/blob/b19e7dc/packages/valhalla/parameters.ts#L255"},"packages/valhalla/parameters.ts:255")))}u.isMDXComponent=!0}}]);