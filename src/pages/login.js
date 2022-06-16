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
            <p>Hello!</p>
        </div>
    )
}