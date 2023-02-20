const { createSideBarConfig } = require('./util')
const GIT_PATH = '/blogs/git'
const APPLET_PATH = '/blogs/applet'
const VUE_PATH = '/blogs/vue'
const INTERVIEW_JAVASCRIPT_PATH = '/blogs/interview'
const ARTICLE_PATH = '/blogs/article'

module.exports = {
    [GIT_PATH]: [
        createSideBarConfig('Git', GIT_PATH)
    ],
    [APPLET_PATH]: [
        createSideBarConfig('小程序', APPLET_PATH)
    ],
    [VUE_PATH]: [
        createSideBarConfig('Vue', VUE_PATH)
    ],
    [INTERVIEW_JAVASCRIPT_PATH]: [
        createSideBarConfig('面试', INTERVIEW_JAVASCRIPT_PATH)
    ],
    [ARTICLE_PATH]: [
        createSideBarConfig('文章', ARTICLE_PATH)
    ]
}