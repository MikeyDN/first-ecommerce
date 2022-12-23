export default {
    name: 'category',
    title: 'Categories',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: "slug",
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'name',
                slugify: input => input
                            .toLowerCase()
                            .replace(/\s+/g, '-')
                            .slice(0, 200)
            }
        },
    ]
}