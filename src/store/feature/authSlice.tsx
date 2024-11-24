import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import apis from "../../config/RestApis";
import { IRegisterRequest } from "../../model/IRegisterRequest";
import { ILoginRequest } from "../../model/ILoginRequest";
import { IBaseResponse } from "../../model/IBaseResponse";
import swal from "sweetalert";

const initialAuthState = {
    isAuth: false, // login oldu mu
    isLoginLoading: false,
    isRegisterLoading: false,
    user: {}

}


// fecth işlemleri

 export const fetchRegister =   createAsyncThunk(
    'auth/fetchRegister',
    async (payload: IRegisterRequest) => {
        const response = await fetch(
            apis.authService +'/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            
        }).then(data => data.json())
        return response
    }

    )

export const fetchLogin =   createAsyncThunk(
    'auth/fetchLogin',
    async (payload: ILoginRequest) => {
        const response = await fetch(
            apis.authService +'/do-login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            
        }).then(data => data.json())
        return response       
    },                          
    
)   


const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {                              // initialState deki degerleri degistirmek ve güncellemek için kullanılır
        userLogout(state){
            state.isAuth = false;   
        },
        userLogin(state){
            state.isAuth = true;
        }
    },

    extraReducers: (build) => {
        build.addCase(fetchLogin.pending, (state) => {
            state.isLoginLoading = true;
        })

        build.addCase(fetchLogin.fulfilled, (state, action: PayloadAction<IBaseResponse>) => {
            state.isLoginLoading = false;
            if(action.payload.code === 200){
                localStorage.setItem('token', action.payload.data);
                state.isAuth = true;
            }
            else{
                swal('Hata!', action.payload.message, 'error');
            }
            
            
        })


        build.addCase(fetchRegister.pending, (state) => {
            state.isRegisterLoading = true;
        })

        build.addCase(fetchRegister.fulfilled, (state, action: PayloadAction<IBaseResponse>) => {
            state.isRegisterLoading = false;
            if(action.payload.code === 200){
                swal('Başarılı','Kullanıcı oluşturuldu', 'success');
                state.isAuth = true;
            }
            else{
                swal('Hata!', action.payload.message, 'error');
            }
        })

        
    }
})

export const { userLogout, userLogin } = authSlice.actions

export default authSlice.reducer;