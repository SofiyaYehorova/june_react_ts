import {urls} from "../constants/urls";
import {IUser} from "../interfaces/userInterface";
import {axiosService, IRes} from "./axiosService";

const userService = {
    // getAll: (): Promise<AxiosResponse<IUser[]>>=>axiosService.get(urls.users.base)
    getAll: (): IRes<IUser[]>=>axiosService.get(urls.users.base),
    getById:(id:number):IRes<IUser>=>axiosService.get(urls.users.byId(id))
}

export {
    userService
}