(self.webpackChunkmission_control_dashboard=self.webpackChunkmission_control_dashboard||[]).push([[955],{9124:function(t,i,e){"use strict";e.r(i),e.d(i,{default:function(){return r}});var n=e(686),s=e(1900),a={name:"notification",props:["notification"],components:{timesIcon:(0,s.Z)({},(function(){var t=this.$createElement,i=this._self._c||t;return i("svg",{staticClass:"fill-current",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 352 512"}},[i("path",{attrs:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"}})])}),[],!1,null,null,null).exports},methods:{deleteNotification:function(){(0,n.I)("NOTIFICATIONS:DELETE",{id:this.notification.id})},markAsReadDeferred:function(t){var i=this;t&&setTimeout((function(){socket.invokeAction("NOTIFICATIONS:MARK-AS-READ",{id:i.notification.id})}),1500)}}},o={name:"notifications-page",components:{notification:(0,s.Z)(a,(function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("article",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:t.markAsReadDeferred,expression:"markAsReadDeferred"}],class:{"flex justify-between p-3 rounded-2xl border-4 bg-main-dark mb-3":!0,"border-transparent":!t.notification.unread,"border-main":t.notification.unread}},[e("div",[e("strong",{staticClass:"block mb-2"},[t._v(t._s(t.notification.title))]),t._v(" "),e("p",{staticClass:"text-sm"},[t._v(t._s(t.notification.message))])]),t._v(" "),e("div",{staticClass:"self-center"},[e("button",{staticClass:"flex self-center hover:bg-main-darker text-main-darker hover:text-main px-8 py-2 rounded-2xl",on:{click:function(i){return i.preventDefault(),t.deleteNotification(i)}}},[e("times-icon",{staticClass:"fill-current w-4"})],1)])])}),[],!1,null,null,null).exports},computed:{notifications:function(){return this.$mcState("notifications",[])}}},r=(0,s.Z)(o,(function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("main",{staticClass:"dashboard-page p-5 md:p-12"},[t._m(0),t._v(" "),t._l(t.notifications,(function(t){return e("notification",{key:t.id,attrs:{notification:t}})})),t._v(" "),0===t.notifications.length?e("section",{staticClass:"mt-5 text-center text-2xl text-main-darkest"},[t._v("\n\t\tNo Notifications\n\t")]):t._e()],2)}),[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("header",{staticClass:"flex justify-between"},[e("h3",{staticClass:"text-main-lighter mb-5"},[t._v("\n\t\t\tNotifications\n\t\t")]),t._v(" "),e("div",[e("button",[t._v("Hello")])])])}],!1,null,null,null).exports}}]);