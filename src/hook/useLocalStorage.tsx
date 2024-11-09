'use client'

import { useEffect, useState } from 'react'

type SetValue<T> = T | ((val:T)=> T)

function useLocalStorage<T> (
    key: string,
    initialValue: T,
):[T, (value: SetValue<T>) => void] {

    const [storedValue, setStoredValue] = useState(()=>{
        try{
            if(typeof window !== 'undefined'){
                const item = window.localStorage.getItem(key);
                return item ? JSON.parse(item): initialValue;
            }
        }catch(error){
            console.log(error);
            return initialValue
        }
    })

    useEffect(()=>{
        try{
            const valueToStore = 
                typeof storedValue === "function"
                ? setStoredValue(storedValue):storedValue;
            if(typeof window !== 'undefined'){
                window.localStorage.setItem(key, JSON.stringify(valueToStore))
            }
        }catch(err){
            console.log(err)

        }
    }, [key, storedValue])

    return [storedValue, setStoredValue]

}


export default useLocalStorage