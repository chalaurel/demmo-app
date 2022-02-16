export enum UserRoles {
    "Aircraft Observer" = "Aircraft Observer",
    "ATC" = "ATC",
    "Customer" = "Customer",
    "Engineer" = "Engineer",
    "Flight Authoriser" = "Flight Authoriser",
    "Hub-Operator" = "Hub-Operator",
    "Logistics Manager" = "Logistics Manager",
    "Maintenance-Controller" = "Maintenance-Controller",
    "Manufacturing" = "Manufacturing",
    "Production Manager" = "Production Manager",
    "Reporting" = "Reporting",
    "Route Authoriser" = "Route Authoriser",
    "Route-Planner" = "Route-Planner",
    "Simulator Admin" = "Simulator Admin",
    "Simulator Operator" = "Simulator Operator",
    "Swoop Staff" = "Swoop Staff",
    "Technician" = "Technician",
    "Temp OPS Route Auth" = "Temp OPS Route Auth",
    "Administrator" = "Administrator",
    "Pilot" = "Pilot"
}

export enum UserModes {
    OBSERVER = "Observer",
    PILOT_READY = "Pilot ready",
    PILOT_NOT_READY = "Pilot not ready"
}

export type CheckListItemType = {
    question: string
    options: { Yes: string; No: string }
    allowaccess: string
    picture: string
}

export type IUser = {
    email?: string | void;
    phone?: string | void;
    authtime?: any;
    exp?: any;
    username?: string;
    details?: any;
    firstname?: string;
    lastname?: string;
    roles?: any;
    operations?: any;
    organisations?: any;
    permissions?: any;
    certifications?: any;
}

export type FlightCheckRequestPayload = {
    response: Record<string, { approval: boolean; selected: string }>
    safetofly: boolean
}
