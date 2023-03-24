<script setup>
import {watch,nextTick} from 'vue'
import { useRecoStore } from '../store/reco';
// import _ from 'loadsh'  
import { useUserStore } from '../store/user'

const userStore = useUserStore()
const recoStore = useRecoStore()


/**
 * 监听歌词
 */
watch(()=>{
    return userStore.lyric
},(newValue)=>{
    userStore.newlyric = filtre(newValue)
})


/**
 * 元素渲染完成后
 */
nextTick(()=>{
    let ele = {
        box: document.querySelector('.lyriRight'),
        ull: document.querySelector('.lyriList')
    }

    //获取容器高度
    let containerHeight = ele.box.clientHeight
    let liHeight = ele.ull.children[0].clientHeight - containerHeight
    let maxOffset = ele.ull.clientHeight - containerHeight

    /**
     * 计算偏移量
     */
    const setOffset = ()=>{
        let index = fondIdex()
        let offset = liHeight * index + liHeight / 2 - containerHeight / 2;
        if(offset < 0){
            offset = 0
        }
        if(offset > maxOffset){
            offset = maxOffset
        }
        ele.ull.style.transform = `translateY(-${offset}px)`

        let liclass = ele.ull.querySelector('.action')
        if(liclass){
            liclass.classList.remove('acton')
        }

        let li = ele.ull.children[index]
        if(li){
            li.classList.add('action') 
        }
        console.log(offset)
    }

    //获取当前时间
    // userStore.audio.addEventListener('timeupdate',setOffset)
})






//--------------------------------------------------------------------
/**
 * 歌词面板收
 */
const soushow = ()=>{
    userStore.showin()
}

/**
 * 字符串，转换成时间，秒
 */
const partsTime = (time)=>{
    let data
    let parts = time.split(':')
    data = +parts[0] * 60 + +parts[1]
    return +data.toFixed(2)
}


/**
 * 过滤歌词，整理
 */
// let lrcDate
const filtre = (lrcdata)=>{
    let data = lrcdata
    let lines = data.split('\n')
    let result = []
    lines.forEach((item)=>{
        let parts = item.split(']')
        let obj = {
            time: partsTime(parts[0].substring(1)),
            words: parts[1]
        }
        result.push(obj)
    })
    return result
}




/**
 * 计算出当前显示高亮那个歌词下标
 */
 const fondIdex = ()=>{
    //播放当前时间
    let curTime = userStore.audio.currentTime;
    for(let i = 0; i<userStore.newlyric.length; i++){
        if(curTime<userStore.newlyric[i].time){
            return i + 1;
        }
    }
}




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
 * 播放与暂停
 */
const paly = ()=>{
    recoStore.showin()
    if(recoStore.show){  
        userStore.audio.play()
    }else{
        userStore.audio.pause()
    } 
}

</script>

<template>
    <div class="lyricsBox">
        <div class="lyriLeft iconfont">
            <img @click="dropdrown" class="dropImg" :src="userStore.urlimg" alt="">
            <p>歌曲名: <span>{{userStore.name}}</span></p>
            <p @click="paly" class="playicon" :class="'iconfont' + ' ' + changeIcon()"></p>
        </div>
        <div class="lyriRight">
            <p @click="soushow" class="sou">收</p>
            <ul v-if="userStore.newlyric" class="lyriList">
                <li v-for="(item,index) in userStore.newlyric" :key="index">{{ item.words }}</li>
            </ul>
        </div>
    </div>
</template>

<style scoped lang="sass">

.lyricsBox
    display: flex
    height: 100%

.lyriLeft
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    width: 45%
    background: red
    img
        display: block
        width: 70%
        border-radius: 5px
.lyriRight
    overflow: auto
    position: relative
    flex: 1
    background: green


.sou
    position: fixed
    // position: absolute
    right: 35px
    top: 10px
    font-size: 22px
    cursor: pointer
    z-index: 1

.sou:hover
    color: red

.action
    color: white

.lyriList
    // display: flex
    // flex-direction: column
    // justify-content: center
    text-align: center
    li
        line-height: 28px
    // transform: translateY(-100px)

.playicon
    font-size: 40px
    line-height: 0px
    margin: 10px


.lyriRight::-webkit-scrollbar
    width: 10px
    // background-color: pink

.lyriRight::-webkit-scrollbar-button 
    background-color: red
    border-radius: 50%
    height: 10px

.lyriRight::-webkit-scrollbar-thumb
    background-color: white
    border-radius: 10px

.lyriRight::-webkit-scrollbar-track 
    background-color: Black
    border-radius: 10px
</style>