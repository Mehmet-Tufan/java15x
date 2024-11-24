import React, { useState } from 'react';
import swal from 'sweetalert';
import './LoginPage.css'
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { XDispatch } from '../../store';
import { fetchLogin } from '../../store/feature/authSlice';
import { fetchGetProfileByToken } from '../../store/feature/userSlice';
function Login() {

    document.body.style.backgroundColor = 'white'; // Sayfa yüklenirken arka plan rengini beyaz yapar.
       
    const dispatch = useDispatch<XDispatch>();
    const naivigate = useNavigate();




    const [userName,setUserName]= useState('');
    const [password, setPassword] = useState('');
    const [isEmpty,setIsEmpty] = useState(false);
    const [isUserEmpty, setIsUserEmpty] = useState(false);
    const [isPasswordEmpty, setIsPasswordEmpty] = useState(false)
    const doLogin = ()=>{
        setIsUserEmpty(userName === '');     
        setIsPasswordEmpty(password === ''); 
        if(userName === '' || password=== ''){
            setIsEmpty(true);                 
            return
        }
        else
            setIsEmpty(false);
        
            dispatch(fetchLogin({userName,password})).then((data)=>{
                if(data.payload.code === 200){
                    dispatch(fetchGetProfileByToken())
                    naivigate('/');
                }
                
            })
    }
       
  return (
    <div className='container'>
        <div className="row mt-4">
            <div className="col-3"></div>
            <div className="col-6">
                <div className="mb-5 mt-5 text-center">
                    <img src="/java15logo.jpg" width={150} height={150} style={{borderRadius: '100%'}} />
                    <br />
                    <label style={{fontSize: '22px', fontWeight: 'bolder'}} className='form-label'>Java15X Login</label>
                </div>
                {
                    isEmpty 
                    ? <div className='alert alert-warning' role='alert'>
                        <h4 className='alert-heading'>Uyarı</h4>
                        <hr />
                        <p >Kullanıcı adı ve şifre boş geçilemez.</p>
                     </div>
                    : null 
                }
                {
                    isUserEmpty 
                    ? <div className="mb-3">
                        <label style={{color:'red'}} className='form-label'>Kullanıcı adı</label>
                        <input style={{borderColor:'red'}} onChange={evt=>{setUserName(evt.target.value)}} type="text" className='form-control' />
                      </div>
                    : <div className="mb-3">
                        <label className='form-label'>Kullanıcı adı</label>
                        <input onChange={evt=>{setUserName(evt.target.value)}} type="text" className='form-control' />
                      </div>
                }
                
                {
                    isPasswordEmpty
                    ?  <div className="mb-3">
                        <label style={{color:'red'}} className="form-label">Şifre</label>
                        <input style={{borderColor:'red'}} onChange={evt=>{setPassword(evt.target.value)}} type="password" className="form-control" />
                      </div>
                    : <div className="mb-3">
                        <label className="form-label">Şifre</label>
                        <input onChange={evt=>{setPassword(evt.target.value)}} type="password" className="form-control" />
                      </div>
                }
               
                <div className="mb-5">
                    <div className="row">
                        <div className="col d-grid">
                            <button onClick={doLogin} className='btn btn-success'>Giriş</button>
                        </div>
                        <div className="col d-grid"> 
                            <NavLink to={'/register'} className='btn btn-warning'>
                                Üye ol
                            </NavLink>
                            </div>
                    </div>
                    
                </div>

            </div>
            <div className="col-3"></div>
        </div>
    </div>
  )
}

export default Login;