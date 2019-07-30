import requestUtils from '../../utils/requestUtils'


const baseUrl = 'admin-user/userApi';

/**
 * 根据条件查询用户信息
 * @param UserFilter
 * @constructor
 */
export const LoadDataUserList = UserFilter => requestUtils.post(baseUrl + '/findUserList', Object.assign(UserFilter));

// /**
//  * 根据用户ID查询权限ID
//  * @param UserFilter
//  * @constructor
//  */
// export const LoadDataPermissionIdList = UserId => requestUtils.get(baseUrl + '/findPermissionByUserId/' + UserId);


/**
 * 保存用户信息
 * @param data
 * @constructor
 */
export const SaveUser = data => requestUtils.post(baseUrl + '/saveUser', Object.assign(data));

/**
 * 更新用户信息
 * @param data
 * @constructor
 */
export const UpdateUser = data => requestUtils.put(baseUrl + '/updateUser', Object.assign(data));

/**
 * 根据id禁用用户信息
 * @param id
 * @constructor
 */
export const ProhibitUserById = id => requestUtils.del(baseUrl + '/prohibitUserById/' + id);

/**
 * 根据id删除用户信息
 * @param id
 * @constructor
 */
export const DeleteUserById = id => requestUtils.del(baseUrl + '/deleteUserById/' + id);
