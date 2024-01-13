import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {id: "0", name: "A"},
  {id: "1", name: "B"},
  {id: "2", name: "C"},
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {

  }
})

export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;