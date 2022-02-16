import { getCurrentUser } from "../lib/auth";

import {
    fetchUserState
} from '../store/user'

export const fetchCurrentUser = async (dispatch: any) => {
    const user = await getCurrentUser();
    dispatch(fetchUserState(user));
    return user;
};
