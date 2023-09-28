import{S as Yt,i as Zt,s as ea,k as l,r as s,a as h,z as ta,l as n,m as r,u as o,h as t,c as f,A as aa,p as i,b as c,H as a,B as sa,g as oa,d as la,C as na,n as ra}from"../chunks/index.5a544235.js";import{C as ia}from"../chunks/CodeBlock.435dd7c2.js";function pa($e){let u,J=`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Hero</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>About</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span> <span class="token punctuation">/></span></span></code>`;return{c(){u=l("pre"),this.h()},l(d){u=n(d,"PRE",{class:!0});var j=r(u);j.forEach(t),this.h()},h(){i(u,"class","language-html")},m(d,j){c(d,u,j),u.innerHTML=J},p:ra,d(d){d&&t(u)}}}function ca($e){let u,J,d,j,He,pe,T,w,Q,Se,xe,ce,m,ze,N,Oe,Be,V,De,je,ue,C,_,X,Ne,Le,he,M,Me,fe,$,b,Y,We,Ke,de,W,Ge,me,H,k,Z,Ie,qe,ve,K,Re,we,S,_e,x,E,ee,Ue,Fe,be,v,Je,L,Qe,Ve,te,Xe,Ye,ke,z,g,ae,Ze,et,Ee,G,tt,ge,O,y,at,se,st,ot,oe,lt,nt,rt,P,it,le,pt,ct,ne,ut,ht,ye,B,A,re,ft,dt,Pe,D,mt,I,vt,wt,Ae;return S=new ia({props:{lang:"html",filename:"+page.svelte",$$slots:{default:[pa]},$$scope:{ctx:$e}}}),{c(){u=l("p"),J=s("This project follows the basic "),d=l("a"),j=s("SvelteKit structure"),He=s(", with some added conventions to make customization a post-management easier."),pe=h(),T=l("h2"),w=l("a"),Q=l("span"),Se=s("#"),xe=s("Components"),ce=h(),m=l("p"),ze=s("The components are organized following the "),N=l("a"),Oe=s("Atomic Design"),Be=s(" principles, albeit somewhat simplified. Components are in the "),V=l("code"),De=s("src/lib/components"),je=s(" folder, and are organized in the following way:"),ue=h(),C=l("h3"),_=l("a"),X=l("span"),Ne=s("#"),Le=s("Atoms"),he=h(),M=l("p"),Me=s("Atoms are the most basic components, which can be seen as building blocks for other components. They’re small and self-contained, and do only one thing. Examples of atoms are buttons, inputs, and tags."),fe=h(),$=l("h3"),b=l("a"),Y=l("span"),We=s("#"),Ke=s("Molecules"),de=h(),W=l("p"),Ge=s("Molecules are groups of atoms that work together to form a more complex component. Examples of molecules are cards, groups of links, or an alert callout."),me=h(),H=l("h3"),k=l("a"),Z=l("span"),Ie=s("#"),qe=s("Organisms"),ve=h(),K=l("p"),Re=s("Organisms, in this project, are code blocks that represent a section of a page, such as the header, footer and hero section. They can be used directly in a page as a sort of building block, so the page’s code can be as simple as this:"),we=h(),ta(S.$$.fragment),_e=h(),x=l("h2"),E=l("a"),ee=l("span"),Ue=s("#"),Fe=s("Component Gallery"),be=h(),v=l("p"),Je=s("This project uses "),L=l("a"),Qe=s("Histoire"),Ve=s(" to be able to see and develop components in isolation. To open it, run "),te=l("code"),Xe=s("npm run story:dev"),Ye=s(". This way you can customize and build new components with placeholder content and without worrying about where to put them in a page."),ke=h(),z=l("h2"),g=l("a"),ae=l("span"),Ze=s("#"),et=s("Pages"),Ee=h(),G=l("p"),tt=s("Pages obey the default SvelteKit structure, but can be summarized as follows:"),ge=h(),O=l("ul"),y=l("li"),at=s("There are two different file types: the pages ("),se=l("code"),st=s("+page.svelte"),ot=s(") and the layouts ("),oe=l("code"),lt=s("+layout.svelte"),nt=s("). Layouts are a way to reuse the same structure between different pages without having to duplicate code;"),rt=h(),P=l("li"),it=s("There are two different page layouts in this site: the “Waves” layout, which all pages inside the "),le=l("code"),pt=s("(waves)"),ct=s(" folder use, and the “Blog Article” layout, which all pages inside the "),ne=l("code"),ut=s("(blog-article)"),ht=s(" folder use;"),ye=h(),B=l("h2"),A=l("a"),re=l("span"),ft=s("#"),dt=s("Blog Posts"),Pe=h(),D=l("p"),mt=s("To know how blog posts work and how to create new ones, check out "),I=l("a"),vt=s("How Blog Posts Work"),wt=s("."),this.h()},l(e){u=n(e,"P",{});var p=r(u);J=o(p,"This project follows the basic "),d=n(p,"A",{href:!0,rel:!0});var ie=r(d);j=o(ie,"SvelteKit structure"),ie.forEach(t),He=o(p,", with some added conventions to make customization a post-management easier."),p.forEach(t),pe=f(e),T=n(e,"H2",{id:!0});var _t=r(T);w=n(_t,"A",{class:!0,title:!0,"aria-hidden":!0,href:!0});var At=r(w);Q=n(At,"SPAN",{});var Tt=r(Q);Se=o(Tt,"#"),Tt.forEach(t),At.forEach(t),xe=o(_t,"Components"),_t.forEach(t),ce=f(e),m=n(e,"P",{});var q=r(m);ze=o(q,"The components are organized following the "),N=n(q,"A",{href:!0,rel:!0});var Ct=r(N);Oe=o(Ct,"Atomic Design"),Ct.forEach(t),Be=o(q," principles, albeit somewhat simplified. Components are in the "),V=n(q,"CODE",{});var $t=r(V);De=o($t,"src/lib/components"),$t.forEach(t),je=o(q," folder, and are organized in the following way:"),q.forEach(t),ue=f(e),C=n(e,"H3",{id:!0});var bt=r(C);_=n(bt,"A",{class:!0,title:!0,"aria-hidden":!0,href:!0});var Ht=r(_);X=n(Ht,"SPAN",{});var St=r(X);Ne=o(St,"#"),St.forEach(t),Ht.forEach(t),Le=o(bt,"Atoms"),bt.forEach(t),he=f(e),M=n(e,"P",{});var xt=r(M);Me=o(xt,"Atoms are the most basic components, which can be seen as building blocks for other components. They’re small and self-contained, and do only one thing. Examples of atoms are buttons, inputs, and tags."),xt.forEach(t),fe=f(e),$=n(e,"H3",{id:!0});var kt=r($);b=n(kt,"A",{class:!0,title:!0,"aria-hidden":!0,href:!0});var zt=r(b);Y=n(zt,"SPAN",{});var Ot=r(Y);We=o(Ot,"#"),Ot.forEach(t),zt.forEach(t),Ke=o(kt,"Molecules"),kt.forEach(t),de=f(e),W=n(e,"P",{});var Bt=r(W);Ge=o(Bt,"Molecules are groups of atoms that work together to form a more complex component. Examples of molecules are cards, groups of links, or an alert callout."),Bt.forEach(t),me=f(e),H=n(e,"H3",{id:!0});var Et=r(H);k=n(Et,"A",{class:!0,title:!0,"aria-hidden":!0,href:!0});var Dt=r(k);Z=n(Dt,"SPAN",{});var jt=r(Z);Ie=o(jt,"#"),jt.forEach(t),Dt.forEach(t),qe=o(Et,"Organisms"),Et.forEach(t),ve=f(e),K=n(e,"P",{});var Nt=r(K);Re=o(Nt,"Organisms, in this project, are code blocks that represent a section of a page, such as the header, footer and hero section. They can be used directly in a page as a sort of building block, so the page’s code can be as simple as this:"),Nt.forEach(t),we=f(e),aa(S.$$.fragment,e),_e=f(e),x=n(e,"H2",{id:!0});var gt=r(x);E=n(gt,"A",{class:!0,title:!0,"aria-hidden":!0,href:!0});var Lt=r(E);ee=n(Lt,"SPAN",{});var Mt=r(ee);Ue=o(Mt,"#"),Mt.forEach(t),Lt.forEach(t),Fe=o(gt,"Component Gallery"),gt.forEach(t),be=f(e),v=n(e,"P",{});var R=r(v);Je=o(R,"This project uses "),L=n(R,"A",{href:!0,rel:!0});var Wt=r(L);Qe=o(Wt,"Histoire"),Wt.forEach(t),Ve=o(R," to be able to see and develop components in isolation. To open it, run "),te=n(R,"CODE",{});var Kt=r(te);Xe=o(Kt,"npm run story:dev"),Kt.forEach(t),Ye=o(R,". This way you can customize and build new components with placeholder content and without worrying about where to put them in a page."),R.forEach(t),ke=f(e),z=n(e,"H2",{id:!0});var yt=r(z);g=n(yt,"A",{class:!0,title:!0,"aria-hidden":!0,href:!0});var Gt=r(g);ae=n(Gt,"SPAN",{});var It=r(ae);Ze=o(It,"#"),It.forEach(t),Gt.forEach(t),et=o(yt,"Pages"),yt.forEach(t),Ee=f(e),G=n(e,"P",{});var qt=r(G);tt=o(qt,"Pages obey the default SvelteKit structure, but can be summarized as follows:"),qt.forEach(t),ge=f(e),O=n(e,"UL",{});var Te=r(O);y=n(Te,"LI",{});var U=r(y);at=o(U,"There are two different file types: the pages ("),se=n(U,"CODE",{});var Rt=r(se);st=o(Rt,"+page.svelte"),Rt.forEach(t),ot=o(U,") and the layouts ("),oe=n(U,"CODE",{});var Ut=r(oe);lt=o(Ut,"+layout.svelte"),Ut.forEach(t),nt=o(U,"). Layouts are a way to reuse the same structure between different pages without having to duplicate code;"),U.forEach(t),rt=f(Te),P=n(Te,"LI",{});var F=r(P);it=o(F,"There are two different page layouts in this site: the “Waves” layout, which all pages inside the "),le=n(F,"CODE",{});var Ft=r(le);pt=o(Ft,"(waves)"),Ft.forEach(t),ct=o(F," folder use, and the “Blog Article” layout, which all pages inside the "),ne=n(F,"CODE",{});var Jt=r(ne);ut=o(Jt,"(blog-article)"),Jt.forEach(t),ht=o(F," folder use;"),F.forEach(t),Te.forEach(t),ye=f(e),B=n(e,"H2",{id:!0});var Pt=r(B);A=n(Pt,"A",{class:!0,title:!0,"aria-hidden":!0,href:!0});var Qt=r(A);re=n(Qt,"SPAN",{});var Vt=r(re);ft=o(Vt,"#"),Vt.forEach(t),Qt.forEach(t),dt=o(Pt,"Blog Posts"),Pt.forEach(t),Pe=f(e),D=n(e,"P",{});var Ce=r(D);mt=o(Ce,"To know how blog posts work and how to create new ones, check out "),I=n(Ce,"A",{href:!0});var Xt=r(I);vt=o(Xt,"How Blog Posts Work"),Xt.forEach(t),wt=o(Ce,"."),Ce.forEach(t),this.h()},h(){i(d,"href","https://kit.svelte.dev/docs/project-structure"),i(d,"rel","nofollow"),i(w,"class","heading-link"),i(w,"title","Permalink"),i(w,"aria-hidden","true"),i(w,"href","#components"),i(T,"id","components"),i(N,"href","https://medium.com/@WeAreMobile1st/atomic-design-getting-started-916bc81bad0e"),i(N,"rel","nofollow"),i(_,"class","heading-link"),i(_,"title","Permalink"),i(_,"aria-hidden","true"),i(_,"href","#atoms"),i(C,"id","atoms"),i(b,"class","heading-link"),i(b,"title","Permalink"),i(b,"aria-hidden","true"),i(b,"href","#molecules"),i($,"id","molecules"),i(k,"class","heading-link"),i(k,"title","Permalink"),i(k,"aria-hidden","true"),i(k,"href","#organisms"),i(H,"id","organisms"),i(E,"class","heading-link"),i(E,"title","Permalink"),i(E,"aria-hidden","true"),i(E,"href","#component-gallery"),i(x,"id","component-gallery"),i(L,"href","https://histoire.dev"),i(L,"rel","nofollow"),i(g,"class","heading-link"),i(g,"title","Permalink"),i(g,"aria-hidden","true"),i(g,"href","#pages"),i(z,"id","pages"),i(A,"class","heading-link"),i(A,"title","Permalink"),i(A,"aria-hidden","true"),i(A,"href","#blog-posts"),i(B,"id","blog-posts"),i(I,"href","/blog-posts")},m(e,p){c(e,u,p),a(u,J),a(u,d),a(d,j),a(u,He),c(e,pe,p),c(e,T,p),a(T,w),a(w,Q),a(Q,Se),a(T,xe),c(e,ce,p),c(e,m,p),a(m,ze),a(m,N),a(N,Oe),a(m,Be),a(m,V),a(V,De),a(m,je),c(e,ue,p),c(e,C,p),a(C,_),a(_,X),a(X,Ne),a(C,Le),c(e,he,p),c(e,M,p),a(M,Me),c(e,fe,p),c(e,$,p),a($,b),a(b,Y),a(Y,We),a($,Ke),c(e,de,p),c(e,W,p),a(W,Ge),c(e,me,p),c(e,H,p),a(H,k),a(k,Z),a(Z,Ie),a(H,qe),c(e,ve,p),c(e,K,p),a(K,Re),c(e,we,p),sa(S,e,p),c(e,_e,p),c(e,x,p),a(x,E),a(E,ee),a(ee,Ue),a(x,Fe),c(e,be,p),c(e,v,p),a(v,Je),a(v,L),a(L,Qe),a(v,Ve),a(v,te),a(te,Xe),a(v,Ye),c(e,ke,p),c(e,z,p),a(z,g),a(g,ae),a(ae,Ze),a(z,et),c(e,Ee,p),c(e,G,p),a(G,tt),c(e,ge,p),c(e,O,p),a(O,y),a(y,at),a(y,se),a(se,st),a(y,ot),a(y,oe),a(oe,lt),a(y,nt),a(O,rt),a(O,P),a(P,it),a(P,le),a(le,pt),a(P,ct),a(P,ne),a(ne,ut),a(P,ht),c(e,ye,p),c(e,B,p),a(B,A),a(A,re),a(re,ft),a(B,dt),c(e,Pe,p),c(e,D,p),a(D,mt),a(D,I),a(I,vt),a(D,wt),Ae=!0},p(e,[p]){const ie={};p&1&&(ie.$$scope={dirty:p,ctx:e}),S.$set(ie)},i(e){Ae||(oa(S.$$.fragment,e),Ae=!0)},o(e){la(S.$$.fragment,e),Ae=!1},d(e){e&&t(u),e&&t(pe),e&&t(T),e&&t(ce),e&&t(m),e&&t(ue),e&&t(C),e&&t(he),e&&t(M),e&&t(fe),e&&t($),e&&t(de),e&&t(W),e&&t(me),e&&t(H),e&&t(ve),e&&t(K),e&&t(we),na(S,e),e&&t(_e),e&&t(x),e&&t(be),e&&t(v),e&&t(ke),e&&t(z),e&&t(Ee),e&&t(G),e&&t(ge),e&&t(O),e&&t(ye),e&&t(B),e&&t(Pe),e&&t(D)}}}class fa extends Yt{constructor(u){super(),Zt(this,u,null,ca,ea,{})}}export{fa as component};