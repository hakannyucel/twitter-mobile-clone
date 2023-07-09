import React, { ReactNode } from 'react';
import { View, ScrollView, Text, Pressable, useWindowDimensions, Dimensions } from 'react-native';
import Header from '../components/Header';
import NotificationItem from '../components/NotificationItem';
import NewTweetIcon from '../components/NewTweetIcon';
import { TabView, SceneMap } from 'react-native-tab-view';
import Tweet from '../components/Tweet';

const FirstRoute = () => (
    <ScrollView>
        <NotificationItem who='Saad Drusteer' content='🔥 Are you using WordPress and migrating to the JAMstack? I wrote up a case study about how Smashing Magazine moved to JAMstack and saw great performance improvements and better security.' />
        <NotificationItem who='Saad Drusteer' content='🔥 Are you using WordPress and migrating to the JAMstack? I wrote up a case study about how Smashing Magazine moved to JAMstack and saw great performance improvements and better security.' />
        <NotificationItem who='Saad Drusteer' content='🔥 Are you using WordPress and migrating to the JAMstack? I wrote up a case study about how Smashing Magazine moved to JAMstack and saw great performance improvements and better security.' />
        <NotificationItem who='Saad Drusteer' content='🔥 Are you using WordPress and migrating to the JAMstack? I wrote up a case study about how Smashing Magazine moved to JAMstack and saw great performance improvements and better security.' />
        <NotificationItem who='Saad Drusteer' content='🔥 Are you using WordPress and migrating to the JAMstack? I wrote up a case study about how Smashing Magazine moved to JAMstack and saw great performance improvements and better security.' />
        <NotificationItem who='Saad Drusteer' content='🔥 Are you using WordPress and migrating to the JAMstack? I wrote up a case study about how Smashing Magazine moved to JAMstack and saw great performance improvements and better security.' />
    </ScrollView>
);

const SecondRoute = () => (
  <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
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
        isLiked={false} />
  </ScrollView>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const NotificationScreen = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'First' },
        { key: 'second', title: 'Second' },
    ]);

    const tabBar = (): ReactNode => {
        return (
            <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#fff'}}>
                {routes.map((route, i) => {
                    const isSelected = routes.indexOf(route) === index;
                    return (
                        <Pressable key={route.key} onPress={() => setIndex(i)} style={{flex: 1, justifyContent: 'center', alignItems: 'center', paddingVertical: 12, borderBottomWidth: 2, borderBottomColor: isSelected ? '#4C9EEB' : "#fff"}}>
                            <Text style={{color: isSelected ? '#4C9EEB' : '#687684', fontSize: 16, fontWeight: '500'}}>{route.title}</Text>
                        </Pressable>
                    );
                })}

            </View>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            <Header />
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                renderTabBar={tabBar}
                initialLayout={{ width: Dimensions.get('window').width }}/>
            <NewTweetIcon />
        </View>
    )
}

export default NotificationScreen;