var login = new Vue({

})
//自定义组件名 (字母全小写且必须包含一个连字符)
Vue.component('clickme', {
    data: function () {
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++">You click me {{count}} times.</button>'
})
new Vue({ el: '#clickme' })

Vue.component('login-message', {
    template:`<p><input type="text" v-model="phonenumber" placeholder="手机号">
    <br>
    <input type="text" v-module="yanzhenma" placeholder="验证码"></p>`
})
Vue.component('login-password', {
    template: `<p><input type="text" v-modle="loginaccount" placeholder="手机/邮箱/用户名">
    <br>
    <input type="text" v-modle="password" placeholder="密码"></p>`
})
new Vue({
    el: '#loginMethod',
    data: {
        currentloginway: 'message',
        loginways: {
            loginmessage: 'message',
            loginpassword: 'password'
        },
        phonenumber:"",
        yanzhenma:"",
        loginaccount:"",
        password:""
    },
    computed: {
        currentLoginComponent: function () {
            return "login-" + this.currentloginway
        }
    }
}) 

//Vue: 不同 tab 动态切换
Vue.component('vuetab-home', {
    template: '<div>Vue: Home component {{key}}</div>'
})
Vue.component('vuetab-posts', {
    template: '<div>Vue: Posts component {{key}}</div>'
})
Vue.component('vuetab-archive', {
    template: '<div>Vue: Archive component {{key}}</div>'
})

new Vue({
    el: '#dynamic-component-demo-vue',
    data: {
        currentvueTab: 'Home',
        vuetabs: {
            first: 'firsta',
            second: 'secondb',
            third: 'thirdc'
        },
        vuetabs2: ['Home', 'Posts', 'Archive']
    },
    computed: {
        currentvueTabComponent: function () {
            return 'vuetab-' + this.currentvueTab.toLowerCase()
        }
    }
})

//JS: 不同 tab 动态切换
var jstabs = [
    {
        name: 'Home',
        component: {
            template: '<div>JS: Home component</div>'
        }
    },
    {
        name: 'Posts',
        component: {
            template: '<div>JS: Posts component</div>'
        }
    },
    {
        name: 'Archive',
        component: {
            template: '<div>JS: Archive component</div>',
        }
    }
]

new Vue({
    el: '#dynamic-component-demo-js',
    data: {
        jstabs: jstabs,
        currentjsTab: jstabs[0]
    }
})