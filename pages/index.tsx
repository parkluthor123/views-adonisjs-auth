import * as React from "react";
import Cookies from 'cookies-ts';
import {useState} from "react";
import Api from '../components/Api'

const Login: React.FC = ()=> {

    const cookies = new Cookies()

    const [data, setData] = useState({
        email: '',
        password: '',
    });

    const formValues = (e): any =>{
        setData({...data, [e.target.name]:e.target.value})
    }

    const sendData = async (e): Promise<any> =>{
        e.preventDefault();
        await fetch(`${Api}/login`,{
            method: 'POST',
            headers:{
                'content-type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then((res)=>res.json())
            .then((resJson)=>{
                if(!resJson.errors)
                {
                    cookies.set('token', resJson.token)
                    if(cookies.get('token') !== null || cookies.get('token') !== undefined)
                    {
                        window.location.href = "/home";
                    }
                }
            })
    }

  return (
    <>
        <title>Área administrativa - Login</title>
        <div className="container">
          <div className="row justify-content-center align-items-center" style={{height: "100vh"}}>
              <div className="col-md-6">
                  <div className="jumbotron">
                      <h1 className="display-4 text-uppercase text-center">Login</h1>
                      <p className="lead text-center">Faça login e tenha acesso ao conteúdo</p>
                      <hr className="my-4"/>

                  </div>
                  <form onSubmit={sendData}>
                      <div className="mb-3">
                          <label htmlFor="exampleInputEmail1" className="form-label">E-mail</label>
                          <input type="email" className="form-control" id="email" name="email" onChange={formValues} aria-describedby="emailHelp"/>
                      </div>
                      <div className="mb-3">
                          <label htmlFor="exampleInputPassword1" className="form-label">Senha</label>
                          <input type="password" className="form-control" id="password" name="password" onChange={formValues}/>
                      </div>
                      <div className="mt-4 d-flex justify-content-center">
                          <button type="submit" className="btn btn-primary">Entrar</button>
                      </div>
                  </form>
              </div>
          </div>
      </div>
    </>
  )
}

export default Login
