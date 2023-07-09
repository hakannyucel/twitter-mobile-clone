import React from 'react';
import { View, Text ,Image } from 'react-native';

type NotificationItemProps = {
    who: string
    content: string
}

const NotificationItem: React.FC<NotificationItemProps> = ({who, content}) => {
    return (
        <View style={{flexDirection: 'row', gap: 8, backgroundColor: '#fff', borderBottomWidth: .5, borderBottomColor: 'rgba(0, 0, 0, .2)', paddingBottom: 5, paddingHorizontal: 20, paddingVertical: 10}}>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-start'}}>
                <Image source={require('../assets/star-icon.png')} style={{width: 24, height: 24}} />
            </View>
            <View style={{flex: 7}}>
                <Image source={require('../assets/profile.jpg')} style={{width: 37, height: 37, borderRadius: 37}} />
                <Text style={{paddingTop: 8, paddingBottom: 6}}>In case you missed <Text style={{fontWeight: '700', color: '#141619'}}>{who}</Text>’s Tweet </Text>
                <Text>{content}</Text>
            </View>
        </View>
    )
}

export default NotificationItem;