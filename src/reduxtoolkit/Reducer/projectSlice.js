import { createSlice } from "@reduxjs/toolkit";

let initialState = [
  {
    title: "Dibuy",
    description:
      "Dibuy is a digital stock exchanging MERN stack project which is intended to benifit the small scale farmers and vendors by providing internal stock integration,products selling feasibilities with zero intermediaries.We have implemented different routes with different features to enable good user experience. Our site contains Home route,Seller corner,Dashboard,Profile section,Products route,History route,Cart route and Feedback sections.A lot of REST API's are written in the backend to perform different operations in the database to make it realtime.",
    image:
      "https://res.cloudinary.com/dmdr9a99a/image/upload/v1693725985/Screenshot_2023-09-03_125418_bz711r.png",
    github: "https://github.com/sivani2829/dibuy",
    webapp: "https://dibuy.netlify.app/",
  },

  {
    title: "Insta Clone",
    description:
      "Implemented responsive Streaming Application like Instagram Clone where users can log in and see a list of stories and posts, user can also search posts with post caption, user can be able to like and dislike the post and also view the user specific posts.",
    image:
      "https://res.cloudinary.com/dmdr9a99a/image/upload/v1693820713/Screenshot_2023-09-04_151417_jni8ke.png",
    github: "https://github.com/sivani2829/InstaClone",
    webapp: "https://instaclone.ccbp.tech/",
  },

  {
    title: "Nxt Watch",
    description:
      "Implemented responsive Streaming Application like Youtube where users can log in and see a list of vlogs and vidoes, user can also search videos with names, user can be able to play the  videos and also view the specific videos.",
    image:
      "https://res.cloudinary.com/dmdr9a99a/image/upload/v1693821168/Screenshot_2023-09-04_152102_khx1cb.png",

    github: "https://github.com/sivani2829/NxtWatch",
    webapp: "https://nxtwatch.ccbp.tech/",
  },
];

const projectSlice = createSlice({
  name: "projects",
  initialState: { projects: initialState },
  reducers: {
    add: (state, action) => {
      console.log("action", action);
      if (action.payload.title && action.payload.description) {
        state.projects = [...state.projects, { ...action.payload }];
      }
    },
  },
});

export const { add } = projectSlice.actions;
export default projectSlice.reducer;
