import{S as j,i as J,s as K,k as f,q as A,a as y,l as u,m as _,r as g,h as n,c as k,n as m,b as w,C as l,B as H,D as O,w as P,x as Q,y as T,E as W,F as X,G as Y,f as U,t as V,z as Z}from"../../chunks/index-35e6351d.js";function ee(h){let a,r,c,o,i,t,e,s,L,C,q,v,I,N,E,d,B;return{c(){a=f("header"),r=f("a"),c=A("Home"),o=y(),i=f("nav"),t=f("ul"),e=f("li"),s=f("a"),L=A("Blog"),C=y(),q=f("li"),v=f("a"),I=A("About"),N=y(),E=f("li"),d=f("a"),B=A("Contact"),this.h()},l(b){a=u(b,"HEADER",{class:!0});var p=_(a);r=u(p,"A",{href:!0,class:!0});var x=_(r);c=g(x,"Home"),x.forEach(n),o=k(p),i=u(p,"NAV",{});var D=_(i);t=u(D,"UL",{class:!0});var $=_(t);e=u($,"LI",{});var S=_(e);s=u(S,"A",{href:!0,class:!0});var z=_(s);L=g(z,"Blog"),z.forEach(n),S.forEach(n),C=k($),q=u($,"LI",{});var F=_(q);v=u(F,"A",{href:!0,class:!0});var G=_(v);I=g(G,"About"),G.forEach(n),F.forEach(n),N=k($),E=u($,"LI",{});var M=_(E);d=u(M,"A",{href:!0,class:!0});var R=_(d);B=g(R,"Contact"),R.forEach(n),M.forEach(n),$.forEach(n),D.forEach(n),p.forEach(n),this.h()},h(){m(r,"href","/"),m(r,"class","svelte-kqeq6i"),m(s,"href","/blog"),m(s,"class","svelte-kqeq6i"),m(v,"href","/about"),m(v,"class","svelte-kqeq6i"),m(d,"href","/contact"),m(d,"class","svelte-kqeq6i"),m(t,"class","svelte-kqeq6i"),m(a,"class","svelte-kqeq6i")},m(b,p){w(b,a,p),l(a,r),l(r,c),l(a,o),l(a,i),l(i,t),l(t,e),l(e,s),l(s,L),l(t,C),l(t,q),l(q,v),l(v,I),l(t,N),l(t,E),l(E,d),l(d,B)},p:H,i:H,o:H,d(b){b&&n(a)}}}class te extends j{constructor(a){super(),J(this,a,null,ee,K,{})}}function ae(h){let a,r,c,o;a=new te({});const i=h[1].default,t=O(i,h,h[0],null);return{c(){P(a.$$.fragment),r=y(),c=f("main"),t&&t.c()},l(e){Q(a.$$.fragment,e),r=k(e),c=u(e,"MAIN",{});var s=_(c);t&&t.l(s),s.forEach(n)},m(e,s){T(a,e,s),w(e,r,s),w(e,c,s),t&&t.m(c,null),o=!0},p(e,[s]){t&&t.p&&(!o||s&1)&&W(t,i,e,e[0],o?Y(i,e[0],s,null):X(e[0]),null)},i(e){o||(U(a.$$.fragment,e),U(t,e),o=!0)},o(e){V(a.$$.fragment,e),V(t,e),o=!1},d(e){Z(a,e),e&&n(r),e&&n(c),t&&t.d(e)}}}function se(h,a,r){let{$$slots:c={},$$scope:o}=a;return h.$$set=i=>{"$$scope"in i&&r(0,o=i.$$scope)},[o,c]}class re extends j{constructor(a){super(),J(this,a,se,ae,K,{})}}export{re as default};