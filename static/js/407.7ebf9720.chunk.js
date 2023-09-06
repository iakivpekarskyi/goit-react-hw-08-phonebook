"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[407],{6407:function(e,n,t){t.r(n),t.d(n,{default:function(){return N}});var r=t(2791),i=t(4165),o=t(5861),a=t(5705),l=t(6727),c=t(9434),s=function(e){return e.filter.value},u=function(e){return e.contacts.items},d=t(6895),m=t(208),f=function(){var e=(0,c.I0)(),n=(0,c.v9)(u),t=(0,c.v9)(s),i=(0,r.useCallback)((function(){e((0,m.yF)())}),[e]),o=n.filter((function(e){return e&&e.name.toLowerCase().includes(t.toLowerCase())}));return{contacts:n,filter:t,filteredContacts:o,showFilter:function(n){e((0,d.Tv)(n))},clearContactFilter:function(){e((0,d.Dg)())},addNewContact:function(n){var t=n.name,r=n.number;e((0,m.uK)({name:t,number:r}))},removeContact:function(n){e((0,m.GK)(n))},fetchAllContacts:i}},h=function(){return h=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},h.apply(this,arguments)};function x(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(t[r[i]]=e[r[i]])}return t}var p=t(6047);function v(e){var n=e.children,t=x(e,["children"]);return r.createElement(p.Z,h({},function(e){var n=e.disabled,t=e.field,r=t.onBlur,i=x(t,["onBlur"]),o=e.form,l=o.isSubmitting,c=o.touched,s=o.errors,u=e.onBlur,d=e.helperText,m=x(e,["disabled","field","form","onBlur","helperText"]),f=(0,a.u9)(s,i.name),p=(0,a.u9)(c,i.name)&&!!f;return h(h({error:p,helperText:p?f:d,disabled:null!==n&&void 0!==n?n:l,onBlur:null!==u&&void 0!==u?u:function(e){r(null!==e&&void 0!==e?e:i.name)}},i),m)}(t)),n)}v.displayName="FormikMaterialUITextField";var b=t(6151),j=t(4554),g=t(184),y=l.Ry().shape({name:l.Z_().min(2,"Too Short!").max(10,"Too Long!").required("Required"),number:l.Z_().min(2,"Too Short!").max(15,"Too Long!").required("Required")}),w={name:"",number:""},Z=function(){var e=f(),n=e.addNewContact,t=e.contacts,r=function(){var e=(0,o.Z)((0,i.Z)().mark((function e(r,o){var a,l;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=o.resetForm,e.prev=1,l=r.name,!t.find((function(e){return e.name===l}))){e.next=6;break}return alert("".concat(l," is already in contacts list")),e.abrupt("return");case 6:n(r),a(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.error("Error while handling form submission:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(n,t){return e.apply(this,arguments)}}();return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("h2",{children:"Add Contact"}),(0,g.jsx)(a.J9,{initialValues:w,validationSchema:y,onSubmit:r,children:(0,g.jsxs)(a.l0,{autoComplete:"off",children:[(0,g.jsx)(j.Z,{marginY:1,sx:{width:350},children:(0,g.jsx)(a.gN,{component:v,label:"Name*",type:"text",name:"name",size:"small",fullWidth:!0,autoFocus:!0})}),(0,g.jsx)(j.Z,{marginY:2,sx:{width:350},children:(0,g.jsx)(a.gN,{component:v,label:"Number*",type:"tel",name:"number",size:"small",fullWidth:!0})}),(0,g.jsx)(b.Z,{type:"submit",fullWidth:!0,variant:"contained",size:"medium",sx:{mb:7},children:"Add contact"})]})})]})},C=t(22),O=t(7225),k=t(890),T=function(e){var n=e.id,t=e.name,r=e.number,i=f().removeContact;return(0,g.jsx)(O.Z,{children:(0,g.jsxs)(j.Z,{component:"div",sx:{display:{xs:"flex"},width:"100%",m:1},children:[(0,g.jsxs)(j.Z,{component:"div",sx:{display:{xs:"flex"},flexWrap:"wrap",flexGrow:1},children:[(0,g.jsx)(k.Z,{variant:"span",sx:{mr:4,flexGrow:1,textAlign:"left",fontWeight:"bold"},children:t}),(0,g.jsx)(k.Z,{variant:"span",sx:{mr:1},children:r})]}),(0,g.jsx)(C.Z,{sx:{color:"#000a",cursor:"pointer"},onClick:function(){return i(n)}})]})})},F=function(){var e=f().filteredContacts;return(0,g.jsx)(j.Z,{component:"div",sx:{width:"100%",maxWidth:350},children:(0,g.jsx)(O.Z,{children:e.map((function(e){var n=e.id,t=e.name,r=e.number;return(0,g.jsx)(T,{name:t,number:r,id:n},n)}))})})},W=function(){var e=(0,c.I0)(),n=(0,c.v9)(s);return(0,g.jsx)(j.Z,{component:"form",noValidate:!0,autoComplete:"off",sx:{width:"100%",maxWidth:350},children:(0,g.jsx)(p.Z,{id:"outlined-basic",label:"Find contacts by name",variant:"outlined",type:"text",size:"small",value:n,onChange:function(n){console.log("Typed value:",n.target.value),e((0,d.Tv)(n.target.value))},fullWidth:!0})})},S=t(1889),z=function(){var e=f(),n=e.contacts,t=e.fetchAllContacts;return(0,r.useEffect)((function(){t()}),[t]),(0,g.jsx)(S.ZP,{container:!0,justifyContent:"center",alignItems:"center",children:(0,g.jsxs)(j.Z,{component:"div",sx:{mt:1,width:"100%",maxWidth:350,textAlign:"center"},children:[(0,g.jsx)(Z,{}),(0,g.jsx)("h2",{children:"Contacts"}),n&&0!==n.length&&(0,g.jsx)(W,{}),(0,g.jsx)(F,{})]})})},N=function(){return(0,g.jsx)("div",{children:(0,g.jsx)(z,{})})}},22:function(e,n,t){var r=t(4836);n.Z=void 0;var i=r(t(5649)),o=t(184),a=(0,i.default)((0,o.jsx)("path",{d:"M14.59 8 12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"HighlightOff");n.Z=a}}]);
//# sourceMappingURL=407.7ebf9720.chunk.js.map