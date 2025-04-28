import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    modelIsOpened : true,
    selectedOption : '',
}

const uiSlice = createSlice({
    name: "UI",
    initialState,
    reducers : {
        changeSelectedOption(state,action){
            console.log("changed")

            if(action.payload === "cart" || "profile" || "orders"){
                state.selectedOption = action.payload;
                toast.success(action.payload)
            }
            else{
                toast.error("Error");
            }
        }
    }

})

export default uiSlice;

export const { changeSelectedOption } = uiSlice.actions; 