import  { createSlice } from '@reduxjs/toolkit';

export const colorSlice = createSlice({
    name: 'color', //name state'e ulaşmak istediğimizde state.name(isimlendirme ne ise)
    initialState: {
        startColor: "#BF86BF",
        colors: [
            {
                id: 1,
                code: '#FFAEBC',
                selected: false
            },
            {
                id: 2,
                code: '#BF86BF',
                selected: true
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
        //basşlangıç rengi
        firstColor: (state, action) => {
            state.startColor= action.payload;
        },
        selectColor: (state, action) => {
            state.colors.forEach(color => {
                color.selected = false;
            });
            const selectedColor = state.colors.find(color => color.code === action.payload);
            //selectedColor.selected = !selectedColor.selected; veya aşağıdaki gibi
            selectedColor.selected = true;            
        },
    } 
});

export const { firstColor, selectColor} = colorSlice.actions;
export default colorSlice.reducer;