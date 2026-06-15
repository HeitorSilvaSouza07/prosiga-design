'use client';

import { Bruno_Ace } from 'next/font/google';
import {useState} from 'react';

export default function LoginPage(){

    const [loading, setLoading] = useState(false);
    const [erro, setErro] = useState(false)

    const handleLogin = async (cpf: string, senha: string) => {
        setLoading(true)
        try{
            const r = await fetch('http://localhost:3001/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ cpf, senha })    
            }
            )

            if(!r.ok){
                setErro(true)
                throw Error
            }

            console.log('Login bem sucedido')            

        }catch(error){
            console.log(erro)
            setErro(true)
        }finally{
            setLoading(false)
        }
    }

    return(
         <button onClick={() => handleLogin('user@email.com', 'senha')}>
      Fazer Login
    </button>
    )
}