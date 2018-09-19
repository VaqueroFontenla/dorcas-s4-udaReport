import request from 'axios';

export function getReportEndpoint(properties, token) {
    const assets = {
        url: 'https://reds.urbandataanalytics.com/reds/api/asset/' + properties.assetId + '/pdf?template=' + properties.template + '&async=1&pm=' + properties.prediction + "&sc=1&lang=en" + "&style=" + properties.style,
        headers: {
            'Authorization': 'Token ' + token,
            'Content-Type': 'application/json'
        }
    };

    return new Promise((resolve, reject) => {
        request.post(assets.url, {}, { headers: assets.headers })
            .then((res) => {
                resolve(res.data)
            })
            .catch(e => reject(e))
    })
}

export function getReportTaskqueue(properties, token) {
    const options = {
        url: "https://reds.urbandataanalytics.com/taskqueue/api/v1.0/task/" + properties,
        headers: { "Authorization": "Token " + token }
    }

    return new Promise((resolve, reject) => {
        request.get(options.url, { headers: options.headers })
            .then((res) => {
                resolve(res.data)
            })
            .catch(e => reject(e))
    })
}
