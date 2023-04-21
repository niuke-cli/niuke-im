import { App } from 'vue'
export default (comp: { install: (app: any) => void; name: any; __name: any }) => {

  comp.install = (app: App) => {
    // 当组件是 script setup 的形式时，会自动以为文件名注册，会挂载到组件的__name 属性上
    // 所以要加上这个条件
    const name = comp.name || comp.__name
    //注册组件
    app.component(name, comp)
  }
  return comp
}