import request from '../../utils/request'
export function syncFunc(data) {
    return request({
        url: 'https://shielded-oasis-36680.herokuapp.com',
        method: 'get',
        data: data || {},
    })
}
export function addSite(data) {
    return request({
        url: 'https://shielded-oasis-36680.herokuapp.com/add',
        method: 'POST',
        data: data || {},
    })
}
