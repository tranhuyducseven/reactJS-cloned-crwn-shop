import { createSlice } from "@reduxjs/toolkit";


const INITIAL_STATE = {
    list: [
        {
            title: 'hats',
            routeName:'hats',
            imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
            id: 1,
            
        },
        {
            title: 'jackets',
            routeName:'jackets',
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
            id: 2,
            
        },
        {
            title: 'sneakers',
            routeName:'sneakers',
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            id: 3,
            
        },
        {
            title: 'women',
            routeName:'women',
            imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
            size: 'large',
            id: 4,
            

        },
        {
            title: 'men',
            routeName:'men',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
            size: 'large',
            id: 5,
            

        }
    ]
}
const directory = createSlice({
    name: 'directory',
    initialState: INITIAL_STATE,
    reducers: {}
})
const { reducer } = directory;

export default reducer;
