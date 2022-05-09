import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from "axios";
export const dataset = createAsyncThunk(
  "data/dataset", async (type = 'assets')=>{
    const response = await axios.get(
      "archivist/v2/" + type, {
        headers: {
           Authorization: "Bearer " + process.env.REACT_APP_JWT_TOKEN
        }
     }
    );
    console.log(response?.data[type]);
    return response?.data[type];
  }
);
export const dataSlice = createSlice({
  name: 'data',
  initialState: {
      assets: [],
      events: [],
      status: null
  },
  reducers: {
    add: (state, action) => {
      state[action.payload.type].push(action.payload.data);
    },
    remove: (state, action) => {
      state[action.payload.type] = state[action.payload.type].filter((data) => data.id !== action.payload.data.id);
    },
    update: (state, action) => {
      state[action.payload.type].map((data) => {
        if (data.id === action.payload.data.id) {
          data = action.payload.data;
        }
      });
    },
  },
  extraReducers: {
    [dataset.pending]: (state, action) => {
      state.status = 'pending';
    },
    [dataset.fulfilled]: (state, action) => {
      state.status = 'success';
      state.assets = action.payload;
    },
    [dataset.rejected]: (state, action) => {
      state.status = 'rejected';
    },
  },
})

// Action creators are generated for each case reducer function
export const { add, remove, update  } = dataSlice.actions

export default dataSlice.reducer