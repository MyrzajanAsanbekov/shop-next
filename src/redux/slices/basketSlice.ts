import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BasketState {
  items: any[];
}

const initialState: BasketState = {
  items: [],
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<any>) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((_, index) => index !== action.payload);
    },
  },
});

export const { addItem, removeItem } = basketSlice.actions;
export default basketSlice.reducer;
