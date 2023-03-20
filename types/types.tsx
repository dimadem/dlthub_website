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

export interface IJsonNavigationGrid {
    id: number;
    name: string;
    url: string;
    background: string;
    rotate: string;
}

export interface IJsonItem {
    id: number;
    name: string;
    url: string;
}

export interface IJsonNavigationMap {
    title: string;
    pages: IJsonItem[];
}

export interface IJsonSocialMedia {
    id: number;
    name: string;
    url: string;
    icon: string;
}