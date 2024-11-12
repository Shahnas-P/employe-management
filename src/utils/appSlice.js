import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:'app',
    initialState:{
        isMenuOpen:true,
        isModalOpen:true
    },
    reducers:{
        toggleMenu:(state)=>{
            state.isMenuOpen = !state.isMenuOpen
        },
        modalOpen:(state)=>{
            state.isModalOpen = !state.isModalOpen
        }
    }
})
export const {toggleMenu,modalOpen} = appSlice.actions
export default appSlice.reducer;