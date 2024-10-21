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
    isActive: true,
    walletAddress: null,   // New field to store the connected wallet address
    isWalletConnected: false,  // New field to track wallet connection status
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
        isActive: true,
        walletAddress: null,   // Reset wallet on clearUser
        isWalletConnected: false, // Reset connection status on clearUser
      };
    },
    setWalletConnected: (state, action) => {
      state.walletAddress = action.payload.walletAddress;
      state.isWalletConnected = true;  // Set to true when wallet is connected
    },
    clearWalletConnection: (state) => {
      state.walletAddress = null;
      state.isWalletConnected = false;
    }
  },
});

export const { setUser, clearUser, setWalletConnected, clearWalletConnection } = userSlice.actions;
export default userSlice.reducer;
