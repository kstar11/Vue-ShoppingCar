/** @format */

module.exports = {
  types: [
    {
      value: 'feat',
      name: 'feat:     提交新功能',
    },
    {
      value: 'fix',
      name: 'fix:      修复Bug',
    },
    {
      value: 'docs',
      name: 'docs:     修改代码注释或说明文档',
    },
    {
      value: 'style',
      name: 'style:    修改样式文件或样式风格',
    },
    {
      value: 'refactor',
      name: 'refactor: 重写/重构功能',
    },
    {
      value: 'perf',
      name: 'perf:     针对性优化',
    },
    {
      value: 'test',
      name: 'test:     测试用例',
    },
    {
      value: 'chore',
      name: 'chore:    修改框架构成,如:新增/移除某第三方库,修改webpack配置',
    },
    {
      value: 'revert',
      name: 'revert:   代码回滚',
    },
  ],
  scopes:[{name:'op'},{name:'process'}],
  messages: {
    type: '选择更改类型:\n',
    scope: '更改的模块|功能|范围:\n',
    customScope:'请输入更改的模块|功能|范围\n',
    subject: '简短描述:\n',
    body: '详细描述. 使用"|"换行:\n',
    breaking: 'Breaking Changes列表:\n',
    footer: '关闭的禅道bug列表. Eg: 10086,10010:\n',
    confirmCommit: '确认提交?',
  },
  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix', 'refactor'],
};
