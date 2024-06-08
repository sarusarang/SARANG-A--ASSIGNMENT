import { configureStore } from "@reduxjs/toolkit";
import PreviewReducer from "./PreviewSlice";

export const Store = configureStore ({

    reducer:{

        preview: PreviewReducer


    }


})