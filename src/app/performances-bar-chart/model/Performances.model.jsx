import fetch from 'fetch';


class PerformancesModel {

    constructor() {
        console.log('kf74');
        fetch.fetchUrl('./data.json', function (error, meta, body) {
            console.log(body.toString());
        });
    }

}

export default PerformancesModel = PerformancesModel;