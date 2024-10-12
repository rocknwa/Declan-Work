import { createSlice } from '@reduxjs/toolkit';
import { showToast } from '@/components/Sonner';

const initialState = {
  ratings: [],
  status: 'idle',
  error: null,
};

const ratingsSlice = createSlice({
  name: 'ratings',
  initialState,
  reducers: {
    setRatings: (state, action) => {
      state.ratings = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
},
});

export const { setRatings, setStatus, setError } = ratingsSlice.actions;

// export const fetchRatings = () => async (dispatch) => {
//     try {
//     dispatch(setStatus('loading'));
//     const response = await getRatings();
//     dispatch(setRatings(response.data));
//     dispatch(setStatus('succeeded'));
//   } catch (error) {
//       dispatch(setError(error.toString()));
//     dispatch(setStatus('failed'));
//   }
// };

// export const saveRatings = (newRatings) => async (dispatch) => {
//   try {
//     const response = await updateRatings(newRatings);
//     dispatch(setRatings(response.data));
//     showToast({ type: "success", message: "Ratings updated successfully!" });
//   } catch (error) {
//     showToast({ type: "error", message: "Failed to update ratings." });
//     console.error(error);
//   }
// };

export default ratingsSlice.reducer;
