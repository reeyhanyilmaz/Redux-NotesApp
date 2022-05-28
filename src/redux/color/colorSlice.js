import  { createSlice } from '@reduxjs/toolkit';

export const colorSlice = createSlice({
    name: 'color', //name state'e ulaşmak istediğimizde state.name(isimlendirme ne ise)
    initialState: {
        colors: [
            {
                id: 1,
                code: '#FFAEBC',
                selected: false
            },
            {
                id: 2,
                code: '#BF86BF',
                selected: false
            },
            {
                id: 3,
                code: '#A0E7E5',
                selected: false
            },
            {
                id: 4,
                code: '#B4F8C8',
                selected: false
            },
            {

                id: 5,
                code: '#FBE7C6',
                selected: false
            },
            
        ]},
    reducers: {
        changeColor: (state, action) => {
            state.colors = action.payload;
        }
    }
});

export const { changeColor} = colorSlice.actions;
export default colorSlice.reducer;