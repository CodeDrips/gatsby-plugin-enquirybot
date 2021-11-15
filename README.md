# gatsby-plugin-enquirybot

A simple plugin that adds the enquirybot live chat window [https://www.enquirybot.com/] to every page of your Gatsby site.

sign up for a free account at [https://www.enquirybot.com/]



## How to use

1. Install using either npm or yarn:

```
yarn add gatsby-plugin-enquirybot
```

or

```
npm install gatsby-plugin-enquirybot
```

2. Add to ```gatsby-config.js```

```javascript
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-enquirybot`,
      options: {
        botId: "YOUR_TIDIO_ID",
        // get this from the tidio script widget
        development: true,
      },
    },
  ],
};
```
