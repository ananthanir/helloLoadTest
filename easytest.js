import http from 'k6/http'

export let options = {
    insecureSkipTLSVerify: true,
    noConnectionReuse: false,
    vuse: 1,
    duration: '3s'
}

export default () => {
    let certificate_id = Date.now();
    const url = 'http://159.65.151.197:4000/blockchain/insert';
    const payload = JSON.stringify([{
      "name": "Abigail",
      "dob": "27/03/2183",
      "reg_no": certificate_id.toString(),
      "mother": "L. Hathaway",
      "father": "G. Hathaway",
      "place": "Europa"
  }]);
  
    const params = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    http.post(url, payload, params);
  }