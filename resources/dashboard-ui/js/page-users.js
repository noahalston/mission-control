(self.webpackChunkmission_control_dashboard=self.webpackChunkmission_control_dashboard||[]).push([[29],{14571:function(t,e,r){"use strict";r.d(e,{r:function(){return u}});var s=r(87757),n=r.n(s);function a(t,e,r,s,n,a,o){try{var i=t[a](o),l=i.value}catch(t){return void r(t)}i.done?e(l):Promise.resolve(l).then(s,n)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(s,n){var o=t.apply(e,r);function i(t){a(o,s,n,i,l,"next",t)}function l(t){a(o,s,n,i,l,"throw",t)}i(void 0)}))}}var i="/users";function l(t,e){return c.apply(this,arguments)}function c(){return(c=o(n().mark((function t(e,r){var s;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e,r);case 2:return s=t.sent,t.next=5,s.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var u={all:function(){return o(n().mark((function t(){var e;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l(i,{method:"GET",headers:{"Content-Type":"application/json;charset=utf-8"}});case 2:if(!(e=t.sent).error){t.next=6;break}throw console.error("USERS API GET /users",e.error),new Error(e.error.message);case 6:return t.abrupt("return",e);case 7:case"end":return t.stop()}}),t)})))()},find:function(t){return o(n().mark((function e(){var r;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l("".concat(i,"/").concat(t));case 2:if(!(r=e.sent).error){e.next=6;break}throw console.error("USERS API GET /users/"+t,r.error),new Error(r.error.message);case 6:return e.abrupt("return",r.user);case 7:case"end":return e.stop()}}),e)})))()},create:function(t){return o(n().mark((function e(){var r;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l("".concat(i),{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify({user:t})});case 2:if(!(r=e.sent).error){e.next=6;break}throw console.error("USERS API PATCH /users/:username",r.error),new Error(r.error.message);case 6:case"end":return e.stop()}}),e)})))()},delete:function(t){return o(n().mark((function e(){var r;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l("".concat(i,"/").concat(t),{method:"DELETE"});case 2:if(!(r=e.sent).error){e.next=6;break}throw console.error("USERS API DELETE /users/:username",r.error),new Error(r.error.message);case 6:case"end":return e.stop()}}),e)})))()},update:function(t,e){return o(n().mark((function r(){var s;return n().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,l("".concat(i,"/").concat(t),{method:"PATCH",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify({user:e})});case 2:if(!(s=r.sent).error){r.next=6;break}throw console.error("USERS API PATCH /users/:username",s.error),new Error(s.error.message);case 6:case"end":return r.stop()}}),r)})))()},updatePassword:function(t,e){return o(n().mark((function r(){var s;return n().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,l("".concat(i,"/").concat(t,"/change-password"),{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify({password:e})});case 2:if(!(s=r.sent).error){r.next=6;break}throw console.error("USERS API PATCH /users/:username/update-password",s.error),new Error(s.error.message);case 6:case"end":return r.stop()}}),r)})))()}}},42951:function(t,e,r){"use strict";r.d(e,{Z:function(){return l}});var s;function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var i={props:(s={value:{type:String,default:""},type:{type:String,default:"text"}},o(s,"value",{type:String}),o(s,"name",{type:String}),o(s,"loading",{type:Boolean,default:!1}),o(s,"disabled",{type:Boolean,default:!1}),o(s,"required",{type:Boolean,default:!1}),s),computed:{listeners:function(){return a(a({},this.$listeners),{},{input:this.onInput.bind(this)})}},methods:{onBlur:function(t){t.target.reportValidity()},onInput:function(t){this.$emit("input",t.target.value)}}},l=(0,r(51900).Z)(i,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("select",{staticClass:"forms-select",attrs:{name:t.name,id:t.name},domProps:{value:t.value},on:{input:t.onInput}},[t._t("default")],2)}),[],!1,null,null,null).exports},19484:function(t,e,r){"use strict";r.d(e,{Z:function(){return b}});var s=r(87757),n=r.n(s),a=r(14571),o=r(6847),i=r(5628),l=r(68921);function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function u(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var p={components:{TextInput:l.Z},props:{value:{type:String,default:""},loading:{type:Boolean,default:!1}},computed:{listeners:function(){return function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){u(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},this.$listeners)}},methods:{}},d=r(51900),m=(0,d.Z)(p,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex gap-3"},[r("TextInput",t._g(t._b({attrs:{type:"url",loading:t.loading}},"TextInput",Object.assign({},t.$props,t.$attrs),!1),t.listeners)),t._v(" "),r("div",{staticClass:"flex-shrink-0 w-10 h-10 bg-primary-700  rounded-full overflow-hidden"},[r("img",{attrs:{src:t.value}})])],1)}),[],!1,null,null,null).exports,f=r(42951);function v(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function w(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?v(Object(r),!0).forEach((function(e){h(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function h(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function g(t,e,r,s,n,a,o){try{var i=t[a](o),l=i.value}catch(t){return void r(t)}i.done?e(l):Promise.resolve(l).then(s,n)}var y={components:{Button:o.Z,Label:i.Z,TextInput:l.Z,AvatarUrlInput:m,SelectInput:f.Z},data:function(){return{user:{username:"",displayName:"",avatarUrl:"",role:"guest",password:"",repeatPassword:""}}},methods:{create:function(){var t,e=this;return(t=n().mark((function t(){return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,""===e.user.password||e.user.password===e.user.repeatPassword){t.next=3;break}return t.abrupt("return",e.$notify({type:"error",title:"Passwords don't match"}));case 3:return e.loading=!0,t.next=6,a.r.create(w(w({},e.user),{},{avatarUrl:""!==e.user.avatarUrl?e.user.avatarUrl:null,repeatPassword:void 0}));case 6:e.$notify({type:"success",title:"User ".concat(e.user.username," created")}),e.user={},t.next=14;break;case 10:t.prev=10,t.t0=t.catch(0),console.error("error during create user",t.t0.message),e.$notify({type:"error",title:"Could not create user",text:t.t0.message});case 14:e.loading=!1;case 15:case"end":return t.stop()}}),t,null,[[0,10]])})),function(){var e=this,r=arguments;return new Promise((function(s,n){var a=t.apply(e,r);function o(t){g(a,s,n,o,i,"next",t)}function i(t){g(a,s,n,o,i,"throw",t)}o(void 0)}))})()}}},b=(0,d.Z)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{staticClass:"max-w-4xl",on:{submit:function(e){return e.preventDefault(),t.create(e)}}},[r("h3",{staticClass:"text-lg leading-6 text-primary-100 font-semibold mb-1"},[t._v("\n\t\tCreate a new user\n\t")]),t._v(" "),r("p",{staticClass:"mb-10 text-sm text-primary-300 font-semibold"},[t._v("\n\t\tMission control users can manage and interact with the system.\n\t")]),t._v(" "),r("Label",{staticClass:"mb-4",attrs:{label:"Username",name:"username"}},[r("TextInput",{attrs:{type:"text",name:"username",placeholder:"Username",required:""},model:{value:t.user.username,callback:function(e){t.$set(t.user,"username",e)},expression:"user.username"}})],1),t._v(" "),r("Label",{staticClass:"mb-4",attrs:{label:"Display Name",name:"name"}},[r("TextInput",{attrs:{type:"text",name:"name",placeholder:"Display Name",required:""},model:{value:t.user.displayName,callback:function(e){t.$set(t.user,"displayName",e)},expression:"user.displayName"}})],1),t._v(" "),r("Label",{staticClass:"mb-4",attrs:{label:"Avatar URL",name:"avatarUrl"}},[r("AvatarUrlInput",{attrs:{type:"text",name:"avatarUrl",placeholder:"Avatar URL",required:""},model:{value:t.user.avatarUrl,callback:function(e){t.$set(t.user,"avatarUrl",e)},expression:"user.avatarUrl"}})],1),t._v(" "),r("Label",{staticClass:"mb-4",attrs:{label:"Role",name:"role"}},[r("SelectInput",{attrs:{name:"role",placeholder:"Role",required:""},model:{value:t.user.role,callback:function(e){t.$set(t.user,"role",e)},expression:"user.role"}},[r("option",{attrs:{value:"guest"}},[t._v("Guest")]),t._v(" "),r("option",{attrs:{value:"user"}},[t._v("User")]),t._v(" "),r("option",{attrs:{value:"admin"}},[t._v("Admin")])])],1),t._v(" "),r("Label",{staticClass:"mb-4",attrs:{label:"Password",name:"new_password"}},[r("TextInput",{attrs:{type:"password",name:"new_password",autocomplete:"new-password",placeholder:"Enter your new password",required:""},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}})],1),t._v(" "),r("Label",{staticClass:"mb-8",attrs:{label:"Repeat password",name:"new_password_repeat"}},[r("TextInput",{class:{"focus:border-green-500":t.user.password===t.user.repeatPassword&&""!==t.user.password},attrs:{type:"password",name:"new_password_repeat",autocomplete:"new-password",placeholder:"Repeat your password",required:""},model:{value:t.user.repeatPassword,callback:function(e){t.$set(t.user,"repeatPassword",e)},expression:"user.repeatPassword"}})],1),t._v(" "),r("div",{staticClass:"flex justify-end"},[r("Button",{staticClass:"forms-button",attrs:{type:"submit"}},[t._v("\n\t\t\tCreate user\n\t\t")])],1)],1)}),[],!1,null,null,null).exports},43862:function(t,e,r){"use strict";r.d(e,{Z:function(){return v}});var s=r(87757),n=r.n(s),a=r(14571),o=r(6847),i={props:{user:{type:Object,required:!0},loading:{type:Boolean,default:!1}},data:function(t){return{editedUser:t.user}},watch:{user:function(){this.editedUser=this.user}},methods:{save:function(){this.$emit("save",this.editedUser)}},components:{Button:o.Z}},l=r(51900),c=(0,l.Z)(i,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{staticClass:"shadow sm:rounded-2xl sm:overflow-hidden",on:{submit:function(e){return e.preventDefault(),t.save(e)}}},[r("div",{staticClass:"px-4 py-5 bg-primary-900 space-y-8 sm:p-6"},[r("div",{staticClass:"grid grid-cols-3 gap-6"},[r("div",{staticClass:"col-span-3 lg:csol-span-2"},[r("label",{staticClass:"forms-label",attrs:{for:"name"}},[t._v("\n\t\t\t\t\tDisplay Name\n\t\t\t\t")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.editedUser.displayName,expression:"editedUser.displayName"}],staticClass:"forms-input-text",attrs:{type:"text",name:"name",id:"name",placeholder:"Display Name",disabled:t.loading,required:""},domProps:{value:t.editedUser.displayName},on:{input:function(e){e.target.composing||t.$set(t.editedUser,"displayName",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"col-span-3 lg:csol-span-2"},[r("label",{staticClass:"forms-label",attrs:{for:"username"}},[t._v("\n\t\t\t\t\tUsername\n\t\t\t\t")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.editedUser.username,expression:"editedUser.username"}],staticClass:"forms-input-text",attrs:{type:"text",name:"username",id:"username",placeholder:"Username",disabled:t.loading,required:""},domProps:{value:t.editedUser.username},on:{input:function(e){e.target.composing||t.$set(t.editedUser,"username",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"col-span-3 lg:csol-span-2"},[r("label",{staticClass:"forms-label",attrs:{for:"avatarUrl"}},[t._v("\n\t\t\t\t\tAvatar URL\n\t\t\t\t")]),t._v(" "),r("div",{staticClass:"flex gap-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.editedUser.avatarUrl,expression:"editedUser.avatarUrl"}],staticClass:"forms-input-text",attrs:{type:"url",name:"avatarUrl",id:"avatarUrl",autocomplete:"photo",disabled:t.loading},domProps:{value:t.editedUser.avatarUrl},on:{input:function(e){e.target.composing||t.$set(t.editedUser,"avatarUrl",e.target.value)}}}),t._v(" "),r("div",{staticClass:"flex-shrink-0 w-10 h-10 bg-primary-800 rounded-full overflow-hidden"},[r("img",{attrs:{src:t.editedUser.avatarUrl}})])])])])]),t._v(" "),r("div",{staticClass:"px-4 py-3 bg-primary-700 text-right sm:px-6"},[r("Button",{staticClass:"bg-primary-800",attrs:{type:"submit",loading:t.loading}},[t._v("\n\t\t\tSave\n\t\t")])],1)])}),[],!1,null,null,null).exports,u={props:{loading:{type:Boolean,default:!1}},data:function(t){return{newPassword:"",repeatNewPassword:""}},methods:{save:function(){this.newPassword===this.repeatNewPassword?this.$emit("update-password",this.newPassword):this.$notify({title:"Passwords do not match",type:"error"})},reset:function(){this.newPassword="",this.repeatNewPassword=""}},components:{Button:o.Z}},p=(0,l.Z)(u,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{staticClass:"shadow sm:rounded-2xl sm:overflow-hidden",on:{submit:function(e){return e.preventDefault(),t.save(e)}}},[r("div",{staticClass:"px-4 py-5 bg-primary-900 space-y-8 sm:p-6"},[r("div",{staticClass:"grid grid-cols-3 gap-6"},[r("div",{staticClass:"col-span-3 lg:col-span-2"},[r("label",{staticClass:"forms-label",attrs:{for:"password"}},[t._v("\n\t\t\t\t\tNew password\n\t\t\t\t")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.newPassword,expression:"newPassword"}],staticClass:"forms-input-text",attrs:{type:"password",name:"new_password",id:"new-password",autocomplete:"new-password",placeholder:"Enter your new password",disabled:t.loading,required:""},domProps:{value:t.newPassword},on:{input:function(e){e.target.composing||(t.newPassword=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"col-span-3 lg:col-span-2"},[r("label",{staticClass:"forms-label",attrs:{for:"password"}},[t._v("\n\t\t\t\t\tRepeat new password\n\t\t\t\t")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.repeatNewPassword,expression:"repeatNewPassword"}],staticClass:"forms-input-text",class:{"focus:border-green-500":t.newPassword===t.repeatNewPassword&&""!==t.newPassword},attrs:{type:"password",name:"new_password_repeat",id:"new-password-repeat",autocomplete:"new-password",placeholder:"Repeat your new password",disabled:t.loading,required:""},domProps:{value:t.repeatNewPassword},on:{input:function(e){e.target.composing||(t.repeatNewPassword=e.target.value)}}})])])]),t._v(" "),r("div",{staticClass:"px-4 py-3 bg-primary-700 text-right sm:px-6"},[r("Button",{staticClass:"bg-primary-800",attrs:{type:"submit",loading:t.loading}},[t._v("\n\t\t\tChange Password\n\t\t")])],1)])}),[],!1,null,null,null).exports;function d(t,e,r,s,n,a,o){try{var i=t[a](o),l=i.value}catch(t){return void r(t)}i.done?e(l):Promise.resolve(l).then(s,n)}function m(t){return function(){var e=this,r=arguments;return new Promise((function(s,n){var a=t.apply(e,r);function o(t){d(a,s,n,o,i,"next",t)}function i(t){d(a,s,n,o,i,"throw",t)}o(void 0)}))}}var f={props:{user:{type:Object,required:!0}},data:function(){return{profileFormLoading:!1,passwordFormLoading:!1}},computed:{username:function(){return this.user.username===this.$store.state.user.username?"me":this.user.username}},methods:{save:function(t){var e=this;return m(n().mark((function r(){return n().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,e.profileFormLoading=!0,r.next=4,a.r.update(e.username,t);case 4:e.$notify({title:"Profile saved",type:"success"}),r.next=11;break;case 7:r.prev=7,r.t0=r.catch(0),console.error(r.t0),e.$notify({title:"Could not save profile",text:r.t0.message,type:"error"});case 11:e.profileFormLoading=!1;case 12:case"end":return r.stop()}}),r,null,[[0,7]])})))()},updatePassword:function(t){var e=this;return m(n().mark((function r(){return n().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,e.passwordFormLoading=!0,r.next=4,a.r.updatePassword(e.username,t);case 4:e.$refs.passwords.reset(),e.$notify({title:"Password changed",type:"success"}),r.next=12;break;case 8:r.prev=8,r.t0=r.catch(0),console.error(r.t0),e.$notify({title:"Could not change password",text:r.t0.message,type:"error"});case 12:e.passwordFormLoading=!1;case 13:case"end":return r.stop()}}),r,null,[[0,8]])})))()}},components:{UserProfileForm:c,ChangePasswordForm:p}},v=(0,l.Z)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"max-w-4xl min-w-md"},[r("div",{staticClass:" mb-10"},[t._m(0),t._v(" "),r("div",{staticClass:"mt-5 md:mt-0 md:col-span-2"},[r("UserProfileForm",{attrs:{loading:t.profileFormLoading,user:t.user},on:{save:t.save}})],1)]),t._v(" "),r("div",{},[t._m(1),t._v(" "),r("div",{staticClass:"mt-5 md:mt-0 md:col-span-2"},[r("ChangePasswordForm",{ref:"passwords",attrs:{loading:t.passwordFormLoading},on:{"update-password":t.updatePassword}})],1)])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mb-6"},[r("div",{staticClass:"px-4 sm:px-0"},[r("h3",{staticClass:"text-lg leading-6 text-primary-100 font-semibold"},[t._v("\n\t\t\t\t\tProfile\n\t\t\t\t")]),t._v(" "),r("p",{staticClass:"mt-1 text-sm text-primary-300 font-semibold"},[t._v("\n\t\t\t\t\tYour Mission Control account\n\t\t\t\t")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mb-6"},[r("div",{staticClass:"px-4 sm:px-0"},[r("h3",{staticClass:"text-lg leading-6 text-primary-100 font-semibold"},[t._v("\n\t\t\t\t\tSecurity\n\t\t\t\t")]),t._v(" "),r("p",{staticClass:"mt-1 text-sm text-primary-300 font-semibold"},[t._v("\n\t\t\t\t\tChange your password\n\t\t\t\t")])])])}],!1,null,null,null).exports},17656:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return d}});var s,n=r(87757),a=r.n(n),o=r(5628),i=r(42951),l=r(28105);function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function u(t,e,r,s,n,a,o){try{var i=t[a](o),l=i.value}catch(t){return void r(t)}i.done?e(l):Promise.resolve(l).then(s,n)}var p=(c(s={methods:{},computed:{theme:function(){return this.$store.state.theme},themeList:function(){return Object.keys(l)}}},"methods",{selectTheme:function(t){var e,r=this;return(e=a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.$sync.action("theme","choose",{theme:t});case 3:e.next=9;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0),r.$notify({type:"error",title:"Changing Theme",message:e.t0.message});case 9:case"end":return e.stop()}}),e,null,[[0,5]])})),function(){var t=this,r=arguments;return new Promise((function(s,n){var a=e.apply(t,r);function o(t){u(a,s,n,o,i,"next",t)}function i(t){u(a,s,n,o,i,"throw",t)}o(void 0)}))})()}}),c(s,"components",{Label:o.Z,SelectInput:i.Z}),s),d=(0,r(51900).Z)(p,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"dashboard-page p-5 md:p-12"},[r("div",{staticClass:"max-w-4xl"},[r("div",{staticClass:"lg:grid lg:grid-cols-3 lg:gap-6"},[t._m(0),t._v(" "),r("div",{staticClass:"mt-5 lg:mt-0 lg:col-span-2"},[r("Label",{staticClass:"mb-4",attrs:{label:"Theme",name:"theme"}},[r("SelectInput",{attrs:{name:"theme",value:t.theme,required:""},on:{input:t.selectTheme}},t._l(t.themeList,(function(e){return r("option",{key:e,domProps:{value:e}},[t._v("\n\t\t\t\t\t\t\t"+t._s(e)+"\n\t\t\t\t\t\t")])})),0)],1)],1)])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"lg:col-span-1"},[r("div",{staticClass:"px-4 sm:px-0"},[r("h3",{staticClass:"text-lg leading-6 text-primary-100 font-semibold"},[t._v("\n\t\t\t\t\t\tTheme Settings\n\t\t\t\t\t")]),t._v(" "),r("p",{staticClass:"mt-1 text-sm text-primary-400"},[t._v("\n\t\t\t\t\t\tCustomize Mission Control and change the theme\n\t\t\t\t\t")])])])}],!1,null,null,null).exports},15079:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return b}});var s=r(87757),n=r.n(s),a=r(14571),o=r(29474),i={props:{users:{type:Array,default:[]}},methods:{roleBgColorClass:function(t){switch(t){case"user":return"bg-primary-600 text-primary-200";case"admin":return"bg-pink-600 text-pink-200";default:case"guest":return"bg-gray-400 text-gray-600"}},editUser:function(t){this.$emit("edit",t)},deleteUser:function(t){this.$emit("delete",t.username)}}},l=r(51900),c=(0,l.Z)(i,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-col"},[r("div",{staticClass:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"},[r("div",{staticClass:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"},[r("div",{staticClass:"shadow overflow-hidden rounded-md sm:rounded-lg"},[r("table",{staticClass:"min-w-full divide-y divide-primary-900"},[t._m(0),t._v(" "),r("tbody",{staticClass:"bg-primary-800 divide-y divide-primary-700"},t._l(t.users,(function(e){return r("tr",{key:e.id},[r("td",{staticClass:"px-6 py-4 whitespace-nowrap"},[r("div",{staticClass:"flex items-center"},[r("div",{staticClass:"flex-shrink-0 h-10 w-10"},[r("img",{staticClass:"h-10 w-10 rounded-full",attrs:{src:e.avatarUrl,alt:"user avatar"}})]),t._v(" "),r("div",{staticClass:"ml-4"},[r("div",{staticClass:"text-sm font-semibold text-primary-200"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t"+t._s(e.displayName)+"\n\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),r("div",{staticClass:"text-sm font-mono text-primary-300"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t@"+t._s(e.username)+"\n\t\t\t\t\t\t\t\t\t\t\t"),r("span",{staticClass:"md:hidden"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t–\n\t\t\t\t\t\t\t\t\t\t\t\t"),r("span",{staticClass:"px-2 text-xs inline-flex leading-5 font-semibold rounded-full",class:t.roleBgColorClass(e.role)},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(e.role)+"\n\t\t\t\t\t\t\t\t\t\t\t\t")])])])])])]),t._v(" "),r("td",{staticClass:"px-6 py-4 whitespace-nowrap align-middle hidden md:table-cell"},[r("span",{staticClass:"px-2 text-xs inline-flex leading-5 font-semibold rounded-full ",class:t.roleBgColorClass(e.role)},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(e.role)+"\n\t\t\t\t\t\t\t\t")])]),t._v(" "),r("td",{staticClass:"px-6 py-4 whitespace-nowrap text-right text-sm font-semibold align-middle"},[r("nav",{staticClass:"flex items-center justify-end"},[r("button",{staticClass:"block text-primary-400 hover:text-primary-300 mr-5",attrs:{to:"/settings/users/"+e.username},on:{click:function(r){return r.preventDefault(),t.editUser(e)}}},[t._v("\n\t\t\t\t\t\t\t\t\t\tEdit\n\t\t\t\t\t\t\t\t\t")]),t._v(" "),r("button",{staticClass:"block font-semibold text-pink-600 hover:text-pink-500",on:{click:function(r){return r.preventDefault(),t.deleteUser(e)}}},[t._v("\n\t\t\t\t\t\t\t\t\t\tDelete\n\t\t\t\t\t\t\t\t\t")])])])])})),0)])])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",{staticClass:"bg-primary-600 text-primary-200"},[r("tr",[r("th",{staticClass:"px-6 py-3 text-left text-xs font-medium uppercase tracking-wider",attrs:{scope:"col"}},[t._v("\n\t\t\t\t\t\t\t\tName\n\t\t\t\t\t\t\t")]),t._v(" "),r("th",{staticClass:"px-6 py-3 text-left text-xs font-medium uppercase tracking-wider hidden md:table-cell",attrs:{scope:"col"}},[t._v("\n\t\t\t\t\t\t\t\tRole\n\t\t\t\t\t\t\t")]),t._v(" "),r("th",{staticClass:"relative px-6 py-3",attrs:{scope:"col"}},[r("span",{staticClass:"sr-only"},[t._v("Edit")])])])])}],!1,null,null,null).exports,u=r(43862),p=r(19484),d=r(88927),m=r(88732),f=r(591);function v(t,e,r,s,n,a,o){try{var i=t[a](o),l=i.value}catch(t){return void r(t)}i.done?e(l):Promise.resolve(l).then(s,n)}function w(t){return function(){var e=this,r=arguments;return new Promise((function(s,n){var a=t.apply(e,r);function o(t){v(a,s,n,o,i,"next",t)}function i(t){v(a,s,n,o,i,"throw",t)}o(void 0)}))}}function h(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function g(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var y={data:function(t){return{users:[],editingUser:null,creatingUser:!1,loading:!0}},mounted:function(){this.fetchUsers()},methods:{onEditUser:function(t){this.editingUser=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?h(Object(r),!0).forEach((function(e){g(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},t)},createUser:function(){return w(n().mark((function t(){return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},fetchUsers:function(){var t=this;return w(n().mark((function e(){return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.loading=!0,e.next=4,a.r.all();case 4:t.users=e.sent,e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("error during fetch users.all",e.t0),t.$notify({type:"error",title:"Could not load users",message:e.t0.message});case 11:t.loading=!1;case 12:case"end":return e.stop()}}),e,null,[[0,7]])})))()},deleteUser:function(t){var e=this;return w(n().mark((function r(){return n().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,e.loading=!0,r.next=4,a.r.delete(t);case 4:e.loading=!1,e.fetchUsers(),e.$notify({type:"success",title:"User ".concat(t," deleted")}),r.next=14;break;case 9:r.prev=9,r.t0=r.catch(0),console.error(r.t0),e.loading=!1,e.$notify({type:"error",title:"Could not delete user",text:r.t0.message});case 14:case"end":return r.stop()}}),r,null,[[0,9]])})))()}},computed:{serverLayout:function(){return this.$mcState("layout",[])},layout:function(){return this.editLayout||this.serverLayout},user:function(){return this.$store.state.user}},watch:{user:function(){this.editedUser=this.user}},components:{Spinner:o.Z,UserList:c,UserSettings:u.Z,topBarActions:d.Z,topBarButton:m.Z,SideContext:f.Z,CreateUserForm:p.Z}},b=(0,l.Z)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"dashboard-page p-5 md:p-12"},[r("div",{staticClass:"max-w-4xl"},[r("div",{staticClass:"lg:grid lg:grid-cols-3 lg:gap-6"},[t._m(0),t._v(" "),r("div",{staticClass:"mt-5 lg:mt-0 lg:col-span-2"},[t.loading?r("section",{staticClass:"w-full flex justify-center items-center"},[r("Spinner",{staticClass:"text-primary-600 fill-current w-16 animate-spin mb-10"})],1):r("section",[r("UserList",{attrs:{users:t.users},on:{edit:t.onEditUser,delete:t.deleteUser}})],1)])])]),t._v(" "),t.editingUser?r("SideContext",{on:{close:function(e){t.editingUser=null}},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n\t\t\tEdit User\n\t\t\t"),r("span",{staticClass:"text-primary-300 ml-1"},[t._v("\n\t\t\t\t"+t._s(t.editingUser.displayName)+"\n\t\t\t")])]},proxy:!0}],null,!1,3341523405)},[t._v(" "),r("UserSettings",{staticClass:"p-5",attrs:{user:t.editingUser}})],1):t._e(),t._v(" "),t.creatingUser?r("SideContext",{on:{close:function(e){t.creatingUser=!1}},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n\t\t\tCreate User\n\t\t\t"),r("span",{staticClass:"text-primary-300 ml-1"},[t._v("\n\t\t\t\t"+t._s(t.creatingUser.displayName||"No name")+"\n\t\t\t")])]},proxy:!0}],null,!1,735829358)},[t._v(" "),r("CreateUserForm",{staticClass:"p-5"})],1):t._e(),t._v(" "),r("top-bar-actions",[r("top-bar-button",{on:{click:function(e){t.creatingUser=!0}}},[t._v("Create new User")])],1)],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"lg:col-span-1"},[r("div",{staticClass:"px-4 sm:px-0"},[r("h3",{staticClass:"text-lg leading-6 text-primary-100 font-semibold"},[t._v("\n\t\t\t\t\t\tUser Management\n\t\t\t\t\t")]),t._v(" "),r("p",{staticClass:"mt-1 text-sm text-primary-400"},[t._v("\n\t\t\t\t\t\tCreate, update and delete users from Mission\n\t\t\t\t\t\tControl.\n\t\t\t\t\t")])])])}],!1,null,null,null).exports}}]);