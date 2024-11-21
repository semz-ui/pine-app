export type UserData = {
    name: {
        title: string;
        first: string;
        last: string;
    };
    gender: string;
    location: {
        street: {
            number: number;
            name: string;
        };
        city: string;
        state: string;
        country: string;
        postcode: string;
    };
    email: string;
    dob: {
        date: string;
        age: number;
    };
    phone: string;
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };
};