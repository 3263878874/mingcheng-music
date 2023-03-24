import { defineStore } from "pinia"

export const useLinkStore = defineStore('link',{
    state:()=>{
        return{
            msg:'喜欢',
            
        }
    },

    getters:{

    },

    actions:{

    },
  
    persist:true
})