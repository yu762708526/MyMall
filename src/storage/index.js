
// const STORAGE_KEY = 'mall'
// export default {
//   // 存储值
//   setItem (key, value, module) {
//     if (module) {
//       const val = this.getItem(module)
//       val[key] = value
//       this.setItem(module, val)
//     } else {
//       const val = this.getStorage()
//       val[key] = value
//       window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
//     }
//   },
//   // 获取某一个模块下面的属性user下面的userName
//   getItem (key, module) {
//     if (module) {
//       const val = this.getItem(module)
//       if (val) return val[key]
//     }
//     return this.getStorage()[key]
//   },
//   getStorage () {
//     return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}')
//   },
//   clear (key, module) {
//     const val = this.getStorage()
//     if (module) {
//       if (!val[module]) return
//       delete val[module][key]
//     } else {
//       delete val[key]
//     }
//     window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
//   }
// }
const STORAGE = 'mall'
export default {
  setItem (key, value, moduleName) {
    const val = this.getStorage()
    if (moduleName) {
      const val = this.getItem(moduleName)
      val[key] = value
      this.setItem(moduleName, val)
    } else {
      val[key] = value
      window.sessionStorage.setItem(STORAGE, JSON.stringify(val))
    }
  },
  getItem (key, moduleName) {
    const val = this.getStorage()
    if (moduleName) {
      const val = this.getItem(moduleName)
      return val[key]
    }
    return val[key]
  },
  getStorage () {
    return JSON.parse(window.sessionStorage.getItem(STORAGE) || '{}')
  },
  clear (key, moduleName) {
    const val = this.getStorage()
    if (moduleName) {
      if (!val[moduleName]) return // 为了增加健壮性
      delete val[moduleName][key]
    } else {
      delete val[key]
    }
    window.sessionStorage.setItem(STORAGE, JSON.stringify(val))
  }
}
