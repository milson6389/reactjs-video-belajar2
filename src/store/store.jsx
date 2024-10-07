import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./courseSlice";
import trxReducer from "./trxSlice";

export default configureStore({
  reducer: {
    course: courseReducer,
    trx: trxReducer,
  },
});
