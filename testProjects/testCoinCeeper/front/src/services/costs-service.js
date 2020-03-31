export default class CostsService {

    _data = [
        {
            id: 1,
            money: 200,
            cost_type: 1
        },
        {
            id: 2,
            money: 999,
            cost_type: 2
        },
    ]

    getCosts() {
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