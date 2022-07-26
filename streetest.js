import http from 'k6/http'

export let options = {
    insecureSkipTLSVerify: true,
    noConnectionReuse: false,
    stages: [
        {duration: '2m', target: 100},
        {duration: '5m', target: 100},
        {duration: '2m', target: 200},
        {duration: '5m', target: 200},
        {duration: '2m', target: 300},
        {duration: '5m', target: 300},
        {duration: '2m', target: 400},
        {duration: '5m', target: 400},
        {duration: '10m', target: 0},
    ],
    // vuse: 1,
    // duration: '10s'
}

const API_BASE_URL = 'http://127.0.0.1:3000'

export default () => {
    const url = `${API_BASE_URL}/test`;
    const payload = JSON.stringify({
      email: 'aaa',
      password: 'bbb',
    });
  
    const params = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    http.post(url, payload, params);
}