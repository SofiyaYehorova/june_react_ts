import React, {useEffect, useState} from 'react';
import {IUser} from "../../../interfaces/userInterface";
import {userService} from "../../../services/userService";
import {User} from "../User/User";
import {UserDetails} from "../UserDetails/UserDetails";

const Users = () => {

    const [users, setUsers] = useState<IUser[]>([])

    const[userDetail, setUserDetail ]= useState<IUser>(null);

    const click=async(userId:number):Promise<void>=>{
        const {data} = await userService.getById(userId);
        setUserDetail(data)
    }

    useEffect(() => {
        userService.getAll().then(({data})=>setUsers(data))
    }, []);

    return (
        <div>
            {userDetail&& <UserDetails userDetails={userDetail}/>}
            {
                users.map(user=><User key={user.id} user={user} click={click}/>)
            }
        </div>
    );
};

export {Users};