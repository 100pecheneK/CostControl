export const formatDate = (date, dateRange) => {
    let template
    switch (dateRange) {
        case 'day':
            template = 'DD-MM-YYYY'
            break
        case 'month':
            template = 'DD-MM'
            break
        case 'year':
            template = template = 'DD'
            break
    }
    let specs = 'YYYY-MM-DD'.split('-')
    date = new Date(date)
    return date
        .toLocaleDateString()
        .split(/[-:.TZ]/)
        .reduceRight((template, item, i) => {
            return template
                .split(specs[i])
                .join(item)
        }, template)
}