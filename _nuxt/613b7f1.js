(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{362:function(t,e,o){},427:function(t,e,o){"use strict";o(362)},458:function(t,e,o){"use strict";o.r(e);o(38),o(12),o(20);var r=o(472),n=o(440),c=o(372),l=o(316),d=o(310),_=o(450),f=o(470),m=o(309),v=o(473),h=o(443),y=o(370),k=o(455),S=o(469),C=o(474),w={name:"Product",components:{SfGallery:r.a,SfHeading:n.a,SfPrice:c.a,SfRating:l.a,SfIcon:d.a,SfTabs:_.a,SfProperty:f.a,SfButton:m.a,SfReview:v.a,SfAddToCart:h.a,SfColor:y.a,SfSelect:k.a,SfBreadcrumbs:S.a,SfNotification:C.a},data:function(){return{current:1,selectedColor:"beige",selectedSize:void 0,qty:1,product:{name:"Cashmere Sweater",description:"Find stunning women cocktail and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",images:[{mobile:{url:"assets/storybook/Product/productA.png"},desktop:{url:"assets/storybook/Product/productA.png"},big:{url:"assets/storybook/Product/productA.png"},alt:"Product A"},{mobile:{url:"assets/storybook/Product/productB.jpg"},desktop:{url:"assets/storybook/Product/productB.jpg"},big:{url:"assets/storybook/Product/productB.jpg"},alt:"Product B"},{mobile:{url:"assets/storybook/Product/productA.png"},desktop:{url:"assets/storybook/Product/productA.png"},big:{url:"assets/storybook/Product/productA.png"},alt:"Product A"},{mobile:{url:"assets/storybook/Product/productB.jpg"},desktop:{url:"assets/storybook/Product/productB.jpg"},big:{url:"assets/storybook/Product/productB.jpg"},alt:"Product B"}],price:"$50.00",colors:[{color:"#EDCBB9",name:"beige",selected:!0},{color:"#ABD9D8",name:"mint1",selected:!1},{color:"#DB5593",name:"pink1",selected:!1},{color:"#ABD9D8",name:"mint2",selected:!1},{color:"#DB5593",name:"pink2",selected:!1}],rating:{rate:4,max:5},details:[{name:"Product Code",value:435435},{name:"Material",value:"Cotton"},{name:"Category",value:"Pants"},{name:"Country",value:"Poland"}],sizes:["32","34","36","38","40","42"],careInstructions:"Do not wash!",brand:"Brand name is the perfect pairing of quality and design. This label creates major everyday vibes with its collection of modern brooches, silver and gold jewellery, or clips it back with hair accessories in geo styles.",reviews:[{author:"Jane D.Smith",date:"April 2019",message:"I was looking for a bright light for the kitchen but wanted some item more modern than a strip light. this one is perfect, very bright and looks great. I can comment on interlation as I had an electrition instal it. Would recommend.",rating:{max:5,rate:4}},{author:"Jane D.Smith",date:"April 2019",message:"I was looking for a bright light for the kitchen but wanted some item more modern than a strip light. this one is perfect, very bright and looks great. I can comment on interlation as I had an electrition instal it. Would recommend.",rating:{max:5,rate:4}}]},tabs:[{title:"Description",content:"The Karissa V-Neck Tee features a semi-fitted shape that's flattering for every figure. You can hit the gym with confidence while it hugs curves and hides common 'problem' areas. Find stunning women's cocktail dresses and party dresses."},{title:"Read reviews",content:""},{title:"Additional Information",content:""}],selected:!1,breadcrumbs:[{text:"Home",route:{link:"#"}},{text:"Category",route:{link:"#"}},{text:"Pants",route:{link:"#"}}],isOpenNotification:!1,openTab:1}},methods:{addToCart:function(){var t=this;this.isOpenNotification=!0,setTimeout((function(){t.isOpenNotification=!1}),3e3)},selectColor:function(t){var e=this;this.product.colors.map((function(o,i){t===i?(o.selected=!0,e.selectedColor=o.name):o.selected=!1}))},changeTab:function(t){document.getElementById("tabs").scrollIntoView({behavior:"smooth",block:"end"}),this.openTab=t}}},B=(o(427),o(47)),component=Object(B.a)(w,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"product"}},[o("SfBreadcrumbs",{staticClass:"breadcrumbs desktop-only",attrs:{breadcrumbs:t.breadcrumbs}}),t._v(" "),o("div",{staticClass:"product"},[o("SfGallery",{staticClass:"product__gallery",attrs:{images:t.product.images}}),t._v(" "),o("div",{staticClass:"product__info"},[o("div",{staticClass:"product__header"},[o("SfHeading",{staticClass:"sf-heading--no-underline sf-heading--left",attrs:{title:t.product.name,level:1}}),t._v(" "),o("SfIcon",{staticClass:"product__drag-icon smartphone-only",attrs:{icon:"drag",size:"42px",color:"#E0E0E1"}})],1),t._v(" "),o("div",{staticClass:"product__price-and-rating"},[o("SfPrice",{attrs:{regular:t.product.price}}),t._v(" "),o("div",[o("div",{staticClass:"product__rating"},[o("SfRating",{attrs:{score:t.product.rating.rate,max:t.product.rating.max}}),t._v(" "),t.product.reviews?o("a",{staticClass:"product__count",attrs:{href:"#"}},[t._v("\n              ("+t._s(t.product.reviews.length)+")\n            ")]):t._e()],1),t._v(" "),o("SfButton",{staticClass:"sf-button--text",attrs:{"data-testid":"read-all-reviews"},on:{click:function(e){return t.changeTab(2)}}},[t._v("\n            Read all reviews\n          ")])],1)],1),t._v(" "),o("div",[o("p",{staticClass:"product__description desktop-only"},[t._v("\n          "+t._s(t.product.description)+"\n        ")]),t._v(" "),o("SfButton",{staticClass:"sf-button--text desktop-only product__guide"},[t._v("\n          Size guide\n        ")]),t._v(" "),o("SfSelect",{staticClass:"sf-select--underlined product__select-size",attrs:{label:"Size",reqired:!0},model:{value:t.selectedSize,callback:function(e){t.selectedSize=e},expression:"selectedSize"}},t._l(t.product.sizes,(function(e,r){return o("SfSelectOption",{key:r,attrs:{value:e}},[t._v("\n            "+t._s(e)+"\n          ")])})),1),t._v(" "),o("div",{staticClass:"product__colors desktop-only"},[o("p",{staticClass:"product__color-label"},[t._v("Color:")]),t._v(" "),t._l(t.product.colors,(function(e,i){return o("SfColor",{key:i,staticClass:"product__color",attrs:{"aria-label":e.name,color:e.color,selected:e.selected},on:{click:function(e){return t.selectColor(i)}}})}))],2),t._v(" "),o("SfAddToCart",{staticClass:"product__add-to-cart",on:{click:t.addToCart},model:{value:t.qty,callback:function(e){t.qty=e},expression:"qty"}}),t._v(" "),o("SfButton",{staticClass:"sf-button--text desktop-only product__save"},[t._v("\n          Save for later\n        ")]),t._v(" "),o("SfButton",{staticClass:"sf-button--text desktop-only product__compare"},[t._v("\n          Add to compare\n        ")])],1),t._v(" "),o("SfTabs",{staticClass:"product__tabs",attrs:{id:"tabs","open-tab":t.openTab},on:{"click:tab":t.changeTab}},t._l(t.tabs,(function(e){return o("SfTab",{key:e.title,attrs:{title:e.title}},[t._v("\n          "+t._s(e.content)+"\n          "),"Description"===e.title?o("div",t._l(t.product.details,(function(e,i){return o("SfProperty",{key:i,staticClass:"product__property",attrs:{name:e.name,value:e.value},scopedSlots:t._u(["Category"===e.name?{key:"value",fn:function(){return[o("SfButton",{staticClass:"sf-button--text product__property__button"},[t._v("\n                  "+t._s(e.value))])]},proxy:!0}:null],null,!0)})})),1):"Read reviews"===e.title?o("div",t._l(t.product.reviews,(function(t,i){return o("SfReview",{key:i,staticClass:"product__review",attrs:{author:t.author,date:t.date,message:t.message,"max-rating":t.rating.max,rating:t.rating.rate,"char-limit":231,"read-more-text":"Read more","hide-full-text":"Read less"}})})),1):"Additional Information"===e.title?o("div",{staticClass:"product__additional-info"},[o("p",{staticClass:"product__additional-info__title"},[t._v("Brand")]),t._v(" "),o("p",[t._v(t._s(t.product.brand))]),t._v(" "),o("p",{staticClass:"product__additional-info__title"},[t._v("Take care of me")]),t._v(" "),o("p",{staticClass:"product__additional-info__paragraph"},[t._v("\n              Just here for the care instructions?\n            ")]),t._v(" "),o("p",{staticClass:"product__additional-info__paragraph"},[t._v("\n              Yeah, we thought so\n            ")]),t._v(" "),o("p",[t._v(t._s(t.product.careInstructions))])]):t._e()])})),1)],1)],1),t._v(" "),o("transition",{attrs:{name:"slide"}},[o("SfNotification",{staticClass:"notification smartphone-only",attrs:{visible:t.isOpenNotification,message:t.qty+" x "+t.product.name+" (size: "+t.selectedSize+", color: "+t.selectedColor+") has been added to cart"},on:{"click:close":function(e){t.isOpenNotification=!1}},scopedSlots:t._u([{key:"icon",fn:function(){return[o("span")]},proxy:!0}])})],1)],1)}),[],!1,null,"56ac1c24",null);e.default=component.exports}}]);