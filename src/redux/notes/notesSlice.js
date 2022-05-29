import { createSlice , nanoid} from "@reduxjs/toolkit"; //redux'ı kullanabilmek icin. React-redux ise reduxda yaptıklarımızı react componnet' bağlamak için.

export const notesSlice = createSlice({
    name: "notes",
    initialState: {
        items : [{
            id: 1,
            text: "lorem ipsum" ,            
        },
        {
            id: 2,
            text: "lorem ipsum" ,            
        }],
    },
    //başlangıc değerlerini ve reducerların ilgileneceği state'i alır.
    reducers: {
    //state günceleyecek, veriyi manipüle edecek kısımlar buraya yazılır, yani actions'lar.
        addNote: (state, action) => {
            state.items.push(action.payload);
        },
        //reducer state'i değiştirmeden ona gelecek payload yapılandırıyoruz. yani input ile gelecek veriler oluyor.
        prepare: ({text}) => {
            return  {
                //payload componentten gelen veri, action altında gelir.
                payload: {
                    id: nanoid(),
                    text,
                }
            }
        },
        destroy: (state, action) => {
            const id = action.payload;
            //silinmek istenen id'li eleman hariç topluyoruz. item.id denk değilse id'ye filtre icine eklenecek.
            const filterDelete = state.items.filter(item => item.id !== id);
            state.items= filterDelete;
        }
    }
});

export const { addNote , destroy} = notesSlice.actions; //actions ile reducer içindeki fonk. çağırıyoruz.
export default notesSlice.reducer; //store'da import ederek reducer field'a verebilmek icin.
export const selectNotes = state => state.notes.items; //notlarımızın verilrini tutuyoruz (initial state).
