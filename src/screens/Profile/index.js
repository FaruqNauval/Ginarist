import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Setting2 } from 'iconsax-react-native';
import React, { useRef, useEffect, useState, useCallback } from 'react';
import { BlogList } from '../../../data';
import { ItemSmall } from '../../components';
import firestore from "@react-native-firebase/firestore";
import ActionSheet from 'react-native-actions-sheet';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

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
    const navigation = useNavigation();
    const [profileData, setProfileData] = useState(null);
    const actionSheetRef = useRef(null);
    const openActionSheet = () => {
        actionSheetRef.current?.show();
    };
    const closeActionSheet = () => {
        actionSheetRef.current?.hide();
    };
    useEffect(() => {
        const user = auth().currentUser;
        const fetchProfileData = () => {
            try {
                const user = auth().currentUser;
                if (user) {
                    const userId = user.uid;
                    const userRef = firestore().collection('users').doc(userId);

                    const unsubscribeProfile = userRef.onSnapshot(doc => {
                        if (doc.exists) {
                            const userData = doc.data();
                            setProfileData(userData);
                        } else {
                            console.error('Dokumen pengguna tidak ditemukan.');
                        }
                    });

                    return () => {
                        unsubscribeProfile();
                    };
                }
            } catch (error) {
                console.error('Error fetching profile data:', error);
            }
        };
        fetchProfileData();
    }, []);
    const handleLogout = async () => {
        try {
            closeActionSheet();
            await auth().signOut();
            await AsyncStorage.removeItem('userData');
            navigation.replace('Login');
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.header} onPress={openActionSheet}>
                <Setting2 color={'black'} variant="Linear" size={24} />
            </TouchableOpacity>
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
                            uri: profileData?.photoUrl,
                        }}
                        resizeMode={'cover'}
                    />
                    <Text style={profile.name}>{profileData?.fullName}</Text>
                    <View style={{ flexDirection: 'row', gap: 20 }}>
                        <View style={{ alignItems: 'center', gap: 5 }}>
                            <Text style={profile.sum}>{profileData?.totalPost}</Text>
                            <Text style={profile.tag}>Posted</Text>
                        </View>
                        <View style={{ alignItems: 'center', gap: 5 }}>
                            <Text style={profile.sum}>
                                {profileData?.followingCount}
                            </Text>
                            <Text style={profile.tag}>Following</Text>
                        </View>
                        <View style={{ alignItems: 'center', gap: 5 }}>
                            <Text style={profile.sum}>
                                {profileData?.followersCount}
                            </Text>
                            <Text style={profile.tag}>Follower</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={profile.buttonEdit}>
                        <Text style={profile.buttonText}>Edit Profile</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <ActionSheet
                ref={actionSheetRef}
                containerStyle={{
                    borderTopLeftRadius: 25,
                    borderTopRightRadius: 25,
                }}
                indicatorStyle={{
                    width: 100,
                }}
                gestureEnabled={true}
                defaultOverlayOpacity={0.3}>
                <TouchableOpacity
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingVertical: 15,
                    }}
                    onPress={handleLogout}>
                    <Text
                        style={{
                            color: 'black',
                            fontSize: 18,
                        }}>
                        Log out
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingVertical: 15,
                    }}
                    onPress={closeActionSheet}>
                    <Text
                        style={{
                            color: 'red',
                            fontSize: 18,
                        }}>
                        Cancel
                    </Text>
                </TouchableOpacity>
            </ActionSheet>
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