export default class CostsStoreService {
    _data = [
        {
            'money': 100,
            'cost_type': 'Продукты',
            'date': '02.02.2020',
            'user': 1
        },
        {
            'money': 100,
            'cost_type': 'Продукты',
            'date': '02.02.2020',
            'user': 1
        },
        {
            'money': 100,
            'cost_type': 'Продукты',
            'date': '01.02.2020',
            'user': 1
        }
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