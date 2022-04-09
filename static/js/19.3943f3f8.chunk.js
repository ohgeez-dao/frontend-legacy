(this.webpackJsonp=this.webpackJsonp||[]).push([[19],{1166:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(3),c=a(17),u=a(53),s=a(73);t.a=function(e){var t=e.chainId,a=void 0===t?1:t,n=Object(u.a)(),i={1:"Mainnet",42:"Kovan"}[a];return r.a.createElement(l.a,{style:{flex:1,alignItems:"center",justifyContent:"center"}},r.a.createElement(s.a,{light:!0,style:{textAlign:"center",marginVertical:c.g.large}},n("change-network-to",{networkName:i})))}},1167:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(17),c=a(37),u=a(53),s=a(73);t.a=function(e){var t=Object(u.a)(),a=Object(c.a)(),n=a.textDark,i=a.textLight,o=a.placeholder;return r.a.createElement(s.a,{style:{fontSize:l.d?28:20,marginBottom:l.g.normal,color:e.disabled?o:e.amount?n:i}},e.disabled?t("n/a"):e.amount?e.amount+" "+(e.suffix||""):t("fetching"))}},1168:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(81),c=a(17);t.a=function(){return r.a.createElement(l.a,{size:"large",style:{marginVertical:c.g.large}})}},1318:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a.n(n),l=a(16),c=a.n(l),u=a(0),s=a.n(u),i=a(7),o=a(3),m=a(28),f=a(127),g=a.n(f),d=a(1167),p=a(385),v=a(298),b=a(1166),E=a(386),x=a(387),h=a(1168),y=a(73),w=a(388),j=a(391),O=a(389),k=a(17),S=a(51),A=a(37),C=a(1245),N=a(1246),P=function(e){return new m.Contract(N.a,C.a,e)},B=function(){var e=Object(u.useContext)(S.b).signer,t=Object(u.useState)(!0),a=c()(t,2),n=a[0],l=a[1],s=Object(u.useState)(),i=c()(s,2),o=i[0],f=i[1],d=Object(u.useState)(),p=c()(d,2),v=p[0],b=p[1],E=Object(u.useState)(),x=c()(E,2),h=x[0],y=x[1],w=Object(u.useState)(!1),j=c()(w,2),O=j[0],k=j[1],A=Object(u.useState)(0),C=c()(A,2),B=C[0],D=C[1];g()((function(){var t,a,n,c,u,s;return r.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:if(!e){i.next=31;break}return l(!0),f(void 0),b(void 0),y(void 0),i.prev=5,t=P(e),i.next=9,r.a.awrap(e.getAddress());case 9:return a=i.sent,n=t.filters.Start(null,null,a),i.next=13,r.a.awrap(t.queryFilter(n,N.b.blockNumber));case 13:if(!((c=i.sent).length>0)){i.next=28;break}return f(c[0]),u=c[0].args.id,i.t0=b,i.next=20,r.a.awrap(t.pendingAmount(u));case 20:return i.t1=i.sent,(0,i.t0)(i.t1),s=t.filters.Claim(u),i.t2=y,i.next=26,r.a.awrap(t.queryFilter(s,N.b.blockNumber));case 26:i.t3=i.sent.map((function(e){return e.args.amount})).reduce((function(e,t){return e.add(t)}),m.BigNumber.from("0")),(0,i.t2)(i.t3);case 28:return i.prev=28,l(!1),i.finish(28);case 31:case"end":return i.stop()}}),null,null,[[5,,28,31]],Promise)}),[e,B]);return{loading:n,startEvent:o,pendingAmount:v,claimedAmount:h,onClaim:function(){var t,a;return r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e||!o){n.next=13;break}return n.prev=1,k(!0),t=P(e),n.next=6,r.a.awrap(t.claim(o.args.id,m.constants.AddressZero,"0x"));case 6:return a=n.sent,n.next=9,r.a.awrap(a.wait());case 9:D(Date.now());case 10:return n.prev=10,k(!1),n.finish(10);case 13:case"end":return n.stop()}}),null,null,[[1,,10,13]],Promise)},claiming:O}},D=a(53),I=a(390),L=function(){var e=Object(u.useContext)(S.b).chainId,t=B();return 1!==e?s.a.createElement(b.a,null):s.a.createElement(o.a,{style:{marginTop:k.g.large}},t.loading?s.a.createElement(h.a,null):t.startEvent?s.a.createElement(T,{state:t}):s.a.createElement(V,{state:t}))},T=function(e){var t=e.state,a=Object(D.a)(),n=Object(A.a)().secondary,l=Object(u.useState)(),i=c()(l,2),f=i[0],p=i[1];return g()((function(){var e;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(!t.startEvent){a.next=5;break}return a.next=3,r.a.awrap(t.startEvent.getBlock());case 3:e=a.sent,p(new Date(1e3*(e.timestamp+t.startEvent.args.duration)));case 5:case"end":return a.stop()}}),null,null,null,Promise)}),[t.startEvent]),s.a.createElement(o.a,null,s.a.createElement(y.a,{caption:!0,light:!0},a("pending-amount")),s.a.createElement(d.a,{amount:m.utils.formatEther(t.pendingAmount),suffix:"LEVX"}),s.a.createElement(y.a,{light:!0,style:{marginTop:k.g.small}},a("claim-payout-desc",{full:m.utils.formatEther(t.startEvent.args.amount),claimed:m.utils.formatEther(t.claimedAmount||"0"),endsAt:(null==f?void 0:f.toLocaleString())||""})),s.a.createElement(v.a,{type:"outline",color:n,title:a("claim-payout"),loading:t.claiming,onPress:t.onClaim,style:{marginTop:k.g.normal}}))},V=function(e){e.state;var t=Object(D.a)();return s.a.createElement(v.a,{disabled:!0,title:t("no-payout")})};t.default=function(){var e=Object(D.a)();return s.a.createElement(I.a,null,s.a.createElement(E.a,null,s.a.createElement(p.a,null),s.a.createElement(x.a,null,s.a.createElement(w.a,{text:e("levx-payouts")}),s.a.createElement(y.a,{light:!0},e("levx-payouts-desc")),s.a.createElement(L,null)),"web"===i.a.OS&&s.a.createElement(j.a,null)),s.a.createElement(O.a,null))}}}]);
//# sourceMappingURL=19.3943f3f8.chunk.js.map