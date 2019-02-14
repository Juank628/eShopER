import React, { Component } from "react";

export default class LiveChat extends Component {
  render() {
    window.__lc = window.__lc || {};
    window.__lc.license = 10611377;
    (function() {
      var lc = document.createElement("script");
      lc.type = "text/javascript";
      lc.async = true;
      lc.src =
        ("https:" === document.location.protocol ? "https://" : "http://") +
        "cdn.livechatinc.com/tracking.js";
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(lc, s);
    })();
    return (
      <div>
        <noscript>
          <a
            href="https://www.livechatinc.com/chat-with/10611377/"
            rel="nofollow"
          >
            Chat with us
          </a>
          , powered by{" "}
          <a
            href="https://www.livechatinc.com/?welcome"
            //rel="noopener nofollow"
            target="_blank"
            rel="noopener noreferrer" //by me
          >
            LiveChat
          </a>
        </noscript>
      </div>
    );
  }
}
