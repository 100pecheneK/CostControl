export default class ReportStoreService {

    _data = [
        {
            'cost_type': 'Продукты',
            'money_sum': 100
        },
        {
            'cost_type': 'Еда',
            'money_sum': 200
        },
    ]

    getReport() {
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