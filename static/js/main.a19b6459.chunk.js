(window["webpackJsonptreasure-hunt"]=window["webpackJsonptreasure-hunt"]||[]).push([[0],[,function(e){e.exports=JSON.parse('{"homeTitle":"Title","homeDescription":"Haiasd Asormea maeians dakenlsknas sdasisdin asisndkasldn asdisndn Haiasd Asormea maeians dakenlsknas sdasisdin asisndkasldn asdisndn Haiasd Asormea maeians dakenlsknas sdasisdin asisndkasldn asdisndn Haiasd Asormea maeians dakenlsknas sdasisdin asisndkasldn asdisndn Haiasd Asormea maeians dakenlsknas sdasisdin asisndkasldn asdisndn","pages":[{"title":"#1","description":"Description","code":"aAgh"},{"title":"#2","description":"Description","code":"aAgh"},{"title":"#3","description":"Description","code":"aAgh"},{"title":"#4","description":"Description","code":"aAgh"},{"title":"#5","description":"Description","code":"aAgh"},{"title":"#6","description":"Description","code":"aAgh"},{"title":"#7","description":"Description"}]}')},,,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(3),i=a.n(r),o=(a(14),a(4)),c=a(5),d=a(7),l=a(6),u=a(8),m=(a(15),a(1)),h=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).state={started:!1,pageNumber:1,focused:!1,codeError:!1},a.beginClick=function(){a.setState({started:!0})},a.focused=function(){a.setState({focused:!0}),a.state.codeError&&a.setState({codeError:!1})},a.blurred=function(){a.setState({focused:!1}),a.state.codeError&&a.setState({codeError:!1})},a.handleCode=function(e){var t=e.target.value;if(a.state.codeError&&a.setState({codeError:!1}),4===t.length){var n=a.state.pageNumber;t===m.pages[n-1].code?(a.setState({pageNumber:n+1}),e.target.value=""):a.setState({codeError:!0})}},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"renderHome",value:function(){return s.a.createElement("div",{className:"app-container"},s.a.createElement("div",{className:"home"},s.a.createElement("div",{className:"home-title"},m.homeTitle),s.a.createElement("div",{className:"home-description"},m.homeDescription),s.a.createElement("div",{className:"home-button",onClick:this.beginClick},"Begin")))}},{key:"renderTreasureHunt",value:function(){var e=this.state,t=e.pageNumber,a=e.focused,n=e.codeError;if(t){var r=m.pages[t-1],i=r.title,o=r.description,c=r.code;return s.a.createElement("div",{className:"treasure-hunt-container"},s.a.createElement("div",{className:"treasure-hunt-title"},i),s.a.createElement("div",{className:"treasure-hunt-description"},o),c&&s.a.createElement("input",{className:"input-code ".concat(n?"input-code-error":""),maxLength:4,placeholder:a?"":"Enter code",type:"text",onFocus:this.focused,onBlur:this.blurred,onChange:this.handleCode}))}return null}},{key:"render",value:function(){var e=this.state.started;return s.a.createElement(n.Fragment,null,!e&&this.renderHome(),e&&this.renderTreasureHunt())}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.a19b6459.chunk.js.map