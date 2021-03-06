//
// Interned byte strings
//
import { bufcmp, asciibuf } from './util'
import * as utf8 from './utf8'


export class ByteStr {
  readonly isEmpty = false  // true for "_"

  constructor(
  readonly hash  :int,
  readonly bytes :Uint8Array,
  ){}

  isUnderscore() {
    // Note: Hash constant needs to be updated if hash function changes.
    return this.hash == 0xda0c1970 && this.bytes[0] == 0x5f
  }

  toString() :string {
    return utf8.decodeToString(this.bytes)
  }

  equals(other :ByteStr) :bool {
    return (
      this.hash == other.hash &&
      this.bytes.length == other.bytes.length &&
      bufcmp(this.bytes, other.bytes) == 0
    )
  }
}


export class ByteStrSet {
  _m = new Map<int,ByteStr[]>()

  // DEPRECATED
  emplace(value :Uint8Array, hash :int = 0) :ByteStr {
    return this.get(value, hash)
  }

  get(value :Uint8Array, hash :int = 0) :ByteStr {
    if (!hash) {
      hash = hashBytes(value, 0, value.length)
    }
    let v = this._m.get(hash)
    if (v) {
      for (let bs of v) {
        if (bs.bytes.length == value.length && bufcmp(bs.bytes, value) == 0) {
          return bs
        }
      }
      const bs = new ByteStr(hash, value)
      v.push(bs)
      return bs
    } else {
      const bs = new ByteStr(hash, value)
      this._m.set(hash, [bs])
      return bs
    }
  }

  clear() {
    this._m.clear()
  }
}


// process-wide shared instance
export const strings = new ByteStrSet()

export const str__ = strings.get(new Uint8Array([0x5f])) // "_"
;(str__ as any).isEmpty = true


// hashBytes returns an unsigned 31 bit integer hash of an array of bytes.
// It's using the FNV1a algorithm which is very fast and has good distribution
// for common short names (based on tests on a large corpus of go source code.)
//
export function hashBytes(buf :ArrayLike<byte>, offs :int, length :int) {
  // This function must exactly match what's in scanner.
  var h = 0x811c9dc5, i = offs, e = offs + length
  while (i < e) {
    h = (h ^ buf[i++]) * 0x1000193
  }
  return h >>> 0
}


export function asciiByteStr(s :string) :ByteStr {
  let b = asciibuf(s)
  return new ByteStr(hashBytes(b, 0, b.length), b)
}
