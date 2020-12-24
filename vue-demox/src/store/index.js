import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        count:100,
        arr:[{id:1,name:'第一'},{id:2,name:'第2'}]
    },
    getters:{
        showNum: state=>{
            return '当前最新的count:'+ state.count
        },
        // showArr: (state)=>{
        //     // console.log('index', index)
        //     return i=>{
        //         return state.arr[i]
        //     }
        // },
        showArr: state=> i=> state.arr[i]
    },
    //mutation 中可以定义很多操作state的函数， 组件中通过this.$store.commit可以调用mutation中的函数
    //mutations 中不能进行异步操作，比如setTimeout 方法， 所有的异步任务通过Action 执行
    mutations:{
        add(state){     //组件中通过this.$store.commit('add')调用, 函数第一个形参，永远都是store的state
            state.count++
        },
        addN(state, num){   //第二个参数是外界传递的
            state.count+= num
        },
        subtract(state){
            state.count--
        },
        subtractNum(state, num){
            state.count-= num
        }
    },
    actions:{
        //在actions中修改state的数据，需要调用commit触发对应的mutations才可以
        //触发actions 的第一种方式： this.$store.dispatch('')
        //context 相当于 store实例函数，然后通过context.commit操作
        addAsync(context){
            setTimeout(()=>{
                context.commit('add')
            },1000)
        },

        //1、通过组件传递参数，2、addNumAsync接收，
        addNumAsync(context,step){
            setTimeout(()=>{
                context.commit('addN',step)  //3、context.commit接收，4、调用mutations - addN 修改
            },1000)
        },
        subAsync(context){
            setTimeout(()=>{
                context.commit('subtract')
            },1000)
        },
        subNumAsync(context,step){
            setTimeout(()=>{
                context.commit('subtractNum',step) 
            },1000)
        }
    }
})
  
export default store 