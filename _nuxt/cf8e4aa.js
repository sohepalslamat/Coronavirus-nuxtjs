(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{329:function(t,e,n){var content=n(344);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("20238f90",content,!0,{sourceMap:!1})},343:function(t,e,n){"use strict";n(329)},344:function(t,e,n){var l=n(15)(!1);l.push([t.i,'#label{text-align:right}#card,#label,#title{font-family:"El Messiri"!important}#card,#title{word-spacing:5px}',""]),t.exports=l},408:function(t,e,n){"use strict";n.r(e);var l={filters:{resultToStr:function(t){return t<=4?"التزم بالبيت (عزل ذاتي) تجنباً لاصابتك بالعدوى  ":5===t?"استشر طبيب هاتفياً واشرح له عنما تعاني منه, واستمع لارشادات الطبيب.":t>=6?"راجع المشفى لطلب الاستشارة من أجل اجراء الفحص السريري مع الانتباه لعدم مخالطة من حولك":void 0}},data:function(){return{loading:!1,dialog:!1,result:0,newCheck:!1,data:[{label:"ارتفاع درجة الحرارة أكثر من 38",status:!1,points:2,color:"indigo"},{label:"سعال شديد وجاف",status:!1,points:2,color:"indigo"},{label:"احتقان شديد بالحلق",status:!1,points:1,color:"primary"},{label:"مرض مزمن: سكري أو ضغط أو أمراض قلبية أو كلوية ..ألخ",status:!1,points:1,color:"primary"},{label:"سفر خارج البلد أو احتكاك مع شخص قادم من خارج البلد",status:!1,points:5,color:"red"},{label:"مخالطة لحالة التهاب تنفسي حاد",status:!1,points:4,color:"error"},{label:"زيارة مكان صحي ثبت فيه وجود حالة مصابة بالكورونا",status:!1,points:3,color:"warning"},{label:"أن تكون أحد العاملين بالقطاع الصحي أو العزل الصحي",status:!1,points:1,color:"primary"}]}},computed:{colorResult:function(){return this.result<=4?"primary":5===this.result?"warning":"error"}},methods:{checked:function(){var t=this;for(var i in this.loading=!0,this.data)this.data[i].status&&(this.result+=this.data[i].points);setTimeout((function(){t.loading=!1,t.dialog=!0}),3e3)},newChecked:function(){for(var i in this.dialog=!1,this.newCheck=!1,this.data)this.data[i].status=!1;this.result=0}},head:function(){return{title:" تأكد من عدم اصابتك من فيروس كورونا | افحص نفسك",meta:[{name:"og:title",content:"تأكد من عدم اصابتك من فيروس كورونا - افحص نفسك"},{name:"og:description",content:"بروتوكل لتحديد حالات الاشتباه بفايروس كورونا من عدمه، إذ يعتمد على استخدام نظام النقاط"},{name:"og:image",content:"https://i.ibb.co/QKVHMv4/check.jpg"}]}}},r=(n(343),n(71)),o=n(103),c=n.n(o),d=n(305),v=n(143),h=n(149),f=n(316),m=n(410),_=n(405),x=n(303),k=n(318),w=n(406),C=n(411),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"11",sm:"10",md:"6",lg:"6",xl:"6"}},[n("v-card",{staticClass:"elevation-12"},[n("v-card",{staticClass:"pa-2",attrs:{color:"yellow darken-4",prominent:""}},[n("v-card-text",{staticClass:"headline brown--text text--darken-4 font-weight-bold text--primary",attrs:{id:"title"}},[t._v("\n          بروتوكل لتحديد حالات الاشتباه بفايروس كورونا من عدمه، إذ يعتمد على استخدام نظام النقاط."),n("div",{},[t._v("\n            (هذا النموذج مثال معتمد في بعض الدول العربية)\n          ")])])],1),t._v(" "),n("v-card-text",{staticClass:"grey lighten-5"},[n("v-form",t._l(t.data,(function(e,i){return n("v-switch",{key:i,staticClass:"ma-2",attrs:{color:e.color},scopedSlots:t._u([{key:"label",fn:function(){return[n("h3",{staticClass:"mx-2 headline",class:e.color+"--text",attrs:{id:"label"}},[t._v("\n                "+t._s(e.label)+"\n              ")])]},proxy:!0}],null,!0),model:{value:e.status,callback:function(n){t.$set(e,"status",n)},expression:"item.status"}})})),1)],1),t._v(" "),n("div",{staticClass:"pt-4 text-center"},[n("v-btn",{staticClass:"mb-5 px-5",attrs:{loading:t.loading,color:"primary"},on:{click:t.checked}},[n("span",[t._v(" فحص ")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-icon",{attrs:{large:"",right:""}},[t._v("\n            search\n          ")])],1),t._v(" "),t.newCheck?n("v-btn",{staticClass:"mx-10 mb-5 px-5",attrs:{color:"info"},on:{click:t.newChecked}},[t._v("\n          فحص جديد\n        ")]):t._e()],1)],1),t._v(" "),n("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"pink--text headline",attrs:{id:"card"}},[t._v("\n          نتيجة الفحص\n        ")]),t._v(" "),n("hr"),t._v(" "),n("v-card-text",{staticClass:"mt-6",class:t.colorResult+"--text",staticStyle:{"font-size":"20px"}},[t._v("\n          "+t._s(t._f("resultToStr")(t.result))+"\n        ")]),t._v(" "),n("v-card-actions",[n("v-btn",{attrs:{"x-large":"",color:"blue darken-1",text:""},on:{click:t.newChecked}},[n("span",[t._v("تم")])]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{"x-large":"",color:"green darken-1",text:""},on:{click:t.newChecked}},[n("span",[t._v("فحص جديد")])])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:v.a,VCardActions:h.a,VCardText:h.c,VCardTitle:h.d,VCol:f.a,VDialog:m.a,VForm:_.a,VIcon:x.a,VRow:k.a,VSpacer:w.a,VSwitch:C.a})}}]);