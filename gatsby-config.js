module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "site"
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "taxidata",
        fieldName: "taxidata",
        url:
          "https://api-us-east-1.graphcms.com/v2/ckv73bnqz4zye01xv6bg2h8cs/master"
      }
    }
  ]
};
