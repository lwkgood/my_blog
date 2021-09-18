const { createSideBarConfig } = require('./util')
const GIT_PATH = '/blogs/git'
const APPLET_PATH = '/blogs/applet'
const VUE_PATH = '/blogs/vue'

module.exports = {
    [GIT_PATH]: [
        createSideBarConfig('Git 技巧', GIT_PATH)
    ],
    [APPLET_PATH]: [
        createSideBarConfig('小程序', APPLET_PATH)
    ],
    [VUE_PATH]: [
        createSideBarConfig('Vue 技巧', VUE_PATH)
    ]
}