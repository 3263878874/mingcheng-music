import { defineStore } from "pinia"
import { lyric } from '../api/http'

export const useUserStore = defineStore('user',{
    state:()=>{
        return {
            msg: '登录',
            show: false,  //打开歌词面板 
            link:[], //喜欢的歌曲url地址
            lyric:null,//歌词
            newlyric:null,
            urlimg:'http://p1.music.126.net/2JtTbgdX0C0gdJoeB6UuaQ==/109951166307899712.jpg?param=130y130',
            name:'爱如火',
            audio:null,  //音乐元素
            serchvalue:''
        }
    },

    getters:{

    },
 
    actions:{
        /**
         * 歌词面板是否打开
         */
        showin(){
            this.show = !this.show
        },
        
        /**
         * 获取歌词
         */
        async lyricin(id){
            const response = await lyric(id)
            this.lyric = response.lrc.lyric
        }
    },

    persist:true
})