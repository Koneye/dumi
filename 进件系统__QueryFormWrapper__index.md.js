(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{"L19+":function(e,t,a){"use strict";a.r(t);var n=a("0Owb"),r=a("q1tI"),l=a.n(r),c=(a("B2uJ"),a("+su7"),a("qOys"),a("5Yjd")),m=a.n(c),o=l.a.memo((function(){var e=a("3PQu"),t=a("K+nK");a("jCWc");var n=t(a("kPKH"));a("y8nQ");var r=t(a("Vl3Y"));a("5NDa");var c=t(a("5rEg")),m=t(a("oBTY")),o=e(a("q1tI")),i=a("7RL8"),d=(a("gdfu"),function(e){var t=e.form,a=function(e){return console.log(e)};return l.a.createElement(i.QueryFormWrapper,{form:t,handleSearch:a},(0,m["default"])(new Array(9)).map((function(e,a){return l.a.createElement(n["default"],{md:8,sm:24,key:a},l.a.createElement(r["default"].Item,{label:"Label".concat(a)},t.getFieldDecorator("name".concat(a))(l.a.createElement(c["default"],{placeholder:"\u8bf7\u8f93\u5165"}))))})))}),u=r["default"].create()(d),f=u;return o["default"].createElement(f)}));t["default"]=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"queryformwrapper"},l.a.createElement("a",{"aria-hidden":"true",href:"#queryformwrapper"},l.a.createElement("span",{className:"icon icon-link"})),"QueryFormWrapper"),l.a.createElement("h3",{id:"\u8868\u683c\u5934\u90e8\u7b5b\u9009\u8868\u5355"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u8868\u683c\u5934\u90e8\u7b5b\u9009\u8868\u5355"},l.a.createElement("span",{className:"icon icon-link"})),"\u8868\u683c\u5934\u90e8\u7b5b\u9009\u8868\u5355")),l.a.createElement(m.a,Object(n["a"])({source:{jsx:"import react, { useState } from 'react';\nimport { QueryFormWrapper } from 'dumi-lib';\nimport { Form, Col, Input } from 'antd';\n\nconst Demo = ({ form }) => {\n  const handleSearch = values => console.log(values);\n  return (\n    <QueryFormWrapper form={form} handleSearch={handleSearch}>\n      {[...new Array(9)].map((item, index) => (\n        <Col md={8} sm={24} key={index}>\n          <Form.Item label={`Label${index}`}>\n            {form.getFieldDecorator(`name${index}`)(\n              <Input placeholder=\"\u8bf7\u8f93\u5165\" />,\n            )}\n          </Form.Item>\n        </Col>\n      ))}\n    </QueryFormWrapper>\n  );\n};\n\nconst DemoForm = Form.create()(Demo);\n\nexport default DemoForm;"}},{title:"\u57fa\u672c\u4f7f\u7528",desc:'<div class="markdown"><p>\u8868\u683c\u5934\u90e8\u7b5b\u9009\u8868\u5355</p></div>',dependencies:{antd:"3.26.16","dumi-lib":"2.0.6"},files:{}}),l.a.createElement(o,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h3",{id:"\u7ec4\u4ef6\u53c2\u6570"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u7ec4\u4ef6\u53c2\u6570"},l.a.createElement("span",{className:"icon icon-link"})),"\u7ec4\u4ef6\u53c2\u6570"),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{align:"left"},"\u53c2\u6570"),l.a.createElement("th",{align:"left"},"\u8bf4\u660e"),l.a.createElement("th",{align:"center"},"\u7c7b\u578b"),l.a.createElement("th",{align:"center"},"\u9ed8\u8ba4\u503c"),l.a.createElement("th",{align:"center"},"\u5fc5\u586b"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{align:"left"},"form"),l.a.createElement("td",{align:"left"},"\u8868\u5355\u5c5e\u6027"),l.a.createElement("td",{align:"center"},l.a.createElement("code",null,"object")),l.a.createElement("td",{align:"center"},"--"),l.a.createElement("td",{align:"center"},"\u662f")),l.a.createElement("tr",null,l.a.createElement("td",{align:"left"},"handleSearch"),l.a.createElement("td",{align:"left"},"\u70b9\u51fb\u67e5\u8be2\u56de\u8c03"),l.a.createElement("td",{align:"center"},l.a.createElement("code",null,"function")),l.a.createElement("td",{align:"center"},"--"),l.a.createElement("td",{align:"center"},"\u5426")),l.a.createElement("tr",null,l.a.createElement("td",{align:"left"},"handleFormReset"),l.a.createElement("td",{align:"left"},"\u70b9\u51fb\u91cd\u7f6e\u56de\u8c03"),l.a.createElement("td",{align:"center"},l.a.createElement("code",null,"function")),l.a.createElement("td",{align:"center"},"--"),l.a.createElement("td",{align:"center"},"\u5426"))))))}},oBTY:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return o}));var n=a("leS6");function r(e){if(Array.isArray(e))return Object(n["a"])(e)}function l(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}var c=a("Qw5x");function m(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e){return r(e)||l(e)||Object(c["a"])(e)||m()}}}]);