import users from './data.js';

export function getUserNames() {
   return users.map(user => {
    return user.name;
   });
}
