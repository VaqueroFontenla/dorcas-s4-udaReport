import request from 'axios';

export function getReportEndpoint(properties, token) {
    var assets = {
        url: 'https://reds.urbandataanalytics.com/reds/api/asset/' + properties.assetId + '/pdf?template=' + properties.template + '&async=1&pm=' + properties.prediction + "&sc=1&lang=en" + "&style=" + properties.style,
        headers: {
            'Authorization': 'Token ' + token,
            'Content-Type': 'application/json'
        }
    };

    return new Promise(function (resolve, reject) {
        request.post(assets.url, {}, { headers: assets.headers }).then(function (res) {
            resolve(res.data);
        }).catch(function (e) {
            return reject(e);
        });
    });
}

export function getReportTaskqueue(properties, token) {
    var options = {
        url: "https://reds.urbandataanalytics.com/taskqueue/api/v1.0/task/" + properties,
        headers: { "Authorization": "Token " + token }
    };

    return new Promise(function (resolve, reject) {
        request.get(options.url, { headers: options.headers }).then(function (res) {
            resolve(res.data);
        }).catch(function (e) {
            return reject(e);
        });
    });
}