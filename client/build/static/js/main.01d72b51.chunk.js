(this.webpackJsonpspotify=this.webpackJsonpspotify||[]).push([[0],{45:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(34),s=n.n(c),i=(n(45),n(19)),o=n(2),l=n.n(o),u=n(6),j=n(5),d=n(7),h=n(35),m=n(36),b=n(40),p=n(39),f=n(4),x=n.n(f),O=function(e){window.localStorage.setItem("spotify_token_timestamp",Date.now()),window.localStorage.setItem("spotify_access_token",e)},v=function(){return window.localStorage.getItem("spotify_refresh_token")},g=function(){var e=Object(u.a)(l.a.mark((function e(){var t,n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("/refresh_token?refresh_token=".concat(v()));case 3:return t=e.sent,n=t.data,a=n.access_token,O(a),window.location.reload(),e.abrupt("return");case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=function(){for(var e,t={},n=/([^&;=]+)=?([^&;]*)/g,a=window.location.hash.substring(1);e=n.exec(a);)t[e[1]]=decodeURIComponent(e[2]);return t}(),t=e.error,n=e.access_token,a=e.refresh_token;t&&(console.error(t),g()),Date.now()-window.localStorage.getItem("spotify_token_timestamp")>36e5&&(console.warn("Access token has expired, refreshing..."),g());var r=window.localStorage.getItem("spotify_access_token"),c=v();return c&&"undefined"!==c||function(e){window.localStorage.setItem("spotify_refresh_token",e)}(a),r&&"undefined"!==r?r:(O(n),n)}(),k=function(){window.localStorage.removeItem("spotify_token_timestamp"),window.localStorage.removeItem("spotify_access_token"),window.localStorage.removeItem("spotify_refresh_token"),window.location.replace("http://artist-explorer.herokuapp.com")},y={Authorization:"Bearer ".concat(w),"Content-Type":"application/json"},N=function(e){return x.a.get("https://api.spotify.com/v1/search?q=".concat(e,"&type=artist&limit=40"),{headers:y})},_=function(){return x.a.get("https://api.spotify.com/v1/me",{headers:y})},S=function(){return x.a.get("https://api.spotify.com/v1/me/top/artists?limit=50&time_range=short_term",{headers:y})},C=function(e){return x.a.get("https://api.spotify.com/v1/artists/".concat(e),{headers:y})},I=function(e){return x.a.get("https://api.spotify.com/v1/artists/".concat(e,"/related-artists"),{headers:y})},T=function(e,t){return x.a.get(" https://api.spotify.com/v1/artists/".concat(e,"/top-tracks?market=").concat(t),{headers:y})},A=function(e){return x.a.get("https://api.spotify.com/v1/recommendations?seed_artists=".concat(e,"&limit=1"),{headers:y})},P=n(0),D=r.a.createContext(),F=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={user:""},e.componentDidMount=function(){e.getUser()},e.getUser=Object(u.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_();case 2:n=t.sent,e.setState({user:n.data});case 4:case"end":return t.stop()}}),t)}))),e}return Object(m.a)(n,[{key:"render",value:function(){return Object(P.jsx)(D.Provider,{value:Object(i.a)({},this.state),children:this.props.children})}}]),n}(r.a.Component),E=n(13),L=n(14),M=(n(69),function(e){return Object(P.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(P.jsx)(E.a,{icon:L.f}),Object(P.jsx)("input",{placeholder:"Search",onChange:e.handleChange,value:e.searchQuery})]})}),B=(n(70),function(e){var t=r.a.useContext(D).user;return Object(P.jsxs)("div",{className:e.show?"dropdown activemenu":"dropdown",children:[Object(P.jsx)("small",{children:t.display_name}),Object(P.jsx)("small",{children:t.email}),Object(P.jsx)("button",{onClick:k,children:"Logout"})]})}),R=(n(71),function(e){var t=r.a.useContext(D).user,n=r.a.useState(!1),a=Object(j.a)(n,2),c=a[0],s=a[1];return Object(P.jsxs)("header",{children:[Object(P.jsx)(M,{handleChange:e.handleChange,handleSubmit:e.handleSubmit}),Object(P.jsxs)("div",{className:"thumbnail-small dropdowntrigger",children:[Object(P.jsx)("img",{src:t.images&&t.images[0].url,onClick:function(e){e.stopPropagation(),s(!c)}}),Object(P.jsx)(B,{show:c})]})]})}),G=(n(72),function(){return Object(P.jsx)("div",{className:"container",children:Object(P.jsxs)("div",{className:"player",children:[Object(P.jsxs)("div",{className:"music-info",children:[Object(P.jsx)("div",{children:Object(P.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/en/thumb/8/87/Doja_Cat_-_Hot_Pink.png/220px-Doja_Cat_-_Hot_Pink.png"})}),Object(P.jsxs)("div",{className:"trackinfo",children:[Object(P.jsx)("p",{children:"Say So"}),Object(P.jsx)("p",{className:"secondary-text",children:"Doja Cat"})]})]}),Object(P.jsxs)("div",{className:"controls",children:[Object(P.jsx)(E.a,{icon:L.b}),Object(P.jsx)(E.a,{icon:L.e}),Object(P.jsx)(E.a,{icon:L.c})]}),Object(P.jsx)("div",{className:"like",children:Object(P.jsx)(E.a,{icon:L.d})})]})})}),H=n(15),Q=n.p+"static/media/Spotify_Icon_RGB_Green.cd66b8f6.png",U=(n(73),function(e){var t=r.a.useContext(D).user,n=r.a.useState(),a=Object(j.a)(n,2),c=a[0],s=a[1],i=function(e){var t;t=e.target.id,s(t)},o=Object(d.f)();return r.a.useEffect((function(){s(o.pathname.replace("/",""))}),[]),Object(P.jsxs)("aside",{children:[t&&Object(P.jsx)("div",{className:"user-info",children:Object(P.jsx)("div",{className:"thumbnail",children:Object(P.jsx)(H.b,{to:"/",children:Object(P.jsx)("img",{src:Q})})})}),Object(P.jsxs)("ul",{className:"side-nav",children:[Object(P.jsx)(H.b,{className:"link",to:"/top",children:Object(P.jsx)("li",{className:"top"==c?"active":null,onClick:i,id:"top",children:"Top Artists"})}),Object(P.jsx)(H.b,{className:"link",to:"/random",children:Object(P.jsx)("li",{className:"random"==c?"active":null,onClick:i,id:"random",children:"Random"})}),Object(P.jsx)(H.b,{className:"link",to:"/following",children:Object(P.jsx)("li",{className:"following"==c?"active":null,onClick:i,id:"following",children:"Following"})})]})]})}),J=function(){return Object(P.jsx)("main",{className:"content",children:Object(P.jsx)("h1",{children:"Home"})})},W=n(38),q=(n(76),function(){return Object(P.jsx)("main",{className:"loader",children:Object(P.jsx)(W.Bars,{fill:"mediumseagreen",height:"70px"})})}),z=(n(77),function(e){var t=e.artists,n=e.currentArtist,a=e.handleClick;return n?Object(P.jsxs)("div",{className:"info-card",children:[Object(P.jsxs)("div",{className:"current-artist",children:[Object(P.jsx)("div",{className:"thumbnail",children:Object(P.jsx)("img",{src:n.images.length?n.images[0].url:Q})}),Object(P.jsxs)("div",{className:"about",children:[Object(P.jsxs)("h2",{children:[n.name,Object(P.jsx)("a",{target:"_blank",href:n.external_urls.spotify,children:Object(P.jsx)(E.a,{icon:L.a})})]}),Object(P.jsxs)("small",{className:"stats",children:[n.followers.total," followers"]}),Object(P.jsx)("div",{className:"tags",children:n.genres.map((function(e){return Object(P.jsx)("small",{children:e})}))})]})]}),Object(P.jsx)("div",{className:"related",children:t&&t.map((function(e){return Object(P.jsxs)("div",{className:"artist",onClick:a,children:[Object(P.jsx)("div",{className:"thumbnail",children:Object(P.jsx)("img",{src:e.images.length?e.images[0].url:Q,id:e.id})}),Object(P.jsx)("small",{children:e.name})]})}))})]}):Object(P.jsx)(q,{})}),K=(n(78),function(e){var t=e.image,n=e.name,a=e.id,r=e.handleClick;return Object(P.jsx)("div",{children:Object(P.jsxs)("div",{className:"card",onClick:r,children:[Object(P.jsx)("div",{className:"img-container",children:Object(P.jsx)("img",{id:a,src:t})}),Object(P.jsx)("div",{className:"name",id:a,children:n})]},a)})}),V=(n(79),function(){var e=r.a.useState(null),t=Object(j.a)(e,2),n=t[0],a=t[1],c=r.a.useState(null),s=Object(j.a)(c,2),i=s[0],o=s[1],d=r.a.useState(null),h=Object(j.a)(d,2),m=h[0],b=h[1],p=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://api.spotify.com/v1/me/top/artists?limit=50&time_range=long_term",{headers:y});case 2:t=e.sent,a(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://api.spotify.com/v1/me/top/artists?limit=50&time_range=medium_term",{headers:y});case 2:t=e.sent,a(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:t=e.sent,a(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(t);case 2:n=e.sent,o(n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I(t);case 2:n=e.sent,b(n.data.artists);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(e){e.stopPropagation(),console.log(e.target),g(e.target.id),v(e.target.id),window.scrollTo({top:0,behavior:"smooth"})};return r.a.useEffect((function(){p()}),[]),n?Object(P.jsxs)("main",{className:"content",children:[Object(P.jsxs)("div",{className:"header",children:[Object(P.jsx)("h1",{children:"Top Artists"}),Object(P.jsxs)("div",{children:[Object(P.jsx)("button",{onClick:p,children:"All Time"}),Object(P.jsx)("button",{onClick:f,children:"Last 6 Months"}),Object(P.jsx)("button",{onClick:O,children:"Last 4 Weeks"})]})]}),m&&Object(P.jsx)(z,{artists:m,currentArtist:i,handleClick:w}),Object(P.jsx)("div",{className:"card-container",children:n&&n.items.map((function(e){return Object(P.jsx)(K,{id:e.id,handleClick:w,image:e.images[0].url,name:e.name})}))})]}):Object(P.jsx)(q,{})}),X=function(){var e=r.a.useState(null),t=Object(j.a)(e,2),n=t[0],a=t[1],c=r.a.useState(null),s=Object(j.a)(c,2),i=s[0],o=s[1],d=r.a.useState(null),h=Object(j.a)(d,2),m=h[0],b=h[1],p=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://api.spotify.com/v1/me/following?type=artist&limit=50",{headers:y});case 2:t=e.sent,console.log(t),a(t.data.artists);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(t);case 2:n=e.sent,o(n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I(t);case 2:n=e.sent,b(n.data.artists);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(e){e.stopPropagation(),console.log(e.target),O(e.target.id),f(e.target.id),window.scrollTo({top:0,behavior:"smooth"})};return r.a.useEffect((function(){p()}),[]),n?Object(P.jsxs)("main",{className:"content",children:[Object(P.jsx)("h1",{children:"Following"}),m&&Object(P.jsx)(z,{artists:m,currentArtist:i,handleClick:v}),Object(P.jsx)("div",{className:"card-container",children:n&&n.items.map((function(e){return Object(P.jsx)(K,{id:e.id,handleClick:v,image:e.images[0].url,name:e.name})}))})]}):Object(P.jsx)(q,{})},Y=(n(80),function(){var e=r.a.useState(null),t=Object(j.a)(e,2),n=(t[0],t[1],r.a.useState(null)),a=Object(j.a)(n,2),c=(a[0],a[1],r.a.useState(null)),s=Object(j.a)(c,2),i=(s[0],s[1],r.a.useState(null)),o=Object(j.a)(i,2),d=o[0],h=o[1],m=r.a.useState(!1),b=Object(j.a)(m,2),p=b[0],f=b[1],O=r.a.useState(!1),v=Object(j.a)(O,2),g=v[0],w=v[1],k=function(){var e=Object(u.a)(l.a.mark((function e(){var t,n,a,r,c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:t=e.sent,n=t.data.items.length,a=0,r=0,s=[];case 7:if(!(r<4)){e.next=17;break}if(c=Math.floor(Math.random()*(n-a+1))+a,!t.data.items[c]){e.next=13;break}s.push(t.data.items[c].id),e.next=14;break;case 13:return e.abrupt("continue",7);case 14:r++,e.next=7;break;case 17:return e.abrupt("return",s);case 18:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(u.a)(l.a.mark((function e(){var t,n,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.next=3,k();case 3:return t=e.sent,e.next=6,A(t);case 6:return n=e.sent,e.next=9,_();case 9:return a=e.sent,e.next=12,c=n.data.tracks[0].artists[0].id,s=a.data.country,x.a.all([C(c),I(c),T(c,s)]).then(x.a.spread((function(e,t,n){return{artist:e.data,related:t.data,topTracks:n.data}})));case 12:r=e.sent,h(r),f(!1);case 15:case"end":return e.stop()}var c,s}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){w(!g)};return r.a.useEffect((function(){y()}),[]),d?Object(P.jsx)("main",{className:"random",children:Object(P.jsxs)("div",{children:[Object(P.jsxs)("div",{className:"row randomrow",children:[Object(P.jsx)("div",{className:"image",children:Object(P.jsx)("img",{src:d.artist.images[0].url})}),Object(P.jsxs)("div",{className:"artistinfo",children:[Object(P.jsxs)("div",{className:"row artist-header",children:[Object(P.jsx)("h1",{children:d.artist.name}),Object(P.jsx)("button",{onClick:y,children:Object(P.jsx)(E.a,{spin:p,icon:L.g})})]}),Object(P.jsxs)("div",{className:"moreinfo",children:[Object(P.jsxs)("small",{children:[d.artist.followers.total," followers"]}),Object(P.jsx)("div",{className:"tags",children:d.artist.genres.map((function(e){return Object(P.jsx)("small",{children:e})}))})]})]})]}),Object(P.jsxs)("div",{className:"info",children:[Object(P.jsx)("h2",{children:"Top Tracks"}),Object(P.jsx)("div",{className:"related m-0",children:d.topTracks.tracks.map((function(e){return Object(P.jsxs)("div",{children:[e.is_playable&&Object(P.jsx)("audio",{autoPlay:g,children:Object(P.jsx)("source",{src:e.preview_url,type:""})}),Object(P.jsx)("div",{className:"album-thumbnail",children:Object(P.jsx)("img",{src:e.album.images[0].url,onMouseEnter:N,onMouseLeave:N})})]})}))}),Object(P.jsx)("h2",{children:"Related Artists"}),Object(P.jsx)("div",{className:"related m-0",children:d.related.artists.map((function(e){return Object(P.jsxs)("div",{children:[Object(P.jsx)("div",{className:"thumbnail",children:Object(P.jsx)("img",{src:e.images[0].url})}),Object(P.jsx)("p",{children:e.name})]})}))})]})]})}):Object(P.jsx)(q,{})}),Z=function(e){var t=r.a.useState(null),n=Object(j.a)(t,2),a=n[0],c=n[1],s=r.a.useState(null),i=Object(j.a)(s,2),o=i[0],d=i[1],h=function(){var e=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(t);case 2:n=e.sent,c(n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I(t);case 2:n=e.sent,d(n.data.artists);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(e){e.stopPropagation(),console.log(e.target),m(e.target.id),h(e.target.id),window.scrollTo({top:0,behavior:"smooth"})},p=e.loading,f=e.results,x=e.searchQuery;return p?Object(P.jsx)(q,{}):f&&0===f.length?Object(P.jsx)("main",{className:"content",children:Object(P.jsxs)("h1",{children:["No results for ",x]})}):Object(P.jsxs)("main",{className:"content",children:[Object(P.jsxs)("h1",{children:["Search Results for ",x]}),o&&Object(P.jsx)(z,{artists:o,currentArtist:a,handleClick:b}),Object(P.jsx)("div",{className:"card-container",children:f&&f.map((function(e){return Object(P.jsx)(K,{id:e.id,handleClick:b,image:e.images[0]?e.images[0].url:null,name:e.name})}))})]})},$=(n(81),function(e){r.a.useContext(D);var t=r.a.useState(),n=Object(j.a)(t,2),a=n[0],c=n[1],s=r.a.useState(),i=Object(j.a)(s,2),o=i[0],h=i[1],m=r.a.useState(),b=Object(j.a)(m,2),p=b[0],f=b[1],x=r.a.useState(),O=Object(j.a)(x,2),v=O[0],g=O[1],w=e.history,k=function(){var e=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),g(!0),w.push("/search"),c(t.target.value),e.next=6,N(a);case 6:n=e.sent,h(n.data.artists.items),f(!1);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),f(!0),g(!0),w.push("/search"),e.next=6,N(a);case 6:n=e.sent,h(n.data.artists.items),f(!1);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsxs)("div",{className:"row",children:[Object(P.jsx)(U,{searching:v}),Object(P.jsxs)("div",{className:"main",children:[Object(P.jsx)(R,{handleChange:k,handleSubmit:y}),Object(P.jsxs)(d.c,{children:[Object(P.jsx)(d.a,{exact:!0,path:"/",render:function(){return Object(P.jsx)(J,{})}}),Object(P.jsx)(d.a,{exact:!0,path:"/top",render:function(){return Object(P.jsx)(V,{})}}),Object(P.jsx)(d.a,{exact:!0,path:"/following",render:function(){return Object(P.jsx)(X,{})}}),Object(P.jsx)(d.a,{exact:!0,path:"/random",render:function(){return Object(P.jsx)(Y,{})}}),Object(P.jsx)(d.a,{exact:!0,path:"/search",render:function(){return Object(P.jsx)(Z,{loading:p,results:o,searchQuery:a})}})]})]})]}),Object(P.jsx)(G,{})]})}),ee=(n(82),function(e){return Object(P.jsxs)("button",{className:"main-button",type:"button",children:[Object(P.jsx)("img",{className:"logo",src:e.logo}),Object(P.jsx)("a",{href:e.link,children:e.label})]})}),te=n.p+"static/media/Spotify_Icon_RGB_White.ecd54051.png",ne=(n(83),function(){return Object(P.jsxs)("main",{className:"login",children:[Object(P.jsx)("h1",{children:"Artist Explorer"}),Object(P.jsx)(ee,{logo:te,link:"http://artist-explorer.herokuapp.com/login",label:"Login with Spotify"})]})}),ae=(n(84),function(e){return Object(P.jsx)(P.Fragment,{children:w?Object(P.jsx)($,Object(i.a)({},e)):Object(P.jsx)(ne,{})})}),re=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,86)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};s.a.render(Object(P.jsx)(r.a.StrictMode,{children:Object(P.jsx)(F,{children:Object(P.jsx)(H.a,{children:Object(P.jsx)(d.a,{component:ae})})})}),document.getElementById("root")),re()}},[[85,1,2]]]);
//# sourceMappingURL=main.01d72b51.chunk.js.map