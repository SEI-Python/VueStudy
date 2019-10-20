let data = {
    a: 1,
    newTodoText: '',
    visitCount: 0,
    hideCompletedTodos: false,
    todos: [],
    error: null
}

let vm = new Vue({
    el: '#app',
    data,
});

vm.$watch("a", (newValue, oldValue) => {
    //このコールバックは'vm.a'の値が変わる時に呼ばれます
    console.log("aが変更されました");
});

console.log(`a-true:${vm.a == data.a}`); // tureと返される

vm.a = 2
console.log("a:" + data.a); //2と返される

data.a = 3
console.log("a:" + vm.a); //3と返される

vm.b = 'hi'
console.log("b:" + vm.b);

console.log(`vm-data:${vm.$data === data}`); // => true
console.log(`el:${vm.$el === document.getElementById("app")}`); //=>true

