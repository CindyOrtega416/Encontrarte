import React, {useState, useContext, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import FirebaseContext from "../context/firebase";


export default function Login() {
    const history = useNavigate();
    const { firebase } = useContext(FirebaseContext)

    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')

    const [error, setError] = useState('')
    const isInvalid = password === '' || emailAddress === ''

    const handleLogin = () => {

    }

    useEffect(() => {
        document.title = 'Login - Encontrarte'
    }, [])

    return (
        <div className="container flex mx-auto max-w-screen-md items-center
        h-screen">
            <div className="flex w-3/5">
                <img
                    src="/images/icon.png"
                    alt="Logo"
                />
            </div>
            <div className="flex flex-col w-2/5">
                <p>I will be the form</p>
            </div>
        </div>
    )
}