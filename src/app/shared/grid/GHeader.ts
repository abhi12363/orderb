export interface IHeader{
    headerName:string;
    property:string;
    width:number;
    child:IHeader[];
    childProperty:string;
}