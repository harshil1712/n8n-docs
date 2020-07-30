(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{526:function(e,t,a){e.exports=a.p+"assets/img/workflow.cf4ee3cc.png"},755:function(e,t,a){"use strict";a.r(t);var o=a(26),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"telegram"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#telegram"}},[e._v("#")]),e._v(" Telegram")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://telegram.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Telegram"),o("OutboundLink")],1),e._v(" is a cloud-based instant messaging and voice-over-IP service.")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),o("p",[e._v("You can find authentication information for this node "),o("RouterLink",{attrs:{to:"/nodes/credentials/Telegram/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),o("h2",{attrs:{id:"basic-operations"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),o("ul",[o("li",[e._v("Chat\n"),o("ul",[o("li",[e._v("Get up to date information about a chat")]),e._v(" "),o("li",[e._v("Leave a group, supergroup or channel")]),e._v(" "),o("li",[e._v("Get the member of a chat")]),e._v(" "),o("li",[e._v("Set the description of a chat")]),e._v(" "),o("li",[e._v("Set the title of a chat")])])]),e._v(" "),o("li",[e._v("Callback\n"),o("ul",[o("li",[e._v("Send an answer to a callback query sent from the inline keyboard")])])]),e._v(" "),o("li",[e._v("Message\n"),o("ul",[o("li",[e._v("Edit a text message")]),e._v(" "),o("li",[e._v("Send an audio file")]),e._v(" "),o("li",[e._v("Send a chat action")]),e._v(" "),o("li",[e._v("Send a document")]),e._v(" "),o("li",[e._v("Send a text message")]),e._v(" "),o("li",[e._v("Send a group of photos or videos to an album")]),e._v(" "),o("li",[e._v("Send a photo")]),e._v(" "),o("li",[e._v("Send a sticker")]),e._v(" "),o("li",[e._v("Send a video")])])])]),e._v(" "),o("h2",{attrs:{id:"example-usage"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),o("p",[e._v("This workflow shows you how to send a message to a Telegram channel. You can also find the "),o("a",{attrs:{href:"https://n8n.io/workflows/451",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),o("OutboundLink")],1),e._v(" on this website. This example usage workflow uses the following two nodes.")]),e._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),o("li",[o("a",{attrs:{href:""}},[e._v("Telegram")])])]),e._v(" "),o("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),o("p",[o("img",{attrs:{src:a(526),alt:"A workflow with the Telegram node"}})]),e._v(" "),o("h3",{attrs:{id:"_1-start-node"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),o("p",[e._v("The Start node exists by default when you create a new workflow.")]),e._v(" "),o("h3",{attrs:{id:"_2-telegram-node"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-telegram-node"}},[e._v("#")]),e._v(" 2. Telegram node")]),e._v(" "),o("ol",[o("li",[e._v("First of all, you'll have to enter credentials for the Telegram node. You can find out how to do that "),o("RouterLink",{attrs:{to:"/nodes/credentials/Telegram/"}},[e._v("here")]),e._v(". Use the bot access token.")],1),e._v(" "),o("li",[e._v("Add your bot to the target channel. You can find instructions on how to add a bot to a Telegram channel in the FAQs below.")]),e._v(" "),o("li",[e._v("Enter the target channel ID in "),o("em",[e._v("Chat ID")]),e._v(". You can find instructions on how to find the Chat ID in the FAQs below.")]),e._v(" "),o("li",[e._v("Write the content of your message in the "),o("em",[e._v("Text")]),e._v(" field.")]),e._v(" "),o("li",[e._v("Click on "),o("em",[e._v("Execute Node")]),e._v(" to run the workflow.")])]),e._v(" "),o("h2",{attrs:{id:"faqs"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#faqs"}},[e._v("#")]),e._v(" FAQs")]),e._v(" "),o("h3",{attrs:{id:"how-do-i-add-a-bot-to-a-telegram-channel"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-add-a-bot-to-a-telegram-channel"}},[e._v("#")]),e._v(" How do I add a bot to a Telegram channel?")]),e._v(" "),o("ol",[o("li",[e._v("In the Telegram app, access the target channel and tap on the channel name.")]),e._v(" "),o("li",[e._v('Make sure that the channel name is labeled as "public channel".')]),e._v(" "),o("li",[e._v("Tap on "),o("em",[e._v("Administrators")]),e._v(" and then on "),o("em",[e._v("Add Admin")]),e._v(".")]),e._v(" "),o("li",[e._v("Search for the username of the bot and select it.")]),e._v(" "),o("li",[e._v("Tap on the checkmark on the top-right corner to add the bot to the channel.")])]),e._v(" "),o("h3",{attrs:{id:"how-do-i-find-the-chat-id"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-find-the-chat-id"}},[e._v("#")]),e._v(" How do I find the Chat ID?")]),e._v(" "),o("ol",[o("li",[e._v("In the Telegram app, access the target channel and tap on the channel.")]),e._v(" "),o("li",[e._v("In the "),o("em",[e._v("Invite Link")]),e._v(" field, copy the string after "),o("code",[e._v("https://t.me/")]),e._v(".")]),e._v(" "),o("li",[e._v('Prefix the string with "@" and enter it in the '),o("em",[e._v("Chat ID")]),e._v(" field.")])]),e._v(" "),o("p",[o("strong",[e._v("Example:")]),e._v(" If the link is "),o("code",[e._v("https://t.me/n8ntest")]),e._v(", the Chat ID will be "),o("code",[e._v("@n8ntest")]),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"further-reading"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[e._v("#")]),e._v(" Further Reading")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://medium.com/n8n-io/creating-telegram-bots-with-n8n-a-no-code-platform-fdf1f0928da7",target:"_blank",rel:"noopener noreferrer"}},[e._v("Creating Telegram Bots with n8n, a No-Code Platform"),o("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=n.exports}}]);