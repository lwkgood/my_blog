const sidebar = require('./siderbar.js');
module.exports = {
  "title": "Mike-Blog",
  "description": "但行好事，莫问前程",
  "dest": "public",
  "base": "/my_blog",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "mode": 'light',
    "subSidebar": 'auto',
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "生活规划",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/recoluan",
            "icon": "reco-github"
          }
        ]
      },
      {
        "text": "时间线",
        "link": "/timeline/",
        "icon": "reco-date"
      }
    ],
    sidebar,
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "目录索引"
      },
      "tag": {
        "location": 5,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "My github",
        "desc": "Mike's github.",
        "avatar": "",
        "link": "https://github.com/lwkgood"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "Mike",
    "authorAvatar": "/avatar.png",
    "startYear": "2021"
  },
  "markdown": {
    "lineNumbers": true
  },
  "plugins": [
    [
      // 看板娘
      "vuepress-plugin-helper-live2d",
      {
        // 否开启控制台日志打印
        "log": true,
        "live2d": {
          // 是否启用
          "enable": true,
          // 模型名称
          "model": 'koharu',
          "display": {
            "vOffset": -55 // 垂直偏移 default 0
          },
          "mobile": {
            "show": false // 是否在移动设备上显示
          },
          "react": {
            "opacity": 0.8 // 模型透明度 default 0.8
          }
        }
      }
    ],
    [
      // 动态标题配置
      "dynamic-title",
      {
        "showText": "(/≧▽≦/)咦！又好了！",
        "hideText": "(●—●)喔哟，崩溃啦！",
        "recoverTime": 2000
      }
    ]
  ]
}