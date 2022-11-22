module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://kyahnportfolio.netlify.app/`,
    // Your Name
    name: 'KyuYoung Ahn',
    // Main Site Title
    title: `KyuYoung Ahn | portfolio`,
    // Optional: Twitter account handle
    author: `KyuYoung`,
    // Optional: Github account URL
    github: `https://github.com/kyahn23`,
    // Content of the About Me section
    about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus perferendis porro cumque ea error ab voluptatem. Temporibus adipisci exercitationem similique itaque quibusdam laudantium, qui molestiae quas, aut amet animi id.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Devfolio',
        description:
          'A zero-config and blazing fast personal site + blog built with GatsbyJs and TailwindCSS',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'ChromeExtensionKit',
        description:
          'Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates',
        link: 'https://chromeextensionkit.com/?ref=devfolio',
      },
      {
        name: 'Another Cool Project',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit ducimus perferendis',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: '롯데카드 기프티샷 고도화 프로젝트',
        description: '2022.05 ~ 2022.08',
        // link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: '우리카드 법인카드 관리시스템',
        description: ', 2021.10 ~ 2022.04',
        // link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: '우리카드 위비멤버스 리뉴얼',
        description: '2021.03 ~ 2021.08',
        // link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: '화학분야 온라인 전시관 구축',
        description: '2020.12 ~ 2021.03',
        link: 'https://k-chemicals.org',
      },
      {
        name: '화학분야 온라인 전시관 구축',
        description: '2019.10 ~ 2020.03',
        // link: 'https://k-chemicals.org',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'JavaScript (ES6+), jQuery, React, Java Spring, next.js',
      },
      {
        name: 'Databases',
        description: 'MySQL, Firebase Realtime/firestore Database',
      },
      // {
      //   name: 'Other',
      //   description:
      //     'Amazon Web Services (AWS), Firebase',
      // },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
