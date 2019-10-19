(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{158:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"配置zeus"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置zeus","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置Zeus")]),t._v(" "),a("p",[t._v("环境配置是由Go第三方库viper来实现的。当程序启动时，viper会去读取yaml配置文件，以及将环境变量与配置文件中的变量对应起来。")]),t._v(" "),a("p",[t._v("以下是yaml配置文件。")]),t._v(" "),a("h2",{attrs:{id:"yaml-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#yaml-配置","aria-hidden":"true"}},[t._v("#")]),t._v(" Yaml 配置")]),t._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" debug\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mysql")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dsn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("\n    $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("MYSQL_USERNAME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("MYSQL_PASSWORD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("@tcp($"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("MYSQL_HOST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("MYSQL_PORT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(")/$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("MYSQL_DB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("?")]),t._v("charset=utf8"),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("&parseTime")]),t._v("=True"),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("&loc")]),t._v("=Local\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("pool")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("min")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("redis")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("REDIS_HOST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("REDIS_PORT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("auth")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("REDIS_PASSWORD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("pool")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("min")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jwt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("private")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" keys/jwt_private_key.pem\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("public")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" keys/jwt_public_key.pem\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("expiresat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 3600"),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("*24")]),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("*1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("casbin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("model")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("rule_0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" config/casbin/rbac_model_0.conf\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cors")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("allow_origins")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("allow_headers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("allow_credentials")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("max_age")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7200")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("lang")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("types")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" zh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("CN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v("en"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("US\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("names")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 简体中文"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v("English\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("domain")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bullteam.local\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dingtalk")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("CorpId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("CorpSecret")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("AgentID")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("SSOSecret")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("SNSAppID")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" dingoa1uudyxl2dcjvqpij\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("SNSSecret")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" o8YvDT5l2zb9dikuCbz0HXOiOaVwdyVResrDVyFaqojv0EwZp8ygAemFyoSBh_lz\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("email")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("username")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" xxx@qq.com\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("password")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" xxxxxxxx\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" smtp.qq.com\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("25")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" xxxxxx@qq.com\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ldap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("addr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 127.0.0.1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("389")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("baseDn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" dc=bullteam"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("dc=com\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("userDn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cn=admin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("dc=bullteam"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("dc=com\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("bindDn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cn=admin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("dc=bullteam"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("dc=com\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("bindPass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" zeus@admin"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#123456")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("authFilter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" (&(uid=%s))\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("attributes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cn"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"displayName"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mail"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tls")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("startTLS")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br"),a("span",{staticClass:"line-number"},[t._v("36")]),a("br"),a("span",{staticClass:"line-number"},[t._v("37")]),a("br"),a("span",{staticClass:"line-number"},[t._v("38")]),a("br"),a("span",{staticClass:"line-number"},[t._v("39")]),a("br"),a("span",{staticClass:"line-number"},[t._v("40")]),a("br"),a("span",{staticClass:"line-number"},[t._v("41")]),a("br"),a("span",{staticClass:"line-number"},[t._v("42")]),a("br"),a("span",{staticClass:"line-number"},[t._v("43")]),a("br"),a("span",{staticClass:"line-number"},[t._v("44")]),a("br"),a("span",{staticClass:"line-number"},[t._v("45")]),a("br"),a("span",{staticClass:"line-number"},[t._v("46")]),a("br"),a("span",{staticClass:"line-number"},[t._v("47")]),a("br"),a("span",{staticClass:"line-number"},[t._v("48")]),a("br"),a("span",{staticClass:"line-number"},[t._v("49")]),a("br"),a("span",{staticClass:"line-number"},[t._v("50")]),a("br"),a("span",{staticClass:"line-number"},[t._v("51")]),a("br"),a("span",{staticClass:"line-number"},[t._v("52")]),a("br"),a("span",{staticClass:"line-number"},[t._v("53")]),a("br"),a("span",{staticClass:"line-number"},[t._v("54")]),a("br"),a("span",{staticClass:"line-number"},[t._v("55")]),a("br"),a("span",{staticClass:"line-number"},[t._v("56")]),a("br"),a("span",{staticClass:"line-number"},[t._v("57")]),a("br")])]),a("h2",{attrs:{id:"环境变量列表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境变量列表","aria-hidden":"true"}},[t._v("#")]),t._v(" 环境变量列表")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("环境变量")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("yaml变量路径")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("默认")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("MYSQL_USERNAME")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("mysql.dsn")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("mysql 用户名")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("root")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("MYSQL_PASSWORD")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("mysql.dsn")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("mysql 密码")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("root")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("MYSQL_HOST")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("mysql.dsn")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("mysql IP 连接地址")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("root")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("MYSQL_PORT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("mysql.dsn")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("mysql 端口号")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("3306")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("MYSQL_DB")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("mysql.dsn")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("mysql 数据库名")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("root")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("REDIS_HOST")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("redis.host")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("redis IP链接地址")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("root")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("REDIS_PORT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("redis.port")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("redis 端口号")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("3309")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("REDIS_PASSWORD")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("redis.password")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("redis 密码")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})])])])])}],!1,null,null,null);s.default=e.exports}}]);