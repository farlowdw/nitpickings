// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
const katexMacros = require('./katex-macros');

const admonitionsConfig = {
  admonitions: {
    keywords: [
      'info',
      'note',
      'tip',
      'danger',
      'warning',
      'caution',
      'dwf',
      'tool',
      'key',
      'perf',
      'extension',
      'study',
      'iio',
    ],
  },
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Nitpickings',
  tagline: 'Keep up nitpicking too',
  favicon: 'img/favicon.ico',
  url: 'https://nitpickings.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  customFields: {
    forbiddenGiscusDocPaths: [
      '/docs/intro',
      '/docs/sandbox',
      '/docs/reference-list',
      '/docs/dsa-topics/introduction',
      '/docs/dp',
      '/docs/backtracking',
    ],
    forbiddenGiscusBlogPaths: [
      '/blog/2025/01/07/2025/difference-arrays',
    ],
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({

        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/farlowdw/nitpickings/tree/master/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [[rehypeKatex, {
            throwOnError: true,
            globalGroup: true,
            trust: (context) => ['\\htmlId', '\\href'].includes(context.command),
            macros: katexMacros
          }]],
          ...admonitionsConfig,
        },

        blog: {
          showReadingTime: false,
          editUrl:
            'https://github.com/farlowdw/nitpickings/tree/master/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [[rehypeKatex, {
            throwOnError: true,
            globalGroup: true,
            trust: (context) => ['\\htmlId', '\\href'].includes(context.command),
            macros: katexMacros
          }]],
          blogTitle: 'Nit Wits',
          blogDescription: `Self-contained explorations of various technical and non-technical topics`,
          postsPerPage: 'ALL',
          blogSidebarCount: 0,
          sortPosts: 'descending',
          ...admonitionsConfig,
        },

        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },

        pages: {
          rehypePlugins: [[rehypeKatex, {
            throwOnError: true,
            globalGroup: true,
            trust: (context) => ['\\htmlId', '\\href'].includes(context.command),
            macros: katexMacros
          }]],
          ...admonitionsConfig,
        },

      }),
    ],
  ],

  stylesheets: [
    // KaTeX
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
    // Pseudocode (ref: https://www.npmjs.com/package/pseudocode)
    {
      href: 'https://cdn.jsdelivr.net/npm/pseudocode@latest/build/pseudocode.min.css',
      type: 'text/css',
      crossorigin: 'anonymous',
    },
  ],

  scripts: [
    // KaTeX
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.7/katex.min.js",
      async: true,
    },
    // Pseudocode (ref: https://www.npmjs.com/package/pseudocode)
    {
      src: "https://cdn.jsdelivr.net/npm/pseudocode@latest/build/pseudocode.min.js",
      async: true,
    },
  ],

  plugins: [
    [
      'docusaurus2-dotenv',
      {
        path: "./.env", // The path to your environment variables.
        safe: false, // If false ignore safe-mode, if true load './.env.example', if a string load that file as the sample
        systemvars: false, // Set to true if you would rather load all system variables as well (useful for CI purposes)
        silent: false, //  If true, all warnings will be suppressed
        expand: false, // Allows your variables to be "expanded" for reusability within your .env file
        defaults: false, //  Adds support for dotenv-defaults. If set to true, uses ./.env.defaults
      }
    ],
    'docusaurus-plugin-sass',
    require.resolve("docusaurus-plugin-image-zoom"),
    'my-loaders',
    '@docusaurus/theme-mermaid'
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      navbar: {
        title: 'Nitpickings',
        logo: {
          alt: 'Nitpickings Logo',
          src: 'img/logo.svg',
        },
        hideOnScroll: true,
        items: [
          {
            to: '/docs/intro',
            label: 'Daybook',
            position: 'left',
            activeBaseRegex: `/docs/(?!tags)`,
          },
          {
            to: '/docs/tags',
            label: 'Tags',
            position: 'left',
            activeBaseRegex: `/docs/tags`,
          },
          {
            to: '/blog',
            label: 'Nit Wits (Blog)',
            position: 'left',
            activeBaseRegex: `/blog(?!/archive|/tags)`,
          },
          {
            to: '/blog/archive',
            label: 'Nit Wits Archive',
            position: 'left'
          },
          {
            to: '/blog/tags',
            label: 'Nit Wits Tags',
            position: 'left'
          },
          {
            to: '/about',
            label: 'About',
            position: 'right'
          },
          {
            href: `https://github.com/farlowdw/nitpickings`,
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Daybook',
            items: [
              {
                label: 'Data Structures',
                to: '/docs/data-structures/introduction',
              },
              {
                label: 'SQL',
                to: '/docs/sql/formatting-guidelines',
              },
              {
                label: 'Templates',
                to: '/docs/templates/data-structures-algorithms',
              },
              {
                label: 'Development Resources',
                to: '/docs/development-resources',
              },
              {
                label: 'Definitions, theorems, and results',
                to: '/docs/definitions-theorems-results',
              },
              {
                label: 'Reference List',
                to: '/docs/reference-list',
              },
            ],
          },
          {
            title: 'Nit Wits',
            items: [
              {
                label: 'Comments with Giscus',
                to: '/blog/2022/10/27/2022/giscus-comments',
              },
              {
                label: 'Material UI Light and Dark Modes',
                to: '/blog/2022/10/28/2022/docusaurus-mui-light-dark',
              },
              {
                label: 'Archive',
                to: '/blog/archive',
              },
            ],
          },
          {
            title: 'SQL',
            items: [
              {
                label: 'Formatting Guidelines',
                to: '/docs/sql/formatting-guidelines',
              },
              {
                label: 'Query Execution Order',
                to: '/docs/sql/query-execution-order',
              },
              {
                label: 'Window Functions',
                to: '/docs/sql/window-functions',
              },
              {
                label: 'Common Table Expressions (CTEs)',
                to: '/docs/sql/ctes',
              },
            ],
          },
          {
            title: 'External',
            items: [
              {
                label: 'Python Docs',
                href: `https://docs.python.org/3/`,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} nitpickings.com`,
      },
      zoom: {
        selector: '.markdown :not(em) > img',
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
          background: {
            light: 'rgb(255, 255, 255)',
            dark: 'rgb(50, 50, 50)'
          }
        }
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        magicComments: [
          {
            className: 'theme-code-block-highlighted-line',
            line: 'highlight-next-line',
            block: { start: 'highlight-start', end: 'highlight-end' },
          },
          {
            className: 'code-block-error-line',
            line: 'highlight-error-next-line',
            block: { start: 'highlight-error-start', end: 'highlight-error-end' },
          },
          {
            className: 'code-block-error-line-numbers',
            line: 'highlight-error-next-line-numbers',
            block: { start: 'highlight-error-start-numbers', end: 'highlight-error-end-numbers' },
          },
          {
            className: 'code-block-success-line',
            line: 'highlight-success-next-line',
            block: { start: 'highlight-success-start', end: 'highlight-success-end' },
          },
          {
            className: 'code-block-success-line-numbers',
            line: 'highlight-success-next-line-numbers',
            block: { start: 'highlight-success-start-numbers', end: 'highlight-success-end-numbers' },
          },
          {
            className: 'code-block-warning-line',
            line: 'highlight-warning-next-line',
            block: { start: 'highlight-warning-start', end: 'highlight-warning-end' },
          },
          {
            className: 'code-block-warning-line-numbers',
            line: 'highlight-warning-next-line-numbers',
            block: { start: 'highlight-warning-start-numbers', end: 'highlight-warning-end-numbers' },
          },
          {
            className: 'code-block-removed-line',
            line: 'highlight-remove-next-line',
            block: { start: 'highlight-remove-start', end: 'highlight-remove-end' },
          },
          {
            className: 'code-block-added-line',
            line: 'highlight-add-next-line',
            block: { start: 'highlight-add-start', end: 'highlight-add-end' },
          },
        ],
        additionalLanguages: [
          "apacheconf",
          "applescript",
          "asciidoc",
          "aspnet",
          "awk",
          "bash",
          "basic",
          "c",
          "clojure",
          "cpp",
          "csharp",
          "css",
          "csv",
          "docker",
          "editorconfig",
          "ejs",
          "elixir",
          "erlang",
          "excel-formula",
          "flow",
          "fortran",
          "git",
          "go",
          "go-module",
          "graphql",
          "handlebars",
          "http",
          "java",
          "javadoclike",
          "javascript",
          "js-extras",
          "jsdoc",
          "json",
          "jsonp",
          "jsx",
          "latex",
          "less",
          "lisp",
          "log",
          "lua",
          "makefile",
          "markdown",
          "markup",
          "markup-templating",
          "mongodb",
          "nginx",
          "perl",
          "php",
          "php-extras",
          "phpdoc",
          "plsql",
          "powerquery",
          "powershell",
          "pug",
          "python",
          "r",
          "regex",
          "ruby",
          "rust",
          "sas",
          "sass",
          "scheme",
          "scss",
          "shell-session",
          "sql",
          "systemd",
          "toml",
          "tsx",
          "turtle",
          "typescript",
          "vim",
          "visual-basic",
          "wasm",
          "wiki",
          "wolfram",
          "yaml"
        ]
      },
    }),
};

export default config;