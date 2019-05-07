(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{147:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n.n(a),s=n(0),i=n.n(s),o=n(156),l=(n(173),n(34),n(157)),c=n.n(l),u=(n(155),n(158)),p=n.n(u),d=n(35),m=n.n(d),f=n(4),h=n.n(f),g=n(149),y=n(165),v=n(171),b=n(159),E=function(e){function t(t){var n;return(n=e.call(this,t)||this).getSpellList=n.getSpellList.bind(m()(n)),n.successResponse=n.successResponse.bind(m()(n)),n.failureResponse=n.failureResponse.bind(m()(n)),n.baseClass="gr-spell-index",n.state={loading:!0,error:null,spells:[]},n}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=p()(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.state.spells.length||(console.warn("Fetching Spell list on homepage..."),this.getSpellList());case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),n.successResponse=function(e){this.setState(Object.assign({},e,{spells:e.body[0].results}))},n.failureResponse=function(e){this.setState(Object.assign({},e,{error:e.error,spells:[]}))},n.getSpellList=function(){var e=p()(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,Object(y.a)({url:this.props.api.spells},this.successResponse,this.failureResponse);case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),n.render=function(){var e=this,t=this.state,n=t.spells,a=t.loading,r=t.error;return i.a.createElement(v.a,{loading:a,error:r},i.a.createElement(s.Fragment,null,i.a.createElement(b.a,{element:"h1"},"Spell List:"),i.a.createElement("div",{className:this.baseClass},i.a.createElement("ul",{className:this.baseClass+"-list"},n&&n.length?n.map(function(t,n){var a=n+1;return i.a.createElement("li",{key:a,className:e.baseClass+"-list-item"},i.a.createElement(g.a,{to:"/spell/?id="+a},t.name))}):i.a.createElement("li",null,"No Spells Listed")))))},t}(s.Component);E.propTypes={children:h.a.node};var w=E,C=n(153),S=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement(o.a,null,i.a.createElement(C.a,{title:"Home"}),i.a.createElement(w,null))},t}(s.Component);t.default=S},149:function(e,t,n){"use strict";n.d(t,"b",function(){return u});var a=n(0),r=n.n(a),s=n(4),i=n.n(s),o=n(33),l=n.n(o);n.d(t,"a",function(){return l.a});n(150);var c=r.a.createContext({}),u=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},150:function(e,t,n){var a;e.exports=(a=n(152))&&a.default||a},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Grimoire",apiBase:"http://dnd5eapi.co/api",apiSpells:"/spells",apiSpellId:"/spell/:id"}}}}},152:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),s=n(4),i=n.n(s),o=n(55),l=n(2),c=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return n?r.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json)):null};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},153:function(e,t,n){"use strict";var a=n(154),r=n(0),s=n.n(r),i=n(4),o=n.n(i),l=n(164),c=n.n(l);function u(e){var t=e.description,n=e.lang,r=e.meta,i=e.keywords,o=e.title,l=a.data.site,u=t||l.siteMetadata.description;return s.a.createElement(c.a,{htmlAttributes:{lang:n},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:o},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:u}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=u},154:function(e){e.exports={data:{site:{siteMetadata:{title:"Grimoire",description:"A PWA for D&D 5th Edition Spells.",author:"@gatsbyjs"}}}}},156:function(e,t,n){"use strict";n(34);var a=n(7),r=n.n(a),s=n(151),i=n(0),o=n.n(i),l=n(4),c=n.n(l),u=n(149),p=function(e){function t(t){var n;return(n=e.call(this,t)||this).baseClass="gr-header",n}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.siteTitle;return o.a.createElement("header",{className:this.baseClass},o.a.createElement("div",{className:this.baseClass+"-container"},o.a.createElement("h1",{style:{margin:0}},o.a.createElement(u.a,{to:"/",style:{color:"white",textDecoration:"none"}},n)),t))},t}(i.Component);p.propTypes={children:c.a.node,baseClass:c.a.string,siteTitle:c.a.string},p.defaultProps={siteTitle:""};var d=p,m=function(e){function t(t){var n;return(n=e.call(this,t)||this).baseClass="gr-footer",n}return r()(t,e),t.prototype.render=function(){return o.a.createElement("footer",{className:this.baseClass},o.a.createElement("div",{className:this.baseClass+"-container"},"© ",(new Date).getFullYear()))},t}(i.Component);m.propTypes={children:c.a.node,siteTitle:c.a.string},m.defaultProps={siteTitle:""};var f=m,h=(n(163),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.data,n=e.children,a={spells:""+t.apiBase+t.apiSpells,spellId:""+t.apiBase+t.apiSpellId};return o.a.createElement(i.Fragment,null,o.a.createElement(d,{siteTitle:t.title}),o.a.createElement("div",{className:"gr-layout"},o.a.createElement("main",null,o.a.Children.map(n,function(e){return o.a.cloneElement(e,Object.assign({},e.props,{data:t,api:a}))}))),o.a.createElement(f,null))},t}(o.a.Component));h.propTypes={children:c.a.node.isRequired};t.a=function(e){return o.a.createElement(u.b,{query:"683922405",render:function(t){return o.a.createElement(h,Object.assign({data:t.site.siteMetadata},e))},data:s})}},159:function(e,t,n){"use strict";var a=n(7),r=n.n(a),s=n(0),i=n.n(s),o=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.baseClass,n=e.children,a=e.element;return i.a.createElement(a,{className:t},n)},t}(s.Component);o.defaultProps={baseClass:"gr-heading",element:"h3"},t.a=o},165:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a=n(157),r=n.n(a),s=(n(155),n(158)),i=n.n(s),o=n(174),l=n.n(o),c=function(){var e=i()(r.a.mark(function e(t,n,a){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l()(t).then(function(e){n({body:e.data,status:e.status,loading:!1,error:null})}).catch(function(e){a({body:e.error,status:e.status,loading:!1,error:e})});case 2:case"end":return e.stop()}},e)}));return function(t,n,a){return e.apply(this,arguments)}}()},171:function(e,t,n){"use strict";var a=n(7),r=n.n(a),s=n(0),i=n.n(s),o=n(4),l=n.n(o),c=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.baseClass,n=e.children,a=e.element;return i.a.createElement(a,{className:t},n)},t}(s.Component);c.defaultProps={baseClass:"gr-body-copy",element:"p"};var u=c,p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.loading,n=e.children,a=e.error;return a?i.a.createElement(u,null,a.message):t?i.a.createElement("div",{className:"gr-loader"},i.a.createElement("svg",{className:"icon icon-d20",height:"300px",width:"300px",fill:"#000000",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100"},i.a.createElement("g",{transform:"translate(0,-952.36216)"},i.a.createElement("path",{d:"m 49.999999,957.36216 -38.971335,22.4997 0,45.00064 1.290604,0.7457 37.680731,21.754 38.971337,-22.4997 0,-45.00064 -38.971337,-22.4997 z m 0,7.5949 15.565861,23.0246 -31.131722,0 15.565861,-23.0246 z m -8.4251,3.2361 -12.799072,18.9318 -9.995787,-5.7706 22.794859,-13.1612 z m 16.851427,0 22.793632,13.1599 -9.994495,5.7706 -12.799137,-18.9305 z m -42.230078,17.6348 9.997014,5.7707 -9.997014,20.55174 0,-26.32244 z m 67.607502,0 0,26.32374 -9.997079,-20.55304 9.995787,-5.7707 z m -49.759442,7.32 31.911382,0 -15.955691,27.63694 -15.955691,-27.63694 z m -4.280633,2.9219 15.567089,26.96074 -27.722796,-1.9681 12.155707,-24.99264 z m 40.472648,0 12.156935,24.99264 -27.722732,1.9681 15.565797,-26.96074 z m -45.617559,30.67114 22.797443,1.6199 0,11.5426 -22.797443,-13.1625 z m 50.763697,0 -22.79867,13.1625 0,-11.5426 22.79867,-1.6199 z"})))):n},t}(s.Component);p.propTypes={children:l.a.node.isRequired,loading:l.a.bool,error:l.a.object},p.defaultProps={baseClass:"gr-loader"};t.a=p}}]);
//# sourceMappingURL=component---src-pages-index-js-ad1008b5a3b007ec5b47.js.map