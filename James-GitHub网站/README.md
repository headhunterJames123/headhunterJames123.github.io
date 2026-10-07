# James Zhang · 个人网站

纯静态网站，无需安装依赖。包含五个专业方向、15 个长期关注岗位、岗位搜索与筛选、详情弹窗、文章区域和联系方式。个人信息沿用原仓库 james-homepage/content.js；岗位未确认在招，因此标注为“长期关注”。文章暂为空，不生成虚构个人观点。

## 预览

双击 index.html 即可打开。CSS、JS 文件必须与 index.html 放在同一目录。

## 发布到现有 GitHub Pages

目标仓库：https://github.com/headhunterJames123/headhunterJames123.github.io

1. 在仓库根目录选择 Add file → Upload files。
2. 上传本目录内的 index.html、styles.css、app.js、content.js 和 .nojekyll 文件，不要把外层 personal-site 文件夹一起上传。旧 james-homepage 文件夹可以保留。
3. 提交到 main 分支。
4. 在 Settings → Pages 中选择 Deploy from a branch，分支 main，目录 /(root)，点击 Save。需要仓库管理员或维护者权限。
5. 等待 Pages 部署成功后访问 https://headhunterjames123.github.io/ 。

官方参考：https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

当前交付未推送：已连接的 GitHub 账号对此仓库没有写入权限。

## 修改个人信息

只编辑 content.js。修改 name、role、headline、intro、about。email、wechat、linkedin 留空则不展示相应联系方式。内容会公开，不填写候选人或客户保密资料。

## 新增职位

在 jobs 数组中复制一项并修改，项目之间用英文逗号分隔：

```js
{
  "title": "岗位名称",
  "category": "大模型与多模态",
  "location": "上海 / 北京",
  "type": "全职",
  "status": "正在招聘",
  "summary": "岗位介绍与团队信息。",
  "requirements": ["要求一", "要求二"],
  "url": ""
}
```

筛选按钮会自动更新。岗位暂停后修改 status；如需从网站移除，删除该项。

## 新增内容

把 posts: [] 改为以下数组，后续复制其中一项即可。正文支持换行（写作 \n）。外链仅支持 http/https。

```js
"posts": [
  {
    "title": "文章标题",
    "category": "行业观察",
    "date": "2026-10-07",
    "excerpt": "首页显示的简短介绍。",
    "body": "文章正文。\n可以继续写第二段。",
    "url": ""
  }
]
```

填写 url 时直接跳转到完整文章；留空则在弹窗中显示 body。所有内容通过 GitHub 编辑 content.js 并提交后发布，不提供在线后台或访客编辑功能。

## 验证

已检查 JavaScript 语法、内容数据、HTML 本地资源和导航锚点。当前会话没有可用浏览器控制工具，未完成浏览器视觉与交互验收。
