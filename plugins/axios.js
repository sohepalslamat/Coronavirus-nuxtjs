export default function ({ $axios, app }, inject) {
  const api = 'https://covid-19-data.p.rapidapi.com/'
  const https = $axios.create({
    baseURL: `${api}`,
    headers: {
      'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
      'x-rapidapi-key': 'da7185aeb9msh0e13b327cf70bc8p10a2abjsn259d1f854d02'

    }
  })
  // Inject to context as $https
  inject('https', https)
}
