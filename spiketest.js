import http from 'k6/http'

export let options = {
    insecureSkipTLSVerify: true,
    noConnectionReuse: false,
    stages: [
        {duration: '10s', target: 100},
        {duration: '1m', target: 100},
        {duration: '10s', target: 1400},
        {duration: '3m', target: 1400},
        {duration: '10s', target: 100},
        {duration: '3m', target: 100},
        {duration: '10m', target: 0},
    ],
    // vus: 1,
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