#!/usr/bin/env node

import { readFile } from 'fs'
import { resolve as resolvePath } from 'path'

import { Config } from './types'
import { run } from './index'

async function readConfig(path: string): Promise<Config> {
  return new Promise<Config>((resolve, reject) => {
    readFile(resolvePath(path), 'utf8', (err, str) => {
      err ? reject(err) : resolve(JSON.parse(str))
    })
  })
}

readConfig(process.argv[2])
  .then(run)
  .catch((err) => {
    console.error('run', err)
  })
