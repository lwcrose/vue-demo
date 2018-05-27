var app1 = new Vue({
    el: '#app-1',
    data: {
        message: 'Hello Vue !'
    }
})

var app2 = new Vue({
    el: '#app-2',
    data: {
        message21: '页面加载于' + new Date().toLocaleString(),
        message22: 'lex',
        message23: 'rose'
    }
})

var app3 = new Vue({
    el: '#app-3',
    data: {
        see: true
    }
})

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { textbbb: '学习 JavaScripts' },
            { textbbb: '学习 Vue' },
            { text: '整个牛逼项目' }
        ]
    }
})

var app5 = new Vue({
    el: '#app-5',
    data: {
        message5: "Hello Vue.js !",
        message52: "Hello",
        message53: "Dear Lex",
        message54: "Hi Rose"
    },
    methods: {
        reversedMessage5: function () {
            this.message5 = this.message5.split('').reverse().join('')
        },
        reversedMessage53: function () {
            return this.message53.split('').reverse().join('')
        }
    },
    computed: {
        reversedMessage52: function () {
            return this.message52.split('').reverse().join('')
        },
        reversedMessage54: function () {
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
    data: {
        message6: "Hello Vue6 !",
        message62: "Hello Vue6-2 !"
    }
})

Vue.component('todo-item', {
    //todo-item 组件现在接受一个 “prop”，类似于一个自定义特性。
    //这个 prop 名为 todoprop
    props: ['todoprop'],
    //template: '<li> 这是一个代办项。</li>'
    template: '<li> {{ todoprop.text }} </li>'
})

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { id: 0, text: 'Vegetable' },
            { id: 1, text: 'Milk' },
            { id: 2, text: 'Anything Other' }
        ]
    }
})

var data1 = { a: 1 }

var vm = new Vue({
    data: data1
})

var xyz = new Vue({
    data: {
        newTodoText: '',
        visitCount: 0,
        hideCompletedTodos: false,
        todo: [],
        error: null
    }
})


var obj = {
    foo: 'bar'
}

//Object.freeze(obj)

var app8 = new Vue({
    el: '#app-8',
    data: obj
})

new Vue({
    data: {
        a: 5
    },
    created: function () {
        //‘this’ 指向VM实例
        console.log('a is: ' + this.a)
    }
})

console.log('a is: hahaha')

var app9 = new Vue({
    el: "#app-9",
    data: {
        msg91: 'It could be changed.',
        msg92: "It won't change.",
        rawHtml: "<span style=\"color:red\">This should be red.</span>",
    }
})

var app10 = new Vue({
    el: "#app-10",
    data: {
        dynamicId: "JIAJIA",
        isButtonDisabled: true // null/undefined/false ---> disabled 特性不会被包含在渲染出来的<Button>元素中
    }
})
// zhushi

var demo1 = new Vue({
    el: "#demo-1",
    data: {
        firstName: "Luo",
        lastName: "Rose",
        //newValue: null
    },
    // computed:{
    //     fullName: function(){
    //         return this.firstName + ' ' + this.lastName
    //     }
    // }
    computed: {
        fullName: {
            // getter
            get: function () {
                return this.firstName + ' ' + this.lastName
            },
            //setter
            set: function (newValue) {
                var names = newValue.split(' ')
                this.firstName = names[0]
                this.lastName = names[names.length - 1]
            }
        }
    }
})


Vue.component('todo-item', {
    template: '\
      <li>\
        {{ title }}\
        <button v-on:click="$emit(\'remove\')">X</button>\
      </li>\
    ',
    props: ['title']
})

new Vue({
    el: '#todo-list-example',
    data: {
        newTodoText: '',
        todos: [
            {
                id: 1,
                title: 'Do the dishes',
            },
            {
                id: 2,
                title: 'Take out the trash',
            },
            {
                id: 3,
                title: 'Mow the lawn'
            }
        ],
        nextTodoId: 4
    },
    methods: {
        addNewTodo: function () {
            this.todos.push({
                id: this.nextTodoId++,
                title: this.newTodoText
            })
            this.newTodoText = ''
        }
    }
})

var example1 = new Vue({
    el: '#example-1',
    data: {
        counter: 0
    }
})
var example2 = new Vue({
    el: '#example-2',
    data: {
        name: 'Vue.js'
    },
    // 在 `methods` 对象中定义方法
    methods: {
        greet: function (event) {
            // `this` 在方法里指向当前 Vue 实例
            alert('Hello ' + this.name + '!')
            // `event` 是原生 DOM 事件
            if (event) {
                alert(event.target.tagName)
            }
        }
    }
})

new Vue({
    el: '#example-3',
    data: {
        checkedNames: [],
        message30: "",
        message31: "",
        checked: false
    }
})

new Vue({
    el: '#example-4',
    data: {
        picked: ''
    }
})

new Vue({
    el: '#example-5',
    data: {
        selected: ''
    }
})

new Vue({
    el: '#example-6',
    data: {
        selected60: [],
        selected61: 'A',
        options: [
            { text: 'One', value: 'A' },
            { text: 'Two', value: 'B' },
            { text: 'Three', value: 'C' }
        ]
    }
})
// 定义一个名为 button-counter 的新组件
//Vue.component 全局注册
Vue.component('button-counter', {
    data: function () {  //一个组件的 data 选项必须是一个函数，因此每个实例可以维护一份被返回对象的独立的拷贝：
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})
//全局注册的组件可以用在其被注册之后的任何 (通过 new Vue) 新创建的 Vue 根实例，也包括其组件树中的所有子组件的模板中。
//new Vue({ el: '#components-demo' })

//props 参数，用于传入数据
Vue.component('blog-post', {
    props: ['title'],
    template: '<h3>{{ title }}</h3>'
})
new Vue({ el: '#components-demo' })
//一开始不清楚要渲染的具体内容，比如从一个 API 获取博文列表的时候，是非常有用的。
new Vue({
    el: '#blog-post-demo',
    data: {
        posts: [
            { id: 1, title: 'My journey with Vue' },
            { id: 2, title: 'Blogging with Vue' },
            { id: 3, title: 'Why Vue is so fun' },
        ]
    }
})


Vue.component('blog-postt', {
    props: ['post'],
    template: `
      <div class="blog-post">
        <h3>{{ post.title }}</h3>
        <button v-on:click="$emit('enlarge-text')">
  Enlarge text
</button>
        <div v-html="post.content"></div>
      </div>
    `
})
new Vue({
    el: '#blog-posts-events-demo',
    data: {
        posts: [
            { id: 1, title: 'My journey with Vue tt' },
            { id: 2, title: 'Blogging with Vue tt' },
            { id: 3, title: 'Why Vue is so fun tt' },],
        postFontSize: 1
    }
})

Vue.component('custom-input', {
    props: ['value'],
    template: `
      <input
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
      >
    `
})
new Vue({
    el: '#model-test',
    data:{
        searchText:""
    }
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


//Vue: 不同 tab 动态切换
Vue.component('vuetab-home', {
    data: function () {
        return {
            key0: 0
        }
    },
    template: '<div>Vue: Home component {{key0}}</div>'
})
Vue.component('vuetab-posts', {
    data: function () {
        return {
            key0: 0
        }
    },
    template: '<div>Vue: Posts component {{key0}}</div>'
})
Vue.component('vuetab-archive', {
    data: function () {
        return {
            key0: 0
        }
    },
    template: '<div>Vue: Archive component {{key0}}</div>'
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