(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{588:function(e,t,n){e.exports=n.p+"img/offer-image.9f4bf9f.png"},634:function(e,t,n){var content=n(686);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(30).default)("26832dbf",content,!0,{sourceMap:!1})},681:function(e,t,n){e.exports=n.p+"img/1.53b81db.png"},682:function(e,t,n){e.exports=n.p+"img/2.5f4f183.png"},683:function(e,t,n){e.exports=n.p+"img/3.f846824.png"},684:function(e,t,n){e.exports=n.p+"img/4.3b31288.png"},685:function(e,t,n){"use strict";n(634)},686:function(e,t,n){var o=n(29),r=n(116),l=n(687),c=o(!1),m=r(l);c.push([e.i,".mobile-welcome{min-height:90rem;height:90rem;background-image:url("+m+");background-size:cover;background-position:50%;padding-top:15rem;display:flex;flex-direction:column;align-items:center;justify-content:center}.mobile-welcome>.content{position:relative;width:100%}.mobile-welcome>.content>.main-image{width:59.1rem;height:25.7rem;margin:0 auto}.mobile-welcome>.content>.main-image>img{-o-object-fit:contain;object-fit:contain;width:100%;height:100%}.mobile-welcome>.content>.swiper{margin:0 auto;width:100%;-webkit-mask-image:linear-gradient(270deg,transparent,#000 3%,#000 97%,transparent)}.mobile-welcome>.content>.swiper .item{width:100%}.mobile-welcome>.content>.swiper .item>.container{width:100%;height:44.7rem;background-size:65.3rem 45.1rem;background-repeat:no-repeat;position:relative;color:#fff}.mobile-welcome>.content>.swiper .item>.container>.content{position:absolute;top:11rem;right:22.5rem;left:6.7rem;bottom:5rem}.mobile-welcome>.content>.swiper .item>.container>.content>h3{font-weight:300;font-weight:400;font-size:4rem;line-height:5rem;-webkit-text-decoration-line:underline;text-decoration-line:underline}.mobile-welcome>.content>.swiper .item>.container>.content>h6{margin-top:0;font-weight:300;font-size:2rem;line-height:2.5rem}.mobile-welcome>.content>.swiper-pagination{margin-top:1.5rem;width:100%;display:flex;justify-content:center;grid-column-gap:.6rem;-moz-column-gap:.6rem;column-gap:.6rem}.mobile-welcome>.content>.swiper-pagination>.swiper-pagination-bullet{border:.15rem solid #5b8daa;height:1.5rem;width:1.5rem;transition:all .5s}.mobile-welcome>.content>.swiper-pagination>.swiper-pagination-bullet-active{width:6.6rem;height:1.5rem;background:#eeca80;border-radius:10rem}.mobile-welcome>.content .swiper-navigation{top:calc(50% + 15rem);width:100%;pointer-events:none;display:flex;justify-content:space-between;align-self:stretch;z-index:10;position:absolute}.mobile-welcome>.content .swiper-navigation .swiper-button{width:3.8rem;height:3.8rem;pointer-events:all;background-color:#fff;border:none;border-radius:50%;display:flex;align-items:center;justify-content:center;top:0;transition:all .4s}.mobile-welcome>.content .swiper-navigation .swiper-button svg{width:1.1rem;margin-left:-.5rem;height:1.1rem}.mobile-welcome>.content .swiper-navigation .swiper-button:after{display:none}",""]),e.exports=c},687:function(e,t,n){e.exports=n.p+"img/01.c693f8d.webp"},722:function(e,t,n){"use strict";n.r(t);n(41),n(66),n(86);var o=n(580),r=(n(581),{name:"mobile-welcome",components:{Swiper:o.Swiper,SwiperSlide:o.SwiperSlide},methods:{activeteSwiper:function(){this.activeSlide+1>this.slides.length?this.activeSlide=0:this.activeSlide++,this.swiper.slideTo(this.activeSlide)},removeInterval:function(){console.log("remove"),clearInterval(this.animationInterval)}},computed:{swiper:function(){return!!this.$refs.swiper&&this.$refs.swiper.$swiper}},data:function(){return{animationInterval:null,activeSlide:0,slides:[{title:"Fortune Pike",description:"Meet the NFT “Play to Earn” game based on thousands of years human habit - fishing! Fortune Pike is an online “fishing simulator”  with blockchain integration. Every part of the game world is inhabited by unique fish types in the form of NFT cards. Can you catch them all and become the world famous River Lord?",background:n(681)},{title:"Singleplayer",description:"Start your journey in a singleplayer mode. Travel the world, fish NTFs, gain experience and build your very own NTF collection in single player! NFT not getting hooked in any way? Craft NFTs with the built-in crafting system or upgrade your gear to boost your luck. Trade cards, earn currency and conquer the Fortune Pike world!",background:n(682)},{title:"Tournaments",description:"Are you ready to play for high stakes? The truly challenging multiplayer mode is waiting for you! Bet everything on winning and participate to become the best fisherman. Eliminate your rivals, become one of the TOP-5 leaders and move to the next stage. The higher the stakes, the more valuable prizes!",background:n(683)},{title:"River Lords",description:"Reached leadership heights and don't know what to do? Organize your own fishing tournaments with advanced built-in matchmaking system! Pay a fee, rent a venue for future competitions and set your own tournament rules as a River Lord! Invite real players and earn real money.",background:n(684)}],block:null}},mounted:function(){this.animationInterval=setInterval(this.activeteSwiper,5e3)}}),l=(n(685),n(16)),component=Object(l.a)(r,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"mobile-welcome",attrs:{id:"welcome"}},[t("div",{staticClass:"content"},[t("div",{staticClass:"main-image"},[t("img",{attrs:{src:n(588),alt:""}})]),e._v(" "),t("div",{staticClass:"swiper",on:{mouseenter:e.removeInterval}},[t("swiper",{ref:"swiper",attrs:{options:{slidesPerView:"auto",spaceBetween:0,centeredSlides:!0,loop:!1,pagination:{el:".swiper-pagination",type:"bullets"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}},e._l(e.slides,(function(n,o){return t("swiper-slide",{key:o,staticClass:"item"},[t("div",{staticClass:"container",style:"background-image: url(".concat(n.background,");")},[t("div",{staticClass:"content"},[t("h3",[e._v(e._s(n.title))]),e._v(" "),t("h6",[e._v(e._s(n.description))])])])])})),1)],1),e._v(" "),t("div",{staticClass:"swiper-navigation"},[t("button",{staticClass:"swiper-button swiper-button-prev"},[t("svg",{staticStyle:{transform:"scale(-1)",margin:"0"},attrs:{width:"31",height:"31",viewBox:"0 0 31 31",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("line",{attrs:{x1:"12.6897",y1:"28.6677",x2:"27.6677",y2:"13.6897",stroke:"#0B4770","stroke-width":"6.47232"}}),e._v(" "),t("line",{attrs:{x1:"12.8977",y1:"3.0801",x2:"27.8757",y2:"18.0581",stroke:"#0B4770","stroke-width":"6.47232"}})])]),e._v(" "),t("button",{staticClass:"swiper-button swiper-button-next"},[t("svg",{attrs:{width:"31",height:"31",viewBox:"0 0 31 31",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("line",{attrs:{x1:"12.6897",y1:"28.6677",x2:"27.6677",y2:"13.6897",stroke:"#0B4770","stroke-width":"6.47232"}}),e._v(" "),t("line",{attrs:{x1:"12.8977",y1:"3.0801",x2:"27.8757",y2:"18.0581",stroke:"#0B4770","stroke-width":"6.47232"}})])])]),e._v(" "),t("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})])])}),[],!1,null,null,null);t.default=component.exports}}]);