(this["webpackJsonpmove-div-assignment"]=this["webpackJsonpmove-div-assignment"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(7),i=n.n(r),c=(n(14),n(1)),s=n(2),l=n(4),u=n(3),h=n(5),p=function(t){function e(){return Object(c.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return a.a.createElement("div",{className:"Child2",style:{height:"50%",width:"50%",border:"1px solid maroon",backgroundColor:"white",margin:"30px"}},"color:",this.props.color)}}]),e}(o.Component),m=["yellow","grey","white","Cornsilk","BlanchedAlmond","Gainsboro","DarkKhaki"],d=function(t){function e(){var t,n;Object(c.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(l.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).state={show:"false",position:0,color:m[0],count:1},n}return Object(h.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this;setInterval((function(){t.setState({show:"true",position:(t.state.position+4)%400,count:(t.state.count+1)%(m.length-1),color:m[t.state.count+1]})}),200)}},{key:"render",value:function(){var t="".concat(this.state.color);return a.a.createElement("div",{className:"Child",style:{height:"50%",width:"50%",border:"1px solid maroon",backgroundColor:t,marginTop:"30%",transform:"translateX(".concat(this.state.position,"px)")}},a.a.createElement(p,{color:t}))}}]),e}(o.Component),v=n(8),b=n.n(v),f=function(t){function e(){var t,n;Object(c.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(l.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).property=function(t){},n}return Object(h.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return a.a.createElement("div",{className:"Container",style:b.a.Container},a.a.createElement(d,{property:this.property}))}}]),e}(o.Component);var y=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},8:function(t,e,n){},9:function(t,e,n){t.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.33c1bf4c.chunk.js.map