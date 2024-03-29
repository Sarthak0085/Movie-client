/* eslint-disable @typescript-eslint/no-explicit-any */
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import * as User from "./reducers/userReducers";
import * as Category from "./reducers/categoryReducers";
import * as Movies from "./reducers/moviesReducers";

const rootReducers = combineReducers({
    // user reducers
    userLogin: User.userLoginReducer,
    userRegister: User.userRegisterReducer,
    updateUserProfile: User.userUpdateReducer,
    deleteUserProfile: User.userDeleteProfileReducer,
    changeUserPassword: User.userChangePasswordReducer,
    getUserAllFavouritesMovie: User.getUserAllFavouritesMovieReducer,
    deleteUserAllFavouritesMovie: User.deleteUserAllFavouritesMovieReducer,
    adminGetAllUsers: User.getAllUsersByAdminReducer,
    adminDeleteUser: User.deleteUserByAdminReducer,
    userLikeMovie: User.likeMovieReducer,

    // category reducer
    getAllCategories: Category.getAllCategoriesReducers,
    adminCreateCategory: Category.createNewCategoryReducer,
    adminUpdateCategory: Category.updateCategoryReducer,
    adminDeleteCategory: Category.deleteCategoryReducer,

    // movies reducers
    getAllMovies: Movies.getAllMoviesReducers,
    getRandomMovies: Movies.getRandomMoviesReducers,
    getTopRatedMovies: Movies.getTopRatedMoviesReducers,
    getMovieById: Movies.movieDetailsReducers,
    createReview: Movies.createReviewReducer,
    deleteMovie: Movies.deleteMovieReducer,
    deleteAllMovie: Movies.deleteAllMovieReducer,
    createMovie: Movies.createMovieReducer,
    updateMovie: Movies.updateMovieReducer,
    casts: Movies.castsReducer,
});

type RootState = {
    userLogin: {
        userInfo: any; // Replace 'any' with the actual type of userInfo
    };
    // Add other slices...
};

// const userInfoFromStorage = JSON.parse(localStorage.getItem("userInfo") || null);
const userInfoFromStorageRaw = localStorage.getItem("userInfo");
const userInfoFromStorage = userInfoFromStorageRaw ? JSON.parse(userInfoFromStorageRaw) : null;

// const initialState: RootState = {
//     userLogin: { userInfo: userInfoFromStorage }
// };

export const store = configureStore({
    reducer: rootReducers,
    preloadedState: { userInfo: userInfoFromStorage } as RootState['userLogin'],
})

// export type RootState = ReturnType<typeof rootReducers>;
