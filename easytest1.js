import http from 'k6/http'

export let options = {
    insecureSkipTLSVerify: true,
    noConnectionReuse: false,
    vus: 50,
    duration: '100s'
}

export default () => {
    let tree_id = Date.now() + Math.random();
    const url = 'http://143.110.253.91:4800/v1/api/tree';
    const payload = JSON.stringify([{
      "species": "Cocos nucifera",
      "owner": "Rajesh Raj",
      "district": "PATHANAMTHITTA",
      "block": "RANNI",
      "taluk": "RANNI",
      "village": "PERUNAD",
      "survey_no": "27/B/32",
      "sub_no": "560-12",
      "plantation": "PAT-RAN-PER-03",
      "location": "9.350816, 76.834954",
      "expiry": "31-10-2023"
    }
    ]);
  
    const params = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    http.post(url, payload, params);
  }