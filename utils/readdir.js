import { join } from 'path'
import { readdir, stat } from 'fs-promise'

async function rreaddir (dir, allFiles = []) {
  const files = (await readdir(dir)).map(f => join(dir, f))
  allFiles.push(...files)
  await Promise.all(files.map(async f => (
    (await stat(f)).isDirectory() && rreaddir(f, allFiles)
  )))
    console.log('==>', allFiles)
  return allFiles
}
module.exports = rreaddir
