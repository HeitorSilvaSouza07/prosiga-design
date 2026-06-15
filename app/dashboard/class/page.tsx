"use client";

import { useState, useEffect } from "react";

export default function DashboardPage(){
   
    type Classe = {
        IdClass : number,
        ClassPeriod: number,
        ClasCurso: number,
        IdUser: number
    }

    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(false); 
    const [ classes, setClass ] = useState<Classe[]>([])

    async function featchClasse(){
        try{

            const r  = await fetch("")

            if(!r.ok){
                throw new Error("Failed to fetch classes");
            }

            const data = await r.json();
            setClass(data.data);

        }catch(error){
            console.error(error);
            setError(true);
        }finally{
            setLoading(false);
        }
    }

    useEffect(() => {
        featchClasse();
    })
   
    return(
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>Error loading classes.</p>}
            {classes.length === 0 && <p>No classes found.</p>}
            {classes.map((classe) => (
                <div key={classe.IdClass}>
                    <div>{classe.ClassPeriod}</div>
                    <div>{classe.ClasCurso}</div>
                    <div>{classe.IdUser}</div>
                </div>
            ))}
        </div>
    )
}