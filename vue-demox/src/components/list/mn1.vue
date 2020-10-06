<template>
  <div style="position:relative;">
    <div class="leftMenu">
        <ul>
              <li v-for="v in menuList" :key="v.id">
                    <!--点击切换要显示的组件-->
                  <a href="javascript:;" @click="view = v.id"><span class="fa" :class="[v.icon]"></span>  {{v.name}}</a>
              </li>
        </ul>
    </div>

    <div class="rightMenu">
        <transition name="component-fade" mode="out-in">

          <component v-bind:is="view"></component>

        </transition>

    </div>


  </div>
</template>

<script>


export default {
    name: 'mn1',
    data () {
        return{
						menuList: [
						//  {"id":"comMenu", "name":"组件", "url":"","icon":""},
                {"id":"ch1-1", "name":"父子组件通信", "url":"","icon":""},
                {"id":"ch1-2", "name":"路由", "url":"","icon":""},
                {"id":"ch1-3", "name":"页面1-3", "url":"","icon":""}
            ],
            //默认显示第一个
            view: 'ch1-1',
        }
    },
    components: {
        //组件名是以 menuList 的id 命名的
        'ch1-1': {
          template: '<div style="background: #46A2FF">第一页面</div>'
        },
        'ch1-2': {
          template: '<div style="background: #FC7CB9">第二页面</div>'
        },
        'ch1-3': {
           template: '<div style="background: #A2FFA0">第三页面</div>'
        }
      }
}


</script>
<style scoped>
    .rightMenu>div{
        height: 500px;
    }
</style>

