import { createSlice, nanoid } from "@reduxjs/toolkit"; //redux'ı kullanabilmek icin. React-redux ise reduxda yaptıklarımızı react componnet' bağlamak için.

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    items: localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [
      {
        id: nanoid(),
        text: "Redux ile uygulama geliştir",
        color: "#BF86BF",
        time: "03.06.2022 11:56:55",
      },
      {
        id: nanoid(),
        text: "Düzenli su içmeyi unutma!",
        color: "#A0E7E5",
        time: "03.06.2022 11:57:45",
      },
      {
        id: nanoid(),
        text: "Her gün mutlaka kodlama yap!",
        color: "#FFAEBC",
        time: "03.06.2022 12:05:28",
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
      const { time} = action.payload;

      state.items.push({
        id: nanoid(),
        text: text,
        color: color,
        time: time,
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

    saveEditedNote:  (state, action) => {
        const { id, text, color, time } = action.payload;
        const editedNote = state.items.find((item) => item.id === id);

        editedNote.text= text;
        editedNote.color = color;
        editedNote.time = time;

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
