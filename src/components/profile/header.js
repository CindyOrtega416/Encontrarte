import React, {useEffect, useState} from "react";
import PropTypes from 'prop-types';
import Skeleton from "react-loading-skeleton";
import useUser from "../../hooks/use-user";
import {isUserFollowingProfile} from "../../services/firebase";


export default function Header({
  photosCount,
  followerCount,
  setFollowerCount,
  profile: { docId: profileDocId, userId: profileUserId, fullName, following = []
      , username: profileUsername
             //docId is Raphael's docId, userId is Raphael's userId, etc
  }}) {
    const {  user }= useUser()
    const [isFollowingProfile, setIsFollowingProfile] = useState(false)
    const activeBtnFollow = user.username && user.username !== profileUsername

    const handleToggleFollow = () => {
    return 1
    }

    useEffect(()=> {
        const isLoggedInUserFollowingProfile = async () => {
            const isFollowing = await isUserFollowingProfile(user.username, profileUserId) // pass my username and the profile I'm in (ex. Raphael)
            setIsFollowingProfile(isFollowing) // true or false according what firebase returns
        }

        // check if we have a user. If true, call that function
        if(user.username && profileUserId) {
            isLoggedInUserFollowingProfile()
        }
    }, [user.username, profileUserId]);

    return (
        <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
            <div className="container flex justify-center">
                {user.username && (
                <img
                    className="rounded-full h-40 w-40 flex"
                    alt={`${user.username} profile picture`}
                    src={`/images/avatars/${profileUsername}.jpg`}
                />
                )}
            </div>
            <div className="flex items-center justify-center flex-col col-span-2">
                <div className="container flex-col items-center">
                    <p className="text-2xl mr-4">{profileUsername}</p>
                    {/* check that we are not able to follow ourselves
                    'if it's a truty value and the user isn't on their own profile =>'*/}
                    {activeBtnFollow && (
                        <button
                            className="bg-blue-medium font-bold text-sm rounded text-white
                            w-20 h-8"
                            type="button"
                            onClick={handleToggleFollow}
                        >
                            {isFollowingProfile ? 'Unfollow' : 'Follow'}
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

Header.propTypes = {
    photosCount: PropTypes.number.isRequired,
    followerCount: PropTypes.number.isRequired,
    setFollowerCount: PropTypes.func.isRequired,
    profile: PropTypes.shape({
        docId: PropTypes.string,
        userId: PropTypes.string,
        fullName: PropTypes.string,
        username: PropTypes.string,
        following: PropTypes.array
    }).isRequired
}