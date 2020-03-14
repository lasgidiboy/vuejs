let app1=new Vue({
    el: '#app1',
    data: {
        shows: true,
        isActive: false,
        dataId: 40,
        title: " i love dis",
        ingredients: ["meat", 'pepper', "onion"],
        persons: [
            {name: "papper", age: 25, color: "red"},
            {name: "buku", age: "unknow", color: "blue"}
        ]
    }
})
let app2 = new Vue({
    el: '#app',
    data: {
        opt: [],
        text: "text",
        styleObject: {
            color: 'blue',
            fontSize: '50px'
        },
        show: true
    }
})

let app3 = new Vue({
  el: "#app3",
  data: {
      title: "measef",
      
  }
});