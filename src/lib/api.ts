import axios from "axios";
import config from "../config/auth.json";
// import qs from "query-string";
import { getToken } from "./auth";
import memoize from "timed-memoize";

// const DEFAUT_CACHE_TIME_MS = 5000; // Default 5sec cache
const LONG_CACHE_TIME_MS = 30000; // Longer 30sec cache

const get = async (path: any, type = "rps") => {
    return await call(await createRequest("GET", path, undefined, type));
    
};

export const getUserPermission = memoize(
    async (username: any) => {
        return await get(`${Urls.PERMISSION}/rps/${username}`, "auth");
    },
    { timeout: LONG_CACHE_TIME_MS, hot: false }
);



// export const getAllStatuses = async () => {
//     return await get( `https://localhost:8082/rps/user/all/statuses` )
// }

export const getAllStatuses = async () => {
    return await get('https://localhost:8082/rps/user/all/statuses');
};

const createRequest = async (method: string, path: string, data: undefined, type: string) => {
    const apiurl = config.apiUrl + "/" + type;
    const param = {
        method,
        headers: {},
        url: apiurl + path,
        data: ''
    };

    param.headers = { Authorization: await getToken() };

    if (data) {
        param.data = JSON.stringify(data);
    }

    return param;
};

const call = async (params: any) => {
    try {
        const response = await axios(params);
        return response.data;
    } catch (e) {
        console.error(e);
        return { status: 500, message: JSON.stringify(e) };
    }
};

const Urls = {
    PERMISSION: "/permission",
    CHARGE: "/charge",
    CHARGE_ALL: "/charge/all",
    CHARGER: "/charger",
    CHARGER_ALL: "/charger/all",
    CHARGE_SIGNEDURL: "/charge/signedurl",
    GENERIC_SIGNEDURL: "/signedurl",
    ROUTE_ALL: "/route/all",
    ROUTE: "/route",
    AUTOPILOTLOG: "/autopilotlog/v2",
    AUTOPILOTLOG_ALL: "/autopilotlog/v2/all",
    LOCATION_LOOKUP: "/location/lookup",
    LOCATION: "/location",
    LOCATION_ALL: "/location/all",
    ROUTE_LOCATIONS_ALL: "/route-locations/all",
    FLIGHT: "/flight",
    FLIGHT_ALL: "/flight/all",
    MISSION_ALL: "/mission/all",
    FLIGHTLOG: "/flightlog",
    FLIGHT_AUTH: "/flightauth",
    FLIGHT_AUTH_ALL: "/flightauth/all",
    FLIGHT_AUTH_FILTERS: "/common/flightauth-filters",
    FLIGHTLOG_FILTERS: "/common/flightlog-filters",
    AIRCRAFT_FILTERS: "/common/aircraft-filters",
    POD_FILTERS: "/common/pod-filters",
    AUTOPILOTLOG_FILTERS: "/common/autopilotlog-filters",
    DEFECT_FILTERS: "/commom/defect-filters",
    SMR_FILTERS: "/common/smr-filters",
    INSPECTION_FILTERS: "/common/inspection-filters",
    MOVEMENT_FILTERS: "/common/movement-filters",
    MOVEMENT_ITEM_TYPE_FILTERS: "/common/movement-item-type-filters",
    CHARGER_FILTERS: "/common/charger-filters",
    COMPONENT_FILTERS: "/common/component-filters",
    REGIONS_AND_AREAS: "/common/regionsandareas",
    PUBLICATIONS_ALL: "/publications/all",
    PUBLICATION: "/publication",
    PILOT_ALL: "/pilot/all",
    PILOT: "/pilot",
    POD_ALL: "/pod/all",
    POD: "/pod",
    AIRCRAFT_ALL: "/aircraft/all",
    AIRCRAFT: "/aircraft",
    AIRCRAFT_INSPECTION: "/aircraft/inspection",
    AIRCRAFT_INSPECTION_ALL: "/aircraft/inspection/all",
    SCHEDULED_FLIGHT: "/scheduledflight",
    SCHEDULED_FLIGHT_ALL: "/scheduledflight/all",
    AUTOPILOTLOG_COMMENT: "/autopilotlog/comment",
    NOTAM_ALL: "/notam/all",
    NOTAM: "/notam",
    ROUTE_VALIDATOR: "/rp/route/validator",
    DASHBOARD: "/dashboard",
    MOVEMENT: "/movement",
    MOVEMENT_ALL: "/movement/all",
    CARGO_DELIVERY_LOCATION_ALL: "/cargo/delivery-location/all",
    CARGO_DELIVERY_LOCATION: "/cargo/delivery-location",
    CARGO_DELIVERY_CONTACT_ALL: "/cargo/delivery-contact/all",
    CARGO_DELIVERY_CONTACT: "/cargo/delivery-contact",
    CARGO_HANDLER_ALL: "/cargo/cargo-handler/all",
    CARGO_HANDLER: "/cargo/cargo-handler",
    MOVEMENT_ITEM_TYPE_ALL: "/movement-item-type/all",
    MOVEMENT_ITEM_TYPE: "/movement-item-type",
    MOVEMENT_ITEM_SUBTYPE_ALL: "/movement-item-subtype/all",
    MOVEMENT_ITEM_SUBTYPE: "/movement-item-subtype",
    SMR: "/smr",
    DEFECT: "/defect",
    DEFECT_ALL: "/defect/all",
    COMPONENT_ALL: "/component/all",
};
