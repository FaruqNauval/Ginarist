import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Setting2 } from 'iconsax-react-native';
import React from 'react';
import { ProfileData, BlogList } from '../../../data';
import { ItemSmall } from '../../components';

const formatNumber = number => {
    if (number >= 1000000000) {
        return (number / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B';
    }
    if (number >= 1000000) {
        return (number / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (number >= 1000) {
        return (number / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return number.toString();
};

const Profile = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Setting2 color={'black'} variant="Linear" size={24} />
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 24,
                    gap: 10,
                    paddingVertical: 20,
                }}>
                <View style={{ gap: 15, alignItems: 'center' }}>
                    <Image
                        style={profile.pic}
                        source={{
                            uri: ProfileData.profilePict,
                        }}
                        resizeMode={'cover'}
                    />
                    <View style={{ gap: 5, alignItems: 'center' }}>
                        <Text style={profile.name}>{ProfileData.name}</Text>
                        <Text style={profile.info}>
                            Member since {ProfileData.createdAt}
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', gap: 20 }}>
                        <View style={{ alignItems: 'center', gap: 5 }}>
                            <Text style={profile.sum}>{ProfileData.blogPosted}</Text>
                            <Text style={profile.tag}>Posted</Text>
                        </View>
                        <View style={{ alignItems: 'center', gap: 5 }}>
                            <Text style={profile.sum}>
                                {formatNumber(ProfileData.following)}
                            </Text>
                            <Text style={profile.tag}>Following</Text>
                        </View>
                        <View style={{ alignItems: 'center', gap: 5 }}>
                            <Text style={profile.sum}>
                                {formatNumber(ProfileData.follower)}
                            </Text>
                            <Text style={profile.tag}>Follower</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={profile.buttonEdit}>
                        <Text style={profile.buttonText}>Edit Profile</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ paddingVertical: 10, gap: 10 }}>
                    {BlogList.map((item, index) => (
                        <ItemSmall item={item} key={index} />
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

export default Profile;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        paddingHorizontal: 24,
        justifyContent: 'flex-end',
        flexDirection: 'row',
        alignItems: 'center',
        height: 52,
        elevation: 8,
        paddingTop: 8,
        paddingBottom: 4,
    },
    title: {
        fontSize: 20,
        
        color: 'black',
    },
});
const profile = StyleSheet.create({
    pic: { width: 100, height: 100, borderRadius: 15 },
    name: {
        color: 'black',
        fontSize: 20,
        
        textTransform: 'capitalize'
    },
    info: {
        fontSize: 12,
        
        color: 'grey',
    },
    sum: {
        fontSize: 16,
        
        color: 'black',
    },
    tag: {
        fontSize: 14,
        
        color: 'rgba(128, 128, 128, 0.5)',
    },
    buttonEdit: {
        paddingHorizontal: 16,
        paddingVertical: 14,
        backgroundColor: 'rgba(128, 128, 128, 0.1)',
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 14,
        
        color: 'black',
    },
});