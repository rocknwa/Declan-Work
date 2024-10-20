import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    id: null,
    email: "", 
    firstName: "", 
    lastName: "",
    profession: '', 
    city: "", 
    country: "", 
    bioTitle: "",
    bioDescription: "", 
    type: "",
    status: "available",
    profileImage: "",
    isActive: true
  },
  reducers: {
    setUser: (state, action) => {
      return { ...state, ...action.payload };
    },
    clearUser: (state) => {
      return {
        id: null,
        email: "", 
        firstName: "", 
        lastName: "",
        profession: '', 
        city: "", 
        country: "", 
        bioTitle: "",
        bioDescription: "", 
        type: "",
        status: "",
        profileImage: "",
        isActive: true
      };
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
