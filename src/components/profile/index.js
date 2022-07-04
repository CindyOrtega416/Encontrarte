import React, {useEffect, useReducer} from "react";
import PropTypes from 'prop-types';
import {getUserByUsername, getUserPhotosByUserId, getUserPhotosByUsername} from "../../services/firebase";
import Header from "./header";
import Photos from "./photos";


export default function Profile({ user }) {
    const reducer = (state, newState) => ({...state, ...newState }) // so we can overwrite values such as username if it updates
    const initialState = {
        profile: {},
        photosCollection: [],
        followerCount: 0
    }

    // we're gonna have an object that's gonna have a profile, a photosCollection, etc
    // dispatch allows us to update the state
    const[{ profile, photosCollection, followerCount}, dispatch] =
        useReducer(reducer, initialState)

    useEffect(()=> {
        async function getProfileInfoAndPhotos() {
            const photos = getUserPhotosByUsername(user.username)
            // once we have this information we can dispatch and say 'look, we need to update the state
            // so i'm gonna say here is the profile is user (the user information is in there) etc
            dispatch({ profile: user, photosCollection: photos,
                followerCount: user.followers.length })
        }

            getProfileInfoAndPhotos()


    }, [user.username])
    return (
        <>
            <Header />
            <Photos photos={photosCollection} />
            <p>Hello {user.username}</p>
        </>
    )
}

Profile.propTypes = {
    user: PropTypes.shape({
        dateCreated: PropTypes.number.isRequired,
        emailAddress: PropTypes.string.isRequired,
        followers: PropTypes.array.isRequired,
        following: PropTypes.array.isRequired,
        fullName: PropTypes.string.isRequired,
        userId: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired
    }).isRequired
}