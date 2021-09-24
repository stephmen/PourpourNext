// import author from './author'
import projet from './projet'
export default {
  name: 'article',
  title: 'Articles Archives',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'projet',
      title: 'Projet',
      type: 'array',
      of: [{type: 'reference', to: {type: 'projet'}}],
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    
    {
      name: 'publishedAt',
      title: 'Date du Spectacle',
      type: 'datetime',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],
  ordering: [
    {
      title: 'Date du Spectacle Récent',
      name: 'releaseDateDesc',
      by: [
        {field: 'publishedAt', direction: 'desc'}
      ]
    }
  ],

  preview: {
    select: {
      media: 'mainImage',
      title: 'title',
      date: 'publishedAt',
    },
    prepare(selection, viewOptions = {}) {
      const {date, media,} = selection
      const title = viewOptions.ordering && viewOptions.ordering.name === 'date'
    ? `${selection.title} (${selection.publishedAt})`
    : selection.title
      return Object.assign({}, selection, {
        subtitle: date && `Date: ${new Date(date).toLocaleDateString('fr-FR')}`,
      })
    },
  },
}
