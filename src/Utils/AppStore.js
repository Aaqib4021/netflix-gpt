import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Utils/userSlice";
import movieReducer from "../Utils/movieSlice";
const AppStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
  },
});
export default AppStore;
