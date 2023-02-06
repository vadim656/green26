module.exports = {
    apps: [
      {
        name: 'front',
        exec_mode: 'cluster',
        instances: 'max',
        script: './.output/server/index.mjs'
      }
    ]
  }