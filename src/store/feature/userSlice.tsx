import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProfile } from "../../model/IProfile";
import apis from "../../config/RestApis";
import { IBaseResponse } from "../../model/IBaseResponse";

interface IUserState {
  profile: IProfile | null,
  searchUsers: any [],    
  followerList: any [],     
  followingList: any [], 
  isProfileLoading: boolean,
  isSearchLoading: boolean,
  isFollowerLoading: boolean,
  isFollowingLoading: boolean
     
}

const initialUserState: IUserState = {
  profile: null,
  searchUsers: [],
  followerList: [],
  followingList: [],
  isProfileLoading: false,
  isSearchLoading: false,
  isFollowerLoading: false,
  isFollowingLoading: false


}


// fecth işlemleri

export const fetchGetProfileByToken =   createAsyncThunk(
  'user/fetchGetProfileByToken',
  async () => {
    const token = localStorage.getItem('token');
      const response = await fetch(
          apis.userService +'/get-profile?token='+token, {
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json'
              }
          }).then(data => data.json())
      return response;
  }
  
)



const userSlice = createSlice({
    name: 'user',
    initialState: initialUserState,
    reducers: {
        
    },

    extraReducers: (build) => {
        build.addCase(fetchGetProfileByToken.pending, (state) => {
            state.isProfileLoading = true;
        })
    
        build.addCase(fetchGetProfileByToken.fulfilled, (state, action: PayloadAction<IBaseResponse>) => {
            state.isProfileLoading = false;
            if(action.payload.code === 200){
                state.profile = action.payload.data;
                console.log(action.payload.data);
            }
        })
    }
})


export default userSlice.reducer