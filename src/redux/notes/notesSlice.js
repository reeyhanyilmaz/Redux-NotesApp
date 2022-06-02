import { createSlice, nanoid } from "@reduxjs/toolkit"; //redux'ı kullanabilmek icin. React-redux ise reduxda yaptıklarımızı react componnet' bağlamak için.

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    items: localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [
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
    ],
    edit: [],
    search: "",
  },
  //başlangıc değerlerini ve reducerların ilgileneceği state'i alır.
  reducers: {
    //state günceleyecek, veriyi manipüle edecek kısımlar buraya yazılır, yani actions'lar.
    addNote: (state, action) => {
      // state.items.push(action.payload);
      const { text } = action.payload;
      const { color } = action.payload;
      // const { lastEditedNote } = action.payload;

      state.items.push({
        id: nanoid(),
        text: text,
        color: color,
        // lastEditedNote: lastEditedNote,
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
      const id = action.payload;
      console.log("id", id);
      state.items = state.items.filter((item) => item.id !== id);
      localStorage.setItem("items", JSON.stringify(state.items));
    },
    searchData: (state,action) => {
      state.search = action.payload.toLowerCase(); //buraya da lowercase koymazsak büyük harfte arama yapmaz.
    },
    // x: (state, action) => {
    //   state.edit = action.payload;
    // },
    // update: (state, action) => {
      
    //   const { id, text, color, lastEditedNote } = action.payload;
    //   state.items = state.items.map((item) =>
    //     item.id === id ? { ...item, text, color ,lastEditedNote} : item
    //   );
    //   state.edit = [];
    //   localStorage.setItem("items", JSON.stringify(state.items));
    // }
    saveEditedNote:  (state, action) => {
        const { id, text, color } = action.payload;
        const editedNote = state.items.find((item) => item.id === id);

        editedNote.text= text;
        editedNote.color = color;
        // editedNote.lastEditedNote = lastEditedNote;

        state.edit = [];
        localStorage.setItem("items", JSON.stringify(state.items));
      },

      update: (state, action) => {
          const {id }= action.payload;
          state.edit = [...state.items];
          state.edit  = state.edit.find((item) => item.id === id);

  },
},
});

export const { addNote, destroy, searchData, update , saveEditedNote} = notesSlice.actions; //actions ile reducer içindeki fonk. çağırıyoruz.
export default notesSlice.reducer; //store'da import ederek reducer field'a verebilmek icin.
export const selectNotes = (state) => state.notes.items; //notlarımızın verilrini tutuyoruz (initial state).
