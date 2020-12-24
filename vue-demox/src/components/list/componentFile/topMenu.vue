
<template>
<!-- 共用菜单栏 -->
  <div id="topMenu">
    <div id="topTitle">
      <!-- <img src="./assets/img/fl.png" style="width: 100px;height: 100%;margin: 0 70px;"> -->
      <ul>
        <li v-for="v in menuList" :key="v.id">
          <router-link :to="v.id" class="ivu-btn"><span class="fa" :class="[v.icon]"></span>  {{v.name}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      menuList:[
        { "id":"comMenu", "name":"组件通信相关", "icon":"fa-home" },
        { "id":"mn2", "name":"缓存", "icon":"fa-server" },
        { "id":"mn3", "name":"ex-demo", "icon":"fa-server" },
        // { "id":"mn3", "name":"文档 & 踩坑日记", "icon":"fa-gavel" }
      ]
    }
  },
}
</script>

<style>
#topMenu{
	position: fixed;
	top:0;left:0;
	width:100%;
	height:50px;
  /* background: #3779f5; */
}
.router-link-active{
	/* background: #ffa; */
	color:#ffa3a3;
}

#topTitle ul{
    width: 80%;
    display:inline-block;
    vertical-align: top;
}

#topTitle a{
    display: block;
    font-size: 1.1rem;
    font-weight: bold;
    padding: 10px 15px;
}
</style>
