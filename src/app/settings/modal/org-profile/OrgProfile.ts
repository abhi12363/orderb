export class OrgProfile{

    constructor(
        public orgName:string = '',
        public profileUrl:string = '',
        public phone:string = '',
        public city:string = '',
        public addressLine1:string = '',
        public addressLine2:string = '',
        public state:string = '',
        public country:string = '',
        public zipCode:string = ''){
    }
}