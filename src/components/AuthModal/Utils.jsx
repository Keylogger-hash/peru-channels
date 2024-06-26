import axios from 'axios';
import Alert from 'react-bootstrap/Alert';

export const handleLogin = (username, password) => {    
    axios.post('http://localhost:8000/auth/api/token/', {
        username: username,
        password: password,    
    })
    .then(response => {
        localStorage.setItem('accessToken', response.data.access);
        localStorage.setItem('refreshToken', response.data.refresh);    
        location.reload()
    })
    .catch(error => <Alert variant='danger'>{error}</Alert>)
}

export const isAuth= ()=>{
    let token = localStorage.getItem('accessToken')
    console.log('TOKEN',token!==null)
    if (token!== null){
        return true
    }
    return false
}
export const getMyProfile = (setUsername)=>{
    let token = localStorage.getItem('accessToken')
    if (token!==null){
        axios.get(
            'http://localhost:8000/auth/api/users/profile/',
            {headers:{'Authorization':'Bearer '+token}}
        ).then(response => {
            console.log("RESPONSE",response)
            setUsername(response.data["username"])
        })
        .catch(error =>  <Alert variant='danger'>{error}</Alert>)

    }
}
export const handleRegister = (username, password,email) => {    
    axios.post('http://localhost:8000/auth/api/users/register/', {
        username: username,
        password: password,   
        email: email 
    })
    .then(response => {
        localStorage.setItem('accessToken', response.data.tokens.access);
        localStorage.setItem('refreshToken', response.data.tokens.refresh);
        location.reload()    
    })
    .catch(error =>  <Alert variant='danger'>{error}</Alert>)
}


export const handleLogOut = () => {
    axios.post('http://localhost:8000/auth/api/users/logout/', {
        refresh_token: localStorage.getItem('refreshToken'),
    })
    .then(response => {
        if (response.status != 200) return
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        location.reload()
    })
    .catch(error => <Alert variant='danger'>{error}</Alert>)
}


export const updateTokens = () => {
    axios.post('http://localhost:8000', { refresh: localStorage.getitem('refreshToken')})
    .then(response => {
        const newAccessToken = response.data.access;
        const newRefreshToken = response.data.refresh;
        localStorage.setItem('accessToken', newAccessToken)
        localStorage.setItem('refreshToken', newRefreshToken)
    })
    .catch(error => <Alert variant='danger'>{error}</Alert>)
  } 