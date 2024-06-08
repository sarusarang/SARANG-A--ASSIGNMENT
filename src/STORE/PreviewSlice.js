import { createSlice } from "@reduxjs/toolkit";



const initialState = {

    PrevStatus:false,
    ReportName:""

}

const PreviewSlice = createSlice({


    name:"ReportPreview",
    initialState:initialState,

    reducers:{

        PreviewDownload:(state,action)=>{

            state.PrevStatus = true

        },

        previewClose:(state,action)=>{

            state.PrevStatus = false


        },

        Name:(state,action)=>{

            state.ReportName = action.payload

        }

        



    }

})

export const {PreviewDownload,previewClose,Name} = PreviewSlice.actions
export default PreviewSlice.reducer