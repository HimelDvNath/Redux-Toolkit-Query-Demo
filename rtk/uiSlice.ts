import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UIState {
    selectedProductId: number | null;
}

const initialState: UIState = {
    selectedProductId: null,
};

export const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        setSelectedProductId: (state, action: PayloadAction<number | null>) => {
            state.selectedProductId = action.payload;
        },
    },
});

export const { setSelectedProductId } = uiSlice.actions;
export default uiSlice.reducer;
