import React from 'react';
import { Pressable, Image } from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';


const NewTweetIcon = () => {
    var tabBarHeight = useBottomTabBarHeight();

    return (
        <Pressable style={{position: 'absolute', width: 56, height: 56, backgroundColor: '#4C9EEB', borderRadius: 56, right: 12, bottom: tabBarHeight, justifyContent: 'center', alignItems: 'center'}}>
            <Image source={require('../assets/new-tweet-icon.png')} style={{width: 24, height: 21, resizeMode: 'cover'}} />
        </Pressable>
    )
}

export default NewTweetIcon;