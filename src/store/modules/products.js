const products = {
    namespaced: true,
    state: {
        products: [{
            id: 1,
            name: 'name 1',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Consectetur, ea provident? Nobis voluptate .',
            image: 'https://dkstatics-public.digikala.com/digikala-products/055d96eeaed20d138cfd18dec78eeb4546984cfe_1665826229.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80',
            price: 30000
        },
        {
            id: 2,
            name: 'name 2',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Consectetur, ea provident? ',
            image: 'https://dkstatics-public.digikala.com/digikala-products/373cf0add6b2964b30a9a59b2ce2f5f2c8ea976f_1681112650.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80',
            price: 30000
        },
        {
            id: 3,
            name: 'name 3',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Consectetur, ',
            image: 'https://dkstatics-public.digikala.com/digikala-products/00c317e7b17ef1c17cd3c386dedf080f75a6c966_1656408147.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80',
            price: 30000
        },
        {
            id: 4,
            name: 'name 4',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Consectetur, ',
            image: 'https://dkstatics-public.digikala.com/digikala-products/1fafefa0ce8c0e6af33566ca8ac89c3893a65d17_1684153138.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80',
            price: 30000
        },
        {
            id: 5,
            name: 'name 5',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Consectetur, ea provident? Nobis voluptate ducimus ',
            image: 'https://dkstatics-public.digikala.com/digikala-products/70c88f5de5ab4bc673527bd6245bbfa90fc28191_1671879552.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80',
            price: 30000
        },
        ],
    },
    getters: {
        getProducts(state) {
            return state.products
        },
    },
}

export default products;