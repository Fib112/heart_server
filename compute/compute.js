const child_process = require('child_process')
const fs = require('fs')
const util = require('util');

module.exports = async function runPyCode(data, type) {
  const exec = util.promisify(child_process.exec);
  const dataStr = data.toString()
  fs.writeFileSync('./python/data.txt', dataStr)
  const { stdout, stderr } = await exec(`python python/main.py ${type}`);
  console.log('stdout: ' + stdout);
  console.log('stderr: ' + stderr);
  console.log('aaaa:', typeof stdout)
  const res = /#(.*)#/.exec(stdout);
  // console.log(res)
  if (res) {
    const [min, max, avg, hrv] = res[1].split('#');
    return {
      data: { 
        hr_min: min,
        hr_max: max,
        hr_avg: avg,
        hrv 
      }
    }
  }
}