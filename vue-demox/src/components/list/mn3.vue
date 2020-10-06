<template>
  <div style="position:relative;">
    <div class="leftMenu">
        <ul>
              <li v-for="v in data" :key="v.id">
                    <!--:to 跳转的页面， router-link文档：参考 https://router.vuejs.org/zh/api/#router-link -->
                  <router-link :to="v.id" class="ivu-btn"><span class="fa" :class="[v.icon]"></span>  {{v.name}}</router-link>
              </li>
            </ul>
    </div>

      <div class="rightMenu">
          <div style="background:#6FADB2;height: 300px;"></div>

      </div>


  </div>
</template>

<script>
import data from '@/data/data.json'

export default {
    name: 'mn3',
    data () {
      return {
        //左侧的导航
        data: data.menuList[2].children
      }
    },
    show:1,
    // name: 'mn1',
}



</script>

