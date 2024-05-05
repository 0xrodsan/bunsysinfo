import "systeminformation"

const si = require("systeminformation")

export const getMem = () => {
  return si.mem()
}

export const getCPU = () => {
  return si.cpu()
}
