import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import apis from "../../config/RestApis";
import { INewPostRequest } from "../../model/INewPostRequest";
import { IBaseResponse } from "../../model/IBaseResponse";
import { IPostResponse } from "../../model/IPostResponse";

interface IPostState {
    postsList: IPostResponse[],
    isLoadingPostList: boolean,
    myPostList: IPostResponse[],
    isLoadingMyPostList: boolean,
    isNewLoading: boolean
}

const initialPostState: IPostState = {
    postsList: [],
    isLoadingPostList: false,
    myPostList: [],
    isLoadingMyPostList: false,
    isNewLoading: false

}


export const fetchGetAllMyPosts =   createAsyncThunk(
    'post/fetchGetAllMyPosts',
    async () => {
        const token = localStorage.getItem('token');
        const response = await fetch(
            apis.postSevice +'/get-all-my-post?token='+token).then(data => data.json())
        return response;
    }
)

export const fetchGetAllPosts =   createAsyncThunk(
    'post/fetchGetAllPosts',
    async () => {
        const token = localStorage.getItem('token');
        const response = await fetch(apis.postSevice +'/get-all-post?token='+token).then(data => data.json())
        return response;
    }
)

export const fetchNewPost= createAsyncThunk(
    'post/fetchNewPost',
    async(payload: INewPostRequest)=>{       
      return await  fetch(apis.postSevice+'/new-post',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      }).then(data=>data.json())
    }
)



const postSlice = createSlice({
    name: 'post',
    initialState: initialPostState,
    reducers: { }, 
    
    extraReducers: (build) => {
        build.addCase(fetchGetAllMyPosts.pending,(state)=>{state.isLoadingMyPostList = true})
        build.addCase(fetchGetAllMyPosts.fulfilled,(state,action: PayloadAction<IBaseResponse>)=>{
            state.isLoadingMyPostList = false;
            if(action.payload.code === 200){
                state.myPostList = action.payload.data;
            }
        })
        build.addCase(fetchGetAllPosts.pending,(state)=>{state.isLoadingPostList = true})
        build.addCase(fetchGetAllPosts.fulfilled,(state,action: PayloadAction<IBaseResponse>)=>{
            state.isLoadingPostList = false;
            if(action.payload.code === 200){
                state.postsList = action.payload.data;
            }
        })
        build.addCase(fetchNewPost.pending,(state)=>{state.isNewLoading = true})
        build.addCase(fetchNewPost.fulfilled,(state,action: PayloadAction<IBaseResponse>)=>{
            state.isNewLoading = false
        })




            }                   
        })


export default postSlice.reducer