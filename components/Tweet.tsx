import React, { useState } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import Animated, { BounceIn, Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

export type TweetProps = {
    fullName: string,
    username: string,
    publishDate: Date,
    content: string,
    commentCount: number,
    retweetCount: number,
    likeCount: number,
    shareCount: number,
    isLiked: boolean,
    isReferance?: boolean
}

const Tweet: React.FC<TweetProps> = ({
    fullName,
    username,
    publishDate,
    content,
    commentCount,
    retweetCount,
    likeCount,
    shareCount,
    isLiked,
    isReferance
}) => {
    const [comment, setComment] = useState(commentCount);
    const [retweet, setRetweet] = useState(retweetCount);
    const [like, setLike] = useState(likeCount);
    const [share, setShare] = useState(shareCount);
    const [isLikeState, setIsLikeState] = useState(isLiked);

    const scale = useSharedValue(1);

    const animatedStyle = useAnimatedStyle(() => {
        return {
        transform: [{ scale: scale.value }],
        };
    });

    const handlePressIn = () => {
        scale.value = withTiming(1.2, {
        duration: 100,
        easing: Easing.inOut(Easing.ease),
        });
    };

    const handlePressOut = () => {
        scale.value = withTiming(1, {
        duration: 100,
        easing: Easing.inOut(Easing.ease),
        });
    };

    function formatDateTime(dateTime: Date): string {
        const now = new Date();
        const diff = now.getTime() - dateTime.getTime();

        if (diff < 0) {
            throw new Error('Invalid date');
        }

        const hours = Math.floor(diff / (1000 * 60 * 60));
        if (hours < 24) {
            return `${hours}h`;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        if (days < 7) {
            return `${days}d`;
        }

        const weeks = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));
        if (weeks < 4) {
            return `${weeks}w`;
        }

        const day = dateTime.getDate();
        const month = dateTime.getMonth() + 1;
        const year = dateTime.getFullYear();
        return `${day < 10 ? '0' : ''}${day}/${month < 10 ? '0' : ''}${month}/${year}`;
    }

    return (
        <View style={{paddingHorizontal: 20, flexDirection: 'column', borderBottomWidth: .5, borderBottomColor: 'rgba(0, 0, 0, .2)', paddingTop: 10, backgroundColor: '#fff'}}>
            {
                isReferance
                ?
                <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: "center", paddingRight: 4}}>
                        <FontAwesome name='heart' size={12} color={'#687684'} />
                    </View>
                    <View style={{flex: 5, flexDirection: 'row', justifyContent: 'flex-start', alignItems: "center", paddingLeft: 4}}>
                        <Text style={{color: '#687684', fontSize: 14}} numberOfLines={1}>Kieron Dotson and Zack John liked</Text>
                    </View>
                </View>
                : null
            }
            <View style={{flexDirection: 'row', gap: 4}}>
                <View style={{flex: 1, alignItems: 'center', paddingTop: 4}}>
                    <Image source={require("../assets/profile.jpg")} style={{width: 55, height: 55, borderRadius: 55, resizeMode: 'cover'}} />

                </View>
                <View style={{flex: 5, flexDirection: 'column', paddingBottom: 10}}>
                    <View style={{flexDirection: 'row', paddingBottom: 2}}>
                        <Text style={{color: '#141619', fontSize: 16}} numberOfLines={1}>{fullName} <Text style={{color: '#687684'}}>@{username} ·{formatDateTime(publishDate)}</Text></Text>
                    </View>
                    <View style={{paddingBottom: 10}}>
                        <Text style={{color: '#141619', fontSize: 16, paddingRight: 12}}>
                            {content}
                        </Text>
                    </View>
                    <View style={{width: 260, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Pressable style={{flexDirection: 'row', alignItems: 'center', gap: 3.5}} onPress={() => setComment(comment + 1)}>
                            <FontAwesome name='comment-o' size={15} color={'#687684'} />
                            <Text style={{color: '#687684', fontSize: 12}}>{comment.toString()}</Text>
                        </Pressable>

                        <Pressable style={{flexDirection: 'row', alignItems: 'center', gap: 3.5}} onPress={() => setRetweet(retweet + 1)}>
                            <FontAwesome name='recycle' size={15} color={'#687684'} />
                            <Text style={{color: '#687684', fontSize: 12}}>{retweet.toString()}</Text>
                        </Pressable>

                        <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut} onPress={() => {
                            setLike(isLikeState ? like - 1 : like + 1)
                            setIsLikeState(!isLikeState);
                        }}>
                            <Animated.View style={[{flexDirection: 'row', alignItems: 'center', gap: 3.5}, animatedStyle]}>
                                <FontAwesome  name={isLikeState ? 'heart' : 'heart-o'} size={15} color={isLikeState ? '#CE395F' : '#687684'} />
                                <Text style={{color: isLikeState ? '#CE395F' : '#687684', fontSize: 12}}>{like.toString()}</Text>
                            </Animated.View>
                        </Pressable>

                        <Pressable style={{flexDirection: 'row', alignItems: 'center', gap: 3.5}} onPress={() => setShare(share + 1)}>
                            <MaterialIcons name='ios-share'  size={15} color={'#687684'} />
                            <Text style={{color: '#687684', fontSize: 12}}>{share.toString()}</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Tweet;