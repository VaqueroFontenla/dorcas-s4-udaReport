import request from 'axios';

export function getReport(token, data) {
    const reports = {
        url: 'https://reds.urbandataanalytics.com/reds/api/v1.0/report?template=redhouse&async=1&pm=eco&sc=1',
        data: data,
        headers: { 'Authorization': `Token ${token}` }
    }

    return new Promise((resolve, reject) => {
        request.post(reports.url, reports.data, { headers: reports.headers })
            .then(res => {
                resolve(res)
            })
            .catch(e => {
                resolve(e.response)
            })
    })
}
