import LRUCache from 'lru-cache'
import { Category, Product } from './types'
import { client } from './client'

type CategoriesCache = {
  [slug: string]: Category
}

type ProductsCache = {
  [slug: string]: Product
}

type Cache = {
  categories: CategoriesCache
  products: ProductsCache
}

const cache = new LRUCache<string, Cache>({ max: 100 * 1024 })

const productsCacheToList = (cache: ProductsCache) => {
  return Object.values(cache)
}

const categoriesCacheToList = (cache: CategoriesCache) => {
  return Object.values(cache)
}

// Fetch all categories and return them
const fetchCategories = async () => {
  type Accumulator = {
    [slug: string]: Category
  }
  const query = `*[_type == "category"] {
    name,
    "slug": slug.current,
    "products": *[_type == "product" && references(^._id)]
  }`
  const categories = await client.fetch(query)

  return categories.reduce((acc: Accumulator, category: Category) => {
    acc[category.slug] = category
    return acc
  }, {} as CategoriesCache)
}

// Fetch all products and return them
const fetchProducts = async () => {
  type Accumulator = {
    [slug: string]: Product
  }
  const query = `*[_type == "product"]`
  const products = await client.fetch(query)

  return products.reduce((acc: Accumulator, product: Product) => {
    acc[product.slug.current] = product
    return acc
  }, {} as ProductsCache)
}

// Check if the cache has the categories and return them if it does, otherwise fetch them
export const getCategories = async () => {
  const cached = cache.get('categories')
  if (cached && cached.categories) {
    console.log('cache hit')
    return categoriesCacheToList(cached.categories)
  }

  const categories = await fetchCategories()
  cache.set('categories', categories)
  return categoriesCacheToList(categories)
}

// Check if the cache has the category and return if it does, otherwise fetch all categories
export const getCategory = async (slug: string) => {
  const cached = cache.get('categories')
  if (cached && cached.categories && cached.categories[slug]) {
    console.log('cache hit')
    return cached.categories[slug]
  }
  const categories = await fetchCategories()

  cache.set('categories', categories)
  return categories[slug]
}

// Check if the cache has the product and return if it does, otherwise fetch all products
export const getProduct = async (slug: string) => {
  const cached = cache.get('products')
  if (cached && cached.products && cached.products[slug]) {
    console.log('cache hit')
    return cached.products[slug]
  }

  const products = await fetchProducts()
  cache.set('products', products)
  return products[slug]
}

// Check if the cache has the products and return if it does, otherwise fetch all products
export const getProducts = async () => {
  const cached = cache.get('products')
  if (cached && cached.products) {
    console.log('cache hit')
    return productsCacheToList(cached.products)
  }

  const products = await fetchProducts()
  cache.set('products', products)
  return productsCacheToList(products)
}

// Clear the cache
export const clearCache = () => {
  cache.clear()
}
