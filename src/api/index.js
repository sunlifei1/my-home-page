import request from '../../utils/request'
export function syncFunc(data) {
    return request({
      //  url: 'https://shielded-oasis-36680.herokuapp.com/dbdata',
        url: 'http://localhost:3000/dbdata',
        method: 'get',
        data: data || {},
    })
}
export function addSite(data) {
    return request({
       // url: 'https://shielded-oasis-36680.herokuapp.com/add',
        url: 'http://localhost:3000/add',
        method: 'POST',
        data: data || {},
    })
}
