<template>
  <div id="app">
    <!-- 页面 -->
    <router-view/>

  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      menuList:[
        { "id":"comMenu", "name":"代码demo", "icon":"fa-home" },
        { "id":"mn2", "name":"文档", "icon":"fa-server" },
        { "id":"mn3", "name":"踩坑日记", "icon":"fa-gavel" }
      ]
    }
  },
}
</script>

<style>


/* *{padding: 0;margin: 0;} */
#app, body, html {
    width: 100%;
    height: 100%;
}
</style>
