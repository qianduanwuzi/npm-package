// import WZTest from './components/Test.vue'
import WZTestJsx from './components/Test.js'
import Vue from 'vue'

const components = {
    // WZTest,
    WZTestJsx,
}

function install () {
    Object.keys(components).forEach(name => {
      Vue.component(name, components[name])
    })
}

// // 如果是直接引入的
// if (typeof window !== 'undefined' && window.Vue) {
//     install(window.Vue)
// }
export default { install , WZTestJsx}

// export {
//     // WZTest,
//     WZTestJsx
// }