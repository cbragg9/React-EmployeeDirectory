(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{19:function(e,t,a){e.exports=a(45)},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(16),l=a.n(s),c=a(6),o=a.n(c),i=a(17),u=a(2),d=a(3),m=a(5),f=a(4),h=(a(25),function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"form-box"},r.a.createElement("form",{className:"form-group justify-content-center d-flex"},r.a.createElement("input",{value:this.props.currentState.searchInput,name:"searchInput",onChange:this.props.handleInputChange,type:"text",placeholder:"Search",className:"form-control"})))}}]),a}(n.Component));a(26);var p=function(){return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row d-flex justify-content-center header-box"},r.a.createElement("div",{className:"col-8"},r.a.createElement("h1",null,"Employee Directory"),r.a.createElement("p",null,"Click on headings to sort by heading or use the search box to narrow/filter your results"))))};var E=function(e){return r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},r.a.createElement("img",{src:e.image,alt:"img_thumbnail"})),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.phone),r.a.createElement("td",null,e.email),r.a.createElement("td",null,e.DOB))};a(27);var y=function(e){return r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Image"),r.a.createElement("th",{scope:"col",className:"sortBy",onClick:e.handleSort,id:"name"},r.a.createElement("i",{className:"name"===e.sortedBy?"fas fa-sort red":"fas fa-sort hidden"}),"Name"),r.a.createElement("th",{scope:"col",className:"sortBy",onClick:e.handleSort,id:"phone"},r.a.createElement("i",{className:"phone"===e.sortedBy?"fas fa-sort red":"fas fa-sort hidden"}),"Phone"),r.a.createElement("th",{scope:"col",className:"sortBy",onClick:e.handleSort,id:"email"},r.a.createElement("i",{className:"email"===e.sortedBy?"fas fa-sort red":"fas fa-sort hidden"}),"Email"),r.a.createElement("th",{scope:"col",className:"sortBy",onClick:e.handleSort,id:"dob"},r.a.createElement("i",{className:"dob"===e.sortedBy?"fas fa-sort red":"fas fa-sort hidden"}),"DOB"))};var b=function(e){var t=e.results;return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row d-flex justify-content-center"},r.a.createElement("div",{className:"col-10"},r.a.createElement("table",{className:"table table-striped"},r.a.createElement("thead",null,r.a.createElement(y,{handleSort:e.handleSort,sortedBy:e.sortedBy})),r.a.createElement("tbody",null,t.length?t.map((function(e){return r.a.createElement(E,{image:e.picture.thumbnail,name:e.name.first+" "+e.name.last,phone:e.phone,email:e.email,DOB:e.dob.date,key:e.login.uuid})})):r.a.createElement("tr",null))))))},v=a(18),g=a.n(v),B=function(){return g.a.get("https://randomuser.me/api/?results=200&nat=us")},N=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={searchInput:"",seeds:{},filtered:{},sortedBy:""},e.componentDidMount=function(){B().then((function(t){e.setState({seeds:t.data.results,filtered:t.data.results})})).catch((function(e){return console.log(e)}))},e.handleInputChange=function(){var t=Object(i.a)(o.a.mark((function t(a){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({searchInput:a.target.value.toLowerCase()});case 2:e.filterAndDisplayResults();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.filterAndDisplayResults=function(){var t=e.state.seeds.filter((function(t){return"".concat(t.name.first.toLowerCase()," ").concat(t.name.last.toLowerCase()).includes(e.state.searchInput)}));e.setState({filtered:t})},e.handleSort=function(t){var a=t.target.getAttribute("id");if(e.state.sortedBy===a)return e.setState({filtered:e.state.filtered.reverse(),sortedBy:a});var n=e.state.filtered.sort((function(e,t){switch(a){case"name":return e.name.first<t.name.first?1:-1;case"dob":return e.dob.date<t.dob.date?1:-1;default:return e[a]<t[a]?1:-1}}));e.setState({filtered:n,sortedBy:a})},e}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"text-center"},r.a.createElement(p,null),r.a.createElement(h,{handleInputChange:this.handleInputChange,currentState:this.state}),r.a.createElement(b,{results:this.state.filtered,handleSort:this.handleSort,sortedBy:this.state.sortedBy}))}}]),a}(r.a.Component);l.a.render(r.a.createElement(N,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.75ce4a47.chunk.js.map