(window.webpackJsonp=window.webpackJsonp||[]).push([[226],{672:function(e,t,a){"use strict";a.r(t);var s=a(26),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"node-basics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-basics"}},[e._v("#")]),e._v(" Node Basics")]),e._v(" "),a("h2",{attrs:{id:"types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#types"}},[e._v("#")]),e._v(" Types")]),e._v(" "),a("p",[e._v("There are two main node types in n8n: Trigger nodes and Regular nodes.")]),e._v(" "),a("h3",{attrs:{id:"trigger-nodes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#trigger-nodes"}},[e._v("#")]),e._v(" Trigger Nodes")]),e._v(" "),a("p",[e._v("The Trigger nodes start a workflow and supply the initial data. A workflow can contain multiple trigger nodes but with each execution, only one of them will execute. This is because the other trigger nodes would not have any input as they are the nodes from which the execution of the workflow starts.")]),e._v(" "),a("h3",{attrs:{id:"regular-nodes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#regular-nodes"}},[e._v("#")]),e._v(" Regular Nodes")]),e._v(" "),a("p",[e._v("These nodes do the actual work. They can add, remove, and edit the data in the flow as well as request and send data to external APIs. They can do everything possible with Node.js in general.")]),e._v(" "),a("h2",{attrs:{id:"credentials"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#credentials"}},[e._v("#")]),e._v(" Credentials")]),e._v(" "),a("p",[e._v("External services need a way to identify and authenticate users. This data can range from an API key over an email/password combination to a very long multi-line private key and can be saved in n8n as credentials.")]),e._v(" "),a("p",[e._v("Nodes in n8n can then request that credential information. As an additional layer of security credentials can only be accessed by node types which specifically have the right to do so.")]),e._v(" "),a("p",[e._v("To make sure that the data is secure, it gets saved to the database encrypted. A random personal encryption key is used which gets automatically generated on the first run of n8n and then saved under "),a("code",[e._v("~/.n8n/config")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"expressions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#expressions"}},[e._v("#")]),e._v(" Expressions")]),e._v(" "),a("div",{pre:!0},[a("p",[e._v("With the help of expressions, it is possible to set node parameters dynamically by referencing other data. That can be data from the flow, nodes, the environment or self-generated data. Expressions are normal text with placeholders (everything between {{...}}) that can execute JavaScript code, which offers access to special variables to access data.")]),e._v(" "),a("p",[e._v("An expression could look like this:")]),e._v(" "),a("p",[e._v("My name is: "),a("code",[e._v('{{$node["Webhook"].json["query"]["name"]}}')])]),e._v(" "),a("p",[e._v('This one would return "My name is: " and then attach the value that the node with the name "Webhook" outputs and there select the property "query" and its key "name". So if the node would output this data:')]),e._v(" "),a("div",{pre:!0,attrs:{class:"language-json extra-class"}},[a("pre",{pre:!0,attrs:{"v-pre":"",class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"query"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Jim"')]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])]),a("p",[e._v('the value would be: "My name is: Jim"')]),e._v(" "),a("p",[e._v("The following special variables are available:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("$binary")]),e._v(": Incoming binary data of a node")]),e._v(" "),a("li",[a("strong",[e._v("$evaluateExpression")]),e._v(": Evaluates a string as expression")]),e._v(" "),a("li",[a("strong",[e._v("$env")]),e._v(": Environment variables")]),e._v(" "),a("li",[a("strong",[e._v("$items")]),e._v(": Incoming data from an input node")]),e._v(" "),a("li",[a("strong",[e._v("$json")]),e._v(": Incoming JSON data of a node")]),e._v(" "),a("li",[a("strong",[e._v("$node")]),e._v(": Data of other nodes (binary, context, json, parameter, runIndex)")]),e._v(" "),a("li",[a("strong",[e._v("$parameters")]),e._v(": Parameters of the current node")]),e._v(" "),a("li",[a("strong",[e._v("$runIndex")]),e._v(": The current run index (first time node gets executed it is 0, second time 1, ...)")]),e._v(" "),a("li",[a("strong",[e._v("$workflow")]),e._v(": Returns workflow metadata like: active, id, name")])]),e._v(" "),a("p",[e._v("Normally it is not needed to write the JavaScript variables manually as they can be selected with the help of the Expression Editor.")]),e._v(" "),a("h2",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),a("p",[e._v("Parameters can be set for most nodes in n8n. The values that get set define what exactly a node does.")]),e._v(" "),a("p",[e._v("Parameter values are static by default and are always the same no matter what kind of data the node processes. However, it is possible to set the values dynamically with the help of an Expression. Using Expressions, it is possible to make the parameter value dependent on other factors like the data of flow or parameters of other nodes.")]),e._v(" "),a("p",[e._v("More information about it can be found under "),a("a",{attrs:{href:"#expressions"}},[e._v("Expressions")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"pausing-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pausing-node"}},[e._v("#")]),e._v(" Pausing Node")]),e._v(" "),a("p",[e._v("Sometimes when creating and debugging a workflow, it is helpful to not execute specific nodes. To do that without disconnecting each node, you can pause them. When a node gets paused, the data passes through the node without being changed.")]),e._v(" "),a("p",[e._v("There are two ways to pause a node. You can either press the pause button which gets displayed above the node when hovering over it or select the node and press “d”.")])])}),[],!1,null,null,null);t.default=n.exports}}]);