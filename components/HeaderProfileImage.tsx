import { View, Image } from "react-native"

export type ProfileImageProp = {
    isNotification?: boolean
}

const ProfileImage: React.FC<ProfileImageProp> = ({isNotification}) => {
    return (
        <View style={{position: 'relative', shadowColor: "#000000", shadowOffset: {width: 1, height: 3}, shadowOpacity:  0.25, shadowRadius: 3.05, elevation: 4}}>
            <Image source={require("../assets/profile.jpg")} style={{width: 32, height: 32, borderRadius: 32}} />
            {
                isNotification
                ? <View style={{width: 6, height: 6, backgroundColor: "#4C9EEB", position: 'absolute', right: 1, top: 1, borderRadius: 6}} />
                : null
            }
            
        </View>
    )
}

export default ProfileImage;