import { Site } from "../settings/modal/sites/Site";

export interface UserDetail{
    customerName:string;
    sites:Site[];
    gender:string;
    dob:string;
    mobile:string;
    email:string;
    authorities:string;


}