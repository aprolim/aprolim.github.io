(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{365:function(t,o,e){},430:function(t,o,e){"use strict";e(365)},462:function(t,o,e){"use strict";e.r(o);e(38),e(3),e(44);var content=e(93),r=e(472),n=e(440),c=e(372),l=e(316),d=e(310),f=e(450),m=e(470),h=e(309),_=e(473),v=e(443),y=e(370),S=e(455),C=e(469),k=e(474),w={layout:"test",name:"Product",components:{SfGallery:r.a,SfHeading:n.a,SfPrice:c.a,SfRating:l.a,SfIcon:d.a,SfTabs:f.a,SfProperty:m.a,SfButton:h.a,SfReview:_.a,SfAddToCart:v.a,SfColor:y.a,SfSelect:S.a,SfBreadcrumbs:C.a,SfNotification:k.a},data:function(){return{current:1,selectedColor:"beige",selectedSize:void 0,qty:1,product:content.a.product(this.$route.query.p),selected:!1,breadcrumbs:[{text:"Inicio",link:"/"},{text:"Pagina de facebook",link:"https://www.facebook.com/Aprolim-102511875638617"},{text:"Ubicacion",link:"https://www.google.com.bo/maps/place/17%C2%B023'34.8%22S+66%C2%B008'31.9%22W/@-17.393,-66.1427416,19z/"}],isOpenNotification:!1,openTab:1}},created:function(){},mounted:function(){document.getElementsByClassName("sf-add-to-cart__button")[0].innerText="Solicitar"},methods:{addToCart:function(){var t=this;console.log("clicked"),this.isOpenNotification=!0,setTimeout((function(){t.isOpenNotification=!1}),6e3),window.open("https://api.whatsapp.com/send?phone=59172751138&text=Solicito "+this.qty+" x "+this.product.title,"_blank")},changeTab:function(t){document.getElementById("tabs").scrollIntoView({behavior:"smooth",block:"end"}),this.openTab=t}},head:function(){return{title:"Aprolim productos al por mayor perlita, shampoo",description:this.product.description,link:[{hid:"canonical",rel:"canonical",href:this.$route.query.p?"https://aprolim.github.io/producto/?p="+this.$route.query.p:"https://aprolim.github.io/producto"}],meta:[{hid:"description",name:"description",content:this.product.description},{hid:"og:site_name",property:"og:site_name",content:"aprolim"},{hid:"og:title",property:"og:title",content:"id productos de limpieza, Papel higienico perlita, scott, premier, nacional. shampoo ballerina, sedal. Toalla perlita"},{hid:"og:url",property:"og:url",content:this.$route.query.p?"https://aprolim.github.io/producto/?p="+this.$route.query.p:"https://aprolim.github.io/producto"},{hid:"og:image",property:"og:image",content:"https://aprolim.github.io/producto/"+this.product.image},{hid:"og:description",property:"og:description",content:"332 productos de limpieza, Papel higienico perlita, scott, premier, nacional. shampoo ballerina, sedal. Toalla perlita"}]}}},x=(e(430),e(47)),component=Object(x.a)(w,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{attrs:{id:"product"}},[e("SfBreadcrumbs",{staticClass:"breadcrumbs desktop-only",attrs:{breadcrumbs:t.breadcrumbs}}),t._v(" "),e("div",{staticClass:"product"},[e("SfGallery",{staticClass:"product__gallery",attrs:{images:t.product.images}}),t._v(" "),e("div",{staticClass:"product__info"},[e("div",{staticClass:"product__header"},[e("SfHeading",{staticClass:"sf-heading--no-underline sf-heading--left",attrs:{title:t.product.title,level:1}}),t._v(" "),e("SfIcon",{staticClass:"product__drag-icon smartphone-only",attrs:{icon:"drag",size:"42px",color:"#E0E0E1"}})],1),t._v(" "),e("div",{staticClass:"product__price-and-rating"},[e("SfPrice",{attrs:{regular:t.product.price.regular}}),t._v(" "),e("div",[e("div",{staticClass:"product__rating"},[e("SfRating",{attrs:{score:t.product.rating.score,max:t.product.rating.max}}),t._v(" "),t.product.reviews?e("a",{staticClass:"product__count",attrs:{href:"#"}},[t._v("\n              ("+t._s(t.product.reviews.length)+")\n            ")]):t._e()],1)])],1),t._v(" "),e("div",[e("p",{staticClass:"product__description desktop-only"},[t._v("\n          "+t._s(t.product.description)+"\n        ")]),t._v(" "),e("SfAddToCart",{staticClass:"product__add-to-cart",on:{click:t.addToCart},model:{value:t.qty,callback:function(o){t.qty=o},expression:"qty"}})],1),t._v(" "),t._l(t.product.details,(function(o,i){return e("SfProperty",{key:i,staticClass:"product__property",attrs:{name:o.name,value:o.value},scopedSlots:t._u(["Category"===o.name?{key:"value",fn:function(){return[e("SfButton",{staticClass:"sf-button--text product__property__button"},[t._v("\n            "+t._s(o.value))])]},proxy:!0}:null],null,!0)})}))],2)],1),t._v(" "),e("transition",{attrs:{name:"slide"}},[e("SfNotification",{staticClass:"notification",attrs:{visible:t.isOpenNotification,message:t.qty+" x "+t.product.title+" ha sido solicitado"},on:{"click:close":function(o){t.isOpenNotification=!1}},scopedSlots:t._u([{key:"icon",fn:function(){return[e("span")]},proxy:!0}])})],1)],1)}),[],!1,null,"17ec1213",null);o.default=component.exports}}]);