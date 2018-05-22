var login = new Vue({

})
//自定义组件名 (字母全小写且必须包含一个连字符)
Vue.component('login-component', {
    data: function () {
        return {
            count: 0
        }
    },
    template: '<button v-on:click=count++>You click me {{count}} times.</button>'

})
new Vue({ el: '#login' })

//Vue: 不同 tab 动态切换
Vue.component('vuetab-home', {
    template: '<div>Vue: Home component</div>'
})
Vue.component('vuetab-posts', {
    template: '<div>Vue: Posts component</div>'
})
Vue.component('vuetab-archive', {
    template: '<div>Vue: Archive component</div>'
})

new Vue({
    el: '#dynamic-component-demo-vue',
    data: {
        currentvueTab: 'Home',
        vuetabs: ['Home', 'Posts', 'Archive']
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