{
    // Union type
    type NewDeveloper = 'joratali developer' | 'Frontend developer';
    type FullstackDeveloper = 'Frontend developer' | 'Expert Developer';

    type Developer = NewDeveloper | FullstackDeveloper;


    type User = {
        name: string;
        id: number;
        gender: 'male' | 'female';
        bloodGroup: 'A+' | 'A-' | 'O+' | 'O-' | 'B+' | 'B-' | 'AB+' | 'AB-';
    }

    const user: User = {
        name: "Lionel Messi",
        id: 6969,
        gender: 'male',
        bloodGroup: 'B+'
    }
}
