(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{588:function(t,s,a){"use strict";a.r(s);var i=a(6),e=Object(i.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"拉取了最新master代码后-想回退上一个版本该怎么做"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拉取了最新master代码后-想回退上一个版本该怎么做"}},[t._v("#")]),t._v(" 拉取了最新master代码后，想回退上一个版本该怎么做？")]),t._v(" "),a("p",[t._v("使用git reset 回退项目版本，可以回退到任意已经提交过的版本。已 add / commit但未push的文件也适用")]),t._v(" "),a("p",[t._v("步骤一：")]),t._v(" "),a("p",[t._v("先用 git log 查看具体commit的哈希值")]),t._v(" "),a("p",[a("img",{attrs:{src:t.$withBase("/git/002/1.png")}})]),t._v(" "),a("p",[t._v("步骤二：")]),t._v(" "),a("p",[t._v("reset 到指定版本")]),t._v(" "),a("p",[a("img",{attrs:{src:t.$withBase("/git/002/2.png")}})]),t._v(" "),a("h2",{attrs:{id:"如何查看和切换账号-如何查看提交历史"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何查看和切换账号-如何查看提交历史"}},[t._v("#")]),t._v(" 如何查看和切换账号?如何查看提交历史？")]),t._v(" "),a("p",[t._v("1.查看当前登录账号")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git config user.name\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("2.查看当前登录邮箱：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git config user.email\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("3.修改用户名和邮箱")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('git config --global user.name "Your_username"\ngit config --global user.email "Your_email"\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("4.查看提交历史")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git log\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"拉取远程master分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拉取远程master分支"}},[t._v("#")]),t._v(" 拉取远程master分支？")]),t._v(" "),a("p",[t._v("1.git branch")]),t._v(" "),a("p",[a("img",{attrs:{src:t.$withBase("/git/002/3.png")}})]),t._v(" "),a("p",[t._v("2.git pull origin master")]),t._v(" "),a("p",[a("img",{attrs:{src:t.$withBase("/git/002/4.png")}})]),t._v(" "),a("h2",{attrs:{id:"解决拉取远程代码到本地分支发生冲突"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决拉取远程代码到本地分支发生冲突"}},[t._v("#")]),t._v(" 解决拉取远程代码到本地分支发生冲突？")]),t._v(" "),a("p",[t._v("1.先看冲突问题")]),t._v(" "),a("p",[t._v("命令：git pull origin master")]),t._v(" "),a("p",[t._v("feat-wenke是本地分支，需要拉取远程更新后的master主分支")]),t._v(" "),a("p",[a("img",{attrs:{src:t.$withBase("/git/002/5.png")}})]),t._v(" "),a("p",[t._v("在VS code 编辑器上解决冲突问题")]),t._v(" "),a("p",[t._v("1.点击搜索，输入 <<<")]),t._v(" "),a("p",[a("img",{attrs:{src:t.$withBase("/git/002/6.png")}})]),t._v(" "),a("p",[t._v("2.在冲突地方，点击 采用传入的更改即可！！！")]),t._v(" "),a("p",[a("img",{attrs:{src:t.$withBase("/git/002/7.png")}})]),t._v(" "),a("p",[t._v("3.如果更改后，没有重新提交，就拉取又更新的master主分支，这样会出现下面问题")]),t._v(" "),a("p",[a("img",{attrs:{src:t.$withBase("/git/002/8.png")}})]),t._v(" "),a("p",[t._v("4.需要先提交，后拉取即可")]),t._v(" "),a("p",[a("img",{attrs:{src:t.$withBase("/git/002/9.png")}})]),t._v(" "),a("h2",{attrs:{id:"本地-git-init-生成master分支-与-远程仓库-master-分支冲突"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本地-git-init-生成master分支-与-远程仓库-master-分支冲突"}},[t._v("#")]),t._v(" 本地 git init 生成master分支 与 远程仓库 master 分支冲突？")]),t._v(" "),a("p",[t._v("1.git init 初始化，本地生成master分支")]),t._v(" "),a("p",[a("img",{attrs:{src:t.$withBase("/git/002/10.png")}})]),t._v(" "),a("p",[t._v("2.git pull origin master")]),t._v(" "),a("p",[a("img",{attrs:{src:t.$withBase("/git/002/11.png")}})]),t._v(" "),a("p",[t._v("3.git add .")]),t._v(" "),a("p",[a("img",{attrs:{src:t.$withBase("/git/002/12.png")}})]),t._v(" "),a("p",[t._v("4.git commit -am ''")]),t._v(" "),a("p",[a("img",{attrs:{src:t.$withBase("/git/002/13.png")}})]),t._v(" "),a("p",[t._v("5.git push 需要先与远程仓库建立联系")]),t._v(" "),a("p",[a("img",{attrs:{src:t.$withBase("/git/002/14.png")}})]),t._v(" "),a("p",[t._v("6.git push --set-upstream origin master 出现问题")]),t._v(" "),a("p",[a("img",{attrs:{src:t.$withBase("/git/002/15.png")}})]),t._v(" "),a("p",[t._v("7.解决方法：由于是初始化项目，就直接覆盖了远程仓库所有代码，但是千万注意这个方式不太可取，防止覆盖不应该覆盖的代码，注意! git push -u origin master -f")]),t._v(" "),a("p",[a("img",{attrs:{src:t.$withBase("/git/002/16.png")}})]),t._v(" "),a("h2",{attrs:{id:"发起合并代码请求后-检查文件变动地方的几个注意点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发起合并代码请求后-检查文件变动地方的几个注意点"}},[t._v("#")]),t._v(" 发起合并代码请求后，检查文件变动地方的几个注意点？")]),t._v(" "),a("p",[t._v("1.创建合并请求")]),t._v(" "),a("p",[a("img",{attrs:{src:t.$withBase("/git/002/17.png")}}),t._v(" "),a("img",{attrs:{src:t.$withBase("/git/002/18.png")}})]),t._v(" "),a("p",[t._v("2.检查文件变动，需要注意几个点")]),t._v(" "),a("p",[a("img",{attrs:{src:t.$withBase("/git/002/19.png")}})]),t._v(" "),a("ol",[a("li",[t._v("去掉没必要的空格，除了是用于区分代码")]),t._v(" "),a("li",[t._v("接口功能的写法（一个功能只对应当前的逻辑，不掺杂其他功能的逻辑。例如当时写一个置空当前状态的功能，我当时放在了接口功能上（混杂了），但是更好的做法是可以放在页面卸载时useEffect来去置空状态）")]),t._v(" "),a("li",[t._v("样式命名最好有个命名空间（有个最高代的命名，例如 .first .first-item .first-item2）")]),t._v(" "),a("li",[t._v("外部引用的文件统一放在当前页面的最顶部，内部引用的文件则放在外部引用文件的下面")]),t._v(" "),a("li",[t._v("接口返回的结果如果为空，在增删改查这类的功能，可以自己加上提示语（成功时），失败的时候，最好联系后端，提供有错误的信息")]),t._v(" "),a("li",[t._v("ts定义数据类型的时候可以不加逗号，（interface）")])]),t._v(" "),a("h2",{attrs:{id:"撤销本地修改呢"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#撤销本地修改呢"}},[t._v("#")]),t._v(" 撤销本地修改呢？")]),t._v(" "),a("p",[t._v("使用 git checkout 撤销本地修改，即放弃对本地已修改但尚未提交的文件的修改，还原其到未修改前的状态")]),t._v(" "),a("p",[t._v("注意： 已"),a("strong",[t._v("add/ commit")]),t._v("的文件不适用个方法")]),t._v(" "),a("p",[t._v("方法一：撤销对所有已修改但未提交的文件的修改，但不包括新增的文件")]),t._v(" "),a("p",[a("img",{attrs:{src:t.$withBase("/git/002/20.png")}})]),t._v(" "),a("p",[t._v("方法二：git checkout filename 撤销对指定文件的修改，filename 为文件名")]),t._v(" "),a("p",[a("strong",[t._v("当前分支提交过一次合并后，被其他人合并了分支，发现bug修复后，再次提交，多出无用的commit?")])]),t._v(" "),a("p",[t._v("先看问题")]),t._v(" "),a("p",[a("img",{attrs:{src:t.$withBase("/git/002/21.png")}})]),t._v(" "),a("p",[t._v("解决方式")]),t._v(" "),a("p",[a("img",{attrs:{src:t.$withBase("/git/002/22.png")}}),t._v(" "),a("img",{attrs:{src:t.$withBase("/git/002/23.png")}})]),t._v(" "),a("h2",{attrs:{id:"切换到指定分支并拉取当前分支最新代码时-remote-invalid-credentials-fatal-authentication-failed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#切换到指定分支并拉取当前分支最新代码时-remote-invalid-credentials-fatal-authentication-failed"}},[t._v("#")]),t._v(" 切换到指定分支并拉取当前分支最新代码时，remote: invalid credentials,fatal: Authentication failed？")]),t._v(" "),a("p",[a("img",{attrs:{src:t.$withBase("/git/002/24.png")}})])])}),[],!1,null,null,null);s.default=e.exports}}]);