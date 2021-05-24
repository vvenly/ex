可以有以下几个方法，关键看希望在什么环境下使用
1. JS/CSS想在全局使用，可以通过npm 安装后在main.js中引入，或在index.html中引入，这种大多不必说
2. 想在单页面使用，而又不想通npm安装，那个可以通过创建一个component的方式来引入，如下

```
<template>
  <div id="baseReport" >
  <remote-css href="https://cdn.bootcss.com/twitter-bootstrap/4.2.1/css/bootstrap-grid.min.css"></remote-css>
  <remote-css href="https://cdn.bootcss.com/twitter-bootstrap/4.2.1/css/bootstrap-reboot.css"></remote-css>
  <remote-css href="https://cdn.bootcss.com/twitter-bootstrap/4.2.1/css/bootstrap.css"></remote-css>
  <remote-js src="https://cdn.bootcss.com/twitter-bootstrap/4.2.1/js/bootstrap.bundle.js"></remote-js>
  <remote-js src="https://cdn.bootcss.com/twitter-bootstrap/4.2.1/js/bootstrap.js"></remote-js>
 
    <div class="card-group">
        <div class="card">
            这里是内容
        </div>
        <div class="card">
            这里是内容
        </div>
        <div class="card">
            这里是内容
        </div>
        </div>
  </div>  
</template>
<script>
 
export default {
    components:{
       'remote-css': {
            render(createElement) {            
              return createElement('link', { attrs: { rel: 'stylesheet', href: this.href }});
            },
            props: {
            href: { type: String, required: true },
            },
        },
        'remote-js': {
            render(createElement) {
              return createElement('script', { attrs: { type: 'text/javascript', src: this.src }});            
            },
            props: {
            src: { type: String, required: true },
            },
        },
    },
  name: "baseReport",
  data() {
    return {
    }
  },
  mounted(){
   
  },
  methods:{
 
  }
};
</script>
 
<style scoped>
</style>
```