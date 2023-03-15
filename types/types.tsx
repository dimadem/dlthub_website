// This file contains all the types used in the application

// example of a type
export interface IAddress {
    street: string;
    city: string;
    zipcode: string;
}

export interface IUser {
    id: number;
    name: string;
    email: string;
    address: IAddress;
}

export interface IJsonNavigation {
    id: number;
    name: string;
    url: string;
    background: string;
    rotate: string;
}