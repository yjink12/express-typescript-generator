import User from '../models/user';
import userDao from '../daos/userDao'

/**
 * Add one user.
 * 
 * @param user 
 * @returns 
 */
function addOneUser(user: User):Promise<User> {
    return userDao.add(user);
}
// Export default
export default {
    addOneUser,
    // errors,
    // getAll,
    // updateOne,
    // delete: deleteOne,
} as const;

// import userDao from '@daos/userDao';
// import { IUser } from '@models/user';


// // Constants
// const errors = {
//     userNotFound: 'A user with the given id does not exists in the database.',
// } as const;



// /**
//  * Get all users.
//  * 
//  * @returns 
//  */
// function getAll(): Promise<IUser[]> {
//     return userDao.getAll();
// }




// /**
//  * Update one user.
//  * 
//  * @param user 
//  * @returns 
//  */
// async function updateOne(user: IUser): Promise<{error?: string}> {
//     const persists = await userDao.persists(user.id);
//     if (!persists) {
//         return {error: errors.userNotFound};
//     }
//     await userDao.update(user);
//     return {};
// }


// /**
//  * Delete a user by their id.
//  * 
//  * @param id 
//  * @returns 
//  */
// async function deleteOne(id: number): Promise<{error?: string}> {
//     const persists = await userDao.persists(id);
//     if (!persists) {
//         return {error: errors.userNotFound};
//     }
//     await userDao.delete(id);
//     return {};
// }


