import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'buddys-commerce',
  basePath: '/studio',

  projectId: 'jntrlq2c',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
// export default defineConfig({
//   name: 'default',
//   title: 'buddys-commerce',

//   projectId: 'jntrlq2c',
//   dataset: 'production',

//   plugins: [deskTool(), visionTool()],

//   schema: {
//     types: schemaTypes,
//   },
// })
