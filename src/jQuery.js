//jQuery的核心思想：提供一个函数，这个函数接受一个选择器或数组，根据这个选择器获取一些元素，然后返回一个对象(我们称为api)，这个对象有一些方法可以操作这些元素
window.$ = window.jQuery = function(selectorOrArray){
    let elements
    if(typeof selectorOrArray ==='string'){
        elements = document.querySelectorAll(selectorOrArray)
    }else if(selectorOrArray instanceof Array){
        elements  = selectorOrArray
    }
    //api 可以操作elements
    return {
        //第一个核心点：闭包：函数访问外部的变量
        addClass(className){
            for(let i=0;i<elements.length;i++){
                elements[i].classList.add(className)
            }
            return this//第二个核心点：链式操作，addClass 里的this就是api
        },
        find(selector){
            let array = []
            for(let i=0;i<elements.length;i++){
               const elements2 = Array.from(elements[i].querySelectorAll(selector))//新建一个elements2等于把遍历到的元素组成的数组
               array = array.concat(elements2)//把elements2放入空数组 
            }
            array.oldApi = this //this是旧api1,这个oldApi只是放在数组里面，所以需要添加oldApi:selectorOrArray.oldApi，让它可以放在选择器或数组里面
            return jQuery(array)//新建一个Api对象，让jQuery接受数组，新的Api来操作这个数组
        },
        oldApi:selectorOrArray.oldApi,
        end(){
            return this.oldApi //这里的this是新api2，用api2去引用api1
        },
        each(fn){
            for(let i=0;i<elements.length;i++){
                fn.call(null,elements[i],i)
            }
            return this
        },
        parent(){
            const array = []
            this.each((node)=>{
                if(array.indexOf(node.parentNode) === -1){//node.parentNode没有push过
                    array.push(node.parentNode)
                }
            })
            return jQuery(array)
        },
        children(){
            const array = []
            this.each((node)=>{
              array.push(...node.children)
              //等价于array.push(node.children[0],array.push(node.children[1],array.push(node.children[2])
            })
            return jQuery(array)
          },
        print(){
            console.log(elements)
        },
    }
}

// window.$ = window.jQuery