import axios from 'axios'
export default function ({ app }, inject) {
  const api = 'https://covid-19-data.p.rapidapi.com/'
  const https = axios.create({
    baseURL: `${api}`,
    headers: {
      'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
      'x-rapidapi-key': 'da7185aeb9msh0e13b327cf70bc8p10a2abjsn259d1f854d02'

    }
  })

  const api_mo = axios.create({
    baseURL: 'https://coronavirus-monitor.p.rapidapi.com/coronavirus/',
    headers: {
      'x-rapidapi-host': 'coronavirus-monitor.p.rapidapi.com',
      'x-rapidapi-key': 'da7185aeb9msh0e13b327cf70bc8p10a2abjsn259d1f854d02'

    }
  })

  // Inject to context as $https
  inject('https', https)
  inject('api_mo', api_mo)
}
