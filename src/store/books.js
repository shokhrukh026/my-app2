export default{
    state:{
        books:[
            {
                id: 'dsdsdfsafafaafjf',
                title: 'Harry Potter und der Stein der Weisen - 1',
                description: 'Первая глава первой книги о Гарри Поттере',
                imageId: 'dadaad',
                level: ['B2', 'C1'],
                rating: 4,
                ratingsCount: 62,
                youtube_playlist_id: 'rtdsewesc',
                parts: [
                    {
                        id: 'dsdsdsdsd1',
                        title: 'Kapitel 1',
                        youtube_id: 'zdsdsd1'
                    },
                    {
                        id: 'dsdsdsdsd2',
                        title: 'Kapitel 2',
                        youtube_id: 'zdsdsd2'
                    },
                    {
                        id: 'dsdsdsdsd3',
                        title: 'Kapitel 3',
                        youtube_id: 'zdsdsd3'
                    },
                    {
                        id: 'dsdsdsdsd4',
                        title: 'Kapitel 4',
                        youtube_id: 'zdsdsd4'
                    },
                ]
            },
            {
                id: 'dsdsdfsafafaafjadadadf',
                title: 'Harry Potter und der Stein der Weisen - 2',
                description: 'Вторая глава первой книги о Гарри Поттере',
                imageId: 'dadaader',
                level: ['B2', 'B1'],
                rating: 3.5,
                ratingsCount: 100,
                youtube_playlist_id: 'dsewesc',
                parts:[
                    {
                        id: 'dsdsdsdsd1',
                        title: 'Kapitel 1',
                        youtube_id: 'zdsdsd1'
                    },
                    {
                        id: 'dsdsdsdsd2',
                        title: 'Kapitel 2',
                        youtube_id: 'zdsdsd2'
                    },
                    {
                        id: 'dsdsdsdsd3',
                        title: 'Kapitel 3',
                        youtube_id: 'zdsdsd3'
                    },
                    {
                        id: 'dsdsdsdsd4',
                        title: 'Kapitel 4',
                        youtube_id: 'zdsdsd4'
                    },
                ]
            },
            {
                id: 'afgfafaadsdsdfsafafaafjf',
                title: 'Harry Potter und der Stein der Weisen - 3',
                description: 'Третья глава первой книги о Гарри Поттере',
                imageId: 'dadaadds',
                level: ['A2'],
                rating: 2,
                ratingsCount: 88,
                youtube_playlist_id: 'dsasewesc',
                parts:[
                    {
                        id: 'dsdsdsdsd1',
                        title: 'Kapitel 1',
                        youtube_id: 'zdsdsd1'
                    },
                    {
                        id: 'dsdsdsdsd2',
                        title: 'Kapitel 2',
                        youtube_id: 'zdsdsd2'
                    },
                    {
                        id: 'dsdsdsdsd3',
                        title: 'Kapitel 3',
                        youtube_id: 'zdsdsd3'
                    },
                    {
                        id: 'dsdsdsdsd4',
                        title: 'Kapitel 4',
                        youtube_id: 'zdsdsd4'
                    },
                ]
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