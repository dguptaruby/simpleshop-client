import axios from "axios";

const token = localStorage.getItem('token')
export const auth_login = (data) => {
    return (dispatch) => {
  
          if (token === null) {
              console.log('fffffffff'); 
            localStorage.setItem("token");
            token = "";
    
          }
          else {
            axios.get(`${process.env.REACT_APP_LINK}/auto_login`,
              { headers: { "Authorization": `Bearer ${token}` } })
              .then(res => {
                if (res?.data) {
                  return dispatch(checklogin(res.data))
                }
              })
              .catch(err => console.log(err))
          }
        }
}

export const checklogin = (user) =>{
    console.log('fffffffffff');
    console.log('came here1')

    return {
        type: "check_login",
        payload: user
    }

}
