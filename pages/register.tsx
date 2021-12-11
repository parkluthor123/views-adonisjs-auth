import * as React from "react";
import Api from '../components/Api';
import Message from '../components/layout/message';
import {useState} from "react";

const Register: React.FC = ()=>{
    const [data, setData] = useState({
        email: '',
        password: '',
    });

    const [message, setMessage] = useState({
        status: false,
        message: '',
    })

    const formValues = (e): any =>{
        setData({...data, [e.target.name]:e.target.value})
    }

    const sendData = async (e): Promise<any> =>{
        e.preventDefault();
        await fetch(`${Api}/create-user`,{
            method: 'POST',
            headers:{
                'content-type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then((res)=>res.json())
            .then((resJson)=>{
                setMessage({
                    status: true,
                    message: resJson.message
                })
                setTimeout(()=>{
                    // @ts-ignore
                    setMessage({
                        status: false,
                    })
                }, 5000)
            })
    }

    return(
        <>
            <title>Área administrativa - Registrar</title>
            <div className="container">
                <div className="row justify-content-center align-items-center" style={{height: "100vh"}}>
                    <div className="col-md-6">
                        <div className="jumbotron">
                            <h1 className="display-4 text-uppercase text-center">Registrar</h1>
                            <p className="lead text-center">Faça seu cadastro e entre na área admnistrativa</p>
                            <hr className="my-4"/>

                        </div>
                        <form onSubmit={sendData}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">E-mail</label>
                                <input type="email" className="form-control" onChange={formValues} id="email" name="email"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Senha</label>
                                <input type="password" className="form-control" onChange={formValues} id="password" name="password"/>
                            </div>
                            <div className="mt-4 d-flex justify-content-center">
                                <button type="submit" className="btn btn-primary">Cadastrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {message.status === true ? <Message Text={message.message}/> : ''}
        </>
    )
}

export default Register