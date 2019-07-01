export default{
    state:{
        books:[
            {
                id: 'dsdsdfsafafaafjf',
                title: 'Harry Potter und der Stein der Weisen - 1',
                description: 'Первая глава первой книги о Гарри Поттере',
                imageId: 'dadaad',
                parts: 7,
                level: ['B2', 'C1'],
                rating: 4,
                ratingsCount: 62,
                youtube_playlist_id: 'rtdsewesc'
            },
            {
                id: 'dsdsdfsafafaafjadadadf',
                title: 'Harry Potter und der Stein der Weisen - 2',
                description: 'Вторая глава первой книги о Гарри Поттере',
                imageId: 'dadaader',
                parts: 7,
                level: ['B2', 'B1'],
                rating: 3.5,
                ratingsCount: 100,
                youtube_playlist_id: 'dsewesc'
            },
            {
                id: 'afgfafaadsdsdfsafafaafjf',
                title: 'Harry Potter und der Stein der Weisen - 3',
                description: 'Третья глава первой книги о Гарри Поттере',
                imageId: 'dadaadds',
                parts: 7,
                level: ['A2'],
                rating: 2,
                ratingsCount: 88,
                youtube_playlist_id: 'dsasewesc'
            },
        ]
    },
    mutations:{
        SET_BOOKS(state, payload){
            state.books = payload
        }
    },
    getters:{
        getBook: (state) => state.books
    }
}