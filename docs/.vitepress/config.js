export default {
  title: 'Serverless Handbook',
  description: 'Jimmy Dahlqvist\'s learnings and experiences with serverless on AWS',
  ignoreDeadLinks: true,
  
  head: [
    // Favicon and Icons
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }],
    
    // Basic Meta
    ['meta', { name: 'author', content: 'Jimmy Dahlqvist' }],
    ['meta', { name: 'theme-color', content: '#3b82f6' }],
    
    // Open Graph / Facebook
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Serverless Handbook' }],
    ['meta', { property: 'og:title', content: 'Serverless Handbook' }],
    ['meta', { property: 'og:description', content: 'AWS Serverless solutions, tutorials, and patterns by Jimmy Dahlqvist - AWS Serverless Hero' }],
    ['meta', { property: 'og:image', content: '/og-image.png' }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { property: 'og:image:alt', content: 'Serverless Handbook - AWS Serverless & Event-Driven Architecture' }],
    
    // Twitter Card
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: '@jimmydahlqvist' }],
    ['meta', { name: 'twitter:creator', content: '@jimmydahlqvist' }],
    ['meta', { name: 'twitter:title', content: 'Serverless Handbook' }],
    ['meta', { name: 'twitter:description', content: 'AWS Serverless solutions, tutorials, and patterns by Jimmy Dahlqvist - AWS Serverless Hero' }],
    ['meta', { name: 'twitter:image', content: '/og-image.png' }],
    ['meta', { name: 'twitter:image:alt', content: 'Serverless Handbook - AWS Serverless & Event-Driven Architecture' }]
  ],

  themeConfig: {
    logo: '/serverless-handbook-cover-image.png',
    siteTitle: 'Serverless Handbook',
    
    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Solutions', link: '/solutions/', activeMatch: '/solutions/' },
      { text: 'Tutorials', link: '/tutorials/', activeMatch: '/tutorials/' },
      { text: 'Workshops', link: '/workshops/', activeMatch: '/workshops/' },
      { text: 'Patterns', link: '/patterns/', activeMatch: '/patterns/' },
      {
        text: 'Connect',
        items: [
          { text: 'Blog', link: 'https://jimmydqv.com' },
          { text: 'LinkedIn', link: 'https://www.linkedin.com/in/dahlqvistjimmy/' },
          { text: 'Twitter', link: 'https://twitter.com/jimmydahlqvist' },
          { text: 'YouTube', link: 'https://youtube.com/playlist?list=PLTNLZCwlGJtjZ_8TiJmLSEI5WXYWbXAo0' }
        ]
      }
    ],

    sidebar: {
      '/solutions/': [
        {
          text: 'Solutions',
          items: [
            { text: 'Auth at CloudFront Edge', link: '/solutions/auth-at-cloudfront-edge/' },
            { text: 'Auth PEP/PDP', link: '/solutions/auth-pep-pdp/' },
            { text: 'CloudFront Statistics', link: '/solutions/cloudfront-statistics-solution/' },
            { text: 'Connected BBQ SaaS', link: '/solutions/connected-bbq-saas/' },
            { text: 'Image Moderation', link: '/solutions/image-moderation/' },
            { text: 'Self-Service Certificates', link: '/solutions/self-service-certificates/' },
            { text: 'Serverless URL Redirect', link: '/solutions/serverless-url-redirect/' },
            { text: 'Slack Channel Poster', link: '/solutions/slack-channel-poster/' }
          ]
        }
      ],
      '/tutorials/': [
        {
          text: 'Tutorials',
          items: [
            {
              text: 'Containers',
              collapsed: false,
              items: [
                { text: 'Java on ECS Fargate', link: '/tutorials/containers/java-application-on-ecs-fargate/' }
              ]
            },
            {
              text: 'Graviton',
              collapsed: false,
              items: [
                { text: 'HTTP API Lambda Golang', link: '/tutorials/graviton/http-api-lambda-golang/' },
                { text: 'HTTP API Lambda Python', link: '/tutorials/graviton/http-api-lambda-python/' }
              ]
            },
            {
              text: 'IoT',
              collapsed: false,
              items: [
                { text: 'Multi-Region IoT', link: '/tutorials/io-t/multi-region-iot/' }
              ]
            }
          ]
        }
      ],
      '/workshops/': [
        {
          text: 'Workshops',
          items: [
            { text: 'Event-Driven AI Translation Slack Bot', link: '/workshops/event-driven-ai-translation-slack-bot/' }
          ]
        }
      ],
      '/patterns/': [
        {
          text: 'Architecture Patterns',
          items: [
            { text: 'Retry Backoff Jitter', link: '/patterns/retry-backoff-jitter/' },
            { text: 'Storage First', link: '/patterns/storage-first/' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/jimmydqv/serverless-handbook' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/dahlqvistjimmy/' },
      { icon: 'twitter', link: 'https://twitter.com/jimmydahlqvist' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 Jimmy Dahlqvist - AWS Serverless Hero'
    },

    editLink: {
      pattern: 'https://github.com/jimmydqv/serverless-handbook/edit/main/:path',
      text: 'Edit this page on GitHub'
    }
  },

  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    },
    lineNumbers: true,
    languages: [
      'javascript',
      'typescript', 
      'bash',
      'shell',
      'json',
      'yaml',
      'go',
      'python',
      'java',
      'dockerfile',
      'diff'
    ],
    container: {
      tipLabel: '💡 Tip',
      warningLabel: '⚠️ Warning',
      dangerLabel: '🚨 Important',
      infoLabel: 'ℹ️ Info'
    }
  }
}