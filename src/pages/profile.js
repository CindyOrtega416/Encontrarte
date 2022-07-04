import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {getUserByUserId, getUserByUsername} from "../services/firebase";
import * as ROUTES from '../constants/routes';
import Header from "../components/header";
import UserProfile from '../components/profile';

export default function Profile() {
    const { username } = useParams()  // destructure out username because in ROUTES we have /p/:username
    // we need to see if user exists
    const [user, setUser] = useState(null)
    const [userExists, setUserExists] = useState(false)
    const history = useNavigate()

    useEffect(()=> {
        async function checkUserExists() {
            const user = await getUserByUsername(username)
            if (user.length > 0) {
                setUser(user[0])
                setUserExists(true)
            } else {
                setUserExists(false)
                history.push(ROUTES.NOT_FOUND)
            }
        }

        checkUserExists()
    }, [username, history])

    return userExists ? (
        <div className="bg-gray-background">
            <Header />
            <div className="mx-auto max-w-screen-lg">
                <UserProfile user={user}/>
            </div>
        </div>
    ) : null    // if there is no user return null
}