(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{133:function(t){t.exports=JSON.parse('{"Title":"Issam Test APP","Menu":[{"title":"Home","icon":"home","to":"/","hidden":true},{"title":"Story","icon":"auto_stories","to":"/story","color":"#385F73","description":"The best Story of the word.","hidden":false}],"Tests":[{"title":"Test #1","icon":"receipt_long","fileName":"test1","color":"#952175","description":"Short Justification!!","hidden":false},{"title":"Test #2","icon":"description","fileName":"test2","color":"#1F7087","description":"New Short Justification!!","hidden":false}]}')},218:function(t,e,n){var content=n(275);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("7388ab72",content,!0,{sourceMap:!1})},235:function(t,e,n){"use strict";var o=n(82),r=(n(7),n(133)),c={data:function(){return{clipped:!1,drawer:!1,fixed:!1,miniVariant:!1,right:!1,rightDrawer:!1,title:r.Title,menuItems:[]}},beforeMount:function(){this.menuItems=this.createMenu(Object(o.a)(r.Menu),Object(o.a)(r.Tests))},methods:{createMenu:function(t,e){var menu=t;return e.forEach((function(i){menu.push({icon:i.icon,title:i.title,to:"/tests/".concat(i.fileName)})})),menu}}},l=n(84),d=n(109),f=n.n(d),v=n(354),m=n(360),h=n(355),_=n(236),V=n(361),w=n(356),x=n(165),N=n(166),T=n(105),I=n(167),k=n(81),y=n(357),F=n(359),M=n(358),A=n(232),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[n("v-navigation-drawer",{attrs:{"mini-variant":t.miniVariant,clipped:t.clipped,fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",t._l(t.menuItems,(function(e,i){return n("v-list-item",{key:i,attrs:{to:e.to,router:"",exact:""}},[n("v-list-item-action",[n("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)})),1)],1),t._v(" "),n("v-app-bar",{attrs:{"clipped-left":t.clipped,fixed:"",app:""}},[n("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.miniVariant=!t.miniVariant}}},[n("v-icon",[t._v("mdi-"+t._s("chevron-"+(t.miniVariant?"right":"left")))])],1),t._v(" "),n("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),t._v(" "),n("v-spacer")],1),t._v(" "),n("v-main",[n("v-container",[n("Nuxt")],1)],1),t._v(" "),n("v-footer",{attrs:{absolute:!t.fixed,app:""}},[n("span",[t._v("© "+t._s((new Date).getFullYear()))])])],1)}),[],!1,null,null,null);e.a=component.exports;f()(component,{VApp:v.a,VAppBar:m.a,VAppBarNavIcon:h.a,VBtn:_.a,VContainer:V.a,VFooter:w.a,VIcon:x.a,VList:N.a,VListItem:T.a,VListItemAction:I.a,VListItemContent:k.a,VListItemTitle:k.b,VMain:y.a,VNavigationDrawer:F.a,VSpacer:M.a,VToolbarTitle:A.a})},243:function(t,e,n){n(244),t.exports=n(245)},274:function(t,e,n){"use strict";n(218)},275:function(t,e,n){var o=n(17)(!1);o.push([t.i,"h1[data-v-bfedb7fe]{font-size:20px}",""]),t.exports=o},71:function(t,e,n){"use strict";var o={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},r=(n(274),n(84)),c=n(109),l=n.n(c),d=n(354),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"bfedb7fe",null);e.a=component.exports;l()(component,{VApp:d.a})}},[[243,10,1,11]]]);