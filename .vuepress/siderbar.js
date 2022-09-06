const { createSideBarConfig } = require('./util')
const GIT_PATH = '/blogs/git'
const APPLET_PATH = '/blogs/applet'
const VUE_PATH = '/blogs/vue'
const JAVASCRIPT_PATH = '/blogs/javascript'
const BOOK_JS_POINT_PATH = '/blogs/book/js-point'
const INTERVIEW_JAVASCRIPT_PATH = '/blogs/interview/JavaScript'
const ARTICLE_PATH = '/blogs/article'

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
    [JAVASCRIPT_PATH]: [
        createSideBarConfig('JavaScript 基础', JAVASCRIPT_PATH)
    ],
    [BOOK_JS_POINT_PATH]: [
        createSideBarConfig('JS重难点实例精讲 笔记', BOOK_JS_POINT_PATH)
    ],
    [INTERVIEW_JAVASCRIPT_PATH]: [
        createSideBarConfig('面试 JS', INTERVIEW_JAVASCRIPT_PATH)
    ],
    [ARTICLE_PATH]: [
        createSideBarConfig('文章', ARTICLE_PATH)
    ]
}