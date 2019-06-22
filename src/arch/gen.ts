import { readFileSync, writeFileSync } from 'fs'
import { OpInfo } from "../ir/op"
import { BasicType, NativeType, t_str } from '../types'
import * as typemodule from '../types'
import { OpDescription, parseOpDescr } from './describe'
import { ops as genericOps } from "./generic"

const opsOutFile      = __dirname + "/ops.ts"
const opsTemplateFile = __dirname + "/ops_template.ts"

let opcodes :string[] = []
let ops     :string[] = []
let types = new Set<string>() // types we need to import
let outbuf = ""

const typenames = new Map<NativeType,string>(
  Object.keys(typemodule)
    .map(k => [typemodule[k], k])
    .filter(([v,k]) => v instanceof NativeType) as [NativeType,string][]
)


function main() {
  buildOpTables()

  let tscode = makeOpsFile(outbuf)
  writeFileSync(opsOutFile, tscode, "utf8")
  print(`write ${opsOutFile}`)

  // process.stdout.write(outbuf)
}


function makeOpsFile(body :string) :string {
  let tpl = readFileSync(opsTemplateFile, "utf8")

  let imports = (
    'import {\n  ' +
    Array.from(types).sort().join(",\n  ") +
    '\n} from "../types"\n'
  )

  let importsAt = tpl.match(/\/\/\$IMPORTS\n/) as any as {0:string,index:number}
  let bodyStartAt = tpl.match(/\/\/\$BODY_START/) as any as {0:string,index:number}
  let bodyEndAt = tpl.match(/\/\/\$BODY_END/) as any as {0:string,index:number}
  assert(importsAt, "missing //$IMPORTS")
  assert(bodyStartAt, "missing //$BODY_START")
  assert(bodyEndAt, "missing //$BODY_END")
  let importsStart = importsAt.index
  let importsEnd = importsAt.index + importsAt[0].length
  let bodyStart = bodyStartAt.index
  let bodyEnd = bodyEndAt.index + bodyEndAt[0].length

  body = (
    tpl.substr(0, importsStart) +
    imports +
    tpl.substring(importsEnd, bodyStart) +
    body +
    tpl.substr(bodyEnd)
  )

  return body
}


function buildOpTables() {
  let oplists = [
    genericOps,
  ]
  for (let opdescv of oplists) {
    buildOpTable(opdescv)
  }
}


function buildOpTable(opdescv :OpDescription[]) {
  for (let d of opdescv) {
    let op = parseOpDescr(d)

    if (op.type) {
      types.add(typename(op.type))
    }
    if (op.aux) {
      types.add(typename(op.aux))
    }

    let opcode = opcodes.length

    opcodes.push(op.name)
    ops.push(fmtop(op, opcode))

    // if (op.name == "CallArg") { break } // debug
  }

  opcodes.push("OpcodeMax")

  write(
    "export const ops = {\n  " +
    opcodes.map((name, code) => `${name}: ${code}`).join(",\n  ") +
    "\n};\n"
  )
  write("\n")
  write(
    "export const opinfo :OpInfo[] = [\n" +
    ops.join(",\n") + "\n]; // ops\n"
  )
  write("\n")
}


function typename(t :NativeType) :string {
  let name = typenames.get(t)
  if (name) {
    return name
  }
  throw new Error(`invalid type ${t}`)
}


function fmtop(op :OpInfo, opcode :int) :string {
  let s = "  { name: " + js(op.name) + ",\n"
  for (let k of Object.keys(op).sort()) {
    if (k != "name") {
      let v = (op as any)[k]
      if (v instanceof NativeType) {
        v = typename(v)
      } else {
        v = js(v)
      }
      s += `    ${k}: ${v},\n`
    }
  }
  s += "  }"
  return s
}


function js(value :any) :string {
  return JSON.stringify(value)
}


function write(s :string) {
  outbuf += s
}


main()
