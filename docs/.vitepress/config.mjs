
export default {
  title: 'Opene Labs',
  description: 'HR Lifecycle Copilot Agent | Executive Demonstration',

  themeConfig: {
    nav: [
      { text: 'Overview', link: '/' },
      { text: 'Demo', link: '/demo' },
      { text: 'Architecture', link: '/architecture' },
      { text: 'Roadmap', link: '/roadmap' },
      { text: 'Resources', link: '/resources' }
    ],

    sidebar: [
      {
        text: 'Explore the Prototype',
        items: [
          { text: 'Executive Overview', link: '/' },
          { text: 'Demonstration', link: '/demo' },
          { text: 'Solution Architecture', link: '/architecture' },
          { text: 'Development Roadmap', link: '/roadmap' },
          { text: 'Supporting Resources', link: '/resources' }
        ]
      }
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: 'Opene Labs | Hackathon Prototype',
      copyright: 'Demonstration and evaluation purposes'
    }
  }
}

