import { defineStore } from "pinia"
import { trackall} from '../api/http'

export const useRankStore = defineStore('rank',{
    state:()=>{
        return{
            song:null, //热门排行歌曲
        }
    },

    getters:{

    },

    actions:{
        /**
         * 排行榜歌单所有歌曲
         */
        async toplistallin(){
            const response = await trackall(19723756)
            this.song = response.songs
        }

    }
})

