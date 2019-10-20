let data = { a : 1 ,
            newTodoText:'',
            visitCount:0,
            hideCompletedTodos:false,
            todos:[],
            error:null
            }

let vm = new Vue({
    data
});

console.log( vm.a == data.a ) // tureと返される

vm.a = 2
console.log(data.a) //2と返される

data.a = 3
console.log(vm.a) //3と返される

vm.b = 'hi'
console.log(vm.b)




