// First, import the schema Creator
import createsSchema from 'part:@sanity/base/schema-creator'

// Import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import user from './user'

// Give the schema to the builder and provie results
export default createSchema({
  //name schema:
  name: 'default',
  //then proceed to concatenate doc type
  // Provide plugins to any installed
  types: schemaTypes.concat([user]),
})
