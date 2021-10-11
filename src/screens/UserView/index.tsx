import React, {FC} from "react";
import { View, FlatList, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./style";
import Text from '../../component/Text';
import userHandler from "./handler";
import {UserList, UserListProps} from './interface';
import {getDateValidatetext} from '../../utils/funcUtils';



const renderUserComponent = ({item, id}: UserList) => {
    return (
        <View key={id} style={styles.container}>
            <View style={styles.containerProfile}>
                <Image source={{ uri: item?.picture?.large}} style={styles.photo} />
                <View style={styles.textContainer}>
                    <Text size="mediumB">
                        {`${item?.name?.title} ${item?.name?.first} ${item?.name?.last}`}
                    </Text>
                    <Text size="labelD">
                        {item?.email}
                    </Text>
                    <Text size="labelD">
                        {`Country | ${item?.location?.country}`}
                    </Text>
                </View>
            </View>
            <View style={styles.navigate}>
                <Text size="label">{getDateValidatetext(item?.registered?.date)}</Text>
                <Image source={{ uri: 'https://cdn4.iconfinder.com/data/icons/basic-app/1000/BASICAPP_1-02-512.png'}} style={styles.photo2} />
            </View>
        </View>
    );
}

const FlatListItemSeparator = () => {
    return (
      <View style={styles.separator} />
    );
}


const UserView: FC<UserListProps> = ({navigation}) => {
    const {users, loadMore, extraData, showLoader} = userHandler();
    const Footer = () => {
        if (!showLoader) {
            return null;
        }
        return <ActivityIndicator size="large" />
    }
    return (
        <SafeAreaView>
            {users?.length > 0 ? (
            <FlatList
                data={users}
                renderItem={(item: any, id: number) => {
                const name: string = `${item?.item?.name?.title} ${item?.item?.name?.first} ${item?.item?.name?.last}`;
                return <TouchableOpacity onPress={() => navigation.navigate('DetailsView', { name: name , ...item })}>{renderUserComponent(item, id)}</TouchableOpacity>
                }}
                ItemSeparatorComponent={FlatListItemSeparator}
                keyExtractor={(item: any, index: number) => index.toString()}
                extraData={extraData}
                onEndReached={() => {
                    loadMore()
                }}
                ListFooterComponent={Footer}
            />
            ) : (
                <View style={styles.centreLoad}>
                    {users?.length === 0 ? <Text size="h3">No userList</Text> : <ActivityIndicator size="large" />}
                </View>
            )}
        </SafeAreaView>
    )
}

export default UserView;