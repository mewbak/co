// generated from arch/*_ops.ts -- do not edit.
import { Op, OpInfo, SymEffect } from "../ir/op"
import { UInt64 } from "../int64"
import {
  t_bool,
  t_f32,
  t_f64,
  t_i16,
  t_i32,
  t_i64,
  t_str,
  t_u16,
  t_u32,
  t_u64,
  t_u8,
  t_usize
} from "../types"

const u64_ffff = new UInt64(65535,0),
      u64_10000ffff = new UInt64(65535,1);

export const ops = {
  
  // generic
  Invalid: 0,
  Unknown: 1,
  Phi: 2,
  Copy: 3,
  Arg: 4,
  CallArg: 5,
  NilCheck: 6,
  Call: 7,
  TailCall: 8,
  ConstBool: 9,
  ConstI8: 10,
  ConstI16: 11,
  ConstI32: 12,
  ConstI64: 13,
  ConstF32: 14,
  ConstF64: 15,
  ConstString: 16,
  SP: 17,
  SB: 18,
  Load: 19,
  Store: 20,
  Move: 21,
  Zero: 22,
  AddI8: 23,
  AddI16: 24,
  AddI32: 25,
  AddI64: 26,
  AddF32: 27,
  AddF64: 28,
  SubI8: 29,
  SubI16: 30,
  SubI32: 31,
  SubI64: 32,
  SubF32: 33,
  SubF64: 34,
  MulI8: 35,
  MulI16: 36,
  MulI32: 37,
  MulI64: 38,
  MulF32: 39,
  MulF64: 40,
  DivS8: 41,
  DivU8: 42,
  DivS16: 43,
  DivU16: 44,
  DivS32: 45,
  DivU32: 46,
  DivS64: 47,
  DivU64: 48,
  DivF32: 49,
  DivF64: 50,
  RemS8: 51,
  RemU8: 52,
  RemS16: 53,
  RemU16: 54,
  RemS32: 55,
  RemU32: 56,
  RemI64: 57,
  RemU64: 58,
  AndI8: 59,
  AndI16: 60,
  AndI32: 61,
  AndI64: 62,
  OrI8: 63,
  OrI16: 64,
  OrI32: 65,
  OrI64: 66,
  XorI8: 67,
  XorI16: 68,
  XorI32: 69,
  XorI64: 70,
  ShLI8x8: 71,
  ShLI8x16: 72,
  ShLI8x32: 73,
  ShLI8x64: 74,
  ShLI16x8: 75,
  ShLI16x16: 76,
  ShLI16x32: 77,
  ShLI16x64: 78,
  ShLI32x8: 79,
  ShLI32x16: 80,
  ShLI32x32: 81,
  ShLI32x64: 82,
  ShLI64x8: 83,
  ShLI64x16: 84,
  ShLI64x32: 85,
  ShLI64x64: 86,
  ShRS8x8: 87,
  ShRS8x16: 88,
  ShRS8x32: 89,
  ShRS8x64: 90,
  ShRS16x8: 91,
  ShRS16x16: 92,
  ShRS16x32: 93,
  ShRS16x64: 94,
  ShRS32x8: 95,
  ShRS32x16: 96,
  ShRS32x32: 97,
  ShRS32x64: 98,
  ShRS64x8: 99,
  ShRS64x16: 100,
  ShRS64x32: 101,
  ShRS64x64: 102,
  ShRU8x8: 103,
  ShRU8x16: 104,
  ShRU8x32: 105,
  ShRU8x64: 106,
  ShRU16x8: 107,
  ShRU16x16: 108,
  ShRU16x32: 109,
  ShRU16x64: 110,
  ShRU32x8: 111,
  ShRU32x16: 112,
  ShRU32x32: 113,
  ShRU32x64: 114,
  ShRU64x8: 115,
  ShRU64x16: 116,
  ShRU64x32: 117,
  ShRU64x64: 118,
  EqI8: 119,
  EqI16: 120,
  EqI32: 121,
  EqI64: 122,
  EqF32: 123,
  EqF64: 124,
  NeqI8: 125,
  NeqI16: 126,
  NeqI32: 127,
  NeqI64: 128,
  NeqF32: 129,
  NeqF64: 130,
  LessS8: 131,
  LessU8: 132,
  LessS16: 133,
  LessU16: 134,
  LessS32: 135,
  LessU32: 136,
  LessS64: 137,
  LessU64: 138,
  LessF32: 139,
  LessF64: 140,
  LeqS8: 141,
  LeqU8: 142,
  LeqS16: 143,
  LeqU16: 144,
  LeqS32: 145,
  LeqU32: 146,
  LeqS64: 147,
  LeqU64: 148,
  LeqF32: 149,
  LeqF64: 150,
  GreaterS8: 151,
  GreaterU8: 152,
  GreaterS16: 153,
  GreaterU16: 154,
  GreaterS32: 155,
  GreaterU32: 156,
  GreaterS64: 157,
  GreaterU64: 158,
  GreaterF32: 159,
  GreaterF64: 160,
  GeqS8: 161,
  GeqU8: 162,
  GeqS16: 163,
  GeqU16: 164,
  GeqS32: 165,
  GeqU32: 166,
  GeqS64: 167,
  GeqU64: 168,
  GeqF32: 169,
  GeqF64: 170,
  Not: 171,
  MinF32: 172,
  MinF64: 173,
  MaxF32: 174,
  MaxF64: 175,
  NegI8: 176,
  NegI16: 177,
  NegI32: 178,
  NegI64: 179,
  NegF32: 180,
  NegF64: 181,
  CtzI8: 182,
  CtzI16: 183,
  CtzI32: 184,
  CtzI64: 185,
  CtzI8NonZero: 186,
  CtzI16NonZero: 187,
  CtzI32NonZero: 188,
  CtzI64NonZero: 189,
  BitLen8: 190,
  BitLen16: 191,
  BitLen32: 192,
  BitLen64: 193,
  PopCountI8: 194,
  PopCountI16: 195,
  PopCountI32: 196,
  PopCountI64: 197,
  SqrtF32: 198,
  SqrtF64: 199,
  FloorF32: 200,
  FloorF64: 201,
  CeilF32: 202,
  CeilF64: 203,
  TruncF32: 204,
  TruncF64: 205,
  RoundF32: 206,
  RoundF64: 207,
  RoundToEvenF32: 208,
  RoundToEvenF64: 209,
  AbsF32: 210,
  AbsF64: 211,
  CopysignF32: 212,
  CopysignF64: 213,
  SignExtI8to16: 214,
  SignExtI8to32: 215,
  SignExtI8to64: 216,
  SignExtI16to32: 217,
  SignExtI16to64: 218,
  SignExtI32to64: 219,
  ZeroExtI8to16: 220,
  ZeroExtI8to32: 221,
  ZeroExtI8to64: 222,
  ZeroExtI16to32: 223,
  ZeroExtI16to64: 224,
  ZeroExtI32to64: 225,
  TruncI8toBool: 226,
  TruncI16toBool: 227,
  TruncI32toBool: 228,
  TruncI64toBool: 229,
  TruncF32toBool: 230,
  TruncF64toBool: 231,
  TruncI16to8: 232,
  TruncI32to8: 233,
  TruncI32to16: 234,
  TruncI64to8: 235,
  TruncI64to16: 236,
  TruncI64to32: 237,
  ConvI32toF32: 238,
  ConvI32toF64: 239,
  ConvI64toF32: 240,
  ConvI64toF64: 241,
  ConvF32toI32: 242,
  ConvF32toI64: 243,
  ConvF64toI32: 244,
  ConvF64toI64: 245,
  ConvF32toF64: 246,
  ConvF64toF32: 247,
  ConvU32toF32: 248,
  ConvU32toF64: 249,
  ConvF32toU32: 250,
  ConvF64toU32: 251,
  ConvU64toF32: 252,
  ConvU64toF64: 253,
  ConvF32toU64: 254,
  ConvF64toU64: 255,
  AtomicLoad32: 256,
  AtomicLoad64: 257,
  AtomicLoadPtr: 258,
  AtomicStore32: 259,
  AtomicStore64: 260,
  AtomicStorePtrNoWB: 261,
  AtomicExchange32: 262,
  AtomicExchange64: 263,
  AtomicAdd32: 264,
  AtomicAdd64: 265,
  AtomicCompareAndSwap32: 266,
  AtomicCompareAndSwap64: 267,
  AtomicAnd8: 268,
  AtomicOr8: 269,

  // covm
  CovmMOV32const: 270,
  CovmADD32: 271,
  CovmADD32const: 272,
  CovmADD64: 273,
  CovmMUL32: 274,
  CovmZeroLarge: 275,
  CovmLowNilCheck: 276,

  // END
  OpcodeMax: undefined,
};

export const opinfo :OpInfo[] = [

  // generic
  { name: "Invalid",
    argLen: 0,
    generic: true,
  },
  { name: "Unknown",
    argLen: 0,
    generic: true,
  },
  { name: "Phi",
    argLen: -1,
    generic: true,
    zeroWidth: true,
  },
  { name: "Copy",
    argLen: 1,
    generic: true,
  },
  { name: "Arg",
    argLen: 0,
    generic: true,
    zeroWidth: true,
  },
  { name: "CallArg",
    argLen: 1,
    generic: true,
    zeroWidth: true,
  },
  { name: "NilCheck",
    argLen: 2,
    faultOnNilArg0: true,
    generic: true,
    nilCheck: true,
  },
  { name: "Call",
    argLen: 1,
    aux: t_usize,
    call: true,
    generic: true,
  },
  { name: "TailCall",
    argLen: 1,
    aux: t_usize,
    call: true,
    generic: true,
  },
  { name: "ConstBool",
    argLen: 0,
    aux: t_bool,
    constant: true,
    generic: true,
  },
  { name: "ConstI8",
    argLen: 0,
    aux: t_u8,
    constant: true,
    generic: true,
  },
  { name: "ConstI16",
    argLen: 0,
    aux: t_u16,
    constant: true,
    generic: true,
  },
  { name: "ConstI32",
    argLen: 0,
    aux: t_u32,
    constant: true,
    generic: true,
  },
  { name: "ConstI64",
    argLen: 0,
    aux: t_u64,
    constant: true,
    generic: true,
  },
  { name: "ConstF32",
    argLen: 0,
    aux: t_u32,
    constant: true,
    generic: true,
  },
  { name: "ConstF64",
    argLen: 0,
    aux: t_u64,
    constant: true,
    generic: true,
  },
  { name: "ConstString",
    argLen: 0,
    aux: t_str,
    generic: true,
  },
  { name: "SP",
    argLen: 0,
    generic: true,
    zeroWidth: true,
  },
  { name: "SB",
    argLen: 0,
    generic: true,
    type: t_usize,
    zeroWidth: true,
  },
  { name: "Load",
    argLen: 2,
    generic: true,
  },
  { name: "Store",
    argLen: 3,
    generic: true,
    type: t_usize,
  },
  { name: "Move",
    argLen: 3,
    generic: true,
    type: t_usize,
  },
  { name: "Zero",
    argLen: 2,
    generic: true,
    type: t_usize,
  },
  { name: "AddI8",
    argLen: 2,
    commutative: true,
    generic: true,
    resultInArg0: true,
  },
  { name: "AddI16",
    argLen: 2,
    commutative: true,
    generic: true,
    resultInArg0: true,
  },
  { name: "AddI32",
    argLen: 2,
    commutative: true,
    generic: true,
    resultInArg0: true,
  },
  { name: "AddI64",
    argLen: 2,
    commutative: true,
    generic: true,
    resultInArg0: true,
  },
  { name: "AddF32",
    argLen: 2,
    commutative: true,
    generic: true,
    resultInArg0: true,
  },
  { name: "AddF64",
    argLen: 2,
    commutative: true,
    generic: true,
    resultInArg0: true,
  },
  { name: "SubI8",
    argLen: 2,
    generic: true,
    resultInArg0: true,
  },
  { name: "SubI16",
    argLen: 2,
    generic: true,
    resultInArg0: true,
  },
  { name: "SubI32",
    argLen: 2,
    generic: true,
    resultInArg0: true,
  },
  { name: "SubI64",
    argLen: 2,
    generic: true,
    resultInArg0: true,
  },
  { name: "SubF32",
    argLen: 2,
    generic: true,
    resultInArg0: true,
  },
  { name: "SubF64",
    argLen: 2,
    generic: true,
    resultInArg0: true,
  },
  { name: "MulI8",
    argLen: 2,
    commutative: true,
    generic: true,
    resultInArg0: true,
  },
  { name: "MulI16",
    argLen: 2,
    commutative: true,
    generic: true,
    resultInArg0: true,
  },
  { name: "MulI32",
    argLen: 2,
    commutative: true,
    generic: true,
    resultInArg0: true,
  },
  { name: "MulI64",
    argLen: 2,
    commutative: true,
    generic: true,
    resultInArg0: true,
  },
  { name: "MulF32",
    argLen: 2,
    commutative: true,
    generic: true,
    resultInArg0: true,
  },
  { name: "MulF64",
    argLen: 2,
    commutative: true,
    generic: true,
    resultInArg0: true,
  },
  { name: "DivS8",
    argLen: 2,
    generic: true,
    resultInArg0: true,
  },
  { name: "DivU8",
    argLen: 2,
    generic: true,
    resultInArg0: true,
  },
  { name: "DivS16",
    argLen: 2,
    generic: true,
    resultInArg0: true,
  },
  { name: "DivU16",
    argLen: 2,
    generic: true,
    resultInArg0: true,
  },
  { name: "DivS32",
    argLen: 2,
    generic: true,
    resultInArg0: true,
  },
  { name: "DivU32",
    argLen: 2,
    generic: true,
    resultInArg0: true,
  },
  { name: "DivS64",
    argLen: 2,
    generic: true,
    resultInArg0: true,
  },
  { name: "DivU64",
    argLen: 2,
    generic: true,
    resultInArg0: true,
  },
  { name: "DivF32",
    argLen: 2,
    generic: true,
    resultInArg0: true,
  },
  { name: "DivF64",
    argLen: 2,
    generic: true,
    resultInArg0: true,
  },
  { name: "RemS8",
    argLen: 2,
    generic: true,
    resultInArg0: true,
  },
  { name: "RemU8",
    argLen: 2,
    generic: true,
    resultInArg0: true,
  },
  { name: "RemS16",
    argLen: 2,
    generic: true,
    resultInArg0: true,
  },
  { name: "RemU16",
    argLen: 2,
    generic: true,
    resultInArg0: true,
  },
  { name: "RemS32",
    argLen: 2,
    generic: true,
    resultInArg0: true,
  },
  { name: "RemU32",
    argLen: 2,
    generic: true,
    resultInArg0: true,
  },
  { name: "RemI64",
    argLen: 2,
    generic: true,
    resultInArg0: true,
  },
  { name: "RemU64",
    argLen: 2,
    generic: true,
    resultInArg0: true,
  },
  { name: "AndI8",
    argLen: 2,
    commutative: true,
    generic: true,
    resultInArg0: true,
  },
  { name: "AndI16",
    argLen: 2,
    commutative: true,
    generic: true,
    resultInArg0: true,
  },
  { name: "AndI32",
    argLen: 2,
    commutative: true,
    generic: true,
    resultInArg0: true,
  },
  { name: "AndI64",
    argLen: 2,
    commutative: true,
    generic: true,
    resultInArg0: true,
  },
  { name: "OrI8",
    argLen: 2,
    commutative: true,
    generic: true,
    resultInArg0: true,
  },
  { name: "OrI16",
    argLen: 2,
    commutative: true,
    generic: true,
    resultInArg0: true,
  },
  { name: "OrI32",
    argLen: 2,
    commutative: true,
    generic: true,
    resultInArg0: true,
  },
  { name: "OrI64",
    argLen: 2,
    commutative: true,
    generic: true,
    resultInArg0: true,
  },
  { name: "XorI8",
    argLen: 2,
    commutative: true,
    generic: true,
    resultInArg0: true,
  },
  { name: "XorI16",
    argLen: 2,
    commutative: true,
    generic: true,
    resultInArg0: true,
  },
  { name: "XorI32",
    argLen: 2,
    commutative: true,
    generic: true,
    resultInArg0: true,
  },
  { name: "XorI64",
    argLen: 2,
    commutative: true,
    generic: true,
    resultInArg0: true,
  },
  { name: "ShLI8x8",
    argLen: 2,
    aux: t_bool,
    generic: true,
  },
  { name: "ShLI8x16",
    argLen: 2,
    aux: t_bool,
    generic: true,
  },
  { name: "ShLI8x32",
    argLen: 2,
    aux: t_bool,
    generic: true,
  },
  { name: "ShLI8x64",
    argLen: 2,
    aux: t_bool,
    generic: true,
  },
  { name: "ShLI16x8",
    argLen: 2,
    aux: t_bool,
    generic: true,
  },
  { name: "ShLI16x16",
    argLen: 2,
    aux: t_bool,
    generic: true,
  },
  { name: "ShLI16x32",
    argLen: 2,
    aux: t_bool,
    generic: true,
  },
  { name: "ShLI16x64",
    argLen: 2,
    aux: t_bool,
    generic: true,
  },
  { name: "ShLI32x8",
    argLen: 2,
    aux: t_bool,
    generic: true,
  },
  { name: "ShLI32x16",
    argLen: 2,
    aux: t_bool,
    generic: true,
  },
  { name: "ShLI32x32",
    argLen: 2,
    aux: t_bool,
    generic: true,
  },
  { name: "ShLI32x64",
    argLen: 2,
    aux: t_bool,
    generic: true,
  },
  { name: "ShLI64x8",
    argLen: 2,
    aux: t_bool,
    generic: true,
  },
  { name: "ShLI64x16",
    argLen: 2,
    aux: t_bool,
    generic: true,
  },
  { name: "ShLI64x32",
    argLen: 2,
    aux: t_bool,
    generic: true,
  },
  { name: "ShLI64x64",
    argLen: 2,
    aux: t_bool,
    generic: true,
  },
  { name: "ShRS8x8",
    argLen: 2,
    aux: t_bool,
    generic: true,
  },
  { name: "ShRS8x16",
    argLen: 2,
    aux: t_bool,
    generic: true,
  },
  { name: "ShRS8x32",
    argLen: 2,
    aux: t_bool,
    generic: true,
  },
  { name: "ShRS8x64",
    argLen: 2,
    aux: t_bool,
    generic: true,
  },
  { name: "ShRS16x8",
    argLen: 2,
    aux: t_bool,
    generic: true,
  },
  { name: "ShRS16x16",
    argLen: 2,
    aux: t_bool,
    generic: true,
  },
  { name: "ShRS16x32",
    argLen: 2,
    aux: t_bool,
    generic: true,
  },
  { name: "ShRS16x64",
    argLen: 2,
    aux: t_bool,
    generic: true,
  },
  { name: "ShRS32x8",
    argLen: 2,
    aux: t_bool,
    generic: true,
  },
  { name: "ShRS32x16",
    argLen: 2,
    aux: t_bool,
    generic: true,
  },
  { name: "ShRS32x32",
    argLen: 2,
    aux: t_bool,
    generic: true,
  },
  { name: "ShRS32x64",
    argLen: 2,
    aux: t_bool,
    generic: true,
  },
  { name: "ShRS64x8",
    argLen: 2,
    aux: t_bool,
    generic: true,
  },
  { name: "ShRS64x16",
    argLen: 2,
    aux: t_bool,
    generic: true,
  },
  { name: "ShRS64x32",
    argLen: 2,
    aux: t_bool,
    generic: true,
  },
  { name: "ShRS64x64",
    argLen: 2,
    aux: t_bool,
    generic: true,
  },
  { name: "ShRU8x8",
    argLen: 2,
    aux: t_bool,
    generic: true,
  },
  { name: "ShRU8x16",
    argLen: 2,
    aux: t_bool,
    generic: true,
  },
  { name: "ShRU8x32",
    argLen: 2,
    aux: t_bool,
    generic: true,
  },
  { name: "ShRU8x64",
    argLen: 2,
    aux: t_bool,
    generic: true,
  },
  { name: "ShRU16x8",
    argLen: 2,
    aux: t_bool,
    generic: true,
  },
  { name: "ShRU16x16",
    argLen: 2,
    aux: t_bool,
    generic: true,
  },
  { name: "ShRU16x32",
    argLen: 2,
    aux: t_bool,
    generic: true,
  },
  { name: "ShRU16x64",
    argLen: 2,
    aux: t_bool,
    generic: true,
  },
  { name: "ShRU32x8",
    argLen: 2,
    aux: t_bool,
    generic: true,
  },
  { name: "ShRU32x16",
    argLen: 2,
    aux: t_bool,
    generic: true,
  },
  { name: "ShRU32x32",
    argLen: 2,
    aux: t_bool,
    generic: true,
  },
  { name: "ShRU32x64",
    argLen: 2,
    aux: t_bool,
    generic: true,
  },
  { name: "ShRU64x8",
    argLen: 2,
    aux: t_bool,
    generic: true,
  },
  { name: "ShRU64x16",
    argLen: 2,
    aux: t_bool,
    generic: true,
  },
  { name: "ShRU64x32",
    argLen: 2,
    aux: t_bool,
    generic: true,
  },
  { name: "ShRU64x64",
    argLen: 2,
    aux: t_bool,
    generic: true,
  },
  { name: "EqI8",
    argLen: 2,
    commutative: true,
    generic: true,
    type: t_bool,
  },
  { name: "EqI16",
    argLen: 2,
    commutative: true,
    generic: true,
    type: t_bool,
  },
  { name: "EqI32",
    argLen: 2,
    commutative: true,
    generic: true,
    type: t_bool,
  },
  { name: "EqI64",
    argLen: 2,
    commutative: true,
    generic: true,
    type: t_bool,
  },
  { name: "EqF32",
    argLen: 2,
    commutative: true,
    generic: true,
    type: t_bool,
  },
  { name: "EqF64",
    argLen: 2,
    commutative: true,
    generic: true,
    type: t_bool,
  },
  { name: "NeqI8",
    argLen: 2,
    commutative: true,
    generic: true,
    type: t_bool,
  },
  { name: "NeqI16",
    argLen: 2,
    commutative: true,
    generic: true,
    type: t_bool,
  },
  { name: "NeqI32",
    argLen: 2,
    commutative: true,
    generic: true,
    type: t_bool,
  },
  { name: "NeqI64",
    argLen: 2,
    commutative: true,
    generic: true,
    type: t_bool,
  },
  { name: "NeqF32",
    argLen: 2,
    commutative: true,
    generic: true,
    type: t_bool,
  },
  { name: "NeqF64",
    argLen: 2,
    commutative: true,
    generic: true,
    type: t_bool,
  },
  { name: "LessS8",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "LessU8",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "LessS16",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "LessU16",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "LessS32",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "LessU32",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "LessS64",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "LessU64",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "LessF32",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "LessF64",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "LeqS8",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "LeqU8",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "LeqS16",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "LeqU16",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "LeqS32",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "LeqU32",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "LeqS64",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "LeqU64",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "LeqF32",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "LeqF64",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "GreaterS8",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "GreaterU8",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "GreaterS16",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "GreaterU16",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "GreaterS32",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "GreaterU32",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "GreaterS64",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "GreaterU64",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "GreaterF32",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "GreaterF64",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "GeqS8",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "GeqU8",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "GeqS16",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "GeqU16",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "GeqS32",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "GeqU32",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "GeqS64",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "GeqU64",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "GeqF32",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "GeqF64",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "Not",
    argLen: 1,
    generic: true,
    type: t_bool,
  },
  { name: "MinF32",
    argLen: 2,
    generic: true,
  },
  { name: "MinF64",
    argLen: 2,
    generic: true,
  },
  { name: "MaxF32",
    argLen: 2,
    generic: true,
  },
  { name: "MaxF64",
    argLen: 2,
    generic: true,
  },
  { name: "NegI8",
    argLen: 1,
    generic: true,
  },
  { name: "NegI16",
    argLen: 1,
    generic: true,
  },
  { name: "NegI32",
    argLen: 1,
    generic: true,
  },
  { name: "NegI64",
    argLen: 1,
    generic: true,
  },
  { name: "NegF32",
    argLen: 1,
    generic: true,
  },
  { name: "NegF64",
    argLen: 1,
    generic: true,
  },
  { name: "CtzI8",
    argLen: 1,
    generic: true,
  },
  { name: "CtzI16",
    argLen: 1,
    generic: true,
  },
  { name: "CtzI32",
    argLen: 1,
    generic: true,
  },
  { name: "CtzI64",
    argLen: 1,
    generic: true,
  },
  { name: "CtzI8NonZero",
    argLen: 1,
    generic: true,
  },
  { name: "CtzI16NonZero",
    argLen: 1,
    generic: true,
  },
  { name: "CtzI32NonZero",
    argLen: 1,
    generic: true,
  },
  { name: "CtzI64NonZero",
    argLen: 1,
    generic: true,
  },
  { name: "BitLen8",
    argLen: 1,
    generic: true,
  },
  { name: "BitLen16",
    argLen: 1,
    generic: true,
  },
  { name: "BitLen32",
    argLen: 1,
    generic: true,
  },
  { name: "BitLen64",
    argLen: 1,
    generic: true,
  },
  { name: "PopCountI8",
    argLen: 1,
    generic: true,
  },
  { name: "PopCountI16",
    argLen: 1,
    generic: true,
  },
  { name: "PopCountI32",
    argLen: 1,
    generic: true,
  },
  { name: "PopCountI64",
    argLen: 1,
    generic: true,
  },
  { name: "SqrtF32",
    argLen: 1,
    generic: true,
  },
  { name: "SqrtF64",
    argLen: 1,
    generic: true,
  },
  { name: "FloorF32",
    argLen: 1,
    generic: true,
  },
  { name: "FloorF64",
    argLen: 1,
    generic: true,
  },
  { name: "CeilF32",
    argLen: 1,
    generic: true,
  },
  { name: "CeilF64",
    argLen: 1,
    generic: true,
  },
  { name: "TruncF32",
    argLen: 1,
    generic: true,
  },
  { name: "TruncF64",
    argLen: 1,
    generic: true,
  },
  { name: "RoundF32",
    argLen: 1,
    generic: true,
  },
  { name: "RoundF64",
    argLen: 1,
    generic: true,
  },
  { name: "RoundToEvenF32",
    argLen: 1,
    generic: true,
  },
  { name: "RoundToEvenF64",
    argLen: 1,
    generic: true,
  },
  { name: "AbsF32",
    argLen: 1,
    generic: true,
  },
  { name: "AbsF64",
    argLen: 1,
    generic: true,
  },
  { name: "CopysignF32",
    argLen: 2,
    generic: true,
  },
  { name: "CopysignF64",
    argLen: 2,
    generic: true,
  },
  { name: "SignExtI8to16",
    argLen: 1,
    generic: true,
    type: t_i16,
  },
  { name: "SignExtI8to32",
    argLen: 1,
    generic: true,
    type: t_i32,
  },
  { name: "SignExtI8to64",
    argLen: 1,
    generic: true,
    type: t_i64,
  },
  { name: "SignExtI16to32",
    argLen: 1,
    generic: true,
    type: t_i32,
  },
  { name: "SignExtI16to64",
    argLen: 1,
    generic: true,
    type: t_i64,
  },
  { name: "SignExtI32to64",
    argLen: 1,
    generic: true,
    type: t_i64,
  },
  { name: "ZeroExtI8to16",
    argLen: 1,
    generic: true,
    type: t_u16,
  },
  { name: "ZeroExtI8to32",
    argLen: 1,
    generic: true,
    type: t_u32,
  },
  { name: "ZeroExtI8to64",
    argLen: 1,
    generic: true,
    type: t_u64,
  },
  { name: "ZeroExtI16to32",
    argLen: 1,
    generic: true,
    type: t_u32,
  },
  { name: "ZeroExtI16to64",
    argLen: 1,
    generic: true,
    type: t_u64,
  },
  { name: "ZeroExtI32to64",
    argLen: 1,
    generic: true,
    type: t_u64,
  },
  { name: "TruncI8toBool",
    argLen: 1,
    generic: true,
    type: t_bool,
  },
  { name: "TruncI16toBool",
    argLen: 1,
    generic: true,
    type: t_bool,
  },
  { name: "TruncI32toBool",
    argLen: 1,
    generic: true,
    type: t_bool,
  },
  { name: "TruncI64toBool",
    argLen: 1,
    generic: true,
    type: t_bool,
  },
  { name: "TruncF32toBool",
    argLen: 1,
    generic: true,
    type: t_bool,
  },
  { name: "TruncF64toBool",
    argLen: 1,
    generic: true,
    type: t_bool,
  },
  { name: "TruncI16to8",
    argLen: 1,
    generic: true,
  },
  { name: "TruncI32to8",
    argLen: 1,
    generic: true,
  },
  { name: "TruncI32to16",
    argLen: 1,
    generic: true,
  },
  { name: "TruncI64to8",
    argLen: 1,
    generic: true,
  },
  { name: "TruncI64to16",
    argLen: 1,
    generic: true,
  },
  { name: "TruncI64to32",
    argLen: 1,
    generic: true,
  },
  { name: "ConvI32toF32",
    argLen: 1,
    generic: true,
    type: t_f32,
  },
  { name: "ConvI32toF64",
    argLen: 1,
    generic: true,
    type: t_f64,
  },
  { name: "ConvI64toF32",
    argLen: 1,
    generic: true,
    type: t_f32,
  },
  { name: "ConvI64toF64",
    argLen: 1,
    generic: true,
    type: t_f64,
  },
  { name: "ConvF32toI32",
    argLen: 1,
    generic: true,
    type: t_i32,
  },
  { name: "ConvF32toI64",
    argLen: 1,
    generic: true,
    type: t_i64,
  },
  { name: "ConvF64toI32",
    argLen: 1,
    generic: true,
    type: t_i32,
  },
  { name: "ConvF64toI64",
    argLen: 1,
    generic: true,
    type: t_i64,
  },
  { name: "ConvF32toF64",
    argLen: 1,
    generic: true,
    type: t_f64,
  },
  { name: "ConvF64toF32",
    argLen: 1,
    generic: true,
    type: t_f32,
  },
  { name: "ConvU32toF32",
    argLen: 1,
    generic: true,
    type: t_f32,
  },
  { name: "ConvU32toF64",
    argLen: 1,
    generic: true,
    type: t_f64,
  },
  { name: "ConvF32toU32",
    argLen: 1,
    generic: true,
    type: t_u32,
  },
  { name: "ConvF64toU32",
    argLen: 1,
    generic: true,
    type: t_u32,
  },
  { name: "ConvU64toF32",
    argLen: 1,
    generic: true,
    type: t_f32,
  },
  { name: "ConvU64toF64",
    argLen: 1,
    generic: true,
    type: t_f64,
  },
  { name: "ConvF32toU64",
    argLen: 1,
    generic: true,
    type: t_u64,
  },
  { name: "ConvF64toU64",
    argLen: 1,
    generic: true,
    type: t_u64,
  },
  { name: "AtomicLoad32",
    argLen: 2,
    generic: true,
  },
  { name: "AtomicLoad64",
    argLen: 2,
    generic: true,
  },
  { name: "AtomicLoadPtr",
    argLen: 2,
    generic: true,
  },
  { name: "AtomicStore32",
    argLen: 3,
    generic: true,
    hasSideEffects: true,
  },
  { name: "AtomicStore64",
    argLen: 3,
    generic: true,
    hasSideEffects: true,
  },
  { name: "AtomicStorePtrNoWB",
    argLen: 3,
    generic: true,
    hasSideEffects: true,
    type: t_usize,
  },
  { name: "AtomicExchange32",
    argLen: 3,
    generic: true,
    hasSideEffects: true,
  },
  { name: "AtomicExchange64",
    argLen: 3,
    generic: true,
    hasSideEffects: true,
  },
  { name: "AtomicAdd32",
    argLen: 3,
    generic: true,
    hasSideEffects: true,
  },
  { name: "AtomicAdd64",
    argLen: 3,
    generic: true,
    hasSideEffects: true,
  },
  { name: "AtomicCompareAndSwap32",
    argLen: 4,
    generic: true,
    hasSideEffects: true,
  },
  { name: "AtomicCompareAndSwap64",
    argLen: 4,
    generic: true,
    hasSideEffects: true,
  },
  { name: "AtomicAnd8",
    argLen: 3,
    generic: true,
    hasSideEffects: true,
    type: t_usize,
  },
  { name: "AtomicOr8",
    argLen: 3,
    generic: true,
    hasSideEffects: true,
    type: t_usize,
  },

  // covm
  { name: "MOV32const",
    argLen: 0,
    aux: t_u32,
    reg: {
      inputs: [],
      outputs: [
        {idx:0,regs:u64_ffff /*RegSet { r0 r1 r2 r3 r4 r5 r6 r7 r8 r9 r10 r11 r12 r13 r14 r15 }*/}
      ],
      clobbers: UInt64.ZERO
    },
    rematerializeable: true,
    type: t_u32,
  },
  { name: "ADD32",
    argLen: 2,
    commutative: true,
    reg: {
      inputs: [
        {idx:0,regs:u64_10000ffff /*RegSet { r0 r1 r2 r3 r4 r5 r6 r7 r8 r9 r10 r11 r12 r13 r14 r15 r16 r17 r18 r19 r20 r21 r22 r23 r24 r25 r26 r27 r28 r29 r30 r31 r32 }*/},
        {idx:1,regs:u64_10000ffff /*RegSet { r0 r1 r2 r3 r4 r5 r6 r7 r8 r9 r10 r11 r12 r13 r14 r15 r16 r17 r18 r19 r20 r21 r22 r23 r24 r25 r26 r27 r28 r29 r30 r31 r32 }*/}
      ],
      outputs: [
        {idx:0,regs:u64_ffff /*RegSet { r0 r1 r2 r3 r4 r5 r6 r7 r8 r9 r10 r11 r12 r13 r14 r15 }*/}
      ],
      clobbers: UInt64.ZERO
    },
    type: t_u32,
  },
  { name: "ADD32const",
    argLen: 1,
    aux: t_u32,
    commutative: true,
    reg: {
      inputs: [
        {idx:0,regs:u64_10000ffff /*RegSet { r0 r1 r2 r3 r4 r5 r6 r7 r8 r9 r10 r11 r12 r13 r14 r15 r16 r17 r18 r19 r20 r21 r22 r23 r24 r25 r26 r27 r28 r29 r30 r31 r32 }*/}
      ],
      outputs: [
        {idx:0,regs:u64_ffff /*RegSet { r0 r1 r2 r3 r4 r5 r6 r7 r8 r9 r10 r11 r12 r13 r14 r15 }*/}
      ],
      clobbers: UInt64.ZERO
    },
    type: t_u32,
  },
  { name: "ADD64",
    argLen: 2,
    commutative: true,
    reg: {
      inputs: [
        {idx:0,regs:u64_10000ffff /*RegSet { r0 r1 r2 r3 r4 r5 r6 r7 r8 r9 r10 r11 r12 r13 r14 r15 r16 r17 r18 r19 r20 r21 r22 r23 r24 r25 r26 r27 r28 r29 r30 r31 r32 }*/},
        {idx:1,regs:u64_10000ffff /*RegSet { r0 r1 r2 r3 r4 r5 r6 r7 r8 r9 r10 r11 r12 r13 r14 r15 r16 r17 r18 r19 r20 r21 r22 r23 r24 r25 r26 r27 r28 r29 r30 r31 r32 }*/}
      ],
      outputs: [
        {idx:0,regs:u64_ffff /*RegSet { r0 r1 r2 r3 r4 r5 r6 r7 r8 r9 r10 r11 r12 r13 r14 r15 }*/}
      ],
      clobbers: UInt64.ZERO
    },
    type: t_u64,
  },
  { name: "MUL32",
    argLen: 2,
    commutative: true,
    reg: {
      inputs: [
        {idx:0,regs:u64_10000ffff /*RegSet { r0 r1 r2 r3 r4 r5 r6 r7 r8 r9 r10 r11 r12 r13 r14 r15 r16 r17 r18 r19 r20 r21 r22 r23 r24 r25 r26 r27 r28 r29 r30 r31 r32 }*/},
        {idx:1,regs:u64_10000ffff /*RegSet { r0 r1 r2 r3 r4 r5 r6 r7 r8 r9 r10 r11 r12 r13 r14 r15 r16 r17 r18 r19 r20 r21 r22 r23 r24 r25 r26 r27 r28 r29 r30 r31 r32 }*/}
      ],
      outputs: [
        {idx:0,regs:u64_ffff /*RegSet { r0 r1 r2 r3 r4 r5 r6 r7 r8 r9 r10 r11 r12 r13 r14 r15 }*/}
      ],
      clobbers: UInt64.ZERO
    },
    type: t_u32,
  },
  { name: "ZeroLarge",
    argLen: 2,
    aux: t_u64,
    reg: {
      inputs: [
        {idx:0,regs:u64_ffff /*RegSet { r0 r1 r2 r3 r4 r5 r6 r7 r8 r9 r10 r11 r12 r13 r14 r15 }*/}
      ],
      outputs: [],
      clobbers: UInt64.ZERO
    },
  },
  { name: "LowNilCheck",
    argLen: 2,
    faultOnNilArg0: true,
    nilCheck: true,
    reg: {
      inputs: [
        {idx:0,regs:u64_ffff /*RegSet { r0 r1 r2 r3 r4 r5 r6 r7 r8 r9 r10 r11 r12 r13 r14 r15 }*/}
      ],
      outputs: [],
      clobbers: UInt64.ZERO
    },
  },
]; // ops



// fmtop returns a printable representation of an operator
//
export function fmtop(op :Op) :string {
  let info = opinfo[op]
  assert(info, `unknown op #${op}`)
  return info.name
}
