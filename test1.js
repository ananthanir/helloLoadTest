import http from 'k6/http'

export let options = {
    insecureSkipTLSVerify: true,
    noConnectionReuse: false,
    vuse: 1,
    duration: '10s'
}

export default () => {
    const url = 'http://127.0.0.1:3000/test';
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