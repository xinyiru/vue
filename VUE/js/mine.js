/*Vue.component('my-header',{
	template: '<p>this is my header</p>'
})*/

// 组件树
var myHeaderChild = {
	template: '<p>i am my header child</p>'
}
var myHeader = {
	template: '<p v-html="test" v-on:keydown.enter=""> <component :is=""></component> <my-header-child></my-header-child> this {{}} is my header</p> <keep-alive><router-view></router-view></keep-alive>',
	components: {
		'my-header-child': myHeader
	},
	// data使用function赋值
	data: function(){
		return {
			f:1,
			d:2
		}
	}
}

var root = new Vue({
	el: '#app',
	// template: "<p>Hello World {{ word }}</p>",
	data: {
		word: 'hello world'
	},
	components: {
		'my-header': myHeader
	}
})