import { createSlice, nanoid } from "@reduxjs/toolkit"; //redux'ı kullanabilmek icin. React-redux ise reduxda yaptıklarımızı react componnet' bağlamak için.

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    items: JSON.parse(localStorage.getItem("items", [
      {
        id: nanoid(),
        text: "Redux ile uygulama geliştir",
        color: "#BF86BF",
      },
      {
        id: nanoid(),
        text: "Düzenli su içmeyi unutma!",
        color: "#A0E7E5",
      },
      {
        id: nanoid(),
        text: "Her gün mutlaka kodlama yap!",
        color: "#FFAEBC",
      },
    ])),
  },
  //başlangıc değerlerini ve reducerların ilgileneceği state'i alır.
  reducers: {
    //state günceleyecek, veriyi manipüle edecek kısımlar buraya yazılır, yani actions'lar.
    addNote: (state, action) => {
      // state.items.push(action.payload);
      const { text } = action.payload;
      const { color } = action.payload;

      state.items.push({
        id: nanoid(),
        text: text,
        color: color,
      });

      localStorage.setItem("items", JSON.stringify(state.items));
    },
    //reducer state'i değiştirmeden ona gelecek payload yapılandırıyoruz. yani input ile gelecek veriler oluyor.
    // prepare: ({text : action.payload, color: action.payload,}) => {
    //     return  {
    //         //payload componentten gelen veri, action altında gelir.
    //         payload: {
    //             id: nanoid(),
    //             text,
    //             color,
    //         }
    //     }
    // },
    destroy: (state, action) => {
      //hepsini siliyor
      const id = action.payload;
      console.log("id", id);
      state.items = state.items.filter((item) => item.id !== id);
      localStorage.setItem("items", JSON.stringify(state.items));
    },
  },
});

export const { addNote, destroy } = notesSlice.actions; //actions ile reducer içindeki fonk. çağırıyoruz.
export default notesSlice.reducer; //store'da import ederek reducer field'a verebilmek icin.
export const selectNotes = (state) => state.notes.items; //notlarımızın verilrini tutuyoruz (initial state).
