import axios from "axios";

var token = localStorage.getItem('token')
export const auth_login = (data) => {
    return (dispatch) => {

        if (token === null) {
            localStorage.setItem("token", "");
            token = ''
            
        }
        else {
            axios.get(`${process.env.REACT_APP_LINK}/auto_login`,
                { headers: { "Authorization": `Bearer ${token}` } })
                .then(res => {
                    if (res?.data) {
                        return dispatch(checklogin({
                            user:res.data,
                            token:token
                        }))
                    }
                })
                .catch(err => dispatch(userError('please sign in')))
        }
    }
}

export const checklogin = (user) => {

    return {
        type: "check_login",
        payload: user
    }

}


export const userError = (err) => {

    return {
        type: "check_login",
        payload: err
    }

}
