(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,n){e.exports={app:"styles_app__2vgxJ",notFound:"styles_notFound__3ihsW",section:"styles_section__qc4U2",gg:"styles_gg__1pP4e"}},function(e,t,n){e.exports={header:"style_header__13nhE",flex:"style_flex__1i8cn"}},function(e,t,n){e.exports={item_details:"styles_item_details__1KH94",no_details:"styles_no_details__1n20G"}},,,,function(e,t,n){e.exports={ItemList:"styles_ItemList__17BUr"}},function(e,t,n){e.exports={leftSection:"styles_leftSection__1IP44",rightSection:"styles_rightSection__1o9A2"}},,,function(e,t,n){e.exports={error:"styles_error__iZ5om"}},,,function(e,t,n){e.exports={error:"styles_error__6R-xY"}},function(e,t,n){e.exports={footer:"styles_footer__3T7W-"}},function(e,t,n){e.exports={container:"styles_container__3tFJv",welcome:"styles_welcome__lGkPa",warning:"styles_warning__16Vhj"}},,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,,,,,function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),s=n(25),c=n.n(s),i=(n(36),n(2)),o=n(3),l=n(6),u=n(5),h=n(16),j=n.n(h),p=n(8),d=n.n(p),m=n(12),b=function(){function e(){var t=this;Object(i.a)(this,e),this._apiBase="https://swapi.dev/api/",this._imageBase="https://starwars-visualguide.com/assets/img",this.getResource=function(){var e=Object(m.a)(d.a.mark((function e(n){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t._apiBase).concat(n));case 2:if((r=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(n,", received ").concat(r.status));case 5:return e.next=7,r.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getImagePerson=function(e){return"".concat(t._imageBase,"/characters/").concat(e,".jpg")},this.getImagePlanets=function(e){return"".concat(t._imageBase,"/planets/").concat(e,".jpg")},this.getImageStarships=function(e){return"".concat(t._imageBase,"/starships/").concat(e,".jpg")},this.getAllPeople=Object(m.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/people/");case 2:return n=e.sent,e.abrupt("return",n.results.map(t._transformPerson));case 4:case"end":return e.stop()}}),e)}))),this.getPerson=function(){var e=Object(m.a)(d.a.mark((function e(n){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/people/".concat(n,"/"));case 2:return r=e.sent,e.abrupt("return",t._transformPerson(r));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllPlanets=Object(m.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/planets/");case 2:return n=e.sent,e.abrupt("return",n.results.map(t._transformPlanet));case 4:case"end":return e.stop()}}),e)}))),this.getPlanet=function(){var e=Object(m.a)(d.a.mark((function e(n){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/planets/".concat(n,"/"));case 2:return r=e.sent,e.abrupt("return",t._transformPlanet(r));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllStarships=Object(m.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/starships/");case 2:return n=e.sent,e.abrupt("return",n.results.map(t._transformStarship));case 4:case"end":return e.stop()}}),e)}))),this.getStarship=function(){var e=Object(m.a)(d.a.mark((function e(n){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/starships/".concat(n,"/"));case 2:return r=e.sent,e.abrupt("return",t._transformStarship(r));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this._transformPlanet=function(e){return{id:t._extractId(e),name:e.name,population:e.population,rotationPeriod:e.rotation_period,diameter:e.diameter}},this._transformStarship=function(e){return{id:t._extractId(e),name:e.name,model:e.model,manufacturer:e.manufacturer,credits:e.cost_in_credits,length:e.length,crew:e.crew,passengers:e.passengers,capacity:e.cargo_capacity}},this._transformPerson=function(e){return{id:t._extractId(e),name:e.name,gender:e.gender,birthYear:e.birth_year,eyeColor:e.eye_color}}}return Object(o.a)(e,[{key:"_extractId",value:function(e){return e.url.match(/\/([0-9]*)\/$/)[1]}}]),e}(),f=(n(38),n(0));function O(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{className:"loadingio-spinner-ripple-dpuige9rqqo",children:Object(f.jsxs)("div",{className:"ldio-z5cbtpzwkcl",children:[Object(f.jsx)("div",{}),Object(f.jsx)("div",{})]})})})}var v=n(26),x=n.n(v),g=function(){return Object(f.jsxs)("div",{className:x.a.error,children:[Object(f.jsx)("div",{children:"Something went wrong!"}),Object(f.jsx)("span",{children:"(Our dron fix it later)"})]})},_=(n(40),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).swapiService=new b,e.swapiService=new b,e.state={planet:{},loading:!0},e.onPlanetLoaded=function(t){e.setState({planet:t,loading:!1,error:!1})},e.onError=function(t){e.setState({error:!0,loading:!1})},e.updatePlanet=function(){var t=Math.floor(17*Math.random())+2;e.swapiService.getPlanet(t).then(e.onPlanetLoaded).catch(e.onError)},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.updatePlanet(),this.interval=setInterval(this.updatePlanet,1e4)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this.state,t=e.planet,n=e.loading,r=e.error,a=!(n||r),s=r?Object(f.jsx)(g,{}):null,c=n?Object(f.jsx)(O,{}):null,i=a?Object(f.jsx)(y,{planet:t}):null;return Object(f.jsx)("div",{className:"random-planet",children:Object(f.jsxs)("div",{className:"background",children:[s,c,i]})})}}]),n}(r.Component)),y=function(e){var t=e.planet,n=t.id,r=t.name,s=t.population,c=t.rotationPeriod,i=t.diameter;return Object(f.jsxs)(a.a.Fragment,{children:[Object(f.jsx)("img",{className:"planet-image",src:"https://starwars-visualguide.com/assets/img/planets/".concat(n,".jpg"),alt:"\u041a\u0430\u043a\u043e\u0439 \u0442\u043e \u0442\u0435\u043a\u0441\u0442"}),Object(f.jsxs)("div",{className:"planet-details",children:[Object(f.jsx)("h4",{children:r}),Object(f.jsxs)("ul",{children:[Object(f.jsxs)("li",{children:[Object(f.jsx)("span",{children:"Population: "}),Object(f.jsx)("span",{children:s})]}),Object(f.jsxs)("li",{children:[Object(f.jsx)("span",{children:"Rotation Period: "}),Object(f.jsx)("span",{children:c})]}),Object(f.jsxs)("li",{children:[Object(f.jsx)("span",{children:"Diameter: "}),Object(f.jsx)("span",{children:i})]})]})]})]})},S=n(14),w=n(4),P=n(17),I=n.n(P),k=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:I.a.header+" "+I.a.flex,children:[Object(f.jsx)("h3",{children:Object(f.jsx)("a",{href:"/#",children:"Home"})}),Object(f.jsxs)("ul",{className:I.a.flex,children:[Object(f.jsx)("li",{children:Object(f.jsx)(S.b,{to:"/people",children:"People"})}),Object(f.jsx)("li",{children:Object(f.jsx)(S.b,{to:"/planets",children:"Planets"})}),Object(f.jsx)("li",{children:Object(f.jsx)(S.b,{to:"/starships",children:"Starships"})})]})]})}}]),n}(r.Component),E=n(22),N=n.n(E),C=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={itemList:null},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;(0,this.props.getData)().then((function(t){e.setState({itemList:t})}))}},{key:"renderItems",value:function(e){var t=this;return e.map((function(e){var n=e.id,r=e.name;return Object(f.jsx)("li",{onClick:function(){return t.props.onItemSelected(n)},children:r},n)}))}},{key:"render",value:function(){var e=this.state.itemList;return e?Object(f.jsx)("ul",{className:N.a.ItemList,children:this.renderItems(e)}):Object(f.jsx)("ul",{className:N.a.ItemList,children:Object(f.jsx)(O,{})})}}]),n}(r.Component),D=n(29),A=n.n(D),L=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={renderError:!1},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return this.state.renderError&&(this.foo.bar=0),Object(f.jsx)("button",{className:A.a.error,onClick:function(){return e.setState({renderError:!0})},children:"Throw Error"})}}]),n}(r.Component),R=n(18),B=n.n(R),F=n.p+"static/media/yoda.165027be.png",M=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).swapiService=new b,e.state={item:null,loading:!1,image:null,test:null,isImage:!1},e.createField=function(){return Object.entries(e.state.item).map((function(e,t){return"id"===e[0]?null:Object(f.jsxs)("li",{children:[Object(f.jsxs)("span",{children:[e[0],":"]}),Object(f.jsx)("span",{children:e[1]})]},t)}))},e.updateItem=function(){var t=e.props,n=t.itemId,r=t.getData,a=t.getImage;n&&(e.setState({loading:!0}),r(n).then((function(t){e.setState({item:t,loading:!1,image:a(n),isImage:!0})})))},e.imageError=function(){e.setState({isImage:!1})},e.checkImage=function(){},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.updateItem()}},{key:"componentDidUpdate",value:function(e){this.props.itemId!==e.itemId&&this.updateItem()}},{key:"render",value:function(){if(this.state.loading)return Object(f.jsx)("div",{className:B.a.item_details,children:Object(f.jsx)(O,{})});if(!this.state.item)return Object(f.jsxs)("div",{className:B.a.no_details,children:[Object(f.jsx)("div",{children:"Select item from list"}),Object(f.jsx)("div",{children:Object(f.jsx)("img",{src:F,alt:""})})]});var e=this.state.item.name,t=this.createField();return Object(f.jsxs)("div",{className:B.a.item_details,children:[this.state.isImage?Object(f.jsx)("img",{className:"item-image",src:this.state.image,alt:"Some text",onError:this.imageError}):Object(f.jsx)("div",{children:"\u0412 \u0431\u0430\u0437\u0435 \u043d\u0435\u0442 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438"}),Object(f.jsxs)("div",{children:[Object(f.jsx)("h4",{children:e}),Object(f.jsxs)("ul",{children:[t,Object(f.jsx)("li",{children:Object(f.jsx)(L,{})})]})]})]})}}]),n}(r.Component),W=n(23),J=n.n(W),U=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={hasError:!1},e}return Object(o.a)(n,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(f.jsx)(g,{}):this.props.children}}]),n}(r.Component);var q=function(e){var t=e.left,n=e.right;return Object(f.jsxs)("section",{children:[Object(f.jsx)("div",{className:J.a.leftSection,children:Object(f.jsx)(U,{children:t})}),Object(f.jsx)("div",{className:J.a.rightSection,children:Object(f.jsx)(U,{children:n})})]})},z=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).swapiService=new b,e.state={selectedPerson:null,hasError:!1},e.onPersonSelected=function(t){e.setState({selectedPerson:t})},e}return Object(o.a)(n,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){var e=Object(f.jsx)(C,{onItemSelected:this.onPersonSelected,getData:this.swapiService.getAllPeople}),t=Object(f.jsx)(M,{itemId:this.state.selectedPerson,getData:this.swapiService.getPerson,getImage:this.swapiService.getImagePerson});return Object(f.jsx)(q,{left:e,right:t})}}]),n}(r.Component),G=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).swapiService=new b,e.state={selectedPlanet:null,hasError:!1},e.onPlanetSelected=function(t){e.setState({selectedPlanet:t})},e}return Object(o.a)(n,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){var e=Object(f.jsx)(C,{onItemSelected:this.onPlanetSelected,getData:this.swapiService.getAllPlanets}),t=Object(f.jsx)(M,{itemId:this.state.selectedPlanet,getData:this.swapiService.getPlanet,getImage:this.swapiService.getImagePlanets});return Object(f.jsx)(q,{left:e,right:t})}}]),n}(r.Component),H=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).swapiService=new b,e.state={selectedShips:null,hasError:!1},e.onShipsSelected=function(t){e.setState({selectedShips:t})},e}return Object(o.a)(n,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){var e=Object(f.jsx)(C,{onItemSelected:this.onShipsSelected,getData:this.swapiService.getAllStarships}),t=Object(f.jsx)(M,{itemId:this.state.selectedShips,getData:this.swapiService.getStarship,getImage:this.swapiService.getImageStarships});return Object(f.jsx)(q,{left:e,right:t})}}]),n}(r.Component),T=n(30),Y=n.n(T);function K(){return Object(f.jsx)("div",{className:Y.a.footer,children:"Star Wars"})}var V=n(31),Z=n.n(V);var $=function(){return Object(f.jsx)(U,{children:Object(f.jsxs)("div",{className:Z.a.welcome,children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("h2",{children:"Welcome"}),Object(f.jsx)("p",{children:"Start using the application by clicking on the section of interest in the navigation bar"})]}),Object(f.jsx)("div",{children:Object(f.jsx)("img",{src:F,alt:""})})]})})},Q=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={hasError:!1},e}return Object(o.a)(n,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(f.jsx)(g,{}):Object(f.jsx)("div",{className:j.a.app,children:Object(f.jsxs)(S.a,{children:[Object(f.jsx)(k,{}),Object(f.jsx)(_,{}),Object(f.jsx)("div",{className:j.a.gg,children:Object(f.jsxs)(w.c,{children:[Object(f.jsx)(w.a,{exact:!0,path:"/people",component:z}),Object(f.jsx)(w.a,{exact:!0,path:"/planets",component:G}),Object(f.jsx)(w.a,{exact:!0,path:"/starships",component:H}),Object(f.jsx)(w.a,{exact:!0,path:"/",component:$}),Object(f.jsx)(w.a,{render:function(){return Object(f.jsx)("h2",{className:j.a.notFound,children:"Page not found"})}})]})}),Object(f.jsx)(K,{})]})})}}]),n}(r.Component);c.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(Q,{})}),document.getElementById("root"))}],[[46,1,2]]]);
//# sourceMappingURL=main.84f4e3c0.chunk.js.map