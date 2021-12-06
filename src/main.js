// const api = jQuery('.test') //获取test对应到的所有元素，不返回元素们，返回api对象
// api.addClass('red').addClass('blue')//把api addClass,把得到的对象return回来继续addClass,链式操作

// const api1 = jQuery('.test')
// api1.addClass('blue')

// const api2 = api1.find('.child').addClass('red')

// api1.addClass('green')

jQuery('.test')
.find('.child')
.addClass('red')
.addClass('blue')
.addClass('green')
.end()
.addClass('yellow')
//等价于
// const api1 = jQuery('.test')
// const api2 = api1.find('a.child').addClass('red').addClass('blue').addClass('green')
// const oldApi = api2.end().addClass('yellow')

const x = jQuery('.test')
 .find('.child')
 x.each((div)=>console.log(div))

 const y = jQuery('.test')
y.parent().print()
y.children().print()