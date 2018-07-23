import { IMenu } from "./Menu";
import { IMenuGroup } from "./MenuGroup";

export interface IMenuItem{
    displayName:String;
    displayOrder:Number;
    menu:IMenu;
    menuItemGroup:IMenuGroup;
}