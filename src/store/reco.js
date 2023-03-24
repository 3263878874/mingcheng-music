import { defineStore } from "pinia"

import { corelist,trackall,songurl,detail,search } from '../api/http'

export const useRecoStore = defineStore('reco',{
    state:()=>{
        return{
            msg: '推荐',
            list: null,  //所有网友歌单
            song: null,  //歌单所有歌曲
            songitem: null, //单首歌曲
            //预备音乐
            url:'https://other-web-re01-sycdn.kuwo.cn/bcb4ffb81acbf403f75988a438d9d281/641d63c1/resource/n3/13/28/2640442367.mp3',
            show: false, //播放开关
            songdetails:null, //歌曲详情
            searchlist:null,  //搜索歌曲列表
        }
    },

    getters:{

    },

    actions:{

        /**
         * 搜索歌曲
         */
        async searchin (keywords){
            const response = await search(keywords)
            this.searchlist = response.result
            // console.log(response.result)
        },

        /**
         * 所有网友歌单
         */
        async corelistin(){
            const response = await corelist()
            this.list = response.playlists
        },
        
        /**
         * 跟单内所有歌曲
         */
        async trackallin(id){
            const response = await trackall(id)
            this.song = response.songs
        },

        /**
         * 单手歌曲url
         */
        async songurlin(id){
            const response = await songurl(id)
            this.songitem = response
            this.url = response.data[0].url
        },

        /**
         * 歌曲详情
         */
        async detailin(id){
            const response = await detail(id)
            this.songdetails = response.songs
            return this.songdetails
        },


        showin(){
            this.show = !this.show
        }
    },
    persist:true 
})