module.exports = {
  types: [
    {
      value: 'feat',
      name : 'feat:     提交新功能'
    },
    {
      value: 'fix',
      name : 'fix:      A bug fix'
    },
    {
      value: 'docs',
      name : 'docs:     Documentation only changes'
    },
    {
      value: 'style',
      name : 'style:    Only style changes'
    },
    {
      value: 'refactor',
      name : 'refactor: A code change that neither fixes a bug nor adds a feature'
    },
    {
      value: 'perf',
      name : 'perf:     A code change that improves performance'
    },
    {
      value: 'test',
      name : 'test:     Add missing tests or correcting existing tests'
    },
    {
      value: 'chore',
      name : 'chore:    Change FrameWork or cli'
    },
    {
      value: 'revert',
      name : 'revert:   Revert to a commit'
    }
  ],
  allowBreakingChanges: ['feat', 'fix', 'refactor', 'perf', 'chore', 'revert']
};