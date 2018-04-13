export default async (url = '', data = {}, type = 'GET', method = 'fetch') => {
  // 将类型转化成全部大写
  type = type.toUpperCase()

  if (type === 'GET') {
    let dataStr = '' // 数据拼接字符串
    Object.keys(data).forEach(key => {
      dataStr += key + '=' + data[key] + '&'
    })

    if (dataStr !== '') {
      dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'))
      url = url + '?' + dataStr
    }
  }

  if (window.fetch && method === 'fetch') {
    const requestConfig = {
      method: type,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImRiYzgzZDYyZTc2ODg3ODYwNDMxMzFiM2ZjNTBjZWZjYjc1MDZjOWE0YmU4ZDFhOTVjZjU2YmQ2YzI2MzkwOTk5MmY4ZTJkMjUxNGQ4YWU5In0.eyJhdWQiOiIzIiwianRpIjoiZGJjODNkNjJlNzY4ODc4NjA0MzEzMWIzZmM1MGNlZmNiNzUwNmM5YTRiZThkMWE5NWNmNTZiZDZjMjYzOTA5OTkyZjhlMmQyNTE0ZDhhZTkiLCJpYXQiOjE1MjM1NTA4MTcsIm5iZiI6MTUyMzU1MDgxNywiZXhwIjoxNTU1MDg2ODE3LCJzdWIiOiIxIiwic2NvcGVzIjpbIioiXX0.K1McCmTFRHzFq_MTs40ltrJxMfEgmknuYLXU_FRhjoTn1ZJAIKOeGadTpT7oIP-G1-wV7TX8hBTYXj-kVqO93gwOpe00OJtdYjYtKi2-6ertbbR4CJf4Kj8vtJEE_9Sh9chvULbmfIUFRsUIt054qYcLz3MeZHLYfes0pd33ky41v9rn7sjOUYHqCOEz_mN91-eCywiVr_6Zlnzy1uCos44ZkN5BB3V3NsojlwyUk7tyBKPdILi2VA589HJtHdq_ZkTEmJePzsj33bwyLiVfGWw7BsszvnO6DvTgyELM-uJwwTc42rFhBKRM0MDp8s1MTIXf6hIXmiabxsgPoj_KMj3E9znEww7CLNcBuEoMwbXzTcxmzXqx-yVCJjQy1d6U6Ksczc0qZvZz23GPyXxmGdogAx0_fy9kSy4ynzF8I0405hFtCtURIEEMS-qsX8Jc7Z1LSHAnqkTPHBg7bb0eICiyq7gnVGMNUpEBaQZoiri2Ocy4WFNoL77VG4zjSWZaHycQplcEmqHdDhPr3-Z_9RLGDu1KETcHzdNaFkLVz9Bxojq9trOd423dzWMHqDvL1pAratgTNpgKugKd0dXfLD3JMobihme8sFwcfsJ164xmfubPz2AuvpjtTwqujdJZzdsVMSCceFh0I8OLX9RMebuIcshN52GxPaaoldXAIY4'
      },
      mode: 'cors',
      cache: 'force-cache'
    }

    if (type === 'POST') {
      Object.defineProperty(requestConfig, 'body', {
        value: JSON.stringify(data)
      })
    }
    try {
      const response = await fetch(url, requestConfig)
      if (response.status >= 200 && response.status <= 300) {
        const responseJson = await response.json()
        return responseJson
      } else {
        throw await response.json()
      }
    } catch (error) {
      throw error
    }
  } else {
    return new Promise((resolve, reject) => {
      let requestObj
      // 浏览器是否支持XMLHttpRequest
      if (window.XMLHttpRequest) {
        requestObj = new XMLHttpRequest()
      }

      let sendData = ''
      if (type === 'POST') {
        sendData = JSON.stringify(data)
      }

      requestObj.open(type, url, true)
      requestObj.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
      requestObj.send(sendData)

      requestObj.onreadystatechange = () => {
        if (requestObj.readyState === 4) {
          if (requestObj.status === 200) {
            let obj = requestObj.response
            if (typeof obj !== 'object') {
              obj = JSON.parse(obj)
            }
            resolve(obj)
          } else {
            reject(requestObj)
          }
        }
      }
    })
  }
}
