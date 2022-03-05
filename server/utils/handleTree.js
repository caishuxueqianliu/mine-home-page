function handleDeptTree (data){
  data.forEach(item => {
    if (item.parentId !== 0) {
      data.forEach(val => {
        if (val.deptId == item.parentId) { // 如果内循环的id==外循环的parent  内与外即为父子关系
          if (!val.children) {
            val.children = []
          }
          val.children.push(item) // 向父节点的children中添加item.parent == val.id的元素
        }
      })
    }
  })
  data = data.filter(item => { return item.parentId === 0 }) // 去重  只有parent==0的时候才是最高级父节点
  return data
}

function arr (treeList) {
  const newArr = []
  treeList.forEach(item => {
    newArr.push(item)
    item.children && item.children.length > 0 ? arr(item.children) : ''
  })
  return newArr
}

function handleMenuTree(data){
  data.forEach(item => {
    if (item.parentId !== 0) {
      data.forEach(val => {
        if (val.menuId == item.parentId) { // 如果内循环的id==外循环的parent  内与外即为父子关系
          if (!val.children) {
            val.children = []
          }
          val.children.push(item) // 向父节点的children中添加item.parent == val.id的元素
        }
      })
    }
  })
  data = data.filter(item => { return item.parentId === 0 }) // 去重  只有parent==0的时候才是最高级父节点
  return data
}

function handleTreeToArr(data)  {
  data.forEach(item => {
    if (item.parentId !== 0) {
      data.forEach(val => {
        if (val.id == item.parentId) { // 如果内循环的id==外循环的parent  内与外即为父子关系
          if (!val.children) {
            val.children = []
          }
          val.children.push(item) // 向父节点的children中添加item.parent == val.id的元素
        }
      })
    }
  })
  data = data.filter(item => { return item.parentId === 0 }) // 去重  只有parent==0的时候才是最高级父节点
  return data
}


module.exports = {
  handleDeptTree,
  handleMenuTree,
  handleTreeToArr,
  arr
}
