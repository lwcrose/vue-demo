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