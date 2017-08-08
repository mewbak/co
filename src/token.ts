import { BTree } from './btree'

export function tokIsKeyword(t :token) :bool {
  return token.keyword_beg < t && t < token.keyword_end
}

export function hasIntValue(t :token) :bool {
  return t == token.CHAR
}

export function hasByteValue(t :token) :bool {
  return (
    (token.literal_beg < t && t < token.literal_end) ||
    t == token.COMMENT
  )
}

export function tokstr(t :token) :string {
  return tokenStrings.get(t) || token[t]
}

// Operator precedences
export enum prec {
  LOWEST, // := ! <-
  OR,     // ||
  AND,    // &&
  CMP,    // == != < <= > >=
  ADD,    // + - | ^
  MUL,    // * / % & &^ << >>
}

export enum token {
  // Special tokens
  ILLEGAL = 0,
  EOF,
  COMMENT,

  literal_beg,
  // Identifiers and basic type literals
  // (these tokens stand for classes of literals)
  IDENT,   // main
  IDENTAT, // @foo, @
  INT,     // 12345
  INT_BIN, // 0b1010
  INT_OCT, // 0o6737
  INT_HEX, // 0xBE3f
  FLOAT,   // 123.45
  RATIO,   // 22/7
  CHAR,    // 'a'
  STRING,  // "abc"
  STRING_PIECE, // "a ${...} b" -- the "a " part (" b" is STRING)
  literal_end,

  // Delimiters
  delim_beg,
  LPAREN,    // (
  LBRACK,    // [
  LBRACE,    // {
  COMMA,     // ,
  PERIOD,    // .
  PERIOD2,   // ..
  ELLIPSIS,  // ...
  RPAREN,    // )
  RBRACK,    // ]
  RBRACE,    // }
  SEMICOLON, // ;
  COLON,     // :
  delim_end,

  // Operators
  operator_beg,
  // prec.LOWEST
  ASSIGN,         // =
  ADD_ASSIGN,     // +=
  SUB_ASSIGN,     // -=
  MUL_ASSIGN,     // *=
  QUO_ASSIGN,     // /=
  REM_ASSIGN,     // %=
  AND_ASSIGN,     // &=
  OR_ASSIGN,      // |=
  XOR_ASSIGN,     // ^=
  SHL_ASSIGN,     // <<=
  SHR_ASSIGN,     // >>=
  AND_NOT_ASSIGN, // &^=
  INC,            // ++
  DEC,            // --
  DEFINE,         // :=
  NOT,            // !
  ARROWL,         // <-
  ARROWR,         // ->
  // prec.OR
  LOR, // ||
  // prec.AND
  LAND, // &&
  // prec.CMP
  EQL, // ==
  NEQ, // !=
  LSS, // <
  LEQ, // <=
  GTR, // >
  GEQ, // >=
  // prec.ADD
  ADD, // +
  SUB, // -
  OR,  // |
  XOR, // ^
  // prec.MUL
  MUL,     // *
  QUO,     // /
  REM,     // %
  AND,     // &
  AND_NOT, // &^
  SHL,     // <<
  SHR,     // >>
  operator_end,

  // Keywords
  keyword_beg,
  BREAK,
  CASE,
  CHAN,
  CONST,
  CONTINUE,
  DEFAULT,
  DEFER,
  ELSE,
  ENUM,
  FALLTHROUGH,
  FOR,
  FUNC,
  GO,
  GOTO,
  IF,
  IMPORT,
  INTERFACE,
  MAP,
  PACKAGE,
  RANGE,
  RETURN,
  SELECT,
  STRUCT,
  SWITCH,
  TYPE,
  VAR,
  keyword_end
} // enum T


// Keywords
// When you add, change or remove a keyword, make sure to run gen-btree.js
// with the changes and update the code below.
// Keyword token names should be the UPPER-CASE version of the actual keyword
// name. This convention is used to populate tokenStrings.


const tokenStrings = new Map<token, string>([
  [token.IDENTAT, "@"],

  [token.ADD, "+"],
  [token.SUB, "-"],
  [token.MUL, "*"],
  [token.QUO, "/"],
  [token.REM, "%"],

  [token.AND,     "&"],
  [token.OR,      "|"],
  [token.XOR,     "^"],
  [token.SHL,     "<<"],
  [token.SHR,     ">>"],
  [token.AND_NOT, "&^"],

  [token.ADD_ASSIGN, "+="],
  [token.SUB_ASSIGN, "-="],
  [token.MUL_ASSIGN, "*="],
  [token.QUO_ASSIGN, "/="],
  [token.REM_ASSIGN, "%="],

  [token.AND_ASSIGN,     "&="],
  [token.OR_ASSIGN,      "|="],
  [token.XOR_ASSIGN,     "^="],
  [token.SHL_ASSIGN,     "<<="],
  [token.SHR_ASSIGN,     ">>="],
  [token.AND_NOT_ASSIGN, "&^="],

  [token.LAND,   "&&"],
  [token.LOR,    "||"],
  [token.ARROWL, "<-"],
  [token.ARROWR, "->"],
  [token.INC,    "++"],
  [token.DEC,    "--"],

  [token.EQL,    "=="],
  [token.LSS,    "<"],
  [token.GTR,    ">"],
  [token.ASSIGN, "="],
  [token.NOT,    "!"],

  [token.NEQ,      "!="],
  [token.LEQ,      "<="],
  [token.GEQ,      ">="],
  [token.DEFINE,   ":="],
  [token.ELLIPSIS, "..."],
  [token.PERIOD2,  ".."],

  [token.LPAREN, "("],
  [token.LBRACK, "["],
  [token.LBRACE, "{"],
  [token.COMMA,  ","],
  [token.PERIOD, "."],

  [token.RPAREN,    ")"],
  [token.RBRACK,    "]"],
  [token.RBRACE,    "}"],
  [token.SEMICOLON, ";"],
  [token.COLON,     ":"],
]) // tokenStrings

for (let i = token.keyword_beg+1; i < token.keyword_end; ++i) {
  const t = token[i] as string
  tokenStrings.set((token as any)[t] as token, t.toLowerCase())
}

// generated by gen-btree.js
const cdat = new Uint8Array([
  103,111,100,101,102,97,117,108,116,99,97,115,101,98,114,101,97,107,99,104,97
  ,110,99,111,110,115,116,99,111,110,116,105,110,117,101,101,110,117,109,100
  ,101,102,101,114,101,108,115,101,102,97,108,108,116,104,114,111,117,103,104
  ,102,111,114,102,117,110,99,112,97,99,107,97,103,101,105,102,103,111,116,111
  ,105,109,112,111,114,116,105,110,116,101,114,102,97,99,101,109,97,112,115
  ,101,108,101,99,116,114,97,110,103,101,114,101,116,117,114,110,115,119,105
  ,116,99,104,115,116,114,117,99,116,116,121,112,101,118,97,114]);
const keywords = new BTree<token>(
  { k: cdat.subarray(0,2) /*go*/, v: token.GO,
    L:{ k: cdat.subarray(2,9) /*default*/, v: token.DEFAULT,
      L:{ k: cdat.subarray(9,13) /*case*/, v: token.CASE,
        L:{ k: cdat.subarray(13,18) /*break*/, v: token.BREAK},
        R:{ k: cdat.subarray(18,22) /*chan*/, v: token.CHAN,
          R:{ k: cdat.subarray(22,27) /*const*/, v: token.CONST,
            R:{ k: cdat.subarray(27,35) /*continue*/, v: token.CONTINUE}}}},
      R:{ k: cdat.subarray(35,39) /*enum*/, v: token.ENUM,
        L:{ k: cdat.subarray(39,44) /*defer*/, v: token.DEFER,
          R:{ k: cdat.subarray(44,48) /*else*/, v: token.ELSE}},
        R:{ k: cdat.subarray(48,59) /*fallthrough*/, v: token.FALLTHROUGH,
          R:{ k: cdat.subarray(59,62) /*for*/, v: token.FOR,
            R:{ k: cdat.subarray(62,66) /*func*/, v: token.FUNC}}}}},
    R:{ k: cdat.subarray(66,73) /*package*/, v: token.PACKAGE,
      L:{ k: cdat.subarray(73,75) /*if*/, v: token.IF,
        L:{ k: cdat.subarray(75,79) /*goto*/, v: token.GOTO},
        R:{ k: cdat.subarray(79,85) /*import*/, v: token.IMPORT,
          R:{ k: cdat.subarray(85,94) /*interface*/, v: token.INTERFACE,
            R:{ k: cdat.subarray(94,97) /*map*/, v: token.MAP}}}},
      R:{ k: cdat.subarray(97,103) /*select*/, v: token.SELECT,
        L:{ k: cdat.subarray(103,108) /*range*/, v: token.RANGE,
          R:{ k: cdat.subarray(108,114) /*return*/, v: token.RETURN}},
        R:{ k: cdat.subarray(114,120) /*switch*/, v: token.SWITCH,
          L:{ k: cdat.subarray(120,126) /*struct*/, v: token.STRUCT},
          R:{ k: cdat.subarray(126,130) /*type*/, v: token.TYPE,
            R:{ k: cdat.subarray(130,133) /*var*/, v: token.VAR}}}}}}
)

// lookupKeyword maps an identifier to its keyword token or IDENT
// (if not a keyword).
//
export function lookupKeyword(ident :ArrayLike<byte>) :token {
  return keywords.get(ident) || token.IDENT
}
