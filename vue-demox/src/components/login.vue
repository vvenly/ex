<template>
    <div class="login">
        <div class="login-con">
            <div class="ivu-card">
                <div class="ivu-card-head">
                    <p><i class="ivu-icon ivu-icon-log-in"></i> <span>欢迎登录</span></p>
                </div>
                <div class="ivu-card-body">
                    <div class="form-con">
                       <div class="ivu-form-item ivu-form-item-required">
                           <div class="ivu-form-item-content">
                               <div class="ivu-input-wrapper ivu-input-wrapper-default ivu-input-type ivu-input-group ivu-input-group-default ivu-input-group-with-prepend">
                                   <div class="ivu-input-group-prepend" style=""><span><i class="ivu-icon ivu-icon-ios-person" style="font-size: 16px;"></i></span>
                                   </div>
                                   <i class="ivu-icon ivu-icon-ios-loading ivu-load-loop ivu-input-icon ivu-input-icon-validate"></i>
                  <input v-model="loginForm.username" type="text" placeholder="请输入用户名" class="ivu-input ivu-input-default"> 
                                    </div> </div></div>
                        <div class="ivu-form-item ivu-form-item-required">
                            <div class="ivu-form-item-content">
                                <div class="ivu-input-wrapper ivu-input-wrapper-default ivu-input-type ivu-input-group ivu-input-group-default ivu-input-group-with-prepend">
                                    <div class="ivu-input-group-prepend" style=""><span><i class="ivu-icon ivu-icon-md-lock" style="font-size: 14px;"></i></span></div> <!----> 
                                    <i class="ivu-icon ivu-icon-ios-loading ivu-load-loop ivu-input-icon ivu-input-icon-validate"></i> 
                  <input v-model="loginForm.password" autocomplete="off" spellcheck="false" type="password" placeholder="请输入密码" class="ivu-input ivu-input-default"></div> <!----></div></div>
                                    <div class="ivu-form-item"><!----> <div class="ivu-form-item-content">

									<button type="button" class="ivu-btn" @click="subLogin"><span>登录</span></button>                     
                  <!-- <router-link to="comMenu" class="ivu-btn"><span>登录</span></router-link> -->
                                        

                        </div></div><p class="login-tip">输入任意用户名和密码即可</p></div></div></div></div>
    </div>
</template>

<script>
export default {
	data () {
        return{
						loginForm: {
							username : "",
							password : ""
            }
        }
		},
		methods:{
			subLogin(){
				let _this = this;
				// this.axios.post('/api/ch')
				// console.log(this.axios)

                this.$router.push('/comMenu')
			}
		}
}
</script>>


<style scoped>
#topTitle{display: none;}
.login-con {
    position: absolute;
    left: 150px;
    top: 50%;
    -webkit-transform: translateY(-60%);
    transform: translateY(-60%);
    width: 300px;
}
.ivu-card {
    background: #fff;
    border-radius: 4px;
    font-size: 14px;
    position: relative;
    -webkit-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
}
.ivu-card-head {
    border-bottom: 1px solid #e8eaec;
    padding: 14px 16px;
    line-height: 1;
}
.ivu-card-head-inner, .ivu-card-head p {
    display: inline-block;
    width: 100%;
    height: 20px;
    line-height: 20px;
    font-size: 14px;
    color: #17233d;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.ivu-card-head p i, .ivu-card-head p span {
    vertical-align: middle;
}.ivu-card-body {
    padding: 16px;
}.login-con .form-con {
    padding: 10px 0 0;
}.login-con .login-tip {
    font-size: 10px;
    text-align: center;
    color: #c3c3c3;
}.login {
    width: 100%;
    height: 100%;
    background-image: url("../assets/img/loginBg.jpg");
    background-size: cover;
    background-position: 50%;
    position: relative;
}.ivu-form-item {
    margin-bottom: 24px;
    vertical-align: top;
    zoom: 1;
}
.ivu-btn{
    display: inline-block;
    width: 75%;
    color: #fff;
    background-color: #11979c;
    border-color: #2d8cf0;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    padding: 5px 15px 6px;
    font-size: 12px;
    border-radius: 4px;
}
input{width: 85%;
    height: 30px;
    border: 1px solid #ccc;
    border-radius: 4px;}
</style>