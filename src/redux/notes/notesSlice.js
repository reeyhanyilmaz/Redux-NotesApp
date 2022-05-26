import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
    name: "notes",
    initialState: [],
    //başlangıc değerlerini ve reducerların ilgileneceği state'i alır.
    reducers: {
    //state günceleyecek, veriyi manipüle edecek kısımlar buraya yazılır, yani actions'lar.
        addNote: (state, action) => {
            state.push(action.payload);
        },
    }
});

export const { addNote } = notesSlice.actions; //actions ile reducer içindeki fonk. çağırıyoruz.
export default notesSlice.reducer; //store'da import ederek reducer field'a verebilmek icin.


 