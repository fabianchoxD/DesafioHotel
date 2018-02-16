import React, { Component } from 'react';
import Form from 'react-formal';
import { modelSchema } from '../Schemas/Login';
import axios from 'axios';
import { hashHistory } from 'react-router';

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            model: modelSchema,
            errorLogin: false
        }
    }

    onSubmit(formValues) {
        axios.post('http://localhost:5000/api/login', formValues.user)
            .then((response) => {
                if (response.data.msg === "user_logged") {
                    localStorage.setItem('user', JSON.stringify(response.data.user));
                    return hashHistory.push('/profile');
                }
            })
            .catch((error) => {
                this.setState({
                    errorLogin: true
                })
            })
    }

    render() {
        const { errorLogin, model } = this.state;
        return (
            <div>
                {errorLogin === true &&
                    <div className="alert alert-danger">
                        Datos de login incorrectos
                    </div>
                }

                <Form
                    onSubmit={(e) => this.onSubmit(e)}
                    schema={modelSchema}
                    value={model}
                    onChange={modelInfo => this.setState({ model: modelInfo })}
                >

                    <div style={{ "marginTop": "10px" }} className="form-group">
                        <label>Email</label>
                        <Form.Field className={`form-control col-md-12`} name='user.email' />
                        <Form.Message errorClass={`col-md-12 alert alert-danger`} for='user.email' />
                    </div>

                    <br />

                    <div className="form-group">
                        <label>Password</label>
                        <Form.Field type="password" className={`form-control col-md-12`} name='user.password' />
                        <Form.Message errorClass={`col-md-12 alert alert-danger`} for='user.password' />
                    </div>

                    <br />

                    <Form.Button style={{ "marginTop": "10px" }} className={`btn btn-block btn-success`} type='submit'>
                        Login
                    </Form.Button>
                </Form>
            </div>
        )
    }
}