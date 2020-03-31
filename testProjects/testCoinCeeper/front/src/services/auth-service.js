export default class AuthService {
    _apiBase = 'http://127.0.0.1:8000/api/authorization'
    getAuth = async (data, url) => {
        const response = await fetch(`${this._apiBase}${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        if (!response) {
            throw new Error(`Could not fetch ${this._apiBase}${url}, received ${response.status}`)
        }
        return await response.json()
    }
    getAuthOrError = async () => {
        const url = `${this._apiBase}/current_user/`
        const response = await fetch(url, {
            headers: {
                Authorization: `JWT ${localStorage.getItem('token')}`
            }
        })
        if (!response) {
            throw new Error(`Could not fetch ${this._apiBase}${url}, received ${response.status}`)
        } else {
            return response
        }
    }
    login = async (data) => {
        const dataFrom = await this.getAuth(data, '/token-auth/')
        console.log('login', dataFrom)
        return dataFrom
    }

    signup = async (data) => {
        const dataFrom = await this.getAuth(data, '/signup/')
        console.log('signup', dataFrom)
        return dataFrom
    }


}