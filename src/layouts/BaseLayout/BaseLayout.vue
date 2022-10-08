<template>
    <div id="base-layout">
        <vue-particles color="#ffffff" :particleOpacity="0.7" :particlesNumber="60" shapeType="circle" :particleSize="4" linesColor="#ffffff" :linesWidth="1" :lineLinked="true" :lineOpacity="0.4" :linesDistance="100" :moveSpeed="2" :hoverEffect="true" hoverMode="grab" :clickEffect="false" clickMode="push" class="lizi"></vue-particles>
        <a-card id="card" title="ADMIN后台管理系统" :bordered="false" :hoverable="true" style="width: 300px">
            <my-login></my-login>
        </a-card>
    </div>
</template>
<script>
import Vue from 'vue'
import vueParticles from 'vue-particles'
import {Card} from 'ant-design-vue'
import Login from './Login/Login.vue'
Vue.use(vueParticles)

export default {
    name: 'BaseLayout',
    components:{
        [Card.name]: Card,
        'my-login':Login
    }
}
</script>
<style lang="less" scoped>
    #base-layout{
        height: 100%;
        position: relative;
    }
    #particles-js{
        height: 100%;
        background-image: url('../../assets/images/background.jpg');
        // background-size: cover;
    }
    #card{
        position:absolute;
        top:50%;
        right: 10%;
        transform: translateY(-50%);
        background: #ffffff;
    }
</style>