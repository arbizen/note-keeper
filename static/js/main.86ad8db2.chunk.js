(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{34:function(n,e,t){},42:function(n,e,t){"use strict";t.r(e);var i=t(4),a=t.n(i),c=t(24),o=t.n(c),r=(t(34),t(12)),s=t(6),d=t(14),h=t.n(d),u=t(15),p=t(7),b=t(21);b.a.initializeApp({apiKey:"AIzaSyAZhvmZYFIEwZxtqf6E_vmGmNkZF_oUJAE",authDomain:"note-keeper-f1de8.firebaseapp.com",projectId:"note-keeper-f1de8",storageBucket:"note-keeper-f1de8.appspot.com",messagingSenderId:"722421639421",appId:"1:722421639421:web:c68fc9ec78af8a360c7694"});var l,j,x,f,g,m,O,v,w,y,k,C,S,D,E,I,P,z,R,M,A,L,H,U,B,N,W,Z,G,J,F=b.a,K=(t(38),t(2)),_=p.a.div(l||(l=Object(s.a)(["\n  height: 100vh;\n  width: 100vw;\n  background: #eee;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),q=p.a.button(j||(j=Object(s.a)(["\n  height: 35px;\n  width: 150px;\n  background: #1ecbe1;\n  color: #fff;\n  cursor: pointer;\n  border: none;\n  border-radius: 20px;\n  &:hover {\n    box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),\n      0 15px 40px rgba(166, 173, 201, 0.2);\n  }\n"]))),Q=function(n){var e=n.onSuccess,t=Object(i.useState)(null),a=Object(r.a)(t,2),c=a[0],o=a[1],s=function(){var n=Object(u.a)(h.a.mark((function n(){var e,t,i;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=new F.auth.GoogleAuthProvider,n.next=3,F.auth().signInWithPopup(e);case 3:t=n.sent,i=t.user,o(i);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(i.useEffect)((function(){c&&e(c)}),[c,e]),Object(K.jsx)(_,{children:Object(K.jsx)(q,{onClick:s,children:"Login With Goolge"})})},T=Object(i.createContext)(null),X=p.a.div(x||(x=Object(s.a)(["\n  height: 100vh;\n  width: 100vw;\n"]))),Y=p.a.video(f||(f=Object(s.a)(["\n  postition: absolute;\n  height: 100vh;\n  width: 100vw;\n  left: 0;\n  top: 0;\n  object-fit: fill;\n  pointer-events: none;\n"]))),V=p.a.button(g||(g=Object(s.a)(["\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n  background: #fff;\n  position: absolute;\n  bottom: 20px;\n  left: 50%;\n  transform: translateX(-50%);\n  cursor: pointer;\n  border: none;\n  &:focus {\n    outline: none;\n  }\n  &:hover {\n    border: 5px solid gray;\n    opacity: 0.8;\n  }\n"]))),$=function(n){var e=n.onSnap,t=Object(i.useRef)(null);Object(i.useEffect)((function(){Object(u.a)(h.a.mark((function n(){var e,i;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,navigator.mediaDevices.enumerateDevices();case 3:return n.next=5,n.sent.length;case 5:if(n.t0=n.sent,!(n.t0<=1)){n.next=10;break}n.t1="user",n.next=11;break;case 10:n.t1="environment";case 11:return e=n.t1,n.next=14,navigator.mediaDevices.getUserMedia({video:{facingMode:e,aspectRatio:20/9}});case 14:i=n.sent,t.current.srcObject=i,n.next=20;break;case 18:n.prev=18,n.t2=n.catch(0);case 20:case"end":return n.stop()}}),n,null,[[0,18]])})))()}),[]);return Object(K.jsxs)(X,{children:[Object(K.jsx)(Y,{playsInline:!0,autoPlay:!0,ref:t}),Object(K.jsx)(V,{onClick:function(){var n=function(n){var e=document.createElement("canvas");return e.height=window.innerHeight,e.width=window.innerWidth,e.getContext("2d").drawImage(n,0,0,e.width,e.height),e.toDataURL()}(t.current),i=document.createElement("img");i.src=n,e&&e({height:i.height,width:i.width,photo:n})}})]})},nn=t(29),en=t.n(nn),tn=(t(41),p.a.div(m||(m=Object(s.a)(["\n  height: 100vh;\n  width: 100vw;\n  position: absolute;\n  top: 0;\n  z-index: 20;\n"])))),an=p.a.button(O||(O=Object(s.a)(["\n  background: #fff;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  padding: 8px 10px;\n  opacity: 0.9;\n  margin-right: 5px;\n  &:hover {\n    opacity: 1;\n  }\n"]))),cn=p.a.div(v||(v=Object(s.a)(["\n  height: auto;\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  padding: 20px;\n  user-select: none;\n"]))),on=function(n){var e=n.image,t=n.onProceed,a=n.onCancel,c=Object(i.useRef)(null),o=Object(i.useState)({x:35,y:35,unit:"%",width:30,height:30}),s=Object(r.a)(o,2),d=s[0],h=s[1],u=Object(i.useState)(null),p=Object(r.a)(u,2),b=p[0],l=p[1],j=Object(i.useState)(null),x=Object(r.a)(j,2),f=x[0],g=x[1];return Object(i.useEffect)((function(){if(b&&c.current){var n=document.createElement("canvas"),e=c.current,t=b,i=e.naturalWidth/e.width,a=e.naturalHeight/e.height,o=n.getContext("2d"),r=window.devicePixelRatio;n.width=t.width*r,n.height=t.height*r,o.setTransform(r,0,0,r,0,0),o.imageSmoothingQuality="high",o.drawImage(e,t.x*i,t.y*a,t.width*i,t.height*a,0,0,t.width,t.height);var s=n.toDataURL();g(s)}}),[b]),Object(K.jsxs)(tn,{children:[Object(K.jsx)(en.a,{src:e,onImageLoaded:function(n){c.current=n},crop:d,onChange:function(n){return h(n)},onComplete:function(n){return l(n)}}),Object(K.jsxs)(cn,{children:[Object(K.jsx)(an,{onClick:function(){t(f||e)},children:"Proceed"}),Object(K.jsx)(an,{onClick:a,children:"Cancel"})]})]})},rn=p.a.img(w||(w=Object(s.a)(["\n  height: auto;\n  width: auto;\n  top: 0;\n  z-index: 10;\n"]))),sn=p.a.button(y||(y=Object(s.a)(["\n  height: 30px;\n  width: 80px;\n  border-radius: 5px;\n  background: #000;\n  color: #fff;\n  border: none;\n  cursor: pointer;\n  &:hover {\n    opacity: 0.8;\n  }\n"]))),dn=p.a.div(k||(k=Object(s.a)(["\n  height: 100vh;\n  width: 100vw;\n  position: absolute;\n  top: 0;\n  z-index: 15;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #fff;\n"]))),hn=p.a.div(C||(C=Object(s.a)(["\n  position: absolute;\n  bottom: 0;\n  padding: 25px 0;\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  z-index: 20;\n"]))),un=p.a.div(S||(S=Object(s.a)(["\n  height: 50px;\n  width: 50px;\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  background: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  cursor: pointer;\n"]))),pn=function(n){var e=n.onCameraHide,t=Object(i.useState)(!1),a=Object(r.a)(t,2),c=a[0],o=a[1],s=Object(i.useState)(null),d=Object(r.a)(s,2),h=d[0],u=d[1],p=Object(i.useState)(!1),b=Object(r.a)(p,2),l=b[0],j=b[1],x=Object(i.useState)(null),f=Object(r.a)(x,2),g=f[0],m=f[1];return Object(K.jsxs)("div",{className:"camera-view",children:[Object(K.jsx)($,{onSnap:function(n){u(n.photo),m(n),o(!0)}}),Object(K.jsx)(un,{onClick:e,children:"Hide"}),c&&Object(K.jsxs)(dn,{children:[Object(K.jsx)(rn,{src:h,height:g.height,width:g.width}),Object(K.jsxs)(hn,{children:[Object(K.jsx)(sn,{onClick:function(){o(!1)},children:"Retake"}),Object(K.jsx)(sn,{onClick:function(){j(!0),o(!1),u(g.photo)},children:"Edit"}),Object(K.jsx)(sn,{children:"Proceed"})]})]}),l&&Object(K.jsx)(on,{image:h,onProceed:function(n){u(n),j(!1),o(!0)},onCancel:function(){j(!1),o(!0)}})]})},bn=[{name:"Integration with good peaks",image:"https://picsum.photos/200"},{name:"Defferetiation and lucks",image:"https://picsum.photos/200"},{name:"Pucks to leaks",image:"https://picsum.photos/200"},{name:"Dummies with pummy",image:"https://source.unsplash.com/1600x900/?nature,water"},{name:"Dummies with pummy",image:"https://picsum.photos/200"},{name:"Dummies with pummy",image:"https://picsum.photos/200"},{name:"Dummies with pummy",image:"https://source.unsplash.com/1600x900/?nature,water"},{name:"Dummies with pummy",image:"https://picsum.photos/200"},{name:"Dummies with pummy",image:"https://picsum.photos/200"},{name:"Dummies with pummy",image:"https://picsum.photos/200"}],ln=p.a.div(D||(D=Object(s.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  padding-top: 15px;\n  height: auto;\n  user-select: none;\n"]))),jn=p.a.p(E||(E=Object(s.a)(["\n  color: #fff;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  opacity: 0;\n  font-family: 'Montserrat', sans-serif;\n  font-weight: 600;\n  @media screen and (max-width: 700px) {\n      opacity: 1;\n  }\n"]))),xn=p.a.div(I||(I=Object(s.a)(["\n  height: 200px;\n  flex-grow: 1;\n  margin: 2px;\n  background: #fff;\n  cursor: pointer;\n  position: relative;\n  &:hover {\n    opacity: 0.8;\n  }\n  &:hover "," {\n    opacity: 1;\n  }\n"])),jn),fn=p.a.img(P||(P=Object(s.a)(["\n  height: 200px;\n  object-fit: cover;\n  max-width: 100%;\n  min-width: 100%;\n  vertical-align: bottom;\n"]))),gn=function(){return Object(K.jsx)(ln,{children:bn&&bn.map((function(n){return Object(K.jsxs)(xn,{children:[Object(K.jsx)(fn,{src:n&&n.image}),Object(K.jsx)(jn,{children:n&&n.name})]})}))})},mn=p.a.div(z||(z=Object(s.a)([""]))),On=p.a.div(R||(R=Object(s.a)(["\n  height: 100vh;\n  width: 100%;\n  background: #eee;\n  overflow-y: scroll;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n  font-family: 'Montserrat', sans-serif;\n"]))),vn=p.a.div(M||(M=Object(s.a)(["\n  display: flex;\n  width: 100%;\n  padding: 15px;\n  align-items: center;\n  background: #fff;\n  box-shadow: 0 1px 1.5px rgba(0, 0, 0, 0.1);\n  user-select: none;\n  position: fixed;\n  z-index: 50;\n"]))),wn=p.a.h3(A||(A=Object(s.a)(["\n  color: #1ecbe1;\n"]))),yn=p.a.div(L||(L=Object(s.a)(["\n  display: flex;\n  align-items: center;\n"]))),kn=p.a.button(H||(H=Object(s.a)(["\n  border: none;\n  color: #fff;\n  background: #1ecbe1;\n  padding: 8px 15px;\n  border-radius: 5px;\n  cursor: pointer;\n  &:hover {\n    opacity: 0.7;\n  }\n"]))),Cn=p.a.div(U||(U=Object(s.a)(["\n  flex: 1 1 auto;\n  display: flex;\n  padding: 0 15px;\n"]))),Sn=p.a.div(B||(B=Object(s.a)(["\n  margin: 0 10px;\n  color: #6e6d7a;\n  transition: 0.3s;\n  cursor: pointer;\n  &:hover {\n    color: #1ecbe1;\n  }\n  font-family:  'Montserrat', sans-serif;\n  font-weight: 600;\n  font-size: 15px;\n"]))),Dn=p.a.div(N||(N=Object(s.a)(["\n  height: 50px;\n  width: 50px;\n  position: absolute;\n  bottom: 20px;\n  right: 20px;\n  background: #1ecbe1;\n  color: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  font-size: 20px;\n  cursor: pointer;\n"]))),En=p.a.img(W||(W=Object(s.a)(["\n  height: 35px;\n  width: 35px;\n  border-radius: 50%;\n  cursor: pointer;\n  margin-left: 10px;\n  &:hover {\n    opacity: 0.7;\n  }\n"]))),In=p.a.div(Z||(Z=Object(s.a)(["\n  display: flex;\n  padding: 10px;\n"]))),Pn=p.a.input(G||(G=Object(s.a)(["\n  height: 35px;\n  background: #fff;\n  flex: 1;\n  border: none;\n  padding: 10px;\n  margin-right: 10px;\n  border-radius: 5px;\n  box-shadow: 0 1px 1.5px rgba(0, 0, 0, 0.1);\n  &:focus {\n    outline: none;\n  }\n"]))),zn=function(){var n=Object(i.useContext)(T),e=Object(i.useState)(!1),t=Object(r.a)(e,2),a=t[0],c=t[1];return Object(K.jsx)(mn,{children:a?Object(K.jsx)(pn,{onCameraHide:function(){return c(!a)}}):Object(K.jsxs)(On,{children:[Object(K.jsxs)(vn,{children:[Object(K.jsx)(wn,{children:"Note Keeper"}),Object(K.jsxs)(Cn,{children:[Object(K.jsx)(Sn,{children:"Bangla"}),Object(K.jsx)(Sn,{children:"English"}),Object(K.jsx)(Sn,{children:"Math"}),Object(K.jsx)(Sn,{children:"Chemistry"}),Object(K.jsx)(Sn,{children:"Biology"}),Object(K.jsx)(Sn,{children:"Physics"}),Object(K.jsx)(Sn,{children:"I&Ct"})]}),Object(K.jsxs)(yn,{children:[Object(K.jsx)(kn,{children:"Logout"}),Object(K.jsx)(En,{src:n&&n.photoURL})]})]}),Object(K.jsxs)(In,{children:[Object(K.jsx)(Pn,{placeholder:"Enter keyword i.e. integration, straight line.."}),Object(K.jsx)(kn,{children:"Search"})]}),Object(K.jsx)(gn,{}),Object(K.jsx)(Dn,{onClick:function(){return c(!a)},children:"+"})]})})},Rn=p.a.div(J||(J=Object(s.a)(["\n  \n"]))),Mn=function(){var n=Object(i.useState)(null),e=Object(r.a)(n,2),t=e[0],a=e[1];return Object(K.jsx)(T.Provider,{value:t,children:Object(K.jsxs)(Rn,{children:[Object(K.jsx)("div",{className:"App",children:!t&&Object(K.jsx)(Q,{onSuccess:function(n){a(n)}})}),t&&Object(K.jsx)(zn,{})]})})};o.a.render(Object(K.jsx)(a.a.StrictMode,{children:Object(K.jsx)(Mn,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.86ad8db2.chunk.js.map