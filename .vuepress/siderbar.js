const { createSideBarConfig } = require('./util')
const GIT_PATH = '/blogs/git'
const APPLET_PATH = '/blogs/applet'
const VUE_PATH = '/blogs/vue'
const TYPESCRIPT_PATH = '/blogs/typescript'
const JAVASCRIPT_PATH = '/blogs/javascript'

module.exports = {
    [GIT_PATH]: [
        createSideBarConfig('Git 技巧', GIT_PATH)
    ],
    [APPLET_PATH]: [
        createSideBarConfig('小程序', APPLET_PATH)
    ],
    [VUE_PATH]: [
        createSideBarConfig('Vue 技巧', VUE_PATH)
    ],
    [TYPESCRIPT_PATH]: [
        createSideBarConfig('TypeScript 学习', TYPESCRIPT_PATH)
    ],
    [JAVASCRIPT_PATH]: [
        createSideBarConfig('JavaScript 基础', JAVASCRIPT_PATH)
    ]
}