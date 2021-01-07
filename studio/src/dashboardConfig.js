export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ff6f3c81aa0ebc503312456',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-8jbye5bc',
                  apiId: '4ee036a1-9149-4667-b15d-e94a65242a32'
                },
                {
                  buildHookId: '5ff6f3c8ae3e1fd2d66e7269',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-ihd7gbsh',
                  apiId: '3ac04b6b-8d5d-4f4b-a4bd-edff93792b81'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/robertbsmith/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-ihd7gbsh.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
