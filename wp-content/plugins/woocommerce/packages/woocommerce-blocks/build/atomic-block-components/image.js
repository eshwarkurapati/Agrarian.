(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[10],{393:function(e,t,c){"use strict";t.a={productLink:{type:"boolean",default:!0},showSaleBadge:{type:"boolean",default:!0},saleBadgeAlign:{type:"string",default:"right"},imageSizing:{type:"string",default:"full-size"},productId:{type:"number",default:0}}},394:function(e,t,c){"use strict";var n=c(8),r=c.n(n),a=c(11),o=c.n(a),l=c(0),i=(c(2),c(7)),u=c.n(i),s=c(5),d=c(45),p=c(73),m=c(6),b=c(267);c(554);function g(e,t){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),c.push.apply(c,n)}return c}function O(e){for(var t=1;t<arguments.length;t++){var c=null!=arguments[t]?arguments[t]:{};t%2?g(Object(c),!0).forEach((function(t){r()(e,t,c[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):g(Object(c)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(c,t))}))}return e}var f=function(){return Object(l.createElement)("img",{src:s.G,alt:"",width:500,height:500})},j=function(e){var t=e.image,c=e.onLoad,n=e.loaded,r=e.showFullSize,a=t||{},o=a.thumbnail,i=a.src,u=a.srcset,s=a.sizes,d={alt:a.alt,onLoad:c,hidden:!n,src:o};return r&&(d=O(O({},d),{},{src:i,srcSet:u,sizes:s})),Object(l.createElement)(l.Fragment,null,Object(l.createElement)("img",d),!n&&Object(l.createElement)(f,null))};t.a=Object(p.withProductDataContext)((function(e){var t=e.className,c=e.imageSizing,n=void 0===c?"full-size":c,a=e.productLink,i=void 0===a||a,s=e.showSaleBadge,p=e.saleBadgeAlign,g=void 0===p?"right":p,O=Object(d.useInnerBlockLayoutContext)().parentClassName,w=Object(d.useProductDataContext)().product,h=Object(l.useState)(!1),y=o()(h,2),E=y[0],v=y[1];if(!w.id)return Object(l.createElement)("div",{className:u()(t,"wc-block-components-product-image","wc-block-components-product-image--placeholder",r()({},"".concat(O,"__product-image"),O))},Object(l.createElement)(f,null));var k=Object(m.isEmpty)(w.images)?null:w.images[0];return Object(l.createElement)("div",{className:u()(t,"wc-block-components-product-image",r()({},"".concat(O,"__product-image"),O))},i?Object(l.createElement)("a",{href:w.permalink,rel:"nofollow"},!!s&&Object(l.createElement)(b.default,{align:g,product:w}),Object(l.createElement)(j,{image:k,onLoad:function(){return v(!0)},loaded:E,showFullSize:"cropped"!==n})):Object(l.createElement)(l.Fragment,null,!!s&&Object(l.createElement)(b.default,{align:g,product:w}),Object(l.createElement)(j,{image:k,onLoad:function(){return v(!0)},loaded:E,showFullSize:"cropped"!==n})))}))},554:function(e,t){},947:function(e,t,c){"use strict";c.r(t);var n=c(26),r=c(946),a=c(394),o=c(393);t.default=Object(n.compose)(Object(r.a)(o.a))(a.a)}}]);