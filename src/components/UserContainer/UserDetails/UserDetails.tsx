import React, {FC} from 'react';
import {IUser} from "../../../interfaces/userInterface";

interface IProps {
    userDetails: IUser;

}

const UserDetails: FC<IProps> = ({userDetails}) => {
    const {address: {geo: {lng, lat}, street, zipcode, suite, city}} = userDetails;
    return (
        <div>
            <div>lng: {lng}</div>
            <div>lat: {lat}</div>

            <div>street: {street}</div>
            <div>zipcode: {zipcode}</div>
            <div>suite: {suite}</div>
            <div>city: {city}</div>
        </div>
    );
};

export {UserDetails};

