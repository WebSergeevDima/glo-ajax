const ajaxData = () => {

    const getData = () => {
        fetch('./db.json').then(data => data.json()).then(data => {
            sendData(data);
        }).catch(error => {
            console.log(error);
        });
    };

    const sendData = (data) => {

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        }).catch(error => {
            console.log(error);
        });
    };

    getData();
}

export default ajaxData