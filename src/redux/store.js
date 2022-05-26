import { configureStore } from "@reduxjs/toolkit";
import notesSlice from "./notes/notesSlice";


export const store = configureStore({
    reducer: {
        notes: notesSlice,
    },
});
//react context api gibi state yönetimi yapıyoruz store'da. tüm bileşenler store yapısını dinleme durumundadır , store'da bir degişiklik olduğunda ilgili bileşene aktarılır değişiklk sağlanır.

//React uygulamaları geliştirirken, state bileşenleri üzerinden geliştirme yapılmaktadır. Redux denilen yapı ise bu state bileşenlerini yönetmemizi sağlayan kütüphanedir.

//state yapısında childlara prop ile verilir. bir çok child oldugunda aktarım ve değişim zorlaşır. Redux ise bunu store ile kolaylastırır, yani değişiklik olduğunda child'a değil direk store üzerinden değişim gerçekleşir.


//action: JS objesi, store'da hangi state değişeceği bilgisini (type) ve state verisini taşır (payload).

//reducer: state ve aciton parametre alan yeni stete'i dönen fonk. action type'ına göre state'i değiştirir ve yeni state'i döner. reducer'ı store çalıştırır.

//dispatch: action parametre alarak reducer'ı tetikler. dispatch fonk ile state'i nasıl değiştireceğimizi store'a bildiriyoruz. 

//1. action tetiklenir
//2. Dispatch, gelen action’ı store’da mevcut state ile birlikte reducer’a parametre geçer.
//3. state değişir.