[{
    id: '/#adjasd31231',
    name: 'Roberto',
    room: 'The Office Fans'
}]

// addUser(id, name , room)
// removeUser(id) -- by socket id
// getUser(id)
// getUserList(room)
class Users {
    constructor () {
        this.users = [];
    }

    addUser (id, name, room) {
        var user = {id, name, room};
        this.users.push(user);
        return user;
    }

    removeUser (id) {
        var removedUser = this.users.find(user => user.id === id);
        this.users = this.users.filter(user => user.id !== id);
        return removedUser;
    }

    getUser (id) {
        return this.users.find(user => user.id === id);
    }

    getUserList(room) {
        var users = this.users.filter(user => user.room === room);
        var namesArray = users.map(user => user.name);

        return namesArray;
    }
}
// class Person {
//     constructor (name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     getUserDescription () {
//         return `${this.name} is ${this.age} year(s) old.`;
//     }
// }

// var me = new Person('Roberto', 26);
// var description = me.getUserDescription();
// console.log(description);
module.exports = {Users};