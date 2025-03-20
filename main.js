const users = {
    user1: {name: 'John', age: 25, city: 'London'},
    user2: {name: 'Alice', age: 32, city: 'Lviv'},
    user3: {name: 'Alex', age: 23, city: 'Odesa'},
    user4: {name: 'Bob', age: 37, city: 'New York'},
    user5: {name: 'Mark', age: 45, city: 'Washington'},
    user6: {name: 'Jane', age: 29, city: 'Berlin'},
    user7: {name: 'Lucy', age: 36, city: 'Paris'},

    getUserData() {
        Object.values(users).forEach(user => {
            if (typeof user === 'object') {
                console.log(`Name: ${user.name}, Age: ${user.age}, City: ${user.city}`);
            }
        });
    }
}

users.getUserData();