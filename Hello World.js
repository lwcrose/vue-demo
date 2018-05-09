var app1 = new Vue({
    el: '#app-1',
    data:{
        message: 'Hello Vue !' 
    }
})

var app2 = new Vue({
    el: '#app-2',
    data:{
        message2: '页面加载于' + new Date().toLocaleString(),
        message3: 'lex',
        message4: 'rose'
    }
})

var app3 = new Vue({
    el:'#app-3',
    data:{
        see:true
    }
})

var app4 = new Vue({
    el: '#app-4',
    data:{
        todos:[
            {textbbb: '学习 JavaScripts'},
            {textbbb: '学习 Vue'},
            {text: '整个牛逼项目'}
        ]
    }
})

var app5 = new Vue({
    el: '#app-5',
    data:{
        message5: "Hello Vue.js !"
    },
    methods:{
        reverseMessage: function(){
            this.messaget5 = this.message5.split('').reverse().join('')
        }
    }
})

var app6 = new Vue({
    el: '#app-6',
    data:{
        message6: "Hello Vue6 !",
        message62: "Hello Vue6-2 !"
    }
})

Vue.component('todo-item',{
    //todo-item 组件现在接受一个 “prop”，类似于一个自定义特性。
    //这个 prop 名为 todoprop
    props: ['todoprop'],
    //template: '<li> 这是一个代办项。</li>'
    template: '<li> {{ todoprop.text }} </li>'
})

var app7 = new Vue({
    el: '#app-7',
    data:{
        groceryList:[
            {id:0, text: 'Vegetable'},
            {id:1, text: 'Milk'},
            {id:2, text: 'Anything Other'}
        ]
    }
})