import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImage } from './types'

export const client = sanityClient({
  projectId: '1u3avr4h',
  dataset: 'production',
  apiVersion: '2022-03-10',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
})

const builder = imageUrlBuilder(client)

export const urlFor = (source: SanityImage) => builder.image(source)
