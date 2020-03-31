export default class BalanceStoreService {
    _data = [
        {
            'balance': 100
        }
    ]

    getBalance() {
        return new Promise(((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.9) {
                    reject(new Error('Error!!!!'))
                } else {
                    resolve(this._data)
                }
            }, 700)
        }))
    }
}