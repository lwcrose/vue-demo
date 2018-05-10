var app1 = new Vue({
    el: '#app-1',
    data:{
        message: 'Hello Vue !' 
    }
})

var app2 = new Vue({
    el: '#app-2',
    data:{
        message21: '页面加载于' + new Date().toLocaleString(),
        message22: 'lex',
        message23: 'rose'
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
        message5: "Hello Vue.js !",
        message52: "Hello",
        message53: "Dear Lex",
        message54: "Hi Rose"
    },
    methods:{
        reversedMessage5: function(){
            this.message5 = this.message5.split('').reverse().join('')
        },
        reversedMessage53: function(){
            return  this.message53.split('').reverse().join('')   
        }    
    },
    computed:{
        reversedMessage52: function(){
            return this.message52.split('').reverse().join('')
        },
        reversedMessage54: function(){
            return this.message54.split('').reverse().join('')
        }
    },
    //methods:{
    //    reversedMessage53: function(){
    //        return this.message53 = this.message53.split('').reverse().join('')
    //    }
    //}
    //console.log(app5.reversedMessage52)
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

var data1 = {a: 1}

var vm = new Vue({
    data: data1
})

var xyz = new Vue({
    data:{
        newTodoText: '',
        visitCount: 0,
        hideCompletedTodos: false,
        todo: [],
        error: null
    }
})


var obj ={
    foo: 'bar'
}

//Object.freeze(obj)

var app8 = new Vue({
    el: '#app-8',
    data: obj
})

new Vue({
    data: {
        a:5
    },
    created: function(){
        //‘this’ 指向VM实例
        console.log('a is: ' + this.a)
    }
})

console.log('a is: hahaha')

var app9 = new Vue({
    el: "#app-9",
    data:{
        msg91: 'It could be changed.',
        msg92: "It won't change.",
        rawHtml: "<span style=\"color:red\">This should be red.</span>",
    }
})

var app10 = new Vue({
    el: "#app-10",
    data:{
        dynamicId: "JIAJIA",
        isButtonDisabled: true // null/undefined/false ---> disabled 特性不会被包含在渲染出来的<Button>元素中
    }
})
// zhushi