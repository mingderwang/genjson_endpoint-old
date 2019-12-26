// straight synchronous version for perf comparison
import { join } from 'path'
import fs from 'fs'

function rreaddirSync (dir, allFiles = []) {
  const files = fs.readdirSync(dir)
        .map(f => join(dir, f))
    console.log('ming ',files)
  allFiles.push(...files)
  files.forEach(f => {
    fs.statSync(f).isDirectory() && rreaddirSync(f, allFiles)
  })
  return allFiles
}

module.exports = rreaddirSync
