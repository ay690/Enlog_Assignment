import { configureStore } from "@reduxjs/toolkit";
import { type TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import userSlice from "./slices/userSlice";
import dashboardSlice from "./slices/dashboardSlice";
import customerSlice from "./slices/customersSlice";

export const store = configureStore({
    reducer: {
        user: userSlice,
        customers: customerSlice,
        dashboard: dashboardSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


