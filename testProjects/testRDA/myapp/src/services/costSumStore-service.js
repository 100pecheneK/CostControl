export default class CostSumStoreService {
    _data = [
        {
            'costSum': 200
        }
    ]

    getCostSum() {
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