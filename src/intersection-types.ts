{
    type FrontendDeveloper = {
        skills: string[];
        designation1: 'Frontend Developer';
    }

    type BackendDeveloper = {
        skills: string[];
        designation2: 'Backend Developer'
    }

    type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;

    const fullStackDeveloper: FullStackDeveloper = {
        skills: ['React', 'Redux', 'MongoDB', 'Prisma'],
        designation1: 'Frontend Developer',
        designation2: 'Backend Developer'
    }
}
