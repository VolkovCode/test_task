import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk('',async (params,thankAPI) =>{

    const { data } = await axios.get(
        ' https://jsonplaceholder.typicode.com/posts'
    )
    return thankAPI.fulfillWithValue(data);

})