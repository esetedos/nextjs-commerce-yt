export default {
    name: 'product',    //no espacios o mayúsculas
    type: 'document',
    title: 'Product',    //
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name of Profuct'
        },
        {
            name: 'images',
            type: 'array',
            title: 'Product Images',
            of: [{type: 'image'}],
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description of product'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Product Slug',
            options: {
                source: 'name'
            },
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
        },
    ],
}