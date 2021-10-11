import React from "react";
import { View, FlatList, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./style";
import Text from '../../component/Text';
import userHandler from "./handler";
import {UserList} from './interface';
import moment from "moment";

const getDateValidatetext = (date: any) => {
    const today: any = moment();
    const registerDate: any = moment(date);
    const differneceInDate = today.diff(registerDate, 'days');
    if (differneceInDate < 1) {
        return `Today ${moment(registerDate).format('h:mm a')}`
    }
    if (differneceInDate === 1) {
        return `Yesterday ${moment(registerDate).format('h:mm a')}`
    }
    if (differneceInDate < 5) {
        return `${differneceInDate} days ago`
    }
    if (differneceInDate >= 5) {
        return moment(registerDate).format('MMM D YYYY');
    }
    return moment(registerDate).format('YYYY');
}


const renderUserComponent = ({item}: UserList) => {
    console.log('=================', item)
    return (
        <View style={styles.container}>
            <View style={styles.containerProfile}>
                <Image source={{ uri: item?.picture?.large}} style={styles.photo} />
                <View>
                <Text size="h4">
                    {`${item?.name?.title} ${item?.name?.first} ${item?.name?.last}`}
                </Text>
                <Text size="h4">
                    {item?.email}
                </Text>
                <Text size="h4">
                    {`Country | ${item?.location?.country}`}
                </Text>
                </View>
            </View>
            <View style={styles.navigate}>
                <Text size="h4">{getDateValidatetext(item?.registered?.date)}</Text>
                <Image source={{ uri: 'https://cdn4.iconfinder.com/data/icons/basic-app/1000/BASICAPP_1-02-512.png'}} style={styles.photo2} />
                {/* <Text size="h4">{`>`}</Text> */}
            </View>
        </View>
    );
}

const FlatListItemSeparator = () => {
    return (
      <View style={styles.separator} />
    );
  }


const UserView = () => {
    const {users} = userHandler();
    return (
        <SafeAreaView>
            {users?.length > 0 ? (
            <FlatList
                data={users}
                renderItem={(item: any) => renderUserComponent(item)}
                ItemSeparatorComponent={FlatListItemSeparator}
                keyExtractor={(item: any, index: number) => index.toString()}
            />
            ) : (
                <View><Text size="h3">No userList</Text></View>
            )}
        </SafeAreaView>
    )
}

export default UserView;