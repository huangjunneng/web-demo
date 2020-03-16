// import msg from './msg/msg.vue'
// import button from './buttton/button.vue'
// let plugin = {};
// plugin.install = function(Vue){
//     // 添加全局属性或方法
//     Vue.prototype.$msg = "我是全局的msg";
//     Vue.prototype.$myMethods = function(){
//         console.log("我是全局定义的方法");
//     }
//     // 全局自定义指令
//     Vue.directive('focus',{
//         bind:function(){},
//         // 当元素插入到 DOM 中
//         inserted:function(el){
//             // 获取焦点
//             el.focus();
//         }
//     });
//     // 全局混入
//     // Vue.mixin({})

//     // 全局注册组件 msg.name 组件名
//     Vue.component(msg.name ,msg);
//     Vue.component(button.name, button);

// }
// export default plugin





/* 
参数1：路径
参数2：是否查询子目录
参数3：正则匹配文件后缀
*/
const requireComponent = require.context('./', true, /\.vue$/);

console.log("requireComponent==>",requireComponent.keys());

const install = (Vue)=>{
    if(install.installed) return
    install.installed
    requireComponent.keys().forEach(fileName => {
        // 第i个
        const config = requireComponent(fileName);
        const componentName = config.default.name;
        Vue.component(componentName, config.default || config);
    })
     // 全局自定义指令
     Vue.directive('focus',{
        bind:function(){},
        // 当元素插入到 DOM 中
        inserted:function(el){
            // 获取焦点
            el.focus();
        }
    });
}

// 确保是正常环境 浏览器环境 node是没有window的
if(typeof window !== 'undefined' && window.Vue){
    // 注册vue
    install(window.Vue);
}
export default{
    install
    // 导出的对象必须具备一个install方法
}