export const Types = {
    GET_USERS_REQUEST: "users/get_users_requests",
    GET_USERS_SUCCESS: "users/get_users_success",
    CREATE_USER_REQUEST: "users/create_users_request",
    DELETE_USER_REQUEST: "users/delete_users_request",
    USERS_ERROR: "users/user_error"
};

export const getUsersRequest = () => ({
    type: Types.GET_USERS_REQUEST
});

export const getUsersSuccess = ({items}) => ({
    type: Types.GET_USERS_SUCCESS,
    payload: {
        items
    }
});

export const createUserRequest = ({firstName, lastName}) => {
    console.log("action creatUserRequest", firstName, lastName);
    return {
        type: Types.CREATE_USER_REQUEST,
        payload: {
            firstName,
            lastName
        }
    }
};

export const deleteUserRequest = (userId) => {
    return {
        type: Types.DELETE_USER_REQUEST,
        payload: {
            userId
        }
    }
};

export const usersError = ({error}) => (
    {
        type: Types.USERS_ERROR,
        payload: {
            error,
        }
    }
);