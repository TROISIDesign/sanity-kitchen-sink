export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '61b5c26b722d4f458b5f524b',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-vib7s2go',
                  apiId: '5745eb3e-cf9e-4af8-97c4-7ca66968c8ef'
                },
                {
                  buildHookId: '61b5c26b29a9c13c7a64d6fb',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-76z31n74',
                  apiId: 'a3b9d6cb-543d-4cce-a2ae-17b7b87ea0b9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/TROISIDesign/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-76z31n74.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
