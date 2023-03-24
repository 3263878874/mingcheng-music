<script setup>
import { onMounted , watch, onBeforeUnmount} from 'vue'
import { useRecoStore } from '../store/reco'
import { useUserStore } from '../store/user'

const recoStore = useRecoStore()
const userStore = useUserStore()

/**
 * 挂载完成
 */
onMounted(()=>{
    userStore.audio = new Audio()
    userStore.audio.src = recoStore.url
    userStore.audio.onended = ()=>{
        recoStore.showin()
    }
}) 


/**
 * 监听url地址变化
 */
watch(()=>{return recoStore.url},
    (newValue)=>{
        if(newValue){
            userStore.audio.src = newValue
            userStore.audio.play() 
            recoStore.show = true 
        }}
)

/**
 * 组件卸载前
 */
 onBeforeUnmount(()=>{
    recoStore.showin()
})


//--------------------------------------------------------------------

/**
 * 切换播放icon
 */
const changeIcon = ()=>{
    if(recoStore.show){
        return "icon-Playerpause"
    }else{
        return 'icon-Playerplay' 
    }
}

/**
 * 播放icon事件
 */
const play = ()=>{
    recoStore.showin()
    if(recoStore.show){  
        userStore.audio.play()
    }else{
        userStore.audio.pause()
    } 
}

/**
 * 循环播放
 */
const xunpaly = ()=>{
    console.log('循环')
}
</script>

<template>
    <div class="playBox iconfont  ">
        <span class="xunhaugn" @click="xunpaly">循环</span>
        <span>&#xe63c;</span>
        <div @click="play" :class="'iconfont' + ' ' + changeIcon()" id="pause"></div>
        <span>&#xe63e;</span>
    </div> 
</template>

<style scoped lang="sass">
.playBox
    font-size:30px
    span
        cursor: pointer
#pause
    display: inline-block
    font-size: 30px

.xunhaugn
    font-size: 22px
</style> 