//login component
Vue.component('login-message', {
    data: function(){
        return {
            phonenumber:"",
            yanzhenma:""
        }
    },
    template:`<p><input type="text" v-model="phonenumber" placeholder="手机号">
    <br>
    <input type="text" v-model="yanzhenma" placeholder="验证码"></p>`
})
Vue.component('login-password', {
    data: function(){
        return {
            loginaccount:"",
            password:""
        }
    },
    template: `<p><input type="text" v-model="loginaccount" placeholder="手机/邮箱/用户名">
    <br>
    <input type="text" v-model="password" placeholder="密码"></p>`
})
new Vue({
    el: '#loginMethod',
    data: {
        currentloginway: 'message',
        loginways: {
            message: '短信',
            password: '密码'
        }
    },
    computed: {
        currentLoginComponent: function () {
            return "login-" + this.currentloginway;
        }
    }
}) 
