// export const fetchJSONByGet = (url:string) => (query: any) => {
//   const params = {
//     method: 'GET',
//   }
//   let getQuery = '?'
//   if (query) {
//     // eslint-disable-next-line
//     for (let key in query) {
//       getQuery = `${getQuery}${key}=${query[key]}&`
//     }
//   }
//   const buildUrl = buildURL(url, query)
//   const getUrl = buildUrl + (query ? getQuery.substring(0, getQuery.length - 1) : '')
//   return fetchJSON(encodeURI(getUrl), params)
// }

// const createFetchAction = (url: string) => {
//   return () => {

//   }
// } 

// export const fetchAdd = createFetchAction('')
// export const fetchList = createFetchAction('')