"use strict";

const React = require('react');

exports.onRenderBody = ({
  setHeadComponents
}, {
  botId,
  development = true
}) => {
  let source = "//launcher.enquirybot.com/index.js";

  if (!development && process.env.NODE_ENV === 'development') {
    console.log('"development" is set to false - gatsby-plugin-enquirybot will not load in development mode');
    return null;
  }

  if (!botId) {
    console.log('No Bot ID key provided! gatsby-plugin-tidio will not load. Please add tidioId in gatsby-config.js');
    return null;
  }

  return setHeadComponents([/*#__PURE__*/React.createElement("script", {
    key: "gatsby-plugin-enquirybot",
    src: source,
    'data-bot-id': botId
  })]);
};
