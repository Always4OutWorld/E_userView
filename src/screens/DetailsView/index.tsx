import React, {FC, useEffect} from "react";
import { View, Image } from "react-native";
import Text from "../../component/Text";
import {DetailsProps} from './interface';
import {styles} from "./style";
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
        throw new Error('No user found');
    } 
    return (
        <View style={styles.container}>
            <View>
                <Image source={{ uri: picture?.large}} style={styles.photo} />
                <View style={styles.userAgeBox}><Text style={styles.ageText}>{dob?.age}</Text></View>
            </View>
            <View style={styles.boxAlign}>
                <View style={styles.hr} />
                <Text size="small">{`Email: ${email}`}</Text>
                <Text size="small">{`Date Joined: ${getDateValidatetext(registered?.date)}`}</Text>
                <Text size="small">{`DOB: ${moment(dob?.date).format(DATE_FORMAT_DOB)}`}</Text>
            </View>
            <View style={styles.boxAlign}>
                <Text size="largeB" style={styles.textLeft}>Location</Text>
                <View style={styles.hr} />
                <Text size="small">{`City: ${location?.city}`}</Text>
                <Text size="small">{`state:${location?.state}`}</Text>
                <Text size="small">{`country: ${location?.country}`}</Text>
                <Text size="small">{`postcode: ${location?.postcode}`}</Text>
            </View>
        </View>
    )
}

export default DetailsView;