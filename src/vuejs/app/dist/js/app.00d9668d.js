(function(t){function e(e){for(var r,o,s=e[0],l=e[1],d=e[2],u=0,f=[];u<s.length;u++)o=s[u],a[o]&&f.push(a[o][0]),a[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);c&&c(e);while(f.length)f.shift()();return i.push.apply(i,d||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,s=1;s<n.length;s++){var l=n[s];0!==a[l]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},i=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var d=0;d<s.length;d++)e(s[d]);var c=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"10b0":function(t,e,n){"use strict";var r=n("c7dd"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Index")],1)},i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-navbar",{attrs:{toggleable:"md",type:"dark",variant:"dark"}},[n("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),n("b-navbar-brand",{attrs:{href:"./"}},[t._v("Karabiner-Elements complex_modifications rules")]),n("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-item",{attrs:{href:"https://github.com/pqrs-org/KE-complex_modifications",target:"_blank"}},[n("icon",{attrs:{name:"external-link-alt"}}),t._v(" GitHub\n        ")],1)],1)],1)],1),n("div",{staticClass:"search"},[n("socket",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],attrs:{id:"loading-spinner"}}),n("b-row",{attrs:{"align-h":"center"}},[n("b-col",{attrs:{md:"6"}},[n("b-form",{on:{submit:t.search}},[n("b-input-group",[n("b-form-input",{attrs:{disabled:null===t.lunrIndex,placeholder:t.lunrIndex?"Search keywords...":"Fetching data..."},model:{value:t.searchQuery,callback:function(e){t.searchQuery=e},expression:"searchQuery"}}),n("b-input-group-append",[n("b-btn",{attrs:{type:"submit",variant:"primary"}},[t._v("Search")])],1)],1)],1)],1)],1)],1),n("b-container",[n("b-list-group",{staticClass:"toc"},[n("b-list-group-item",{attrs:{variant:"info"}},[t._v("Table of Contents")]),t._l(t.filteredGroups,function(e){return n("b-list-group-item",{key:e.id},[n("a",{attrs:{href:"#"+e.id}},[t._v(t._s(e.name))]),n("b-badge",{staticClass:"float-right",attrs:{variant:"secondary"}},[t._v(t._s(e.files.length))])],1)})],2),n("div",{staticStyle:{"margin-top":"1rem","margin-bottom":"3rem"}},[t.allFilesExpanded?n("div",[n("b-btn",{attrs:{variant:"secondary"},on:{click:function(e){t.setAllFileCollapsed(!0)}}},[t._v("Collapse All")])],1):n("div",[n("b-btn",{attrs:{variant:"secondary"},on:{click:function(e){t.setAllFileCollapsed(!1)}}},[t._v("Expand All")])],1)]),t._l(t.filteredGroups,function(e){return n("div",{key:e.id,staticClass:"card-outer",attrs:{id:e.id}},[n("b-card",{staticClass:"border-info",attrs:{header:e.name,"header-bg-variant":"info","header-text-variant":"white"}},t._l(e.files,function(e){return n("div",{key:e.id},[e?n("div",{staticClass:"rule-card-outer",attrs:{id:e.id}},[n("b-card",{attrs:{"no-body":""}},[n("b-card-header",[n("span",{staticClass:"rule-title",on:{click:function(n){t.toggleFileCollapsed(e.id)}}},[t.fileCollapsed[e.id]?n("span",[n("icon",{attrs:{name:"caret-square-right"}})],1):n("span",[n("icon",{attrs:{name:"caret-square-down"}})],1),t._v("\n                  "+t._s(e.title)+"\n                ")]),n("div",{staticClass:"float-right"},[n("b-dropdown",{attrs:{text:"Import",variant:"primary",split:"",right:""},on:{click:function(n){t.importJson(e.importUrl)}}},[n("b-dropdown-item-button",{on:{click:function(n){t.importJson(e.importUrl)}}},[t._v("Import to Karabiner-Elements")]),n("b-dropdown-divider"),n("b-dropdown-item-button",{on:{click:function(n){t.showJsonModal(e.id)}}},[n("small",[t._v("Show json")])]),n("b-dropdown-item-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.pageUrl+"#"+e.id,expression:"pageUrl + '#' + file.id",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.urlCopied,expression:"urlCopied",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.urlCopyFailed,expression:"urlCopyFailed",arg:"error"}]},[n("small",[t._v("Copy URL")])])],1)],1)]),n("b-collapse",{attrs:{id:e.id+"-list-group",visible:!t.fileCollapsed[e.id]}},[n("b-list-group",{attrs:{flush:""}},[t._l(e.rules,function(e){return n("b-list-group-item",{key:e.id},[t._v("\n                    "+t._s(e.description)+"\n                  ")])}),e.extraDescription?n("b-list-group-item",{domProps:{innerHTML:t._s(e.extraDescription)}}):t._e()],2)],1)],1)],1):t._e()])}),0)],1)}),"example"!=t.pageName?n("div",[n("hr"),n("a",{attrs:{href:"example.html"}},[t._v("Other examples")])]):t._e(),n("b-modal",{ref:"showJsonModalRef",attrs:{id:"show-json-modal",title:t.showJsonModalTitle,size:"lg","ok-only":"","ok-title":"Close"}},[n("p",{staticClass:"show-json-modal-body"},[t._v(t._s(t.showJsonModalBody))])])],2)],1)},s=[],l=(n("6b54"),n("f499")),d=n.n(l),c=n("5d73"),u=n.n(c),f=n("db0c"),p=n.n(f),h=(n("7f7f"),n("a481"),n("ac6a"),n("b0b4")),b=n("d225"),v=n("bc3a"),m=n.n(v),g=n("2f21"),w=n.n(g),y=n("07d2"),x=n.n(y),_=n("d58b"),C=n("f13c"),k=n.n(C),E=function(t){var e=t.substring(t.lastIndexOf("/")+1);return-1!=e.lastIndexOf(".")&&(e=e.substring(0,e.lastIndexOf("."))),e},I=!1,j=function t(e,n){Object(b["a"])(this,t),this.id=e,this.description=n.description},O=function(){function t(e){var n=this;Object(b["a"])(this,t),this.id=E(e.path),this.jsonUrl=e.path,this.importUrl=this.makeJsonUrl(e.path),this.extraDescription=e.extra_description,this.title=e.json.title,this.rules=[],e.json.rules.forEach(function(t,e){n.rules.push(new j(e,t))})}return Object(h["a"])(t,[{key:"makeJsonUrl",value:function(t){var e=encodeURIComponent(window.location.href.replace(/[^\/]+$/,"")+t);return"karabiner://karabiner/assets/complex_modifications/import?url="+e}}]),t}(),F=function t(e){var n=this;Object(b["a"])(this,t),this.id=e.id,this.name=e.name,this.files=[],e.files.forEach(function(t){n.files.push(new O(t))})},J={name:"Index",components:{Socket:_["a"]},data:function(){return{loading:!0,pageUrl:window.location.origin+window.location.pathname,pageName:this.fileName(window.location.pathname),groups:[],filteredGroups:[],allFilesExpanded:!1,fileCollapsed:{},showJsonModalTitle:"",showJsonModalBody:"",searchQuery:"",lunrIndex:null}},created:function(){this.fetchData()},methods:{fileName:function(t){var e=t.substring(t.lastIndexOf("/")+1);return-1!=e.lastIndexOf(".")&&(e=e.substring(0,e.lastIndexOf("."))),e},fetchData:function(){var t=this;m.a.get("dist.json",{headers:{"Cache-Control":"no-cache"}}).then(function(e){var n=t.fileName(window.location.pathname);""===n&&(n="index"),e.data[n].forEach(function(e){t.groups.push(new F(e))}),t.filteredGroups=t.groups,t.updateLoadingState(),t.makeLunrIndex(),t.setAllFileCollapsed(!0),t.scrollToHash()})},updateLoadingState:function(){var t=this;setTimeout(function(){t.loading=!1},500)},makeLunrIndex:function(){var t=this;this.lunrIndex=w()(function(e){e.ref("fileId"),e.field("text"),t.groups.forEach(function(t){t.files.forEach(function(t){var n=t.title+" ";t.rules.forEach(function(t){n+=t.description+" "}),n+=x()(t.extraDescription)+" ",e.add({fileId:t.id,text:n.toLowerCase()})})})})},updateAllFilesExpanded:function(){this.allFilesExpanded=!0;for(var t=p()(this.fileCollapsed),e=0;e<t.length;e++){var n=t[e];if(n)return void(this.allFilesExpanded=!1)}},setAllFileCollapsed:function(t){var e={};this.groups.forEach(function(n){n.files.forEach(function(n){e[n.id]=t})}),this.fileCollapsed=e,this.updateAllFilesExpanded()},toggleFileCollapsed:function(t){var e=this.fileCollapsed[t];this.$set(this.fileCollapsed,t,!e),this.updateAllFilesExpanded()},importJson:function(t){location.href=t},showJsonModal:function(t){var e=this,n=!0,r=!1,a=void 0;try{for(var i,o=u()(this.groups);!(n=(i=o.next()).done);n=!0){var s=i.value,l=!0,c=!1,f=void 0;try{for(var p,h=u()(s.files);!(l=(p=h.next()).done);l=!0){var b=p.value;if(b.id==t)return this.showJsonModalTitle=b.title,this.showJsonModalBody="Loading...",this.$refs.showJsonModalRef.show(),void m.a.get(b.jsonUrl).then(function(t){e.showJsonModalBody=d()(t.data,null,2)})}}catch(v){c=!0,f=v}finally{try{l||null==h.return||h.return()}finally{if(c)throw f}}}}catch(v){r=!0,a=v}finally{try{n||null==o.return||o.return()}finally{if(r)throw a}}},urlCopied:function(t){alert("You just copied: "+t.text)},urlCopyFailed:function(){alert("Failed to copy texts")},scrollToHash:function(){var t=this;I||setTimeout(function(){var e=window.location.hash.substring(1),n=document.getElementById(e);n&&(I=!0,t.$set(t.fileCollapsed,e,!1),k.a.scrollTo(n,500,{offset:-100}))},500)},search:function(t){var e=this;if(t.preventDefault(),null!==this.lunrIndex)if(this.searchQuery){var n=new F({id:"search-result",name:"Search Result",files:[]}),r=[n],a=this.lunrIndex.query(function(t){w.a.tokenizer(e.searchQuery.toLowerCase()).forEach(function(e){var n=e.toString();t.term(n,{boost:100}),t.term(n,{wildcard:w.a.Query.wildcard.LEADING|w.a.Query.wildcard.TRAILING,boost:10}),t.term(n,{editDistance:2})})});a.forEach(function(t){var r=t.ref;e.groups.forEach(function(t){t.files.forEach(function(t){t.id==r&&n.files.push(t)})})}),this.filteredGroups=r}else this.filteredGroups=this.groups}}},M=J,S=(n("10b0"),n("2877")),T=Object(S["a"])(M,o,s,!1,null,"67859c8f",null),U=T.exports,A={name:"app",components:{Index:U}},L=A,N=Object(S["a"])(L,a,i,!1,null,null,null),D=N.exports,G=(n("f9e3"),n("2dd8"),n("9f7b")),Q=n("4eb5"),P=n.n(Q),$=(n("d06d"),n("0874"));r["a"].config.productionTip=!1,r["a"].use(G["a"]),r["a"].use(P.a),r["a"].component("icon",$["a"]),new r["a"]({render:function(t){return t(D)}}).$mount("#app")},c7dd:function(t,e,n){}});
//# sourceMappingURL=app.00d9668d.js.map