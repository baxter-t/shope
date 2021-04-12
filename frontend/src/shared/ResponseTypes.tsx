export enum ItemType {
    Top,
    Pants,
    Dress,
    Skirt,
    Shoes,
    Glasses
}

export enum MeasurementType {
    Height,
    Weight,
    Bust,
    Waist,
    Hips,
    Shape,
    Custom
}

export enum Shape {
    Hourglass
}

export type Measurement = {
    measurementType: MeasurementType;
    measurementName?: string;
    measurementValue: string;
}

export enum SocialType {
    Instagram,
    Twitter
}

export type UserSocialLink = {
    site: SocialType;
    link: string;
}

export type User = {
    username: string;
    socials: Array<UserSocialLink>;
}

export type Garment = {
    itemType: ItemType;
    name: string;
    size: string;
    shopLink: string;
    coupon?: string;
}