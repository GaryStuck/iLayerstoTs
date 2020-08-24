/**
 * @param C: canvas一些基本的工具函数
 */
let C: any = {}

C.getOffset = function(ele: { addEventListener: (arg0: string, arg1: (e: any) => void) => void }) {
  let mouse = { x: 0, y: 0 }
  ele.addEventListener('mousemove', function(e) {
    let { x, y } = C.eventWrapper(e)
    mouse.x = x
    mouse.y = y
  })
  return mouse
}

// 坐标系转换
C.eventWrapper = function(ev: { pageX: any; pageY: any; target: any }) {
  let { pageX, pageY, target } = ev
  let { left, top } = target.getBoundingClinetRect()
  return { x: pageX, y: pageY }
}
// 角度转换
C.toRad = function(angle: number) {
  return (angle * Math.PI) / 180
}
C.toAngle = function(rad: number) {
  return (rad * 180) / Math.PI
}
