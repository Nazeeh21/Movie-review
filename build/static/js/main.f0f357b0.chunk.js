(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,t,a){e.exports=a(59)},35:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(27),c=a.n(o),i=(a(34),a(7)),l=(a(35),a(11)),s=function(e){var t=e.title,a=e.poster;return r.a.createElement("div",{style:{border:"5px solid #1890FF",borderRadius:"10px",width:"70%",margin:"auto",height:"70%",position:"relative"}},r.a.createElement("h1",null,r.a.createElement(l.b,{style:{color:"white",textDecoration:"none",position:"absolute",top:"70%",left:"10%",fontSize:"1.6rem",fontFamily:"'Teko', sans-serif",zIndex:"2"},to:"/movie/".concat(t)},t)),r.a.createElement("div",{style:{position:"absolute",top:"0",left:"0",height:"100%",width:"100%",background:"linear-gradient(to bottom,rgba(255,255,255,0%),rgba(0,0,0,70%))"}}),r.a.createElement("img",{style:{height:"100%",width:"100%"},src:"".concat("https://image.tmdb.org/t/p/w780").concat(a),alt:"Thumbnail-can't-rendered"}))},u=a(1),m=a(6),p=a.n(m),d=a(9),f=a(10),h=a.n(f),b=function(){var e=Object(d.a)(p.a.mark(function e(){var t;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://api.themoviedb.org/3/movie/popular",{params:{api_key:"c9a1dae6cf28efb4ba69f43ecf6f4729",language:"en-US",sort_by:"popularty.desc",include_adult:"true",include_video:"true"}});case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),g="https://www.youtube.com/watch?v=",v="c9a1dae6cf28efb4ba69f43ecf6f4729";function y(e){var t=e.movie_id,a=Object(n.useState)([""]),o=Object(i.a)(a,2),c=o[0],l=o[1],s=Object(n.useState)(""),u=Object(i.a)(s,2),m=u[0],f=u[1];Object(n.useEffect)(function(){b().then(function(e){0!==e.length?(l(g+e[0].key),f("Trailer")):(l(""),f("Oops! Trailer not available"))})},[]);var b=function(){var e=Object(d.a)(p.a.mark(function e(){var a,n;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://api.themoviedb.org/3/movie/".concat(t,"/videos"),{params:{api_key:v,language:"en-US"}});case 2:return a=e.sent,n=a.data.results,console.log(a.status),console.log(a.data.results.length),e.abrupt("return",n);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,"Trailer"!==m?r.a.createElement("div",{style:{color:"red"}},m):r.a.createElement("a",{href:"".concat(c)},m))}var E="https://image.tmdb.org/t/p/w780";function w(e){console.log(e);var t=e.movie_detail;return r.a.createElement("div",{style:{padding:"10rem",background:"#02123c"}},r.a.createElement("div",{style:{height:"18rem",width:"15rem",borderRadius:"20px",position:"relative"}},r.a.createElement("img",{style:{height:"100%",width:"100%",borderRadius:"10px",border:"3px solid black"},src:"".concat(E).concat(t.poster_path),alt:"Poster-img"})),r.a.createElement("div",{style:{background:"#010026",padding:"3rem",color:"white",fontFamily:"'Poppins',sans-serif",borderRadius:"10px",marginTop:"2rem"}},r.a.createElement(y,{style:{color:"white"},movie_id:t.id}),r.a.createElement("h1",{style:{fontSize:"2rem"}},t.title),r.a.createElement("h2",{style:{fontSize:"1.2rem",color:"#7a7a7a"}},t.release_date),r.a.createElement("h2",{style:{marginTop:"1rem",marginBottom:"1rem",fontSize:"1.8rem"}},"IMDB: ",t.popularity),r.a.createElement("p",{style:{background:"#12113E",padding:"0.7rem",borderRadius:"10px"}},"Review : ",t.overview)))}var x="c9a1dae6cf28efb4ba69f43ecf6f4729";var O=function(e){var t=e.match,a=Object(n.useState)([]),o=Object(i.a)(a,2),c=o[0],l=o[1];Object(n.useEffect)(function(){s().then(function(e){return l(e)})},[]);var s=function(){var e=Object(d.a)(p.a.mark(function e(){var a;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://api.themoviedb.org/3/search/movie",{params:{api_key:x,language:"en-US",query:"".concat(t.params.title),page:1,include_adult:!0}});case 2:return a=e.sent,console.log(a.status),console.log(a.data.results),e.abrupt("return",a.data.results);case 6:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),u=Object(n.useState)("Loading"),m=Object(i.a)(u,2),f=m[0],b=m[1];return setTimeout(function(){b("Sorry! Can't fetch data")},4e3),r.a.createElement("div",null,0===c.length?f:r.a.createElement(w,{movie_detail:c[0]}))},j=function(e){var t=e.title,a=e.poster;return r.a.createElement("div",{style:{border:"5px solid #1890FF",borderRadius:"10px",width:"16%",margin:"2% 1%",display:"inline-block",height:"16%",position:"relative"}},r.a.createElement("h1",null,r.a.createElement(l.b,{style:{color:"white",textDecoration:"none",position:"absolute",top:"70%",left:"10%",fontSize:"1.6rem",fontFamily:"'Teko', sans-serif",zIndex:"2"},to:"/movie/".concat(t)},t)),r.a.createElement("div",{style:{position:"absolute",margin:"auto",top:"0",left:"0",height:"100%",width:"100%",background:"linear-gradient(to bottom,rgba(255,255,255,0%),rgba(0,0,0,70%))"}}),r.a.createElement("img",{style:{height:"100%",width:"100%",textDecorationStyle:"strong",color:"#fff"},src:"".concat("https://image.tmdb.org/t/p/w780").concat(a),alt:"Thumbnail-can't-rendered"}))},k="c9a1dae6cf28efb4ba69f43ecf6f4729";var S=function(e){var t=e.match,a=Object(n.useState)([]),o=Object(i.a)(a,2),c=o[0],l=o[1];Object(n.useEffect)(function(){s().then(function(e){return l(e)})},[]);var s=function(){var e=Object(d.a)(p.a.mark(function e(){var a;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://api.themoviedb.org/3/search/movie",{params:{api_key:k,language:"en-US",query:"".concat(t.params.title),page:1,include_adult:!0}});case 2:return a=e.sent,console.log(a.status),console.log(a.data.results),e.abrupt("return",a.data.results);case 6:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),u=Object(n.useState)("Loading"),m=Object(i.a)(u,2),f=m[0],b=m[1];return setTimeout(function(){b("Sorry! Can't fetch data")},4e3),r.a.createElement("div",{style:{background:"#02123c",padding:"0 1%",margin:"auto"}},0===c.length?f:c.map(function(e){return r.a.createElement(j,{key:e.id,title:e.title,poster:e.poster_path})}))};function _(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],o=t[1];var c=Object(n.useState)([]),l=Object(i.a)(c,2),m=l[0],p=l[1];return Object(n.useEffect)(function(){b().then(function(e){return p(e)})},[]),r.a.createElement("div",null,r.a.createElement("form",{className:"search",onSubmit:function(e){e.preventDefault();var t=e.target.mName.value;console.log(t),window.location.href="/search/"+t},action:"/movie/".concat(a)},r.a.createElement("input",{className:"inputsearch",onChange:function(e){var t=e.target.value;o(t)},value:a,name:"mName",placeholder:"Search Movies"}),r.a.createElement("button",{className:"searchbtn",type:"submit"})),r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",exact:!0},r.a.createElement("div",{className:"App"},0===m.length?"Loading":m.map(function(e){return r.a.createElement(s,{key:e.id,title:e.title,poster:e.poster_path})}))),r.a.createElement(u.a,{path:"/movie/:title",exact:!0,component:O}),r.a.createElement(u.a,{path:"/search/:title",exact:!0,component:S})))}var T=document.getElementById("root");c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,null,r.a.createElement(_,null))),T)}},[[29,1,2]]]);
//# sourceMappingURL=main.f0f357b0.chunk.js.map