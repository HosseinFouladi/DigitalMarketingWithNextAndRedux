import { createSelector } from "reselect";

const user = (state) => state.user;

export const selectCurrentUser = createSelector(
  [user],
  (user) => user.currentUser
);
export const selectUserImage = createSelector(
  [selectCurrentUser],
  (currentUser) => currentUser.image
);

export const selectImageUrl = createSelector(
  [selectCurrentUser],
  (currentUser) => currentUser.imageUrl
);
export const selectUserLoading = createSelector(
  [user],
  (user) => user.userLoading
);
