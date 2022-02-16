import { Auth } from "aws-amplify";
import config from "../config/auth.json";
import { getUserPermission } from "./api";

export const getToken = async () => {
    return (await Auth.currentSession()).getIdToken().getJwtToken();
};

export const getCurrentUser = async () => {
    try {
        const payload = (await Auth.currentSession()).getIdToken().decodePayload();
        const userInfo = await Auth.currentUserInfo();
        const res_userPermissions = await getUserPermission(payload.email);
        const userPermissions = res_userPermissions && res_userPermissions.data && JSON.parse(res_userPermissions.data);

        const details = payload && payload.details && JSON.parse(payload.details);
        return {
            email: payload.email,
            phone: payload.phone_number,
            auth: new Date(payload.auth_time * 1000),
            exp: new Date(payload.exp * 1000),
            username: payload["cognito:username"],
            firstname: userInfo?.attributes?.given_name,
            lastname: userInfo?.attributes?.family_name,
            roles: details?.roles,
            operations: details?.operations,
            organisations: details?.organisations,
            permissions: userPermissions?.permissions && userPermissions.permissions[config.auth.applicationId],
            certifications: userPermissions?.certifications,
        };
    } catch (e) {
        console.log(e);
        return {};
    }
};


export const logout = () => {
    Auth.signOut();
};
