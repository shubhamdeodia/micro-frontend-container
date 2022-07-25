module.exports = {
  allowCustomScopes: true,
  allowTicketNumber: true,
  isTicketNumberRequired: true,
  // override the messages, defaults are as follows
  messages: {
    body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',

    breaking: 'List any BREAKING CHANGES (optional):\n',

    confirmCommit: 'Are you sure you want to proceed with the commit above?',
    // scope: '\nDenote the SCOPE of this change (optional):',
    // used if allowCustomScopes is true
    customScope: 'Denote the SCOPE of this change (optional):',
    footer: 'List any JIRA Ticket it closes. E.g.: #EFESOL-123, #EPFEBL-123:\n',
    subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
    type: "Select the type of change that you're committing:",
  },

  // ticketNumberPrefix: 'EFESOL-',
  // ticketNumberRegExp: '\\d{1,5}',
  // it needs to match the value for field type. Eg.: 'fix'
  scopeOverrides: {
    chore: [
      { name: 'CORE' },
      { name: 'BL' },
      { name: 'PT' },
      { name: 'ODI' },
      { name: 'PUR' },
      { name: 'TSR' },
      { name: 'LV' },
      { name: 'ICV' },
    ],
    feat: [
      { name: 'CORE' },
      { name: 'BL' },
      { name: 'PT' },
      { name: 'ODI' },
      { name: 'PUR' },
      { name: 'TSR' },
      { name: 'LV' },
      { name: 'ICV' },
    ],
    fix: [
      { name: 'CORE' },
      { name: 'BL' },
      { name: 'PT' },
      { name: 'ODI' },
      { name: 'PUR' },
      { name: 'TSR' },
      { name: 'LV' },
      { name: 'ICV' },
    ],
    refactor: [
      { name: 'CORE' },
      { name: 'BL' },
      { name: 'PT' },
      { name: 'ODI' },
      { name: 'PUR' },
      { name: 'TSR' },
      { name: 'LV' },
      { name: 'ICV' },
    ],
  },

  scopes: [],

  // skip any questions you want
  skipQuestions: ['body'],

  // limit subject length
  subjectLimit: 100,

  types: [
    { name: 'feat:     A new feature', value: 'feat' },
    { name: 'fix:      A bug fix', value: 'fix' },
    { name: 'docs:     Documentation only changes', value: 'docs' },
    {
      name: 'refactor: A code change that neither fixes a bug nor adds a feature',
      value: 'refactor',
    },
    {
      name: 'perf:     A code change that improves performance',
      value: 'perf',
    },
    { name: 'test:     Adding missing tests', value: 'test' },
    {
      name: 'chore:    Changes to the build process or auxiliary tools\n            and libraries such as documentation generation',
      value: 'chore',
    },
    { name: 'WIP:      Work in progress', value: 'WIP' },
  ],
  // breaklineChar: '|', // It is supported for fields body and footer.
  // footerPrefix : 'ISSUES CLOSED:'
  // askForBreakingChangeFirst : true, // default is false
};
