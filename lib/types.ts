export type Product = {
  name: string
  image: SanityImage[]
  slug: {
    current: string
    _type: string
  }
  id: string
  price: number
  categories: string[]
  description: string
}
export type SanityImage = {
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
  slug: string
  products: Product[]
}

export type Promoted = {
  smallTitle: string
  title: string
  product: Product
  image: SanityImage
}
