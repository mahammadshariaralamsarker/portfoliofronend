import { configureStore } from "@reduxjs/toolkit";
import { adminApi } from "./slice/admin.Slice";
import { projectApi } from "./slice/projectSlice";

export const store = configureStore({
  reducer: {
    [adminApi.reducerPath]: adminApi.reducer,
    [projectApi.reducerPath]: projectApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(adminApi.middleware).concat(projectApi.middleware),
});
