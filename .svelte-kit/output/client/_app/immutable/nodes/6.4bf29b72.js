import{S as Yt,i as Zt,s as ea,k as l,q as s,a as h,y as ta,l as n,m as r,r as o,h as t,c as f,z as aa,n as i,b as c,G as a,A as sa,g as oa,d as la,B as na,M as ra}from"../chunks/index.3978d761.js";import{C as ia}from"../chunks/CodeBlock.f1d5a3c8.js";function pa($e){let u,J=`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Header</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Hero</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>About</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Footer</span> <span class="token punctuation">/></span></span></code>`;return{c(){u=l("pre"),this.h()},l(d){u=n(d,"PRE",{class:!0});var j=r(u);j.forEach(t),this.h()},h(){i(u,"class","language-html")},m(d,j){c(d,u,j),u.innerHTML=J},p:ra,d(d){d&&t(u)}}}function ca($e){let u,J,d,j,He,pe,T,w,Q,Se,xe,ce,m,ze,M,Oe,Be,V,De,je,ue,C,_,X,Me,Ne,he,L,Le,fe,$,b,Y,We,Ke,de,W,Ge,me,H,k,Z,qe,Ie,ve,K,Fe,we,S,_e,x,E,ee,Re,Ue,be,v,Je,N,Qe,Ve,te,Xe,Ye,ke,z,g,ae,Ze,et,Ee,G,tt,ge,O,y,at,se,st,ot,oe,lt,nt,rt,P,it,le,pt,ct,ne,ut,ht,ye,B,A,re,ft,dt,Pe,D,mt,q,vt,wt,Ae;return S=new ia({props:{lang:"html",filename:"+page.svelte",$$slots:{default:[pa]},$$scope:{ctx:$e}}}),{c(){u=l("p"),J=s("This project follows the basic "),d=l("a"),j=s("SvelteKit structure"),He=s(", with some added conventions to make customization a post-management easier."),pe=h(),T=l("h2"),w=l("a"),Q=l("span"),Se=s("#"),xe=s("Components"),ce=h(),m=l("p"),ze=s("The components are organized following the "),M=l("a"),Oe=s("Atomic Design"),Be=s(" principles, albeit somewhat simplified. Components are in the "),V=l("code"),De=s("src/lib/components"),je=s(" folder, and are organized in the following way:"),ue=h(),C=l("h3"),_=l("a"),X=l("span"),Me=s("#"),Ne=s("Atoms"),he=h(),L=l("p"),Le=s("Atoms are the most basic components, which can be seen as building blocks for other components. They’re small and self-contained, and do only one thing. Examples of atoms are buttons, inputs, and tags."),fe=h(),$=l("h3"),b=l("a"),Y=l("span"),We=s("#"),Ke=s("Molecules"),de=h(),W=l("p"),Ge=s("Molecules are groups of atoms that work together to form a more complex component. Examples of molecules are cards, groups of links, or an alert callout."),me=h(),H=l("h3"),k=l("a"),Z=l("span"),qe=s("#"),Ie=s("Organisms"),ve=h(),K=l("p"),Fe=s("Organisms, in this project, are code blocks that represent a section of a page, such as the header, footer and hero section. They can be used directly in a page as a sort of building block, so the page’s code can be as simple as this:"),we=h(),ta(S.$$.fragment),_e=h(),x=l("h2"),E=l("a"),ee=l("span"),Re=s("#"),Ue=s("Component Gallery"),be=h(),v=l("p"),Je=s("This project uses "),N=l("a"),Qe=s("Histoire"),Ve=s(" to be able to see and develop components in isolation. To open it, run "),te=l("code"),Xe=s("npm run story:dev"),Ye=s(". This way you can customize and build new components with placeholder content and without worrying about where to put them in a page."),ke=h(),z=l("h2"),g=l("a"),ae=l("span"),Ze=s("#"),et=s("Pages"),Ee=h(),G=l("p"),tt=s("Pages obey the default SvelteKit structure, but can be summarized as follows:"),ge=h(),O=l("ul"),y=l("li"),at=s("There are two different file types: the pages ("),se=l("code"),st=s("+page.svelte"),ot=s(") and the layouts ("),oe=l("code"),lt=s("+layout.svelte"),nt=s("). Layouts are a way to reuse the same structure between different pages without having to duplicate code;"),rt=h(),P=l("li"),it=s("There are two different page layouts in this site: the “Waves” layout, which all pages inside the "),le=l("code"),pt=s("(waves)"),ct=s(" folder use, and the “Blog Article” layout, which all pages inside the "),ne=l("code"),ut=s("(blog-article)"),ht=s(" folder use;"),ye=h(),B=l("h2"),A=l("a"),re=l("span"),ft=s("#"),dt=s("Blog Posts"),Pe=h(),D=l("p"),mt=s("To know how blog posts work and how to create new ones, check out "),q=l("a"),vt=s("How Blog Posts Work"),wt=s("."),this.h()},l(e){u=n(e,"P",{});var p=r(u);J=o(p,"This project follows the basic "),d=n(p,"A",{href:!0,rel:!0});var ie=r(d);j=o(ie,"SvelteKit structure"),ie.forEach(t),He=o(p,", with some added conventions to make customization a post-management easier."),p.forEach(t),pe=f(e),T=n(e,"H2",{id:!0});var _t=r(T);w=n(_t,"A",{class:!0,title:!0,"aria-hidden":!0,href:!0});var At=r(w);Q=n(At,"SPAN",{});var Tt=r(Q);Se=o(Tt,"#"),Tt.forEach(t),At.forEach(t),xe=o(_t,"Components"),_t.forEach(t),ce=f(e),m=n(e,"P",{});var I=r(m);ze=o(I,"The components are organized following the "),M=n(I,"A",{href:!0,rel:!0});var Ct=r(M);Oe=o(Ct,"Atomic Design"),Ct.forEach(t),Be=o(I," principles, albeit somewhat simplified. Components are in the "),V=n(I,"CODE",{});var $t=r(V);De=o($t,"src/lib/components"),$t.forEach(t),je=o(I," folder, and are organized in the following way:"),I.forEach(t),ue=f(e),C=n(e,"H3",{id:!0});var bt=r(C);_=n(bt,"A",{class:!0,title:!0,"aria-hidden":!0,href:!0});var Ht=r(_);X=n(Ht,"SPAN",{});var St=r(X);Me=o(St,"#"),St.forEach(t),Ht.forEach(t),Ne=o(bt,"Atoms"),bt.forEach(t),he=f(e),L=n(e,"P",{});var xt=r(L);Le=o(xt,"Atoms are the most basic components, which can be seen as building blocks for other components. They’re small and self-contained, and do only one thing. Examples of atoms are buttons, inputs, and tags."),xt.forEach(t),fe=f(e),$=n(e,"H3",{id:!0});var kt=r($);b=n(kt,"A",{class:!0,title:!0,"aria-hidden":!0,href:!0});var zt=r(b);Y=n(zt,"SPAN",{});var Ot=r(Y);We=o(Ot,"#"),Ot.forEach(t),zt.forEach(t),Ke=o(kt,"Molecules"),kt.forEach(t),de=f(e),W=n(e,"P",{});var Bt=r(W);Ge=o(Bt,"Molecules are groups of atoms that work together to form a more complex component. Examples of molecules are cards, groups of links, or an alert callout."),Bt.forEach(t),me=f(e),H=n(e,"H3",{id:!0});var Et=r(H);k=n(Et,"A",{class:!0,title:!0,"aria-hidden":!0,href:!0});var Dt=r(k);Z=n(Dt,"SPAN",{});var jt=r(Z);qe=o(jt,"#"),jt.forEach(t),Dt.forEach(t),Ie=o(Et,"Organisms"),Et.forEach(t),ve=f(e),K=n(e,"P",{});var Mt=r(K);Fe=o(Mt,"Organisms, in this project, are code blocks that represent a section of a page, such as the header, footer and hero section. They can be used directly in a page as a sort of building block, so the page’s code can be as simple as this:"),Mt.forEach(t),we=f(e),aa(S.$$.fragment,e),_e=f(e),x=n(e,"H2",{id:!0});var gt=r(x);E=n(gt,"A",{class:!0,title:!0,"aria-hidden":!0,href:!0});var Nt=r(E);ee=n(Nt,"SPAN",{});var Lt=r(ee);Re=o(Lt,"#"),Lt.forEach(t),Nt.forEach(t),Ue=o(gt,"Component Gallery"),gt.forEach(t),be=f(e),v=n(e,"P",{});var F=r(v);Je=o(F,"This project uses "),N=n(F,"A",{href:!0,rel:!0});var Wt=r(N);Qe=o(Wt,"Histoire"),Wt.forEach(t),Ve=o(F," to be able to see and develop components in isolation. To open it, run "),te=n(F,"CODE",{});var Kt=r(te);Xe=o(Kt,"npm run story:dev"),Kt.forEach(t),Ye=o(F,". This way you can customize and build new components with placeholder content and without worrying about where to put them in a page."),F.forEach(t),ke=f(e),z=n(e,"H2",{id:!0});var yt=r(z);g=n(yt,"A",{class:!0,title:!0,"aria-hidden":!0,href:!0});var Gt=r(g);ae=n(Gt,"SPAN",{});var qt=r(ae);Ze=o(qt,"#"),qt.forEach(t),Gt.forEach(t),et=o(yt,"Pages"),yt.forEach(t),Ee=f(e),G=n(e,"P",{});var It=r(G);tt=o(It,"Pages obey the default SvelteKit structure, but can be summarized as follows:"),It.forEach(t),ge=f(e),O=n(e,"UL",{});var Te=r(O);y=n(Te,"LI",{});var R=r(y);at=o(R,"There are two different file types: the pages ("),se=n(R,"CODE",{});var Ft=r(se);st=o(Ft,"+page.svelte"),Ft.forEach(t),ot=o(R,") and the layouts ("),oe=n(R,"CODE",{});var Rt=r(oe);lt=o(Rt,"+layout.svelte"),Rt.forEach(t),nt=o(R,"). Layouts are a way to reuse the same structure between different pages without having to duplicate code;"),R.forEach(t),rt=f(Te),P=n(Te,"LI",{});var U=r(P);it=o(U,"There are two different page layouts in this site: the “Waves” layout, which all pages inside the "),le=n(U,"CODE",{});var Ut=r(le);pt=o(Ut,"(waves)"),Ut.forEach(t),ct=o(U," folder use, and the “Blog Article” layout, which all pages inside the "),ne=n(U,"CODE",{});var Jt=r(ne);ut=o(Jt,"(blog-article)"),Jt.forEach(t),ht=o(U," folder use;"),U.forEach(t),Te.forEach(t),ye=f(e),B=n(e,"H2",{id:!0});var Pt=r(B);A=n(Pt,"A",{class:!0,title:!0,"aria-hidden":!0,href:!0});var Qt=r(A);re=n(Qt,"SPAN",{});var Vt=r(re);ft=o(Vt,"#"),Vt.forEach(t),Qt.forEach(t),dt=o(Pt,"Blog Posts"),Pt.forEach(t),Pe=f(e),D=n(e,"P",{});var Ce=r(D);mt=o(Ce,"To know how blog posts work and how to create new ones, check out "),q=n(Ce,"A",{href:!0});var Xt=r(q);vt=o(Xt,"How Blog Posts Work"),Xt.forEach(t),wt=o(Ce,"."),Ce.forEach(t),this.h()},h(){i(d,"href","https://kit.svelte.dev/docs/project-structure"),i(d,"rel","nofollow"),i(w,"class","heading-link"),i(w,"title","Permalink"),i(w,"aria-hidden","true"),i(w,"href","#components"),i(T,"id","components"),i(M,"href","https://medium.com/@WeAreMobile1st/atomic-design-getting-started-916bc81bad0e"),i(M,"rel","nofollow"),i(_,"class","heading-link"),i(_,"title","Permalink"),i(_,"aria-hidden","true"),i(_,"href","#atoms"),i(C,"id","atoms"),i(b,"class","heading-link"),i(b,"title","Permalink"),i(b,"aria-hidden","true"),i(b,"href","#molecules"),i($,"id","molecules"),i(k,"class","heading-link"),i(k,"title","Permalink"),i(k,"aria-hidden","true"),i(k,"href","#organisms"),i(H,"id","organisms"),i(E,"class","heading-link"),i(E,"title","Permalink"),i(E,"aria-hidden","true"),i(E,"href","#component-gallery"),i(x,"id","component-gallery"),i(N,"href","https://histoire.dev"),i(N,"rel","nofollow"),i(g,"class","heading-link"),i(g,"title","Permalink"),i(g,"aria-hidden","true"),i(g,"href","#pages"),i(z,"id","pages"),i(A,"class","heading-link"),i(A,"title","Permalink"),i(A,"aria-hidden","true"),i(A,"href","#blog-posts"),i(B,"id","blog-posts"),i(q,"href","/blog-posts")},m(e,p){c(e,u,p),a(u,J),a(u,d),a(d,j),a(u,He),c(e,pe,p),c(e,T,p),a(T,w),a(w,Q),a(Q,Se),a(T,xe),c(e,ce,p),c(e,m,p),a(m,ze),a(m,M),a(M,Oe),a(m,Be),a(m,V),a(V,De),a(m,je),c(e,ue,p),c(e,C,p),a(C,_),a(_,X),a(X,Me),a(C,Ne),c(e,he,p),c(e,L,p),a(L,Le),c(e,fe,p),c(e,$,p),a($,b),a(b,Y),a(Y,We),a($,Ke),c(e,de,p),c(e,W,p),a(W,Ge),c(e,me,p),c(e,H,p),a(H,k),a(k,Z),a(Z,qe),a(H,Ie),c(e,ve,p),c(e,K,p),a(K,Fe),c(e,we,p),sa(S,e,p),c(e,_e,p),c(e,x,p),a(x,E),a(E,ee),a(ee,Re),a(x,Ue),c(e,be,p),c(e,v,p),a(v,Je),a(v,N),a(N,Qe),a(v,Ve),a(v,te),a(te,Xe),a(v,Ye),c(e,ke,p),c(e,z,p),a(z,g),a(g,ae),a(ae,Ze),a(z,et),c(e,Ee,p),c(e,G,p),a(G,tt),c(e,ge,p),c(e,O,p),a(O,y),a(y,at),a(y,se),a(se,st),a(y,ot),a(y,oe),a(oe,lt),a(y,nt),a(O,rt),a(O,P),a(P,it),a(P,le),a(le,pt),a(P,ct),a(P,ne),a(ne,ut),a(P,ht),c(e,ye,p),c(e,B,p),a(B,A),a(A,re),a(re,ft),a(B,dt),c(e,Pe,p),c(e,D,p),a(D,mt),a(D,q),a(q,vt),a(D,wt),Ae=!0},p(e,[p]){const ie={};p&1&&(ie.$$scope={dirty:p,ctx:e}),S.$set(ie)},i(e){Ae||(oa(S.$$.fragment,e),Ae=!0)},o(e){la(S.$$.fragment,e),Ae=!1},d(e){e&&t(u),e&&t(pe),e&&t(T),e&&t(ce),e&&t(m),e&&t(ue),e&&t(C),e&&t(he),e&&t(L),e&&t(fe),e&&t($),e&&t(de),e&&t(W),e&&t(me),e&&t(H),e&&t(ve),e&&t(K),e&&t(we),na(S,e),e&&t(_e),e&&t(x),e&&t(be),e&&t(v),e&&t(ke),e&&t(z),e&&t(Ee),e&&t(G),e&&t(ge),e&&t(O),e&&t(ye),e&&t(B),e&&t(Pe),e&&t(D)}}}class fa extends Yt{constructor(u){super(),Zt(this,u,null,ca,ea,{})}}export{fa as component};
