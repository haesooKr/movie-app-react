(this["webpackJsonpmovie-app-react"]=this["webpackJsonpmovie-app-react"]||[]).push([[0],{33:function(e,t,a){e.exports=a(64)},38:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(29),c=a.n(s),o=a(7),i=a(6);function l(e){return r.a.createElement("span",null,"HaesooKr's movie-app-react")}var m=a(10),u=a(11),p=a(13),v=a(12),d=a(14),E=(a(38),function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;t||a.push("./")}},{key:"render",value:function(){var e=this.props.location,t=this.props.location.state,a=t.title,n=t.year,s=t.poster,c=t.genres,o=t.summary;return e.state?r.a.createElement("div",{className:"detail"},r.a.createElement("h3",null,a),r.a.createElement("h5",null,n),r.a.createElement("img",{src:s,alt:"poster",name:"poster"}),r.a.createElement("ul",null,c.map((function(e,t){return r.a.createElement("li",{key:t},e)}))),r.a.createElement("p",null,o)):null}}]),t}(n.Component)),h=a(16),y=a.n(h),f=a(30),g=a.n(f);function b(e){var t=e.year,a=e.title,n=e.summary,s=e.poster,c=e.genres;return r.a.createElement(o.b,{to:{pathname:"/movie-detail",state:{year:t,title:a,summary:n,poster:s,genres:c}}},r.a.createElement("div",{className:"movie"},r.a.createElement("img",{src:s,alt:a,title:a}),r.a.createElement("div",{className:"movie_data"},r.a.createElement("h3",{className:"movie_title"},a),r.a.createElement("h5",{className:"movie_year"},t),r.a.createElement("ul",{className:"genres"},c.map((function(e,t){return r.a.createElement("li",{key:t,className:"genres_genre"},e)}))),r.a.createElement("p",{className:"movie_summary"},n.slice(0,180),"..."))))}a(62);var N=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(s)))).state={isLoading:!0,movies:[]},a.getMovies=function(){var e,t;return y.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,y.a.awrap(g.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating"));case 2:e=n.sent,t=e.data.data.movies,a.setState({movies:t,isLoading:!1});case 5:case"end":return n.stop()}}))},a.renderMovies=function(e){return e.map((function(e){return r.a.createElement(b,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader_text"},"Loading...")):r.a.createElement("div",{className:"movies"},this.renderMovies(a)))}}]),t}(r.a.Component);a(63);function j(){return r.a.createElement("div",{className:"nav"},r.a.createElement(o.b,{to:"/"},"Home"),r.a.createElement(o.b,{to:"/about"},"About"))}c.a.render(r.a.createElement((function(){return r.a.createElement(o.a,null,r.a.createElement(j,null),r.a.createElement(i.a,{path:"/",exact:!0,component:N}),r.a.createElement(i.a,{path:"/about",component:l}),r.a.createElement(i.a,{path:"/movie-detail",component:E}))}),null),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.d79f1ba4.chunk.js.map