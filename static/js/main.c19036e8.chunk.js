(this["webpackJsonpburger-app"]=this["webpackJsonpburger-app"]||[]).push([[0],[,function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"n",(function(){return r})),n.d(t,"p",(function(){return c})),n.d(t,"f",(function(){return o})),n.d(t,"k",(function(){return i})),n.d(t,"l",(function(){return u})),n.d(t,"j",(function(){return s})),n.d(t,"m",(function(){return l})),n.d(t,"h",(function(){return d})),n.d(t,"i",(function(){return f})),n.d(t,"g",(function(){return b})),n.d(t,"d",(function(){return p})),n.d(t,"e",(function(){return h})),n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return g})),n.d(t,"o",(function(){return _}));var a="ADD_INGREDIENT",r="REMOVE_INGREDIENT",c="SET_INGREDIENTS",o="FETCH_INGREDIENTS_FAILED",i="PURCHASE_BURGER_START",u="PURCHASE_BURGER_SUCCESS",s="PURCHASE_BURGER_FAIL",l="PURCHASE_INIT",d="FETCH_ORDERS_START",f="FETCH_ORDERS_SUCCESS",b="FETCH_ORDERS_FAIL",p="AUTH_START",h="Auth_SUCCESS",m="AUTH_FAIL",g="AUTH_LOGOUT",_="SET_AUTH_REDIRECT_PATH"},,function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c}));var a=n(24),r=function(e,t){return Object(a.a)({},e,{},t)},c=function(e,t){var n=!0;return!t||(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),n)}},,,,,,,,function(e,t,n){"use strict";t.a=function(e){return e.children}},,,,,function(e,t,n){"use strict";var a=n(1),r=n(21),c=function(e){return{type:a.a,ingredientName:e}},o=function(e){return{type:a.n,ingredientName:e}},i=function(){return function(e){r.a.get("https://react-my-burger-c7bc9.firebaseio.com/ingredients.json").then((function(t){var n;e((n=t.data,{type:a.p,ingredients:n}))})).catch((function(t){e({type:a.f})}))}},u=n(24),s=function(e,t){return function(n){n({type:a.k}),r.a.post("/orders.json?auth="+t,e).then((function(t){n(function(e,t){return{type:a.l,orderId:e,orderData:t}}(t.data.name,e))})).catch((function(e){n(function(e){return{type:a.j,error:e}}(e))}))}},l=function(){return{type:a.m}},d=function(e,t){return function(n){n({type:a.h});var c="?auth="+e+'&orderBy="userId"&equalTo="'+t+'"';r.a.get("/orders.json"+c).then((function(e){var t,r=[];for(var c in e.data)r.push(Object(u.a)({},e.data[c],{id:c}));n((t=r,{type:a.i,orders:t}))})).catch((function(e){var t;n((t=e,{type:a.j,error:t}))}))}},f=n(33),b=n.n(f),p=function(e,t){return{type:a.e,idToken:e,userId:t}},h=function(){return localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),localStorage.removeItem("userId"),{type:a.c}},m=function(e){return function(t){setTimeout((function(){t(h())}),1e3*e)}},g=function(e,t,n){return function(r){r({type:a.d});var c={email:e,password:t,returnSecureToken:!0},o="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCjCLHXJU6LJzXoRRc87Ssl8PuKEWDE4w0";n||(o="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCjCLHXJU6LJzXoRRc87Ssl8PuKEWDE4w0"),b.a.post(o,c).then((function(e){var t=new Date((new Date).getTime()+1e3*e.data.expiresIn);console.log("setting again"),localStorage.setItem("token",e.data.idToken),localStorage.setItem("expirationDate",t),localStorage.setItem("userId",e.data.localId),r(p(e.data.idToken,e.data.localId)),r(m(e.data.expiresIn))})).catch((function(e){var t;r((t=e.response.data.error,{type:a.b,error:t}))}))}},_=function(e){return{type:a.o,path:e}},E=function(){return function(e){var t=localStorage.getItem("token");if(t){var n=new Date(localStorage.getItem("expirationDate"));if(n>new Date){var a=localStorage.getItem("userId");e(p(t,a)),e(m((n.getTime()-(new Date).getTime())/1e3))}else e(h())}else e(h())}};n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return o})),n.d(t,"f",(function(){return i})),n.d(t,"i",(function(){return s})),n.d(t,"h",(function(){return l})),n.d(t,"e",(function(){return d})),n.d(t,"c",(function(){return g})),n.d(t,"g",(function(){return h})),n.d(t,"j",(function(){return _})),n.d(t,"d",(function(){return E}))},,,function(e,t,n){e.exports={BreadBottom:"BurgerIngredient__BreadBottom__4c319c1c63230f6550f4cd3d731f7a2b-base64-5]",BreadTop:"BurgerIngredient__BreadTop__51679546da3114d0cdac06e9e4cdf840-base64-5]",Seeds1:"BurgerIngredient__Seeds1__9e3a3c942bbc6297eeda6e97f0d8ade1-base64-5]",Seeds2:"BurgerIngredient__Seeds2__c6017806e8e49f2ccd116a0500c6e14c-base64-5]",Meat:"BurgerIngredient__Meat__b4187a4c00e9a24196470a905b4c5e43-base64-5]",Cheese:"BurgerIngredient__Cheese__ed83998f4c637516ab5be7ba01ef8469-base64-5]",Salad:"BurgerIngredient__Salad__0e7aa3ba6a8a6cac2fe6f5aa2adade52-base64-5]",Bacon:"BurgerIngredient__Bacon__8b740bce22987898188ff3c9024b6edf-base64-5]"}},,function(e,t,n){"use strict";var a=n(33),r=n.n(a).a.create({baseURL:"https://react-my-burger-c7bc9.firebaseio.com/"});t.a=r},,,,function(e,t,n){e.exports={SideDrawer:"SideDrawer__SideDrawer__dd95264f46f1a847b4ad719d40e9dd81-base64-5]",Open:"SideDrawer__Open__71575a527c66c717c95df94a4acde759-base64-5]",Close:"SideDrawer__Close__bdee0a823e1cb5528b1452c06f157cfc-base64-5]",Logo:"SideDrawer__Logo__e868dc3809c5c13ce27af0cdf03753f7-base64-5]"}},,,function(e,t,n){e.exports={BuildControl:"BuildControl__BuildControl__32d40cacd9e82c64e57ed595f4c0f053-base64-5]",Label:"BuildControl__Label__402677a230c207ec5cacb68555e6f7c3-base64-5]",Less:"BuildControl__Less__034011011e4cf0c4e302c6db720b1fc7-base64-5]",More:"BuildControl__More__56718a4abeb84b3b858b37f6291df988-base64-5]"}},,,function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(63),o=n.n(c);t.a=function(e){return e.show?r.a.createElement("div",{className:o.a.BackDrop,onClick:e.click}):null}},function(e,t,n){"use strict";var a=n(4),r=n(5),c=n(7),o=n(6),i=n(8),u=n(0),s=n.n(u),l=n(65),d=n.n(l),f=n(11),b=n(31),p=function(e){function t(){return Object(a.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){return s.a.createElement(f.a,null,s.a.createElement(b.a,{show:this.props.show,click:this.props.modalClosed}),s.a.createElement("div",{className:d.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"}},this.props.children))}}]),t}(u.Component);t.a=p},,function(e,t,n){e.exports={Toolbar:"Toolbar__Toolbar__2cef55a0ed33bb6e399c8955bdafb7ad-base64-5]",Logo:"Toolbar__Logo__e7babf5d2db05d8708df7eb6f4593e4e-base64-5]",DesktopOnly:"Toolbar__DesktopOnly__cfb6a76a4be29b6dcecc986a0d7e923a-base64-5]"}},function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(42),o=n.n(c);t.a=function(e){return r.a.createElement("button",{className:[o.a.Button,o.a[e.btnType]].join(" "),disabled:e.disabled,onClick:e.clicked},e.children)}},,,function(e,t,n){e.exports={NavigationItem:"NavigationItem__NavigationItem__3ed53963caf027d523d7f9865d0d6558-base64-5]",active:"NavigationItem__active__dc4c5562edd7f327ebb83813985c3a02-base64-5]"}},,,function(e,t,n){e.exports={BuildControls:"BuildControls__BuildControls__f54d850ae6db8b4710fb9561f21300ff-base64-5]",OrderButton:"BuildControls__OrderButton__13fd705106f4f68d797c0e4137588a16-base64-5]",enable:"BuildControls__enable__bdc5e3648eae43f363163dd18ac6f2d3-base64-5]"}},function(e,t,n){e.exports={Button:"Button__Button__695f8451d5ee5aad37e99a94c272b034-base64-5]",Success:"Button__Success__cb934dbd850d559de5aec45a7c87af8d-base64-5]",Danger:"Button__Danger__74c1c9f117a1c6f1f71585e35e1c5da1-base64-5]"}},function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(66),o=n.n(c);t.a=function(){return r.a.createElement("div",{className:o.a.Loader},"Loading...")}},function(e,t,n){"use strict";var a=n(4),r=n(5),c=n(7),o=n(6),i=n(8),u=n(0),s=n.n(u),l=n(32),d=n(11);t.a=function(e,t){return function(n){function u(){var e,t;Object(a.a)(this,u);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(c.a)(this,(e=Object(o.a)(u)).call.apply(e,[this].concat(r)))).state={error:null},t.errorConfirmedHandler=function(){t.setState({error:null})},t}return Object(i.a)(u,n),Object(r.a)(u,[{key:"componentWillMount",value:function(){var e=this;this.reqInterceptor=t.interceptors.request.use((function(t){return e.setState({error:null}),t})),this.resInterceptor=t.interceptors.response.use((function(e){return e}),(function(t){e.setState({error:t})}))}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return s.a.createElement(d.a,null,s.a.createElement(l.a,{show:this.state.error,modalClosed:this.errorConfirmedHandler},this.state.error?this.state.error.message:null),s.a.createElement(e,this.props))}}]),u}(u.Component)}},,,,,,,,,,,function(e,t,n){"use strict";var a=n(68),r=n(0),c=n.n(r),o=n(64),i=n.n(o),u=n(4),s=n(5),l=n(7),d=n(6),f=n(8),b=n(19),p=n.n(b),h=function(e){function t(){return Object(u.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=c.a.createElement("div",{className:p.a.BreadBottom});break;case"bread-top":e=c.a.createElement("div",{className:p.a.BreadTop},c.a.createElement("div",{className:p.a.Seeds1}),c.a.createElement("div",{className:p.a.Seeds2}));break;case"meat":e=c.a.createElement("div",{className:p.a.Meat});break;case"cheese":e=c.a.createElement("div",{className:p.a.Cheese});break;case"salad":e=c.a.createElement("div",{className:p.a.Salad});break;case"bacon":e=c.a.createElement("div",{className:p.a.Bacon});break;default:e=null}return e}}]),t}(r.Component);t.a=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(a.a)(Array(e.ingredients[t])).map((function(e,n){return c.a.createElement(h,{key:t+n,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=c.a.createElement("p",null,"Please start adding ingredients !")),c.a.createElement("div",{className:i.a.Burger},c.a.createElement(h,{type:"bread-top"}),t,c.a.createElement(h,{type:"bread-bottom"}))}},,function(e,t,n){e.exports={Content:"Layout__Content__214a940a591988aef99fbaff9dc9bfd9-base64-5]"}},function(e,t,n){e.exports=n.p+"static/media/burger-logo.b8503d26.png"},function(e,t,n){e.exports={Logo:"Logo__Logo__61d9ffa74a1dbb78f066eb7542ace849-base64-5]"}},function(e,t,n){e.exports={NavigationItems:"NavigationItems__NavigationItems__f17ff2d52dc6c85d6f4c39f6cddf883f-base64-5]"}},,function(e,t,n){e.exports={DrawerToggle:"DrawerToggle__DrawerToggle__6b0ade9ac0f57cfeac8e80f61b807586-base64-5]"}},function(e,t,n){e.exports={BackDrop:"BackDrop__BackDrop__d033a29c45378669c458273b8478f520-base64-5]"}},function(e,t,n){e.exports={Burger:"Burger__Burger__e6f303861b9e2053cc73d2d07e4ab803-base64-5]"}},function(e,t,n){e.exports={Modal:"Modal__Modal__4bffbcce395af8018048aa7f96e2ffc2-base64-5]"}},function(e,t,n){e.exports={Loader:"Spinner__Loader__50de653dc29d259863f1b750370f9e67-base64-5]",load6:"Spinner__load6__1bc8345ad57256f3119e87ca3e6a0af6-base64-5]",round:"Spinner__round__ed82648ae358206feba3430e107c359a-base64-5]"}},,,function(e,t,n){e.exports=n(98)},,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(29),o=n.n(c),i=(n(74),n(4)),u=n(5),s=n(7),l=n(6),d=n(8),f=n(15),b=n(11),p=n(57),h=n.n(p),m=n(34),g=n.n(m),_=n(58),E=n.n(_),v=n(59),O=n.n(v),j=function(e){return r.a.createElement("div",{className:O.a.Logo},r.a.createElement("img",{src:E.a,alt:"my-Burger"}))},y=n(60),k=n.n(y),C=n(23),S=n(38),I=n.n(S),w=function(e){return r.a.createElement("li",{className:I.a.NavigationItem},r.a.createElement(C.b,{to:e.link,exact:e.exact,activeClassName:I.a.active},e.children))},B=function(e){return r.a.createElement("ul",{className:k.a.NavigationItems},r.a.createElement(w,{link:"/",exact:!0},"Burger Builder"),e.isAuthenticated?r.a.createElement(w,{link:"/orders"},"Orders"):null,e.isAuthenticated?r.a.createElement(w,{link:"/logout"},"Logout"):r.a.createElement(w,{link:"/auth"},"Authenticate"))},N=n(62),D=n.n(N),T=function(e){return r.a.createElement("div",{className:D.a.DrawerToggle,onClick:e.clicked},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},A=function(e){return r.a.createElement("header",{className:g.a.Toolbar},r.a.createElement(T,{clicked:e.drawertoggleClicked}),r.a.createElement("div",{className:g.a.Logo},r.a.createElement(j,null)),r.a.createElement("nav",{className:g.a.DesktopOnly},r.a.createElement(B,{isAuthenticated:e.isAuth})))},R=n(25),L=n.n(R),x=n(31),H=function(e){var t=[L.a.SideDrawer,L.a.Close];return e.open&&(t=[L.a.SideDrawer,L.a.Open]),r.a.createElement(b.a,null,r.a.createElement(x.a,{show:e.open,click:e.closed}),r.a.createElement("div",{className:t.join("  "),onClick:e.closed},r.a.createElement("div",{className:L.a.Logo},r.a.createElement(j,null)),r.a.createElement("nav",null,r.a.createElement(B,{isAuthenticated:e.isAuth}))))},P=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={showSideDrawer:!0},n.sideDrawerCloseHandler=function(){n.setState({showSideDrawer:!1})},n.sideDrawerToggleHandler=function(){n.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(b.a,null,r.a.createElement(A,{isAuth:this.props.isAuthenticated,drawertoggleClicked:this.sideDrawerToggleHandler}),r.a.createElement(H,{isAuth:this.props.isAuthenticated,open:this.state.showSideDrawer,closed:this.sideDrawerCloseHandler}),r.a.createElement("main",{className:h.a.Content},this.props.children))}}]),t}(a.Component),U=Object(f.b)((function(e){return{isAuthenticated:null!==e.auth.token}}))(P),M=n(24),F=n(55),G=n(41),W=n.n(G),q=n(28),J=n.n(q),z=function(e){return r.a.createElement("div",{className:J.a.BuildControl},r.a.createElement("div",{className:J.a.Label},e.label),r.a.createElement("button",{className:J.a.Less,onClick:e.removed,disabled:e.disabled},"Less"),r.a.createElement("button",{className:J.a.More,onClick:e.added},"More"))},X=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],Y=function(e){return r.a.createElement("div",{className:W.a.BuildControls},r.a.createElement("p",null,"Current Price: ",r.a.createElement("strong",null,e.price.toFixed(2))),X.map((function(t){return r.a.createElement(z,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]})})),r.a.createElement("button",{className:W.a.orderButton,disabled:!e.purchasable,onClick:e.ordered},e.isAuth?"ORDER NOW":"SIGNUP TO ORDER"))},K=n(32),V=n(35),$=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.ingredients).map((function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",{style:{textTransform:"capitalize"}},t),":",e.props.ingredients[t])}));return r.a.createElement(b.a,null,r.a.createElement("h3",null,"Your Order"),r.a.createElement("p",null,"A deicious burger with the following ingredients:"),r.a.createElement("ul",null,t),r.a.createElement("p",null,r.a.createElement("strong",null,"Total Price:",this.props.price)),r.a.createElement("p",null,"Continue to Checkout?"),r.a.createElement(V.a,{btnType:"Danger",clicked:this.props.purchaseCancelled},"CANCEL"),r.a.createElement(V.a,{btnType:"Success",clicked:this.props.purchaseContinued},"CONTINUE"))}}]),t}(a.Component),Q=n(44),Z=n(43),ee=n(21),te=n(16),ne=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={purchasing:!1},n.purchaseHandler=function(){n.props.isAuthenticated?n.setState({purchasing:!0}):(n.props.onSetAuthRedirect("/checkout"),n.props.history.push("/auth"))},n.purchaseCancelHandler=function(){n.setState({purchasing:!1})},n.purchaseContinueHandler=function(){n.props.onInitPurchase(),n.props.history.push("/checkout")},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.onInitIngredients()}},{key:"updatePurchaseState",value:function(e){return Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0)>0}},{key:"render",value:function(){var e=Object(M.a)({},this.props.ings);for(var t in e)e[t]=e[t]<=0;var n=null,a=this.props.error?r.a.createElement("p",null,"Ingredients can't be loaded!"):r.a.createElement(Z.a,null);return this.props.ings&&(a=r.a.createElement(b.a,null,r.a.createElement(F.a,{ingredients:this.props.ings}),r.a.createElement(Y,{ingredientAdded:this.props.onIngredientAdded,ingredientRemoved:this.props.onIngredientRemoved,disabled:e,purchasable:this.updatePurchaseState(this.props.ings),ordered:this.purchaseHandler,isAuth:this.props.isAuthenticated,price:this.props.price})),n=r.a.createElement($,{ingredients:this.props.ings,price:this.props.price,purchaseCancelled:this.purchaseCancelHandler,purchaseContinued:this.purchaseContinueHandler})),r.a.createElement(b.a,null,r.a.createElement(K.a,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler},n),a)}}]),t}(a.Component),ae=Object(f.b)((function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,error:e.burgerBuilder.error,isAuthenticated:null!==e.auth.token}}),(function(e){return{onIngredientAdded:function(t){return e(te.a(t))},onIngredientRemoved:function(t){return e(te.b(t))},onInitIngredients:function(){return e(te.f())},onInitPurchase:function(){return e(te.h())},onSetAuthRedirect:function(t){return e(te.j(t))}}}))(Object(Q.a)(ne,ee.a)),re=n(20),ce=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.onLogout()}},{key:"render",value:function(){return r.a.createElement(re.a,{to:"/"})}}]),t}(a.Component),oe=Object(f.b)(null,(function(e){return{onLogout:function(){return e(te.g())}}}))(ce),ie=function(e){return function(t){function n(){var e,t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(l.a)(n)).call.apply(e,[this].concat(r)))).state={component:null},t}return Object(d.a)(n,t),Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this;e().then((function(e){t.setState({component:e.default})}))}},{key:"render",value:function(){var e=this.state.component;return e?r.a.createElement(e,this.props):null}}]),n}(a.Component)},ue=ie((function(){return n.e(3).then(n.bind(null,106))})),se=ie((function(){return n.e(5).then(n.bind(null,107))})),le=ie((function(){return n.e(4).then(n.bind(null,105))})),de=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.onTryAutoSignup()}},{key:"render",value:function(){var e=r.a.createElement(re.d,null,r.a.createElement(re.b,{path:"/auth",exact:!0,component:le}),r.a.createElement(re.b,{path:"/",exact:!0,component:ae}),r.a.createElement(re.a,{to:"/"}));return this.props.isAuthenticated&&(e=r.a.createElement(re.d,null,r.a.createElement(re.b,{path:"/checkout",component:ue}),r.a.createElement(re.b,{path:"/orders",exact:!0,component:se}),r.a.createElement(re.b,{path:"/logout",exact:!0,component:oe}),r.a.createElement(re.b,{path:"/auth",exact:!0,component:le}),r.a.createElement(re.b,{path:"/",exact:!0,component:ae}),r.a.createElement(re.a,{to:"/"}))),r.a.createElement("div",null,r.a.createElement(U,null,e))}}]),t}(a.Component),fe=Object(re.g)(Object(f.b)((function(e){return{isAuthenticated:null!==e.auth.token}}),(function(e){return{onTryAutoSignup:function(){return e(te.d())}}}))(de));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var be=n(22),pe=n(26),he=n(1),me=n(3),ge={ingredients:null,totalPrice:4,error:!1,building:!1},_e={salad:.5,cheese:.4,meat:1.3,bacon:.7},Ee=function(e,t){var n=Object(pe.a)({},t.ingredientName,e.ingredients[t.ingredientName]+1),a={ingredients:Object(me.b)(e.ingredients,n),totalPrice:e.totalPrice+_e[t.ingredientName],building:!0};return Object(me.b)(e,a)},ve=function(e,t){var n=Object(pe.a)({},t.ingredientName,e.ingredients[t.ingredientName]-1),a={ingredients:Object(me.b)(e.ingredients,n),totalPrice:e.totalPrice+_e[t.ingredientName]};return Object(me.b)(e,a)},Oe=function(e,t){return Object(me.b)(e,{ingredients:t.ingredients,totalPrice:4,error:!1,building:!1})},je=function(e,t){return Object(me.b)(e,{error:!0})},ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case he.a:return Ee(e,t);case he.n:return ve(e,t);case he.p:return Oe(e,t);case he.f:return je(e);default:return e}},ke=n(67),Ce={orders:[],loading:!1,purchased:!1},Se=function(e){var t=e.state;e.action;return Object(me.b)(t,{purchased:!1})},Ie=function(e){e.action;var t=e.state;return Object(me.b)(t,{loading:!0})},we=function(e){var t=e.action,n=e.state,a=Object(me.b)(t.orderData,{id:t.orderId});return Object(me.b)(n,{loading:!1,purchased:!0,orders:n.orders.concat(a)})},Be=function(e){var t=e.state;e.action;return Object(me.b)(t,{loading:!1})},Ne=function(e){var t=e.state;e.action;return Object(me.b)(t,{loading:!0})},De=function(e){var t=e.state,n=e.action;return Object(me.b)(t,{orders:n.orders,loading:!1})},Te=function(e){var t=e.state;e.action;return Object(me.b)(t,{loading:!1})},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case he.m:return Se({state:e,action:t});case he.k:return Ie({state:e,action:t});case he.l:return we({state:e,action:t});case he.j:return Be({state:e,action:t});case he.h:return Ne({state:e,action:t});case he.i:return De({state:e,action:t});case he.g:return Te({state:e,action:t});default:return e}},Re={token:null,userId:null,error:null,loading:!1,authRedirectPath:"/"},Le=function(e){var t=e.state;e.action;return Object(me.b)(t,{error:null,loading:!0})},xe=function(e){var t=e.state,n=e.action;return Object(me.b)(t,{token:n.idToken,userId:n.userId,error:null,loading:!1})},He=function(e){var t=e.state,n=e.action;return Object(me.b)(t,{error:n.error,loading:!1})},Pe=function(e){var t=e.state;e.action;return Object(me.b)(t,{token:null,userId:null})},Ue=function(e){var t=e.state,n=e.action;return Object(me.b)(t,{authRedirectPath:n.path})},Me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case he.d:return Le({state:e,action:t});case he.e:return xe({state:e,action:t});case he.b:return He({state:e,action:t});case he.c:return Pe({state:e,action:t});case he.o:return Ue({state:e,action:t});default:return e}},Fe=be.d,Ge=Object(be.c)({burgerBuilder:ye,order:Ae,auth:Me}),We=Object(be.e)(Ge,Fe(Object(be.a)(ke.a))),qe=r.a.createElement(f.a,{store:We},r.a.createElement(C.a,null,r.a.createElement(fe,null)));o.a.render(qe,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[69,1,2]]]);
//# sourceMappingURL=main.c19036e8.chunk.js.map