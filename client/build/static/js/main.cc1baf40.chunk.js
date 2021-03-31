(this.webpackJsonpspotify=this.webpackJsonpspotify||[]).push([[0],{47:function(t,e,a){},71:function(t,e,a){},72:function(t,e,a){},73:function(t,e,a){},74:function(t,e,a){},77:function(t,e,a){},79:function(t,e,a){},80:function(t,e,a){},81:function(t,e,a){},82:function(t,e,a){},83:function(t,e,a){},84:function(t,e,a){},85:function(t,e,a){},86:function(t,e,a){},87:function(t,e,a){},88:function(t,e,a){},89:function(t,e,a){"use strict";a.r(e);var n=a(1),r=a.n(n),s=a(36),c=a.n(s),i=(a(47),a(21)),o=a(3),l=a(2),u=a.n(l),d=a(5),j=a(10),b=a.n(j),h=function(t){window.localStorage.setItem("spotify_token_timestamp",Date.now()),window.localStorage.setItem("spotify_access_token",t)},m=function(){return window.localStorage.getItem("spotify_refresh_token")},f=function(){var t=Object(d.a)(u.a.mark((function t(){var e,a,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.a.get("/refresh_token?refresh_token=".concat(m()));case 3:return e=t.sent,a=e.data,n=a.access_token,h(n),window.location.reload(),t.abrupt("return");case 11:t.prev=11,t.t0=t.catch(0),console.error(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=function(){for(var t,e={},a=/([^&;=]+)=?([^&;]*)/g,n=window.location.hash.substring(1);t=a.exec(n);)e[t[1]]=decodeURIComponent(t[2]);return e}(),e=t.error,a=t.access_token,n=t.refresh_token;e&&(console.error(e),f()),Date.now()-window.localStorage.getItem("spotify_token_timestamp")>36e5&&(console.warn("Access token has expired, refreshing..."),f());var r=window.localStorage.getItem("spotify_access_token"),s=m();return s&&"undefined"!==s||function(t){window.localStorage.setItem("spotify_refresh_token",t)}(n),r&&"undefined"!==r?r:(h(a),a)}(),x=function(){window.localStorage.removeItem("spotify_token_timestamp"),window.localStorage.removeItem("spotify_access_token"),window.localStorage.removeItem("spotify_refresh_token"),window.location.replace("http://artist-explorer.herokuapp.com")},O={Authorization:"Bearer ".concat(p),"Content-Type":"application/json"},g=function(t){return b.a.get("https://api.spotify.com/v1/search?q=".concat(t,"&type=artist&limit=40"),{headers:O})},v=function(){return b.a.get("https://api.spotify.com/v1/me",{headers:O})},y=function(){return b.a.get("https://api.spotify.com/v1/me/top/artists?limit=50&time_range=short_term",{headers:O})},w=function(t){return b.a.get("https://api.spotify.com/v1/artists/".concat(t),{headers:O})},k=function(t){return b.a.get("https://api.spotify.com/v1/artists/".concat(t,"/related-artists"),{headers:O})},N=function(t,e){return b.a.get(" https://api.spotify.com/v1/artists/".concat(t,"/top-tracks?market=").concat(e),{headers:O})},C=function(t){var e="https://api.spotify.com/v1/me/following?type=artist&ids=".concat(t);return b()({method:"put",url:e,headers:O})},S=function(t){return b.a.get("https://api.spotify.com/v1/me/following/contains?type=artist&ids=".concat(t),{headers:O})},_=function(t,e){return b.a.all([w(t),k(t),N(t,e),S(t)]).then(b.a.spread((function(t,e,a,n){return{artist:t.data,related:e.data,topTracks:a.data,doesFollow:n.data[0]}})))},A=a(8),P=a(37),T=a(38),F=a(42),M=a(41),D=a(0),E=r.a.createContext(),I=function(t){Object(F.a)(a,t);var e=Object(M.a)(a);function a(){var t;Object(P.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={user:""},t.componentDidMount=function(){t.getUser()},t.getUser=Object(d.a)(u.a.mark((function e(){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v();case 3:a=e.sent,t.setState({user:a.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.warn(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),t}return Object(T.a)(a,[{key:"render",value:function(){return Object(D.jsx)(E.Provider,{value:Object(i.a)({},this.state),children:this.props.children})}}]),a}(r.a.Component),L=(E.Consumer,I),R=a(6),H=a(7),B=(a(71),function(t){var e=t.handleSubmit,a=t.handleChange,n=t.searchQuery;return Object(D.jsxs)("form",{onSubmit:e,children:[Object(D.jsx)(R.a,{icon:H.g}),Object(D.jsx)("input",{placeholder:"Search",onChange:a,value:n})]})}),G=r.a.createContext(),U=(a(72),function(t){var e=r.a.useContext(E).user,a=r.a.useContext(G).hoverToPlay;return Object(D.jsxs)("div",{className:t.show?"dropdown activemenu":"dropdown",children:[Object(D.jsx)("small",{children:e.display_name}),Object(D.jsx)("small",{children:e.email}),Object(D.jsxs)("div",{className:"form-row",children:[Object(D.jsx)("input",{type:"checkbox",name:"pref-one",onClick:function(){t.setHoverToPlaySetting(!a)}}),Object(D.jsx)("small",{children:Object(D.jsx)("label",{htmlFor:"pref-one",children:"Disable hover to play"})})]}),Object(D.jsx)("button",{onClick:x,children:"Logout"})]})}),Q=(a(73),function(t){var e=r.a.useContext(E).user,a=r.a.useState(!1),n=Object(o.a)(a,2),s=n[0],c=n[1];return Object(D.jsxs)("header",{children:[Object(D.jsx)(B,{handleChange:t.handleChange,handleSubmit:t.handleSubmit}),Object(D.jsxs)("div",{className:"thumbnail-small dropdowntrigger",children:[Object(D.jsx)("img",{src:e.images&&e.images[0].url,onClick:function(t){t.stopPropagation(),c(!s)},alt:"Current User"}),Object(D.jsx)(U,{show:s,hoverToPlay:t.hoverToPlay,setHoverToPlaySetting:t.setHoverToPlaySetting})]})]})}),W=a(15),J=a.p+"static/media/Spotify_Icon_RGB_Green.cd66b8f6.png",Y=a(19),q=(a(74),function(){var t=Object(A.f)(),e=r.a.useState(),a=Object(o.a)(e,2),n=a[0],s=a[1],c=function(t){var e;e=t.target.id,s(e)};return r.a.useEffect((function(){s(t.pathname.replace("/",""))}),[]),Object(D.jsxs)("aside",{children:[Object(D.jsxs)("div",{className:"user-info",children:[Object(D.jsx)("div",{className:"thumbnail spotify",children:Object(D.jsx)(W.b,{to:"/",children:Object(D.jsx)("img",{src:J,alt:"Spotify Logo"})})}),Object(D.jsx)("h2",{children:"Artist Explorer"})]}),Object(D.jsxs)("ul",{className:"side-nav",children:[Object(D.jsx)(W.b,{className:"link",to:"/top",children:Object(D.jsxs)("li",{className:"top"===n?"active":null,onClick:c,id:"top",children:[Object(D.jsx)(R.a,{icon:H.i}),"\xa0 Top Artists"]})}),Object(D.jsx)(W.b,{className:"link",to:"/random",children:Object(D.jsxs)("li",{className:"random"===n?"active":null,onClick:c,id:"random",children:[Object(D.jsx)(R.a,{icon:H.a}),"\xa0 Random"]})}),Object(D.jsx)(W.b,{className:"link",to:"/following",children:Object(D.jsxs)("li",{className:"following"===n?"active":null,onClick:c,id:"following",children:[Object(D.jsx)(R.a,{icon:H.j}),"\xa0 Following"]})})]}),Object(D.jsxs)("div",{className:"social-icons",children:[Object(D.jsxs)("a",{href:"https://github.com/tiffbouchard",target:"_blank",rel:"noreferrer",children:[Object(D.jsx)(R.a,{icon:Y.b}),"\xa0"]}),Object(D.jsxs)("a",{href:"https://linkedin.com/in/tiffanybouchard",target:"_blank",rel:"noreferrer",children:[Object(D.jsx)(R.a,{icon:Y.d}),"\xa0"]}),Object(D.jsxs)("a",{href:"https://behance.net/tiffanybouchard",target:"_blank",rel:"noreferrer",children:[Object(D.jsx)(R.a,{icon:Y.a}),"\xa0"]}),Object(D.jsxs)("a",{href:"https://tiffbouchard.com",target:"_blank",rel:"noreferrer",children:[Object(D.jsx)(R.a,{icon:H.c}),"\xa0"]}),Object(D.jsxs)("a",{href:"https://instagram.com/tiffbouchard",targe:"_blank",rel:"noreferrer",children:[Object(D.jsx)(R.a,{icon:Y.c}),"\xa0"]})]})]})}),z=a(40),K=(a(77),function(){return Object(D.jsx)("main",{className:"loader",children:Object(D.jsx)(z.Bars,{fill:"mediumseagreen",height:"70px"})})}),V=a(16),X=(a(79),a(80),function(t){var e=t.nowPlaying;r.a.useContext(G).hoverToPlay;return Object(D.jsx)("div",{className:"container",children:(V.isMobile,e&&Object(D.jsxs)("div",{className:"player",children:[Object(D.jsx)("div",{className:"music-info",children:Object(D.jsx)("div",{children:Object(D.jsx)("img",{src:e[0],alt:"Currently Playing Album Cover"})})}),Object(D.jsx)("div",{className:"trackinfo",children:Object(D.jsxs)("div",{children:[Object(D.jsx)("p",{children:e[1]}),Object(D.jsx)("small",{className:"secondary-text",children:e[2]})]})})]}))})}),Z=function(t){var e=t.handleClick,a=t.artistDetails,n=t.following,s=t.handleFollow,c=t.setClickedNewArtist,i=t.clickedNewArtist,l=r.a.useState(!1),u=Object(o.a)(l,2),d=u[0],j=u[1],b=r.a.useState(null),h=Object(o.a)(b,2),m=h[0],f=h[1],p=r.a.useState(!0),x=Object(o.a)(p,2),O=x[0],g=x[1],v=r.a.useRef(null),y=r.a.useContext(G).hoverToPlay,w=function(t){t.stopPropagation(),g(!0),j(t.target.id),f([t.target.src,t.target.getAttribute("data-name"),t.target.getAttribute("data-artists")]),i&&c(!1)},k=function(t){i&&c(!1),m&&t.target.id===m[3]?(f([t.target.getAttribute("data-img"),t.target.getAttribute("data-name"),t.target.getAttribute("data-artists"),t.target.id]),j(!d),g(!O)):(null!==m&&null!==m[0]||!1!==d)&&(null!==m&&null!==m[0]||!0!==d)?d&&m&&t.target.id!==m[3]?(f([t.target.getAttribute("data-img"),t.target.getAttribute("data-name"),t.target.getAttribute("data-artists"),t.target.id]),j(!0),g(!0)):(!1===d&&m&&(t.target.id,m[3]),f([t.target.getAttribute("data-img"),t.target.getAttribute("data-name"),t.target.getAttribute("data-artists"),t.target.id]),j(!0),g(!0)):(f([t.target.getAttribute("data-img"),t.target.getAttribute("data-name"),t.target.getAttribute("data-artists"),t.target.id]),j(!0),g(!0))},N=function(){g(!1),j(!1)},C=function(t){t.stopPropagation(),g(!1),j(null),f(null)};return a?Object(D.jsxs)("div",{className:"info-card",children:[Object(D.jsxs)("div",{className:"current-artist",children:[Object(D.jsx)("div",{className:"thumbnail",children:Object(D.jsx)("img",{src:a.artist.images.length?a.artist.images[0].url:J,alt:"".concat(a.artist.name)})}),Object(D.jsxs)("div",{className:"about",children:[Object(D.jsxs)("h2",{children:[a.artist.name,Object(D.jsx)("a",{target:"_blank",rel:"noreferrer",className:"external-tag",href:a.artist.external_urls.spotify,children:Object(D.jsx)(R.a,{icon:H.b})})]}),Object(D.jsxs)("small",{className:"stats",children:[a.artist.followers.total," followers"]}),Object(D.jsx)("div",{className:"tags",children:a.artist.genres.map((function(t){return Object(D.jsx)("small",{children:t},t)}))}),a.doesFollow||204===n?Object(D.jsx)("button",{id:a.artist.id,className:"follow-btn",children:"Following"}):Object(D.jsxs)("button",{onClick:s,id:a.artist.id,className:"follow-btn",children:["Follow\xa0",Object(D.jsx)(R.a,{icon:H.e})]})]})]}),Object(D.jsxs)("div",{className:"related-tracks",children:[Object(D.jsx)("h2",{children:"Top Tracks"}),Object(D.jsx)("div",{className:"related m-0",children:a.topTracks&&a.topTracks.tracks&&a.topTracks.tracks.map((function(t){return Object(D.jsxs)("div",{children:[V.isMobile||!y?t.is_playable&&d&&m&&m[3]===t.id&&Object(D.jsx)("audio",{id:t.id,autoPlay:!0,ref:v,onLoadedData:function(){return v.current.play()},onEnded:function(){return N()},children:Object(D.jsx)("source",{src:t.preview_url,type:""})}):t.is_playable&&m&&d===t.id&&Object(D.jsx)("audio",{id:t.id,autoPlay:!0,ref:v,onLoadedData:function(){return v.current.play()},onEnded:function(){return N()},children:Object(D.jsx)("source",{src:t.preview_url,type:""})}),V.isMobile||!y?t.is_playable&&Object(D.jsxs)("div",{className:"album-thumbnail",children:[Object(D.jsx)("button",{className:"play-overlay-trigger","data-img":t.album.images[0].url,"data-name":t.name,"data-artists":t.artists.map((function(t){return t.name})),onClick:k,id:t.id}),Object(D.jsx)("div",{className:"play-overlay",children:Object(D.jsx)(R.a,{icon:d&&m&&m[3]===t.id?H.h:H.d})}),Object(D.jsx)("img",{src:t.album.images[0].url,alt:"".concat(t.album.name," Album Cover")})]}):t.is_playable&&Object(D.jsx)("div",{className:"album-thumbnail",children:Object(D.jsx)("img",{src:t.album.images[0].url,"data-name":t.name,"data-artists":t.artists.map((function(t){return t.name})),onMouseEnter:w,onMouseLeave:C,id:t.id,alt:"".concat(t.name," Album Cover")})})]},t.id)}))}),Object(D.jsx)("h2",{children:"Related Artists"}),Object(D.jsx)("div",{className:"related",children:a.related&&a.related.artists&&a.related.artists.map((function(t){return Object(D.jsxs)("div",{className:"artist",onClick:e,children:[Object(D.jsx)("div",{className:"thumbnail",children:Object(D.jsx)("img",{src:t.images.length?t.images[0].url:J,id:t.id,alt:"".concat(t.name)})}),Object(D.jsx)("small",{children:t.name})]},t.id)}))})]}),O&&!i&&Object(D.jsx)(X,{nowPlaying:m,playing:O})]}):Object(D.jsx)(K,{})},$=(a(81),function(t){var e=t.image,a=t.name,n=t.id,r=t.handleClick;return Object(D.jsx)("div",{children:Object(D.jsxs)("div",{className:"card",onClick:r,children:[Object(D.jsx)("div",{className:"img-container",children:Object(D.jsx)("img",{id:n,src:e,alt:"".concat(a)})}),Object(D.jsx)("div",{className:"name",id:n,children:a})]},n)})}),tt=(a(82),function(){var t=r.a.useContext(E).user,e=r.a.useState(null),a=Object(o.a)(e,2),n=a[0],s=a[1],c=r.a.useState(null),i=Object(o.a)(c,2),l=i[0],j=i[1],h=r.a.useState(),m=Object(o.a)(h,2),f=m[0],p=m[1],x=function(){var t=Object(d.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.get("https://api.spotify.com/v1/me/top/artists?limit=50&time_range=long_term",{headers:O});case 2:e=t.sent,s(e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),g=function(){var t=Object(d.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.get("https://api.spotify.com/v1/me/top/artists?limit=50&time_range=medium_term",{headers:O});case 2:e=t.sent,s(e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),v=function(){var t=Object(d.a)(u.a.mark((function t(e){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C(e.target.id);case 2:a=t.sent,p(a.status);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),w=function(){var t=Object(d.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y();case 2:e=t.sent,s(e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),k=function(){var e=Object(d.a)(u.a.mark((function e(a){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_(a,t.country);case 2:n=e.sent,j(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(t){t.stopPropagation(),k(t.target.id),p(null),window.scrollTo({top:0,behavior:"smooth"})};return r.a.useEffect((function(){x()}),[]),n?Object(D.jsxs)("main",{className:"content",children:[Object(D.jsxs)("div",{className:"header",children:[Object(D.jsx)("h1",{children:"Top Artists"}),Object(D.jsxs)("div",{children:[Object(D.jsx)("button",{onClick:x,children:"All Time"}),Object(D.jsx)("button",{onClick:g,children:"Last 6 Months"}),Object(D.jsx)("button",{onClick:w,children:"Last 4 Weeks"})]})]}),l&&Object(D.jsx)(Z,{handleFollow:v,following:f,artistDetails:l,handleClick:N}),Object(D.jsx)("div",{className:"card-container",children:n&&n.items.map((function(t){return Object(D.jsx)($,{id:t.id,handleClick:N,image:t.images[0].url,name:t.name},t.id)}))})]}):Object(D.jsx)(K,{})}),et=function(){var t=r.a.useState(null),e=Object(o.a)(t,2),a=e[0],n=e[1],s=r.a.useState(null),c=Object(o.a)(s,2),i=c[0],l=c[1],j=r.a.useState(),h=Object(o.a)(j,2),m=h[0],f=h[1],p=function(){var t=Object(d.a)(u.a.mark((function t(e){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C(e.target.id);case 2:a=t.sent,console.log(a.status),f(a.status);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),x=function(){var t=Object(d.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.get("https://api.spotify.com/v1/me/following?type=artist&limit=50",{headers:O});case 2:e=t.sent,n(e.data.artists);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),g=function(){var t=Object(d.a)(u.a.mark((function t(e){var a,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v();case 2:return a=t.sent,t.next=5,_(e,a.data.country);case 5:n=t.sent,l(n);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),y=function(t){t.stopPropagation(),g(t.target.id),f(null),window.scrollTo({top:0,behavior:"smooth"})};return r.a.useEffect((function(){x()}),[]),a?Object(D.jsxs)("main",{className:"content",children:[Object(D.jsx)("h1",{children:"Following"}),i&&Object(D.jsx)(Z,{handleFollow:p,following:m,artistDetails:i,handleClick:y}),Object(D.jsx)("div",{className:"card-container",children:a&&a.items.map((function(t){return Object(D.jsx)($,{id:t.id,handleClick:y,image:t.images[0].url,name:t.name},t.id)}))})]}):Object(D.jsx)(K,{})},at=(a(83),function(t){var e=t.title,a=t.body,n=t.closeModal,r=t.type;return Object(D.jsx)("div",{className:"modal-back",children:Object(D.jsxs)("div",{className:"modal",children:[Object(D.jsx)("h2",{children:e}),"welcome"===r?Object(D.jsxs)("div",{className:"welcome-msg",children:[Object(D.jsx)("p",{children:"Artist Explorer is the perfect way to discover new artists that match your vibe. Start with what's familiar and find your way to someone new."}),Object(D.jsx)("p",{children:Object(D.jsx)("b",{children:"You can start exploring artists four ways..."})}),Object(D.jsxs)("div",{className:"icons",children:[Object(D.jsxs)("div",{children:[Object(D.jsx)("h1",{children:Object(D.jsx)(R.a,{icon:H.i})}),Object(D.jsx)("p",{children:"Start with your top artists of all time, last 6 months or 4 weeks."})]}),Object(D.jsxs)("div",{children:[Object(D.jsx)("h1",{children:Object(D.jsx)(R.a,{icon:H.a})}),Object(D.jsx)("p",{children:"Generate a random artist based on who you've been listening to lately."})]}),Object(D.jsxs)("div",{children:[Object(D.jsx)("h1",{children:Object(D.jsx)(R.a,{icon:H.j})}),Object(D.jsx)("p",{children:"Start with the artists you already follow."})]}),Object(D.jsxs)("div",{children:[Object(D.jsx)("h1",{children:Object(D.jsx)(R.a,{icon:H.g})}),Object(D.jsx)("p",{children:"Have someone you're thinking of? Search it up!"})]})]}),Object(D.jsxs)("p",{children:["Found your starting point? Click on your favourite artist to find similar artists and listen to their top tracks.  Continue clicking on artists until you find what you're looking for! ",Object(D.jsxs)("b",{children:["Tracks play on hover to make music discovery super fast. If this is annoying to you, go ahead and click your profile image in the top right and ",Object(D.jsx)("i",{children:'"Disable hover to play".'})]})]})]}):Object(D.jsx)("p",{children:a}),Object(D.jsx)("div",{className:"call-to-action",children:Object(D.jsx)("button",{onClick:n,children:"Let's go!"})})]})})}),nt=(a(84),function(){var t=r.a.useState(null),e=Object(o.a)(t,2),a=e[0],n=e[1],s=r.a.useState(!1),c=Object(o.a)(s,2),i=c[0],l=c[1],j=r.a.useState(!1),h=Object(o.a)(j,2),m=h[0],f=h[1],p=r.a.useState(null),x=Object(o.a)(p,2),g=x[0],w=x[1],k=r.a.useState(null),N=Object(o.a)(k,2),S=N[0],A=N[1],P=r.a.useState(!1),T=Object(o.a)(P,2),F=T[0],M=T[1],E=r.a.useState(),I=Object(o.a)(E,2),L=I[0],B=I[1],U=r.a.useContext(G).hoverToPlay,Q=r.a.useState(!0),W=Object(o.a)(Q,2),J=W[0],Y=W[1],q=r.a.useState(!1),z=Object(o.a)(q,2),$=z[0],tt=z[1],et=r.a.useRef(null),nt=function(){var t=Object(d.a)(u.a.mark((function t(){var e,a,n,r,s,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y();case 2:e=t.sent,a=e.data.items.length,n=0,r=0,c=[];case 7:if(!(r<4)){t.next=17;break}if(s=Math.floor(Math.random()*(a-n+1))+n,!e.data.items[s]){t.next=13;break}c.push(e.data.items[s].id),t.next=14;break;case 13:return t.abrupt("continue",7);case 14:r++,t.next=7;break;case 17:return t.abrupt("return",c);case 18:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),rt=function(){var t=Object(d.a)(u.a.mark((function t(){var e,a,r,s;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l(!0),t.next=3,nt();case 3:return e=t.sent,t.next=6,c=e,b.a.get("https://api.spotify.com/v1/recommendations?seed_artists=".concat(c,"&limit=1"),{headers:O});case 6:return a=t.sent,t.next=9,v();case 9:return r=t.sent,t.next=12,_(a.data.tracks[0].artists[0].id,r.data.country);case 12:s=t.sent,n(s),B(null),l(!1);case 16:case"end":return t.stop()}var c}),t)})));return function(){return t.apply(this,arguments)}}(),st=function(){var t=Object(d.a)(u.a.mark((function t(e){var a,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v();case 2:return a=t.sent,t.next=5,_(e,a.data.country);case 5:n=t.sent,A(n);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),ct=function(t){tt(!1),g&&t.target.id===g[3]?(w([t.target.getAttribute("data-img"),t.target.getAttribute("data-name"),t.target.getAttribute("data-artists"),t.target.id]),f(!m),Y(!J)):(null!==g&&null!==g[0]||!1!==m)&&(null!==g&&null!==g[0]||!0!==m)?m&&g&&t.target.id!==g[3]?(w([t.target.getAttribute("data-img"),t.target.getAttribute("data-name"),t.target.getAttribute("data-artists"),t.target.id]),f(!0),Y(!0)):(!1===m&&g&&(t.target.id,g[3]),w([t.target.getAttribute("data-img"),t.target.getAttribute("data-name"),t.target.getAttribute("data-artists"),t.target.id]),f(!0),Y(!0)):(w([t.target.getAttribute("data-img"),t.target.getAttribute("data-name"),t.target.getAttribute("data-artists"),t.target.id]),f(!0),Y(!0))},it=function(){var t=Object(d.a)(u.a.mark((function t(e){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C(e.target.id);case 2:a=t.sent,console.log(a.status),B(a.status);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),ot=function(t){t.stopPropagation(),Y(!1),f(!1),tt(!0),st(t.target.id),B(null),window.scrollTo({top:0,behavior:"smooth"})},lt=function(t){t.stopPropagation(),Y(!0),tt(!1),f(t.target.id),w([t.target.src,t.target.getAttribute("data-name"),t.target.getAttribute("data-artists")])},ut=function(t){t.stopPropagation(),Y(!1),f(null),w(null)};return r.a.useEffect((function(){rt()}),[]),a?Object(D.jsxs)("main",{className:"random",children:[F&&Object(D.jsx)(at,{closeModal:function(){M(!1)},title:"How it works",body:"The random artist generator is the perfect way to discover new artists or rediscover some of your favourites. Sometimes there are just too many options and the random generator makes it easy to jump in and start listening to something good. Your results are based on your current favourites so you always get an artist that matches your vibe. A random array of your top artists from the past 4 weeks are thrown into Spotify's recommendation system and returns someone similar. Not happy with the results? Generate a new artist using the \u21bb button"}),S&&Object(D.jsx)(Z,{following:L,handleFollow:it,artistDetails:S,handleClick:ot,clickedNewArtist:$,setClickedNewArtist:tt}),Object(D.jsxs)("div",{children:[Object(D.jsxs)("div",{className:"randomheader-info",children:[Object(D.jsx)("button",{onClick:rt,children:Object(D.jsx)(R.a,{spin:i,icon:H.f})}),Object(D.jsx)("small",{onClick:function(){M(!0)},children:Object(D.jsx)("u",{children:"How it works"})})]}),Object(D.jsxs)("div",{className:"randomrow",children:[Object(D.jsx)("div",{className:"image",children:Object(D.jsx)("img",{src:a.artist.images?a.artist.images[0].url:"",alt:"".concat(a.artist.name)})}),Object(D.jsxs)("div",{className:"artistinfo",children:[Object(D.jsxs)("div",{className:"randomrow artist-header",children:[Object(D.jsx)("h1",{children:a.artist.name}),Object(D.jsx)("a",{target:"_blank",className:"external-tag",href:a.artist.external_urls.spotify,rel:"noreferrer",children:Object(D.jsx)(R.a,{icon:H.b})})]}),Object(D.jsxs)("div",{className:"moreinfo",children:[Object(D.jsxs)("small",{children:[a.artist.followers.total," followers"]}),Object(D.jsx)("div",{className:"tags",children:a.artist.genres.map((function(t){return Object(D.jsx)("small",{children:t},t)}))}),a.doesFollow||204===L?Object(D.jsx)("button",{id:a.artist.id,className:"follow-btn",children:"Following"}):Object(D.jsxs)("button",{onClick:it,id:a.artist.id,className:"follow-btn",children:["Follow\xa0",Object(D.jsx)(R.a,{icon:H.e})]})]})]})]}),Object(D.jsxs)("div",{className:"info",children:[Object(D.jsx)("h2",{children:"Top Tracks"}),Object(D.jsx)("div",{className:"related m-0",children:a.topTracks.tracks.map((function(t){return Object(D.jsxs)("div",{children:[V.isMobile||!U?t.is_playable&&m&&g&&g[3]===t.id&&Object(D.jsx)("audio",{id:t.id,autoPlay:!0,ref:et,onLoadedData:function(){return et.current.play()},onEnded:function(){return Y(!1),void f(!1)},children:Object(D.jsx)("source",{src:t.preview_url,type:""})}):t.is_playable&&m===t.id&&Object(D.jsx)("audio",{id:t.id,autoPlay:!0,ref:et,onLoadedData:function(){return et.current.play()},children:Object(D.jsx)("source",{src:t.preview_url,type:""})}),V.isMobile||!U?t.is_playable&&Object(D.jsxs)("div",{className:"album-thumbnail",children:[Object(D.jsx)("button",{className:"play-overlay-trigger","data-img":t.album.images[0].url,"data-name":t.name,"data-artists":t.artists.map((function(t){return t.name})),onClick:ct,id:t.id}),Object(D.jsx)("div",{className:"play-overlay",children:Object(D.jsx)(R.a,{icon:m&&g&&g[3]===t.id?H.h:H.d})}),Object(D.jsx)("img",{src:t.album.images[0].url,alt:"Album Cover for ".concat(t.name)})]}):t.is_playable&&Object(D.jsx)("div",{className:"album-thumbnail",children:Object(D.jsx)("img",{src:t.album.images[0].url,"data-name":t.name,"data-artists":t.artists.map((function(t){return t.name})),onMouseEnter:lt,onMouseLeave:ut,id:t.id,alt:"Album Cover for ".concat(t.name)})})]},t.id)}))}),Object(D.jsx)("h2",{children:"Related Artists"}),Object(D.jsx)("div",{className:"related m-0",children:a.related.artists.map((function(t){return Object(D.jsxs)("div",{children:[Object(D.jsx)("div",{className:"thumbnail",onClick:ot,children:Object(D.jsx)("img",{src:t.images[0].url,id:t.id,alt:"".concat(t.name)})}),Object(D.jsx)("p",{children:t.name})]},t.id)}))})]})]}),J&&!$&&Object(D.jsx)(X,{nowPlaying:g})]}):Object(D.jsx)(K,{})}),rt=function(t){var e=r.a.useContext(E).user,a=t.loading,n=t.results,s=t.searchQuery,c=r.a.useState(null),i=Object(o.a)(c,2),l=i[0],j=i[1],b=r.a.useState(),h=Object(o.a)(b,2),m=h[0],f=h[1],p=function(){var t=Object(d.a)(u.a.mark((function t(e){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C(e.target.id);case 2:a=t.sent,console.log(a.status),f(a.status);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),x=function(){var t=Object(d.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_(a,e.country);case 2:n=t.sent,j(n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),O=function(t){t.stopPropagation(),x(t.target.id),f(null),window.scrollTo({top:0,behavior:"smooth"})};return a?Object(D.jsx)(K,{}):n&&0===n.length?Object(D.jsx)("main",{className:"content",children:Object(D.jsxs)("h1",{children:["No results for ",s]})}):Object(D.jsxs)("main",{className:"content",children:[Object(D.jsxs)("h1",{children:["Search Results for ",s]}),l&&Object(D.jsx)(Z,{handleFollow:p,following:m,artistDetails:l,handleClick:O}),Object(D.jsx)("div",{className:"card-container",children:n&&n.map((function(t){return Object(D.jsx)($,{id:t.id,handleClick:O,image:t.images[0]?t.images[0].url:null,name:t.name})}))})]})},st=(a(85),function(){var t=r.a.useContext(E).user,e=r.a.useState(!1),a=Object(o.a)(e,2),n=a[0],s=a[1];return Object(D.jsxs)("div",{className:"mobile-header",children:[Object(D.jsx)("div",{className:"logo-cont",children:Object(D.jsxs)(W.b,{to:"/",children:[Object(D.jsx)("img",{src:J,alt:"Spotify Logo"}),Object(D.jsx)("h2",{children:"Artist Explorer"})]})}),Object(D.jsxs)("div",{className:"mobile-thumbnail-small dropdowntrigger",children:[Object(D.jsx)("img",{src:t.images&&t.images[0].url,onClick:function(t){t.stopPropagation(),s(!n)},alt:"Current User"}),Object(D.jsx)(U,{show:n})]})]})}),ct=(a(86),function(t){var e=r.a.useContext(E).user,a=t.history,n=r.a.useState(!0),s=Object(o.a)(n,2),c=s[0],i=s[1],l={hoverToPlay:c},j=r.a.useState(),b=Object(o.a)(j,2),h=b[0],m=b[1],f=r.a.useState(),p=Object(o.a)(f,2),x=p[0],O=p[1],v=r.a.useState(),y=Object(o.a)(v,2),w=y[0],k=y[1],N=r.a.useState(),C=Object(o.a)(N,2),S=C[0],_=C[1],P=r.a.useState(!0),T=Object(o.a)(P,2),F=T[0],M=T[1],I=function(){var t=Object(d.a)(u.a.mark((function t(e){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return k(!0),_(!0),a.push("/search"),m(e.target.value),t.next=6,g(h);case 6:n=t.sent,O(n.data.artists.items),k(!1);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),L=function(){var t=Object(d.a)(u.a.mark((function t(e){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),k(!0),_(!0),a.push("/search"),t.next=6,g(h);case 6:n=t.sent,O(n.data.artists.items),k(!1);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return e?Object(D.jsx)(D.Fragment,{children:Object(D.jsxs)(G.Provider,{value:l,children:[Object(D.jsx)(st,{}),F&&Object(D.jsx)(at,{closeModal:function(){M(!1)},title:"Welcome back, ".concat(e.display_name,"!"),type:"welcome"}),Object(D.jsxs)("div",{className:"row",children:[Object(D.jsx)(q,{searching:S}),Object(D.jsxs)("div",{className:"main",children:[Object(D.jsx)(Q,{hoverToPlay:c,setHoverToPlaySetting:function(t){i(t)},handleChange:I,handleSubmit:L}),Object(D.jsxs)(A.c,{children:[Object(D.jsx)(A.a,{exact:!0,path:"/",render:function(){return Object(D.jsx)(tt,{})}}),Object(D.jsx)(A.a,{exact:!0,path:"/top",render:function(){return Object(D.jsx)(tt,{})}}),Object(D.jsx)(A.a,{exact:!0,path:"/following",render:function(){return Object(D.jsx)(et,{})}}),Object(D.jsx)(A.a,{exact:!0,path:"/random",render:function(){return Object(D.jsx)(nt,{})}}),Object(D.jsx)(A.a,{exact:!0,path:"/search",render:function(){return Object(D.jsx)(rt,{loading:w,results:x,searchQuery:h})}})]})]})]})]})}):Object(D.jsx)(K,{})}),it=(a(87),function(t){return Object(D.jsxs)("button",{className:"main-button",type:"button",children:[Object(D.jsx)("img",{className:"logo",src:t.logo,alt:"spotify-logo"}),Object(D.jsx)("a",{href:t.link,children:t.label})]})}),ot=a.p+"static/media/Spotify_Icon_RGB_White.ecd54051.png",lt=(a(88),function(){return Object(D.jsxs)("main",{className:"login",children:[Object(D.jsx)("h1",{children:"Artist Explorer"}),Object(D.jsx)(it,{logo:ot,link:"http://artist-explorer.herokuapp.com/login",label:"Login with Spotify"})]})}),ut=function(t){var e=r.a.useState(""),a=Object(o.a)(e,2),n=a[0],s=a[1];return r.a.useEffect((function(){s(p)}),[]),Object(D.jsx)(D.Fragment,{children:n?Object(D.jsx)(ct,Object(i.a)({},t)):Object(D.jsx)(lt,{})})},dt=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,90)).then((function(e){var a=e.getCLS,n=e.getFID,r=e.getFCP,s=e.getLCP,c=e.getTTFB;a(t),n(t),r(t),s(t),c(t)}))};c.a.render(Object(D.jsx)(r.a.StrictMode,{children:Object(D.jsx)(L,{children:Object(D.jsx)(W.a,{children:Object(D.jsx)(A.a,{component:ut})})})}),document.getElementById("root")),dt()}},[[89,1,2]]]);
//# sourceMappingURL=main.cc1baf40.chunk.js.map