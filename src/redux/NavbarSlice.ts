import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { fetchData } from "./AsyncActions";

type NavbarSliceState = {
    idToggle: boolean;
    headerToggle: boolean;
    descriptionToggle: boolean;
    posts:[];
}

const initialState: NavbarSliceState = {
    idToggle: false,
    headerToggle: false,
    descriptionToggle: false,
    posts:[]
}

export const NavbarSlice = createSlice({
    name: 'navbar',
    initialState,
    reducers:{
        setIdToggle(state,action:PayloadAction<NavbarSliceState>){
        state.idToggle = action.payload;


        }

    }
})