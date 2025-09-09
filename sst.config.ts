/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "serverless-handbook",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
    };
  },
  async run() {

    new sst.aws.StaticSite("Site", {
      build: {
        command: "npm run build",
        output: "docs/.vitepress/dist"
      },
      // domain: $app.stage === "production" ? "domain.com" : $app.stage === "test" ? "test.domain.com" : undefined,
    })
  },
});
