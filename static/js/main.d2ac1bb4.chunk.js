(this["webpackJsonplibrary-phase-one-assignment-2020-sgunnTechtonic"]=this["webpackJsonplibrary-phase-one-assignment-2020-sgunnTechtonic"]||[]).push([[0],{67:function(e,t,c){},68:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(32),s=c(5),r=c(4),o=c(3),i=c(0),l=function(e){var t=Object(n.useState)(!1),c=Object(o.a)(t,2),a=c[0],s=c[1];return Object(i.jsxs)("div",{className:"mainnav__hamburger",onClick:function(){return s(!a)},children:[Object(i.jsx)("i",{className:"fas fa-bars mainnav__icon "}),a&&e.children]})},j=c(7),b=c.n(j),d="https://my-json-server.typicode.com/samanthagunn/libraryproject/books",h=function(){return b.a.get(d)},u=function(){return b.a.all(d)},O=function(e){var t=e.searchQuery,c=e.setSearchQuery,a=Object(r.f)(),s=Object(n.useState)([]),l=Object(o.a)(s,2),j=l[0],b=l[1],d=function(e,t){var c=t.toLowerCase();return Object(n.useEffect)((function(){h().then((function(e){var t=e.data;return b(t),t})).catch((function(e){return console.log(e)}))}),[c]),c?e.filter((function(e){var t=e.title.toLowerCase(),n=e.author.toLowerCase();return t.includes(c)||n.includes(c)})):null}(j,t);return Object(i.jsxs)("div",{children:[Object(i.jsxs)("form",{action:"/",method:"get",autoComplete:"off",onSubmit:function(e){a.push("?s=".concat(t)),e.preventDefault()},children:[Object(i.jsx)("input",{className:"mainnav__search--box",value:t,onInput:function(e){return c(e.target.value)},type:"search",placeholder:"Search Author/Title"}),Object(i.jsx)("button",{className:"mainnav__search--button",type:"submit",children:Object(i.jsx)("i",{className:"fa fa-search"})})]}),Object(i.jsx)("div",{children:d?Object(i.jsx)("ul",{className:"search__dropdown",id:"search-results",children:d.map((function(e,t){return Object(i.jsx)("div",{id:"result",className:"search__droplist ",onClick:function(){a.push("/details/".concat(e.id,"-").concat(e.title))},children:Object(i.jsxs)("p",{className:"mainnav__search--droplistitem",children:[e.title,",\xa0",e.author]})},t)}))}):null})]})},x=function(){var e=new URLSearchParams(window.location.search).get("s"),t=Object(n.useState)(e||""),c=Object(o.a)(t,2),a=c[0],s=c[1];return Object(i.jsx)("div",{className:"mainnav__search",children:Object(i.jsx)(O,{searchQuery:a,setSearchQuery:s})})},m=function(e){Object(r.f)();return Object(i.jsxs)("nav",{className:"mainnav__mobileburger",children:[Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:Object(i.jsx)(s.c,{to:"/",children:"Home"})}),Object(i.jsx)("li",{children:Object(i.jsx)(s.c,{to:"/Bookshelf",children:"Bookshelf"})}),Object(i.jsxs)("li",{children:[Object(i.jsx)(s.c,{to:"/AddBook",children:"Add Book"})," "]})]}),Object(i.jsx)("br",{})]})},p=function(e){var t=Object(n.useState)(!1),c=Object(o.a)(t,2),a=c[0],j=c[1];Object(r.f)();return Object(i.jsxs)("nav",{children:[Object(i.jsxs)("ul",{className:"mylinks",id:"mylinks",children:[Object(i.jsx)("li",{children:Object(i.jsx)(s.c,{exact:!0,to:"/",activeStyle:{color:"#32e0c4"},children:"Home"})}),Object(i.jsx)("li",{children:Object(i.jsx)(s.c,{to:"/Bookshelf",activeStyle:{color:"#32e0c4"},children:"Bookshelf"})}),Object(i.jsxs)("li",{children:[Object(i.jsx)(s.c,{to:"/AddBook",activeStyle:{color:"#32e0c4"},children:"Add Book"})," "]})]}),Object(i.jsx)("div",{className:"icon",children:Object(i.jsx)(l,{open:a,setOpen:j,children:Object(i.jsx)(m,{})})})]})};function f(){window.innerWidth;return Object(i.jsxs)("div",{className:"mainnav",children:[Object(i.jsx)("h1",{className:"mainnav__sitetitle",children:"The Library"}),Object(i.jsx)(p,{}),Object(i.jsx)("div",{className:"mainnav__hiddensearch",children:Object(i.jsx)(x,{})})]})}function g(){return Object(i.jsx)("footer",{children:Object(i.jsx)("p",{children:"Carefully Curated Content | Protected by Charms"})})}var v=function(){var e=Object(r.f)();return Object(i.jsxs)("main",{className:"home",children:[Object(i.jsx)("div",{className:"home__hero",children:Object(i.jsxs)("div",{className:"home__hero-text",children:[Object(i.jsx)("h1",{className:"home__hero-text--title",children:" Welcome to the Library of Magic"}),Object(i.jsx)("p",{children:"Your letter to Hogwarts is probably lost in the mail. Never fret, begin your studies here."})]})}),Object(i.jsxs)("section",{className:"home__main",children:[Object(i.jsx)("h2",{children:"About the Library"}),Object(i.jsx)("p",{children:"Founded by the fine founders of Magical Books we are pleased to offer a complete collection for young aspiring witches and wizards. No need to break into Gringotts or start counting your Galleons, Sickles, or Knuts due to a very genrous benefactor we are able to offer our collection at no charge."}),Object(i.jsx)("p",{children:"Peruse our collection at your leisure and enjoy the exceptionally curated content spanning acrossing the wizarding world."}),Object(i.jsx)("button",{className:"home__seebooks",onClick:function(){return e.push("./Bookshelf")},children:"See Books"}),Object(i.jsx)("p",{children:"Did you find that missing piece of magical literature? Add to the magical collection with just a swish and flick of the hand. "}),Object(i.jsx)("button",{className:"home__addbooks",onClick:function(){return e.push("./AddBook")},children:"Add a Book"})]}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{})]})},k=function(e){var t=e.book,c=t.id,n=t.title,a=t.author;return Object(i.jsx)(s.b,{to:"/details/".concat(c,"-").concat(n),children:Object(i.jsxs)("div",{className:"bookshelf__books",children:[Object(i.jsx)("img",{className:"bookshelf__books__cover",alt:n}),Object(i.jsx)("h3",{className:"bookshelf__books__title",children:n}),Object(i.jsx)("p",{className:"bookshelf__books__author",children:a})]})})},y=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){h().then((function(e){var t=e.data;return a(t)})).catch((function(e){return console.log(e)}))}),[]),Object(i.jsxs)("main",{children:[Object(i.jsx)("h2",{children:"Only the Best in Books!"}),Object(i.jsx)("div",{className:"search__mobile",children:Object(i.jsx)(x,{})}),c?Object(i.jsx)("div",{className:"bookshelf",children:c.map((function(e){return Object(i.jsx)(k,{book:e},e.id)}))}):Object(i.jsx)("div",{children:Object(i.jsx)("h3",{children:"No Books Available"})})]})},_=c(2),N=c(14),S=function(){var e=Object(n.useState)({title:"",author:"",synopsis:"",pubdate:"",pages:""}),t=Object(o.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(0),r=Object(o.a)(s,2),l=r[0],j=r[1],d=Object(n.useState)({}),h=Object(o.a)(d,2),O=h[0],x=h[1],m=Object(n.useState)({}),p=Object(o.a)(m,2),f=p[0],g=p[1],v=function(){var e={},t={},n=!0;return c.title.trim().length<3&&(e.titleShort="This title is too short",n=!1),c.author.trim().length<3&&(t.authorShort="Author name is too short",n=!1),x(e),g(t),n};return Object(i.jsx)("main",{children:Object(i.jsx)("section",{className:"add-book",children:Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=v();t&&(b.a.post(u,Object(_.a)(Object(_.a)({},c),{},{rating:l})),a(""),j(0),e.target.reset(),alert("Book successfully added!")),t||alert("Unable to add book, please try again")},children:[Object(i.jsxs)("fieldset",{children:[Object(i.jsxs)("label",{htmlFor:"title",children:[" Title ",Object.keys(O).map((function(e){return Object(i.jsx)("div",{style:{color:"red"},children:O[e]})}))," "]})," ",Object(i.jsx)("span",{children:Object(i.jsx)("input",{type:"text",id:"title",name:"title",value:c.title,onChange:function(e){return a(Object(_.a)(Object(_.a)({},c),{},{title:e.target.value}))}})})," ",Object(i.jsx)("br",{}),Object(i.jsxs)("label",{htmlFor:"author",children:["Author ",Object.keys(f).map((function(e){return Object(i.jsx)("div",{style:{color:"red"},children:f[e]})}))]}),Object(i.jsxs)("span",{children:[" ",Object(i.jsx)("input",{type:"text",id:"author",name:"author",value:c.author,onChange:function(e){return a(Object(_.a)(Object(_.a)({},c),{},{author:e.target.value}))}})]}),Object(i.jsx)("br",{}),Object(i.jsx)("label",{htmlFor:"synopsis",children:"Synopsis"}),Object(i.jsxs)("span",{children:[" ",Object(i.jsx)("textarea",{id:"synopsis",name:"synopsis",value:c.synopsis,onChange:function(e){return a(Object(_.a)(Object(_.a)({},c),{},{synopsis:e.target.value}))}})]}),Object(i.jsxs)("div",{className:"book-drop",children:[Object(i.jsxs)("div",{className:"book-drop__pubdate",children:[Object(i.jsx)("label",{htmlFor:"published",children:"Published"})," ",Object(i.jsx)("span",{children:Object(i.jsx)("input",{type:"date",id:"pubdate",name:"pubdate",value:c.pubdate,onChange:function(e){return a(Object(_.a)(Object(_.a)({},c),{},{pubdate:e.target.value}))}})})]}),Object(i.jsxs)("div",{className:"book-drop__pages",children:[Object(i.jsx)("label",{htmlFor:"pages",children:"Pages"}),Object(i.jsx)("input",{type:"number",min:"1",name:"pages",value:c.pages,onChange:function(e){return a(Object(_.a)(Object(_.a)({},c),{},{pages:e.target.value}))}})]})]}),Object(i.jsx)("br",{}),Object(i.jsx)("label",{htmlFor:"rating",children:"Star Rating"}),Object(i.jsx)(N.a,{id:"clickable",value:"starRating",clickable:!0,noBorder:!0,rating:l,onRatingChange:function(e){j(e)},colors:{rear:"gray",mask:"#04898b"},onChange:function(e){return j(e.target.value)}}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsxs)("div",{className:"formbuttons",children:[Object(i.jsx)("button",{type:"submit",children:"Submit"}),Object(i.jsx)("button",{type:"reset",onClick:function(){return a(""),void j(0)},value:"Cancel",children:"Cancel"})]})]}),Object(i.jsxs)("div",{className:"book-cover",children:[Object(i.jsx)("label",{htmlFor:"book-cover",children:"Add Image"}),Object(i.jsx)("input",{type:"file",id:"book-cover",name:"book-cover",accept:"image/png, image/jpeg"})]})]})})})},C=function(){return Object(i.jsxs)("main",{children:[Object(i.jsx)("h2",{children:"Add Book to Library"}),Object(i.jsx)(S,{})]})},B=function(e){var t=e.book,c=t.id,n=t.title,a=t.rating,r=t.author,o=t.pages,l=t.synopsis,j=t.pubdate.split("-").reverse().join("/");return Object(i.jsxs)("main",{className:"detailpage",children:[Object(i.jsxs)("section",{className:"detailpage__bookcover",children:[Object(i.jsx)("img",{height:"400px"}),Object(i.jsxs)("div",{className:"bookcover__rating",children:[Object(i.jsx)("label",{htmlFor:"rating",children:"Star Rating"}),Object(i.jsx)(N.a,{id:"clickable",value:"starRating",noBorder:!0,rating:a,colors:{rear:"gray",mask:"#04898b"},onChange:function(e){return setRating(e.target.value)}})]})]}),Object(i.jsxs)("section",{className:"detailpage__details",children:[Object(i.jsx)("h1",{children:n}),Object(i.jsx)("h2",{children:r}),Object(i.jsxs)("p",{className:"details__publish",children:["Published: ",j]}),Object(i.jsxs)("p",{children:["Number of Pages: ",o]}),Object(i.jsxs)("p",{children:["Synopsis: ",l]}),Object(i.jsx)(s.b,{to:"/Edit/".concat(c),children:Object(i.jsx)("button",{className:"details__editbook",children:"Edit"})})]}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{})]})},w=function(e){var t=e.match.params.id,c=Object(n.useState)(null),a=Object(o.a)(c,2),s=a[0],r=a[1];return Object(n.useEffect)((function(){b.a.get("".concat("https://my-json-server.typicode.com/samanthagunn/libraryproject/books","/").concat(t)).then((function(e){var t=e.data;return r(t)})).catch((function(e){return console.log(e)}))}),[t]),Object(i.jsx)("main",{children:Object(i.jsx)("div",{children:s&&Object(i.jsx)(B,{book:s})})})},F=function(e){var t=Object(n.useState)({id:e.book.id,title:e.book.title,author:e.book.author,synopsis:e.book.synopsis,pudate:e.book.pubdate,pages:e.book.pages}),c=Object(o.a)(t,2),a=c[0],l=c[1],j=Object(n.useState)(e.book.rating),d=Object(o.a)(j,2),h=d[0],O=d[1],x=Object(r.f)();return Object(i.jsx)("main",{children:Object(i.jsxs)("section",{className:"add-book",children:[Object(i.jsx)("form",{onSubmit:function(e){x.push("/bookshelf"),e.preventDefault(),b.a.put("".concat(u,"/").concat(a.id),Object(_.a)(Object(_.a)({},a),{},{rating:h})).then((function(e){return console.log(e.data)})),e.target.reset()},children:Object(i.jsxs)("fieldset",{children:[Object(i.jsx)("label",{htmlFor:"title",children:" Title  "})," ",Object(i.jsx)("span",{children:Object(i.jsx)("input",{type:"text",id:"title",name:"title",value:a.title,onChange:function(e){return l(Object(_.a)(Object(_.a)({},a),{},{title:e.target.value}))}})})," ",Object(i.jsx)("br",{}),Object(i.jsx)("label",{htmlFor:"author",children:"Author "}),Object(i.jsxs)("span",{children:[" ",Object(i.jsx)("input",{type:"text",id:"author",name:"author",value:a.author,onChange:function(e){return l(Object(_.a)(Object(_.a)({},a),{},{author:e.target.value}))}})]}),Object(i.jsx)("br",{}),Object(i.jsx)("label",{htmlFor:"synopsis",children:"Synopsis"}),Object(i.jsxs)("span",{children:[" ",Object(i.jsx)("textarea",{id:"synopsis",name:"synopsis",value:a.synopsis,onChange:function(e){return l(Object(_.a)(Object(_.a)({},a),{},{synopsis:e.target.value}))}})]}),Object(i.jsxs)("div",{className:"book-drop",children:[Object(i.jsxs)("div",{className:"book-drop__pubdate",children:[Object(i.jsx)("label",{htmlFor:"published",children:"Published"})," ",Object(i.jsx)("span",{children:Object(i.jsx)("input",{type:"date",id:"pubdate",name:"pubdate",value:a.pubdate,onChange:function(e){return l(Object(_.a)(Object(_.a)({},a),{},{pubdate:e.target.value}))}})})]}),Object(i.jsxs)("div",{className:"book-drop__pages",children:[Object(i.jsx)("label",{htmlFor:"pages",children:"Pages"}),Object(i.jsx)("input",{type:"number",min:"1",name:"pages",value:a.pages,onChange:function(e){return l(Object(_.a)(Object(_.a)({},a),{},{pages:e.target.value}))}})]})]}),Object(i.jsx)("br",{}),Object(i.jsx)("label",{htmlFor:"rating",children:"Star Rating"}),Object(i.jsx)(N.a,{id:"clickable",value:"starRating",clickable:!0,noBorder:!0,rating:h,onRatingChange:function(e){O(e)},colors:{rear:"gray",mask:"#04898b"},onChange:function(e){return O(e.target.value)}}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsxs)("div",{className:"formbuttons",children:[Object(i.jsx)("button",{type:"submit",children:"Submit"}),Object(i.jsx)(s.b,{to:"/bookshelf",children:Object(i.jsx)("button",{type:"cancel",children:"Cancel"})})," "]})]})}),Object(i.jsxs)("div",{className:"book-cover",children:[Object(i.jsx)("label",{htmlFor:"book-cover",children:"Add Image"}),Object(i.jsx)("input",{type:"file",id:"book-cover",name:"book-cover",accept:"image/png, image/jpeg"}),Object(i.jsx)("br",{})," ",Object(i.jsx)("button",{id:"delete",onClick:function(){return e.deleteBook(e.book.id)},children:"Delete Book"})]})]})})},A=function(e){var t=e.match,c=e.history,a=t.params.id,s=Object(n.useState)(null),r=Object(o.a)(s,2),l=r[0],j=r[1],d="http://localhost:3000/books/";return Object(n.useEffect)((function(){b.a.get("".concat(d,"/").concat(a)).then((function(e){var t=e.data;return j(t)})).catch((function(e){return console.log(e)}))}),[a]),Object(i.jsxs)("main",{children:[Object(i.jsx)("h2",{children:" Edit Book"}),Object(i.jsx)("section",{className:"add-book",children:l&&Object(i.jsx)(F,{book:l,deleteBook:function(e){b.a.delete("".concat(d,"/").concat(e)).then((function(e){return console.log(e.data)})).then(alert("Book has been deleted")).then((function(){c.push("/bookshelf")}))}},a)})]})},E=c(36),R=c(37),P=c(39),D=c(38),L=function(e){Object(P.a)(c,e);var t=Object(D.a)(c);function c(){var e;Object(E.a)(this,c);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={error:!1},e}return Object(R.a)(c,[{key:"componentDidCatch",value:function(e,t){console.log(e,t)}},{key:"render",value:function(){return this.state.error?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{children:"Bullocks, we have a problem!"}),Object(i.jsx)("img",{src:"https://pa1.narvii.com/6171/d9cbe8f811580bdafdb4a1b8c7f3917b9539f1ef_hq.gif",width:"100%",alt:"Finnigan Explosion"})]}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{error:e}}}]),c}(n.Component),T=function(){return Object(i.jsx)(L,{children:Object(i.jsxs)(s.a,{basename:"/libraryproject",children:[Object(i.jsx)(f,{}),Object(i.jsxs)(r.c,{children:[Object(i.jsx)(r.a,{exact:!0,path:"/",component:v}),Object(i.jsx)(r.a,{exact:!0,path:"/Bookshelf",component:y}),Object(i.jsx)(r.a,{exact:!0,path:"/AddBook",component:C}),Object(i.jsx)(r.a,{exact:!0,path:"/Details/:id-:title",component:w}),Object(i.jsx)(r.a,{exact:!0,path:"/Edit/:id",component:A})]}),Object(i.jsx)(g,{})]})})};c(67);Object(a.render)(Object(i.jsx)(T,{}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.d2ac1bb4.chunk.js.map