const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: "zk669h",
  e2e: {
    baseUrl: 'https://amazon.com'
  }
})
