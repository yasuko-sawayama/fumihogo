{
  "presets": [
    [
      "env",
      {
        "modules": false,
        "targets": {
          "browsers": "> 2%",
          "uglify": true
        },
        "useBuiltIns": true
      }
    ],
    "react"
  ],
  "plugins": [
    "react-hot-loader/babel",
    "@babel/plugin-proposal-class-properties"
  ]
}