import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  feedback: [
    {
      id: 1,
      title: "good feature",
      description:
        "Best budget 5G smartphone, Looks premium Performance of D700 is mind blowing in this price spec. 90hz full HD+ display is great, Camera is descent.  Weight distribution is amazing as u dont feel it weighs 200gms. Totally recommended in this price spec!!!",
      image: "this is image",
      like: true,
      submitterName: "Pooja Garva",
      submitterEmail: "poojagarva123@gmail.com",
    },
  ],
};

const FeedbackSlice = createSlice({
  name: "feedbacks",
  initialState,
  reducers: {
    addFeedback: (state, action) => {
      state.feedback.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addFeedback } = FeedbackSlice.actions;
export default FeedbackSlice.reducer;
