(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"3PQu":function(e,t,a){var r=a("z01/");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function n(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if(Object.prototype.hasOwnProperty.call(e,c)){var i=n?Object.getOwnPropertyDescriptor(e,c):null;i&&(i.get||i.set)?Object.defineProperty(a,c,i):a[c]=e[c]}return a["default"]=e,t&&t.set(e,a),a}e.exports=n},"7RL8":function(e,t,a){"use strict";a.r(t),a.d(t,"DynamicForm",(function(){return x})),a.d(t,"FilePreview",(function(){return I})),a.d(t,"WaterMask",(function(){return j}));a("+L6B");var r=a("2/Rp"),l=(a("14J3"),a("BMrR")),n=(a("jCWc"),a("kPKH")),c=(a("y8nQ"),a("Vl3Y")),i=(a("5NDa"),a("5rEg")),o=a("0Owb"),s=(a("iQDF"),a("+eQT")),m=(a("OaEy"),a("2fM7")),u=a("q1tI"),d=a.n(u),p=a("17x9"),h=a.n(p),f=a("wy2R"),E=a.n(f),g=(a("8WKK"),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,a=null;return function(){null!==a&&clearTimeout(a),a=setTimeout(()=>e.apply(this,arguments),t)}}),y=m["a"].Option,b=s["a"].RangePicker;class v extends u["PureComponent"]{constructor(){super(...arguments),this.state={open:!1},this.createFormItem=()=>{var e=this.props,t=e.items,a=e.limit,r=e.form.getFieldDecorator,l=this.state.open,n=a&&!l?t.slice(0,a):t;return n.map((e,t)=>{var a=e.type,l=e.label,n=e.options,c=e.formEleOptions,i=e.selectValueKey,o=e.selectLabelKey,s=e.formItemLayout;e.options=n||{},e.formEleOptions=c||{},e.getFieldDecorator=r,e.formItemLayout=s||{labelCol:{span:4},wrapperCol:{span:20}};var m=e.options.initialValue;switch(a){case"input":return e.placeholder="\u8bf7\u8f93\u5165".concat(l),this.createInput(e,t);case"select":return e.placeholder="\u8bf7\u9009\u62e9".concat(l),e.selectValueKey=i||"id",e.selectLabelKey=o||"name",this.createSelect(e,t);case"datepicker":if(e.placeholder="\u8bf7\u9009\u62e9".concat(l),m)try{e.options.initialValue=E.a.isMoment(m)?m:E()(m)}catch(u){throw e.options.initialValue=void 0,u}return this.createDatepicker(e,t);case"rangepicker":return m&&("[object Array]"===Object.prototype.toString.call(m)?e.options.initialValue=m.map(e=>{var t;try{t=E.a.isMoment(e)?e:E()(e)}catch(u){t=null}return t}):e.options.initialValue=null),e.placeholder=["\u5f00\u59cb\u65f6\u95f4","\u7ed3\u675f\u65f6\u95f4"],this.createRangepicker(e,t);default:break}})},this.createInput=(e,t)=>{var a=e.key,r=e.label,l=e.options,s=e.placeholder,m=e.getFieldDecorator,u=e.formEleOptions,p=e.formItemLayout;return d.a.createElement(n["a"],{span:8,key:t},d.a.createElement(c["a"].Item,Object(o["a"])({},p,{label:r}),m(a,l)(d.a.createElement(i["a"],Object(o["a"])({placeholder:s},u)))))},this.createSelect=(e,t)=>{var a=e.key,r=e.label,l=e.options,i=e.placeholder,s=e.list,u=void 0===s?[]:s,p=e.selectValueKey,h=e.selectLabelKey,f=e.getFieldDecorator,E=e.formEleOptions,g=e.formItemLayout;return d.a.createElement(n["a"],{span:8,key:t},d.a.createElement(c["a"].Item,Object(o["a"])({},g,{label:r}),f(a,l)(d.a.createElement(m["a"],Object(o["a"])({placeholder:i},E),u.map((e,t)=>d.a.createElement(y,{key:t,value:e[p]},e[h]))))))},this.createDatepicker=(e,t)=>{var a=e.key,r=e.label,l=e.options,i=e.placeholder,m=e.getFieldDecorator,u=e.formEleOptions,p=e.formItemLayout;return d.a.createElement(n["a"],{span:8,key:t},d.a.createElement(c["a"].Item,Object(o["a"])({},p,{label:r}),m(a,l)(d.a.createElement(s["a"],Object(o["a"])({placeholder:i},u)))))},this.createRangepicker=(e,t)=>{var a=e.key,r=e.label,l=e.options,i=e.placeholder,s=e.getFieldDecorator,m=e.formEleOptions,u=e.formItemLayout;return d.a.createElement(n["a"],{span:8,key:t},d.a.createElement(c["a"].Item,Object(o["a"])({},u,{label:r}),s(a,l)(d.a.createElement(b,Object(o["a"])({placeholder:i},m)))))},this.onSubmit=e=>{var t=this.props,a=t.form.validateFields,r=t.getFieldsValue;e.preventDefault(),a((e,t)=>{e||r&&r(t)})},this.handleReset=()=>{var e=this.props,t=e.form.resetFields,a=e.getFieldsValue;t(),a&&a({})},this.toggle=()=>this.setState({open:!this.state.open})}componentDidMount(){}render(){var e=this.state.open;return d.a.createElement(c["a"],{onSubmit:this.onSubmit,className:"dynamicForm"},d.a.createElement(l["a"],{className:"dynamicForm_row"},this.createFormItem()),d.a.createElement(l["a"],{className:"dynamicForm_row"},d.a.createElement(n["a"],{span:24,style:{textAlign:"right"}},d.a.createElement(r["default"],{type:"primary",htmlType:"submit"},"\u641c\u7d22"),d.a.createElement(r["default"],{type:"primary",style:{marginLeft:8},onClick:this.handleReset},"\u91cd\u7f6e"),d.a.createElement(r["default"],{type:"default",style:{marginLeft:8},onClick:this.toggle},e?"\u6536\u8d77":"\u5c55\u5f00"))))}}var k=void 0,w=c["a"].create({onValuesChange:(e,t,a)=>{k?k(t,a):k=g(e.onValuesChange)}})(v);w.propTypes={limit:h.a.number.isRequired,items:h.a.array.isRequired,getFieldsValue:h.a.func,onValuesChange:h.a.func},w.defaultProps={items:[],limit:3,onValuesChange:()=>{}};var x=w,C=(a("2qtc"),a("kLXV")),S=(a("fV52"),a("3I+P")),O=(a("Pwec"),a("CtXQ"));a("g7QV");class N extends u["Component"]{constructor(e){super(e),this.slickPrev=()=>{this.carousel1.prev()},this.slickNext=()=>{this.carousel1.next()},this.slickGoTo=e=>{this.carousel1.goTo(e)},this.isPdf=e=>e.endsWith(".pdf"),this.operateBtn=e=>{switch(this.ele=document.querySelectorAll(".slick-active.slick-current")[0],e){case"reset":this.scale=1,this.rotate=0;break;case"in":this.scale*=1.1;break;case"out":this.scale*=.9;break;case"rotate":this.rotate+=90;break;default:break}this.ele.style.transform="scale(".concat(this.scale,") rotate(").concat(this.rotate,"deg)")},this.beforeChange=(e,t)=>{this.carousel2.goTo(t)},this.afterChange=()=>{this.ele&&(this.ele.style.transform="scale(1) rotate(0deg)")},this.rotate=0,this.scale=1}componentWillUnmount(){this.ele=null}render(){var e=this.props,t=e.visible,a=e.fileList,l=e.activeIndex,n=e.slideSize,c=a.length>n,i=[...a];return d.a.createElement(C["a"],{title:"\u6587\u4ef6\u9884\u89c8",visible:t,onOk:this.props.onOk,onCancel:this.props.onCancel,footer:null,width:998,destroyOnClose:!0},d.a.createElement("div",{className:"carousel-box"},d.a.createElement("div",{className:"toolbtns"},d.a.createElement(r["default"],{type:"default",onClick:()=>this.operateBtn("reset")},"\u91cd\u7f6e"),d.a.createElement(r["default"],{onClick:()=>this.operateBtn("in"),title:"\u653e\u5927",className:"icon",type:"default"},d.a.createElement(O["a"],{type:"zoom-in"})),d.a.createElement(r["default"],{onClick:()=>this.operateBtn("out"),className:"icon",title:"\u7f29\u5c0f",type:"default"},d.a.createElement(O["a"],{type:"zoom-out"})),d.a.createElement(r["default"],{onClick:()=>this.operateBtn("rotate"),className:"icon",title:"\u65cb\u8f6c",type:"default"},d.a.createElement(O["a"],{type:"reload"}))),d.a.createElement(O["a"],{onClick:this.slickPrev,className:"carousel-arrow arrow-left",type:"left"}),d.a.createElement(O["a"],{onClick:this.slickNext,className:"carousel-arrow arrow-right",type:"right"}),d.a.createElement("div",{className:"carousel"},d.a.createElement(S["a"],{ref:e=>this.carousel1=e,arrows:!1,initialSlide:l,dots:!1,beforeChange:this.beforeChange,afterChange:this.afterChange},a.map((e,t)=>d.a.createElement("div",{key:t,className:"carousel-item-box"},d.a.createElement("div",{className:"flexbox"},this.isPdf(e.src||e.url)?d.a.createElement("a",{href:e.src||e.url,target:"_blank",rel:"noopener noreferrer"},d.a.createElement(O["a"],{type:"file-pdf",className:"pdf"})):d.a.createElement("img",{src:e.src||e.url,alt:""}))))))),d.a.createElement("div",{className:"carousel-box"},c?d.a.createElement(O["a"],{onClick:this.slickPrev,className:"carousel-arrow arrow-left",type:"left"}):null,c?d.a.createElement(O["a"],{onClick:this.slickNext,className:"carousel-arrow arrow-right",type:"right"}):null,d.a.createElement("div",{className:"carousel"},d.a.createElement(S["a"],{ref:e=>this.carousel2=e,arrows:!1,initialSlide:l,slidesToShow:n,dots:!1},i.map((e,t)=>d.a.createElement("div",{key:t,className:"carousel-item-box",onClick:()=>this.slickGoTo(t)},this.isPdf(e.src||e.url)?d.a.createElement(O["a"],{type:"file-pdf",className:"pdf"}):d.a.createElement("img",{src:e.src||e.url,alt:""})))))))}}N.defaultProps={visible:!1,fileList:[],activeIndex:0,slideSize:4,onOk:()=>{},onCancel:()=>{}};var I=N,P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.replace(/[\u0391-\uFFE5]/g,"aa").length/2};class F extends u["Component"]{constructor(e){super(e),this.renderWaterMark=()=>{var e=this.props,t=e.textStyle,a=e.body,r=e.str,l=e.fontSize,n=e.summary,c=e.rotate,i=e.width,o=e.height,s=r,m=t||"rgba(97, 97, 97,0.2)",u=document.createElement("canvas"),d=document.querySelector(a);d.style.position="relative";var p="";s="".concat(p).concat(r);var h=P(s),f=i||h*l/2,E=o||f*Math.sqrt(3);u.width=f>480?f:480,u.height=E>500?E+200:500;var g=u.getContext("2d"),y=u.width/2,b=u.height/2;g.translate(y,b),g.rotate(Math.PI/180*c),g.font="".concat(l,"px Source Han Sans CN"),g.textAlign="center",g.textBaseline="middle",g.fillStyle=m,g.fillText(s,0,0),n&&g.fillText(n,0,l),g.translate(-y,-b),this.setState({url:u.toDataURL("image/png")})},this.test=()=>{var e=document.querySelector("#c1"),t=0,a="\u6d4b\u8bd5\u6c34\u5370",r=a.length,l=20,n=r*l,c=l;e.setAttribute("width",n),e.setAttribute("height",c),e.style.backgroundColor="#f5f5f5";var i=e.getContext("2d");i.textAlign="center",i.textBaseline="middle",i.font="".concat(l,"px microsoft yahei"),i.fillStyle="rgba(97, 97, 97,0.2)";var o=n/2,s=c/2;i.translate(o,s),i.rotate(Math.PI/180*t),i.fillText(a,0,0)},this.state={url:""}}componentDidMount(){this.renderWaterMark()}render(){var e=this.state.url,t=void 0===e?"":e;return d.a.createElement("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",zIndex:1e3,pointerEvents:"none",backgroundRepeat:"repeat",backgroundImage:"url(".concat(t,")")}})}}F.defaultProps={body:"body",str:"",rotate:"",width:"",height:"",fontSize:"40px",textStyle:""};var j=F},"8WKK":function(e,t,a){},g7QV:function(e,t,a){},wKH6:function(e,t,a){"use strict";a.r(t);var r=a("0Owb"),l=a("q1tI"),n=a.n(l),c=(a("B2uJ"),a("+su7"),a("qOys"),a("5Yjd")),i=a.n(c),o=n.a.memo((function(){var e=a("3PQu"),t=e(a("q1tI")),r=a("7RL8"),l=function(){return n.a.createElement("div",{className:"demo-wm",style:{height:"500px"}},n.a.createElement(r.WaterMask,{body:".demo-wm",str:"\u793a\u4f8b\u6c34\u5370",rotate:"-60",fontSize:30}))};return t["default"].createElement(l)}));t["default"]=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",{id:"watermask"},n.a.createElement("a",{"aria-hidden":"true",href:"#watermask"},n.a.createElement("span",{className:"icon icon-link"})),"WaterMask"),n.a.createElement("h3",{id:"\u6c34\u5370\u7ec4\u4ef6"},n.a.createElement("a",{"aria-hidden":"true",href:"#\u6c34\u5370\u7ec4\u4ef6"},n.a.createElement("span",{className:"icon icon-link"})),"\u6c34\u5370\u7ec4\u4ef6")),n.a.createElement(i.a,Object(r["a"])({source:{jsx:"import react, { useState } from 'react';\nimport { WaterMask } from 'dumi-lib';\n\nexport default () => (\n  <div className=\"demo-wm\" style={{ height: '500px' }}>\n    <WaterMask\n      body={'.demo-wm'}\n      str={'\u793a\u4f8b\u6c34\u5370'}\n      rotate={'-60'}\n      fontSize={30}\n    />\n  </div>\n);"}},{title:"\u57fa\u672c\u4f7f\u7528",desc:'<div class="markdown"><p>\u751f\u6210\u6c34\u5370\u8282\u70b9</p></div>',dependencies:{"dumi-lib":"2.0.01"},files:{}}),n.a.createElement(o,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h3",{id:"\u7ec4\u4ef6\u53c2\u6570"},n.a.createElement("a",{"aria-hidden":"true",href:"#\u7ec4\u4ef6\u53c2\u6570"},n.a.createElement("span",{className:"icon icon-link"})),"\u7ec4\u4ef6\u53c2\u6570"),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{align:"left"},"\u53c2\u6570"),n.a.createElement("th",{align:"left"},"\u8bf4\u660e"),n.a.createElement("th",{align:"center"},"\u7c7b\u578b"),n.a.createElement("th",{align:"center"},"\u9ed8\u8ba4\u503c"),n.a.createElement("th",{align:"center"},"\u5fc5\u586b"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",{align:"left"},"body"),n.a.createElement("td",{align:"left"},"\u6c34\u5370\u8303\u56f4",n.a.createElement("code",null,"css\u9009\u62e9\u5668")),n.a.createElement("td",{align:"center"},n.a.createElement("code",null,"string")),n.a.createElement("td",{align:"center"},n.a.createElement("code",null,"body")),n.a.createElement("td",{align:"center"},"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",{align:"left"},"str"),n.a.createElement("td",{align:"left"},"\u6c34\u5370\u6587\u5b57"),n.a.createElement("td",{align:"center"},n.a.createElement("code",null,"string")),n.a.createElement("td",{align:"center"},"--"),n.a.createElement("td",{align:"center"},"\u662f")),n.a.createElement("tr",null,n.a.createElement("td",{align:"left"},"summary"),n.a.createElement("td",{align:"left"},"\u6c34\u5370\u526f\u6807\u9898\u6587\u5b57"),n.a.createElement("td",{align:"center"},n.a.createElement("code",null,"string")),n.a.createElement("td",{align:"center"},"--"),n.a.createElement("td",{align:"center"},"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",{align:"left"},"rotate"),n.a.createElement("td",{align:"left"},"\u6c34\u5370\u65cb\u8f6c\u89d2\u5ea6"),n.a.createElement("td",{align:"center"},n.a.createElement("code",null,"number")),n.a.createElement("td",{align:"center"},"--"),n.a.createElement("td",{align:"center"},"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",{align:"left"},"width"),n.a.createElement("td",{align:"left"},"\u6c34\u5370",n.a.createElement("code",null,"canvas"),"\u7684\u5bbd\u5ea6"),n.a.createElement("td",{align:"center"},n.a.createElement("code",null,"number")),n.a.createElement("td",{align:"center"},"--"),n.a.createElement("td",{align:"center"},"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",{align:"left"},"height"),n.a.createElement("td",{align:"left"},"\u6c34\u5370",n.a.createElement("code",null,"canvas"),"\u7684\u5bbd\u5ea6"),n.a.createElement("td",{align:"center"},n.a.createElement("code",null,"number")),n.a.createElement("td",{align:"center"},"--"),n.a.createElement("td",{align:"center"},"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",{align:"left"},"fontSize"),n.a.createElement("td",{align:"left"},"\u6c34\u5370\u5b57\u4f53\u5927\u5c0f"),n.a.createElement("td",{align:"center"},n.a.createElement("code",null,"number")),n.a.createElement("td",{align:"center"},"--"),n.a.createElement("td",{align:"center"},"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",{align:"left"},"textStyle"),n.a.createElement("td",{align:"left"},"\u6c34\u5370\u5b57\u4f53\u989c\u8272",n.a.createElement("code",null,"\u8272\u503c")),n.a.createElement("td",{align:"center"},n.a.createElement("code",null,"string")),n.a.createElement("td",{align:"center"},n.a.createElement("code",null,"rgba(97, 97, 97,0.2)")),n.a.createElement("td",{align:"center"},"\u5426"))))))}},"z01/":function(e,t){function a(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=a=function(e){return typeof e}:e.exports=a=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(t)}e.exports=a}}]);