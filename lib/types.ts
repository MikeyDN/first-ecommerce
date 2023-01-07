import { Slug } from '@sanity/types'

export interface Product {
  name: string
  image: Image[]
  slug: {
    current: string
    _type: string
  }
  id: string
  price: number
  categories: string[]
  description: string
}
export type Image = {
  asset: {
    url: string
  }
  hotspot: {
    x: number
    y: number
    height: number
    width: number
  }
}
export type Category = {
  name: string
  slug: {
    current: string
    _type: string
  }
}

export type Promoted = {
  smallTitle: string
  title: string
  product: Product
  image: Image
}
