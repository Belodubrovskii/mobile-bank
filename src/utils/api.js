export const getExchangeRates = () => {
  return fetch('https://www.cbr-xml-daily.ru/daily_json.js')
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject();
    })
    .catch(() => console.log('Упс, что-то не так с сервером'))
}

export const getUsers = () => {
  return fetch('https://hr.peterpartner.net/test/android/v1/users.json')
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject();
    })
    .catch(() => console.log('Упс, что-то не так с сервером'))
}
