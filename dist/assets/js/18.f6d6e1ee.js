(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{175:function(t,e,a){"use strict";a.r(e);var n=a(0),r=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"ldap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ldap","aria-hidden":"true"}},[t._v("#")]),t._v(" Ldap")]),t._v(" "),a("p",[t._v("为了兼容更多的软件，我们引进了LDAP协议，引入LDAP企业可以整合更多的企业级软件。")]),t._v(" "),a("h2",{attrs:{id:"支持ldap的软件列表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#支持ldap的软件列表","aria-hidden":"true"}},[t._v("#")]),t._v(" 支持LDAP的软件列表")]),t._v(" "),a("p",[t._v("包括不仅限于：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("典型产品")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("电子邮件服务")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("大多数主流邮件服务软件，以及全球知名的云服务邮件如腾讯企业邮箱、阿里云邮箱、网易邮箱等等")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("企业通讯录和日历")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("大多数兼容CardDav和 CalDav 协议的通讯录和日历协作产品")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("研发综合管理")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("gitlab、github Enteprise、Phabricator、gitea、gogs等")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("知识管理")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("confluence、MediaWiki 等大多数知识管理、知识库、知识协作产品")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("企业网盘/镜像")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("OwnCloud、NextCloud、Harbor等")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("项目/集成/错误管理")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Jira、Trello、Bugzilla,Redmine,Jenkins")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("数据看板")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Grafana、Apache Superset")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("实时通讯")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Slack、Mattermost、IBM SameTime等")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("虚拟专线")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("OpenVPN")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("证书管理")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("OpenSSH")])])])]),t._v(" "),a("h2",{attrs:{id:"ldap-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ldap-配置","aria-hidden":"true"}},[t._v("#")]),t._v(" Ldap 配置")]),t._v(" "),a("h3",{attrs:{id:"docker-启动openldap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-启动openldap","aria-hidden":"true"}},[t._v("#")]),t._v(" docker 启动openldap")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("\ndocker run --name ldap --env LDAP_ORGANISATION"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bullteam"')]),t._v(" --env LDAP_DOMAIN"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bullteam.com"')]),t._v(" --env LDAP_ADMIN_PASSWORD"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"123456"')]),t._v(" -p 389:389 -p 636:639 --detach osixia/openldap\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("值")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("LDAP_ORGANISATION")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("组织")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("LDAP_DOMAIN")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("域")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("LDAP_ADMIN_PASSWORD")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("密码")])])])])])}],!1,null,null,null);e.default=r.exports}}]);