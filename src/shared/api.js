import axios from 'axios'

export const fetchPopularRepos = (language = 'all') => {
  const encodedURI = encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`)
  // const encodedURI = encodeURI(`http://localhost:3000/api`)

  return axios.get(encodedURI)
    .then(res => res.data.items)
    .catch(err => {
      console.warn(err)
      return null
    })
}