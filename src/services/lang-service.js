import config from '../config'
import TokenService from './token-service'

const LangService ={
    getUserLanguage(){
        return fetch(`${config.API_ENDPOINT}/language`, {
            method: 'GET',
            headers: {
              'authorization': `Bearer ${TokenService.getAuthToken()}`,
            },
          })
        .then(res =>
            (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json()
          )
    }


}

export default LangService