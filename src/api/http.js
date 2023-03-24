import request from "./request";


/*
*游客登录
*/
export function login(){
    return request({
        url:'/register/anonimous',
        method:'GET'
    })
}

/**
 * 搜索
 */
export function search(keywords){
    return request({
        url:'/search',
        method:'GET',
        params:{
            keywords,keywords
        }
    })
}


/**
 * 歌单分类
 */
export function catlist(){
    return request({
        url:'/playlist/catlist',
        method:'GET'
    })
}

/**
 * 每日推荐
 */
export function songs(){
    return request({
        url:'/recommend/songs',
        method:'GET'
    })
}

/**
 * 网友推荐歌单
 */
export function corelist(){
    return request({
        url:'/top/playlist',
        method:'GET',
        params:{
            limit:20
        }
    })
}

/**
 * 推荐歌单 
 */
export function palycore(){
    return request({
        url:'//personalized',
        method:'GET',
        params:{
            limit:20
        }
    })
}

/**
 * 获取歌单所有歌曲
 */
export function trackall(id){
    return request({
        url:'/playlist/track/all',
        method:'GET',
        params:{
            id:id
        }
    })
}

/**
 * 获取音乐url
 */
export function songurl(id){
    return request({
        url:'/song/url',
        method:'GET',
        params:{
            id:id
        }
    })
}

/**
 * 获取歌词
 */
export function lyric(id){
    return request({
        url:'/lyric',
        method:'GET',
        params:{
            id:id
        }
    })
}

/**
 * 歌曲详情
 */
export function detail(id){
    return request({
        url:'/song/detail',
        method:'GET',
        params:{
            ids:id
        }
    })
}


/**
 * 所有榜单
 */
export function toplistall(){
    return request({
        url:'/toplist',
        method:'GET',
    })
}

/**
 * 获取歌单详情
 */
// export function playlistdetail(id){
//     return request({
//         url:'/playlist/detail',
//         method:'GET',
//         params:{
//             id,id
//         }
//     })
// }


/**
 * 所有榜单内容摘要,各种热歌排行帮 歌曲
 */
// export function toplistdetail(){
//     return request({
//         url:'/toplist/detail',
//         method:'GET'
//     })
// }