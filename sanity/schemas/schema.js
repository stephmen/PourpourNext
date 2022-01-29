// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
import post from './articles-archives'
import author from './author'
import projet from './projet'
import histoire from './histoire'
import presse from './presse'
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'

import spectacle from './spectacle'
import articlesArchives from './articles-archives'


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    spectacle,
    post,
    author,
    projet,
    histoire,
    presse,
    
    
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
  ]),
})
