(window.webpackJsonp=window.webpackJsonp||[]).push([[205],{575:function(e,t,n){"use strict";n.r(t);var a=n(26),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"creating-a-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-node"}},[e._v("#")]),e._v(" Creating a Node")]),e._v(" "),n("p",[e._v("To create your own nodes in n8n, mainly three things have to be defined:")]),e._v(" "),n("ol",[n("li",[e._v("Generic information like name, description, image/icon")]),e._v(" "),n("li",[e._v("The parameters to display via which the user can interact with it")]),e._v(" "),n("li",[e._v("The code to run once the node gets executed")])]),e._v(" "),n("p",[e._v("To simplify the development process, we created a very basic CLI which creates boilerplate code to get started, builds the node (as they are written in TypeScript), and copies it to the correct location.")]),e._v(" "),n("h2",{attrs:{id:"create-the-first-basic-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#create-the-first-basic-node"}},[e._v("#")]),e._v(" Create the first basic node")]),e._v(" "),n("ol",[n("li",[e._v("Install the n8n-node-dev CLI: "),n("code",[e._v("npm install -g n8n-node-dev")])]),e._v(" "),n("li",[e._v("Create and go into the newly created folder in which you want to keep the code of the node")]),e._v(" "),n("li",[e._v("Use CLI to create boilerplate node code: "),n("code",[e._v("n8n-node-dev new")])]),e._v(" "),n("li",[e._v("Answer the questions (the “Execute” node type is the regular node type that you probably want to create).\nIt will then create the node in the current folder.")]),e._v(" "),n("li",[e._v("Program… Add the functionality to the node")]),e._v(" "),n("li",[e._v("Build the node and copy to correct location: "),n("code",[e._v("n8n-node-dev build")]),e._v("\nThat command will build the JavaScript version of the node from the TypeScript code and copy it to the user folder where custom nodes get read from "),n("code",[e._v("~/.n8n/custom/")])]),e._v(" "),n("li",[e._v("Restart n8n and refresh the window so that the new node gets displayed")])]),e._v(" "),n("h2",{attrs:{id:"create-own-custom-n8n-nodes-module"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#create-own-custom-n8n-nodes-module"}},[e._v("#")]),e._v(" Create own custom n8n-nodes-module")]),e._v(" "),n("p",[e._v("If you want to create multiple custom nodes which are either:")]),e._v(" "),n("ul",[n("li",[e._v("Only for yourself/your company")]),e._v(" "),n("li",[e._v("Are only useful for a small number of people")]),e._v(" "),n("li",[e._v("Require many or large dependencies")])]),e._v(" "),n("p",[e._v("It is best to create your own "),n("code",[e._v("n8n-nodes-module")]),e._v(" which can be installed separately.\nThat is an npm package that contains the nodes and is set up in a way\nthat n8n can automatically find and load them on startup.")]),e._v(" "),n("p",[e._v("When creating such a module the following rules have to be followed that n8n\ncan automatically find the nodes in the module:")]),e._v(" "),n("ul",[n("li",[e._v("The name of the module has to start with "),n("code",[e._v("n8n-nodes-")])]),e._v(" "),n("li",[e._v("The "),n("code",[e._v("package.json")]),e._v(" file has to contain a key "),n("code",[e._v("n8n")]),e._v(" with the paths to nodes and credentials")]),e._v(" "),n("li",[e._v("The module has to be installed alongside n8n")])]),e._v(" "),n("p",[e._v("An example starter module which contains one node and credentials and implements\nthe above can be found here:")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/n8n-io/n8n-nodes-starter",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/n8n-io/n8n-nodes-starter"),n("OutboundLink")],1)]),e._v(" "),n("h3",{attrs:{id:"setup-to-use-n8n-nodes-module"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#setup-to-use-n8n-nodes-module"}},[e._v("#")]),e._v(" Setup to use n8n-nodes-module")]),e._v(" "),n("p",[e._v("To use a custom "),n("code",[e._v("n8n-nodes-module")]),e._v(", it needs to be installed alongside n8n.\nFor example like this:")]),e._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Create folder for n8n installation")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" my-n8n\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" my-n8n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Install n8n")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" n8n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Install custom nodes module")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" n8n-nodes-my-custom-nodes\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Start n8n")]),e._v("\nn8n\n")])])]),n("h3",{attrs:{id:"development-testing-of-custom-n8n-nodes-module"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#development-testing-of-custom-n8n-nodes-module"}},[e._v("#")]),e._v(" Development/Testing of custom n8n-nodes-module")]),e._v(" "),n("p",[e._v("This works in the same way as for any other npm module.")]),e._v(" "),n("p",[e._v("Execute in the folder which contains the code of the custom "),n("code",[e._v("n8n-nodes-module")]),e._v("\nwhich should be loaded with n8n:")]),e._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Build the code")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run build\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v('# "Publish" the package locally')]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("link")]),e._v("\n")])])]),n("p",[e._v("Then in the folder in which n8n is installed:")]),e._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[e._v('# "Install" the above locally published module')]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("link")]),e._v(" n8n-nodes-my-custom-nodes\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Start n8n")]),e._v("\nn8n\n")])])]),n("h2",{attrs:{id:"node-development-guidelines"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#node-development-guidelines"}},[e._v("#")]),e._v(" Node Development Guidelines")]),e._v(" "),n("p",[e._v("Please make sure that everything works correctly and that no unnecessary code gets added. It is important to follow the following guidelines:")]),e._v(" "),n("h3",{attrs:{id:"do-not-change-incoming-data"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#do-not-change-incoming-data"}},[e._v("#")]),e._v(" Do not change incoming data")]),e._v(" "),n("p",[e._v("Never change the incoming data a node receives (which can be queried with "),n("code",[e._v("this.getInputData()")]),e._v(") as it gets shared by all nodes. If data has to get added, changed or deleted it has to be cloned and the new data returned. If that is not done, sibling nodes which execute after the current one will operate on the altered data and would process different data than they were supposed to.\nIt is however not needed to always clone all the data. If a node for, example only, changes only the binary data but not the JSON data, a new item can be created which reuses the reference to the JSON item.")]),e._v(" "),n("p",[e._v("An example can be seen in the code of the "),n("a",{attrs:{href:"https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/ReadBinaryFile.node.ts#L69-L83",target:"_blank",rel:"noopener noreferrer"}},[e._v("ReadBinaryFile-Node"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("h3",{attrs:{id:"write-nodes-in-typescript"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#write-nodes-in-typescript"}},[e._v("#")]),e._v(" Write nodes in TypeScript")]),e._v(" "),n("p",[e._v("All code of n8n is written in TypeScript and hence, the nodes should also be written in TypeScript. That makes development easier, faster, and avoids at least some bugs.")]),e._v(" "),n("h3",{attrs:{id:"use-the-built-in-request-library"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#use-the-built-in-request-library"}},[e._v("#")]),e._v(" Use the built in request library")]),e._v(" "),n("p",[e._v("Some third-party services have their own libraries on npm which make it easier to create an integration. It can be quite tempting to use them. The problem with those is that you add another dependency and not only one, you add but also all the dependencies of the dependencies. This means more and more code gets added, has to get loaded, can introduce security vulnerabilities, bugs, and so on. So please use the built-in module which can be used like this:")]),e._v(" "),n("div",{staticClass:"language-typescript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-typescript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" response "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("await")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("helpers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("request")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),n("p",[e._v("That is using the npm package "),n("a",{attrs:{href:"https://github.com/request/request-promise-native",target:"_blank",rel:"noopener noreferrer"}},[n("code",[e._v("request-promise-native")]),n("OutboundLink")],1),e._v(" which is the basic npm "),n("code",[e._v("request")]),e._v(" module but with promises. For a full set of "),n("code",[e._v("options")]),e._v(" consider looking at "),n("a",{attrs:{href:"https://github.com/request/request#requestoptions-callback",target:"_blank",rel:"noopener noreferrer"}},[e._v("the underlying "),n("code",[e._v("request")]),e._v(" options documentation"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("h3",{attrs:{id:"reuse-parameter-names"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#reuse-parameter-names"}},[e._v("#")]),e._v(" Reuse parameter names")]),e._v(" "),n("p",[e._v('When a node can perform multiple operations like edit and delete some kind of entity, for both operations, it would need an entity-id. Do not call them "editId" and "deleteId", call them "id". n8n can handle multiple parameters with the same name without a problem as long as only one is visible. To make sure that is the case, the "displayOptions" can be used. By keeping the same name, the value can be kept if a user switches the operation from "edit" to "delete".')]),e._v(" "),n("h3",{attrs:{id:"create-an-options-parameter"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#create-an-options-parameter"}},[e._v("#")]),e._v(' Create an "Options" parameter')]),e._v(" "),n("p",[e._v('Some nodes may need a lot of options. Add only the very important ones to the top level and for all others, create an "Options" parameter where they can be added if needed. This ensures that the interface stays clean and does not unnecessarily confuse people. A good example of that would be the XML node.')]),e._v(" "),n("h3",{attrs:{id:"follow-existing-parameter-naming-guideline"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#follow-existing-parameter-naming-guideline"}},[e._v("#")]),e._v(" Follow existing parameter naming guideline")]),e._v(" "),n("p",[e._v('There is not much of a guideline yet but if your node can do multiple things, call the parameter which sets the behavior either "mode" (like "Merge" and "XML" node) or "operation" like the most other ones. If these operations can be done on different resources (like "User" or "Order) create a "resource" parameter (like "Pipedrive" and "Trello" node).')]),e._v(" "),n("h3",{attrs:{id:"node-icons"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#node-icons"}},[e._v("#")]),e._v(" Node Icons")]),e._v(" "),n("p",[e._v("Check existing node icons as a reference when you create own ones. The resolution of an icon should be 60x60px and saved as PNG.")])])}),[],!1,null,null,null);t.default=s.exports}}]);