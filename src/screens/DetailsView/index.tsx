import React, {FC, useEffect} from "react";
import { View, Image } from "react-native";
import Text from "../../component/Text";
import {DetailsProps} from './interface';
import styles from "./style";
import {getDateValidatetext} from '../../utils/funcUtils';
import moment from "moment";

const DATE_FORMAT_DOB = 'DD MMM YYYY';



const DetailsView: FC<DetailsProps> = ({route, navigation}) => {
    const { item: {
        picture, email, registered, dob, location
    }} = route.params;

    useEffect(() => {
        navigation.setParams({ param: { title: 'sjhsdjadsh'} })
    }, []);
    if (!email) {
        navigation.navigate('UserView');
    }
    return (
        <View style={styles.container}>
            <View>
                <Image source={{ uri: picture?.large}} style={styles.photo} />
                <View style={styles.userAgeBox}><Text style={styles.ageText}>{dob?.age}</Text></View>
            </View>
            <View style={styles.boxAlign}>
                <View style={styles.hr} />
                <Text>{`Email: ${email}`}</Text>
                <Text>{`Date Joined: ${getDateValidatetext(registered?.date)}`}</Text>
                <Text>{`DOB: ${moment(dob?.date).format(DATE_FORMAT_DOB)}`}</Text>
            </View>
            <View style={styles.boxAlign}>
                <Text style={styles.textLeft}>Location</Text>
                <View style={styles.hr} />
                <Text>{`City: ${location?.city}`}</Text>
                <Text>{`state:${location?.state}`}</Text>
                <Text>{`country: ${location?.country}`}</Text>
                <Text>{`postcode: ${location?.postcode}`}</Text>
            </View>
        </View>
    )
}

export default DetailsView;