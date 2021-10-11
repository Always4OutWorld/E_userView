import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {ToastAndroid} from 'react-native';
import {GET_USER_DATA} from '../../redux/actions/user';

const userHandler = () => {
    const users = useSelector((state: any) => state?.user?.data);
    const intialCount = 10;
    const [count, setCount] = useState(intialCount);
    const [intialData, setIntial] = useState(null || []);
    const [showLoader, setFooterLoad] = useState(true);
    const dispatch = useDispatch();
    useEffect(() => {
       
    }, []);

    useEffect(() => {
        dispatch({ type: GET_USER_DATA, count: count });
    }, [count]);

    useEffect(() => {
        if (users?.length === count) {
            setIntial(users);
        }
    }, [users]);

    const loadMore = () => {
        if (count > 99) {
            setFooterLoad(false);
            ToastAndroid.show("No more Users to load. all User list are showing here", ToastAndroid.LONG);
            return;
        }
        ToastAndroid.show(`${count} user listed`, ToastAndroid.SHORT);
        setCount(count + intialCount);
    }
    return {
        users: intialData,
        loadMore,
        extraData: users?.length > 5 ? users : [],
        showLoader,
    }
}



export default userHandler;