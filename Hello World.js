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