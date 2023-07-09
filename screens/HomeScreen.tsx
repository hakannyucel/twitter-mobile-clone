import React from 'react';
import { View, ScrollView } from 'react-native';
import Header from '../components/Header';
import Tweet from '../components/Tweet';
import NewTweetIcon from '../components/NewTweetIcon';

const HomeScreen = () => {
    return (
        <View style={{position: 'relative'}} >
            <Header />
            <ScrollView>
                <Tweet
                    fullName='Hakan Yücel'
                    username='hakannyucel'
                    content="UXR/UX: You can only bring one item to a remote island to assist your research of native use of tools and usability. What do you bring?"
                    commentCount={20}
                    likeCount={40}
                    retweetCount={5}
                    shareCount={15}
                    publishDate={new Date(2021, 10, 10)}
                    isLiked={false}
                    isReferance={true} />
                <Tweet
                    fullName='Hakan Yücel'
                    username='hakannyucel'
                    content="Kobe’s passing is really sticking w/ me in a way I didn’t expect.

He was an icon, the kind of person who wouldn’t die this way. My wife compared it to Princess Di’s accident.

But the end can happen for anyone at any time, & I can’t help but think of anything else lately."
                    commentCount={20}
                    likeCount={40}
                    retweetCount={5}
                    shareCount={15}
                    publishDate={new Date(2022, 10, 10)}
                    isLiked={false}
                    isReferance={true} />
                <Tweet
                    fullName='Hakan Yücel'
                    username='hakannyucel'
                    content="UXR/UX: You can only bring one item to a remote island to assist your research of native use of tools and usability. What do you bring?"
                    commentCount={20}
                    likeCount={40}
                    retweetCount={5}
                    shareCount={15}
                    publishDate={new Date(2021, 10, 10)}
                    isLiked={false} />
                <Tweet
                    fullName='Hakan Yücel'
                    username='hakannyucel'
                    content="UXR/UX: You can only bring one item to a remote island to assist your research of native use of tools and usability. What do you bring?"
                    commentCount={20}
                    likeCount={40}
                    retweetCount={5}
                    shareCount={15}
                    publishDate={new Date(2021, 10, 10)}
                    isLiked={false}
                    isReferance={true} />
                <Tweet
                    fullName='Hakan Yücel'
                    username='hakannyucel'
                    content="UXR/UX: You can only bring one item to a remote island to assist your research of native use of tools and usability. What do you bring?"
                    commentCount={20}
                    likeCount={40}
                    retweetCount={5}
                    shareCount={15}
                    publishDate={new Date(2021, 10, 10)}
                    isLiked={false} />
            </ScrollView>
            <NewTweetIcon />
        </View>
    )
}

export default HomeScreen;