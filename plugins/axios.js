import axios from 'axios'
export default function ({ app }, inject) {

  const api = axios.create({
    baseURL: "https://corona-virus-world-and-india-data.p.rapidapi.com/",
    headers: {
        "x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com",
        "x-rapidapi-key": "da7185aeb9msh0e13b327cf70bc8p10a2abjsn259d1f854d02",
    },
})
  // const api_tr = axios.create({
  //   baseURL: 'https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200404T201751Z.16e40dd0ed1cf1be.13d8b42d26a210a213f5404a3a2fcf12a48e31a9&lang=en-ar',
  //   headers: {
  //     'Content-Type': 'application/x-www-form-urlencoded'
  //   }
  // })

  // Inject to context as $https
  inject('api', api)
  // inject('api_tr', api_tr)
}
