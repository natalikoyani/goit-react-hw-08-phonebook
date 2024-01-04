"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[823],{5823:function(e,n,r){r.r(n),r.d(n,{default:function(){return K}});var t,i,a,s=r(2791),l=r(9434),c=r(4270),o=function(e){return e.contacts.items},u=function(e){return e.filter},d=function(e){return e.contacts.isLoading},m=r(3634),h=r(5705),x=r(8007),f=r(5550),p=r(5350),j=r(7438),b=r(7236),v=r(3004),g=r(9055),w=r(184),y=x.Ry().shape({name:x.Z_().required("This field is required!"),number:x.Z_().matches(/^[0-9-+]+$/,'Please enter digits, "-" or "+"').required("This field is required!")}),I=function(){var e=(0,l.I0)(),n=(0,l.v9)(o);return(0,w.jsx)(h.J9,{initialValues:{name:"",number:""},validationSchema:y,onSubmit:function(r,t){if(n.some((function(e){return e.name.toLowerCase()===r.name.toLowerCase()})))return alert("".concat(r.name," is already in contacts!"));e((0,m.uK)(r)),t.resetForm()},children:function(e){var n=e.handleSubmit,r=e.errors,t=e.touched;return(0,w.jsx)("form",{onSubmit:n,children:(0,w.jsxs)(f.g,{spacing:4,align:"flex-start",children:[(0,w.jsxs)(p.NI,{isInvalid:!!r.name&&t.name,children:[(0,w.jsx)(j.l,{htmlFor:"name",children:"Name"}),(0,w.jsx)(h.gN,{as:b.I,id:"name",name:"name",type:"text",width:"20em"}),(0,w.jsx)(v.J1,{children:r.name})]}),(0,w.jsxs)(p.NI,{isInvalid:!!r.number&&t.number,children:[(0,w.jsx)(j.l,{htmlFor:"number",children:"Number"}),(0,w.jsx)(h.gN,{as:b.I,id:"number",name:"number",type:"text",width:"20em"}),(0,w.jsx)(v.J1,{children:r.number})]}),(0,w.jsx)(g.z,{type:"submit",colorScheme:"purple",children:"Add contact"})]})})}})},C=r(5984),Z=r(168),k=r(6487),F=k.ZP.ul(t||(t=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  row-gap: 15px;\n  list-style: none;\n"]))),L=r(816),N=function(){var e=(0,l.I0)(),n=(0,l.v9)(o),r=(0,l.v9)(u),t=n.filter((function(e){return e.name.toLowerCase().includes(r.toLowerCase())}));return(0,w.jsx)(F,{children:t.map((function(n){return(0,w.jsxs)("li",{children:[n.name,": ",n.number," ",(0,w.jsx)(L.u,{type:"button",onClick:function(){return e((0,m.GK)(n.id))},children:"Delete"})]},(0,C.x0)())}))})},S=r(8307),_=function(){return(0,w.jsx)("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},children:(0,w.jsx)(S.W0,{height:100,width:100,radius:5,color:"#31cfff",ariaLabel:"ball-triangle-loading",wrapperClass:{},wrapperStyle:"",visible:!0})})},q=k.ZP.p(i||(i=(0,Z.Z)(["\n  margin-bottom: 5px;\n"]))),P=r(6895),J=function(){var e,n=(0,l.I0)(),r=(0,l.v9)(o);return(null!==(e=0===r.length)&&void 0!==e?e:!r)?(0,w.jsx)(w.Fragment,{children:(0,w.jsx)(q,{children:"There are no contacts yet!"})}):(0,w.jsxs)("div",{children:[(0,w.jsx)(q,{children:"Find contacts by name"}),(0,w.jsx)(b.I,{type:"string",name:"filter",width:"20em",onChange:function(e){return n((0,P.w)(e.target.value))}})]})},T=k.ZP.div(a||(a=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  margin-top: 15px;\n"])));function K(){var e=(0,l.I0)(),n=(0,l.v9)(d);return(0,s.useEffect)((function(){e((0,m.yF)())}),[e]),(0,w.jsxs)(T,{children:[(0,w.jsx)(c.q,{children:(0,w.jsx)("title",{children:"Your contacts"})}),(0,w.jsx)(I,{}),(0,w.jsx)(J,{}),(0,w.jsx)("div",{children:n&&(0,w.jsx)(_,{})}),(0,w.jsx)(N,{})]})}}}]);
//# sourceMappingURL=823.5a8aba50.chunk.js.map