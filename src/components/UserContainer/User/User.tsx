import React, {FC} from 'react';
import {IUser} from "../../../interfaces/userInterface";

interface IProps {
    user: IUser,
    click: (id: number) => Promise<void>
}

const User: FC<IProps> = ({user, click}) => {
    const {id, name, email, phone, username} = user;
    return (
        <div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>email:{email}</div>
            <div>phone:{phone}</div>
            <div>username:{username}</div>
            <button onClick={() => click(id)}>click</button>
        </div>
    );
};

export {User};