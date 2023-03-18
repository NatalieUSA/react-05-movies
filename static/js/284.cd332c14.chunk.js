"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[284],{1284:function(e,r,n){n.r(r),n.d(r,{default:function(){return k}});var t=n(1413),a=n(5861),s=n(9439),i=n(7757),c=n.n(i),u=n(1087),o=n(7689),d=n(2791),f=n(632),l="movie-details-page_wraper__HAJHV",p="movie-details-page_wrap__ecKB5",v="movie-details-page_back__wN1Hn",h="movie-details-page_poster__+3YiL",m="movie-details-page_text__KiZFd",g="movie-details-page_genres__B5xuH",_="movie-details-page_overview__PQi3D",x="movie-details-page_page__G7vPS",w="movie-details-page_link__P9f1x",b=n(9418),j=n(184),k=function(){var e,r,n=(0,d.useState)({item:{},loading:!1,error:null}),i=(0,s.Z)(n,2),k=i[0],Z=i[1],y=(0,o.UO)().movieId;(0,d.useEffect)((function(){var e=function(){var e=(0,a.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Z((function(e){return(0,t.Z)((0,t.Z)({},e),{},{loading:!0,error:null})})),e.prev=1,e.next=4,(0,f.TP)(y);case 4:r=e.sent,Z((function(e){return(0,t.Z)((0,t.Z)({},e),{},{item:r})})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),Z((function(r){return(0,t.Z)((0,t.Z)({},r),{},{error:e.t0})}));case 11:return e.prev=11,Z((function(e){return(0,t.Z)((0,t.Z)({},e),{},{loading:!1})})),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[Z,y]);var N=(0,o.TH)(),U=(0,d.useRef)(null!==(e=null===(r=N.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/movies"),S=k.item;return(0,j.jsxs)("div",{className:l,children:[(0,j.jsxs)("div",{className:p,children:[(0,j.jsx)(u.rU,{to:U.current,className:v,children:(0,j.jsx)("span",{children:"GO BACK"})}),(0,j.jsx)("div",{children:(0,j.jsx)("img",{className:h,src:null!==S&&void 0!==S&&S.poster_path?"https://image.tmdb.org/t/p/w500".concat(S.poster_path):b,alt:S.title})}),(0,j.jsx)("div",{className:m,children:(0,j.jsxs)("div",{children:[(0,j.jsx)("h4",{children:"MovieDetailsPage"}),(0,j.jsxs)("h2",{children:["Title:",S.title]}),(0,j.jsxs)("p",{children:[" ",S.release_date]}),(0,j.jsxs)("p",{children:["Vote ",(0,j.jsxs)("span",{children:[Math.ceil(100*S.vote_average)/10,"%"]})]}),(0,j.jsxs)("p",{className:g,children:["Genres:",S.genres&&S.genres.map((function(e){return(0,j.jsx)("span",{children:e.name},e.id)}))]})]})}),(0,j.jsx)("div",{className:_,children:(0,j.jsxs)("h5",{children:["Overview: ",S.overview]})})]}),(0,j.jsxs)("ul",{className:x,children:[(0,j.jsx)(u.rU,{to:"/movies/".concat(y,"/cast"),className:w,children:"Actors"}),(0,j.jsx)(u.rU,{to:"/movies/".concat(y,"/reviews"),className:w,children:"Reviews"})]}),(0,j.jsx)(o.j3,{})]})}},632:function(e,r,n){n.d(r,{IQ:function(){return o},JN:function(){return c},TP:function(){return u},Tn:function(){return d},gH:function(){return f}});var t=n(5861),a=n(7757),s=n.n(a),i=n(1243).Z.create({baseURL:"https://api.themoviedb.org/3"}),c=function(){var e=(0,t.Z)(s().mark((function e(){var r,n,t=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.length>0&&void 0!==t[0]?t[0]:1,e.next=3,i.get("/trending/movie/week?api_key=f7a41df070de2591b426f4643d7fd0fb&language=en-US");case 3:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,t.Z)(s().mark((function e(r){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(r,"?api_key=f7a41df070de2591b426f4643d7fd0fb&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),o=function(){var e=(0,t.Z)(s().mark((function e(r){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(r,"}/credits?api_key=f7a41df070de2591b426f4643d7fd0fb&language=en-US"));case 2:return n=e.sent,t=n.data,e.abrupt("return",t.cast);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),d=function(){var e=(0,t.Z)(s().mark((function e(r){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(r,"/reviews?api_key=f7a41df070de2591b426f4643d7fd0fb&language=en-US"));case 2:return n=e.sent,t=n.data,e.abrupt("return",t.results);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(s().mark((function e(r){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/search/movie?query=".concat(r,"&api_key=f7a41df070de2591b426f4643d7fd0fb&language=en-US&page=1"));case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},9418:function(e,r,n){e.exports=n.p+"static/media/dfi.53565eaba7b293812c11.jpg"}}]);
//# sourceMappingURL=284.cd332c14.chunk.js.map