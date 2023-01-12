import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { Image } from './types'

export const client = sanityClient({
  projectId: '1u3avr4h',
  dataset: 'production',
  apiVersion: '2022-03-10',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
})

const builder = imageUrlBuilder(client)

export const urlFor = (source: Image) => builder.image(source)