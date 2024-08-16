import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Utils/userSlice";
const AppStore = configureStore({
  reducer: {
    user: userReducer,
  },
});
export default AppStore;
