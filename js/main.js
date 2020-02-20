//  let app1 = new Vue({
//      el: '#app',
//      data: {
//          title: 'hello world',
//          link: '<a href="http://">google</a>',
//          link2: 'google.com'
//      },
//      methods: {
//          sayHello: function () {
//              this.title = 'me'
//              return this.title
//          }
//      }
//  });

//  let var2 = new Vue({
//      el: '#app2',
//      data: {
//          counter: 0,
//          x: 0,
//          y: 0,
//          seen: true
//      },
//      methods: {
//          increase(step, event) {
//              this.counter+= step;
//              this.seen =false
//          },
//          updatecoordinate: function (event) {
//              this.x = event.clientX;
//              this.y = event.clientY;
//          },
//          alertMe() {
//              alert('me')
//          }
//      },
//  })

// let app = new Vue({
//   el: "#app",
//   data: {
//     counter: 0,
//     secondcounter: 0
//   },
//   watch: {
//     counter() {
//       var vm = this;
//       setTimeout(function() {
//         vm.counter = 0;
//       }, 2000);
//     }
//   },
//   computed: {
//     output() {
//       console.log("computed");
//       return this.counter > 5 ? "greater 5" : "smaller than 5";
//     }
//   },
//   methods: {
//     result() {
//       console.log("method");
//       return this.counter > 5 ? "greater 5" : "smaller than 5";
//     }
//   }
// });

// let app = new Vue({
//   el: "#app",
//   data: {
//     attachRed: false,
//     color: "green"
//   },
//   computed: {
//     DivClasses() {
//       return {
//         red: this.attachRed,
//         blue: !this.attachRed
//       };
//     }
//   }
// });

let app1= new Vue({
  el: '#app1',
  data: {
    color: 'gray',
    width: 100
  },
  computed: {
    myStyle() {
      return {
        backgroundColor: this.color,
        width: this.width + 'px'
      }
    }
  },
})