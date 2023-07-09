import React from 'react';
import { View, Text, Pressable } from 'react-native';
import Header from '../components/Header';
import NewTweetIcon from '../components/NewTweetIcon';

const SearchScreen = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#E7ECF0', position: 'relative'}}>
            <Header />
            <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 12,  borderBottomWidth: .5, borderBottomColor: 'rgba(0, 0, 0, .2)', backgroundColor: '#fff'}}>
                <Text style={{color: '#141619', fontSize: 19, fontWeight: '900'}}>Trends for you</Text>
            </View>
            <View style={{flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', gap: 14, paddingHorizontal: 30, paddingVertical: 37, backgroundColor: '#fff'}}>
                <Text style={{color: '#141619', fontSize: 22, fontWeight: '900'}}>No new trends for you </Text>
                <Text style={{color: '#687684', fontSize: 16}}>It seems like there’s not a lot to show you right now, but you can see trends for other areas</Text>
                <Pressable style={{paddingHorizontal: 12, paddingVertical: 8, backgroundColor: '#4C9EEB', borderRadius: 16, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#fff', fontSize: 14}}>Change location</Text>
                </Pressable>
            </View>
            <NewTweetIcon />
        </View>
    )
}

export default SearchScreen;