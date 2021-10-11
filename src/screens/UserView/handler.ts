import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {GET_USER_DATA} from '../../redux/actions/user';

const userHandler = () => {
    const users = useSelector((state: any) => state?.user?.data);
    const dispatch = useDispatch();
    useEffect(() => {
       dispatch({ type: GET_USER_DATA });
    }, []);
    return {
        users
    }
}



export default userHandler;