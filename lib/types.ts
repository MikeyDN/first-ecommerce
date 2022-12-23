export type Product = {
  name: string,
  image: Image[],
  slug: string,
  price: number,
  categories: string[],
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
  name: string,
  slug: {
    current: string,
    _type: string
  }
}