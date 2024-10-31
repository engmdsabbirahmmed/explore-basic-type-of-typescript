{
    //spread operator
    //rest operator


    const friends1: string[] = ['tareq', 'noman', 'hasan', 'razu'];
    const friends2: string[] = ['opu', 'razu', 'salman', 'rakib', 'mehedi']

    friends1.push(...friends2)


    const mentors1 = {
        typescript: "Mezba vai",
        redux: "Mir vai",
        dbms: "Mizan vai",
    };

    const mentors2 = {
        next: "Tanmoy vai",
        prisma: "Firoz vai",
        cloud: "Nahid vai",
    };

    const mentorList = {
        ...mentors1,
        ...mentors2
    }



    //rest operator
    // const greetFriends = (friend1: string, friend2: string, friend3: string, friend4: string) => {
    //     console.log(`Hi to my all friends ${friend1}, ${friend2},${friend3}, ${friend4}`)
    // }

    // greetFriends('abul', 'babul', 'dabul', 'habul')
    
    const greetFriends = (...friends:string[]) => {
        friends.forEach(friend =>console.log(`Hi ${friend}`))
    }

    greetFriends('abul', 'babul', 'habul', 'gabul')
}