(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{13:function(e,t,n){"use strict";n.r(t);var c=n(7),a=n.n(c),o=n(2),i=n(3),r=n(5),s=n(4),l=n(1),u=n.n(l),m=n(0),h=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).timerId=null,e.state={currentTime:(new Date).toUTCString().slice(-12,-4)},e.updateTime=function(){var t=(new Date).toUTCString().slice(-12,-4);console.info("".concat(t)),e.setState({currentTime:t})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.timerId=setInterval(this.updateTime,1e3)}},{key:"componentDidUpdate",value:function(e){e.name!==this.props.name&&console.debug("Renamed from ".concat(e.name," to ").concat(this.props.name))}},{key:"componentWillUnmount",value:function(){this.timerId&&clearInterval(this.timerId)}},{key:"render",value:function(){var e=this.props.name,t=this.state.currentTime;return Object(m.jsxs)("div",{className:"Clock",children:[Object(m.jsx)("strong",{className:"Clock__name",children:e})," time is ",Object(m.jsx)("span",{className:"Clock__time",children:t})]})}}]),n}(u.a.Component);var d=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={hasClock:!0,clockName:"Clock-0"},e.timerId=void 0,e.hideClock=function(t){t.preventDefault(),e.setState({hasClock:!1})},e.showClock=function(){e.setState({hasClock:!0})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("contextmenu",this.hideClock),document.addEventListener("click",this.showClock),this.timerId=setInterval((function(){var t=function(){var e=Date.now().toString().slice(-4);return"Clock-".concat(e)}();e.setState({clockName:t})}),3300)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("contextmenu",this.hideClock),document.removeEventListener("click",this.showClock),clearInterval(this.timerId)}},{key:"render",value:function(){var e=this.state,t=e.hasClock,n=e.clockName;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"React clock"}),t&&Object(m.jsx)(h,{name:n})]})}}]),n}(u.a.Component);a.a.render(Object(m.jsx)(d,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.606f9f92.chunk.js.map