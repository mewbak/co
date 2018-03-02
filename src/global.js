var global = (
  typeof global != 'undefined' ? global :
  typeof window != 'undefined' ? window :
  this
)

try {
  typeof require != 'undefined' && require("source-map-support").install()
} catch(_) {}

function _stackTrace(cons) {
  const x = {stack:''}
  if (Error.captureStackTrace) {
    Error.captureStackTrace(x, cons)
    const p = x.stack.indexOf('\n')
    if (p != -1) {
      return x.stack.substr(p+1)
    }
  }
  return x.stack
}

function exit(status) {
  if (typeof process != 'undefined') {
    process.exit(status)
  }
  throw 'EXIT#' + status
}

function panic(msg) {
  console.error.apply(console,
    ['panic:', msg].concat(Array.prototype.slice.call(arguments, 1))
  )
  console.error(_stackTrace(panic))
  exit(2)
}

function assert() {
  if (DEBUG) { // for DCE
    var cond = arguments[0]
      , msg = arguments[1]
      , cons = arguments[2] || assert
    if (!cond) {
      if (!assert.throws && typeof process != 'undefined') {
        var e, stack = _stackTrace(cons)
        console.error('assertion failure:', msg || cond)
        console.error(_stackTrace(cons))
        exit(3)
      } else {
        var e = new Error('assertion failure: ' + (msg || cond))
        e.name = 'AssertionError'
        e.stack = _stackTrace(cons)
        throw e
      }
    }
  }
}

function repr(obj) {
  // TODO: something better
  try {
    return JSON.stringify(obj)
  } catch (_) {
    return String(obj)
  }
}

function TEST(){}
if (DEBUG) {
  var allTests = []
  TEST = (name, f) => {
    if (f === undefined) {
      f = name
      name = f.name || '?'
    }
    let e = new Error(), srcloc = '?'
    if (e.stack) {
      let sf = e.stack.split(/\n/, 3)[2]
      let m = /\s+\(.+\/(src\/.+)\)$/.exec(sf)
      if (m) {
        srcloc = m[1]
      }
    }
    allTests.push({ f, name, srcloc })
  }
  var runAllTests = function runAllTests() { // named for stack trace
    let throws = assert.throws
    assert.throws = true
    try {
      for (let i = 0; i < allTests.length; ++i) {
        let t = allTests[i];
        console.log(`[TEST] ${t.name}${t.srcloc ? ' '+t.srcloc : ''}`);
        t.f();
      }
      assert.throws = throws
    } catch(err) {
      assert.throws = throws
      if (!throws && typeof process != 'undefined') {
        console.error('assertion failure:', err.message)
        if (err.stack) {
          if (err.stack.indexOf('AssertionError:') == 0) {
            err.stack = err.stack.split(/\n/).slice(1).join('\n')
          }
          console.error(err.stack)
        }
        exit(3)
      } else {
        throw err
      }
    }
  }
  if (typeof process != 'undefined' && process.nextTick) {
    process.nextTick(runAllTests)
  } else {
    setTimeout(runAllTests,0)
  }
}
