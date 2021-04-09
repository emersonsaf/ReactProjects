import React, { useState } from 'react'

import '../styles/Login.css'

export const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    return (
        <div className="container" >
            <div className="content">
                <div id="login">
                    <form
                        onSubmit={(event) => {
                            event.preventDefault();
                            console.log(username, password)
                        }}
                    >
                        <h1>Login</h1>
                        <p>
                            <label>Nome de Usuário</label>
                            <input
                                id='username'
                                value={username}
                                onChange={(event) => {
                                    setUsername((event.target.value))
                                }}
                                name="username"
                                required="required"
                                type="text"
                                placeholder="usuario"
                            />
                        </p>

                        <p>
                            <label>Senha</label>
                            <input id="password"
                                value={password}
                                onChange={(event) => {
                                    setPassword((event.target.value))
                                }}
                                name="password"
                                required="required"
                                type="password"
                                placeholder="1234" />
                        </p>
                        <p>
                            <input type="submit" value="Logar" />
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}