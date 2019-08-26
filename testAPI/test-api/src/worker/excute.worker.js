/*eslint-disable no-restricted-globals*/
/*eslint-disable no-undef*/
/*eslint-disable no-eval*/
/*eslint-disable no-loop-func*/


export default () => {
    self.addEventListener('message', e => {
        if (!e) return;
        let { method, url, code, body, index } = e.data;
        let func = `${code}`;
        eval(func);

        fetch('https://us-central1-testapi-de41a.cloudfunctions.net/app/api/testAPI', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                method,
                url,
                body
            })
        })
            .then(res => res.json())
            .then(json => {
                let result = expected(json.data);
                postMessage({
                    result: result,
                    time: json.time.toFixed(0),
                    index: index
                });
                self.close();
            })
            .catch(err => {
                self.close();
            });
    });
}