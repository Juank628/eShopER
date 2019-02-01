import React, { Component } from "react";

export default class Chat extends Component {
  componentDidMount() {
    if (window["Tawk_API"] === undefined) {
      this.createApi();
    } else {
      window["Tawk_API"].showWidget();
    }
  }

  componentWillUnmount() {
    window["Tawk_API"].hideWidget();
  }

  createApi = act => {
    if (window["Tawk_API"] === undefined) {
      var Tawk_API = "6d7415da9da81fcb14e7686d9e2188be544d5047" || {};
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/5c51ba7eab5284048d0f97af/1d2g9qmgu";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    }
  };

  render() {
    return <div />;
  }
}
