(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/array/from"), __esModule: true };
},{"core-js/library/fn/array/from":18}],2:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/get-iterator"), __esModule: true };
},{"core-js/library/fn/get-iterator":19}],3:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/assign"), __esModule: true };
},{"core-js/library/fn/object/assign":20}],4:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/create"), __esModule: true };
},{"core-js/library/fn/object/create":21}],5:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/define-property"), __esModule: true };
},{"core-js/library/fn/object/define-property":22}],6:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/freeze"), __esModule: true };
},{"core-js/library/fn/object/freeze":23}],7:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/get-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/get-prototype-of":24}],8:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/set-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/set-prototype-of":25}],9:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/promise"), __esModule: true };
},{"core-js/library/fn/promise":26}],10:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol"), __esModule: true };
},{"core-js/library/fn/symbol":27}],11:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol/iterator"), __esModule: true };
},{"core-js/library/fn/symbol/iterator":28}],12:[function(require,module,exports){
"use strict";

exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
},{}],13:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
},{"babel-runtime/core-js/object/define-property":5}],14:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _setPrototypeOf = require("babel-runtime/core-js/object/set-prototype-of");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = require("babel-runtime/core-js/object/create");

var _create2 = _interopRequireDefault(_create);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};
},{"babel-runtime/core-js/object/create":4,"babel-runtime/core-js/object/set-prototype-of":8,"babel-runtime/helpers/typeof":17}],15:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};
},{"babel-runtime/helpers/typeof":17}],16:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _from = require("babel-runtime/core-js/array/from");

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};
},{"babel-runtime/core-js/array/from":1}],17:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _iterator = require("babel-runtime/core-js/symbol/iterator");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = require("babel-runtime/core-js/symbol");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};
},{"babel-runtime/core-js/symbol":10,"babel-runtime/core-js/symbol/iterator":11}],18:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/es6.array.from');
module.exports = require('../../modules/_core').Array.from;
},{"../../modules/_core":36,"../../modules/es6.array.from":100,"../../modules/es6.string.iterator":110}],19:[function(require,module,exports){
require('../modules/web.dom.iterable');
require('../modules/es6.string.iterator');
module.exports = require('../modules/core.get-iterator');
},{"../modules/core.get-iterator":99,"../modules/es6.string.iterator":110,"../modules/web.dom.iterable":112}],20:[function(require,module,exports){
require('../../modules/es6.object.assign');
module.exports = require('../../modules/_core').Object.assign;
},{"../../modules/_core":36,"../../modules/es6.object.assign":102}],21:[function(require,module,exports){
require('../../modules/es6.object.create');
var $Object = require('../../modules/_core').Object;
module.exports = function create(P, D){
  return $Object.create(P, D);
};
},{"../../modules/_core":36,"../../modules/es6.object.create":103}],22:[function(require,module,exports){
require('../../modules/es6.object.define-property');
var $Object = require('../../modules/_core').Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};
},{"../../modules/_core":36,"../../modules/es6.object.define-property":104}],23:[function(require,module,exports){
require('../../modules/es6.object.freeze');
module.exports = require('../../modules/_core').Object.freeze;
},{"../../modules/_core":36,"../../modules/es6.object.freeze":105}],24:[function(require,module,exports){
require('../../modules/es6.object.get-prototype-of');
module.exports = require('../../modules/_core').Object.getPrototypeOf;
},{"../../modules/_core":36,"../../modules/es6.object.get-prototype-of":106}],25:[function(require,module,exports){
require('../../modules/es6.object.set-prototype-of');
module.exports = require('../../modules/_core').Object.setPrototypeOf;
},{"../../modules/_core":36,"../../modules/es6.object.set-prototype-of":107}],26:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/es6.string.iterator');
require('../modules/web.dom.iterable');
require('../modules/es6.promise');
module.exports = require('../modules/_core').Promise;
},{"../modules/_core":36,"../modules/es6.object.to-string":108,"../modules/es6.promise":109,"../modules/es6.string.iterator":110,"../modules/web.dom.iterable":112}],27:[function(require,module,exports){
require('../../modules/es6.symbol');
require('../../modules/es6.object.to-string');
module.exports = require('../../modules/_core').Symbol;
},{"../../modules/_core":36,"../../modules/es6.object.to-string":108,"../../modules/es6.symbol":111}],28:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/web.dom.iterable');
module.exports = require('../../modules/_wks')('iterator');
},{"../../modules/_wks":97,"../../modules/es6.string.iterator":110,"../../modules/web.dom.iterable":112}],29:[function(require,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],30:[function(require,module,exports){
module.exports = function(){ /* empty */ };
},{}],31:[function(require,module,exports){
module.exports = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};
},{}],32:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"./_is-object":55}],33:[function(require,module,exports){
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = require('./_to-iobject')
  , toLength  = require('./_to-length')
  , toIndex   = require('./_to-index');
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index;
    } return !IS_INCLUDES && -1;
  };
};
},{"./_to-index":90,"./_to-iobject":92,"./_to-length":93}],34:[function(require,module,exports){
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = require('./_cof')
  , TAG = require('./_wks')('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};
},{"./_cof":35,"./_wks":97}],35:[function(require,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],36:[function(require,module,exports){
var core = module.exports = {version: '2.1.3'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],37:[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./_a-function');
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};
},{"./_a-function":29}],38:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],39:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_fails":44}],40:[function(require,module,exports){
var isObject = require('./_is-object')
  , document = require('./_global').document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
},{"./_global":46,"./_is-object":55}],41:[function(require,module,exports){
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');
},{}],42:[function(require,module,exports){
// all enumerable object keys, includes symbols
var getKeys = require('./_object-keys')
  , gOPS    = require('./_object-gops')
  , pIE     = require('./_object-pie');
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};
},{"./_object-gops":73,"./_object-keys":76,"./_object-pie":77}],43:[function(require,module,exports){
var global    = require('./_global')
  , core      = require('./_core')
  , ctx       = require('./_ctx')
  , hide      = require('./_hide')
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;
},{"./_core":36,"./_ctx":37,"./_global":46,"./_hide":48}],44:[function(require,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],45:[function(require,module,exports){
var ctx         = require('./_ctx')
  , call        = require('./_iter-call')
  , isArrayIter = require('./_is-array-iter')
  , anObject    = require('./_an-object')
  , toLength    = require('./_to-length')
  , getIterFn   = require('./core.get-iterator-method');
module.exports = function(iterable, entries, fn, that, ITERATOR){
  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator;
  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
    entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    call(iterator, f, step.value, entries);
  }
};
},{"./_an-object":32,"./_ctx":37,"./_is-array-iter":53,"./_iter-call":56,"./_to-length":93,"./core.get-iterator-method":98}],46:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],47:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
},{}],48:[function(require,module,exports){
var dP         = require('./_object-dp')
  , createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
},{"./_descriptors":39,"./_object-dp":68,"./_property-desc":79}],49:[function(require,module,exports){
module.exports = require('./_global').document && document.documentElement;
},{"./_global":46}],50:[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function(){
  return Object.defineProperty(require('./_dom-create')('div'), 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_descriptors":39,"./_dom-create":40,"./_fails":44}],51:[function(require,module,exports){
// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return              fn.apply(that, args);
};
},{}],52:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
},{"./_cof":35}],53:[function(require,module,exports){
// check on default Array iterator
var Iterators  = require('./_iterators')
  , ITERATOR   = require('./_wks')('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};
},{"./_iterators":61,"./_wks":97}],54:[function(require,module,exports){
// 7.2.2 IsArray(argument)
var cof = require('./_cof');
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};
},{"./_cof":35}],55:[function(require,module,exports){
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
},{}],56:[function(require,module,exports){
// call something on iterator step with safe closing on error
var anObject = require('./_an-object');
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};
},{"./_an-object":32}],57:[function(require,module,exports){
'use strict';
var create         = require('./_object-create')
  , descriptor     = require('./_property-desc')
  , setToStringTag = require('./_set-to-string-tag')
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require('./_hide')(IteratorPrototype, require('./_wks')('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};
},{"./_hide":48,"./_object-create":67,"./_property-desc":79,"./_set-to-string-tag":84,"./_wks":97}],58:[function(require,module,exports){
'use strict';
var LIBRARY        = require('./_library')
  , $export        = require('./_export')
  , redefine       = require('./_redefine')
  , hide           = require('./_hide')
  , has            = require('./_has')
  , Iterators      = require('./_iterators')
  , $iterCreate    = require('./_iter-create')
  , setToStringTag = require('./_set-to-string-tag')
  , getPrototypeOf = require('./_object-gpo')
  , ITERATOR       = require('./_wks')('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};
},{"./_export":43,"./_has":47,"./_hide":48,"./_iter-create":57,"./_iterators":61,"./_library":63,"./_object-gpo":74,"./_redefine":81,"./_set-to-string-tag":84,"./_wks":97}],59:[function(require,module,exports){
var ITERATOR     = require('./_wks')('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ safe = true; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};
},{"./_wks":97}],60:[function(require,module,exports){
module.exports = function(done, value){
  return {value: value, done: !!done};
};
},{}],61:[function(require,module,exports){
module.exports = {};
},{}],62:[function(require,module,exports){
var getKeys   = require('./_object-keys')
  , toIObject = require('./_to-iobject');
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};
},{"./_object-keys":76,"./_to-iobject":92}],63:[function(require,module,exports){
module.exports = true;
},{}],64:[function(require,module,exports){
var META     = require('./_uid')('meta')
  , isObject = require('./_is-object')
  , has      = require('./_has')
  , setDesc  = require('./_object-dp').f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !require('./_fails')(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};
},{"./_fails":44,"./_has":47,"./_is-object":55,"./_object-dp":68,"./_uid":96}],65:[function(require,module,exports){
var global    = require('./_global')
  , macrotask = require('./_task').set
  , Observer  = global.MutationObserver || global.WebKitMutationObserver
  , process   = global.process
  , Promise   = global.Promise
  , isNode    = require('./_cof')(process) == 'process'
  , head, last, notify;

var flush = function(){
  var parent, domain, fn;
  if(isNode && (parent = process.domain)){
    process.domain = null;
    parent.exit();
  }
  while(head){
    domain = head.domain;
    fn     = head.fn;
    if(domain)domain.enter();
    fn(); // <- currently we use it only for Promise - try / catch not required
    if(domain)domain.exit();
    head = head.next;
  } last = undefined;
  if(parent)parent.enter();
};

// Node.js
if(isNode){
  notify = function(){
    process.nextTick(flush);
  };
// browsers with MutationObserver
} else if(Observer){
  var toggle = 1
    , node   = document.createTextNode('');
  new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
  notify = function(){
    node.data = toggle = -toggle;
  };
// environments with maybe non-completely correct, but existent Promise
} else if(Promise && Promise.resolve){
  notify = function(){
    Promise.resolve().then(flush);
  };
// for other environments - macrotask based on:
// - setImmediate
// - MessageChannel
// - window.postMessag
// - onreadystatechange
// - setTimeout
} else {
  notify = function(){
    // strange IE + webpack dev server bug - use .call(global)
    macrotask.call(global, flush);
  };
}

module.exports = function(fn){
  var task = {fn: fn, next: undefined, domain: isNode && process.domain};
  if(last)last.next = task;
  if(!head){
    head = task;
    notify();
  } last = task;
};
},{"./_cof":35,"./_global":46,"./_task":89}],66:[function(require,module,exports){
'use strict';
// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = require('./_object-keys')
  , gOPS     = require('./_object-gops')
  , pIE      = require('./_object-pie')
  , toObject = require('./_to-object')
  , IObject  = require('./_iobject');

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = require('./_fails')(function(){
  var a = Object.assign
    , A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  }
  return T;
} : Object.assign;
},{"./_fails":44,"./_iobject":52,"./_object-gops":73,"./_object-keys":76,"./_object-pie":77,"./_to-object":94}],67:[function(require,module,exports){
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = require('./_an-object')
  , dPs         = require('./_object-dps')
  , enumBugKeys = require('./_enum-bug-keys')
  , IE_PROTO    = require('./_shared-key')('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = require('./_dom-create')('iframe')
    , i      = enumBugKeys.length
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  require('./_html').appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write('<script>document.F=Object</script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};
},{"./_an-object":32,"./_dom-create":40,"./_enum-bug-keys":41,"./_html":49,"./_object-dps":69,"./_shared-key":85}],68:[function(require,module,exports){
var anObject       = require('./_an-object')
  , IE8_DOM_DEFINE = require('./_ie8-dom-define')
  , toPrimitive    = require('./_to-primitive')
  , dP             = Object.defineProperty;

exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};
},{"./_an-object":32,"./_descriptors":39,"./_ie8-dom-define":50,"./_to-primitive":95}],69:[function(require,module,exports){
var dP       = require('./_object-dp')
  , anObject = require('./_an-object')
  , getKeys  = require('./_object-keys');

module.exports = require('./_descriptors') ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};
},{"./_an-object":32,"./_descriptors":39,"./_object-dp":68,"./_object-keys":76}],70:[function(require,module,exports){
var pIE            = require('./_object-pie')
  , createDesc     = require('./_property-desc')
  , toIObject      = require('./_to-iobject')
  , toPrimitive    = require('./_to-primitive')
  , has            = require('./_has')
  , IE8_DOM_DEFINE = require('./_ie8-dom-define')
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = require('./_descriptors') ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};
},{"./_descriptors":39,"./_has":47,"./_ie8-dom-define":50,"./_object-pie":77,"./_property-desc":79,"./_to-iobject":92,"./_to-primitive":95}],71:[function(require,module,exports){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = require('./_to-iobject')
  , gOPN      = require('./_object-gopn').f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN.f(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};
},{"./_object-gopn":72,"./_to-iobject":92}],72:[function(require,module,exports){
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = require('./_object-keys-internal')
  , hiddenKeys = require('./_enum-bug-keys').concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};
},{"./_enum-bug-keys":41,"./_object-keys-internal":75}],73:[function(require,module,exports){
exports.f = Object.getOwnPropertySymbols;
},{}],74:[function(require,module,exports){
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = require('./_has')
  , toObject    = require('./_to-object')
  , IE_PROTO    = require('./_shared-key')('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};
},{"./_has":47,"./_shared-key":85,"./_to-object":94}],75:[function(require,module,exports){
var has          = require('./_has')
  , toIObject    = require('./_to-iobject')
  , arrayIndexOf = require('./_array-includes')(false)
  , IE_PROTO     = require('./_shared-key')('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};
},{"./_array-includes":33,"./_has":47,"./_shared-key":85,"./_to-iobject":92}],76:[function(require,module,exports){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = require('./_object-keys-internal')
  , enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};
},{"./_enum-bug-keys":41,"./_object-keys-internal":75}],77:[function(require,module,exports){
exports.f = {}.propertyIsEnumerable;
},{}],78:[function(require,module,exports){
// most Object methods by ES6 should accept primitives
var $export = require('./_export')
  , core    = require('./_core')
  , fails   = require('./_fails');
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};
},{"./_core":36,"./_export":43,"./_fails":44}],79:[function(require,module,exports){
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
},{}],80:[function(require,module,exports){
var hide = require('./_hide');
module.exports = function(target, src, safe){
  for(var key in src){
    if(safe && target[key])target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};
},{"./_hide":48}],81:[function(require,module,exports){
module.exports = require('./_hide');
},{"./_hide":48}],82:[function(require,module,exports){
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = require('./_is-object')
  , anObject = require('./_an-object');
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = require('./_ctx')(Function.call, require('./_object-gopd').f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch(e){ buggy = true; }
      return function setPrototypeOf(O, proto){
        check(O, proto);
        if(buggy)O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};
},{"./_an-object":32,"./_ctx":37,"./_is-object":55,"./_object-gopd":70}],83:[function(require,module,exports){
'use strict';
var global      = require('./_global')
  , core        = require('./_core')
  , dP          = require('./_object-dp')
  , DESCRIPTORS = require('./_descriptors')
  , SPECIES     = require('./_wks')('species');

module.exports = function(KEY){
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};
},{"./_core":36,"./_descriptors":39,"./_global":46,"./_object-dp":68,"./_wks":97}],84:[function(require,module,exports){
var def = require('./_object-dp').f
  , has = require('./_has')
  , TAG = require('./_wks')('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};
},{"./_has":47,"./_object-dp":68,"./_wks":97}],85:[function(require,module,exports){
var shared = require('./_shared')('keys')
  , uid    = require('./_uid');
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};
},{"./_shared":86,"./_uid":96}],86:[function(require,module,exports){
var global = require('./_global')
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
},{"./_global":46}],87:[function(require,module,exports){
// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject  = require('./_an-object')
  , aFunction = require('./_a-function')
  , SPECIES   = require('./_wks')('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};
},{"./_a-function":29,"./_an-object":32,"./_wks":97}],88:[function(require,module,exports){
var toInteger = require('./_to-integer')
  , defined   = require('./_defined');
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};
},{"./_defined":38,"./_to-integer":91}],89:[function(require,module,exports){
var ctx                = require('./_ctx')
  , invoke             = require('./_invoke')
  , html               = require('./_html')
  , cel                = require('./_dom-create')
  , global             = require('./_global')
  , process            = global.process
  , setTask            = global.setImmediate
  , clearTask          = global.clearImmediate
  , MessageChannel     = global.MessageChannel
  , counter            = 0
  , queue              = {}
  , ONREADYSTATECHANGE = 'onreadystatechange'
  , defer, channel, port;
var run = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function(event){
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var args = [], i = 1;
    while(arguments.length > i)args.push(arguments[i++]);
    queue[++counter] = function(){
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(require('./_cof')(process) == 'process'){
    defer = function(id){
      process.nextTick(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
    defer = function(id){
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set:   setTask,
  clear: clearTask
};
},{"./_cof":35,"./_ctx":37,"./_dom-create":40,"./_global":46,"./_html":49,"./_invoke":51}],90:[function(require,module,exports){
var toInteger = require('./_to-integer')
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};
},{"./_to-integer":91}],91:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
},{}],92:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject')
  , defined = require('./_defined');
module.exports = function(it){
  return IObject(defined(it));
};
},{"./_defined":38,"./_iobject":52}],93:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./_to-integer')
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};
},{"./_to-integer":91}],94:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function(it){
  return Object(defined(it));
};
},{"./_defined":38}],95:[function(require,module,exports){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require('./_is-object');
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};
},{"./_is-object":55}],96:[function(require,module,exports){
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
},{}],97:[function(require,module,exports){
var store      = require('./_shared')('wks')
  , uid        = require('./_uid')
  , Symbol     = require('./_global').Symbol
  , USE_SYMBOL = typeof Symbol == 'function';
module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};
},{"./_global":46,"./_shared":86,"./_uid":96}],98:[function(require,module,exports){
var classof   = require('./_classof')
  , ITERATOR  = require('./_wks')('iterator')
  , Iterators = require('./_iterators');
module.exports = require('./_core').getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};
},{"./_classof":34,"./_core":36,"./_iterators":61,"./_wks":97}],99:[function(require,module,exports){
var anObject = require('./_an-object')
  , get      = require('./core.get-iterator-method');
module.exports = require('./_core').getIterator = function(it){
  var iterFn = get(it);
  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};
},{"./_an-object":32,"./_core":36,"./core.get-iterator-method":98}],100:[function(require,module,exports){
'use strict';
var ctx         = require('./_ctx')
  , $export     = require('./_export')
  , toObject    = require('./_to-object')
  , call        = require('./_iter-call')
  , isArrayIter = require('./_is-array-iter')
  , toLength    = require('./_to-length')
  , getIterFn   = require('./core.get-iterator-method');
$export($export.S + $export.F * !require('./_iter-detect')(function(iter){ Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
    var O       = toObject(arrayLike)
      , C       = typeof this == 'function' ? this : Array
      , aLen    = arguments.length
      , mapfn   = aLen > 1 ? arguments[1] : undefined
      , mapping = mapfn !== undefined
      , index   = 0
      , iterFn  = getIterFn(O)
      , length, result, step, iterator;
    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
        result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
      }
    } else {
      length = toLength(O.length);
      for(result = new C(length); length > index; index++){
        result[index] = mapping ? mapfn(O[index], index) : O[index];
      }
    }
    result.length = index;
    return result;
  }
});

},{"./_ctx":37,"./_export":43,"./_is-array-iter":53,"./_iter-call":56,"./_iter-detect":59,"./_to-length":93,"./_to-object":94,"./core.get-iterator-method":98}],101:[function(require,module,exports){
'use strict';
var addToUnscopables = require('./_add-to-unscopables')
  , step             = require('./_iter-step')
  , Iterators        = require('./_iterators')
  , toIObject        = require('./_to-iobject');

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = require('./_iter-define')(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');
},{"./_add-to-unscopables":30,"./_iter-define":58,"./_iter-step":60,"./_iterators":61,"./_to-iobject":92}],102:[function(require,module,exports){
// 19.1.3.1 Object.assign(target, source)
var $export = require('./_export');

$export($export.S + $export.F, 'Object', {assign: require('./_object-assign')});
},{"./_export":43,"./_object-assign":66}],103:[function(require,module,exports){
var $export = require('./_export')
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', {create: require('./_object-create')});
},{"./_export":43,"./_object-create":67}],104:[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !require('./_descriptors'), 'Object', {defineProperty: require('./_object-dp').f});
},{"./_descriptors":39,"./_export":43,"./_object-dp":68}],105:[function(require,module,exports){
// 19.1.2.5 Object.freeze(O)
var isObject = require('./_is-object')
  , meta     = require('./_meta').onFreeze;

require('./_object-sap')('freeze', function($freeze){
  return function freeze(it){
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});
},{"./_is-object":55,"./_meta":64,"./_object-sap":78}],106:[function(require,module,exports){
// 19.1.2.9 Object.getPrototypeOf(O)
var toObject        = require('./_to-object')
  , $getPrototypeOf = require('./_object-gpo');

require('./_object-sap')('getPrototypeOf', function(){
  return function getPrototypeOf(it){
    return $getPrototypeOf(toObject(it));
  };
});
},{"./_object-gpo":74,"./_object-sap":78,"./_to-object":94}],107:[function(require,module,exports){
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = require('./_export');
$export($export.S, 'Object', {setPrototypeOf: require('./_set-proto').set});
},{"./_export":43,"./_set-proto":82}],108:[function(require,module,exports){

},{}],109:[function(require,module,exports){
'use strict';
var LIBRARY            = require('./_library')
  , global             = require('./_global')
  , ctx                = require('./_ctx')
  , classof            = require('./_classof')
  , $export            = require('./_export')
  , isObject           = require('./_is-object')
  , anObject           = require('./_an-object')
  , aFunction          = require('./_a-function')
  , anInstance         = require('./_an-instance')
  , forOf              = require('./_for-of')
  , setProto           = require('./_set-proto').set
  , speciesConstructor = require('./_species-constructor')
  , task               = require('./_task').set
  , microtask          = require('./_microtask')
  , PROMISE            = 'Promise'
  , TypeError          = global.TypeError
  , process            = global.process
  , $Promise           = global[PROMISE]
  , isNode             = classof(process) == 'process'
  , empty              = function(){ /* empty */ }
  , Internal, GenericPromiseCapability, Wrapper;

var USE_NATIVE = !!function(){
  try {
    // correct subclassing with @@species support
    var promise     = $Promise.resolve(1)
      , FakePromise = (promise.constructor = {})[require('./_wks')('species')] = function(exec){ exec(empty, empty); };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch(e){ /* empty */ }
}();

// helpers
var sameConstructor = function(a, b){
  // with library wrapper special case
  return a === b || a === $Promise && b === Wrapper;
};
var isThenable = function(it){
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var newPromiseCapability = function(C){
  return sameConstructor($Promise, C)
    ? new PromiseCapability(C)
    : new GenericPromiseCapability(C);
};
var PromiseCapability = GenericPromiseCapability = function(C){
  var resolve, reject;
  this.promise = new C(function($$resolve, $$reject){
    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject  = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject  = aFunction(reject);
};
var perform = function(exec){
  try {
    exec();
  } catch(e){
    return {error: e};
  }
};
var notify = function(promise, isReject){
  if(promise._n)return;
  promise._n = true;
  var chain = promise._c;
  microtask(function(){
    var value = promise._v
      , ok    = promise._s == 1
      , i     = 0;
    var run = function(reaction){
      var handler = ok ? reaction.ok : reaction.fail
        , resolve = reaction.resolve
        , reject  = reaction.reject
        , result, then;
      try {
        if(handler){
          if(!ok){
            if(promise._h == 2)onHandleUnhandled(promise);
            promise._h = 1;
          }
          result = handler === true ? value : handler(value);
          if(result === reaction.promise){
            reject(TypeError('Promise-chain cycle'));
          } else if(then = isThenable(result)){
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch(e){
        reject(e);
      }
    };
    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if(isReject && !promise._h)onUnhandled(promise);
  });
};
var onUnhandled = function(promise){
  task.call(global, function(){
    var value = promise._v
      , abrupt, handler, console;
    if(isUnhandled(promise)){
      abrupt = perform(function(){
        if(isNode){
          process.emit('unhandledRejection', value, promise);
        } else if(handler = global.onunhandledrejection){
          handler({promise: promise, reason: value});
        } else if((console = global.console) && console.error){
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if(abrupt)throw abrupt.error;
  });
};
var isUnhandled = function(promise){
  if(promise._h == 1)return false;
  var chain = promise._a || promise._c
    , i     = 0
    , reaction;
  while(chain.length > i){
    reaction = chain[i++];
    if(reaction.fail || !isUnhandled(reaction.promise))return false;
  } return true;
};
var onHandleUnhandled = function(promise){
  task.call(global, function(){
    var handler;
    if(isNode){
      process.emit('rejectionHandled', promise);
    } else if(handler = global.onrejectionhandled){
      handler({promise: promise, reason: promise._v});
    }
  });
};
var $reject = function(value){
  var promise = this;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if(!promise._a)promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function(value){
  var promise = this
    , then;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if(promise === value)throw TypeError("Promise can't be resolved itself");
    if(then = isThenable(value)){
      microtask(function(){
        var wrapper = {_w: promise, _d: false}; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch(e){
    $reject.call({_w: promise, _d: false}, e); // wrap
  }
};

// constructor polyfill
if(!USE_NATIVE){
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor){
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch(err){
      $reject.call(this, err);
    }
  };
  Internal = function Promise(executor){
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = require('./_redefine-all')($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok   = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      this._c.push(reaction);
      if(this._a)this._a.push(reaction);
      if(this._s)notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
  PromiseCapability = function(){
    var promise  = new Internal;
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject  = ctx($reject, promise, 1);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
require('./_set-to-string-tag')($Promise, PROMISE);
require('./_set-species')(PROMISE);
Wrapper = require('./_core')[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    var capability = newPromiseCapability(this)
      , $$reject   = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
    var capability = newPromiseCapability(this)
      , $$resolve  = capability.resolve;
    $$resolve(x);
    return capability.promise;
  }
});
$export($export.S + $export.F * !(USE_NATIVE && require('./_iter-detect')(function(iter){
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , resolve    = capability.resolve
      , reject     = capability.reject;
    var abrupt = perform(function(){
      var values    = []
        , index     = 0
        , remaining = 1;
      forOf(iterable, false, function(promise){
        var $index        = index++
          , alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function(value){
          if(alreadyCalled)return;
          alreadyCalled  = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , reject     = capability.reject;
    var abrupt = perform(function(){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  }
});
},{"./_a-function":29,"./_an-instance":31,"./_an-object":32,"./_classof":34,"./_core":36,"./_ctx":37,"./_export":43,"./_for-of":45,"./_global":46,"./_is-object":55,"./_iter-detect":59,"./_library":63,"./_microtask":65,"./_redefine-all":80,"./_set-proto":82,"./_set-species":83,"./_set-to-string-tag":84,"./_species-constructor":87,"./_task":89,"./_wks":97}],110:[function(require,module,exports){
'use strict';
var $at  = require('./_string-at')(true);

// 21.1.3.27 String.prototype[@@iterator]()
require('./_iter-define')(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});
},{"./_iter-define":58,"./_string-at":88}],111:[function(require,module,exports){
'use strict';
// ECMAScript 6 symbols shim
var global         = require('./_global')
  , core           = require('./_core')
  , has            = require('./_has')
  , DESCRIPTORS    = require('./_descriptors')
  , $export        = require('./_export')
  , redefine       = require('./_redefine')
  , META           = require('./_meta').KEY
  , $fails         = require('./_fails')
  , shared         = require('./_shared')
  , setToStringTag = require('./_set-to-string-tag')
  , uid            = require('./_uid')
  , wks            = require('./_wks')
  , keyOf          = require('./_keyof')
  , enumKeys       = require('./_enum-keys')
  , isArray        = require('./_is-array')
  , anObject       = require('./_an-object')
  , toIObject      = require('./_to-iobject')
  , toPrimitive    = require('./_to-primitive')
  , createDesc     = require('./_property-desc')
  , _create        = require('./_object-create')
  , gOPNExt        = require('./_object-gopn-ext')
  , $GOPD          = require('./_object-gopd')
  , $DP            = require('./_object-dp')
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , setter         = false
  , HIDDEN         = wks('_hidden')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , ObjectProto    = Object.prototype
  , USE_NATIVE     = typeof $Symbol == 'function';

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol.prototype);
  sym._k = tag;
  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
    configurable: true,
    set: function(value){
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    }
  });
  return sym;
};

var isSymbol = function(it){
  return typeof it == 'symbol';
};

var $defineProperty = function defineProperty(it, key, D){
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  var D = gOPD(it = toIObject(it), key = toPrimitive(key, true));
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
  return result;
};
var $stringify = function stringify(it){
  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
  var args = [it]
    , i    = 1
    , replacer, $replacer;
  while(arguments.length > i)args.push(arguments[i++]);
  replacer = args[1];
  if(typeof replacer == 'function')$replacer = replacer;
  if($replacer || !isArray(replacer))replacer = function(key, value){
    if($replacer)value = $replacer.call(this, key, value);
    if(!isSymbol(value))return value;
  };
  args[1] = replacer;
  return _stringify.apply($JSON, args);
};
var BUGGY_JSON = $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
});

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
  };
  redefine($Symbol.prototype, 'toString', function toString(){
    return this._k;
  });

  isSymbol = function(it){
    return it instanceof $Symbol;
  };

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  require('./_object-gopn').f = gOPNExt.f = $getOwnPropertyNames;
  require('./_object-pie').f  = $propertyIsEnumerable
  require('./_object-gops').f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !require('./_library')){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

// 19.4.2.2 Symbol.hasInstance
// 19.4.2.3 Symbol.isConcatSpreadable
// 19.4.2.4 Symbol.iterator
// 19.4.2.6 Symbol.match
// 19.4.2.8 Symbol.replace
// 19.4.2.9 Symbol.search
// 19.4.2.10 Symbol.species
// 19.4.2.11 Symbol.split
// 19.4.2.12 Symbol.toPrimitive
// 19.4.2.13 Symbol.toStringTag
// 19.4.2.14 Symbol.unscopables
for(var symbols = (
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; ){
  var key     = symbols[i++]
    , Wrapper = core.Symbol
    , sym     = wks(key);
  if(!(key in Wrapper))dP(Wrapper, key, {value: USE_NATIVE ? sym : wrap(sym)});
};

setter = true;

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    return keyOf(SymbolRegistry, key);
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || BUGGY_JSON), 'JSON', {stringify: $stringify});

// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);
},{"./_an-object":32,"./_core":36,"./_descriptors":39,"./_enum-keys":42,"./_export":43,"./_fails":44,"./_global":46,"./_has":47,"./_is-array":54,"./_keyof":62,"./_library":63,"./_meta":64,"./_object-create":67,"./_object-dp":68,"./_object-gopd":70,"./_object-gopn":72,"./_object-gopn-ext":71,"./_object-gops":73,"./_object-pie":77,"./_property-desc":79,"./_redefine":81,"./_set-to-string-tag":84,"./_shared":86,"./_to-iobject":92,"./_to-primitive":95,"./_uid":96,"./_wks":97}],112:[function(require,module,exports){
require('./es6.array.iterator');
var global        = require('./_global')
  , hide          = require('./_hide')
  , Iterators     = require('./_iterators')
  , TO_STRING_TAG = require('./_wks')('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}
},{"./_global":46,"./_hide":48,"./_iterators":61,"./_wks":97,"./es6.array.iterator":101}],113:[function(require,module,exports){
(function (global){
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.JavaParser = f()}})(function(){var define,module,exports;module={exports:(exports={})};
module.exports = (function() {
  "use strict";

  /*
   * Generated by PEG.js 0.9.0.
   *
   * http://pegjs.org/
   */

  function peg$subclass(child, parent) {
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
  }

  function peg$SyntaxError(message, expected, found, location) {
    this.message  = message;
    this.expected = expected;
    this.found    = found;
    this.location = location;
    this.name     = "SyntaxError";

    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, peg$SyntaxError);
    }
  }

  peg$subclass(peg$SyntaxError, Error);

  function peg$parse(input) {
    var options = arguments.length > 1 ? arguments[1] : {},
        parser  = this,

        peg$FAILED = {},

        peg$startRuleFunctions = { CompilationUnit: peg$parseCompilationUnit },
        peg$startRuleFunction  = peg$parseCompilationUnit,

        peg$c0 = function(pack, imports, types) {
              return {
                node:   'CompilationUnit',
                types:   skipNulls(types),
                package: pack,
                imports: skipNulls(imports)
              };
            },
        peg$c1 = function(annot, name) {
              return {
                node:       'PackageDeclaration',
                name:        name,
                annotations: annot
              };
            },
        peg$c2 = function(stat, name, asterisk) {
              return {
                node:    'ImportDeclaration',
                name:     name,
                static:   !!stat,
                onDemand: !!extractOptional(asterisk, 1)
              };
            },
        peg$c3 = function() { return null; },
        peg$c4 = function(modifiers, type) { return mergeProps(type, { modifiers: modifiers }); },
        peg$c5 = function(id, gen, ext, impl, body) {
              return {
                node:               'TypeDeclaration',
                name:                id,
                superInterfaceTypes: extractOptionalList(impl, 1),
                superclassType:      extractOptional(ext, 1),
                bodyDeclarations:    body,
                typeParameters:      optionalList(gen),
                interface:           false
              };
            },
        peg$c6 = function(decls) { return skipNulls(decls); },
        peg$c7 = function(modifier, body) {
              return {
                node:     'Initializer',
                body:      body,
                modifiers: modifier === null ? [] : [makeModifier('static')]
              };
            },
        peg$c8 = function(modifiers, member) { return mergeProps(member, { modifiers: modifiers }); },
        peg$c9 = function(params, rest) { 
              return mergeProps(rest, {
                node:          'MethodDeclaration',
                typeParameters: params
              });
            },
        peg$c10 = function(type, id, rest) {
              return mergeProps(rest, {
                node:          'MethodDeclaration',
                returnType2:    type,
                name:           id,
                typeParameters: []
              });
            },
        peg$c11 = function(type, decls) {
              return {
                node:     'FieldDeclaration',
                fragments: decls,
                type:      type
              };
            },
        peg$c12 = function(id, rest) {
              return mergeProps(rest, {
                node:       'MethodDeclaration',
                returnType2: makePrimitive('void'),
                name:        id,
                constructor: false
              });
            },
        peg$c13 = function(id, rest) { 
              return mergeProps(rest, {
                node:           'MethodDeclaration',
                name:            id,
                typeParameters:  []
              });
            },
        peg$c14 = function() { return makePrimitive('void'); },
        peg$c15 = function(type, id, rest) {
              return mergeProps(rest, {
                returnType2: type,
                name:        id
              });
            },
        peg$c16 = function(id, rest) { return mergeProps(rest, { name: id }); },
        peg$c17 = function(params, dims, throws) { return null; },
        peg$c18 = function(params, dims, throws, body) {
              return {
                parameters:       params,
                thrownExceptions: extractThrowsClassType(extractOptionalList(throws, 1)),
                extraDimensions:  dims.length,
                body:             body,
                constructor:      false
              };
            },
        peg$c19 = function(params, throws) { return null; },
        peg$c20 = function(params, throws, body) {
              return {
                parameters:       params,
                thrownExceptions: extractThrowsClassType(extractOptionalList(throws, 1)),
                body:             body,
                extraDimensions:  0,
                typeParameters:   []
              };
            },
        peg$c21 = function(params, throws, body) {
              return {
                parameters:       params,
                thrownExceptions: extractThrowsClassType(extractOptionalList(throws, 1)),
                body:             body,
                returnType2:      null,
                constructor:      true,
                extraDimensions:  0
              };
            },
        peg$c22 = function(id, gen, ext, body) {
              return {
                  node:               'TypeDeclaration',
                  name:                id,
                  superInterfaceTypes: extractOptionalList(ext, 1),
                  superclassType:      null,
                  bodyDeclarations:    body,
                  typeParameters:      optionalList(gen),
                  interface:           true
                };
            },
        peg$c23 = function(type, id, rest) {
              if (rest.node === 'FieldDeclaration') {
                rest.fragments[0].name = id;
                return mergeProps(rest, { type: type });
              } else {
                return mergeProps(rest, { 
                  returnType2:    type, 
                  name:           id,
                  typeParameters: []
                });
              }
            },
        peg$c24 = function(rest) { return { node: 'FieldDeclaration', fragments: rest }; },
        peg$c25 = function(params, dims, throws) {
              return {
                node:            'MethodDeclaration',
                parameters:       params,
                thrownExceptions: extractThrowsClassType(extractOptionalList(throws, 1)),
                extraDimensions:  dims.length,
                body:             null,
                constructor:      false
              };
            },
        peg$c26 = function(params) { return makePrimitive('void'); },
        peg$c27 = function(params, type, id, rest) {
              return mergeProps(rest, { 
                returnType2:    type, 
                name:           id, 
                typeParameters: params 
              });
            },
        peg$c28 = function(params, throws) {
              return {
                node:            'MethodDeclaration',
                parameters:       params,
                thrownExceptions: extractThrowsClassType(extractOptionalList(throws, 1)),
                returnType2:      makePrimitive('void'),
                extraDimensions:  0,
                typeParameters:   [],
                body:             null,
                constructor:      false
              };
            },
        peg$c29 = function(first, rest) { return buildList(first, rest, 1); },
        peg$c30 = function(dims, init) { 
                return {
                  node:           'VariableDeclarationFragment',
                  extraDimensions: dims.length,
                  initializer:     init
              }; 
            },
        peg$c31 = function(name, impl, eb) {
              return mergeProps(eb, {
                node:               'EnumDeclaration',
                name:                name,
                superInterfaceTypes: extractOptionalList(impl, 1)
              });
            },
        peg$c32 = function(consts, body) {
              return {
                enumConstants:    optionalList(consts),
                bodyDeclarations: optionalList(body)
              };
            },
        peg$c33 = function(annot, name, args, cls) {
              return {
                node:                     'EnumConstantDeclaration',
                anonymousClassDeclaration: cls === null ? null : {
                  node:             'AnonymousClassDeclaration',
                  bodyDeclarations:  cls
                },
                arguments:                 optionalList(args),
                modifiers:                 annot, 
                name:                      name
              };
            },
        peg$c34 = function(decl) { return decl; },
        peg$c35 = function() { return makeModifier('final'); },
        peg$c36 = function(modifiers, type, decls) {
              return {
                node:        'VariableDeclarationStatement',
                fragments:    decls,
                modifiers:    modifiers,
                type:         type
              };
            },
        peg$c37 = function(name, dims, init) {
              return {
                node:           'VariableDeclarationFragment',
                name:            name,
                extraDimensions: dims.length,
                initializer:     extractOptional(init, 1)
              };
            },
        peg$c38 = function(params) { return optionalList(params); },
        peg$c39 = function(modifiers, type, decl) { 
              return mergeProps(decl, {
                type:        type,
                modifiers:   modifiers,
                varargs:     false,
                initializer: null
              });
            },
        peg$c40 = function(modifiers, type, decl) { 
              return mergeProps(decl, {
                type:        type,
                modifiers:   modifiers,
                varargs:     true,
                initializer: null
              });
            },
        peg$c41 = function(first, rest, last) { return buildList(first, rest, 1).concat(extractOptionalList(last, 1)); },
        peg$c42 = function(last) { return [last]; },
        peg$c43 = function(id, dims) { 
              return { 
                node:           'SingleVariableDeclaration', 
                name:            id, 
                extraDimensions: dims.length 
              }; 
            },
        peg$c44 = function(statements) { 
              return {
                node:      'Block',
                statements: statements
              }
            },
        peg$c45 = function(modifiers, decl) { 
              return { 
                node:       'TypeDeclarationStatement', 
                declaration: mergeProps(decl,  { modifiers: modifiers }) 
              }; 
            },
        peg$c46 = function(expr, message) { 
              return { 
                node:      'AssertStatement', 
                expression: expr,
                message:    extractOptional(message, 1)
              }; 
            },
        peg$c47 = function(expr, then, alt) { 
              return { 
                node:         'IfStatement', 
                elseStatement: extractOptional(alt, 1), 
                thenStatement: then,
                expression:    expr.expression,   
              }; 
            },
        peg$c48 = function(init, expr, up, body) { 
              return {
                node:        'ForStatement',
                initializers: optionalList(init),
                expression:   expr,
                updaters:     optionalList(up),
                body:         body
              };
            },
        peg$c49 = function(param, expr, statement) {       
              return {
                node:      'EnhancedForStatement',
                parameter:  param,
                expression: expr,
                body:       statement
              }; 
            },
        peg$c50 = function(expr, body) { 
              return { 
                node:      'WhileStatement', 
                expression: expr.expression, 
                body:       body 
              };
            },
        peg$c51 = function(statement, expr) { 
              return { 
                node:      'DoStatement', 
                expression: expr.expression, 
                body:       statement 
              };  
            },
        peg$c52 = function(first, rest, body, cat, fin) { 
              return mergeProps(makeCatchFinally(cat, fin), {
                node:        'TryStatement',
                body:         body,
                resources:    buildList(first, rest, 1)
              });
            },
        peg$c53 = function(body, cat, fin) { return makeCatchFinally(cat, fin); },
        peg$c54 = function(body, fin) { return makeCatchFinally([], fin); },
        peg$c55 = function(body, rest) { 
              return mergeProps(rest, {
                node:        'TryStatement',
                body:         body,
                resources:    []
              });
            },
        peg$c56 = function(expr, cases) { return { node: 'SwitchStatement', statements: cases, expression: expr.expression }; },
        peg$c57 = function(expr, body) { return { node: 'SynchronizedStatement', expression: expr.expression, body: body } },
        peg$c58 = function(expr) { return { node: 'ReturnStatement', expression: expr } },
        peg$c59 = function(expr) { return { node: 'ThrowStatement', expression: expr }; },
        peg$c60 = function(id) { return { node: 'BreakStatement', label: id }; },
        peg$c61 = function(id) { return { node: 'ContinueStatement', label: id }; },
        peg$c62 = function() { return { node: 'EmptyStatement' }; },
        peg$c63 = function(statement) { return statement; },
        peg$c64 = function(id, statement) { return { node: 'LabeledStatement', label: id, body: statement }; },
        peg$c65 = function(modifiers, type, decl, expr) { 
              var fragment = mergeProps(decl, { initializer: expr });
              fragment.node = 'VariableDeclarationFragment';
              return {
                node:     'VariableDeclarationExpression',
                modifiers: modifiers,
                type:      type,
                fragments: [fragment]
              }; 
            },
        peg$c66 = function(modifiers, first, rest, decl, body) {
              return {
                node:       'CatchClause',
                body:        body,
                exception:   mergeProps(decl, {
                  modifiers:   modifiers,
                  initializer: null,
                  varargs:     false,
                  type:        rest.length ? { 
                    node: 'UnionType', 
                    types: buildList(first, rest, 1) 
                    } : first
                })
              };
            },
        peg$c67 = function(block) { return block; },
        peg$c68 = function(blocks) { return [].concat.apply([], blocks); },
        peg$c69 = function(expr, blocks) { return [{ node: 'SwitchCase', expression: expr }].concat(blocks); },
        peg$c70 = function(expr) { return expr; },
        peg$c71 = function(modifiers, type, decls) { 
              return [{
                node:     'VariableDeclarationExpression',
                modifiers: modifiers,
                fragments: decls,
                type:      type
              }]; 
            },
        peg$c72 = function(first, rest) { return extractExpressions(buildList(first, rest, 1)); },
        peg$c73 = function(expr) { 
              switch(expr.node) {
                case 'SuperConstructorInvocation':
                case 'ConstructorInvocation':
                  return expr;
                default:
                  return { 
                    node:      'ExpressionStatement', 
                    expression: expr 
                  };  
              }
            },
        peg$c74 = function(left, op, right) {
              return {
                node:         'Assignment',
                operator:      op[0] /* remove ending spaces */,
                leftHandSide:  left,
                rightHandSide: right
              };
            },
        peg$c75 = function(expr, then, alt) {
              return {
                node:          'ConditionalExpression',
                expression:     expr,
                thenExpression: then,
                elseExpression: alt
              };
            },
        peg$c76 = function(first, rest) { return buildInfixExpr(first, rest); },
        peg$c77 = function(first, rest) {
              return buildTree(first, rest, function(result, element) {
                return element[0][0] === 'instanceof' ? {
                  node:        'InstanceofExpression',
                  leftOperand:  result,
                  rightOperand: element[1]
                } : {
                  node:        'InfixExpression',
                  operator:     element[0][0], // remove ending Spacing
                  leftOperand:  result,
                  rightOperand: element[1]
                };
              });
            },
        peg$c78 = function(operator, operand) {
              return operand.node === 'NumberLiteral' && operator === '-' && 
                (operand.token === '9223372036854775808L' || 
                 operand.token === '9223372036854775808l' ||
                 operand.token === '2147483648') 
                ? { node: 'NumberLiteral', token: text() }
                : { 
                  node:    'PrefixExpression', 
                  operator: operator, 
                  operand:  operand
                };
            },
        peg$c79 = function(expr) {
              return {
                node:      'CastExpression',
                type:       expr[1],     
                expression: expr[3]
              };
            },
        peg$c80 = function(arg, sel, sels, operator) { 
              return operator.length > 1 ? TODO(/* JLS7? */) : {
                node:    'PostfixExpression', 
                operator: operator[0], 
                operand:  buildSelectorTree(arg, sel, sels)
              };
            },
        peg$c81 = function(arg, sel, sels) { return buildSelectorTree(arg, sel, sels); },
        peg$c82 = function(arg, operator) { 
              return operator.length > 1 ? TODO(/* JLS7? */) : {
                node:    'PostfixExpression', 
                operator: operator[0], 
                operand:  arg
              };
            },
        peg$c83 = function(args) { return { node: 'ConstructorInvocation', arguments: args, typeArguments: [] }; },
        peg$c84 = function(args, ret) { 
              if (ret.typeArguments.length) return TODO(/* Ugly ! */);
              ret.typeArguments = args;
              return ret;
            },
        peg$c85 = function(args) { 
              return args === null ? {
                node:     'ThisExpression',
                qualifier: null
              } : { 
                node:         'ConstructorInvocation', 
                arguments:     args, 
                typeArguments: [] 
              }; 
            },
        peg$c86 = function(suffix) { 
              return suffix.node === 'SuperConstructorInvocation' 
                ? suffix
                : mergeProps(suffix, { qualifier: null }); 
            },
        peg$c87 = function(creator) { return creator; },
        peg$c88 = function(type, dims) {
              return {
                node: 'TypeLiteral',
                type:  buildArrayTree(type, dims)
              };
            },
        peg$c89 = function() {
              return {
                node: 'TypeLiteral',
                type:  makePrimitive('void')
              };
            },
        peg$c90 = function(qual, dims) { 
              return {
                node: 'TypeLiteral',
                type:  buildArrayTree(buildTypeName(qual, null, []), dims)
              };
            },
        peg$c91 = function(qual, expr) { return { node: 'ArrayAccess', array: qual, index: expr }; },
        peg$c92 = function(qual, args) { 
              return mergeProps(popQualified(qual), { 
                node:         'MethodInvocation', 
                arguments:     args, 
                typeArguments: [] 
              }); 
            },
        peg$c93 = function(qual) { return { node: 'TypeLiteral', type: buildTypeName(qual, null, []) }; },
        peg$c94 = function(qual, ret) { 
              if (ret.expression) return TODO(/* Ugly ! */);
              ret.expression = qual;
              return ret; 
            },
        peg$c95 = function(qual) { return { node: 'ThisExpression', qualifier: qual }; },
        peg$c96 = function(qual, args) {
              return { 
                node:         'SuperConstructorInvocation', 
                arguments:     args, 
                expression:    qual,
                typeArguments: []
              };  
            },
        peg$c97 = function(qual, args, rest) { return mergeProps(rest, { expression: qual, typeArguments: optionalList(args) }); },
        peg$c98 = function() { return []; },
        peg$c99 = function(suffix) { return suffix; },
        peg$c100 = function(id, args) { return { node: 'MethodInvocation', arguments: args, name: id, typeArguments: [] }; },
        peg$c101 = function(op) { return op[0]; /* remove ending spaces */ },
        peg$c102 = function(id) { return { node: 'FieldAccess', name: id }; },
        peg$c103 = function(ret) { return ret; },
        peg$c104 = function() { return TODO(/* Any sample ? */); },
        peg$c105 = function(args, ret) { return mergeProps(ret, { typeArguments: optionalList(args) }); },
        peg$c106 = function(expr) { return { node: 'ArrayAccess', index: expr }; },
        peg$c107 = function(args) { 
              return { 
                node:         'SuperConstructorInvocation', 
                arguments:     args, 
                expression:    null,
                typeArguments: []
              }; 
            },
        peg$c108 = function(gen, id, args) { 
              return args === null ? {
                node: 'SuperFieldAccess',
                name:  id  
              } : { 
                node:         'SuperMethodInvocation', 
                typeArguments: optionalList(gen),
                name:          id, 
                arguments:     args
              }; 
            },
        peg$c109 = "byte",
        peg$c110 = { type: "literal", value: "byte", description: "\"byte\"" },
        peg$c111 = "short",
        peg$c112 = { type: "literal", value: "short", description: "\"short\"" },
        peg$c113 = "char",
        peg$c114 = { type: "literal", value: "char", description: "\"char\"" },
        peg$c115 = "int",
        peg$c116 = { type: "literal", value: "int", description: "\"int\"" },
        peg$c117 = "long",
        peg$c118 = { type: "literal", value: "long", description: "\"long\"" },
        peg$c119 = "float",
        peg$c120 = { type: "literal", value: "float", description: "\"float\"" },
        peg$c121 = "double",
        peg$c122 = { type: "literal", value: "double", description: "\"double\"" },
        peg$c123 = "boolean",
        peg$c124 = { type: "literal", value: "boolean", description: "\"boolean\"" },
        peg$c125 = function(type) { return makePrimitive(type); },
        peg$c126 = function(args) { return optionalList(args); },
        peg$c127 = function(type, rest) { 
              return  { 
                node:       'ArrayCreation', 
                type:        buildArrayTree(type, rest.extraDims), 
                initializer: rest.init,
                dimensions:  rest.dimms
              }; 
            },
        peg$c128 = function(args, type, rest) {
              return mergeProps(rest, {
                node:          'ClassInstanceCreation',
                type:           type,
                typeArguments:  optionalList(args),
                expression:     null
              });
            },
        peg$c129 = function(qual, args, rest) { return buildTypeName(qual, args, rest); },
        peg$c130 = function(id, args, rest) { 
              return mergeProps(rest, {
                node: 'ClassInstanceCreation',
                type:  buildTypeName(id, args, [])
              });  
            },
        peg$c131 = function(args, body) {
              return {
                arguments:                 args,
                anonymousClassDeclaration: body === null ? null : {
                  node:            'AnonymousClassDeclaration',
                  bodyDeclarations: body
                }
              };
            },
        peg$c132 = function(dims, init) { return { extraDims:dims, init:init, dimms: [] }; },
        peg$c133 = function(dimexpr, dims) { return { extraDims:dimexpr.concat(dims), init:null, dimms: dimexpr }; },
        peg$c134 = function(dim) { return { extraDims:[dim], init:null, dimms: [] }; },
        peg$c135 = function(init) { return { node: 'ArrayInitializer', expressions: optionalList(init) }; },
        peg$c136 = function(expr) { return { node: 'ParenthesizedExpression', expression: expr }; },
        peg$c137 = function(first, rest) { return buildQualified(first, rest, 1); },
        peg$c138 = function(exp) { return exp; },
        peg$c139 = function(type, dims) { return buildArrayTree(type, dims); },
        peg$c140 = function(bas, dims) { return buildArrayTree(bas, dims); },
        peg$c141 = function(cls, dims) { return buildArrayTree(cls, dims); },
        peg$c142 = function() { return true; },
        peg$c143 = function() { return false; },
        peg$c144 = function(rest) {
              return {
                node:      'WildcardType',
                upperBound: extractOptional(rest, 0, true),
                bound:      extractOptional(rest, 1)
              }; 
            },
        peg$c145 = function(id, bounds) { 
              return {
                node:      'TypeParameter',
                name:       id,
                typeBounds: extractOptionalList(bounds, 1)
              }
            },
        peg$c146 = "public",
        peg$c147 = { type: "literal", value: "public", description: "\"public\"" },
        peg$c148 = "protected",
        peg$c149 = { type: "literal", value: "protected", description: "\"protected\"" },
        peg$c150 = "private",
        peg$c151 = { type: "literal", value: "private", description: "\"private\"" },
        peg$c152 = "static",
        peg$c153 = { type: "literal", value: "static", description: "\"static\"" },
        peg$c154 = "abstract",
        peg$c155 = { type: "literal", value: "abstract", description: "\"abstract\"" },
        peg$c156 = "final",
        peg$c157 = { type: "literal", value: "final", description: "\"final\"" },
        peg$c158 = "native",
        peg$c159 = { type: "literal", value: "native", description: "\"native\"" },
        peg$c160 = "synchronized",
        peg$c161 = { type: "literal", value: "synchronized", description: "\"synchronized\"" },
        peg$c162 = "transient",
        peg$c163 = { type: "literal", value: "transient", description: "\"transient\"" },
        peg$c164 = "volatile",
        peg$c165 = { type: "literal", value: "volatile", description: "\"volatile\"" },
        peg$c166 = "strictfp",
        peg$c167 = { type: "literal", value: "strictfp", description: "\"strictfp\"" },
        peg$c168 = function(keyword) { return makeModifier(keyword); },
        peg$c169 = function(id, body) { 
              return {
                node:            'AnnotationTypeDeclaration',
                name:             id,
                bodyDeclarations: body
              }; 
            },
        peg$c170 = function(decl) { return skipNulls(decl); },
        peg$c171 = function(modifiers, rest) { return mergeProps(rest, { modifiers: modifiers }); },
        peg$c172 = function(type, rest) { return mergeProps(rest, { type: type }); },
        peg$c173 = function(id, def) { 
              return { 
                node:   'AnnotationTypeMemberDeclaration', 
                name:    id, 
                default: def 
              }; 
            },
        peg$c174 = function(fragments) { return { node: 'FieldDeclaration', fragments: fragments }; },
        peg$c175 = function(val) { return val; },
        peg$c176 = function(id, pairs) { 
              return { 
                node:    'NormalAnnotation', 
                typeName: id, 
                values:   optionalList(pairs)
              }; 
            },
        peg$c177 = function(id, value) { 
              return { 
                node:    'SingleMemberAnnotation', 
                typeName: id, 
                value:    value 
              }; 
            },
        peg$c178 = function(id) { return { node: 'MarkerAnnotation', typeName: id }; },
        peg$c179 = function(name, value) { 
              return {
                node: 'MemberValuePair',
                name:  name,
                value: value
              };
            },
        peg$c180 = function(values) { return { node: 'ArrayInitializer', expressions: optionalList(values)}; },
        peg$c181 = /^[ \t\r\n\f]/,
        peg$c182 = { type: "class", value: "[ \\t\\r\\n\\u000C]", description: "[ \\t\\r\\n\\u000C]" },
        peg$c183 = "/*",
        peg$c184 = { type: "literal", value: "/*", description: "\"/*\"" },
        peg$c185 = "*/",
        peg$c186 = { type: "literal", value: "*/", description: "\"*/\"" },
        peg$c187 = "//",
        peg$c188 = { type: "literal", value: "//", description: "\"//\"" },
        peg$c189 = /^[\r\n]/,
        peg$c190 = { type: "class", value: "[\\r\\n]", description: "[\\r\\n]" },
        peg$c191 = function(first, rest) { return { identifier: first + rest, node: 'SimpleName' }; },
        peg$c192 = /^[a-z]/,
        peg$c193 = { type: "class", value: "[a-z]", description: "[a-z]" },
        peg$c194 = /^[A-Z]/,
        peg$c195 = { type: "class", value: "[A-Z]", description: "[A-Z]" },
        peg$c196 = /^[_$]/,
        peg$c197 = { type: "class", value: "[_$]", description: "[_$]" },
        peg$c198 = /^[0-9]/,
        peg$c199 = { type: "class", value: "[0-9]", description: "[0-9]" },
        peg$c200 = "assert",
        peg$c201 = { type: "literal", value: "assert", description: "\"assert\"" },
        peg$c202 = "break",
        peg$c203 = { type: "literal", value: "break", description: "\"break\"" },
        peg$c204 = "case",
        peg$c205 = { type: "literal", value: "case", description: "\"case\"" },
        peg$c206 = "catch",
        peg$c207 = { type: "literal", value: "catch", description: "\"catch\"" },
        peg$c208 = "class",
        peg$c209 = { type: "literal", value: "class", description: "\"class\"" },
        peg$c210 = "const",
        peg$c211 = { type: "literal", value: "const", description: "\"const\"" },
        peg$c212 = "continue",
        peg$c213 = { type: "literal", value: "continue", description: "\"continue\"" },
        peg$c214 = "default",
        peg$c215 = { type: "literal", value: "default", description: "\"default\"" },
        peg$c216 = "do",
        peg$c217 = { type: "literal", value: "do", description: "\"do\"" },
        peg$c218 = "else",
        peg$c219 = { type: "literal", value: "else", description: "\"else\"" },
        peg$c220 = "enum",
        peg$c221 = { type: "literal", value: "enum", description: "\"enum\"" },
        peg$c222 = "extends",
        peg$c223 = { type: "literal", value: "extends", description: "\"extends\"" },
        peg$c224 = "false",
        peg$c225 = { type: "literal", value: "false", description: "\"false\"" },
        peg$c226 = "finally",
        peg$c227 = { type: "literal", value: "finally", description: "\"finally\"" },
        peg$c228 = "for",
        peg$c229 = { type: "literal", value: "for", description: "\"for\"" },
        peg$c230 = "goto",
        peg$c231 = { type: "literal", value: "goto", description: "\"goto\"" },
        peg$c232 = "if",
        peg$c233 = { type: "literal", value: "if", description: "\"if\"" },
        peg$c234 = "implements",
        peg$c235 = { type: "literal", value: "implements", description: "\"implements\"" },
        peg$c236 = "import",
        peg$c237 = { type: "literal", value: "import", description: "\"import\"" },
        peg$c238 = "interface",
        peg$c239 = { type: "literal", value: "interface", description: "\"interface\"" },
        peg$c240 = "instanceof",
        peg$c241 = { type: "literal", value: "instanceof", description: "\"instanceof\"" },
        peg$c242 = "new",
        peg$c243 = { type: "literal", value: "new", description: "\"new\"" },
        peg$c244 = "null",
        peg$c245 = { type: "literal", value: "null", description: "\"null\"" },
        peg$c246 = "package",
        peg$c247 = { type: "literal", value: "package", description: "\"package\"" },
        peg$c248 = "return",
        peg$c249 = { type: "literal", value: "return", description: "\"return\"" },
        peg$c250 = "super",
        peg$c251 = { type: "literal", value: "super", description: "\"super\"" },
        peg$c252 = "switch",
        peg$c253 = { type: "literal", value: "switch", description: "\"switch\"" },
        peg$c254 = "this",
        peg$c255 = { type: "literal", value: "this", description: "\"this\"" },
        peg$c256 = "throws",
        peg$c257 = { type: "literal", value: "throws", description: "\"throws\"" },
        peg$c258 = "throw",
        peg$c259 = { type: "literal", value: "throw", description: "\"throw\"" },
        peg$c260 = "true",
        peg$c261 = { type: "literal", value: "true", description: "\"true\"" },
        peg$c262 = "try",
        peg$c263 = { type: "literal", value: "try", description: "\"try\"" },
        peg$c264 = "void",
        peg$c265 = { type: "literal", value: "void", description: "\"void\"" },
        peg$c266 = "while",
        peg$c267 = { type: "literal", value: "while", description: "\"while\"" },
        peg$c268 = function() { return { node: 'BooleanLiteral', booleanValue: true }; },
        peg$c269 = function() { return { node: 'BooleanLiteral', booleanValue: false }; },
        peg$c270 = function() { return { node: 'NullLiteral' }; },
        peg$c271 = function(literal) { return literal; },
        peg$c272 = /^[lL]/,
        peg$c273 = { type: "class", value: "[lL]", description: "[lL]" },
        peg$c274 = function() { return { node: 'NumberLiteral', token: text() }; },
        peg$c275 = "0",
        peg$c276 = { type: "literal", value: "0", description: "\"0\"" },
        peg$c277 = /^[1-9]/,
        peg$c278 = { type: "class", value: "[1-9]", description: "[1-9]" },
        peg$c279 = /^[_]/,
        peg$c280 = { type: "class", value: "[_]", description: "[_]" },
        peg$c281 = "0x",
        peg$c282 = { type: "literal", value: "0x", description: "\"0x\"" },
        peg$c283 = "0X",
        peg$c284 = { type: "literal", value: "0X", description: "\"0X\"" },
        peg$c285 = "0b",
        peg$c286 = { type: "literal", value: "0b", description: "\"0b\"" },
        peg$c287 = "0B",
        peg$c288 = { type: "literal", value: "0B", description: "\"0B\"" },
        peg$c289 = /^[01]/,
        peg$c290 = { type: "class", value: "[01]", description: "[01]" },
        peg$c291 = /^[0-7]/,
        peg$c292 = { type: "class", value: "[0-7]", description: "[0-7]" },
        peg$c293 = ".",
        peg$c294 = { type: "literal", value: ".", description: "\".\"" },
        peg$c295 = /^[fFdD]/,
        peg$c296 = { type: "class", value: "[fFdD]", description: "[fFdD]" },
        peg$c297 = /^[eE]/,
        peg$c298 = { type: "class", value: "[eE]", description: "[eE]" },
        peg$c299 = /^[+\-]/,
        peg$c300 = { type: "class", value: "[+\\-]", description: "[+\\-]" },
        peg$c301 = /^[pP]/,
        peg$c302 = { type: "class", value: "[pP]", description: "[pP]" },
        peg$c303 = /^[a-f]/,
        peg$c304 = { type: "class", value: "[a-f]", description: "[a-f]" },
        peg$c305 = /^[A-F]/,
        peg$c306 = { type: "class", value: "[A-F]", description: "[A-F]" },
        peg$c307 = "'",
        peg$c308 = { type: "literal", value: "'", description: "\"'\"" },
        peg$c309 = /^['\\\n\r]/,
        peg$c310 = { type: "class", value: "['\\\\\\n\\r]", description: "['\\\\\\n\\r]" },
        peg$c311 = function() { return { node: 'CharacterLiteral', escapedValue: text() }; },
        peg$c312 = "\"",
        peg$c313 = { type: "literal", value: "\"", description: "\"\\\"\"" },
        peg$c314 = /^["\\\n\r]/,
        peg$c315 = { type: "class", value: "[\"\\\\\\n\\r]", description: "[\"\\\\\\n\\r]" },
        peg$c316 = function() { return { node: 'StringLiteral', escapedValue: text() }; },
        peg$c317 = "\\",
        peg$c318 = { type: "literal", value: "\\", description: "\"\\\\\"" },
        peg$c319 = /^[btnfr"'\\]/,
        peg$c320 = { type: "class", value: "[btnfr\"'\\\\]", description: "[btnfr\"'\\\\]" },
        peg$c321 = /^[0-3]/,
        peg$c322 = { type: "class", value: "[0-3]", description: "[0-3]" },
        peg$c323 = "u",
        peg$c324 = { type: "literal", value: "u", description: "\"u\"" },
        peg$c325 = "@",
        peg$c326 = { type: "literal", value: "@", description: "\"@\"" },
        peg$c327 = "&",
        peg$c328 = { type: "literal", value: "&", description: "\"&\"" },
        peg$c329 = /^[=&]/,
        peg$c330 = { type: "class", value: "[=&]", description: "[=&]" },
        peg$c331 = "&&",
        peg$c332 = { type: "literal", value: "&&", description: "\"&&\"" },
        peg$c333 = "&=",
        peg$c334 = { type: "literal", value: "&=", description: "\"&=\"" },
        peg$c335 = "!",
        peg$c336 = { type: "literal", value: "!", description: "\"!\"" },
        peg$c337 = "=",
        peg$c338 = { type: "literal", value: "=", description: "\"=\"" },
        peg$c339 = ">>>",
        peg$c340 = { type: "literal", value: ">>>", description: "\">>>\"" },
        peg$c341 = ">>>=",
        peg$c342 = { type: "literal", value: ">>>=", description: "\">>>=\"" },
        peg$c343 = ":",
        peg$c344 = { type: "literal", value: ":", description: "\":\"" },
        peg$c345 = ",",
        peg$c346 = { type: "literal", value: ",", description: "\",\"" },
        peg$c347 = "--",
        peg$c348 = { type: "literal", value: "--", description: "\"--\"" },
        peg$c349 = "/",
        peg$c350 = { type: "literal", value: "/", description: "\"/\"" },
        peg$c351 = "/=",
        peg$c352 = { type: "literal", value: "/=", description: "\"/=\"" },
        peg$c353 = "...",
        peg$c354 = { type: "literal", value: "...", description: "\"...\"" },
        peg$c355 = "==",
        peg$c356 = { type: "literal", value: "==", description: "\"==\"" },
        peg$c357 = ">=",
        peg$c358 = { type: "literal", value: ">=", description: "\">=\"" },
        peg$c359 = ">",
        peg$c360 = { type: "literal", value: ">", description: "\">\"" },
        peg$c361 = /^[=>]/,
        peg$c362 = { type: "class", value: "[=>]", description: "[=>]" },
        peg$c363 = "^",
        peg$c364 = { type: "literal", value: "^", description: "\"^\"" },
        peg$c365 = "^=",
        peg$c366 = { type: "literal", value: "^=", description: "\"^=\"" },
        peg$c367 = "++",
        peg$c368 = { type: "literal", value: "++", description: "\"++\"" },
        peg$c369 = "[",
        peg$c370 = { type: "literal", value: "[", description: "\"[\"" },
        peg$c371 = "<=",
        peg$c372 = { type: "literal", value: "<=", description: "\"<=\"" },
        peg$c373 = "(",
        peg$c374 = { type: "literal", value: "(", description: "\"(\"" },
        peg$c375 = "<",
        peg$c376 = { type: "literal", value: "<", description: "\"<\"" },
        peg$c377 = /^[=<]/,
        peg$c378 = { type: "class", value: "[=<]", description: "[=<]" },
        peg$c379 = "{",
        peg$c380 = { type: "literal", value: "{", description: "\"{\"" },
        peg$c381 = "-",
        peg$c382 = { type: "literal", value: "-", description: "\"-\"" },
        peg$c383 = /^[=\-]/,
        peg$c384 = { type: "class", value: "[=\\-]", description: "[=\\-]" },
        peg$c385 = "-=",
        peg$c386 = { type: "literal", value: "-=", description: "\"-=\"" },
        peg$c387 = "%",
        peg$c388 = { type: "literal", value: "%", description: "\"%\"" },
        peg$c389 = "%=",
        peg$c390 = { type: "literal", value: "%=", description: "\"%=\"" },
        peg$c391 = "!=",
        peg$c392 = { type: "literal", value: "!=", description: "\"!=\"" },
        peg$c393 = "|",
        peg$c394 = { type: "literal", value: "|", description: "\"|\"" },
        peg$c395 = /^[=|]/,
        peg$c396 = { type: "class", value: "[=|]", description: "[=|]" },
        peg$c397 = "|=",
        peg$c398 = { type: "literal", value: "|=", description: "\"|=\"" },
        peg$c399 = "||",
        peg$c400 = { type: "literal", value: "||", description: "\"||\"" },
        peg$c401 = "+",
        peg$c402 = { type: "literal", value: "+", description: "\"+\"" },
        peg$c403 = /^[=+]/,
        peg$c404 = { type: "class", value: "[=+]", description: "[=+]" },
        peg$c405 = "+=",
        peg$c406 = { type: "literal", value: "+=", description: "\"+=\"" },
        peg$c407 = "?",
        peg$c408 = { type: "literal", value: "?", description: "\"?\"" },
        peg$c409 = "]",
        peg$c410 = { type: "literal", value: "]", description: "\"]\"" },
        peg$c411 = ")",
        peg$c412 = { type: "literal", value: ")", description: "\")\"" },
        peg$c413 = "}",
        peg$c414 = { type: "literal", value: "}", description: "\"}\"" },
        peg$c415 = ";",
        peg$c416 = { type: "literal", value: ";", description: "\";\"" },
        peg$c417 = "<<",
        peg$c418 = { type: "literal", value: "<<", description: "\"<<\"" },
        peg$c419 = "<<=",
        peg$c420 = { type: "literal", value: "<<=", description: "\"<<=\"" },
        peg$c421 = ">>",
        peg$c422 = { type: "literal", value: ">>", description: "\">>\"" },
        peg$c423 = ">>=",
        peg$c424 = { type: "literal", value: ">>=", description: "\">>=\"" },
        peg$c425 = "*",
        peg$c426 = { type: "literal", value: "*", description: "\"*\"" },
        peg$c427 = "*=",
        peg$c428 = { type: "literal", value: "*=", description: "\"*=\"" },
        peg$c429 = "~",
        peg$c430 = { type: "literal", value: "~", description: "\"~\"" },
        peg$c431 = { type: "any", description: "any character" },

        peg$currPos          = 0,
        peg$savedPos         = 0,
        peg$posDetailsCache  = [{ line: 1, column: 1, seenCR: false }],
        peg$maxFailPos       = 0,
        peg$maxFailExpected  = [],
        peg$silentFails      = 0,

        peg$result;

    if ("startRule" in options) {
      if (!(options.startRule in peg$startRuleFunctions)) {
        throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
      }

      peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
    }

    function text() {
      return input.substring(peg$savedPos, peg$currPos);
    }

    function location() {
      return peg$computeLocation(peg$savedPos, peg$currPos);
    }

    function expected(description) {
      throw peg$buildException(
        null,
        [{ type: "other", description: description }],
        input.substring(peg$savedPos, peg$currPos),
        peg$computeLocation(peg$savedPos, peg$currPos)
      );
    }

    function error(message) {
      throw peg$buildException(
        message,
        null,
        input.substring(peg$savedPos, peg$currPos),
        peg$computeLocation(peg$savedPos, peg$currPos)
      );
    }

    function peg$computePosDetails(pos) {
      var details = peg$posDetailsCache[pos],
          p, ch;

      if (details) {
        return details;
      } else {
        p = pos - 1;
        while (!peg$posDetailsCache[p]) {
          p--;
        }

        details = peg$posDetailsCache[p];
        details = {
          line:   details.line,
          column: details.column,
          seenCR: details.seenCR
        };

        while (p < pos) {
          ch = input.charAt(p);
          if (ch === "\n") {
            if (!details.seenCR) { details.line++; }
            details.column = 1;
            details.seenCR = false;
          } else if (ch === "\r" || ch === "\u2028" || ch === "\u2029") {
            details.line++;
            details.column = 1;
            details.seenCR = true;
          } else {
            details.column++;
            details.seenCR = false;
          }

          p++;
        }

        peg$posDetailsCache[pos] = details;
        return details;
      }
    }

    function peg$computeLocation(startPos, endPos) {
      var startPosDetails = peg$computePosDetails(startPos),
          endPosDetails   = peg$computePosDetails(endPos);

      return {
        start: {
          offset: startPos,
          line:   startPosDetails.line,
          column: startPosDetails.column
        },
        end: {
          offset: endPos,
          line:   endPosDetails.line,
          column: endPosDetails.column
        }
      };
    }

    function peg$fail(expected) {
      if (peg$currPos < peg$maxFailPos) { return; }

      if (peg$currPos > peg$maxFailPos) {
        peg$maxFailPos = peg$currPos;
        peg$maxFailExpected = [];
      }

      peg$maxFailExpected.push(expected);
    }

    function peg$buildException(message, expected, found, location) {
      function cleanupExpected(expected) {
        var i = 1;

        expected.sort(function(a, b) {
          if (a.description < b.description) {
            return -1;
          } else if (a.description > b.description) {
            return 1;
          } else {
            return 0;
          }
        });

        while (i < expected.length) {
          if (expected[i - 1] === expected[i]) {
            expected.splice(i, 1);
          } else {
            i++;
          }
        }
      }

      function buildMessage(expected, found) {
        function stringEscape(s) {
          function hex(ch) { return ch.charCodeAt(0).toString(16).toUpperCase(); }

          return s
            .replace(/\\/g,   '\\\\')
            .replace(/"/g,    '\\"')
            .replace(/\x08/g, '\\b')
            .replace(/\t/g,   '\\t')
            .replace(/\n/g,   '\\n')
            .replace(/\f/g,   '\\f')
            .replace(/\r/g,   '\\r')
            .replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(ch) { return '\\x0' + hex(ch); })
            .replace(/[\x10-\x1F\x80-\xFF]/g,    function(ch) { return '\\x'  + hex(ch); })
            .replace(/[\u0100-\u0FFF]/g,         function(ch) { return '\\u0' + hex(ch); })
            .replace(/[\u1000-\uFFFF]/g,         function(ch) { return '\\u'  + hex(ch); });
        }

        var expectedDescs = new Array(expected.length),
            expectedDesc, foundDesc, i;

        for (i = 0; i < expected.length; i++) {
          expectedDescs[i] = expected[i].description;
        }

        expectedDesc = expected.length > 1
          ? expectedDescs.slice(0, -1).join(", ")
              + " or "
              + expectedDescs[expected.length - 1]
          : expectedDescs[0];

        foundDesc = found ? "\"" + stringEscape(found) + "\"" : "end of input";

        return "Expected " + expectedDesc + " but " + foundDesc + " found.";
      }

      if (expected !== null) {
        cleanupExpected(expected);
      }

      return new peg$SyntaxError(
        message !== null ? message : buildMessage(expected, found),
        expected,
        found,
        location
      );
    }

    function peg$parseCompilationUnit() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$parseSpacing();
      if (s1 !== peg$FAILED) {
        s2 = peg$parsePackageDeclaration();
        if (s2 === peg$FAILED) {
          s2 = null;
        }
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$parseImportDeclaration();
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$parseImportDeclaration();
          }
          if (s3 !== peg$FAILED) {
            s4 = [];
            s5 = peg$parseTypeDeclaration();
            while (s5 !== peg$FAILED) {
              s4.push(s5);
              s5 = peg$parseTypeDeclaration();
            }
            if (s4 !== peg$FAILED) {
              s5 = peg$parseEOT();
              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c0(s2, s3, s4);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parsePackageDeclaration() {
      var s0, s1, s2, s3, s4;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parseAnnotation();
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parseAnnotation();
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parsePACKAGE();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseQualifiedIdentifier();
          if (s3 !== peg$FAILED) {
            s4 = peg$parseSEMI();
            if (s4 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c1(s1, s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseImportDeclaration() {
      var s0, s1, s2, s3, s4, s5, s6;

      s0 = peg$currPos;
      s1 = peg$parseIMPORT();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseSTATIC();
        if (s2 === peg$FAILED) {
          s2 = null;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseQualifiedIdentifier();
          if (s3 !== peg$FAILED) {
            s4 = peg$currPos;
            s5 = peg$parseDOT();
            if (s5 !== peg$FAILED) {
              s6 = peg$parseSTAR();
              if (s6 !== peg$FAILED) {
                s5 = [s5, s6];
                s4 = s5;
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
            if (s4 === peg$FAILED) {
              s4 = null;
            }
            if (s4 !== peg$FAILED) {
              s5 = peg$parseSEMI();
              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c2(s2, s3, s4);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseSEMI();
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c3();
        }
        s0 = s1;
      }

      return s0;
    }

    function peg$parseTypeDeclaration() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parseModifier();
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parseModifier();
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseClassDeclaration();
        if (s2 === peg$FAILED) {
          s2 = peg$parseEnumDeclaration();
          if (s2 === peg$FAILED) {
            s2 = peg$parseInterfaceDeclaration();
            if (s2 === peg$FAILED) {
              s2 = peg$parseAnnotationTypeDeclaration();
            }
          }
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c4(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseSEMI();
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c3();
        }
        s0 = s1;
      }

      return s0;
    }

    function peg$parseClassDeclaration() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      s0 = peg$currPos;
      s1 = peg$parseCLASS();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseIdentifier();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseTypeParameters();
          if (s3 === peg$FAILED) {
            s3 = null;
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$currPos;
            s5 = peg$parseEXTENDS();
            if (s5 !== peg$FAILED) {
              s6 = peg$parseClassType();
              if (s6 !== peg$FAILED) {
                s5 = [s5, s6];
                s4 = s5;
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
            if (s4 === peg$FAILED) {
              s4 = null;
            }
            if (s4 !== peg$FAILED) {
              s5 = peg$currPos;
              s6 = peg$parseIMPLEMENTS();
              if (s6 !== peg$FAILED) {
                s7 = peg$parseClassTypeList();
                if (s7 !== peg$FAILED) {
                  s6 = [s6, s7];
                  s5 = s6;
                } else {
                  peg$currPos = s5;
                  s5 = peg$FAILED;
                }
              } else {
                peg$currPos = s5;
                s5 = peg$FAILED;
              }
              if (s5 === peg$FAILED) {
                s5 = null;
              }
              if (s5 !== peg$FAILED) {
                s6 = peg$parseClassBody();
                if (s6 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s1 = peg$c5(s2, s3, s4, s5, s6);
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseClassBody() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$parseLWING();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parseClassBodyDeclaration();
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parseClassBodyDeclaration();
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseRWING();
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c6(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseClassBodyDeclaration() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = peg$parseSEMI();
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c3();
      }
      s0 = s1;
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseSTATIC();
        if (s1 === peg$FAILED) {
          s1 = null;
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$parseBlock();
          if (s2 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c7(s1, s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          s1 = [];
          s2 = peg$parseModifier();
          while (s2 !== peg$FAILED) {
            s1.push(s2);
            s2 = peg$parseModifier();
          }
          if (s1 !== peg$FAILED) {
            s2 = peg$parseMemberDecl();
            if (s2 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c8(s1, s2);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        }
      }

      return s0;
    }

    function peg$parseMemberDecl() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$parseTypeParameters();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseGenericMethodOrConstructorRest();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c9(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseType();
        if (s1 !== peg$FAILED) {
          s2 = peg$parseIdentifier();
          if (s2 !== peg$FAILED) {
            s3 = peg$parseMethodDeclaratorRest();
            if (s3 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c10(s1, s2, s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          s1 = peg$parseType();
          if (s1 !== peg$FAILED) {
            s2 = peg$parseVariableDeclarators();
            if (s2 !== peg$FAILED) {
              s3 = peg$parseSEMI();
              if (s3 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c11(s1, s2);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            s1 = peg$parseVOID();
            if (s1 !== peg$FAILED) {
              s2 = peg$parseIdentifier();
              if (s2 !== peg$FAILED) {
                s3 = peg$parseVoidMethodDeclaratorRest();
                if (s3 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s1 = peg$c12(s2, s3);
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
            if (s0 === peg$FAILED) {
              s0 = peg$currPos;
              s1 = peg$parseIdentifier();
              if (s1 !== peg$FAILED) {
                s2 = peg$parseConstructorDeclaratorRest();
                if (s2 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s1 = peg$c13(s1, s2);
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              if (s0 === peg$FAILED) {
                s0 = peg$parseInterfaceDeclaration();
                if (s0 === peg$FAILED) {
                  s0 = peg$parseClassDeclaration();
                  if (s0 === peg$FAILED) {
                    s0 = peg$parseEnumDeclaration();
                    if (s0 === peg$FAILED) {
                      s0 = peg$parseAnnotationTypeDeclaration();
                    }
                  }
                }
              }
            }
          }
        }
      }

      return s0;
    }

    function peg$parseGenericMethodOrConstructorRest() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$parseType();
      if (s1 === peg$FAILED) {
        s1 = peg$currPos;
        s2 = peg$parseVOID();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s1;
          s2 = peg$c14();
        }
        s1 = s2;
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseIdentifier();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseMethodDeclaratorRest();
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c15(s1, s2, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseIdentifier();
        if (s1 !== peg$FAILED) {
          s2 = peg$parseConstructorDeclaratorRest();
          if (s2 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c16(s1, s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      }

      return s0;
    }

    function peg$parseMethodDeclaratorRest() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$parseFormalParameters();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parseDim();
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parseDim();
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$currPos;
          s4 = peg$parseTHROWS();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseClassTypeList();
            if (s5 !== peg$FAILED) {
              s4 = [s4, s5];
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
          if (s3 === peg$FAILED) {
            s3 = null;
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parseBlock();
            if (s4 === peg$FAILED) {
              s4 = peg$currPos;
              s5 = peg$parseSEMI();
              if (s5 !== peg$FAILED) {
                peg$savedPos = s4;
                s5 = peg$c17(s1, s2, s3);
              }
              s4 = s5;
            }
            if (s4 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c18(s1, s2, s3, s4);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseVoidMethodDeclaratorRest() {
      var s0, s1, s2, s3, s4;

      s0 = peg$currPos;
      s1 = peg$parseFormalParameters();
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        s3 = peg$parseTHROWS();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseClassTypeList();
          if (s4 !== peg$FAILED) {
            s3 = [s3, s4];
            s2 = s3;
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 === peg$FAILED) {
          s2 = null;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseBlock();
          if (s3 === peg$FAILED) {
            s3 = peg$currPos;
            s4 = peg$parseSEMI();
            if (s4 !== peg$FAILED) {
              peg$savedPos = s3;
              s4 = peg$c19(s1, s2);
            }
            s3 = s4;
          }
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c20(s1, s2, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseConstructorDeclaratorRest() {
      var s0, s1, s2, s3, s4;

      s0 = peg$currPos;
      s1 = peg$parseFormalParameters();
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        s3 = peg$parseTHROWS();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseClassTypeList();
          if (s4 !== peg$FAILED) {
            s3 = [s3, s4];
            s2 = s3;
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 === peg$FAILED) {
          s2 = null;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseBlock();
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c21(s1, s2, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseInterfaceDeclaration() {
      var s0, s1, s2, s3, s4, s5, s6;

      s0 = peg$currPos;
      s1 = peg$parseINTERFACE();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseIdentifier();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseTypeParameters();
          if (s3 === peg$FAILED) {
            s3 = null;
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$currPos;
            s5 = peg$parseEXTENDS();
            if (s5 !== peg$FAILED) {
              s6 = peg$parseClassTypeList();
              if (s6 !== peg$FAILED) {
                s5 = [s5, s6];
                s4 = s5;
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
            if (s4 === peg$FAILED) {
              s4 = null;
            }
            if (s4 !== peg$FAILED) {
              s5 = peg$parseInterfaceBody();
              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c22(s2, s3, s4, s5);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseInterfaceBody() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$parseLWING();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parseInterfaceBodyDeclaration();
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parseInterfaceBodyDeclaration();
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseRWING();
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c6(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseInterfaceBodyDeclaration() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parseModifier();
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parseModifier();
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseInterfaceMemberDecl();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c8(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseSEMI();
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c3();
        }
        s0 = s1;
      }

      return s0;
    }

    function peg$parseInterfaceMemberDecl() {
      var s0, s1, s2, s3;

      s0 = peg$parseInterfaceMethodOrFieldDecl();
      if (s0 === peg$FAILED) {
        s0 = peg$parseInterfaceGenericMethodDecl();
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          s1 = peg$parseVOID();
          if (s1 !== peg$FAILED) {
            s2 = peg$parseIdentifier();
            if (s2 !== peg$FAILED) {
              s3 = peg$parseVoidInterfaceMethodDeclaratorRest();
              if (s3 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c16(s2, s3);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
          if (s0 === peg$FAILED) {
            s0 = peg$parseInterfaceDeclaration();
            if (s0 === peg$FAILED) {
              s0 = peg$parseAnnotationTypeDeclaration();
              if (s0 === peg$FAILED) {
                s0 = peg$parseClassDeclaration();
                if (s0 === peg$FAILED) {
                  s0 = peg$parseEnumDeclaration();
                }
              }
            }
          }
        }
      }

      return s0;
    }

    function peg$parseInterfaceMethodOrFieldDecl() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$parseType();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseIdentifier();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseInterfaceMethodOrFieldRest();
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c23(s1, s2, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseInterfaceMethodOrFieldRest() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = peg$parseConstantDeclaratorsRest();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseSEMI();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c24(s1);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$parseInterfaceMethodDeclaratorRest();
      }

      return s0;
    }

    function peg$parseInterfaceMethodDeclaratorRest() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$parseFormalParameters();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parseDim();
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parseDim();
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$currPos;
          s4 = peg$parseTHROWS();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseClassTypeList();
            if (s5 !== peg$FAILED) {
              s4 = [s4, s5];
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
          if (s3 === peg$FAILED) {
            s3 = null;
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parseSEMI();
            if (s4 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c25(s1, s2, s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseInterfaceGenericMethodDecl() {
      var s0, s1, s2, s3, s4;

      s0 = peg$currPos;
      s1 = peg$parseTypeParameters();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseType();
        if (s2 === peg$FAILED) {
          s2 = peg$currPos;
          s3 = peg$parseVOID();
          if (s3 !== peg$FAILED) {
            peg$savedPos = s2;
            s3 = peg$c26(s1);
          }
          s2 = s3;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseIdentifier();
          if (s3 !== peg$FAILED) {
            s4 = peg$parseInterfaceMethodDeclaratorRest();
            if (s4 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c27(s1, s2, s3, s4);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseVoidInterfaceMethodDeclaratorRest() {
      var s0, s1, s2, s3, s4;

      s0 = peg$currPos;
      s1 = peg$parseFormalParameters();
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        s3 = peg$parseTHROWS();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseClassTypeList();
          if (s4 !== peg$FAILED) {
            s3 = [s3, s4];
            s2 = s3;
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 === peg$FAILED) {
          s2 = null;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseSEMI();
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c28(s1, s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseConstantDeclaratorsRest() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$parseConstantDeclaratorRest();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$parseCOMMA();
        if (s4 !== peg$FAILED) {
          s5 = peg$parseConstantDeclarator();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = peg$parseCOMMA();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseConstantDeclarator();
            if (s5 !== peg$FAILED) {
              s4 = [s4, s5];
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c29(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseConstantDeclarator() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = peg$parseIdentifier();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseConstantDeclaratorRest();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c16(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseConstantDeclaratorRest() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parseDim();
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parseDim();
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseEQU();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseVariableInitializer();
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c30(s1, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseEnumDeclaration() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$parseENUM();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseIdentifier();
        if (s2 !== peg$FAILED) {
          s3 = peg$currPos;
          s4 = peg$parseIMPLEMENTS();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseClassTypeList();
            if (s5 !== peg$FAILED) {
              s4 = [s4, s5];
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
          if (s3 === peg$FAILED) {
            s3 = null;
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parseEnumBody();
            if (s4 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c31(s2, s3, s4);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseEnumBody() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$parseLWING();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseEnumConstants();
        if (s2 === peg$FAILED) {
          s2 = null;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseCOMMA();
          if (s3 === peg$FAILED) {
            s3 = null;
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parseEnumBodyDeclarations();
            if (s4 === peg$FAILED) {
              s4 = null;
            }
            if (s4 !== peg$FAILED) {
              s5 = peg$parseRWING();
              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c32(s2, s4);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseEnumConstants() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$parseEnumConstant();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$parseCOMMA();
        if (s4 !== peg$FAILED) {
          s5 = peg$parseEnumConstant();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = peg$parseCOMMA();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseEnumConstant();
            if (s5 !== peg$FAILED) {
              s4 = [s4, s5];
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c29(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseEnumConstant() {
      var s0, s1, s2, s3, s4;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parseAnnotation();
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parseAnnotation();
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseIdentifier();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseArguments();
          if (s3 === peg$FAILED) {
            s3 = null;
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parseClassBody();
            if (s4 === peg$FAILED) {
              s4 = null;
            }
            if (s4 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c33(s1, s2, s3, s4);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseEnumBodyDeclarations() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$parseSEMI();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parseClassBodyDeclaration();
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parseClassBodyDeclaration();
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c34(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseLocalVariableDeclarationStatement() {
      var s0, s1, s2, s3, s4;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$currPos;
      s3 = peg$parseFINAL();
      if (s3 !== peg$FAILED) {
        peg$savedPos = s2;
        s3 = peg$c35();
      }
      s2 = s3;
      if (s2 === peg$FAILED) {
        s2 = peg$parseAnnotation();
      }
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$currPos;
        s3 = peg$parseFINAL();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s2;
          s3 = peg$c35();
        }
        s2 = s3;
        if (s2 === peg$FAILED) {
          s2 = peg$parseAnnotation();
        }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseType();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseVariableDeclarators();
          if (s3 !== peg$FAILED) {
            s4 = peg$parseSEMI();
            if (s4 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c36(s1, s2, s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseVariableDeclarators() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$parseVariableDeclarator();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$parseCOMMA();
        if (s4 !== peg$FAILED) {
          s5 = peg$parseVariableDeclarator();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = peg$parseCOMMA();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseVariableDeclarator();
            if (s5 !== peg$FAILED) {
              s4 = [s4, s5];
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c29(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseVariableDeclarator() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$parseIdentifier();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parseDim();
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parseDim();
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$currPos;
          s4 = peg$parseEQU();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseVariableInitializer();
            if (s5 !== peg$FAILED) {
              s4 = [s4, s5];
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
          if (s3 === peg$FAILED) {
            s3 = null;
          }
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c37(s1, s2, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseFormalParameters() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$parseLPAR();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseFormalParameterList();
        if (s2 === peg$FAILED) {
          s2 = null;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseRPAR();
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c38(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseFormalParameter() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$currPos;
      s3 = peg$parseFINAL();
      if (s3 !== peg$FAILED) {
        peg$savedPos = s2;
        s3 = peg$c35();
      }
      s2 = s3;
      if (s2 === peg$FAILED) {
        s2 = peg$parseAnnotation();
      }
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$currPos;
        s3 = peg$parseFINAL();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s2;
          s3 = peg$c35();
        }
        s2 = s3;
        if (s2 === peg$FAILED) {
          s2 = peg$parseAnnotation();
        }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseType();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseVariableDeclaratorId();
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c39(s1, s2, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseLastFormalParameter() {
      var s0, s1, s2, s3, s4;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$currPos;
      s3 = peg$parseFINAL();
      if (s3 !== peg$FAILED) {
        peg$savedPos = s2;
        s3 = peg$c35();
      }
      s2 = s3;
      if (s2 === peg$FAILED) {
        s2 = peg$parseAnnotation();
      }
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$currPos;
        s3 = peg$parseFINAL();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s2;
          s3 = peg$c35();
        }
        s2 = s3;
        if (s2 === peg$FAILED) {
          s2 = peg$parseAnnotation();
        }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseType();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseELLIPSIS();
          if (s3 !== peg$FAILED) {
            s4 = peg$parseVariableDeclaratorId();
            if (s4 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c40(s1, s2, s4);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseFormalParameterList() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$parseFormalParameter();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$parseCOMMA();
        if (s4 !== peg$FAILED) {
          s5 = peg$parseFormalParameter();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = peg$parseCOMMA();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseFormalParameter();
            if (s5 !== peg$FAILED) {
              s4 = [s4, s5];
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$currPos;
          s4 = peg$parseCOMMA();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseLastFormalParameter();
            if (s5 !== peg$FAILED) {
              s4 = [s4, s5];
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
          if (s3 === peg$FAILED) {
            s3 = null;
          }
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c41(s1, s2, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseLastFormalParameter();
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c42(s1);
        }
        s0 = s1;
      }

      return s0;
    }

    function peg$parseVariableDeclaratorId() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$parseIdentifier();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parseDim();
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parseDim();
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c43(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseBlock() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$parseLWING();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseBlockStatements();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseRWING();
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c44(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseBlockStatements() {
      var s0, s1;

      s0 = [];
      s1 = peg$parseBlockStatement();
      while (s1 !== peg$FAILED) {
        s0.push(s1);
        s1 = peg$parseBlockStatement();
      }

      return s0;
    }

    function peg$parseBlockStatement() {
      var s0, s1, s2;

      s0 = peg$parseLocalVariableDeclarationStatement();
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = [];
        s2 = peg$parseModifier();
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$parseModifier();
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$parseClassDeclaration();
          if (s2 === peg$FAILED) {
            s2 = peg$parseEnumDeclaration();
          }
          if (s2 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c45(s1, s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        if (s0 === peg$FAILED) {
          s0 = peg$parseStatement();
        }
      }

      return s0;
    }

    function peg$parseStatement() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9;

      s0 = peg$parseBlock();
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseASSERT();
        if (s1 !== peg$FAILED) {
          s2 = peg$parseExpression();
          if (s2 !== peg$FAILED) {
            s3 = peg$currPos;
            s4 = peg$parseCOLON();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseExpression();
              if (s5 !== peg$FAILED) {
                s4 = [s4, s5];
                s3 = s4;
              } else {
                peg$currPos = s3;
                s3 = peg$FAILED;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
            if (s3 === peg$FAILED) {
              s3 = null;
            }
            if (s3 !== peg$FAILED) {
              s4 = peg$parseSEMI();
              if (s4 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c46(s2, s3);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          s1 = peg$parseIF();
          if (s1 !== peg$FAILED) {
            s2 = peg$parseParExpression();
            if (s2 !== peg$FAILED) {
              s3 = peg$parseStatement();
              if (s3 !== peg$FAILED) {
                s4 = peg$currPos;
                s5 = peg$parseELSE();
                if (s5 !== peg$FAILED) {
                  s6 = peg$parseStatement();
                  if (s6 !== peg$FAILED) {
                    s5 = [s5, s6];
                    s4 = s5;
                  } else {
                    peg$currPos = s4;
                    s4 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s4;
                  s4 = peg$FAILED;
                }
                if (s4 === peg$FAILED) {
                  s4 = null;
                }
                if (s4 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s1 = peg$c47(s2, s3, s4);
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            s1 = peg$parseFOR();
            if (s1 !== peg$FAILED) {
              s2 = peg$parseLPAR();
              if (s2 !== peg$FAILED) {
                s3 = peg$parseForInit();
                if (s3 === peg$FAILED) {
                  s3 = null;
                }
                if (s3 !== peg$FAILED) {
                  s4 = peg$parseSEMI();
                  if (s4 !== peg$FAILED) {
                    s5 = peg$parseExpression();
                    if (s5 === peg$FAILED) {
                      s5 = null;
                    }
                    if (s5 !== peg$FAILED) {
                      s6 = peg$parseSEMI();
                      if (s6 !== peg$FAILED) {
                        s7 = peg$parseForUpdate();
                        if (s7 === peg$FAILED) {
                          s7 = null;
                        }
                        if (s7 !== peg$FAILED) {
                          s8 = peg$parseRPAR();
                          if (s8 !== peg$FAILED) {
                            s9 = peg$parseStatement();
                            if (s9 !== peg$FAILED) {
                              peg$savedPos = s0;
                              s1 = peg$c48(s3, s5, s7, s9);
                              s0 = s1;
                            } else {
                              peg$currPos = s0;
                              s0 = peg$FAILED;
                            }
                          } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
            if (s0 === peg$FAILED) {
              s0 = peg$currPos;
              s1 = peg$parseFOR();
              if (s1 !== peg$FAILED) {
                s2 = peg$parseLPAR();
                if (s2 !== peg$FAILED) {
                  s3 = peg$parseFormalParameter();
                  if (s3 !== peg$FAILED) {
                    s4 = peg$parseCOLON();
                    if (s4 !== peg$FAILED) {
                      s5 = peg$parseExpression();
                      if (s5 !== peg$FAILED) {
                        s6 = peg$parseRPAR();
                        if (s6 !== peg$FAILED) {
                          s7 = peg$parseStatement();
                          if (s7 !== peg$FAILED) {
                            peg$savedPos = s0;
                            s1 = peg$c49(s3, s5, s7);
                            s0 = s1;
                          } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              if (s0 === peg$FAILED) {
                s0 = peg$currPos;
                s1 = peg$parseWHILE();
                if (s1 !== peg$FAILED) {
                  s2 = peg$parseParExpression();
                  if (s2 !== peg$FAILED) {
                    s3 = peg$parseStatement();
                    if (s3 !== peg$FAILED) {
                      peg$savedPos = s0;
                      s1 = peg$c50(s2, s3);
                      s0 = s1;
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
                if (s0 === peg$FAILED) {
                  s0 = peg$currPos;
                  s1 = peg$parseDO();
                  if (s1 !== peg$FAILED) {
                    s2 = peg$parseStatement();
                    if (s2 !== peg$FAILED) {
                      s3 = peg$parseWHILE();
                      if (s3 !== peg$FAILED) {
                        s4 = peg$parseParExpression();
                        if (s4 !== peg$FAILED) {
                          s5 = peg$parseSEMI();
                          if (s5 !== peg$FAILED) {
                            peg$savedPos = s0;
                            s1 = peg$c51(s2, s4);
                            s0 = s1;
                          } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                  if (s0 === peg$FAILED) {
                    s0 = peg$currPos;
                    s1 = peg$parseTRY();
                    if (s1 !== peg$FAILED) {
                      s2 = peg$parseLPAR();
                      if (s2 !== peg$FAILED) {
                        s3 = peg$parseResource();
                        if (s3 !== peg$FAILED) {
                          s4 = [];
                          s5 = peg$currPos;
                          s6 = peg$parseSEMI();
                          if (s6 !== peg$FAILED) {
                            s7 = peg$parseResource();
                            if (s7 !== peg$FAILED) {
                              s6 = [s6, s7];
                              s5 = s6;
                            } else {
                              peg$currPos = s5;
                              s5 = peg$FAILED;
                            }
                          } else {
                            peg$currPos = s5;
                            s5 = peg$FAILED;
                          }
                          while (s5 !== peg$FAILED) {
                            s4.push(s5);
                            s5 = peg$currPos;
                            s6 = peg$parseSEMI();
                            if (s6 !== peg$FAILED) {
                              s7 = peg$parseResource();
                              if (s7 !== peg$FAILED) {
                                s6 = [s6, s7];
                                s5 = s6;
                              } else {
                                peg$currPos = s5;
                                s5 = peg$FAILED;
                              }
                            } else {
                              peg$currPos = s5;
                              s5 = peg$FAILED;
                            }
                          }
                          if (s4 !== peg$FAILED) {
                            s5 = peg$parseSEMI();
                            if (s5 === peg$FAILED) {
                              s5 = null;
                            }
                            if (s5 !== peg$FAILED) {
                              s6 = peg$parseRPAR();
                              if (s6 !== peg$FAILED) {
                                s7 = peg$parseBlock();
                                if (s7 !== peg$FAILED) {
                                  s8 = [];
                                  s9 = peg$parseCatch();
                                  while (s9 !== peg$FAILED) {
                                    s8.push(s9);
                                    s9 = peg$parseCatch();
                                  }
                                  if (s8 !== peg$FAILED) {
                                    s9 = peg$parseFinally();
                                    if (s9 === peg$FAILED) {
                                      s9 = null;
                                    }
                                    if (s9 !== peg$FAILED) {
                                      peg$savedPos = s0;
                                      s1 = peg$c52(s3, s4, s7, s8, s9);
                                      s0 = s1;
                                    } else {
                                      peg$currPos = s0;
                                      s0 = peg$FAILED;
                                    }
                                  } else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                  }
                                } else {
                                  peg$currPos = s0;
                                  s0 = peg$FAILED;
                                }
                              } else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                              }
                            } else {
                              peg$currPos = s0;
                              s0 = peg$FAILED;
                            }
                          } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                    if (s0 === peg$FAILED) {
                      s0 = peg$currPos;
                      s1 = peg$parseTRY();
                      if (s1 !== peg$FAILED) {
                        s2 = peg$parseBlock();
                        if (s2 !== peg$FAILED) {
                          s3 = peg$currPos;
                          s4 = [];
                          s5 = peg$parseCatch();
                          if (s5 !== peg$FAILED) {
                            while (s5 !== peg$FAILED) {
                              s4.push(s5);
                              s5 = peg$parseCatch();
                            }
                          } else {
                            s4 = peg$FAILED;
                          }
                          if (s4 !== peg$FAILED) {
                            s5 = peg$parseFinally();
                            if (s5 === peg$FAILED) {
                              s5 = null;
                            }
                            if (s5 !== peg$FAILED) {
                              peg$savedPos = s3;
                              s4 = peg$c53(s2, s4, s5);
                              s3 = s4;
                            } else {
                              peg$currPos = s3;
                              s3 = peg$FAILED;
                            }
                          } else {
                            peg$currPos = s3;
                            s3 = peg$FAILED;
                          }
                          if (s3 === peg$FAILED) {
                            s3 = peg$currPos;
                            s4 = peg$parseFinally();
                            if (s4 !== peg$FAILED) {
                              peg$savedPos = s3;
                              s4 = peg$c54(s2, s4);
                            }
                            s3 = s4;
                          }
                          if (s3 !== peg$FAILED) {
                            peg$savedPos = s0;
                            s1 = peg$c55(s2, s3);
                            s0 = s1;
                          } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                      if (s0 === peg$FAILED) {
                        s0 = peg$currPos;
                        s1 = peg$parseSWITCH();
                        if (s1 !== peg$FAILED) {
                          s2 = peg$parseParExpression();
                          if (s2 !== peg$FAILED) {
                            s3 = peg$parseLWING();
                            if (s3 !== peg$FAILED) {
                              s4 = peg$parseSwitchBlockStatementGroups();
                              if (s4 !== peg$FAILED) {
                                s5 = peg$parseRWING();
                                if (s5 !== peg$FAILED) {
                                  peg$savedPos = s0;
                                  s1 = peg$c56(s2, s4);
                                  s0 = s1;
                                } else {
                                  peg$currPos = s0;
                                  s0 = peg$FAILED;
                                }
                              } else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                              }
                            } else {
                              peg$currPos = s0;
                              s0 = peg$FAILED;
                            }
                          } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                        if (s0 === peg$FAILED) {
                          s0 = peg$currPos;
                          s1 = peg$parseSYNCHRONIZED();
                          if (s1 !== peg$FAILED) {
                            s2 = peg$parseParExpression();
                            if (s2 !== peg$FAILED) {
                              s3 = peg$parseBlock();
                              if (s3 !== peg$FAILED) {
                                peg$savedPos = s0;
                                s1 = peg$c57(s2, s3);
                                s0 = s1;
                              } else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                              }
                            } else {
                              peg$currPos = s0;
                              s0 = peg$FAILED;
                            }
                          } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                          }
                          if (s0 === peg$FAILED) {
                            s0 = peg$currPos;
                            s1 = peg$parseRETURN();
                            if (s1 !== peg$FAILED) {
                              s2 = peg$parseExpression();
                              if (s2 === peg$FAILED) {
                                s2 = null;
                              }
                              if (s2 !== peg$FAILED) {
                                s3 = peg$parseSEMI();
                                if (s3 !== peg$FAILED) {
                                  peg$savedPos = s0;
                                  s1 = peg$c58(s2);
                                  s0 = s1;
                                } else {
                                  peg$currPos = s0;
                                  s0 = peg$FAILED;
                                }
                              } else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                              }
                            } else {
                              peg$currPos = s0;
                              s0 = peg$FAILED;
                            }
                            if (s0 === peg$FAILED) {
                              s0 = peg$currPos;
                              s1 = peg$parseTHROW();
                              if (s1 !== peg$FAILED) {
                                s2 = peg$parseExpression();
                                if (s2 !== peg$FAILED) {
                                  s3 = peg$parseSEMI();
                                  if (s3 !== peg$FAILED) {
                                    peg$savedPos = s0;
                                    s1 = peg$c59(s2);
                                    s0 = s1;
                                  } else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                  }
                                } else {
                                  peg$currPos = s0;
                                  s0 = peg$FAILED;
                                }
                              } else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                              }
                              if (s0 === peg$FAILED) {
                                s0 = peg$currPos;
                                s1 = peg$parseBREAK();
                                if (s1 !== peg$FAILED) {
                                  s2 = peg$parseIdentifier();
                                  if (s2 === peg$FAILED) {
                                    s2 = null;
                                  }
                                  if (s2 !== peg$FAILED) {
                                    s3 = peg$parseSEMI();
                                    if (s3 !== peg$FAILED) {
                                      peg$savedPos = s0;
                                      s1 = peg$c60(s2);
                                      s0 = s1;
                                    } else {
                                      peg$currPos = s0;
                                      s0 = peg$FAILED;
                                    }
                                  } else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                  }
                                } else {
                                  peg$currPos = s0;
                                  s0 = peg$FAILED;
                                }
                                if (s0 === peg$FAILED) {
                                  s0 = peg$currPos;
                                  s1 = peg$parseCONTINUE();
                                  if (s1 !== peg$FAILED) {
                                    s2 = peg$parseIdentifier();
                                    if (s2 === peg$FAILED) {
                                      s2 = null;
                                    }
                                    if (s2 !== peg$FAILED) {
                                      s3 = peg$parseSEMI();
                                      if (s3 !== peg$FAILED) {
                                        peg$savedPos = s0;
                                        s1 = peg$c61(s2);
                                        s0 = s1;
                                      } else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                      }
                                    } else {
                                      peg$currPos = s0;
                                      s0 = peg$FAILED;
                                    }
                                  } else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                  }
                                  if (s0 === peg$FAILED) {
                                    s0 = peg$currPos;
                                    s1 = peg$parseSEMI();
                                    if (s1 !== peg$FAILED) {
                                      peg$savedPos = s0;
                                      s1 = peg$c62();
                                    }
                                    s0 = s1;
                                    if (s0 === peg$FAILED) {
                                      s0 = peg$currPos;
                                      s1 = peg$parseStatementExpression();
                                      if (s1 !== peg$FAILED) {
                                        s2 = peg$parseSEMI();
                                        if (s2 !== peg$FAILED) {
                                          peg$savedPos = s0;
                                          s1 = peg$c63(s1);
                                          s0 = s1;
                                        } else {
                                          peg$currPos = s0;
                                          s0 = peg$FAILED;
                                        }
                                      } else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                      }
                                      if (s0 === peg$FAILED) {
                                        s0 = peg$currPos;
                                        s1 = peg$parseIdentifier();
                                        if (s1 !== peg$FAILED) {
                                          s2 = peg$parseCOLON();
                                          if (s2 !== peg$FAILED) {
                                            s3 = peg$parseStatement();
                                            if (s3 !== peg$FAILED) {
                                              peg$savedPos = s0;
                                              s1 = peg$c64(s1, s3);
                                              s0 = s1;
                                            } else {
                                              peg$currPos = s0;
                                              s0 = peg$FAILED;
                                            }
                                          } else {
                                            peg$currPos = s0;
                                            s0 = peg$FAILED;
                                          }
                                        } else {
                                          peg$currPos = s0;
                                          s0 = peg$FAILED;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }

      return s0;
    }

    function peg$parseResource() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$currPos;
      s3 = peg$parseFINAL();
      if (s3 !== peg$FAILED) {
        peg$savedPos = s2;
        s3 = peg$c35();
      }
      s2 = s3;
      if (s2 === peg$FAILED) {
        s2 = peg$parseAnnotation();
      }
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$currPos;
        s3 = peg$parseFINAL();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s2;
          s3 = peg$c35();
        }
        s2 = s3;
        if (s2 === peg$FAILED) {
          s2 = peg$parseAnnotation();
        }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseType();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseVariableDeclaratorId();
          if (s3 !== peg$FAILED) {
            s4 = peg$parseEQU();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseExpression();
              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c65(s1, s2, s3, s5);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseCatch() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8;

      s0 = peg$currPos;
      s1 = peg$parseCATCH();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseLPAR();
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$currPos;
          s5 = peg$parseFINAL();
          if (s5 !== peg$FAILED) {
            peg$savedPos = s4;
            s5 = peg$c35();
          }
          s4 = s5;
          if (s4 === peg$FAILED) {
            s4 = peg$parseAnnotation();
          }
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$currPos;
            s5 = peg$parseFINAL();
            if (s5 !== peg$FAILED) {
              peg$savedPos = s4;
              s5 = peg$c35();
            }
            s4 = s5;
            if (s4 === peg$FAILED) {
              s4 = peg$parseAnnotation();
            }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parseType();
            if (s4 !== peg$FAILED) {
              s5 = [];
              s6 = peg$currPos;
              s7 = peg$parseOR();
              if (s7 !== peg$FAILED) {
                s8 = peg$parseType();
                if (s8 !== peg$FAILED) {
                  s7 = [s7, s8];
                  s6 = s7;
                } else {
                  peg$currPos = s6;
                  s6 = peg$FAILED;
                }
              } else {
                peg$currPos = s6;
                s6 = peg$FAILED;
              }
              while (s6 !== peg$FAILED) {
                s5.push(s6);
                s6 = peg$currPos;
                s7 = peg$parseOR();
                if (s7 !== peg$FAILED) {
                  s8 = peg$parseType();
                  if (s8 !== peg$FAILED) {
                    s7 = [s7, s8];
                    s6 = s7;
                  } else {
                    peg$currPos = s6;
                    s6 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s6;
                  s6 = peg$FAILED;
                }
              }
              if (s5 !== peg$FAILED) {
                s6 = peg$parseVariableDeclaratorId();
                if (s6 !== peg$FAILED) {
                  s7 = peg$parseRPAR();
                  if (s7 !== peg$FAILED) {
                    s8 = peg$parseBlock();
                    if (s8 !== peg$FAILED) {
                      peg$savedPos = s0;
                      s1 = peg$c66(s3, s4, s5, s6, s8);
                      s0 = s1;
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseFinally() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = peg$parseFINALLY();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseBlock();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c67(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseSwitchBlockStatementGroups() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parseSwitchBlockStatementGroup();
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parseSwitchBlockStatementGroup();
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c68(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parseSwitchBlockStatementGroup() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = peg$parseSwitchLabel();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseBlockStatements();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c69(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseSwitchLabel() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$parseCASE();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseExpression();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseCOLON();
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c70(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseCASE();
        if (s1 !== peg$FAILED) {
          s2 = peg$parseIdentifier();
          if (s2 !== peg$FAILED) {
            s3 = peg$parseCOLON();
            if (s3 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c70(s2);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          s1 = peg$parseDEFAULT();
          if (s1 !== peg$FAILED) {
            s2 = peg$parseCOLON();
            if (s2 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c3();
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        }
      }

      return s0;
    }

    function peg$parseForInit() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$currPos;
      s3 = peg$parseFINAL();
      if (s3 !== peg$FAILED) {
        peg$savedPos = s2;
        s3 = peg$c35();
      }
      s2 = s3;
      if (s2 === peg$FAILED) {
        s2 = peg$parseAnnotation();
      }
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$currPos;
        s3 = peg$parseFINAL();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s2;
          s3 = peg$c35();
        }
        s2 = s3;
        if (s2 === peg$FAILED) {
          s2 = peg$parseAnnotation();
        }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseType();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseVariableDeclarators();
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c71(s1, s2, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseStatementExpression();
        if (s1 !== peg$FAILED) {
          s2 = [];
          s3 = peg$currPos;
          s4 = peg$parseCOMMA();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseStatementExpression();
            if (s5 !== peg$FAILED) {
              s4 = [s4, s5];
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
          while (s3 !== peg$FAILED) {
            s2.push(s3);
            s3 = peg$currPos;
            s4 = peg$parseCOMMA();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseStatementExpression();
              if (s5 !== peg$FAILED) {
                s4 = [s4, s5];
                s3 = s4;
              } else {
                peg$currPos = s3;
                s3 = peg$FAILED;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          }
          if (s2 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c72(s1, s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      }

      return s0;
    }

    function peg$parseForUpdate() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$parseStatementExpression();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$parseCOMMA();
        if (s4 !== peg$FAILED) {
          s5 = peg$parseStatementExpression();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = peg$parseCOMMA();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseStatementExpression();
            if (s5 !== peg$FAILED) {
              s4 = [s4, s5];
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c72(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseStatementExpression() {
      var s0, s1;

      s0 = peg$currPos;
      s1 = peg$parseExpression();
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c73(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parseExpression() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$parseConditionalExpression();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseAssignmentOperator();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseExpression();
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c74(s1, s2, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$parseConditionalExpression();
      }

      return s0;
    }

    function peg$parseAssignmentOperator() {
      var s0;

      s0 = peg$parseEQU();
      if (s0 === peg$FAILED) {
        s0 = peg$parsePLUSEQU();
        if (s0 === peg$FAILED) {
          s0 = peg$parseMINUSEQU();
          if (s0 === peg$FAILED) {
            s0 = peg$parseSTAREQU();
            if (s0 === peg$FAILED) {
              s0 = peg$parseDIVEQU();
              if (s0 === peg$FAILED) {
                s0 = peg$parseANDEQU();
                if (s0 === peg$FAILED) {
                  s0 = peg$parseOREQU();
                  if (s0 === peg$FAILED) {
                    s0 = peg$parseHATEQU();
                    if (s0 === peg$FAILED) {
                      s0 = peg$parseMODEQU();
                      if (s0 === peg$FAILED) {
                        s0 = peg$parseSLEQU();
                        if (s0 === peg$FAILED) {
                          s0 = peg$parseSREQU();
                          if (s0 === peg$FAILED) {
                            s0 = peg$parseBSREQU();
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }

      return s0;
    }

    function peg$parseConditionalExpression() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$parseConditionalOrExpression();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseQUERY();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseExpression();
          if (s3 !== peg$FAILED) {
            s4 = peg$parseCOLON();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseConditionalExpression();
              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c75(s1, s3, s5);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$parseConditionalOrExpression();
      }

      return s0;
    }

    function peg$parseConditionalOrExpression() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$parseConditionalAndExpression();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$parseOROR();
        if (s4 !== peg$FAILED) {
          s5 = peg$parseConditionalAndExpression();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = peg$parseOROR();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseConditionalAndExpression();
            if (s5 !== peg$FAILED) {
              s4 = [s4, s5];
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c76(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseConditionalAndExpression() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$parseInclusiveOrExpression();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$parseANDAND();
        if (s4 !== peg$FAILED) {
          s5 = peg$parseInclusiveOrExpression();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = peg$parseANDAND();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseInclusiveOrExpression();
            if (s5 !== peg$FAILED) {
              s4 = [s4, s5];
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c76(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseInclusiveOrExpression() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$parseExclusiveOrExpression();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$parseOR();
        if (s4 !== peg$FAILED) {
          s5 = peg$parseExclusiveOrExpression();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = peg$parseOR();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseExclusiveOrExpression();
            if (s5 !== peg$FAILED) {
              s4 = [s4, s5];
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c76(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseExclusiveOrExpression() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$parseAndExpression();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$parseHAT();
        if (s4 !== peg$FAILED) {
          s5 = peg$parseAndExpression();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = peg$parseHAT();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseAndExpression();
            if (s5 !== peg$FAILED) {
              s4 = [s4, s5];
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c76(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseAndExpression() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$parseEqualityExpression();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$parseAND();
        if (s4 !== peg$FAILED) {
          s5 = peg$parseEqualityExpression();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = peg$parseAND();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseEqualityExpression();
            if (s5 !== peg$FAILED) {
              s4 = [s4, s5];
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c76(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseEqualityExpression() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$parseRelationalExpression();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$parseEQUAL();
        if (s4 === peg$FAILED) {
          s4 = peg$parseNOTEQUAL();
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$parseRelationalExpression();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = peg$parseEQUAL();
          if (s4 === peg$FAILED) {
            s4 = peg$parseNOTEQUAL();
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parseRelationalExpression();
            if (s5 !== peg$FAILED) {
              s4 = [s4, s5];
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c76(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseRelationalExpression() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$parseShiftExpression();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$parseLE();
        if (s4 === peg$FAILED) {
          s4 = peg$parseGE();
          if (s4 === peg$FAILED) {
            s4 = peg$parseLT();
            if (s4 === peg$FAILED) {
              s4 = peg$parseGT();
            }
          }
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$parseShiftExpression();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        if (s3 === peg$FAILED) {
          s3 = peg$currPos;
          s4 = peg$parseINSTANCEOF();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseReferenceType();
            if (s5 !== peg$FAILED) {
              s4 = [s4, s5];
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = peg$parseLE();
          if (s4 === peg$FAILED) {
            s4 = peg$parseGE();
            if (s4 === peg$FAILED) {
              s4 = peg$parseLT();
              if (s4 === peg$FAILED) {
                s4 = peg$parseGT();
              }
            }
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parseShiftExpression();
            if (s5 !== peg$FAILED) {
              s4 = [s4, s5];
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
          if (s3 === peg$FAILED) {
            s3 = peg$currPos;
            s4 = peg$parseINSTANCEOF();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseReferenceType();
              if (s5 !== peg$FAILED) {
                s4 = [s4, s5];
                s3 = s4;
              } else {
                peg$currPos = s3;
                s3 = peg$FAILED;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          }
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c77(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseShiftExpression() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$parseAdditiveExpression();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$parseSL();
        if (s4 === peg$FAILED) {
          s4 = peg$parseSR();
          if (s4 === peg$FAILED) {
            s4 = peg$parseBSR();
          }
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$parseAdditiveExpression();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = peg$parseSL();
          if (s4 === peg$FAILED) {
            s4 = peg$parseSR();
            if (s4 === peg$FAILED) {
              s4 = peg$parseBSR();
            }
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parseAdditiveExpression();
            if (s5 !== peg$FAILED) {
              s4 = [s4, s5];
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c76(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseAdditiveExpression() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$parseMultiplicativeExpression();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$parsePLUS();
        if (s4 === peg$FAILED) {
          s4 = peg$parseMINUS();
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$parseMultiplicativeExpression();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = peg$parsePLUS();
          if (s4 === peg$FAILED) {
            s4 = peg$parseMINUS();
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parseMultiplicativeExpression();
            if (s5 !== peg$FAILED) {
              s4 = [s4, s5];
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c76(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseMultiplicativeExpression() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$parseUnaryExpression();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$parseSTAR();
        if (s4 === peg$FAILED) {
          s4 = peg$parseDIV();
          if (s4 === peg$FAILED) {
            s4 = peg$parseMOD();
          }
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$parseUnaryExpression();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = peg$parseSTAR();
          if (s4 === peg$FAILED) {
            s4 = peg$parseDIV();
            if (s4 === peg$FAILED) {
              s4 = peg$parseMOD();
            }
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parseUnaryExpression();
            if (s5 !== peg$FAILED) {
              s4 = [s4, s5];
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c76(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseUnaryExpression() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = peg$parsePrefixOp();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseUnaryExpression();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c78(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$parseUnaryExpressionNotPlusMinus();
      }

      return s0;
    }

    function peg$parseUnaryExpressionNotPlusMinus() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$parseCastExpression();
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c79(s1);
      }
      s0 = s1;
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parsePrimary();
        if (s1 !== peg$FAILED) {
          s2 = peg$parseSelector();
          if (s2 !== peg$FAILED) {
            s3 = [];
            s4 = peg$parseSelector();
            while (s4 !== peg$FAILED) {
              s3.push(s4);
              s4 = peg$parseSelector();
            }
            if (s3 !== peg$FAILED) {
              s4 = [];
              s5 = peg$parsePostfixOp();
              if (s5 !== peg$FAILED) {
                while (s5 !== peg$FAILED) {
                  s4.push(s5);
                  s5 = peg$parsePostfixOp();
                }
              } else {
                s4 = peg$FAILED;
              }
              if (s4 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c80(s1, s2, s3, s4);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          s1 = peg$parsePrimary();
          if (s1 !== peg$FAILED) {
            s2 = peg$parseSelector();
            if (s2 !== peg$FAILED) {
              s3 = [];
              s4 = peg$parseSelector();
              while (s4 !== peg$FAILED) {
                s3.push(s4);
                s4 = peg$parseSelector();
              }
              if (s3 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c81(s1, s2, s3);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            s1 = peg$parsePrimary();
            if (s1 !== peg$FAILED) {
              s2 = [];
              s3 = peg$parsePostfixOp();
              if (s3 !== peg$FAILED) {
                while (s3 !== peg$FAILED) {
                  s2.push(s3);
                  s3 = peg$parsePostfixOp();
                }
              } else {
                s2 = peg$FAILED;
              }
              if (s2 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c82(s1, s2);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
            if (s0 === peg$FAILED) {
              s0 = peg$parsePrimary();
            }
          }
        }
      }

      return s0;
    }

    function peg$parseCastExpression() {
      var s0, s1, s2, s3, s4;

      s0 = peg$currPos;
      s1 = peg$parseLPAR();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseBasicType();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseRPAR();
          if (s3 !== peg$FAILED) {
            s4 = peg$parseUnaryExpression();
            if (s4 !== peg$FAILED) {
              s1 = [s1, s2, s3, s4];
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseLPAR();
        if (s1 !== peg$FAILED) {
          s2 = peg$parseReferenceType();
          if (s2 !== peg$FAILED) {
            s3 = peg$parseRPAR();
            if (s3 !== peg$FAILED) {
              s4 = peg$parseUnaryExpressionNotPlusMinus();
              if (s4 !== peg$FAILED) {
                s1 = [s1, s2, s3, s4];
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      }

      return s0;
    }

    function peg$parsePrimary() {
      var s0, s1, s2, s3, s4;

      s0 = peg$parseParExpression();
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseNonWildcardTypeArguments();
        if (s1 !== peg$FAILED) {
          s2 = peg$parseExplicitGenericInvocationSuffix();
          if (s2 === peg$FAILED) {
            s2 = peg$currPos;
            s3 = peg$parseTHIS();
            if (s3 !== peg$FAILED) {
              s4 = peg$parseArguments();
              if (s4 !== peg$FAILED) {
                peg$savedPos = s2;
                s3 = peg$c83(s4);
                s2 = s3;
              } else {
                peg$currPos = s2;
                s2 = peg$FAILED;
              }
            } else {
              peg$currPos = s2;
              s2 = peg$FAILED;
            }
          }
          if (s2 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c84(s1, s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          s1 = peg$parseTHIS();
          if (s1 !== peg$FAILED) {
            s2 = peg$parseArguments();
            if (s2 === peg$FAILED) {
              s2 = null;
            }
            if (s2 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c85(s2);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            s1 = peg$parseSUPER();
            if (s1 !== peg$FAILED) {
              s2 = peg$parseSuperSuffix();
              if (s2 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c86(s2);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
            if (s0 === peg$FAILED) {
              s0 = peg$parseLiteral();
              if (s0 === peg$FAILED) {
                s0 = peg$currPos;
                s1 = peg$parseNEW();
                if (s1 !== peg$FAILED) {
                  s2 = peg$parseCreator();
                  if (s2 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c87(s2);
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
                if (s0 === peg$FAILED) {
                  s0 = peg$parseQualifiedIdentifierSuffix();
                  if (s0 === peg$FAILED) {
                    s0 = peg$parseQualifiedIdentifier();
                    if (s0 === peg$FAILED) {
                      s0 = peg$currPos;
                      s1 = peg$parseBasicType();
                      if (s1 !== peg$FAILED) {
                        s2 = [];
                        s3 = peg$parseDim();
                        while (s3 !== peg$FAILED) {
                          s2.push(s3);
                          s3 = peg$parseDim();
                        }
                        if (s2 !== peg$FAILED) {
                          s3 = peg$parseDOT();
                          if (s3 !== peg$FAILED) {
                            s4 = peg$parseCLASS();
                            if (s4 !== peg$FAILED) {
                              peg$savedPos = s0;
                              s1 = peg$c88(s1, s2);
                              s0 = s1;
                            } else {
                              peg$currPos = s0;
                              s0 = peg$FAILED;
                            }
                          } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                      if (s0 === peg$FAILED) {
                        s0 = peg$currPos;
                        s1 = peg$parseVOID();
                        if (s1 !== peg$FAILED) {
                          s2 = peg$parseDOT();
                          if (s2 !== peg$FAILED) {
                            s3 = peg$parseCLASS();
                            if (s3 !== peg$FAILED) {
                              peg$savedPos = s0;
                              s1 = peg$c89();
                              s0 = s1;
                            } else {
                              peg$currPos = s0;
                              s0 = peg$FAILED;
                            }
                          } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }

      return s0;
    }

    function peg$parseQualifiedIdentifierSuffix() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$parseQualifiedIdentifier();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parseDim();
        if (s3 !== peg$FAILED) {
          while (s3 !== peg$FAILED) {
            s2.push(s3);
            s3 = peg$parseDim();
          }
        } else {
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseDOT();
          if (s3 !== peg$FAILED) {
            s4 = peg$parseCLASS();
            if (s4 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c90(s1, s2);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseQualifiedIdentifier();
        if (s1 !== peg$FAILED) {
          s2 = peg$parseLBRK();
          if (s2 !== peg$FAILED) {
            s3 = peg$parseExpression();
            if (s3 !== peg$FAILED) {
              s4 = peg$parseRBRK();
              if (s4 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c91(s1, s3);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          s1 = peg$parseQualifiedIdentifier();
          if (s1 !== peg$FAILED) {
            s2 = peg$parseArguments();
            if (s2 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c92(s1, s2);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            s1 = peg$parseQualifiedIdentifier();
            if (s1 !== peg$FAILED) {
              s2 = peg$parseDOT();
              if (s2 !== peg$FAILED) {
                s3 = peg$parseCLASS();
                if (s3 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s1 = peg$c93(s1);
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
            if (s0 === peg$FAILED) {
              s0 = peg$currPos;
              s1 = peg$parseQualifiedIdentifier();
              if (s1 !== peg$FAILED) {
                s2 = peg$parseDOT();
                if (s2 !== peg$FAILED) {
                  s3 = peg$parseExplicitGenericInvocation();
                  if (s3 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c94(s1, s3);
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              if (s0 === peg$FAILED) {
                s0 = peg$currPos;
                s1 = peg$parseQualifiedIdentifier();
                if (s1 !== peg$FAILED) {
                  s2 = peg$parseDOT();
                  if (s2 !== peg$FAILED) {
                    s3 = peg$parseTHIS();
                    if (s3 !== peg$FAILED) {
                      peg$savedPos = s0;
                      s1 = peg$c95(s1);
                      s0 = s1;
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
                if (s0 === peg$FAILED) {
                  s0 = peg$currPos;
                  s1 = peg$parseQualifiedIdentifier();
                  if (s1 !== peg$FAILED) {
                    s2 = peg$parseDOT();
                    if (s2 !== peg$FAILED) {
                      s3 = peg$parseSUPER();
                      if (s3 !== peg$FAILED) {
                        s4 = peg$parseArguments();
                        if (s4 !== peg$FAILED) {
                          peg$savedPos = s0;
                          s1 = peg$c96(s1, s4);
                          s0 = s1;
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                  if (s0 === peg$FAILED) {
                    s0 = peg$currPos;
                    s1 = peg$parseQualifiedIdentifier();
                    if (s1 !== peg$FAILED) {
                      s2 = peg$parseDOT();
                      if (s2 !== peg$FAILED) {
                        s3 = peg$parseNEW();
                        if (s3 !== peg$FAILED) {
                          s4 = peg$parseNonWildcardTypeArguments();
                          if (s4 === peg$FAILED) {
                            s4 = null;
                          }
                          if (s4 !== peg$FAILED) {
                            s5 = peg$parseInnerCreator();
                            if (s5 !== peg$FAILED) {
                              peg$savedPos = s0;
                              s1 = peg$c97(s1, s4, s5);
                              s0 = s1;
                            } else {
                              peg$currPos = s0;
                              s0 = peg$FAILED;
                            }
                          } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  }
                }
              }
            }
          }
        }
      }

      return s0;
    }

    function peg$parseExplicitGenericInvocation() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = peg$parseNonWildcardTypeArguments();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseExplicitGenericInvocationSuffix();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c84(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseNonWildcardTypeArguments() {
      var s0, s1, s2, s3, s4, s5, s6;

      s0 = peg$currPos;
      s1 = peg$parseLPOINT();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseReferenceType();
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$currPos;
          s5 = peg$parseCOMMA();
          if (s5 !== peg$FAILED) {
            s6 = peg$parseReferenceType();
            if (s6 !== peg$FAILED) {
              s5 = [s5, s6];
              s4 = s5;
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$currPos;
            s5 = peg$parseCOMMA();
            if (s5 !== peg$FAILED) {
              s6 = peg$parseReferenceType();
              if (s6 !== peg$FAILED) {
                s5 = [s5, s6];
                s4 = s5;
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parseRPOINT();
            if (s4 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c29(s2, s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseTypeArgumentsOrDiamond() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = peg$parseLPOINT();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseRPOINT();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c98();
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$parseTypeArguments();
      }

      return s0;
    }

    function peg$parseNonWildcardTypeArgumentsOrDiamond() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = peg$parseLPOINT();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseRPOINT();
        if (s2 !== peg$FAILED) {
          s1 = [s1, s2];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$parseNonWildcardTypeArguments();
      }

      return s0;
    }

    function peg$parseExplicitGenericInvocationSuffix() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = peg$parseSUPER();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseSuperSuffix();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c99(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseIdentifier();
        if (s1 !== peg$FAILED) {
          s2 = peg$parseArguments();
          if (s2 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c100(s1, s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      }

      return s0;
    }

    function peg$parsePrefixOp() {
      var s0, s1;

      s0 = peg$currPos;
      s1 = peg$parseINC();
      if (s1 === peg$FAILED) {
        s1 = peg$parseDEC();
        if (s1 === peg$FAILED) {
          s1 = peg$parseBANG();
          if (s1 === peg$FAILED) {
            s1 = peg$parseTILDA();
            if (s1 === peg$FAILED) {
              s1 = peg$parsePLUS();
              if (s1 === peg$FAILED) {
                s1 = peg$parseMINUS();
              }
            }
          }
        }
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c101(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parsePostfixOp() {
      var s0, s1;

      s0 = peg$currPos;
      s1 = peg$parseINC();
      if (s1 === peg$FAILED) {
        s1 = peg$parseDEC();
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c101(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parseSelector() {
      var s0, s1, s2, s3, s4;

      s0 = peg$currPos;
      s1 = peg$parseDOT();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseIdentifier();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseArguments();
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c100(s2, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseDOT();
        if (s1 !== peg$FAILED) {
          s2 = peg$parseIdentifier();
          if (s2 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c102(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          s1 = peg$parseDOT();
          if (s1 !== peg$FAILED) {
            s2 = peg$parseExplicitGenericInvocation();
            if (s2 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c103(s2);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            s1 = peg$parseDOT();
            if (s1 !== peg$FAILED) {
              s2 = peg$parseTHIS();
              if (s2 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c104();
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
            if (s0 === peg$FAILED) {
              s0 = peg$currPos;
              s1 = peg$parseDOT();
              if (s1 !== peg$FAILED) {
                s2 = peg$parseSUPER();
                if (s2 !== peg$FAILED) {
                  s3 = peg$parseSuperSuffix();
                  if (s3 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c99(s3);
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              if (s0 === peg$FAILED) {
                s0 = peg$currPos;
                s1 = peg$parseDOT();
                if (s1 !== peg$FAILED) {
                  s2 = peg$parseNEW();
                  if (s2 !== peg$FAILED) {
                    s3 = peg$parseNonWildcardTypeArguments();
                    if (s3 === peg$FAILED) {
                      s3 = null;
                    }
                    if (s3 !== peg$FAILED) {
                      s4 = peg$parseInnerCreator();
                      if (s4 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s1 = peg$c105(s3, s4);
                        s0 = s1;
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
                if (s0 === peg$FAILED) {
                  s0 = peg$currPos;
                  s1 = peg$parseDimExpr();
                  if (s1 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c106(s1);
                  }
                  s0 = s1;
                }
              }
            }
          }
        }
      }

      return s0;
    }

    function peg$parseSuperSuffix() {
      var s0, s1, s2, s3, s4;

      s0 = peg$currPos;
      s1 = peg$parseArguments();
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c107(s1);
      }
      s0 = s1;
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseDOT();
        if (s1 !== peg$FAILED) {
          s2 = peg$parseNonWildcardTypeArguments();
          if (s2 === peg$FAILED) {
            s2 = null;
          }
          if (s2 !== peg$FAILED) {
            s3 = peg$parseIdentifier();
            if (s3 !== peg$FAILED) {
              s4 = peg$parseArguments();
              if (s4 === peg$FAILED) {
                s4 = null;
              }
              if (s4 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c108(s2, s3, s4);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      }

      return s0;
    }

    function peg$parseBasicType() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 4) === peg$c109) {
        s1 = peg$c109;
        peg$currPos += 4;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c110); }
      }
      if (s1 === peg$FAILED) {
        if (input.substr(peg$currPos, 5) === peg$c111) {
          s1 = peg$c111;
          peg$currPos += 5;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c112); }
        }
        if (s1 === peg$FAILED) {
          if (input.substr(peg$currPos, 4) === peg$c113) {
            s1 = peg$c113;
            peg$currPos += 4;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c114); }
          }
          if (s1 === peg$FAILED) {
            if (input.substr(peg$currPos, 3) === peg$c115) {
              s1 = peg$c115;
              peg$currPos += 3;
            } else {
              s1 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c116); }
            }
            if (s1 === peg$FAILED) {
              if (input.substr(peg$currPos, 4) === peg$c117) {
                s1 = peg$c117;
                peg$currPos += 4;
              } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c118); }
              }
              if (s1 === peg$FAILED) {
                if (input.substr(peg$currPos, 5) === peg$c119) {
                  s1 = peg$c119;
                  peg$currPos += 5;
                } else {
                  s1 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c120); }
                }
                if (s1 === peg$FAILED) {
                  if (input.substr(peg$currPos, 6) === peg$c121) {
                    s1 = peg$c121;
                    peg$currPos += 6;
                  } else {
                    s1 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c122); }
                  }
                  if (s1 === peg$FAILED) {
                    if (input.substr(peg$currPos, 7) === peg$c123) {
                      s1 = peg$c123;
                      peg$currPos += 7;
                    } else {
                      s1 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c124); }
                    }
                  }
                }
              }
            }
          }
        }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        peg$silentFails++;
        s3 = peg$parseLetterOrDigit();
        peg$silentFails--;
        if (s3 === peg$FAILED) {
          s2 = void 0;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseSpacing();
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c125(s1);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseArguments() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      s0 = peg$currPos;
      s1 = peg$parseLPAR();
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        s3 = peg$parseExpression();
        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$currPos;
          s6 = peg$parseCOMMA();
          if (s6 !== peg$FAILED) {
            s7 = peg$parseExpression();
            if (s7 !== peg$FAILED) {
              s6 = [s6, s7];
              s5 = s6;
            } else {
              peg$currPos = s5;
              s5 = peg$FAILED;
            }
          } else {
            peg$currPos = s5;
            s5 = peg$FAILED;
          }
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$currPos;
            s6 = peg$parseCOMMA();
            if (s6 !== peg$FAILED) {
              s7 = peg$parseExpression();
              if (s7 !== peg$FAILED) {
                s6 = [s6, s7];
                s5 = s6;
              } else {
                peg$currPos = s5;
                s5 = peg$FAILED;
              }
            } else {
              peg$currPos = s5;
              s5 = peg$FAILED;
            }
          }
          if (s4 !== peg$FAILED) {
            peg$savedPos = s2;
            s3 = peg$c29(s3, s4);
            s2 = s3;
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 === peg$FAILED) {
          s2 = null;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseRPAR();
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c126(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseCreator() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$parseBasicType();
      if (s1 === peg$FAILED) {
        s1 = peg$parseCreatedName();
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseArrayCreatorRest();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c127(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseNonWildcardTypeArguments();
        if (s1 === peg$FAILED) {
          s1 = null;
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$parseCreatedName();
          if (s2 !== peg$FAILED) {
            s3 = peg$parseClassCreatorRest();
            if (s3 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c128(s1, s2, s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      }

      return s0;
    }

    function peg$parseCreatedName() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      s0 = peg$currPos;
      s1 = peg$parseQualifiedIdentifier();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseTypeArgumentsOrDiamond();
        if (s2 === peg$FAILED) {
          s2 = null;
        }
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$currPos;
          s5 = peg$parseDOT();
          if (s5 !== peg$FAILED) {
            s6 = peg$parseIdentifier();
            if (s6 !== peg$FAILED) {
              s7 = peg$parseTypeArgumentsOrDiamond();
              if (s7 === peg$FAILED) {
                s7 = null;
              }
              if (s7 !== peg$FAILED) {
                s5 = [s5, s6, s7];
                s4 = s5;
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$currPos;
            s5 = peg$parseDOT();
            if (s5 !== peg$FAILED) {
              s6 = peg$parseIdentifier();
              if (s6 !== peg$FAILED) {
                s7 = peg$parseTypeArgumentsOrDiamond();
                if (s7 === peg$FAILED) {
                  s7 = null;
                }
                if (s7 !== peg$FAILED) {
                  s5 = [s5, s6, s7];
                  s4 = s5;
                } else {
                  peg$currPos = s4;
                  s4 = peg$FAILED;
                }
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          }
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c129(s1, s2, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseInnerCreator() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$parseIdentifier();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseNonWildcardTypeArgumentsOrDiamond();
        if (s2 === peg$FAILED) {
          s2 = null;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseClassCreatorRest();
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c130(s1, s2, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseClassCreatorRest() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = peg$parseArguments();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseClassBody();
        if (s2 === peg$FAILED) {
          s2 = null;
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c131(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseArrayCreatorRest() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parseDim();
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$parseDim();
        }
      } else {
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseArrayInitializer();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c132(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = [];
        s2 = peg$parseDimExpr();
        if (s2 !== peg$FAILED) {
          while (s2 !== peg$FAILED) {
            s1.push(s2);
            s2 = peg$parseDimExpr();
          }
        } else {
          s1 = peg$FAILED;
        }
        if (s1 !== peg$FAILED) {
          s2 = [];
          s3 = peg$parseDim();
          while (s3 !== peg$FAILED) {
            s2.push(s3);
            s3 = peg$parseDim();
          }
          if (s2 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c133(s1, s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          s1 = peg$parseDim();
          if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c134(s1);
          }
          s0 = s1;
        }
      }

      return s0;
    }

    function peg$parseArrayInitializer() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      s0 = peg$currPos;
      s1 = peg$parseLWING();
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        s3 = peg$parseVariableInitializer();
        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$currPos;
          s6 = peg$parseCOMMA();
          if (s6 !== peg$FAILED) {
            s7 = peg$parseVariableInitializer();
            if (s7 !== peg$FAILED) {
              s6 = [s6, s7];
              s5 = s6;
            } else {
              peg$currPos = s5;
              s5 = peg$FAILED;
            }
          } else {
            peg$currPos = s5;
            s5 = peg$FAILED;
          }
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$currPos;
            s6 = peg$parseCOMMA();
            if (s6 !== peg$FAILED) {
              s7 = peg$parseVariableInitializer();
              if (s7 !== peg$FAILED) {
                s6 = [s6, s7];
                s5 = s6;
              } else {
                peg$currPos = s5;
                s5 = peg$FAILED;
              }
            } else {
              peg$currPos = s5;
              s5 = peg$FAILED;
            }
          }
          if (s4 !== peg$FAILED) {
            peg$savedPos = s2;
            s3 = peg$c29(s3, s4);
            s2 = s3;
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 === peg$FAILED) {
          s2 = null;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseCOMMA();
          if (s3 === peg$FAILED) {
            s3 = null;
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parseRWING();
            if (s4 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c135(s2);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseVariableInitializer() {
      var s0;

      s0 = peg$parseArrayInitializer();
      if (s0 === peg$FAILED) {
        s0 = peg$parseExpression();
      }

      return s0;
    }

    function peg$parseParExpression() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$parseLPAR();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseExpression();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseRPAR();
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c136(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseQualifiedIdentifier() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$parseIdentifier();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$parseDOT();
        if (s4 !== peg$FAILED) {
          s5 = peg$parseIdentifier();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = peg$parseDOT();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseIdentifier();
            if (s5 !== peg$FAILED) {
              s4 = [s4, s5];
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c137(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseDim() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = peg$parseLBRK();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseRBRK();
        if (s2 !== peg$FAILED) {
          s1 = [s1, s2];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseDimExpr() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$parseLBRK();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseExpression();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseRBRK();
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c138(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseType() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$parseBasicType();
      if (s1 === peg$FAILED) {
        s1 = peg$parseClassType();
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parseDim();
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parseDim();
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c139(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseReferenceType() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$parseBasicType();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parseDim();
        if (s3 !== peg$FAILED) {
          while (s3 !== peg$FAILED) {
            s2.push(s3);
            s3 = peg$parseDim();
          }
        } else {
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c140(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseClassType();
        if (s1 !== peg$FAILED) {
          s2 = [];
          s3 = peg$parseDim();
          while (s3 !== peg$FAILED) {
            s2.push(s3);
            s3 = peg$parseDim();
          }
          if (s2 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c141(s1, s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      }

      return s0;
    }

    function peg$parseClassType() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      s0 = peg$currPos;
      s1 = peg$parseQualifiedIdentifier();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseTypeArguments();
        if (s2 === peg$FAILED) {
          s2 = null;
        }
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$currPos;
          s5 = peg$parseDOT();
          if (s5 !== peg$FAILED) {
            s6 = peg$parseIdentifier();
            if (s6 !== peg$FAILED) {
              s7 = peg$parseTypeArguments();
              if (s7 === peg$FAILED) {
                s7 = null;
              }
              if (s7 !== peg$FAILED) {
                s5 = [s5, s6, s7];
                s4 = s5;
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$currPos;
            s5 = peg$parseDOT();
            if (s5 !== peg$FAILED) {
              s6 = peg$parseIdentifier();
              if (s6 !== peg$FAILED) {
                s7 = peg$parseTypeArguments();
                if (s7 === peg$FAILED) {
                  s7 = null;
                }
                if (s7 !== peg$FAILED) {
                  s5 = [s5, s6, s7];
                  s4 = s5;
                } else {
                  peg$currPos = s4;
                  s4 = peg$FAILED;
                }
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          }
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c129(s1, s2, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseClassTypeList() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$parseClassType();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$parseCOMMA();
        if (s4 !== peg$FAILED) {
          s5 = peg$parseClassType();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = peg$parseCOMMA();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseClassType();
            if (s5 !== peg$FAILED) {
              s4 = [s4, s5];
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c29(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseTypeArguments() {
      var s0, s1, s2, s3, s4, s5, s6;

      s0 = peg$currPos;
      s1 = peg$parseLPOINT();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseTypeArgument();
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$currPos;
          s5 = peg$parseCOMMA();
          if (s5 !== peg$FAILED) {
            s6 = peg$parseTypeArgument();
            if (s6 !== peg$FAILED) {
              s5 = [s5, s6];
              s4 = s5;
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$currPos;
            s5 = peg$parseCOMMA();
            if (s5 !== peg$FAILED) {
              s6 = peg$parseTypeArgument();
              if (s6 !== peg$FAILED) {
                s5 = [s5, s6];
                s4 = s5;
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parseRPOINT();
            if (s4 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c29(s2, s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseTypeArgument() {
      var s0, s1, s2, s3, s4;

      s0 = peg$parseReferenceType();
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseQUERY();
        if (s1 !== peg$FAILED) {
          s2 = peg$currPos;
          s3 = peg$currPos;
          s4 = peg$parseEXTENDS();
          if (s4 !== peg$FAILED) {
            peg$savedPos = s3;
            s4 = peg$c142();
          }
          s3 = s4;
          if (s3 === peg$FAILED) {
            s3 = peg$currPos;
            s4 = peg$parseSUPER();
            if (s4 !== peg$FAILED) {
              peg$savedPos = s3;
              s4 = peg$c143();
            }
            s3 = s4;
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parseReferenceType();
            if (s4 !== peg$FAILED) {
              s3 = [s3, s4];
              s2 = s3;
            } else {
              peg$currPos = s2;
              s2 = peg$FAILED;
            }
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
          if (s2 === peg$FAILED) {
            s2 = null;
          }
          if (s2 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c144(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      }

      return s0;
    }

    function peg$parseTypeParameters() {
      var s0, s1, s2, s3, s4, s5, s6;

      s0 = peg$currPos;
      s1 = peg$parseLPOINT();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseTypeParameter();
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$currPos;
          s5 = peg$parseCOMMA();
          if (s5 !== peg$FAILED) {
            s6 = peg$parseTypeParameter();
            if (s6 !== peg$FAILED) {
              s5 = [s5, s6];
              s4 = s5;
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$currPos;
            s5 = peg$parseCOMMA();
            if (s5 !== peg$FAILED) {
              s6 = peg$parseTypeParameter();
              if (s6 !== peg$FAILED) {
                s5 = [s5, s6];
                s4 = s5;
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parseRPOINT();
            if (s4 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c29(s2, s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseTypeParameter() {
      var s0, s1, s2, s3, s4;

      s0 = peg$currPos;
      s1 = peg$parseIdentifier();
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        s3 = peg$parseEXTENDS();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseBound();
          if (s4 !== peg$FAILED) {
            s3 = [s3, s4];
            s2 = s3;
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 === peg$FAILED) {
          s2 = null;
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c145(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseBound() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$parseClassType();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$parseAND();
        if (s4 !== peg$FAILED) {
          s5 = peg$parseClassType();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = peg$parseAND();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseClassType();
            if (s5 !== peg$FAILED) {
              s4 = [s4, s5];
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c29(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseModifier() {
      var s0, s1, s2, s3;

      s0 = peg$parseAnnotation();
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 6) === peg$c146) {
          s1 = peg$c146;
          peg$currPos += 6;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c147); }
        }
        if (s1 === peg$FAILED) {
          if (input.substr(peg$currPos, 9) === peg$c148) {
            s1 = peg$c148;
            peg$currPos += 9;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c149); }
          }
          if (s1 === peg$FAILED) {
            if (input.substr(peg$currPos, 7) === peg$c150) {
              s1 = peg$c150;
              peg$currPos += 7;
            } else {
              s1 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c151); }
            }
            if (s1 === peg$FAILED) {
              if (input.substr(peg$currPos, 6) === peg$c152) {
                s1 = peg$c152;
                peg$currPos += 6;
              } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c153); }
              }
              if (s1 === peg$FAILED) {
                if (input.substr(peg$currPos, 8) === peg$c154) {
                  s1 = peg$c154;
                  peg$currPos += 8;
                } else {
                  s1 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c155); }
                }
                if (s1 === peg$FAILED) {
                  if (input.substr(peg$currPos, 5) === peg$c156) {
                    s1 = peg$c156;
                    peg$currPos += 5;
                  } else {
                    s1 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c157); }
                  }
                  if (s1 === peg$FAILED) {
                    if (input.substr(peg$currPos, 6) === peg$c158) {
                      s1 = peg$c158;
                      peg$currPos += 6;
                    } else {
                      s1 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c159); }
                    }
                    if (s1 === peg$FAILED) {
                      if (input.substr(peg$currPos, 12) === peg$c160) {
                        s1 = peg$c160;
                        peg$currPos += 12;
                      } else {
                        s1 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c161); }
                      }
                      if (s1 === peg$FAILED) {
                        if (input.substr(peg$currPos, 9) === peg$c162) {
                          s1 = peg$c162;
                          peg$currPos += 9;
                        } else {
                          s1 = peg$FAILED;
                          if (peg$silentFails === 0) { peg$fail(peg$c163); }
                        }
                        if (s1 === peg$FAILED) {
                          if (input.substr(peg$currPos, 8) === peg$c164) {
                            s1 = peg$c164;
                            peg$currPos += 8;
                          } else {
                            s1 = peg$FAILED;
                            if (peg$silentFails === 0) { peg$fail(peg$c165); }
                          }
                          if (s1 === peg$FAILED) {
                            if (input.substr(peg$currPos, 8) === peg$c166) {
                              s1 = peg$c166;
                              peg$currPos += 8;
                            } else {
                              s1 = peg$FAILED;
                              if (peg$silentFails === 0) { peg$fail(peg$c167); }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$currPos;
          peg$silentFails++;
          s3 = peg$parseLetterOrDigit();
          peg$silentFails--;
          if (s3 === peg$FAILED) {
            s2 = void 0;
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
          if (s2 !== peg$FAILED) {
            s3 = peg$parseSpacing();
            if (s3 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c168(s1);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      }

      return s0;
    }

    function peg$parseAnnotationTypeDeclaration() {
      var s0, s1, s2, s3, s4;

      s0 = peg$currPos;
      s1 = peg$parseAT();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseINTERFACE();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseIdentifier();
          if (s3 !== peg$FAILED) {
            s4 = peg$parseAnnotationTypeBody();
            if (s4 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c169(s3, s4);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseAnnotationTypeBody() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$parseLWING();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parseAnnotationTypeElementDeclaration();
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parseAnnotationTypeElementDeclaration();
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseRWING();
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c170(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseAnnotationTypeElementDeclaration() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parseModifier();
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parseModifier();
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseAnnotationTypeElementRest();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c171(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseSEMI();
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c3();
        }
        s0 = s1;
      }

      return s0;
    }

    function peg$parseAnnotationTypeElementRest() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$parseType();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseAnnotationMethodOrConstantRest();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseSEMI();
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c172(s1, s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$parseClassDeclaration();
        if (s0 === peg$FAILED) {
          s0 = peg$parseEnumDeclaration();
          if (s0 === peg$FAILED) {
            s0 = peg$parseInterfaceDeclaration();
            if (s0 === peg$FAILED) {
              s0 = peg$parseAnnotationTypeDeclaration();
            }
          }
        }
      }

      return s0;
    }

    function peg$parseAnnotationMethodOrConstantRest() {
      var s0;

      s0 = peg$parseAnnotationMethodRest();
      if (s0 === peg$FAILED) {
        s0 = peg$parseAnnotationConstantRest();
      }

      return s0;
    }

    function peg$parseAnnotationMethodRest() {
      var s0, s1, s2, s3, s4;

      s0 = peg$currPos;
      s1 = peg$parseIdentifier();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseLPAR();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseRPAR();
          if (s3 !== peg$FAILED) {
            s4 = peg$parseDefaultValue();
            if (s4 === peg$FAILED) {
              s4 = null;
            }
            if (s4 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c173(s1, s4);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseAnnotationConstantRest() {
      var s0, s1;

      s0 = peg$currPos;
      s1 = peg$parseVariableDeclarators();
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c174(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parseDefaultValue() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = peg$parseDEFAULT();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseElementValue();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c175(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseAnnotation() {
      var s0;

      s0 = peg$parseNormalAnnotation();
      if (s0 === peg$FAILED) {
        s0 = peg$parseSingleElementAnnotation();
        if (s0 === peg$FAILED) {
          s0 = peg$parseMarkerAnnotation();
        }
      }

      return s0;
    }

    function peg$parseNormalAnnotation() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$parseAT();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseQualifiedIdentifier();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseLPAR();
          if (s3 !== peg$FAILED) {
            s4 = peg$parseElementValuePairs();
            if (s4 === peg$FAILED) {
              s4 = null;
            }
            if (s4 !== peg$FAILED) {
              s5 = peg$parseRPAR();
              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c176(s2, s4);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseSingleElementAnnotation() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$parseAT();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseQualifiedIdentifier();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseLPAR();
          if (s3 !== peg$FAILED) {
            s4 = peg$parseElementValue();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseRPAR();
              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c177(s2, s4);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseMarkerAnnotation() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = peg$parseAT();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseQualifiedIdentifier();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c178(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseElementValuePairs() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$parseElementValuePair();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$parseCOMMA();
        if (s4 !== peg$FAILED) {
          s5 = peg$parseElementValuePair();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = peg$parseCOMMA();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseElementValuePair();
            if (s5 !== peg$FAILED) {
              s4 = [s4, s5];
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c29(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseElementValuePair() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$parseIdentifier();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseEQU();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseElementValue();
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c179(s1, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseElementValue() {
      var s0;

      s0 = peg$parseConditionalExpression();
      if (s0 === peg$FAILED) {
        s0 = peg$parseAnnotation();
        if (s0 === peg$FAILED) {
          s0 = peg$parseElementValueArrayInitializer();
        }
      }

      return s0;
    }

    function peg$parseElementValueArrayInitializer() {
      var s0, s1, s2, s3, s4;

      s0 = peg$currPos;
      s1 = peg$parseLWING();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseElementValues();
        if (s2 === peg$FAILED) {
          s2 = null;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseCOMMA();
          if (s3 === peg$FAILED) {
            s3 = null;
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parseRWING();
            if (s4 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c180(s2);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseElementValues() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$parseElementValue();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$parseCOMMA();
        if (s4 !== peg$FAILED) {
          s5 = peg$parseElementValue();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = peg$parseCOMMA();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseElementValue();
            if (s5 !== peg$FAILED) {
              s4 = [s4, s5];
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c29(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseSpacing() {
      var s0, s1, s2, s3, s4, s5, s6;

      s0 = [];
      s1 = [];
      if (peg$c181.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c182); }
      }
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          if (peg$c181.test(input.charAt(peg$currPos))) {
            s2 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c182); }
          }
        }
      } else {
        s1 = peg$FAILED;
      }
      if (s1 === peg$FAILED) {
        s1 = peg$currPos;
        if (input.substr(peg$currPos, 2) === peg$c183) {
          s2 = peg$c183;
          peg$currPos += 2;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c184); }
        }
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$currPos;
          s5 = peg$currPos;
          peg$silentFails++;
          if (input.substr(peg$currPos, 2) === peg$c185) {
            s6 = peg$c185;
            peg$currPos += 2;
          } else {
            s6 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c186); }
          }
          peg$silentFails--;
          if (s6 === peg$FAILED) {
            s5 = void 0;
          } else {
            peg$currPos = s5;
            s5 = peg$FAILED;
          }
          if (s5 !== peg$FAILED) {
            s6 = peg$parse_();
            if (s6 !== peg$FAILED) {
              s5 = [s5, s6];
              s4 = s5;
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$currPos;
            s5 = peg$currPos;
            peg$silentFails++;
            if (input.substr(peg$currPos, 2) === peg$c185) {
              s6 = peg$c185;
              peg$currPos += 2;
            } else {
              s6 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c186); }
            }
            peg$silentFails--;
            if (s6 === peg$FAILED) {
              s5 = void 0;
            } else {
              peg$currPos = s5;
              s5 = peg$FAILED;
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$parse_();
              if (s6 !== peg$FAILED) {
                s5 = [s5, s6];
                s4 = s5;
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          }
          if (s3 !== peg$FAILED) {
            if (input.substr(peg$currPos, 2) === peg$c185) {
              s4 = peg$c185;
              peg$currPos += 2;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c186); }
            }
            if (s4 !== peg$FAILED) {
              s2 = [s2, s3, s4];
              s1 = s2;
            } else {
              peg$currPos = s1;
              s1 = peg$FAILED;
            }
          } else {
            peg$currPos = s1;
            s1 = peg$FAILED;
          }
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
        if (s1 === peg$FAILED) {
          s1 = peg$currPos;
          if (input.substr(peg$currPos, 2) === peg$c187) {
            s2 = peg$c187;
            peg$currPos += 2;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c188); }
          }
          if (s2 !== peg$FAILED) {
            s3 = [];
            s4 = peg$currPos;
            s5 = peg$currPos;
            peg$silentFails++;
            if (peg$c189.test(input.charAt(peg$currPos))) {
              s6 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s6 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c190); }
            }
            peg$silentFails--;
            if (s6 === peg$FAILED) {
              s5 = void 0;
            } else {
              peg$currPos = s5;
              s5 = peg$FAILED;
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$parse_();
              if (s6 !== peg$FAILED) {
                s5 = [s5, s6];
                s4 = s5;
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
            while (s4 !== peg$FAILED) {
              s3.push(s4);
              s4 = peg$currPos;
              s5 = peg$currPos;
              peg$silentFails++;
              if (peg$c189.test(input.charAt(peg$currPos))) {
                s6 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s6 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c190); }
              }
              peg$silentFails--;
              if (s6 === peg$FAILED) {
                s5 = void 0;
              } else {
                peg$currPos = s5;
                s5 = peg$FAILED;
              }
              if (s5 !== peg$FAILED) {
                s6 = peg$parse_();
                if (s6 !== peg$FAILED) {
                  s5 = [s5, s6];
                  s4 = s5;
                } else {
                  peg$currPos = s4;
                  s4 = peg$FAILED;
                }
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            }
            if (s3 !== peg$FAILED) {
              if (peg$c189.test(input.charAt(peg$currPos))) {
                s4 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s4 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c190); }
              }
              if (s4 !== peg$FAILED) {
                s2 = [s2, s3, s4];
                s1 = s2;
              } else {
                peg$currPos = s1;
                s1 = peg$FAILED;
              }
            } else {
              peg$currPos = s1;
              s1 = peg$FAILED;
            }
          } else {
            peg$currPos = s1;
            s1 = peg$FAILED;
          }
        }
      }
      while (s1 !== peg$FAILED) {
        s0.push(s1);
        s1 = [];
        if (peg$c181.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c182); }
        }
        if (s2 !== peg$FAILED) {
          while (s2 !== peg$FAILED) {
            s1.push(s2);
            if (peg$c181.test(input.charAt(peg$currPos))) {
              s2 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s2 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c182); }
            }
          }
        } else {
          s1 = peg$FAILED;
        }
        if (s1 === peg$FAILED) {
          s1 = peg$currPos;
          if (input.substr(peg$currPos, 2) === peg$c183) {
            s2 = peg$c183;
            peg$currPos += 2;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c184); }
          }
          if (s2 !== peg$FAILED) {
            s3 = [];
            s4 = peg$currPos;
            s5 = peg$currPos;
            peg$silentFails++;
            if (input.substr(peg$currPos, 2) === peg$c185) {
              s6 = peg$c185;
              peg$currPos += 2;
            } else {
              s6 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c186); }
            }
            peg$silentFails--;
            if (s6 === peg$FAILED) {
              s5 = void 0;
            } else {
              peg$currPos = s5;
              s5 = peg$FAILED;
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$parse_();
              if (s6 !== peg$FAILED) {
                s5 = [s5, s6];
                s4 = s5;
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
            while (s4 !== peg$FAILED) {
              s3.push(s4);
              s4 = peg$currPos;
              s5 = peg$currPos;
              peg$silentFails++;
              if (input.substr(peg$currPos, 2) === peg$c185) {
                s6 = peg$c185;
                peg$currPos += 2;
              } else {
                s6 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c186); }
              }
              peg$silentFails--;
              if (s6 === peg$FAILED) {
                s5 = void 0;
              } else {
                peg$currPos = s5;
                s5 = peg$FAILED;
              }
              if (s5 !== peg$FAILED) {
                s6 = peg$parse_();
                if (s6 !== peg$FAILED) {
                  s5 = [s5, s6];
                  s4 = s5;
                } else {
                  peg$currPos = s4;
                  s4 = peg$FAILED;
                }
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            }
            if (s3 !== peg$FAILED) {
              if (input.substr(peg$currPos, 2) === peg$c185) {
                s4 = peg$c185;
                peg$currPos += 2;
              } else {
                s4 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c186); }
              }
              if (s4 !== peg$FAILED) {
                s2 = [s2, s3, s4];
                s1 = s2;
              } else {
                peg$currPos = s1;
                s1 = peg$FAILED;
              }
            } else {
              peg$currPos = s1;
              s1 = peg$FAILED;
            }
          } else {
            peg$currPos = s1;
            s1 = peg$FAILED;
          }
          if (s1 === peg$FAILED) {
            s1 = peg$currPos;
            if (input.substr(peg$currPos, 2) === peg$c187) {
              s2 = peg$c187;
              peg$currPos += 2;
            } else {
              s2 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c188); }
            }
            if (s2 !== peg$FAILED) {
              s3 = [];
              s4 = peg$currPos;
              s5 = peg$currPos;
              peg$silentFails++;
              if (peg$c189.test(input.charAt(peg$currPos))) {
                s6 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s6 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c190); }
              }
              peg$silentFails--;
              if (s6 === peg$FAILED) {
                s5 = void 0;
              } else {
                peg$currPos = s5;
                s5 = peg$FAILED;
              }
              if (s5 !== peg$FAILED) {
                s6 = peg$parse_();
                if (s6 !== peg$FAILED) {
                  s5 = [s5, s6];
                  s4 = s5;
                } else {
                  peg$currPos = s4;
                  s4 = peg$FAILED;
                }
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
              while (s4 !== peg$FAILED) {
                s3.push(s4);
                s4 = peg$currPos;
                s5 = peg$currPos;
                peg$silentFails++;
                if (peg$c189.test(input.charAt(peg$currPos))) {
                  s6 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s6 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c190); }
                }
                peg$silentFails--;
                if (s6 === peg$FAILED) {
                  s5 = void 0;
                } else {
                  peg$currPos = s5;
                  s5 = peg$FAILED;
                }
                if (s5 !== peg$FAILED) {
                  s6 = peg$parse_();
                  if (s6 !== peg$FAILED) {
                    s5 = [s5, s6];
                    s4 = s5;
                  } else {
                    peg$currPos = s4;
                    s4 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s4;
                  s4 = peg$FAILED;
                }
              }
              if (s3 !== peg$FAILED) {
                if (peg$c189.test(input.charAt(peg$currPos))) {
                  s4 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s4 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c190); }
                }
                if (s4 !== peg$FAILED) {
                  s2 = [s2, s3, s4];
                  s1 = s2;
                } else {
                  peg$currPos = s1;
                  s1 = peg$FAILED;
                }
              } else {
                peg$currPos = s1;
                s1 = peg$FAILED;
              }
            } else {
              peg$currPos = s1;
              s1 = peg$FAILED;
            }
          }
        }
      }

      return s0;
    }

    function peg$parseIdentifier() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$currPos;
      peg$silentFails++;
      s2 = peg$parseKeyword();
      peg$silentFails--;
      if (s2 === peg$FAILED) {
        s1 = void 0;
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseLetter();
        if (s2 !== peg$FAILED) {
          s3 = peg$currPos;
          s4 = [];
          s5 = peg$parseLetterOrDigit();
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$parseLetterOrDigit();
          }
          if (s4 !== peg$FAILED) {
            s3 = input.substring(s3, peg$currPos);
          } else {
            s3 = s4;
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parseSpacing();
            if (s4 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c191(s2, s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseLetter() {
      var s0;

      if (peg$c192.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c193); }
      }
      if (s0 === peg$FAILED) {
        if (peg$c194.test(input.charAt(peg$currPos))) {
          s0 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c195); }
        }
        if (s0 === peg$FAILED) {
          if (peg$c196.test(input.charAt(peg$currPos))) {
            s0 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c197); }
          }
        }
      }

      return s0;
    }

    function peg$parseLetterOrDigit() {
      var s0;

      if (peg$c192.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c193); }
      }
      if (s0 === peg$FAILED) {
        if (peg$c194.test(input.charAt(peg$currPos))) {
          s0 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c195); }
        }
        if (s0 === peg$FAILED) {
          if (peg$c198.test(input.charAt(peg$currPos))) {
            s0 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c199); }
          }
          if (s0 === peg$FAILED) {
            if (peg$c196.test(input.charAt(peg$currPos))) {
              s0 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s0 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c197); }
            }
          }
        }
      }

      return s0;
    }

    function peg$parseKeyword() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 8) === peg$c154) {
        s1 = peg$c154;
        peg$currPos += 8;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c155); }
      }
      if (s1 === peg$FAILED) {
        if (input.substr(peg$currPos, 6) === peg$c200) {
          s1 = peg$c200;
          peg$currPos += 6;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c201); }
        }
        if (s1 === peg$FAILED) {
          if (input.substr(peg$currPos, 7) === peg$c123) {
            s1 = peg$c123;
            peg$currPos += 7;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c124); }
          }
          if (s1 === peg$FAILED) {
            if (input.substr(peg$currPos, 5) === peg$c202) {
              s1 = peg$c202;
              peg$currPos += 5;
            } else {
              s1 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c203); }
            }
            if (s1 === peg$FAILED) {
              if (input.substr(peg$currPos, 4) === peg$c109) {
                s1 = peg$c109;
                peg$currPos += 4;
              } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c110); }
              }
              if (s1 === peg$FAILED) {
                if (input.substr(peg$currPos, 4) === peg$c204) {
                  s1 = peg$c204;
                  peg$currPos += 4;
                } else {
                  s1 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c205); }
                }
                if (s1 === peg$FAILED) {
                  if (input.substr(peg$currPos, 5) === peg$c206) {
                    s1 = peg$c206;
                    peg$currPos += 5;
                  } else {
                    s1 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c207); }
                  }
                  if (s1 === peg$FAILED) {
                    if (input.substr(peg$currPos, 4) === peg$c113) {
                      s1 = peg$c113;
                      peg$currPos += 4;
                    } else {
                      s1 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c114); }
                    }
                    if (s1 === peg$FAILED) {
                      if (input.substr(peg$currPos, 5) === peg$c208) {
                        s1 = peg$c208;
                        peg$currPos += 5;
                      } else {
                        s1 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c209); }
                      }
                      if (s1 === peg$FAILED) {
                        if (input.substr(peg$currPos, 5) === peg$c210) {
                          s1 = peg$c210;
                          peg$currPos += 5;
                        } else {
                          s1 = peg$FAILED;
                          if (peg$silentFails === 0) { peg$fail(peg$c211); }
                        }
                        if (s1 === peg$FAILED) {
                          if (input.substr(peg$currPos, 8) === peg$c212) {
                            s1 = peg$c212;
                            peg$currPos += 8;
                          } else {
                            s1 = peg$FAILED;
                            if (peg$silentFails === 0) { peg$fail(peg$c213); }
                          }
                          if (s1 === peg$FAILED) {
                            if (input.substr(peg$currPos, 7) === peg$c214) {
                              s1 = peg$c214;
                              peg$currPos += 7;
                            } else {
                              s1 = peg$FAILED;
                              if (peg$silentFails === 0) { peg$fail(peg$c215); }
                            }
                            if (s1 === peg$FAILED) {
                              if (input.substr(peg$currPos, 6) === peg$c121) {
                                s1 = peg$c121;
                                peg$currPos += 6;
                              } else {
                                s1 = peg$FAILED;
                                if (peg$silentFails === 0) { peg$fail(peg$c122); }
                              }
                              if (s1 === peg$FAILED) {
                                if (input.substr(peg$currPos, 2) === peg$c216) {
                                  s1 = peg$c216;
                                  peg$currPos += 2;
                                } else {
                                  s1 = peg$FAILED;
                                  if (peg$silentFails === 0) { peg$fail(peg$c217); }
                                }
                                if (s1 === peg$FAILED) {
                                  if (input.substr(peg$currPos, 4) === peg$c218) {
                                    s1 = peg$c218;
                                    peg$currPos += 4;
                                  } else {
                                    s1 = peg$FAILED;
                                    if (peg$silentFails === 0) { peg$fail(peg$c219); }
                                  }
                                  if (s1 === peg$FAILED) {
                                    if (input.substr(peg$currPos, 4) === peg$c220) {
                                      s1 = peg$c220;
                                      peg$currPos += 4;
                                    } else {
                                      s1 = peg$FAILED;
                                      if (peg$silentFails === 0) { peg$fail(peg$c221); }
                                    }
                                    if (s1 === peg$FAILED) {
                                      if (input.substr(peg$currPos, 7) === peg$c222) {
                                        s1 = peg$c222;
                                        peg$currPos += 7;
                                      } else {
                                        s1 = peg$FAILED;
                                        if (peg$silentFails === 0) { peg$fail(peg$c223); }
                                      }
                                      if (s1 === peg$FAILED) {
                                        if (input.substr(peg$currPos, 5) === peg$c224) {
                                          s1 = peg$c224;
                                          peg$currPos += 5;
                                        } else {
                                          s1 = peg$FAILED;
                                          if (peg$silentFails === 0) { peg$fail(peg$c225); }
                                        }
                                        if (s1 === peg$FAILED) {
                                          if (input.substr(peg$currPos, 7) === peg$c226) {
                                            s1 = peg$c226;
                                            peg$currPos += 7;
                                          } else {
                                            s1 = peg$FAILED;
                                            if (peg$silentFails === 0) { peg$fail(peg$c227); }
                                          }
                                          if (s1 === peg$FAILED) {
                                            if (input.substr(peg$currPos, 5) === peg$c156) {
                                              s1 = peg$c156;
                                              peg$currPos += 5;
                                            } else {
                                              s1 = peg$FAILED;
                                              if (peg$silentFails === 0) { peg$fail(peg$c157); }
                                            }
                                            if (s1 === peg$FAILED) {
                                              if (input.substr(peg$currPos, 5) === peg$c119) {
                                                s1 = peg$c119;
                                                peg$currPos += 5;
                                              } else {
                                                s1 = peg$FAILED;
                                                if (peg$silentFails === 0) { peg$fail(peg$c120); }
                                              }
                                              if (s1 === peg$FAILED) {
                                                if (input.substr(peg$currPos, 3) === peg$c228) {
                                                  s1 = peg$c228;
                                                  peg$currPos += 3;
                                                } else {
                                                  s1 = peg$FAILED;
                                                  if (peg$silentFails === 0) { peg$fail(peg$c229); }
                                                }
                                                if (s1 === peg$FAILED) {
                                                  if (input.substr(peg$currPos, 4) === peg$c230) {
                                                    s1 = peg$c230;
                                                    peg$currPos += 4;
                                                  } else {
                                                    s1 = peg$FAILED;
                                                    if (peg$silentFails === 0) { peg$fail(peg$c231); }
                                                  }
                                                  if (s1 === peg$FAILED) {
                                                    if (input.substr(peg$currPos, 2) === peg$c232) {
                                                      s1 = peg$c232;
                                                      peg$currPos += 2;
                                                    } else {
                                                      s1 = peg$FAILED;
                                                      if (peg$silentFails === 0) { peg$fail(peg$c233); }
                                                    }
                                                    if (s1 === peg$FAILED) {
                                                      if (input.substr(peg$currPos, 10) === peg$c234) {
                                                        s1 = peg$c234;
                                                        peg$currPos += 10;
                                                      } else {
                                                        s1 = peg$FAILED;
                                                        if (peg$silentFails === 0) { peg$fail(peg$c235); }
                                                      }
                                                      if (s1 === peg$FAILED) {
                                                        if (input.substr(peg$currPos, 6) === peg$c236) {
                                                          s1 = peg$c236;
                                                          peg$currPos += 6;
                                                        } else {
                                                          s1 = peg$FAILED;
                                                          if (peg$silentFails === 0) { peg$fail(peg$c237); }
                                                        }
                                                        if (s1 === peg$FAILED) {
                                                          if (input.substr(peg$currPos, 9) === peg$c238) {
                                                            s1 = peg$c238;
                                                            peg$currPos += 9;
                                                          } else {
                                                            s1 = peg$FAILED;
                                                            if (peg$silentFails === 0) { peg$fail(peg$c239); }
                                                          }
                                                          if (s1 === peg$FAILED) {
                                                            if (input.substr(peg$currPos, 3) === peg$c115) {
                                                              s1 = peg$c115;
                                                              peg$currPos += 3;
                                                            } else {
                                                              s1 = peg$FAILED;
                                                              if (peg$silentFails === 0) { peg$fail(peg$c116); }
                                                            }
                                                            if (s1 === peg$FAILED) {
                                                              if (input.substr(peg$currPos, 10) === peg$c240) {
                                                                s1 = peg$c240;
                                                                peg$currPos += 10;
                                                              } else {
                                                                s1 = peg$FAILED;
                                                                if (peg$silentFails === 0) { peg$fail(peg$c241); }
                                                              }
                                                              if (s1 === peg$FAILED) {
                                                                if (input.substr(peg$currPos, 4) === peg$c117) {
                                                                  s1 = peg$c117;
                                                                  peg$currPos += 4;
                                                                } else {
                                                                  s1 = peg$FAILED;
                                                                  if (peg$silentFails === 0) { peg$fail(peg$c118); }
                                                                }
                                                                if (s1 === peg$FAILED) {
                                                                  if (input.substr(peg$currPos, 6) === peg$c158) {
                                                                    s1 = peg$c158;
                                                                    peg$currPos += 6;
                                                                  } else {
                                                                    s1 = peg$FAILED;
                                                                    if (peg$silentFails === 0) { peg$fail(peg$c159); }
                                                                  }
                                                                  if (s1 === peg$FAILED) {
                                                                    if (input.substr(peg$currPos, 3) === peg$c242) {
                                                                      s1 = peg$c242;
                                                                      peg$currPos += 3;
                                                                    } else {
                                                                      s1 = peg$FAILED;
                                                                      if (peg$silentFails === 0) { peg$fail(peg$c243); }
                                                                    }
                                                                    if (s1 === peg$FAILED) {
                                                                      if (input.substr(peg$currPos, 4) === peg$c244) {
                                                                        s1 = peg$c244;
                                                                        peg$currPos += 4;
                                                                      } else {
                                                                        s1 = peg$FAILED;
                                                                        if (peg$silentFails === 0) { peg$fail(peg$c245); }
                                                                      }
                                                                      if (s1 === peg$FAILED) {
                                                                        if (input.substr(peg$currPos, 7) === peg$c246) {
                                                                          s1 = peg$c246;
                                                                          peg$currPos += 7;
                                                                        } else {
                                                                          s1 = peg$FAILED;
                                                                          if (peg$silentFails === 0) { peg$fail(peg$c247); }
                                                                        }
                                                                        if (s1 === peg$FAILED) {
                                                                          if (input.substr(peg$currPos, 7) === peg$c150) {
                                                                            s1 = peg$c150;
                                                                            peg$currPos += 7;
                                                                          } else {
                                                                            s1 = peg$FAILED;
                                                                            if (peg$silentFails === 0) { peg$fail(peg$c151); }
                                                                          }
                                                                          if (s1 === peg$FAILED) {
                                                                            if (input.substr(peg$currPos, 9) === peg$c148) {
                                                                              s1 = peg$c148;
                                                                              peg$currPos += 9;
                                                                            } else {
                                                                              s1 = peg$FAILED;
                                                                              if (peg$silentFails === 0) { peg$fail(peg$c149); }
                                                                            }
                                                                            if (s1 === peg$FAILED) {
                                                                              if (input.substr(peg$currPos, 6) === peg$c146) {
                                                                                s1 = peg$c146;
                                                                                peg$currPos += 6;
                                                                              } else {
                                                                                s1 = peg$FAILED;
                                                                                if (peg$silentFails === 0) { peg$fail(peg$c147); }
                                                                              }
                                                                              if (s1 === peg$FAILED) {
                                                                                if (input.substr(peg$currPos, 6) === peg$c248) {
                                                                                  s1 = peg$c248;
                                                                                  peg$currPos += 6;
                                                                                } else {
                                                                                  s1 = peg$FAILED;
                                                                                  if (peg$silentFails === 0) { peg$fail(peg$c249); }
                                                                                }
                                                                                if (s1 === peg$FAILED) {
                                                                                  if (input.substr(peg$currPos, 5) === peg$c111) {
                                                                                    s1 = peg$c111;
                                                                                    peg$currPos += 5;
                                                                                  } else {
                                                                                    s1 = peg$FAILED;
                                                                                    if (peg$silentFails === 0) { peg$fail(peg$c112); }
                                                                                  }
                                                                                  if (s1 === peg$FAILED) {
                                                                                    if (input.substr(peg$currPos, 6) === peg$c152) {
                                                                                      s1 = peg$c152;
                                                                                      peg$currPos += 6;
                                                                                    } else {
                                                                                      s1 = peg$FAILED;
                                                                                      if (peg$silentFails === 0) { peg$fail(peg$c153); }
                                                                                    }
                                                                                    if (s1 === peg$FAILED) {
                                                                                      if (input.substr(peg$currPos, 8) === peg$c166) {
                                                                                        s1 = peg$c166;
                                                                                        peg$currPos += 8;
                                                                                      } else {
                                                                                        s1 = peg$FAILED;
                                                                                        if (peg$silentFails === 0) { peg$fail(peg$c167); }
                                                                                      }
                                                                                      if (s1 === peg$FAILED) {
                                                                                        if (input.substr(peg$currPos, 5) === peg$c250) {
                                                                                          s1 = peg$c250;
                                                                                          peg$currPos += 5;
                                                                                        } else {
                                                                                          s1 = peg$FAILED;
                                                                                          if (peg$silentFails === 0) { peg$fail(peg$c251); }
                                                                                        }
                                                                                        if (s1 === peg$FAILED) {
                                                                                          if (input.substr(peg$currPos, 6) === peg$c252) {
                                                                                            s1 = peg$c252;
                                                                                            peg$currPos += 6;
                                                                                          } else {
                                                                                            s1 = peg$FAILED;
                                                                                            if (peg$silentFails === 0) { peg$fail(peg$c253); }
                                                                                          }
                                                                                          if (s1 === peg$FAILED) {
                                                                                            if (input.substr(peg$currPos, 12) === peg$c160) {
                                                                                              s1 = peg$c160;
                                                                                              peg$currPos += 12;
                                                                                            } else {
                                                                                              s1 = peg$FAILED;
                                                                                              if (peg$silentFails === 0) { peg$fail(peg$c161); }
                                                                                            }
                                                                                            if (s1 === peg$FAILED) {
                                                                                              if (input.substr(peg$currPos, 4) === peg$c254) {
                                                                                                s1 = peg$c254;
                                                                                                peg$currPos += 4;
                                                                                              } else {
                                                                                                s1 = peg$FAILED;
                                                                                                if (peg$silentFails === 0) { peg$fail(peg$c255); }
                                                                                              }
                                                                                              if (s1 === peg$FAILED) {
                                                                                                if (input.substr(peg$currPos, 6) === peg$c256) {
                                                                                                  s1 = peg$c256;
                                                                                                  peg$currPos += 6;
                                                                                                } else {
                                                                                                  s1 = peg$FAILED;
                                                                                                  if (peg$silentFails === 0) { peg$fail(peg$c257); }
                                                                                                }
                                                                                                if (s1 === peg$FAILED) {
                                                                                                  if (input.substr(peg$currPos, 5) === peg$c258) {
                                                                                                    s1 = peg$c258;
                                                                                                    peg$currPos += 5;
                                                                                                  } else {
                                                                                                    s1 = peg$FAILED;
                                                                                                    if (peg$silentFails === 0) { peg$fail(peg$c259); }
                                                                                                  }
                                                                                                  if (s1 === peg$FAILED) {
                                                                                                    if (input.substr(peg$currPos, 9) === peg$c162) {
                                                                                                      s1 = peg$c162;
                                                                                                      peg$currPos += 9;
                                                                                                    } else {
                                                                                                      s1 = peg$FAILED;
                                                                                                      if (peg$silentFails === 0) { peg$fail(peg$c163); }
                                                                                                    }
                                                                                                    if (s1 === peg$FAILED) {
                                                                                                      if (input.substr(peg$currPos, 4) === peg$c260) {
                                                                                                        s1 = peg$c260;
                                                                                                        peg$currPos += 4;
                                                                                                      } else {
                                                                                                        s1 = peg$FAILED;
                                                                                                        if (peg$silentFails === 0) { peg$fail(peg$c261); }
                                                                                                      }
                                                                                                      if (s1 === peg$FAILED) {
                                                                                                        if (input.substr(peg$currPos, 3) === peg$c262) {
                                                                                                          s1 = peg$c262;
                                                                                                          peg$currPos += 3;
                                                                                                        } else {
                                                                                                          s1 = peg$FAILED;
                                                                                                          if (peg$silentFails === 0) { peg$fail(peg$c263); }
                                                                                                        }
                                                                                                        if (s1 === peg$FAILED) {
                                                                                                          if (input.substr(peg$currPos, 4) === peg$c264) {
                                                                                                            s1 = peg$c264;
                                                                                                            peg$currPos += 4;
                                                                                                          } else {
                                                                                                            s1 = peg$FAILED;
                                                                                                            if (peg$silentFails === 0) { peg$fail(peg$c265); }
                                                                                                          }
                                                                                                          if (s1 === peg$FAILED) {
                                                                                                            if (input.substr(peg$currPos, 8) === peg$c164) {
                                                                                                              s1 = peg$c164;
                                                                                                              peg$currPos += 8;
                                                                                                            } else {
                                                                                                              s1 = peg$FAILED;
                                                                                                              if (peg$silentFails === 0) { peg$fail(peg$c165); }
                                                                                                            }
                                                                                                            if (s1 === peg$FAILED) {
                                                                                                              if (input.substr(peg$currPos, 5) === peg$c266) {
                                                                                                                s1 = peg$c266;
                                                                                                                peg$currPos += 5;
                                                                                                              } else {
                                                                                                                s1 = peg$FAILED;
                                                                                                                if (peg$silentFails === 0) { peg$fail(peg$c267); }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        peg$silentFails++;
        s3 = peg$parseLetterOrDigit();
        peg$silentFails--;
        if (s3 === peg$FAILED) {
          s2 = void 0;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          s1 = [s1, s2];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseASSERT() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 6) === peg$c200) {
        s1 = peg$c200;
        peg$currPos += 6;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c201); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        peg$silentFails++;
        s3 = peg$parseLetterOrDigit();
        peg$silentFails--;
        if (s3 === peg$FAILED) {
          s2 = void 0;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseSpacing();
          if (s3 !== peg$FAILED) {
            s1 = [s1, s2, s3];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseBREAK() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 5) === peg$c202) {
        s1 = peg$c202;
        peg$currPos += 5;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c203); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        peg$silentFails++;
        s3 = peg$parseLetterOrDigit();
        peg$silentFails--;
        if (s3 === peg$FAILED) {
          s2 = void 0;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseSpacing();
          if (s3 !== peg$FAILED) {
            s1 = [s1, s2, s3];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseCASE() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 4) === peg$c204) {
        s1 = peg$c204;
        peg$currPos += 4;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c205); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        peg$silentFails++;
        s3 = peg$parseLetterOrDigit();
        peg$silentFails--;
        if (s3 === peg$FAILED) {
          s2 = void 0;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseSpacing();
          if (s3 !== peg$FAILED) {
            s1 = [s1, s2, s3];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseCATCH() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 5) === peg$c206) {
        s1 = peg$c206;
        peg$currPos += 5;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c207); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        peg$silentFails++;
        s3 = peg$parseLetterOrDigit();
        peg$silentFails--;
        if (s3 === peg$FAILED) {
          s2 = void 0;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseSpacing();
          if (s3 !== peg$FAILED) {
            s1 = [s1, s2, s3];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseCLASS() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 5) === peg$c208) {
        s1 = peg$c208;
        peg$currPos += 5;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c209); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        peg$silentFails++;
        s3 = peg$parseLetterOrDigit();
        peg$silentFails--;
        if (s3 === peg$FAILED) {
          s2 = void 0;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseSpacing();
          if (s3 !== peg$FAILED) {
            s1 = [s1, s2, s3];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseCONTINUE() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 8) === peg$c212) {
        s1 = peg$c212;
        peg$currPos += 8;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c213); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        peg$silentFails++;
        s3 = peg$parseLetterOrDigit();
        peg$silentFails--;
        if (s3 === peg$FAILED) {
          s2 = void 0;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseSpacing();
          if (s3 !== peg$FAILED) {
            s1 = [s1, s2, s3];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseDEFAULT() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 7) === peg$c214) {
        s1 = peg$c214;
        peg$currPos += 7;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c215); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        peg$silentFails++;
        s3 = peg$parseLetterOrDigit();
        peg$silentFails--;
        if (s3 === peg$FAILED) {
          s2 = void 0;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseSpacing();
          if (s3 !== peg$FAILED) {
            s1 = [s1, s2, s3];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseDO() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c216) {
        s1 = peg$c216;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c217); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        peg$silentFails++;
        s3 = peg$parseLetterOrDigit();
        peg$silentFails--;
        if (s3 === peg$FAILED) {
          s2 = void 0;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseSpacing();
          if (s3 !== peg$FAILED) {
            s1 = [s1, s2, s3];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseELSE() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 4) === peg$c218) {
        s1 = peg$c218;
        peg$currPos += 4;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c219); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        peg$silentFails++;
        s3 = peg$parseLetterOrDigit();
        peg$silentFails--;
        if (s3 === peg$FAILED) {
          s2 = void 0;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseSpacing();
          if (s3 !== peg$FAILED) {
            s1 = [s1, s2, s3];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseENUM() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 4) === peg$c220) {
        s1 = peg$c220;
        peg$currPos += 4;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c221); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        peg$silentFails++;
        s3 = peg$parseLetterOrDigit();
        peg$silentFails--;
        if (s3 === peg$FAILED) {
          s2 = void 0;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseSpacing();
          if (s3 !== peg$FAILED) {
            s1 = [s1, s2, s3];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseEXTENDS() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 7) === peg$c222) {
        s1 = peg$c222;
        peg$currPos += 7;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c223); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        peg$silentFails++;
        s3 = peg$parseLetterOrDigit();
        peg$silentFails--;
        if (s3 === peg$FAILED) {
          s2 = void 0;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseSpacing();
          if (s3 !== peg$FAILED) {
            s1 = [s1, s2, s3];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseFINALLY() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 7) === peg$c226) {
        s1 = peg$c226;
        peg$currPos += 7;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c227); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        peg$silentFails++;
        s3 = peg$parseLetterOrDigit();
        peg$silentFails--;
        if (s3 === peg$FAILED) {
          s2 = void 0;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseSpacing();
          if (s3 !== peg$FAILED) {
            s1 = [s1, s2, s3];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseFINAL() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 5) === peg$c156) {
        s1 = peg$c156;
        peg$currPos += 5;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c157); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        peg$silentFails++;
        s3 = peg$parseLetterOrDigit();
        peg$silentFails--;
        if (s3 === peg$FAILED) {
          s2 = void 0;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseSpacing();
          if (s3 !== peg$FAILED) {
            s1 = [s1, s2, s3];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseFOR() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 3) === peg$c228) {
        s1 = peg$c228;
        peg$currPos += 3;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c229); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        peg$silentFails++;
        s3 = peg$parseLetterOrDigit();
        peg$silentFails--;
        if (s3 === peg$FAILED) {
          s2 = void 0;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseSpacing();
          if (s3 !== peg$FAILED) {
            s1 = [s1, s2, s3];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseIF() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c232) {
        s1 = peg$c232;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c233); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        peg$silentFails++;
        s3 = peg$parseLetterOrDigit();
        peg$silentFails--;
        if (s3 === peg$FAILED) {
          s2 = void 0;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseSpacing();
          if (s3 !== peg$FAILED) {
            s1 = [s1, s2, s3];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseIMPLEMENTS() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 10) === peg$c234) {
        s1 = peg$c234;
        peg$currPos += 10;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c235); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        peg$silentFails++;
        s3 = peg$parseLetterOrDigit();
        peg$silentFails--;
        if (s3 === peg$FAILED) {
          s2 = void 0;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseSpacing();
          if (s3 !== peg$FAILED) {
            s1 = [s1, s2, s3];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseIMPORT() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 6) === peg$c236) {
        s1 = peg$c236;
        peg$currPos += 6;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c237); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        peg$silentFails++;
        s3 = peg$parseLetterOrDigit();
        peg$silentFails--;
        if (s3 === peg$FAILED) {
          s2 = void 0;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseSpacing();
          if (s3 !== peg$FAILED) {
            s1 = [s1, s2, s3];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseINTERFACE() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 9) === peg$c238) {
        s1 = peg$c238;
        peg$currPos += 9;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c239); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        peg$silentFails++;
        s3 = peg$parseLetterOrDigit();
        peg$silentFails--;
        if (s3 === peg$FAILED) {
          s2 = void 0;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseSpacing();
          if (s3 !== peg$FAILED) {
            s1 = [s1, s2, s3];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseINSTANCEOF() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 10) === peg$c240) {
        s1 = peg$c240;
        peg$currPos += 10;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c241); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        peg$silentFails++;
        s3 = peg$parseLetterOrDigit();
        peg$silentFails--;
        if (s3 === peg$FAILED) {
          s2 = void 0;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseSpacing();
          if (s3 !== peg$FAILED) {
            s1 = [s1, s2, s3];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseNEW() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 3) === peg$c242) {
        s1 = peg$c242;
        peg$currPos += 3;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c243); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        peg$silentFails++;
        s3 = peg$parseLetterOrDigit();
        peg$silentFails--;
        if (s3 === peg$FAILED) {
          s2 = void 0;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseSpacing();
          if (s3 !== peg$FAILED) {
            s1 = [s1, s2, s3];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parsePACKAGE() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 7) === peg$c246) {
        s1 = peg$c246;
        peg$currPos += 7;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c247); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        peg$silentFails++;
        s3 = peg$parseLetterOrDigit();
        peg$silentFails--;
        if (s3 === peg$FAILED) {
          s2 = void 0;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseSpacing();
          if (s3 !== peg$FAILED) {
            s1 = [s1, s2, s3];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseRETURN() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 6) === peg$c248) {
        s1 = peg$c248;
        peg$currPos += 6;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c249); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        peg$silentFails++;
        s3 = peg$parseLetterOrDigit();
        peg$silentFails--;
        if (s3 === peg$FAILED) {
          s2 = void 0;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseSpacing();
          if (s3 !== peg$FAILED) {
            s1 = [s1, s2, s3];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseSTATIC() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 6) === peg$c152) {
        s1 = peg$c152;
        peg$currPos += 6;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c153); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        peg$silentFails++;
        s3 = peg$parseLetterOrDigit();
        peg$silentFails--;
        if (s3 === peg$FAILED) {
          s2 = void 0;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseSpacing();
          if (s3 !== peg$FAILED) {
            s1 = [s1, s2, s3];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseSUPER() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 5) === peg$c250) {
        s1 = peg$c250;
        peg$currPos += 5;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c251); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        peg$silentFails++;
        s3 = peg$parseLetterOrDigit();
        peg$silentFails--;
        if (s3 === peg$FAILED) {
          s2 = void 0;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseSpacing();
          if (s3 !== peg$FAILED) {
            s1 = [s1, s2, s3];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseSWITCH() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 6) === peg$c252) {
        s1 = peg$c252;
        peg$currPos += 6;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c253); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        peg$silentFails++;
        s3 = peg$parseLetterOrDigit();
        peg$silentFails--;
        if (s3 === peg$FAILED) {
          s2 = void 0;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseSpacing();
          if (s3 !== peg$FAILED) {
            s1 = [s1, s2, s3];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseSYNCHRONIZED() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 12) === peg$c160) {
        s1 = peg$c160;
        peg$currPos += 12;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c161); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        peg$silentFails++;
        s3 = peg$parseLetterOrDigit();
        peg$silentFails--;
        if (s3 === peg$FAILED) {
          s2 = void 0;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseSpacing();
          if (s3 !== peg$FAILED) {
            s1 = [s1, s2, s3];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseTHIS() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 4) === peg$c254) {
        s1 = peg$c254;
        peg$currPos += 4;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c255); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        peg$silentFails++;
        s3 = peg$parseLetterOrDigit();
        peg$silentFails--;
        if (s3 === peg$FAILED) {
          s2 = void 0;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseSpacing();
          if (s3 !== peg$FAILED) {
            s1 = [s1, s2, s3];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseTHROWS() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 6) === peg$c256) {
        s1 = peg$c256;
        peg$currPos += 6;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c257); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        peg$silentFails++;
        s3 = peg$parseLetterOrDigit();
        peg$silentFails--;
        if (s3 === peg$FAILED) {
          s2 = void 0;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseSpacing();
          if (s3 !== peg$FAILED) {
            s1 = [s1, s2, s3];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseTHROW() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 5) === peg$c258) {
        s1 = peg$c258;
        peg$currPos += 5;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c259); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        peg$silentFails++;
        s3 = peg$parseLetterOrDigit();
        peg$silentFails--;
        if (s3 === peg$FAILED) {
          s2 = void 0;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseSpacing();
          if (s3 !== peg$FAILED) {
            s1 = [s1, s2, s3];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseTRY() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 3) === peg$c262) {
        s1 = peg$c262;
        peg$currPos += 3;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c263); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        peg$silentFails++;
        s3 = peg$parseLetterOrDigit();
        peg$silentFails--;
        if (s3 === peg$FAILED) {
          s2 = void 0;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseSpacing();
          if (s3 !== peg$FAILED) {
            s1 = [s1, s2, s3];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseVOID() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 4) === peg$c264) {
        s1 = peg$c264;
        peg$currPos += 4;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c265); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        peg$silentFails++;
        s3 = peg$parseLetterOrDigit();
        peg$silentFails--;
        if (s3 === peg$FAILED) {
          s2 = void 0;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseSpacing();
          if (s3 !== peg$FAILED) {
            s1 = [s1, s2, s3];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseWHILE() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 5) === peg$c266) {
        s1 = peg$c266;
        peg$currPos += 5;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c267); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        peg$silentFails++;
        s3 = peg$parseLetterOrDigit();
        peg$silentFails--;
        if (s3 === peg$FAILED) {
          s2 = void 0;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseSpacing();
          if (s3 !== peg$FAILED) {
            s1 = [s1, s2, s3];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseLiteral() {
      var s0, s1, s2, s3, s4;

      s0 = peg$currPos;
      s1 = peg$parseFloatLiteral();
      if (s1 === peg$FAILED) {
        s1 = peg$parseIntegerLiteral();
        if (s1 === peg$FAILED) {
          s1 = peg$parseCharLiteral();
          if (s1 === peg$FAILED) {
            s1 = peg$parseStringLiteral();
            if (s1 === peg$FAILED) {
              s1 = peg$currPos;
              if (input.substr(peg$currPos, 4) === peg$c260) {
                s2 = peg$c260;
                peg$currPos += 4;
              } else {
                s2 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c261); }
              }
              if (s2 !== peg$FAILED) {
                s3 = peg$currPos;
                peg$silentFails++;
                s4 = peg$parseLetterOrDigit();
                peg$silentFails--;
                if (s4 === peg$FAILED) {
                  s3 = void 0;
                } else {
                  peg$currPos = s3;
                  s3 = peg$FAILED;
                }
                if (s3 !== peg$FAILED) {
                  peg$savedPos = s1;
                  s2 = peg$c268();
                  s1 = s2;
                } else {
                  peg$currPos = s1;
                  s1 = peg$FAILED;
                }
              } else {
                peg$currPos = s1;
                s1 = peg$FAILED;
              }
              if (s1 === peg$FAILED) {
                s1 = peg$currPos;
                if (input.substr(peg$currPos, 5) === peg$c224) {
                  s2 = peg$c224;
                  peg$currPos += 5;
                } else {
                  s2 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c225); }
                }
                if (s2 !== peg$FAILED) {
                  s3 = peg$currPos;
                  peg$silentFails++;
                  s4 = peg$parseLetterOrDigit();
                  peg$silentFails--;
                  if (s4 === peg$FAILED) {
                    s3 = void 0;
                  } else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                  }
                  if (s3 !== peg$FAILED) {
                    peg$savedPos = s1;
                    s2 = peg$c269();
                    s1 = s2;
                  } else {
                    peg$currPos = s1;
                    s1 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s1;
                  s1 = peg$FAILED;
                }
                if (s1 === peg$FAILED) {
                  s1 = peg$currPos;
                  if (input.substr(peg$currPos, 4) === peg$c244) {
                    s2 = peg$c244;
                    peg$currPos += 4;
                  } else {
                    s2 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c245); }
                  }
                  if (s2 !== peg$FAILED) {
                    s3 = peg$currPos;
                    peg$silentFails++;
                    s4 = peg$parseLetterOrDigit();
                    peg$silentFails--;
                    if (s4 === peg$FAILED) {
                      s3 = void 0;
                    } else {
                      peg$currPos = s3;
                      s3 = peg$FAILED;
                    }
                    if (s3 !== peg$FAILED) {
                      peg$savedPos = s1;
                      s2 = peg$c270();
                      s1 = s2;
                    } else {
                      peg$currPos = s1;
                      s1 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s1;
                    s1 = peg$FAILED;
                  }
                }
              }
            }
          }
        }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseSpacing();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c271(s1);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseIntegerLiteral() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = peg$parseHexNumeral();
      if (s1 === peg$FAILED) {
        s1 = peg$parseBinaryNumeral();
        if (s1 === peg$FAILED) {
          s1 = peg$parseOctalNumeral();
          if (s1 === peg$FAILED) {
            s1 = peg$parseDecimalNumeral();
          }
        }
      }
      if (s1 !== peg$FAILED) {
        if (peg$c272.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c273); }
        }
        if (s2 === peg$FAILED) {
          s2 = null;
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c274();
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseDecimalNumeral() {
      var s0, s1, s2, s3, s4, s5;

      if (input.charCodeAt(peg$currPos) === 48) {
        s0 = peg$c275;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c276); }
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (peg$c277.test(input.charAt(peg$currPos))) {
          s1 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c278); }
        }
        if (s1 !== peg$FAILED) {
          s2 = [];
          s3 = peg$currPos;
          s4 = [];
          if (peg$c279.test(input.charAt(peg$currPos))) {
            s5 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c280); }
          }
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            if (peg$c279.test(input.charAt(peg$currPos))) {
              s5 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c280); }
            }
          }
          if (s4 !== peg$FAILED) {
            if (peg$c198.test(input.charAt(peg$currPos))) {
              s5 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c199); }
            }
            if (s5 !== peg$FAILED) {
              s4 = [s4, s5];
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
          while (s3 !== peg$FAILED) {
            s2.push(s3);
            s3 = peg$currPos;
            s4 = [];
            if (peg$c279.test(input.charAt(peg$currPos))) {
              s5 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c280); }
            }
            while (s5 !== peg$FAILED) {
              s4.push(s5);
              if (peg$c279.test(input.charAt(peg$currPos))) {
                s5 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c280); }
              }
            }
            if (s4 !== peg$FAILED) {
              if (peg$c198.test(input.charAt(peg$currPos))) {
                s5 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c199); }
              }
              if (s5 !== peg$FAILED) {
                s4 = [s4, s5];
                s3 = s4;
              } else {
                peg$currPos = s3;
                s3 = peg$FAILED;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          }
          if (s2 !== peg$FAILED) {
            s1 = [s1, s2];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      }

      return s0;
    }

    function peg$parseHexNumeral() {
      var s0, s1, s2;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c281) {
        s1 = peg$c281;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c282); }
      }
      if (s1 === peg$FAILED) {
        if (input.substr(peg$currPos, 2) === peg$c283) {
          s1 = peg$c283;
          peg$currPos += 2;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c284); }
        }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseHexDigits();
        if (s2 !== peg$FAILED) {
          s1 = [s1, s2];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseBinaryNumeral() {
      var s0, s1, s2, s3, s4, s5, s6;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c285) {
        s1 = peg$c285;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c286); }
      }
      if (s1 === peg$FAILED) {
        if (input.substr(peg$currPos, 2) === peg$c287) {
          s1 = peg$c287;
          peg$currPos += 2;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c288); }
        }
      }
      if (s1 !== peg$FAILED) {
        if (peg$c289.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c290); }
        }
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$currPos;
          s5 = [];
          if (peg$c279.test(input.charAt(peg$currPos))) {
            s6 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s6 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c280); }
          }
          while (s6 !== peg$FAILED) {
            s5.push(s6);
            if (peg$c279.test(input.charAt(peg$currPos))) {
              s6 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s6 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c280); }
            }
          }
          if (s5 !== peg$FAILED) {
            if (peg$c289.test(input.charAt(peg$currPos))) {
              s6 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s6 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c290); }
            }
            if (s6 !== peg$FAILED) {
              s5 = [s5, s6];
              s4 = s5;
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$currPos;
            s5 = [];
            if (peg$c279.test(input.charAt(peg$currPos))) {
              s6 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s6 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c280); }
            }
            while (s6 !== peg$FAILED) {
              s5.push(s6);
              if (peg$c279.test(input.charAt(peg$currPos))) {
                s6 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s6 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c280); }
              }
            }
            if (s5 !== peg$FAILED) {
              if (peg$c289.test(input.charAt(peg$currPos))) {
                s6 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s6 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c290); }
              }
              if (s6 !== peg$FAILED) {
                s5 = [s5, s6];
                s4 = s5;
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          }
          if (s3 !== peg$FAILED) {
            s1 = [s1, s2, s3];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseOctalNumeral() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 48) {
        s1 = peg$c275;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c276); }
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = [];
        if (peg$c279.test(input.charAt(peg$currPos))) {
          s5 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s5 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c280); }
        }
        while (s5 !== peg$FAILED) {
          s4.push(s5);
          if (peg$c279.test(input.charAt(peg$currPos))) {
            s5 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c280); }
          }
        }
        if (s4 !== peg$FAILED) {
          if (peg$c291.test(input.charAt(peg$currPos))) {
            s5 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c292); }
          }
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        if (s3 !== peg$FAILED) {
          while (s3 !== peg$FAILED) {
            s2.push(s3);
            s3 = peg$currPos;
            s4 = [];
            if (peg$c279.test(input.charAt(peg$currPos))) {
              s5 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c280); }
            }
            while (s5 !== peg$FAILED) {
              s4.push(s5);
              if (peg$c279.test(input.charAt(peg$currPos))) {
                s5 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c280); }
              }
            }
            if (s4 !== peg$FAILED) {
              if (peg$c291.test(input.charAt(peg$currPos))) {
                s5 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c292); }
              }
              if (s5 !== peg$FAILED) {
                s4 = [s4, s5];
                s3 = s4;
              } else {
                peg$currPos = s3;
                s3 = peg$FAILED;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          }
        } else {
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          s1 = [s1, s2];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseFloatLiteral() {
      var s0, s1;

      s0 = peg$currPos;
      s1 = peg$parseHexFloat();
      if (s1 === peg$FAILED) {
        s1 = peg$parseDecimalFloat();
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c274();
      }
      s0 = s1;

      return s0;
    }

    function peg$parseDecimalFloat() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$parseDigits();
      if (s1 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 46) {
          s2 = peg$c293;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c294); }
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseDigits();
          if (s3 === peg$FAILED) {
            s3 = null;
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parseExponent();
            if (s4 === peg$FAILED) {
              s4 = null;
            }
            if (s4 !== peg$FAILED) {
              if (peg$c295.test(input.charAt(peg$currPos))) {
                s5 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c296); }
              }
              if (s5 === peg$FAILED) {
                s5 = null;
              }
              if (s5 !== peg$FAILED) {
                s1 = [s1, s2, s3, s4, s5];
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 46) {
          s1 = peg$c293;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c294); }
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$parseDigits();
          if (s2 !== peg$FAILED) {
            s3 = peg$parseExponent();
            if (s3 === peg$FAILED) {
              s3 = null;
            }
            if (s3 !== peg$FAILED) {
              if (peg$c295.test(input.charAt(peg$currPos))) {
                s4 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s4 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c296); }
              }
              if (s4 === peg$FAILED) {
                s4 = null;
              }
              if (s4 !== peg$FAILED) {
                s1 = [s1, s2, s3, s4];
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          s1 = peg$parseDigits();
          if (s1 !== peg$FAILED) {
            s2 = peg$parseExponent();
            if (s2 !== peg$FAILED) {
              if (peg$c295.test(input.charAt(peg$currPos))) {
                s3 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s3 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c296); }
              }
              if (s3 === peg$FAILED) {
                s3 = null;
              }
              if (s3 !== peg$FAILED) {
                s1 = [s1, s2, s3];
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            s1 = peg$parseDigits();
            if (s1 !== peg$FAILED) {
              s2 = peg$parseExponent();
              if (s2 === peg$FAILED) {
                s2 = null;
              }
              if (s2 !== peg$FAILED) {
                if (peg$c295.test(input.charAt(peg$currPos))) {
                  s3 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s3 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c296); }
                }
                if (s3 !== peg$FAILED) {
                  s1 = [s1, s2, s3];
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          }
        }
      }

      return s0;
    }

    function peg$parseExponent() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (peg$c297.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c298); }
      }
      if (s1 !== peg$FAILED) {
        if (peg$c299.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c300); }
        }
        if (s2 === peg$FAILED) {
          s2 = null;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseDigits();
          if (s3 !== peg$FAILED) {
            s1 = [s1, s2, s3];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseHexFloat() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$parseHexSignificand();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseBinaryExponent();
        if (s2 !== peg$FAILED) {
          if (peg$c295.test(input.charAt(peg$currPos))) {
            s3 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c296); }
          }
          if (s3 === peg$FAILED) {
            s3 = null;
          }
          if (s3 !== peg$FAILED) {
            s1 = [s1, s2, s3];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseHexSignificand() {
      var s0, s1, s2, s3, s4;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c281) {
        s1 = peg$c281;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c282); }
      }
      if (s1 === peg$FAILED) {
        if (input.substr(peg$currPos, 2) === peg$c283) {
          s1 = peg$c283;
          peg$currPos += 2;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c284); }
        }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseHexDigits();
        if (s2 === peg$FAILED) {
          s2 = null;
        }
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 46) {
            s3 = peg$c293;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c294); }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parseHexDigits();
            if (s4 !== peg$FAILED) {
              s1 = [s1, s2, s3, s4];
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseHexNumeral();
        if (s1 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 46) {
            s2 = peg$c293;
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c294); }
          }
          if (s2 === peg$FAILED) {
            s2 = null;
          }
          if (s2 !== peg$FAILED) {
            s1 = [s1, s2];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      }

      return s0;
    }

    function peg$parseBinaryExponent() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (peg$c301.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c302); }
      }
      if (s1 !== peg$FAILED) {
        if (peg$c299.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c300); }
        }
        if (s2 === peg$FAILED) {
          s2 = null;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseDigits();
          if (s3 !== peg$FAILED) {
            s1 = [s1, s2, s3];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseDigits() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      if (peg$c198.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c199); }
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = [];
        if (peg$c279.test(input.charAt(peg$currPos))) {
          s5 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s5 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c280); }
        }
        while (s5 !== peg$FAILED) {
          s4.push(s5);
          if (peg$c279.test(input.charAt(peg$currPos))) {
            s5 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c280); }
          }
        }
        if (s4 !== peg$FAILED) {
          if (peg$c198.test(input.charAt(peg$currPos))) {
            s5 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c199); }
          }
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = [];
          if (peg$c279.test(input.charAt(peg$currPos))) {
            s5 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c280); }
          }
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            if (peg$c279.test(input.charAt(peg$currPos))) {
              s5 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c280); }
            }
          }
          if (s4 !== peg$FAILED) {
            if (peg$c198.test(input.charAt(peg$currPos))) {
              s5 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c199); }
            }
            if (s5 !== peg$FAILED) {
              s4 = [s4, s5];
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        }
        if (s2 !== peg$FAILED) {
          s1 = [s1, s2];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseHexDigits() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$parseHexDigit();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = [];
        if (peg$c279.test(input.charAt(peg$currPos))) {
          s5 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s5 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c280); }
        }
        while (s5 !== peg$FAILED) {
          s4.push(s5);
          if (peg$c279.test(input.charAt(peg$currPos))) {
            s5 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c280); }
          }
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$parseHexDigit();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = [];
          if (peg$c279.test(input.charAt(peg$currPos))) {
            s5 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c280); }
          }
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            if (peg$c279.test(input.charAt(peg$currPos))) {
              s5 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c280); }
            }
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parseHexDigit();
            if (s5 !== peg$FAILED) {
              s4 = [s4, s5];
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        }
        if (s2 !== peg$FAILED) {
          s1 = [s1, s2];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseHexDigit() {
      var s0;

      if (peg$c303.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c304); }
      }
      if (s0 === peg$FAILED) {
        if (peg$c305.test(input.charAt(peg$currPos))) {
          s0 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c306); }
        }
        if (s0 === peg$FAILED) {
          if (peg$c198.test(input.charAt(peg$currPos))) {
            s0 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c199); }
          }
        }
      }

      return s0;
    }

    function peg$parseCharLiteral() {
      var s0, s1, s2, s3, s4;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 39) {
        s1 = peg$c307;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c308); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseEscape();
        if (s2 === peg$FAILED) {
          s2 = peg$currPos;
          s3 = peg$currPos;
          peg$silentFails++;
          if (peg$c309.test(input.charAt(peg$currPos))) {
            s4 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c310); }
          }
          peg$silentFails--;
          if (s4 === peg$FAILED) {
            s3 = void 0;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s3 = [s3, s4];
              s2 = s3;
            } else {
              peg$currPos = s2;
              s2 = peg$FAILED;
            }
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        }
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 39) {
            s3 = peg$c307;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c308); }
          }
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c311();
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseStringLiteral() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 34) {
        s1 = peg$c312;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c313); }
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parseEscape();
        if (s3 === peg$FAILED) {
          s3 = peg$currPos;
          s4 = peg$currPos;
          peg$silentFails++;
          if (peg$c314.test(input.charAt(peg$currPos))) {
            s5 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c315); }
          }
          peg$silentFails--;
          if (s5 === peg$FAILED) {
            s4 = void 0;
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parse_();
            if (s5 !== peg$FAILED) {
              s4 = [s4, s5];
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parseEscape();
          if (s3 === peg$FAILED) {
            s3 = peg$currPos;
            s4 = peg$currPos;
            peg$silentFails++;
            if (peg$c314.test(input.charAt(peg$currPos))) {
              s5 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c315); }
            }
            peg$silentFails--;
            if (s5 === peg$FAILED) {
              s4 = void 0;
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
            if (s4 !== peg$FAILED) {
              s5 = peg$parse_();
              if (s5 !== peg$FAILED) {
                s4 = [s4, s5];
                s3 = s4;
              } else {
                peg$currPos = s3;
                s3 = peg$FAILED;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          }
        }
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 34) {
            s3 = peg$c312;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c313); }
          }
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c316();
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseEscape() {
      var s0, s1, s2;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 92) {
        s1 = peg$c317;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c318); }
      }
      if (s1 !== peg$FAILED) {
        if (peg$c319.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c320); }
        }
        if (s2 === peg$FAILED) {
          s2 = peg$parseOctalEscape();
          if (s2 === peg$FAILED) {
            s2 = peg$parseUnicodeEscape();
          }
        }
        if (s2 !== peg$FAILED) {
          s1 = [s1, s2];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseOctalEscape() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (peg$c321.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c322); }
      }
      if (s1 !== peg$FAILED) {
        if (peg$c291.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c292); }
        }
        if (s2 !== peg$FAILED) {
          if (peg$c291.test(input.charAt(peg$currPos))) {
            s3 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c292); }
          }
          if (s3 !== peg$FAILED) {
            s1 = [s1, s2, s3];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (peg$c291.test(input.charAt(peg$currPos))) {
          s1 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c292); }
        }
        if (s1 !== peg$FAILED) {
          if (peg$c291.test(input.charAt(peg$currPos))) {
            s2 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c292); }
          }
          if (s2 !== peg$FAILED) {
            s1 = [s1, s2];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        if (s0 === peg$FAILED) {
          if (peg$c291.test(input.charAt(peg$currPos))) {
            s0 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c292); }
          }
        }
      }

      return s0;
    }

    function peg$parseUnicodeEscape() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = [];
      if (input.charCodeAt(peg$currPos) === 117) {
        s2 = peg$c323;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c324); }
      }
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          if (input.charCodeAt(peg$currPos) === 117) {
            s2 = peg$c323;
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c324); }
          }
        }
      } else {
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseHexDigit();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseHexDigit();
          if (s3 !== peg$FAILED) {
            s4 = peg$parseHexDigit();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseHexDigit();
              if (s5 !== peg$FAILED) {
                s1 = [s1, s2, s3, s4, s5];
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseAT() {
      var s0, s1, s2;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 64) {
        s1 = peg$c325;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c326); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseSpacing();
        if (s2 !== peg$FAILED) {
          s1 = [s1, s2];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseAND() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 38) {
        s1 = peg$c327;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c328); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        peg$silentFails++;
        if (peg$c329.test(input.charAt(peg$currPos))) {
          s3 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c330); }
        }
        peg$silentFails--;
        if (s3 === peg$FAILED) {
          s2 = void 0;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseSpacing();
          if (s3 !== peg$FAILED) {
            s1 = [s1, s2, s3];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseANDAND() {
      var s0, s1, s2;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c331) {
        s1 = peg$c331;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c332); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseSpacing();
        if (s2 !== peg$FAILED) {
          s1 = [s1, s2];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseANDEQU() {
      var s0, s1, s2;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c333) {
        s1 = peg$c333;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c334); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseSpacing();
        if (s2 !== peg$FAILED) {
          s1 = [s1, s2];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseBANG() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 33) {
        s1 = peg$c335;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c336); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        peg$silentFails++;
        if (input.charCodeAt(peg$currPos) === 61) {
          s3 = peg$c337;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c338); }
        }
        peg$silentFails--;
        if (s3 === peg$FAILED) {
          s2 = void 0;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseSpacing();
          if (s3 !== peg$FAILED) {
            s1 = [s1, s2, s3];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseBSR() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 3) === peg$c339) {
        s1 = peg$c339;
        peg$currPos += 3;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c340); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        peg$silentFails++;
        if (input.charCodeAt(peg$currPos) === 61) {
          s3 = peg$c337;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c338); }
        }
        peg$silentFails--;
        if (s3 === peg$FAILED) {
          s2 = void 0;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseSpacing();
          if (s3 !== peg$FAILED) {
            s1 = [s1, s2, s3];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseBSREQU() {
      var s0, s1, s2;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 4) === peg$c341) {
        s1 = peg$c341;
        peg$currPos += 4;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c342); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseSpacing();
        if (s2 !== peg$FAILED) {
          s1 = [s1, s2];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseCOLON() {
      var s0, s1, s2;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 58) {
        s1 = peg$c343;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c344); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseSpacing();
        if (s2 !== peg$FAILED) {
          s1 = [s1, s2];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseCOMMA() {
      var s0, s1, s2;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 44) {
        s1 = peg$c345;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c346); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseSpacing();
        if (s2 !== peg$FAILED) {
          s1 = [s1, s2];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseDEC() {
      var s0, s1, s2;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c347) {
        s1 = peg$c347;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c348); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseSpacing();
        if (s2 !== peg$FAILED) {
          s1 = [s1, s2];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseDIV() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 47) {
        s1 = peg$c349;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c350); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        peg$silentFails++;
        if (input.charCodeAt(peg$currPos) === 61) {
          s3 = peg$c337;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c338); }
        }
        peg$silentFails--;
        if (s3 === peg$FAILED) {
          s2 = void 0;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseSpacing();
          if (s3 !== peg$FAILED) {
            s1 = [s1, s2, s3];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseDIVEQU() {
      var s0, s1, s2;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c351) {
        s1 = peg$c351;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c352); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseSpacing();
        if (s2 !== peg$FAILED) {
          s1 = [s1, s2];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseDOT() {
      var s0, s1, s2;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 46) {
        s1 = peg$c293;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c294); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseSpacing();
        if (s2 !== peg$FAILED) {
          s1 = [s1, s2];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseELLIPSIS() {
      var s0, s1, s2;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 3) === peg$c353) {
        s1 = peg$c353;
        peg$currPos += 3;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c354); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseSpacing();
        if (s2 !== peg$FAILED) {
          s1 = [s1, s2];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseEQU() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 61) {
        s1 = peg$c337;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c338); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        peg$silentFails++;
        if (input.charCodeAt(peg$currPos) === 61) {
          s3 = peg$c337;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c338); }
        }
        peg$silentFails--;
        if (s3 === peg$FAILED) {
          s2 = void 0;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseSpacing();
          if (s3 !== peg$FAILED) {
            s1 = [s1, s2, s3];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseEQUAL() {
      var s0, s1, s2;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c355) {
        s1 = peg$c355;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c356); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseSpacing();
        if (s2 !== peg$FAILED) {
          s1 = [s1, s2];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseGE() {
      var s0, s1, s2;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c357) {
        s1 = peg$c357;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c358); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseSpacing();
        if (s2 !== peg$FAILED) {
          s1 = [s1, s2];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseGT() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 62) {
        s1 = peg$c359;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c360); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        peg$silentFails++;
        if (peg$c361.test(input.charAt(peg$currPos))) {
          s3 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c362); }
        }
        peg$silentFails--;
        if (s3 === peg$FAILED) {
          s2 = void 0;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseSpacing();
          if (s3 !== peg$FAILED) {
            s1 = [s1, s2, s3];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseHAT() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 94) {
        s1 = peg$c363;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c364); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        peg$silentFails++;
        if (input.charCodeAt(peg$currPos) === 61) {
          s3 = peg$c337;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c338); }
        }
        peg$silentFails--;
        if (s3 === peg$FAILED) {
          s2 = void 0;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseSpacing();
          if (s3 !== peg$FAILED) {
            s1 = [s1, s2, s3];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseHATEQU() {
      var s0, s1, s2;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c365) {
        s1 = peg$c365;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c366); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseSpacing();
        if (s2 !== peg$FAILED) {
          s1 = [s1, s2];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseINC() {
      var s0, s1, s2;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c367) {
        s1 = peg$c367;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c368); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseSpacing();
        if (s2 !== peg$FAILED) {
          s1 = [s1, s2];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseLBRK() {
      var s0, s1, s2;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 91) {
        s1 = peg$c369;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c370); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseSpacing();
        if (s2 !== peg$FAILED) {
          s1 = [s1, s2];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseLE() {
      var s0, s1, s2;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c371) {
        s1 = peg$c371;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c372); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseSpacing();
        if (s2 !== peg$FAILED) {
          s1 = [s1, s2];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseLPAR() {
      var s0, s1, s2;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 40) {
        s1 = peg$c373;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c374); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseSpacing();
        if (s2 !== peg$FAILED) {
          s1 = [s1, s2];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseLPOINT() {
      var s0, s1, s2;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 60) {
        s1 = peg$c375;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c376); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseSpacing();
        if (s2 !== peg$FAILED) {
          s1 = [s1, s2];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseLT() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 60) {
        s1 = peg$c375;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c376); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        peg$silentFails++;
        if (peg$c377.test(input.charAt(peg$currPos))) {
          s3 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c378); }
        }
        peg$silentFails--;
        if (s3 === peg$FAILED) {
          s2 = void 0;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseSpacing();
          if (s3 !== peg$FAILED) {
            s1 = [s1, s2, s3];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseLWING() {
      var s0, s1, s2;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 123) {
        s1 = peg$c379;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c380); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseSpacing();
        if (s2 !== peg$FAILED) {
          s1 = [s1, s2];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseMINUS() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 45) {
        s1 = peg$c381;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c382); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        peg$silentFails++;
        if (peg$c383.test(input.charAt(peg$currPos))) {
          s3 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c384); }
        }
        peg$silentFails--;
        if (s3 === peg$FAILED) {
          s2 = void 0;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseSpacing();
          if (s3 !== peg$FAILED) {
            s1 = [s1, s2, s3];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseMINUSEQU() {
      var s0, s1, s2;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c385) {
        s1 = peg$c385;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c386); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseSpacing();
        if (s2 !== peg$FAILED) {
          s1 = [s1, s2];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseMOD() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 37) {
        s1 = peg$c387;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c388); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        peg$silentFails++;
        if (input.charCodeAt(peg$currPos) === 61) {
          s3 = peg$c337;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c338); }
        }
        peg$silentFails--;
        if (s3 === peg$FAILED) {
          s2 = void 0;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseSpacing();
          if (s3 !== peg$FAILED) {
            s1 = [s1, s2, s3];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseMODEQU() {
      var s0, s1, s2;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c389) {
        s1 = peg$c389;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c390); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseSpacing();
        if (s2 !== peg$FAILED) {
          s1 = [s1, s2];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseNOTEQUAL() {
      var s0, s1, s2;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c391) {
        s1 = peg$c391;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c392); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseSpacing();
        if (s2 !== peg$FAILED) {
          s1 = [s1, s2];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseOR() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 124) {
        s1 = peg$c393;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c394); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        peg$silentFails++;
        if (peg$c395.test(input.charAt(peg$currPos))) {
          s3 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c396); }
        }
        peg$silentFails--;
        if (s3 === peg$FAILED) {
          s2 = void 0;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseSpacing();
          if (s3 !== peg$FAILED) {
            s1 = [s1, s2, s3];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseOREQU() {
      var s0, s1, s2;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c397) {
        s1 = peg$c397;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c398); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseSpacing();
        if (s2 !== peg$FAILED) {
          s1 = [s1, s2];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseOROR() {
      var s0, s1, s2;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c399) {
        s1 = peg$c399;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c400); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseSpacing();
        if (s2 !== peg$FAILED) {
          s1 = [s1, s2];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parsePLUS() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 43) {
        s1 = peg$c401;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c402); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        peg$silentFails++;
        if (peg$c403.test(input.charAt(peg$currPos))) {
          s3 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c404); }
        }
        peg$silentFails--;
        if (s3 === peg$FAILED) {
          s2 = void 0;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseSpacing();
          if (s3 !== peg$FAILED) {
            s1 = [s1, s2, s3];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parsePLUSEQU() {
      var s0, s1, s2;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c405) {
        s1 = peg$c405;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c406); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseSpacing();
        if (s2 !== peg$FAILED) {
          s1 = [s1, s2];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseQUERY() {
      var s0, s1, s2;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 63) {
        s1 = peg$c407;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c408); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseSpacing();
        if (s2 !== peg$FAILED) {
          s1 = [s1, s2];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseRBRK() {
      var s0, s1, s2;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 93) {
        s1 = peg$c409;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c410); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseSpacing();
        if (s2 !== peg$FAILED) {
          s1 = [s1, s2];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseRPAR() {
      var s0, s1, s2;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 41) {
        s1 = peg$c411;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c412); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseSpacing();
        if (s2 !== peg$FAILED) {
          s1 = [s1, s2];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseRPOINT() {
      var s0, s1, s2;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 62) {
        s1 = peg$c359;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c360); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseSpacing();
        if (s2 !== peg$FAILED) {
          s1 = [s1, s2];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseRWING() {
      var s0, s1, s2;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 125) {
        s1 = peg$c413;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c414); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseSpacing();
        if (s2 !== peg$FAILED) {
          s1 = [s1, s2];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseSEMI() {
      var s0, s1, s2;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 59) {
        s1 = peg$c415;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c416); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseSpacing();
        if (s2 !== peg$FAILED) {
          s1 = [s1, s2];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseSL() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c417) {
        s1 = peg$c417;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c418); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        peg$silentFails++;
        if (input.charCodeAt(peg$currPos) === 61) {
          s3 = peg$c337;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c338); }
        }
        peg$silentFails--;
        if (s3 === peg$FAILED) {
          s2 = void 0;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseSpacing();
          if (s3 !== peg$FAILED) {
            s1 = [s1, s2, s3];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseSLEQU() {
      var s0, s1, s2;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 3) === peg$c419) {
        s1 = peg$c419;
        peg$currPos += 3;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c420); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseSpacing();
        if (s2 !== peg$FAILED) {
          s1 = [s1, s2];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseSR() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c421) {
        s1 = peg$c421;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c422); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        peg$silentFails++;
        if (peg$c361.test(input.charAt(peg$currPos))) {
          s3 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c362); }
        }
        peg$silentFails--;
        if (s3 === peg$FAILED) {
          s2 = void 0;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseSpacing();
          if (s3 !== peg$FAILED) {
            s1 = [s1, s2, s3];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseSREQU() {
      var s0, s1, s2;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 3) === peg$c423) {
        s1 = peg$c423;
        peg$currPos += 3;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c424); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseSpacing();
        if (s2 !== peg$FAILED) {
          s1 = [s1, s2];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseSTAR() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 42) {
        s1 = peg$c425;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c426); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        peg$silentFails++;
        if (input.charCodeAt(peg$currPos) === 61) {
          s3 = peg$c337;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c338); }
        }
        peg$silentFails--;
        if (s3 === peg$FAILED) {
          s2 = void 0;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseSpacing();
          if (s3 !== peg$FAILED) {
            s1 = [s1, s2, s3];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseSTAREQU() {
      var s0, s1, s2;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c427) {
        s1 = peg$c427;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c428); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseSpacing();
        if (s2 !== peg$FAILED) {
          s1 = [s1, s2];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseTILDA() {
      var s0, s1, s2;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 126) {
        s1 = peg$c429;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c430); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseSpacing();
        if (s2 !== peg$FAILED) {
          s1 = [s1, s2];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseEOT() {
      var s0, s1;

      s0 = peg$currPos;
      peg$silentFails++;
      s1 = peg$parse_();
      peg$silentFails--;
      if (s1 === peg$FAILED) {
        s0 = void 0;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parse_() {
      var s0;

      if (input.length > peg$currPos) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c431); }
      }

      return s0;
    }


      function extractOptional(optional, index, def) {
        def = typeof def !== 'undefined' ?  def : null;
        return optional ? optional[index] : def;
      }

      function extractList(list, index) {
        var result = new Array(list.length), i;

        for (i = 0; i < list.length; i++) {
          result[i] = list[i][index];
        }

        return result;
      }

      function buildList(first, rest, index) {
        return [first].concat(extractList(rest, index));
      }

      function buildTree(first, rest, builder) {
        var result = first, i;

        for (i = 0; i < rest.length; i++) {
          result = builder(result, rest[i]);
        }

        return result;
      }

      function buildInfixExpr(first, rest) {
        return buildTree(first, rest, function(result, element) {
          return {
            node:        'InfixExpression',
            operator:     element[0][0], // remove ending Spacing
            leftOperand:  result,
            rightOperand: element[1]
          };
        });
      }

      function buildQualified(first, rest, index) {
        return buildTree(first, rest, 
          function(result, element) {
            return {
              node:     'QualifiedName',
              qualifier: result,
              name:      element[index]
            };
          }
        );
      }

      function popQualified(tree) {
        return tree.node === 'QualifiedName' 
          ? { name: tree.name, expression: tree.qualifier }
          : { name: tree, expression: null };
      }

      function extractThrowsClassType(list) {
        return list.map(function(node){ 
          return node.name; 
        });
      }

      function extractExpressions(list) {
        return list.map(function(node) { 
          return node.expression; 
        });
      }

      function buildArrayTree(first, rest) {
        return buildTree(first, rest, 
          function(result, element) {
          return {
            node:         'ArrayType',
            componentType: result
          }; 
        });
      }

      function optionalList(value) {
        return value !== null ? value : [];
      }

      function extractOptionalList(list, index) {
        return optionalList(extractOptional(list, index));
      }

      function skipNulls(list) {
        return list.filter(function(v){ return v !== null; });
      }

      function makePrimitive(code) {
        return {
          node:             'PrimitiveType',
          primitiveTypeCode: code
        }
      }

      function makeModifier(keyword) {
        return { 
          node:   'Modifier', 
          keyword: keyword 
        };
      }

      function makeCatchFinally(catchClauses, finallyBlock) {
          return { 
            catchClauses: catchClauses, 
            finally:      finallyBlock 
          };
      }

      function buildTypeName(qual, args, rest) {
        var first = args === null ? {
          node: 'SimpleType',
          name:  qual
        } : {
          node: 'ParameterizedType',
          type:  {
              node: 'SimpleType',
              name:  qual
          },
          typeArguments: args
        };

        return buildTree(first, rest, 
          function(result, element) {
            var args = element[2];
            return args === null ? {
              node:     'QualifiedType',
              name:      element[1],
              qualifier: result
            } :
            {
              node: 'ParameterizedType',
              type:  {
                node:     'QualifiedType',
                name:      element[1],
                qualifier: result
              },
              typeArguments: args
            };
          }
        );
      }

      function mergeProps(obj, props) {
        var key;
        for (key in props) {
          if (props.hasOwnProperty(key)) {
            if (obj.hasOwnProperty(key)) {
              throw new Error(
                'Property ' + key + ' exists ' + line() + '\n' + text() + 
                '\nCurrent value: ' + JSON.stringify(obj[key], null, 2) + 
                '\nNew value: ' + JSON.stringify(props[key], null, 2)
              );
            } else {
              obj[key] = props[key];
            }
          }
        }
        return obj;
      }

      function buildSelectorTree(arg, sel, sels) {
        function getMergeVal(o,v) {
          switch(o.node){
            case 'SuperFieldAccess':
            case 'SuperMethodInvocation':
              return { qualifier: v };
            case 'ArrayAccess':
              return { array: v };
            default:
              return { expression: v };
          }
        }
        return buildTree(mergeProps(sel, getMergeVal(sel, arg)), 
          sels, function(result, element) {
            return mergeProps(element, getMergeVal(element, result));
        });
      }

      function TODO() {
        throw new Error('TODO: not impl line ' + line() + '\n' + text());
      }


    peg$result = peg$startRuleFunction();

    if (peg$result !== peg$FAILED && peg$currPos === input.length) {
      return peg$result;
    } else {
      if (peg$result !== peg$FAILED && peg$currPos < input.length) {
        peg$fail({ type: "end", description: "end of input" });
      }

      throw peg$buildException(
        null,
        peg$maxFailExpected,
        peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
        peg$maxFailPos < input.length
          ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
          : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
      );
    }
  }

  return {
    SyntaxError: peg$SyntaxError,
    parse:       peg$parse
  };
})();

return module.exports;});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],114:[function(require,module,exports){
//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `exports` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var
    push             = ArrayProto.push,
    slice            = ArrayProto.slice,
    toString         = ObjProto.toString,
    hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind,
    nativeCreate       = Object.create;

  // Naked function reference for surrogate-prototype-swapping.
  var Ctor = function(){};

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.8.3';

  // Internal function that returns an efficient (for current engines) version
  // of the passed-in callback, to be repeatedly applied in other Underscore
  // functions.
  var optimizeCb = function(func, context, argCount) {
    if (context === void 0) return func;
    switch (argCount == null ? 3 : argCount) {
      case 1: return function(value) {
        return func.call(context, value);
      };
      case 2: return function(value, other) {
        return func.call(context, value, other);
      };
      case 3: return function(value, index, collection) {
        return func.call(context, value, index, collection);
      };
      case 4: return function(accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
      };
    }
    return function() {
      return func.apply(context, arguments);
    };
  };

  // A mostly-internal function to generate callbacks that can be applied
  // to each element in a collection, returning the desired result â€” either
  // identity, an arbitrary callback, a property matcher, or a property accessor.
  var cb = function(value, context, argCount) {
    if (value == null) return _.identity;
    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
    if (_.isObject(value)) return _.matcher(value);
    return _.property(value);
  };
  _.iteratee = function(value, context) {
    return cb(value, context, Infinity);
  };

  // An internal function for creating assigner functions.
  var createAssigner = function(keysFunc, undefinedOnly) {
    return function(obj) {
      var length = arguments.length;
      if (length < 2 || obj == null) return obj;
      for (var index = 1; index < length; index++) {
        var source = arguments[index],
            keys = keysFunc(source),
            l = keys.length;
        for (var i = 0; i < l; i++) {
          var key = keys[i];
          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
        }
      }
      return obj;
    };
  };

  // An internal function for creating a new object that inherits from another.
  var baseCreate = function(prototype) {
    if (!_.isObject(prototype)) return {};
    if (nativeCreate) return nativeCreate(prototype);
    Ctor.prototype = prototype;
    var result = new Ctor;
    Ctor.prototype = null;
    return result;
  };

  var property = function(key) {
    return function(obj) {
      return obj == null ? void 0 : obj[key];
    };
  };

  // Helper for collection methods to determine whether a collection
  // should be iterated as an array or as an object
  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
  var getLength = property('length');
  var isArrayLike = function(collection) {
    var length = getLength(collection);
    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
  };

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles raw objects in addition to array-likes. Treats all
  // sparse array-likes as if they were dense.
  _.each = _.forEach = function(obj, iteratee, context) {
    iteratee = optimizeCb(iteratee, context);
    var i, length;
    if (isArrayLike(obj)) {
      for (i = 0, length = obj.length; i < length; i++) {
        iteratee(obj[i], i, obj);
      }
    } else {
      var keys = _.keys(obj);
      for (i = 0, length = keys.length; i < length; i++) {
        iteratee(obj[keys[i]], keys[i], obj);
      }
    }
    return obj;
  };

  // Return the results of applying the iteratee to each element.
  _.map = _.collect = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length,
        results = Array(length);
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      results[index] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  };

  // Create a reducing function iterating left or right.
  function createReduce(dir) {
    // Optimized iterator function as using arguments.length
    // in the main function will deoptimize the, see #1991.
    function iterator(obj, iteratee, memo, keys, index, length) {
      for (; index >= 0 && index < length; index += dir) {
        var currentKey = keys ? keys[index] : index;
        memo = iteratee(memo, obj[currentKey], currentKey, obj);
      }
      return memo;
    }

    return function(obj, iteratee, memo, context) {
      iteratee = optimizeCb(iteratee, context, 4);
      var keys = !isArrayLike(obj) && _.keys(obj),
          length = (keys || obj).length,
          index = dir > 0 ? 0 : length - 1;
      // Determine the initial value if none is provided.
      if (arguments.length < 3) {
        memo = obj[keys ? keys[index] : index];
        index += dir;
      }
      return iterator(obj, iteratee, memo, keys, index, length);
    };
  }

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`.
  _.reduce = _.foldl = _.inject = createReduce(1);

  // The right-associative version of reduce, also known as `foldr`.
  _.reduceRight = _.foldr = createReduce(-1);

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, predicate, context) {
    var key;
    if (isArrayLike(obj)) {
      key = _.findIndex(obj, predicate, context);
    } else {
      key = _.findKey(obj, predicate, context);
    }
    if (key !== void 0 && key !== -1) return obj[key];
  };

  // Return all the elements that pass a truth test.
  // Aliased as `select`.
  _.filter = _.select = function(obj, predicate, context) {
    var results = [];
    predicate = cb(predicate, context);
    _.each(obj, function(value, index, list) {
      if (predicate(value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, predicate, context) {
    return _.filter(obj, _.negate(cb(predicate)), context);
  };

  // Determine whether all of the elements match a truth test.
  // Aliased as `all`.
  _.every = _.all = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (!predicate(obj[currentKey], currentKey, obj)) return false;
    }
    return true;
  };

  // Determine if at least one element in the object matches a truth test.
  // Aliased as `any`.
  _.some = _.any = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (predicate(obj[currentKey], currentKey, obj)) return true;
    }
    return false;
  };

  // Determine if the array or object contains a given item (using `===`).
  // Aliased as `includes` and `include`.
  _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
    if (!isArrayLike(obj)) obj = _.values(obj);
    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
    return _.indexOf(obj, item, fromIndex) >= 0;
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    var isFunc = _.isFunction(method);
    return _.map(obj, function(value) {
      var func = isFunc ? method : value[method];
      return func == null ? func : func.apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, _.property(key));
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs) {
    return _.filter(obj, _.matcher(attrs));
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.find(obj, _.matcher(attrs));
  };

  // Return the maximum element (or element-based computation).
  _.max = function(obj, iteratee, context) {
    var result = -Infinity, lastComputed = -Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value > result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iteratee, context) {
    var result = Infinity, lastComputed = Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value < result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed < lastComputed || computed === Infinity && result === Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Shuffle a collection, using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisherâ€“Yates_shuffle).
  _.shuffle = function(obj) {
    var set = isArrayLike(obj) ? obj : _.values(obj);
    var length = set.length;
    var shuffled = Array(length);
    for (var index = 0, rand; index < length; index++) {
      rand = _.random(0, index);
      if (rand !== index) shuffled[index] = shuffled[rand];
      shuffled[rand] = set[index];
    }
    return shuffled;
  };

  // Sample **n** random values from a collection.
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {
    if (n == null || guard) {
      if (!isArrayLike(obj)) obj = _.values(obj);
      return obj[_.random(obj.length - 1)];
    }
    return _.shuffle(obj).slice(0, Math.max(0, n));
  };

  // Sort the object's values by a criterion produced by an iteratee.
  _.sortBy = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value: value,
        index: index,
        criteria: iteratee(value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(behavior) {
    return function(obj, iteratee, context) {
      var result = {};
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index) {
        var key = iteratee(value, index, obj);
        behavior(result, value, key);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, value, key) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key]++; else result[key] = 1;
  });

  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (isArrayLike(obj)) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
  };

  // Split a collection into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.
  _.partition = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var pass = [], fail = [];
    _.each(obj, function(value, key, obj) {
      (predicate(value, key, obj) ? pass : fail).push(value);
    });
    return [pass, fail];
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[0];
    return _.initial(array, array.length - n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array.
  _.last = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[array.length - 1];
    return _.rest(array, Math.max(0, array.length - n));
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, n == null || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, _.identity);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, strict, startIndex) {
    var output = [], idx = 0;
    for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
      var value = input[i];
      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
        //flatten current level of array or arguments object
        if (!shallow) value = flatten(value, shallow, strict);
        var j = 0, len = value.length;
        output.length += len;
        while (j < len) {
          output[idx++] = value[j++];
        }
      } else if (!strict) {
        output[idx++] = value;
      }
    }
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, false);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
    if (!_.isBoolean(isSorted)) {
      context = iteratee;
      iteratee = isSorted;
      isSorted = false;
    }
    if (iteratee != null) iteratee = cb(iteratee, context);
    var result = [];
    var seen = [];
    for (var i = 0, length = getLength(array); i < length; i++) {
      var value = array[i],
          computed = iteratee ? iteratee(value, i, array) : value;
      if (isSorted) {
        if (!i || seen !== computed) result.push(value);
        seen = computed;
      } else if (iteratee) {
        if (!_.contains(seen, computed)) {
          seen.push(computed);
          result.push(value);
        }
      } else if (!_.contains(result, value)) {
        result.push(value);
      }
    }
    return result;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(flatten(arguments, true, true));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    var result = [];
    var argsLength = arguments.length;
    for (var i = 0, length = getLength(array); i < length; i++) {
      var item = array[i];
      if (_.contains(result, item)) continue;
      for (var j = 1; j < argsLength; j++) {
        if (!_.contains(arguments[j], item)) break;
      }
      if (j === argsLength) result.push(item);
    }
    return result;
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = flatten(arguments, true, true, 1);
    return _.filter(array, function(value){
      return !_.contains(rest, value);
    });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function() {
    return _.unzip(arguments);
  };

  // Complement of _.zip. Unzip accepts an array of arrays and groups
  // each array's elements on shared indices
  _.unzip = function(array) {
    var length = array && _.max(array, getLength).length || 0;
    var result = Array(length);

    for (var index = 0; index < length; index++) {
      result[index] = _.pluck(array, index);
    }
    return result;
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function(list, values) {
    var result = {};
    for (var i = 0, length = getLength(list); i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // Generator function to create the findIndex and findLastIndex functions
  function createPredicateIndexFinder(dir) {
    return function(array, predicate, context) {
      predicate = cb(predicate, context);
      var length = getLength(array);
      var index = dir > 0 ? 0 : length - 1;
      for (; index >= 0 && index < length; index += dir) {
        if (predicate(array[index], index, array)) return index;
      }
      return -1;
    };
  }

  // Returns the first index on an array-like that passes a predicate test
  _.findIndex = createPredicateIndexFinder(1);
  _.findLastIndex = createPredicateIndexFinder(-1);

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iteratee, context) {
    iteratee = cb(iteratee, context, 1);
    var value = iteratee(obj);
    var low = 0, high = getLength(array);
    while (low < high) {
      var mid = Math.floor((low + high) / 2);
      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
    }
    return low;
  };

  // Generator function to create the indexOf and lastIndexOf functions
  function createIndexFinder(dir, predicateFind, sortedIndex) {
    return function(array, item, idx) {
      var i = 0, length = getLength(array);
      if (typeof idx == 'number') {
        if (dir > 0) {
            i = idx >= 0 ? idx : Math.max(idx + length, i);
        } else {
            length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
        }
      } else if (sortedIndex && idx && length) {
        idx = sortedIndex(array, item);
        return array[idx] === item ? idx : -1;
      }
      if (item !== item) {
        idx = predicateFind(slice.call(array, i, length), _.isNaN);
        return idx >= 0 ? idx + i : -1;
      }
      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
        if (array[idx] === item) return idx;
      }
      return -1;
    };
  }

  // Return the position of the first occurrence of an item in an array,
  // or -1 if the item is not included in the array.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (stop == null) {
      stop = start || 0;
      start = 0;
    }
    step = step || 1;

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range = Array(length);

    for (var idx = 0; idx < length; idx++, start += step) {
      range[idx] = start;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Determines whether to execute a function as a constructor
  // or a normal function with the provided arguments
  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
    var self = baseCreate(sourceFunc.prototype);
    var result = sourceFunc.apply(self, args);
    if (_.isObject(result)) return result;
    return self;
  };

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = function(func, context) {
    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
    var args = slice.call(arguments, 2);
    var bound = function() {
      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
    };
    return bound;
  };

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. _ acts
  // as a placeholder, allowing any combination of arguments to be pre-filled.
  _.partial = function(func) {
    var boundArgs = slice.call(arguments, 1);
    var bound = function() {
      var position = 0, length = boundArgs.length;
      var args = Array(length);
      for (var i = 0; i < length; i++) {
        args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
      }
      while (position < arguments.length) args.push(arguments[position++]);
      return executeBound(func, bound, this, this, args);
    };
    return bound;
  };

  // Bind a number of an object's methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.
  _.bindAll = function(obj) {
    var i, length = arguments.length, key;
    if (length <= 1) throw new Error('bindAll must be passed function names');
    for (i = 1; i < length; i++) {
      key = arguments[i];
      obj[key] = _.bind(obj[key], obj);
    }
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memoize = function(key) {
      var cache = memoize.cache;
      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
      return cache[address];
    };
    memoize.cache = {};
    return memoize;
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){
      return func.apply(null, args);
    }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = _.partial(_.delay, _, 1);

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};
    var later = function() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };
    return function() {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, args, context, timestamp, result;

    var later = function() {
      var last = _.now() - timestamp;

      if (last < wait && last >= 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          if (!timeout) context = args = null;
        }
      }
    };

    return function() {
      context = this;
      args = arguments;
      timestamp = _.now();
      var callNow = immediate && !timeout;
      if (!timeout) timeout = setTimeout(later, wait);
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return _.partial(wrapper, func);
  };

  // Returns a negated version of the passed-in predicate.
  _.negate = function(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var args = arguments;
    var start = args.length - 1;
    return function() {
      var i = start;
      var result = args[start].apply(this, arguments);
      while (i--) result = args[i].call(this, result);
      return result;
    };
  };

  // Returns a function that will only be executed on and after the Nth call.
  _.after = function(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Returns a function that will only be executed up to (but not including) the Nth call.
  _.before = function(times, func) {
    var memo;
    return function() {
      if (--times > 0) {
        memo = func.apply(this, arguments);
      }
      if (times <= 1) func = null;
      return memo;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = _.partial(_.before, 2);

  // Object Functions
  // ----------------

  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
                      'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

  function collectNonEnumProps(obj, keys) {
    var nonEnumIdx = nonEnumerableProps.length;
    var constructor = obj.constructor;
    var proto = (_.isFunction(constructor) && constructor.prototype) || ObjProto;

    // Constructor is a special case.
    var prop = 'constructor';
    if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

    while (nonEnumIdx--) {
      prop = nonEnumerableProps[nonEnumIdx];
      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
        keys.push(prop);
      }
    }
  }

  // Retrieve the names of an object's own properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve all the property names of an object.
  _.allKeys = function(obj) {
    if (!_.isObject(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Returns the results of applying the iteratee to each element of the object
  // In contrast to _.map it returns an object
  _.mapObject = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys =  _.keys(obj),
          length = keys.length,
          results = {},
          currentKey;
      for (var index = 0; index < length; index++) {
        currentKey = keys[index];
        results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
      }
      return results;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = createAssigner(_.allKeys);

  // Assigns a given object with all the own properties in the passed-in object(s)
  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
  _.extendOwn = _.assign = createAssigner(_.keys);

  // Returns the first key on an object that passes a predicate test
  _.findKey = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = _.keys(obj), key;
    for (var i = 0, length = keys.length; i < length; i++) {
      key = keys[i];
      if (predicate(obj[key], key, obj)) return key;
    }
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(object, oiteratee, context) {
    var result = {}, obj = object, iteratee, keys;
    if (obj == null) return result;
    if (_.isFunction(oiteratee)) {
      keys = _.allKeys(obj);
      iteratee = optimizeCb(oiteratee, context);
    } else {
      keys = flatten(arguments, false, false, 1);
      iteratee = function(value, key, obj) { return key in obj; };
      obj = Object(obj);
    }
    for (var i = 0, length = keys.length; i < length; i++) {
      var key = keys[i];
      var value = obj[key];
      if (iteratee(value, key, obj)) result[key] = value;
    }
    return result;
  };

   // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj, iteratee, context) {
    if (_.isFunction(iteratee)) {
      iteratee = _.negate(iteratee);
    } else {
      var keys = _.map(flatten(arguments, false, false, 1), String);
      iteratee = function(value, key) {
        return !_.contains(keys, key);
      };
    }
    return _.pick(obj, iteratee, context);
  };

  // Fill in a given object with default properties.
  _.defaults = createAssigner(_.allKeys, true);

  // Creates an object that inherits from the given prototype object.
  // If additional properties are provided then they will be added to the
  // created object.
  _.create = function(prototype, props) {
    var result = baseCreate(prototype);
    if (props) _.extendOwn(result, props);
    return result;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Returns whether an object has a given set of `key:value` pairs.
  _.isMatch = function(object, attrs) {
    var keys = _.keys(attrs), length = keys.length;
    if (object == null) return !length;
    var obj = Object(object);
    for (var i = 0; i < length; i++) {
      var key = keys[i];
      if (attrs[key] !== obj[key] || !(key in obj)) return false;
    }
    return true;
  };


  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a === 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
      case '[object RegExp]':
      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return '' + a === '' + b;
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive.
        // Object(NaN) is equivalent to NaN
        if (+a !== +a) return +b !== +b;
        // An `egal` comparison is performed for other numeric values.
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a === +b;
    }

    var areArrays = className === '[object Array]';
    if (!areArrays) {
      if (typeof a != 'object' || typeof b != 'object') return false;

      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
      // from different frames are.
      var aCtor = a.constructor, bCtor = b.constructor;
      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
                               _.isFunction(bCtor) && bCtor instanceof bCtor)
                          && ('constructor' in a && 'constructor' in b)) {
        return false;
      }
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] === a) return bStack[length] === b;
    }

    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);

    // Recursively compare objects and arrays.
    if (areArrays) {
      // Compare array lengths to determine if a deep comparison is necessary.
      length = a.length;
      if (length !== b.length) return false;
      // Deep compare the contents, ignoring non-numeric properties.
      while (length--) {
        if (!eq(a[length], b[length], aStack, bStack)) return false;
      }
    } else {
      // Deep compare objects.
      var keys = _.keys(a), key;
      length = keys.length;
      // Ensure that both objects contain the same number of properties before comparing deep equality.
      if (_.keys(b).length !== length) return false;
      while (length--) {
        // Deep compare each member
        key = keys[length];
        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
    return _.keys(obj).length === 0;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) === '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) === '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE < 9), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return _.has(obj, 'callee');
    };
  }

  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
  // IE 11 (#1621), and in Safari 8 (#1929).
  if (typeof /./ != 'function' && typeof Int8Array != 'object') {
    _.isFunction = function(obj) {
      return typeof obj == 'function' || false;
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {
    return _.isNumber(obj) && obj !== +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {
    return obj != null && hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iteratees.
  _.identity = function(value) {
    return value;
  };

  // Predicate-generating functions. Often useful outside of Underscore.
  _.constant = function(value) {
    return function() {
      return value;
    };
  };

  _.noop = function(){};

  _.property = property;

  // Generates a function for a given object that returns a given property.
  _.propertyOf = function(obj) {
    return obj == null ? function(){} : function(key) {
      return obj[key];
    };
  };

  // Returns a predicate for checking whether an object has a given set of
  // `key:value` pairs.
  _.matcher = _.matches = function(attrs) {
    attrs = _.extendOwn({}, attrs);
    return function(obj) {
      return _.isMatch(obj, attrs);
    };
  };

  // Run a function **n** times.
  _.times = function(n, iteratee, context) {
    var accum = Array(Math.max(0, n));
    iteratee = optimizeCb(iteratee, context, 1);
    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function() {
    return new Date().getTime();
  };

   // List of HTML entities for escaping.
  var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
  };
  var unescapeMap = _.invert(escapeMap);

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  var createEscaper = function(map) {
    var escaper = function(match) {
      return map[match];
    };
    // Regexes for identifying a key that needs to be escaped
    var source = '(?:' + _.keys(map).join('|') + ')';
    var testRegexp = RegExp(source);
    var replaceRegexp = RegExp(source, 'g');
    return function(string) {
      string = string == null ? '' : '' + string;
      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
    };
  };
  _.escape = createEscaper(escapeMap);
  _.unescape = createEscaper(unescapeMap);

  // If the value of the named `property` is a function then invoke it with the
  // `object` as context; otherwise, return it.
  _.result = function(object, property, fallback) {
    var value = object == null ? void 0 : object[property];
    if (value === void 0) {
      value = fallback;
    }
    return _.isFunction(value) ? value.call(object) : value;
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'":      "'",
    '\\':     '\\',
    '\r':     'r',
    '\n':     'n',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

  var escapeChar = function(match) {
    return '\\' + escapes[match];
  };

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  // NB: `oldSettings` only exists for backwards compatibility.
  _.template = function(text, settings, oldSettings) {
    if (!settings && oldSettings) settings = oldSettings;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset).replace(escaper, escapeChar);
      index = offset + match.length;

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      } else if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      } else if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }

      // Adobe VMs need the match returned to produce the correct offest.
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + 'return __p;\n';

    try {
      var render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled source as a convenience for precompilation.
    var argument = settings.variable || 'obj';
    template.source = 'function(' + argument + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function. Start chaining a wrapped Underscore object.
  _.chain = function(obj) {
    var instance = _(obj);
    instance._chain = true;
    return instance;
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function(instance, obj) {
    return instance._chain ? _(obj).chain() : obj;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    _.each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result(this, func.apply(_, args));
      };
    });
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
      return result(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  _.each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return result(this, method.apply(this._wrapped, arguments));
    };
  });

  // Extracts the result from a wrapped and chained object.
  _.prototype.value = function() {
    return this._wrapped;
  };

  // Provide unwrapping proxy for some methods used in engine operations
  // such as arithmetic and JSON stringification.
  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

  _.prototype.toString = function() {
    return '' + this._wrapped;
  };

  // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, underscore registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.
  if (typeof define === 'function' && define.amd) {
    define('underscore', [], function() {
      return _;
    });
  }
}.call(this));

},{}],115:[function(require,module,exports){
(function (global){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _freeze = require('babel-runtime/core-js/object/freeze');

var _freeze2 = _interopRequireDefault(_freeze);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _jsjavaparser = require('jsjavaparser');

var _jsjavaparser2 = _interopRequireDefault(_jsjavaparser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CLASS_MAGIC_NUMBER = 'cafebabe';
var ZIP_MAGIC_NUMBER = '504b0304';

var CommonUtils = function () {
  function CommonUtils() {
    (0, _classCallCheck3.default)(this, CommonUtils);
  }

  (0, _createClass3.default)(CommonUtils, null, [{
    key: 'xhrRetrieve',
    value: function xhrRetrieve(url, responseType) {
      return new _promise2.default(function (resolve, reject) {
        var xmlr = new XMLHttpRequest();
        xmlr.open('GET', url, true);
        xmlr.responseType = responseType;
        xmlr.onreadystatechange = function () {
          if (xmlr.readyState === 4) {
            if (xmlr.status === 200) {
              resolve(xmlr.response);
            } else {
              reject();
            }
          }
        };
        xmlr.send(null);
      });
    }
  }, {
    key: 'hexFromBuffer',
    value: function hexFromBuffer(buffer, from, count) {
      var str = [];
      var bufferGetter = global.BrowserFS ? function (index) {
        return buffer.get(index);
      } : function (index) {
        return buffer[index];
      };
      for (var i = 0; i < count; i++) {
        var ss = bufferGetter(from + i).toString(16);
        if (ss.length < 2) ss = '0' + ss;
        str.push(ss);
      }
      return str.join('');
    }

    /**
     * Detects if passed 'data' is zip file
     * @param {String|Buffer} data URL string or data buffer
     * @return {Boolean}
     */

  }, {
    key: 'isZipFile',
    value: function isZipFile(data) {
      if (typeof data === 'string') {
        return data.endsWith('.jar') || data.endsWith('.zip');
      } else {
        return ZIP_MAGIC_NUMBER === CommonUtils.hexFromBuffer(data, 0, 4);
      }
    }

    /**
       * Detects if passed 'data' is class file
       * @param {String|Buffer} data URL string or data buffer
       * @return {Boolean}
       */

  }, {
    key: 'isClassFile',
    value: function isClassFile(data) {
      if (typeof data === 'string') {
        return data.endsWith('.class');
      } else {
        return CLASS_MAGIC_NUMBER === CommonUtils.hexFromBuffer(data, 0, 4);
      }
    }

    /**
     * This functions parse Java source file and detects its name and package
     * @param  {String} source Java source
     * @return {Object}        Object with fields: package and class
     */

  }, {
    key: 'detectClassAndPackageNames',
    value: function detectClassAndPackageNames(source) {
      var className = null,
          packageName = null;

      var parsedSource = void 0;
      try {
        parsedSource = _jsjavaparser2.default.parse(source);
      } catch (e) {
        return null;
      }

      if (parsedSource.node === 'CompilationUnit') {
        for (var i = 0; i < parsedSource.types.length; i++) {
          if (CommonUtils.isPublic(parsedSource.types[i])) {
            className = parsedSource.types[i].name.identifier;
            break;
          }
        }
        if (parsedSource.package) {
          packageName = CommonUtils.getPackageName(parsedSource.package.name);
        }
      }

      return {
        package: packageName,
        class: className
      };
    }
  }, {
    key: 'isPublic',
    value: function isPublic(node) {
      if (node.modifiers) {
        for (var i = 0; i < node.modifiers.length; i++) {
          if (node.modifiers[i].keyword === 'public') {
            return true;
          }
        }
      }
      return false;
    }
  }, {
    key: 'getPackageName',
    value: function getPackageName(node) {
      if (node.node === 'QualifiedName') {
        return CommonUtils.getPackageName(node.qualifier) + '.' + node.name.identifier;
      } else {
        return node.identifier;
      }
    }

    // Utility function to create a deferred promise

  }, {
    key: 'deferred',
    value: function deferred() {
      this.promise = new _promise2.default(function (resolve, reject) {
        this.resolve = resolve;
        this.reject = reject;
      }.bind(this));
      (0, _freeze2.default)(this);
      return this;
    }
  }]);
  return CommonUtils;
}();

exports.default = CommonUtils;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"babel-runtime/core-js/object/freeze":6,"babel-runtime/core-js/promise":9,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"jsjavaparser":113}],116:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _toConsumableArray2 = require("babel-runtime/helpers/toConsumableArray");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _Wrapper2 = require("./Wrapper");

var _Wrapper3 = _interopRequireDefault(_Wrapper2);

var _WrapperUtil = require("./WrapperUtil");

var _WrapperUtil2 = _interopRequireDefault(_WrapperUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var JavaClassWrapper = function (_Wrapper) {
  (0, _inherits3.default)(JavaClassWrapper, _Wrapper);
  (0, _createClass3.default)(JavaClassWrapper, null, [{
    key: "runProxyMethod",
    value: function runProxyMethod(javapoly, methodObject, argumentsList) {
      return new _promise2.default(function (resolve, reject) {
        JavaClassWrapper.getClassWrapperByName(javapoly, methodObject._parent._identifier).then(function (classWrapper) {
          classWrapper[methodObject._name].apply(classWrapper, (0, _toConsumableArray3.default)(argumentsList)).then(function (returnValue) {
            return resolve(returnValue);
          });
        });
      });
    }
  }, {
    key: "getClassWrapperByName",
    value: function getClassWrapperByName(javapoly, clsName) {
      return new _promise2.default(function (resolve, reject) {
        if (JavaClassWrapper.cache === undefined) JavaClassWrapper.cache = {};
        if (JavaClassWrapper.cache[javapoly.getId()] === undefined) JavaClassWrapper.cache[javapoly.getId()] = {};
        var cache = JavaClassWrapper.cache[javapoly.getId()];
        if (cache[clsName] !== undefined) {
          resolve(cache[clsName]);
        } else {
          var data = [clsName];
          _WrapperUtil2.default.dispatchOnJVM(javapoly, 'CLASS_LOADING', 0, data, function (result) {
            var javaClassWrapper = new JavaClassWrapper(javapoly, result[0], result[1], result[2], clsName);
            cache[clsName] = javaClassWrapper;
            resolve(javaClassWrapper);
          }, reject);
        }
      });
    }
  }]);

  function JavaClassWrapper(javapoly, methods, nonFinalFields, finalFields, clsName) {
    var _ret;

    (0, _classCallCheck3.default)(this, JavaClassWrapper);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(JavaClassWrapper).call(this, javapoly.dispatcher));

    _this.clsName = clsName;
    _this.javapoly = javapoly;

    var wrapper = _this;
    function objConstructorFunction() {
      return wrapper.runConstructorWithJavaDispatching(Array.prototype.slice.call(arguments));
    }

    // Note: There is some JS magic here. This JS constructor function returns an object which is different than the one
    // being constructed (this). The returned object is a function extended with this. The idea is that `new` operator
    // can be called on the returned object to mimic Java's `new` operator.
    var retFunction = (0, _assign2.default)(objConstructorFunction, _this);

    _this.init(retFunction, methods, nonFinalFields, finalFields);

    return _ret = retFunction, (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(JavaClassWrapper, [{
    key: "runConstructorWithJavaDispatching",
    value: function runConstructorWithJavaDispatching(argumentsList) {
      var _this2 = this;

      return new _promise2.default(function (resolve, reject) {
        var data = [_this2.clsName, argumentsList];
        _WrapperUtil2.default.dispatchOnJVM(_this2.javapoly, 'CLASS_CONSTRUCTOR_INVOCATION', 0, data, resolve, reject);
      });
    }
  }, {
    key: "runMethodWithJavaDispatching",
    value: function runMethodWithJavaDispatching(methodName, argumentsList) {
      var _this3 = this;

      return new _promise2.default(function (resolve, reject) {
        var data = [_this3.clsName, methodName, argumentsList];
        _WrapperUtil2.default.dispatchOnJVM(_this3.javapoly, 'CLASS_METHOD_INVOCATION', 0, data, resolve, reject);
      });
    }

    // This is to prevent recursion, because reflectJSValue itself needs to be dispatched on the JVM.

  }, {
    key: "isReflectMethod",
    value: function isReflectMethod(methodName) {
      return methodName === "reflectJSValue" && this.clsName == "com.javapoly.Main";
    }
  }, {
    key: "getFieldWithJavaDispatching",
    value: function getFieldWithJavaDispatching(name) {
      var _this4 = this;

      return new _promise2.default(function (resolve, reject) {
        var data = [_this4.clsName, name];
        _WrapperUtil2.default.dispatchOnJVM(_this4.javapoly, 'CLASS_FIELD_READ', 0, data, resolve, reject);
      });
    }
  }, {
    key: "setFieldWithJavaDispatching",
    value: function setFieldWithJavaDispatching(name, value) {
      var _this5 = this;

      return new _promise2.default(function (resolve, reject) {
        var data = [_this5.clsName, name, value];
        _WrapperUtil2.default.dispatchOnJVM(_this5.javapoly, 'CLASS_FIELD_WRITE', 0, data, resolve, reject);
      });
    }
  }]);
  return JavaClassWrapper;
}(_Wrapper3.default);

exports.default = JavaClassWrapper;

},{"./Wrapper":121,"./WrapperUtil":122,"babel-runtime/core-js/object/assign":3,"babel-runtime/core-js/object/get-prototype-of":7,"babel-runtime/core-js/promise":9,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/inherits":14,"babel-runtime/helpers/possibleConstructorReturn":15,"babel-runtime/helpers/toConsumableArray":16}],117:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _Wrapper2 = require("./Wrapper");

var _Wrapper3 = _interopRequireDefault(_Wrapper2);

var _WrapperUtil = require("./WrapperUtil");

var _WrapperUtil2 = _interopRequireDefault(_WrapperUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var JavaObjectWrapper = function (_Wrapper) {
  (0, _inherits3.default)(JavaObjectWrapper, _Wrapper);

  function JavaObjectWrapper(javapoly, javaObj, methods, nonFinalFields, finalFields) {
    (0, _classCallCheck3.default)(this, JavaObjectWrapper);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(JavaObjectWrapper).call(this, javapoly.dispatcher));

    _this.javapoly = javapoly;
    _this._javaObj = javaObj;
    _this.init(_this, methods, nonFinalFields, finalFields);
    return _this;
  }

  (0, _createClass3.default)(JavaObjectWrapper, [{
    key: "getFieldWithJavaDispatching",
    value: function getFieldWithJavaDispatching(name) {
      var _this2 = this;

      return new _promise2.default(function (resolve, reject) {
        var data = [_this2._javaObj, name];
        _WrapperUtil2.default.dispatchOnJVM(_this2.javapoly, 'OBJ_FIELD_READ', 0, data, resolve, reject);
      });
    }
  }, {
    key: "setFieldWithJavaDispatching",
    value: function setFieldWithJavaDispatching(name, value) {
      var _this3 = this;

      return new _promise2.default(function (resolve, reject) {
        var data = [_this3._javaObj, name, value];
        _WrapperUtil2.default.dispatchOnJVM(_this3.javapoly, 'OBJ_FIELD_WRITE', 0, data, resolve, reject);
      });
    }
  }, {
    key: "isReflectMethod",
    value: function isReflectMethod(methodName) {
      return false;
    }
  }, {
    key: "runMethodWithJavaDispatching",
    value: function runMethodWithJavaDispatching(methodName, argumentsList) {
      var _this4 = this;

      return new _promise2.default(function (resolve, reject) {
        var data = [_this4._javaObj, methodName, argumentsList];
        _WrapperUtil2.default.dispatchOnJVM(_this4.javapoly, 'OBJ_METHOD_INVOCATION', 0, data, resolve, reject);
      });
    }
  }]);
  return JavaObjectWrapper;
}(_Wrapper3.default);

exports.default = JavaObjectWrapper;

},{"./Wrapper":121,"./WrapperUtil":122,"babel-runtime/core-js/object/get-prototype-of":7,"babel-runtime/core-js/promise":9,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/inherits":14,"babel-runtime/helpers/possibleConstructorReturn":15}],118:[function(require,module,exports){
(function (global){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _underscore = require('underscore');

var _ = _interopRequireWildcard(_underscore);

var _JavaPolyBase2 = require('./JavaPolyBase');

var _JavaPolyBase3 = _interopRequireDefault(_JavaPolyBase2);

var _BrowserDispatcher = require('../dispatcher/BrowserDispatcher.js');

var _BrowserDispatcher2 = _interopRequireDefault(_BrowserDispatcher);

var _WorkerCallBackDispatcher = require('../dispatcher/WorkerCallBackDispatcher.js');

var _WorkerCallBackDispatcher2 = _interopRequireDefault(_WorkerCallBackDispatcher);

var _WrapperUtil = require('./WrapperUtil.js');

var _WrapperUtil2 = _interopRequireDefault(_WrapperUtil);

var _CommonUtils = require('./CommonUtils.js');

var _CommonUtils2 = _interopRequireDefault(_CommonUtils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_JAVAPOLY_OPTIONS = {
  /**
   * When page is loading look for all corresponding MIME-types and create objects for Java automatically
   * @type {Boolean}
   */
  initOnStart: true,
  /**
   * Directory name that stores all class-files, jars and/or java-files
   * @type {String}
   */
  storageDir: '/tmp/data',
  /**
   * URL where we download the doppio library.
   * @type {String}
   * 1.'doppio/', download from user owner domain(${your.domain}/doppio), eg. localhost for locally test
   * 2. or a public url, eg. https://www.javapoly.com/doppio/
   */
  doppioLibUrl: '/doppio/',

  /**
   * URL where we download the BrowserFS library
   * @type {String}
   */
  browserfsLibUrl: '/browserfs/',

  /**
   * Optional: javaPolyBaseUrl
   * When defined, this is used as the base URL for loading JavaPoly data such as system classes and native functions.
   * If empty, JavaPoly will try to automatically figure it out during initialization.
   */
  javaPolyBaseUrl: null,

  /**
   * Javapoly worker path. null or a path, eg. build/javapoly_worker.js
   *
   * @type {String}
   * when defined not null, we will try to use the webworkers path to run the core javapoly and jvm.
   * if web worker is not supported by browser, we will just load javapoly and jvm in browser main Thread.
   */
  worker: null, // 'build/javapoly_worker.js'

  /**
   * Enable Java Assertions
   *
   * @type {boolean}
   */
  assertionsEnabled: false
};

/**
 * Main JavaPoly class that do all underliying job for initialization
 * Simple usage:
 * 1. Create object: (new JavaPoly());
 * 2. Use JavaPoly API classes such as `J` and `Java`.
 *
 * (new JavaPoly());
 * JavaPoly.type(....).then(() => {  } );
 */

var JavaPoly = function (_JavaPolyBase) {
  (0, _inherits3.default)(JavaPoly, _JavaPolyBase);

  function JavaPoly(_options) {
    var _ret;

    (0, _classCallCheck3.default)(this, JavaPoly);

    var options = _.extend(DEFAULT_JAVAPOLY_OPTIONS, _options);
    if (!options.javaPolyBaseUrl) {
      options.javaPolyBaseUrl = JavaPoly.getScriptBase();
    }

    // Init objects for user to make possible start to work with JavaPoly instantly
    // only bind this api to global.window for the default javapoly instance (the 1th instance, created in main.js).

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(JavaPoly).call(this, options));

    return _ret = _this.initApiObjects(_JavaPolyBase3.default.idCount === 1 ? global.window : undefined), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(JavaPoly, [{
    key: 'beginLoading',
    value: function beginLoading(resolveDispatcherReady) {
      var _this2 = this;

      // User worker only if worker option is enabled and browser supports WebWorkers
      if (this.options.worker && global.Worker) {
        this.loadJavaPolyCoreInWebWorker(resolveDispatcherReady);
      } else {
        this.loadJavaPolyCoreInBrowser(resolveDispatcherReady);
      }

      // case when async loading javapoly lib and the DOM contented already loaded
      if (global.document.readyState !== 'loading') {
        this.processScripts();
        _WrapperUtil2.default.dispatchOnJVM(this, 'META_START_JVM', 0, null);
      } else {
        global.document.addEventListener('DOMContentLoaded', function (e) {
          _this2.processScripts();
          _WrapperUtil2.default.dispatchOnJVM(_this2, 'META_START_JVM', 0, null);
        }, false);
      }
    }
  }, {
    key: 'processScripts',
    value: function processScripts() {
      var _this3 = this;

      _.each(global.document.scripts, function (script) {
        _this3.processScript(script);
      });
    }
  }, {
    key: 'processScript',
    value: function processScript(script) {
      if (script.type.toLowerCase() !== 'text/java' && script.type.toLowerCase() !== 'application/java') return;

      if (script.analyzed) return;

      script.analyzed = true;

      //embedded source code
      if (script.text) {
        var classInfo = _CommonUtils2.default.detectClassAndPackageNames(script.text);
        this.createProxyForClass(global.window, classInfo.class, classInfo.package);
        return this.compileJavaSource(script.text);
      }

      if (!script.src) {
        console.warning('please specify the text or src of text/java');
        return;
      }

      return _WrapperUtil2.default.dispatchOnJVM(this, 'FS_MOUNT_JAVA', 10, { src: script.src });
    }
  }, {
    key: 'loadJavaPolyCoreInBrowser',
    value: function loadJavaPolyCoreInBrowser(resolveDispatcherReady) {
      this.dispatcher = new _BrowserDispatcher2.default(this);
      resolveDispatcherReady(this.dispatcher);
    }
  }, {
    key: 'loadJavaPolyCoreInWebWorker',
    value: function loadJavaPolyCoreInWebWorker(resolveDispatcherReady) {
      this.dispatcher = new _WorkerCallBackDispatcher2.default(this.options, new global.Worker(this.options.worker));

      resolveDispatcherReady(this.dispatcher);
    }

    /* This should be called outside of Promise, or any such async call */

  }], [{
    key: 'getScriptBase',
    value: function getScriptBase() {
      var scriptSrc = JavaPoly.getScriptSrc();
      return scriptSrc.slice(0, scriptSrc.lastIndexOf("/") + 1);
    }
  }, {
    key: 'getScriptSrc',
    value: function getScriptSrc() {
      if (document.currentScript) {
        return document.currentScript.src;
      } else {
        var scripts = document.getElementsByTagName('script'),
            script = scripts[scripts.length - 1];

        if (script.getAttribute.length !== undefined) {
          return script.src;
        }

        return script.getAttribute('src', -1);
      }
    }
  }]);
  return JavaPoly;
}(_JavaPolyBase3.default);

global.window.JavaPoly = JavaPoly;

exports.default = JavaPoly;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../dispatcher/BrowserDispatcher.js":123,"../dispatcher/WorkerCallBackDispatcher.js":125,"./CommonUtils.js":115,"./JavaPolyBase":119,"./WrapperUtil.js":122,"babel-runtime/core-js/object/get-prototype-of":7,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/inherits":14,"babel-runtime/helpers/possibleConstructorReturn":15,"underscore":114}],119:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty = require('babel-runtime/core-js/object/define-property');

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _underscore = require('underscore');

var _ = _interopRequireWildcard(_underscore);

var _JavaClassWrapper = require('./JavaClassWrapper');

var _JavaClassWrapper2 = _interopRequireDefault(_JavaClassWrapper);

var _JavaObjectWrapper = require('./JavaObjectWrapper');

var _JavaObjectWrapper2 = _interopRequireDefault(_JavaObjectWrapper);

var _ProxyWrapper = require('./ProxyWrapper');

var _ProxyWrapper2 = _interopRequireDefault(_ProxyWrapper);

var _WrapperUtil = require('./WrapperUtil.js');

var _WrapperUtil2 = _interopRequireDefault(_WrapperUtil);

var _CommonUtils = require('./CommonUtils.js');

var _CommonUtils2 = _interopRequireDefault(_CommonUtils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Base JavaPoly class that contains common functionality.
 */

var JavaPolyBase = function () {
  function JavaPolyBase(_options) {
    (0, _classCallCheck3.default)(this, JavaPolyBase);

    /**
     * Object with options of JavaPoly
     * @type {Object}
     */
    this.options = _options;

    /**
     * The dispatcher for handle jvm command message
     * @Type {Object}
     */
    this.dispatcher = null;

    var dispatcherDeferred = new _CommonUtils2.default.deferred();
    this.dispatcherReady = dispatcherDeferred.promise;
    this.initJavaPoly(dispatcherDeferred.resolve, dispatcherDeferred.reject);

    var id = ++JavaPolyBase.idCount + '';
    JavaPolyBase.instances[id] = this;
    this.getId = function () {
      return id;
    };
  }

  (0, _createClass3.default)(JavaPolyBase, [{
    key: 'initJavaPoly',
    value: function initJavaPoly(resolve, reject) {
      if (this.options.initOnStart === true) {
        return this.beginLoading(resolve);
      } else {
        return reject('not initialised');
      }
    }
  }, {
    key: 'compileJavaSource',
    value: function compileJavaSource(scriptText, resolve, reject) {
      var classInfo = _CommonUtils2.default.detectClassAndPackageNames(scriptText);

      var className = classInfo.class;
      var packageName = classInfo.package;

      _WrapperUtil2.default.dispatchOnJVM(this, "FILE_COMPILE", 10, [className, packageName ? packageName : "", this.options.storageDir, scriptText], resolve, reject);
    }

    /**
     * init the api objects of JavaPoly.
     * @param globalObject
     *   if specified, we want access this java poly instance by a global object, such as global.window.
     */

  }, {
    key: 'initApiObjects',
    value: function initApiObjects(globalObject) {
      var _this = this;

      var api = {};
      api.id = this.getId();
      api.options = this.options;

      // Initialize proxies for the most common/built-in packages.
      // This will make built-in jvm packages available, since the built-ins won't have their source code in the script tags (and thus wouldn't be analyzed at parse time).
      // Most importantly, it will setup warnings when Proxy is not defined in legacy browsers (warn upon access of one of these super common packages)
      if (globalObject) {
        this.createProxyForClass(globalObject, null, 'com');
        this.createProxyForClass(globalObject, null, 'org');
        this.createProxyForClass(globalObject, null, 'net');
        this.createProxyForClass(globalObject, null, 'sun');
        this.createProxyForClass(globalObject, null, 'java');
        this.createProxyForClass(globalObject, null, 'javax');
      }

      if (typeof Proxy !== 'undefined') {
        api.J = _ProxyWrapper2.default.createRootEntity(this, null);
        if (globalObject) globalObject.J = api.J;
      } else {
        this.defineProxyWarning(api, 'J', 'accessor');
        if (globalObject) this.defineProxyWarning(globalObject, 'J', 'accessor');
      }

      this.processScripts();
      /*
        TODO: use the reflect command
        reflect: (jsObj) => {
          return javaType("com.javapoly.Main").then((Main) => {
            return Main.reflectJSValue(jsObj);
          });
        }
      };*/

      api.addClass = function (data) {
        return _this.addClass(data);
      };

      if (globalObject) {
        globalObject.addClass = api.addClass;
      }

      return api;
    }
  }, {
    key: 'type',
    value: function type(clsName) {
      return _JavaClassWrapper2.default.getClassWrapperByName(this, clsName);
    }

    // data could be text string of java source or the url of remote java class/jar/source

  }, {
    key: 'addClass',
    value: function addClass(data) {
      var _this2 = this;

      return new _promise2.default(function (resolve, reject) {
        // try to parse it as java souce string
        var classInfo = _CommonUtils2.default.detectClassAndPackageNames(data);
        // parse success, embedded java source code
        if (classInfo && classInfo.class) {
          return _this2.compileJavaSource(data, resolve, reject);
        }

        // try add remote java/class/jar file
        return _WrapperUtil2.default.dispatchOnJVM(_this2, 'FS_DYNAMIC_MOUNT_JAVA', 10, { src: data }, resolve, reject);
      });
    }
  }, {
    key: 'createProxyForClass',
    value: function createProxyForClass(obj, classname, packagename) {
      var name = null;
      var type = null;
      if (packagename != null) {
        name = packagename.split('.')[0];
        type = 'package';
      } else {
        name = classname;
        type = 'class';
      }

      if (typeof Proxy !== 'undefined') {
        obj[name] = _ProxyWrapper2.default.createRootEntity(this, name);
      } else {
        this.defineProxyWarning(obj, name, type);
      }
    }
  }, {
    key: 'defineProxyWarning',
    value: function defineProxyWarning(obj, name, type) {
      var self = this;
      (0, _defineProperty2.default)(obj, name, { configurable: true, get: function get() {
          if (!self.proxyWarnings) self.proxyWarnings = {};if (!self.proxyWarnings[name]) console.error('Your browser does not support Proxy objects, so the `' + name + '` ' + type + ' must be accessed using JavaPoly.type(\'' + (type === 'class' ? 'YourClass' : 'com.yourpackage.YourClass') + '\') instead of using the class\' fully qualified name directly from javascript.  Note that `JavaPoly.type` will return a promise for a class instead of a direct class reference.  For more info: https://javapoly.com/details.html#Java_Classes_using_JavaPoly.type()');self.proxyWarnings[name] = true;
        } });
    }
  }, {
    key: 'wrapJavaObject',
    value: function wrapJavaObject(obj, methods, nonFinalFields, finalFields) {
      return new _JavaObjectWrapper2.default(this, obj, methods, nonFinalFields, finalFields);
    }
  }, {
    key: 'unwrapJavaObject',
    value: function unwrapJavaObject(obj) {
      // TODO: is a better check possible using prototypes
      if (obj && obj._javaObj) {
        return obj._javaObj;
      } else {
        return null;
      }
    }
  }], [{
    key: 'getInstance',
    value: function getInstance(javapolyId) {
      return JavaPolyBase.instances[javapolyId];
    }
  }, {
    key: 'initialJavaPoly',
    value: function initialJavaPoly(JavaPolyProto) {
      return JavaPolyBase.idCount === 0 ? new JavaPolyProto() : JavaPolyBase.instances['1'];
    }
  }, {
    key: 'new',
    value: function _new(name) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return JavaPolyBase.initialJavaPoly(this).type(name).then(function (classWrapper) {
        return new (Function.prototype.bind.apply(classWrapper, [null].concat(args)))();
      });
    }
  }, {
    key: 'addClass',
    value: function addClass(data) {
      return JavaPolyBase.initialJavaPoly(this).addClass(data);
    }
  }, {
    key: 'type',
    value: function type(clsName) {
      return JavaPolyBase.initialJavaPoly(this).type(clsName);
    }
  }]);
  return JavaPolyBase;
}();

exports.default = JavaPolyBase;


JavaPolyBase.idCount = 0;
JavaPolyBase.instances = {};

},{"./CommonUtils.js":115,"./JavaClassWrapper":116,"./JavaObjectWrapper":117,"./ProxyWrapper":120,"./WrapperUtil.js":122,"babel-runtime/core-js/object/define-property":5,"babel-runtime/core-js/promise":9,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"underscore":114}],120:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _JavaClassWrapper = require('./JavaClassWrapper');

var _JavaClassWrapper2 = _interopRequireDefault(_JavaClassWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProxyWrapper = function () {
  function ProxyWrapper() {
    (0, _classCallCheck3.default)(this, ProxyWrapper);
  }

  (0, _createClass3.default)(ProxyWrapper, null, [{
    key: 'createEntity',
    value: function createEntity(javapoly, name, parent) {
      var _this = this;

      // We don't now in advance is it a function or just an Object
      // But objects cannot be called, so it is a function
      var object = function object() {};
      object._parent = parent;
      object._name = name;
      if (parent !== null) {
        object._identifier = (parent._identifier === null ? '' : parent._identifier + '.') + name;
      } else {
        object._identifier = name;
      }
      object._call = function (thisArg, argumentsList) {
        return new _promise2.default(function (resolve, reject) {
          _JavaClassWrapper2.default.runProxyMethod(javapoly, object, argumentsList).then(function (rv) {
            return resolve(rv);
          });
        });
      };

      var proxy = new Proxy(object, {
        get: function get(target, property) {
          if (!target.hasOwnProperty(property)) {
            target[property] = _this.createEntity(javapoly, property, target);
          }
          return target[property];
        },
        apply: function apply(target, thisArg, argumentsList) {
          return target._call(thisArg, argumentsList);
        }
      });

      return proxy;
    }
  }, {
    key: 'createRootEntity',
    value: function createRootEntity(javapoly, name) {
      return this.createEntity(javapoly, name, null);
    }
  }]);
  return ProxyWrapper;
}();

exports.default = ProxyWrapper;

},{"./JavaClassWrapper":116,"babel-runtime/core-js/promise":9,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13}],121:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _JavaClassWrapper = require("./JavaClassWrapper");

var _JavaClassWrapper2 = _interopRequireDefault(_JavaClassWrapper);

var _WrapperUtil = require("./WrapperUtil");

var _WrapperUtil2 = _interopRequireDefault(_WrapperUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wrapper = function () {
  function Wrapper(dispatcher) {
    (0, _classCallCheck3.default)(this, Wrapper);

    this.dispatcher = dispatcher;
  }

  (0, _createClass3.default)(Wrapper, [{
    key: "init",
    value: function init(obj, methods, nonFinalFields, finalFields) {
      var wrapper = this;

      // Add method handlers
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        var _loop = function _loop() {
          var name = _step.value;

          obj[name] = function () {
            return wrapper.runMethodWithJSReflection(name, Array.prototype.slice.call(arguments));
          };
        };

        for (var _iterator = (0, _getIterator3.default)(methods), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          _loop();
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      function methodExists(name) {
        return methods.findIndex(function (n) {
          return n == name;
        }) >= 0;
      }

      // Add getters and setters for non-final fields
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        var _loop2 = function _loop2() {
          var name = _step2.value;

          if (!methodExists(name)) {
            (0, _defineProperty2.default)(obj, name, {
              get: function get() {
                return wrapper.getFieldWithJavaDispatching(name);
              },
              set: function set(newValue) {
                wrapper.setFieldWithJavaDispatching(name, newValue);
              }
            });
          }
        };

        for (var _iterator2 = (0, _getIterator3.default)(nonFinalFields), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          _loop2();
        }

        // Add getters for final fields
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        var _loop3 = function _loop3() {
          var name = _step3.value;

          if (!methodExists(name)) {
            (0, _defineProperty2.default)(obj, name, {
              get: function get() {
                return wrapper.getFieldWithJavaDispatching(name);
              }
            });
          }
        };

        for (var _iterator3 = (0, _getIterator3.default)(finalFields), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          _loop3();
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }
  }, {
    key: "runMethodWithJSReflection",
    value: function runMethodWithJSReflection(methodName, args) {
      var wrapper = this;
      var okToReflect = !wrapper.isReflectMethod(methodName);

      var reflectedArgs = args.map(function (e) {
        return wrapper.dispatcher.reflect(e);
      });

      var resultPromise = wrapper.runMethodWithJavaDispatching(methodName, reflectedArgs);

      if (okToReflect) {
        return resultPromise.then(function (result) {
          return wrapper.dispatcher.unreflect(result);
        });
      } else {
        return resultPromise;
      }
    }
  }]);
  return Wrapper;
}();

exports.default = Wrapper;

},{"./JavaClassWrapper":116,"./WrapperUtil":122,"babel-runtime/core-js/get-iterator":2,"babel-runtime/core-js/object/define-property":5,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13}],122:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WrapperUtil = function () {
  function WrapperUtil() {
    (0, _classCallCheck3.default)(this, WrapperUtil);
  }

  (0, _createClass3.default)(WrapperUtil, null, [{
    key: "dispatchOnJVM",
    value: function dispatchOnJVM(javapoly, messageType, priority, data, resolve, reject) {
      javapoly.dispatcherReady.then(function (dispatcher) {
        return dispatcher.postMessage(messageType, priority, data, function (response) {
          if (response.success) {
            if (resolve) resolve(response.returnValue);
          } else {

            /* This function is added here, because it is not possible to serialise functions across web-worker sandbox */
            response.cause.printStackTrace = function () {
              for (var se in response.cause.stack) {
                console.warn(response.cause.stack[se]);
              }
            };
            if (reject) reject(response.cause);
          }
        });
      });
    }
  }]);
  return WrapperUtil;
}();

exports.default = WrapperUtil;

},{"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13}],123:[function(require,module,exports){
(function (global){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _CommonDispatcher2 = require('./CommonDispatcher.js');

var _CommonDispatcher3 = _interopRequireDefault(_CommonDispatcher2);

var _DoppioManager = require('../jvmManager/DoppioManager.js');

var _DoppioManager2 = _interopRequireDefault(_DoppioManager);

var _WrapperUtil = require('../core/WrapperUtil');

var _WrapperUtil2 = _interopRequireDefault(_WrapperUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Used for the case when javaploy is running in Browser */

var BrowserDispatcher = function (_CommonDispatcher) {
  (0, _inherits3.default)(BrowserDispatcher, _CommonDispatcher);

  function BrowserDispatcher(javapoly) {
    (0, _classCallCheck3.default)(this, BrowserDispatcher);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(BrowserDispatcher).call(this, javapoly));

    _this.javapoly = javapoly;
    return _this;
  }

  (0, _createClass3.default)(BrowserDispatcher, [{
    key: 'initDoppioManager',
    value: function initDoppioManager(javapoly) {
      var _this2 = this;

      return this.loadExternalJs(javapoly.options.browserfsLibUrl + 'browserfs.min.js').then(function () {
        return _this2.loadExternalJs(javapoly.options.doppioLibUrl + 'doppio.js').then(function () {
          return new _DoppioManager2.default(javapoly);
        });
      });
    }
  }, {
    key: 'postMessage',
    value: function postMessage(messageType, priority, data, callback) {
      var id = this.javaPolyIdCount++;

      this.handleIncomingMessage(id, priority, messageType, data, callback);
    }

    /**
     * load js library file.
     * @param fileSrc
     * 		the uri src of the file
     * @return Promise
     * 		we could use Promise to wait for js loaded finished.
     */

  }, {
    key: 'loadExternalJs',
    value: function loadExternalJs(fileSrc) {
      return new _promise2.default(function (resolve, reject) {
        var jsElm = global.document.createElement("script");
        jsElm.type = "text/javascript";

        if (jsElm.readyState) {
          jsElm.onreadystatechange = function () {
            if (jsElm.readyState == "loaded" || jsElm.readyState == "complete") {
              jsElm.onreadysteatechange = null;
              resolve();
            }
          };
        } else {
          jsElm.onload = function () {
            resolve();
            // FIXME reject when timeout
          };
        }

        jsElm.src = fileSrc;
        global.document.getElementsByTagName("head")[0].appendChild(jsElm);
      });
    }
  }, {
    key: 'reflect',
    value: function reflect(jsObj) {
      return jsObj;
    }
  }, {
    key: 'unreflect',
    value: function unreflect(result) {
      if (!!result && (typeof result === 'undefined' ? 'undefined' : (0, _typeof3.default)(result)) === "object" && !!result._javaObj) {
        var className = result._javaObj.getClass().className;
        if (className === "Lcom/javapoly/DoppioJSObject;" || className === "Lcom/javapoly/DoppioJSPrimitive;") {
          return result._javaObj["com/javapoly/DoppioJSValue/rawValue"];
        }
      }
      return result;
    }
  }]);
  return BrowserDispatcher;
}(_CommonDispatcher3.default);

exports.default = BrowserDispatcher;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../core/WrapperUtil":122,"../jvmManager/DoppioManager.js":126,"./CommonDispatcher.js":124,"babel-runtime/core-js/object/get-prototype-of":7,"babel-runtime/core-js/promise":9,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/inherits":14,"babel-runtime/helpers/possibleConstructorReturn":15,"babel-runtime/helpers/typeof":17}],124:[function(require,module,exports){
"use strict";
/**
 * The CommonDispatcher is an abstract base class for other dispatchers.
 *
 * we define the some global Object{javaPolyMessageTypes,javaPolyCallbacks,javaPolyData}
 * for sharing args, callback function.
 *
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CommonDispatcher = function () {
  function CommonDispatcher(javapoly) {
    (0, _classCallCheck3.default)(this, CommonDispatcher);

    // This class is abstract (can't be instantiated directly)
    if (this.constructor === CommonDispatcher) {
      throw TypeError("new of abstract class CommonDispatcher");
    }

    this.options = javapoly.options;

    this.initDispatcher(javapoly);
  }

  (0, _createClass3.default)(CommonDispatcher, [{
    key: "initDispatcher",
    value: function initDispatcher(javapoly) {
      this.javaPolyEvents = [];
      this.javaPolyMessageTypes = {};
      this.javaPolyCallbacks = {};
      this.javaPolyData = {};
      this.javaPolyIdCount = 0;

      this.javaPolyCallback = null;

      this.doppioManager = this.initDoppioManager(javapoly);
    }
  }, {
    key: "handleIncomingMessage",
    value: function handleIncomingMessage(id, priority, messageType, data, callback) {
      if (messageType.startsWith("META_")) {
        this.handleMetaMessage(id, priority, messageType, data, callback);
      } else if (messageType.startsWith("FS_")) {
        this.handleFSMessage(id, priority, messageType, data, callback);
      } else {
        this.handleJVMMessage(id, priority, messageType, data, callback);
      }
    }

    // JVM messages are added to a queue and dequed from the JVM main thread.

  }, {
    key: "handleJVMMessage",
    value: function handleJVMMessage(id, priority, messageType, data, callback) {

      this.addMessage(id, priority, messageType, data, callback);

      if (this.javaPolyCallback) {
        this.javaPolyCallback();
      }
    }

    // FS messages are processed immediately

  }, {
    key: "handleFSMessage",
    value: function handleFSMessage(id, priority, messageType, data, callback) {
      switch (messageType) {
        case "FS_MOUNT_JAVA":
          this.doppioManager.then(function (dm) {
            return dm.mountJava(data.src);
          });
          break;
        case "FS_DYNAMIC_MOUNT_JAVA":
          this.doppioManager.then(function (dm) {
            return dm.dynamicMountJava(data.src).then(function (msg) {
              if (msg === "OK") {
                callback({ success: true, returnValue: 'Add Class success' });
              } else {
                console.log("Failed to mount java file:", msg, data);
                callback({ success: false, returnValue: 'Add Class fail' });
              }
            }, function (msg) {
              return callback({ success: false, cause: { stack: [msg] } });
            });
          });
          break;
        default:
          console.log("FS TODO", messageType);
          break;
      }
    }

    // Meta messages are processed immediately

  }, {
    key: "handleMetaMessage",
    value: function handleMetaMessage(id, priority, messageType, data, callback) {
      switch (messageType) {
        case "META_START_JVM":
          this.doppioManager.then(function (dm) {
            return dm.initJVM();
          });
          break;
        default:
          console.log("META TODO", messageType);
          break;
      }
    }

    /* Add message with higher priority messages ahead of the lower priority ones */

  }, {
    key: "addMessage",
    value: function addMessage(id, priority, messageType, data, callback) {
      this.javaPolyMessageTypes[id] = messageType;
      this.javaPolyData[id] = data;
      this.javaPolyCallbacks[id] = callback;

      var queue = this.javaPolyEvents;
      var pos = queue.findIndex(function (e) {
        return e[1] < priority;
      });
      var value = ["" + id, priority];
      if (pos < 0) {
        // insert at end
        queue.push(value);
      } else {
        // insert at position
        queue.splice(pos, 0, value);
      }
    }

    /**
     * dequeue a message and get the messageID. Returns undefined when there is no message in the queue.
     */

  }, {
    key: "getMessageId",
    value: function getMessageId() {
      var msg = this.javaPolyEvents.shift();
      if (msg) {
        var id = msg[0];
        return id;
      } else {
        return undefined;
      }
    }
  }, {
    key: "getMessageType",
    value: function getMessageType(msgId) {
      // may want to delete the data after fetch
      var messageType = this.javaPolyMessageTypes[msgId];
      delete this.javaPolyMessageTypes[msgId];
      return messageType;
    }
  }, {
    key: "getMessageData",
    value: function getMessageData(msgId) {
      // may want to delete the data after fetch
      var messageData = this.javaPolyData[msgId];
      delete this.javaPolyData[msgId];
      return messageData;
    }
  }, {
    key: "getMessageCallback",
    value: function getMessageCallback(msgId) {
      var callback = this.javaPolyCallbacks[msgId];
      delete this.javaPolyCallbacks[msgId];
      return callback;
    }
  }, {
    key: "setJavaPolyCallback",
    value: function setJavaPolyCallback(callback) {
      this.javaPolyCallback = callback;
    }
  }, {
    key: "callbackMessage",
    value: function callbackMessage(msgId, returnValue) {
      var callback = this.javaPolyCallbacks[msgId];
      delete this.javaPolyCallbacks[msgId];
      if (callback) {
        callback(returnValue);
      }
    }
  }]);
  return CommonDispatcher;
}();

exports.default = CommonDispatcher;

},{"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13}],125:[function(require,module,exports){
"use strict";
/**
 * The WorkerCallBackDispatcher is executed in Browser side.
 * This should be init in Browser main Thread.
 *
 * it's used to send message/java-command(METHOD_INVOKATION,CLASS_LOADING...)
 * to Javapoly workers(JVM  also included in the web workers), will also listen the return message (include the return value) from javapoly
 * workers.
 *
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WorkerCallBackDispatcher = function () {
  function WorkerCallBackDispatcher(options, worker) {
    (0, _classCallCheck3.default)(this, WorkerCallBackDispatcher);

    this.options = options;
    this.worker = worker;

    this.javaPolyIdCount = 0;
    //used to record callback for every message.
    this.javaPolyCallbacks = {};

    this.installListener();
  }

  //listen at browser side, to recv return value and callback


  (0, _createClass3.default)(WorkerCallBackDispatcher, [{
    key: 'installListener',
    value: function installListener() {
      var _this = this;

      this.worker.addEventListener('message', function (e) {
        var data = e.data.javapoly;

        var cb = _this.javaPolyCallbacks[data.messageId];
        delete _this.javaPolyCallbacks[data.messageId];

        // 1. JVM Init response
        // 2. JVM command(METHOD_INVOKATION/CLASS_LOADING/...) response
        if (cb) {
          cb(data.returnValue);
        }
      }, false);

      // send init request to webworker
      // we need to send options also.
      this.postMessage('WORKER_INIT', 0, { options: this.options }, function (success) {
        if (success == true) {
          console.log('Worker init success');
        } else {
          console.log('Worker init failed in webWorkers');
          // try to load in main thread directly when JVM init failed in WebWorkers ?

          // TODO: This won't be as simple as calling this function as messages would have been already entered into
          // dispatcher. We need to delay calling resovleDispatcherReady until the JVM success result comes back.
          // this.loadJavaPolyCoreInBrowser(javaMimeScripts, resolveDispatcherReady);
        }
      });
    }

    /**
     * For Web Worker, we also need to pass command args to other side.
     * because Browser main thread and Web worker are in different Context.
     * (for non-workers mode, we can easily share args, callback function in Global object).
     *
     * We also need to record callback function for every message.
     */

  }, {
    key: 'postMessage',
    value: function postMessage(messageType, priority, data, callback) {

      var id = this.javaPolyIdCount++;
      this.javaPolyCallbacks[id] = callback;

      this.worker.postMessage({ javapoly: { messageId: "" + id, messageType: messageType, priority: priority, data: data } });
    }
  }, {
    key: 'reflect',
    value: function reflect(jsObj) {
      return jsObj;
    }
  }, {
    key: 'unreflect',
    value: function unreflect(result) {
      return result;
    }
  }]);
  return WorkerCallBackDispatcher;
}();

exports.default = WorkerCallBackDispatcher;

},{"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13}],126:[function(require,module,exports){
(function (global){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _CommonUtils = require('../core/CommonUtils.js');

var _CommonUtils2 = _interopRequireDefault(_CommonUtils);

var _WrapperUtil = require('../core/WrapperUtil.js');

var _WrapperUtil2 = _interopRequireDefault(_WrapperUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var classfile = require('./../tools/classfile.js');

/**
 * The DoppioManager manages the JVM and filesystem.
 * It can be run in Browser or WebWorker.
 * It assumes that the .js for BrowserFS and Doppio is already loaded.
 */

var DoppioManager = function () {
  function DoppioManager(javapoly) {
    (0, _classCallCheck3.default)(this, DoppioManager);

    this.javapoly = javapoly;

    this.fs = null;

    /**
     * It's a MountableFileSystem that contains XHR mounted file systems.
     * It's needed for loading JAR-files without loading and resaving it.
     */
    this.xhrdirs = new BrowserFS.FileSystem.MountableFileSystem();

    /**
     * Stores referense to the special extension for fs (for example it contains recursive mkdir)
     * @type {[type]}
     */
    this.fsext = null;

    /**
     * Array that contains classpath, include the root path of class files , jar file path.
     * @type {Array}
     */
    this.classpath = [this.getOptions().storageDir];

    this.mountHub = [];

    this.initBrowserFS();
  }

  (0, _createClass3.default)(DoppioManager, [{
    key: 'getOptions',
    value: function getOptions() {
      return this.javapoly.options;
    }

    /**
     * Initialization of BrowserFS
     */

  }, {
    key: 'initBrowserFS',
    value: function initBrowserFS() {
      var _this = this;

      var mfs = new BrowserFS.FileSystem.MountableFileSystem();
      BrowserFS.initialize(mfs);
      mfs.mount('/tmp', new BrowserFS.FileSystem.InMemory());

      // FIXME local storage can't be used in WebWorker, check if it affect anything.
      if (!this.javapoly.isJavaPolyWorker) {
        mfs.mount('/home', new BrowserFS.FileSystem.LocalStorage());
      }

      var options = this.getOptions();

      this.bfsReady = new _promise2.default(function (resolve) {
        _CommonUtils2.default.xhrRetrieve(options.doppioLibUrl + "/listings.json", "json").then(function (doppioListings) {
          _CommonUtils2.default.xhrRetrieve(options.javaPolyBaseUrl + "/listings.json", "json").then(function (javapolyListings) {
            mfs.mount('/sys', new BrowserFS.FileSystem.XmlHttpRequest(doppioListings, options.doppioLibUrl));
            mfs.mount('/javapoly', new BrowserFS.FileSystem.XmlHttpRequest(javapolyListings, options.javaPolyBaseUrl));
            mfs.mount('/xhrdirs', _this.xhrdirs);

            _this.fs = BrowserFS.BFSRequire('fs');
            _this.path = BrowserFS.BFSRequire('path');
            _this.fsext = require('./../tools/fsext')(_this.fs, _this.path);
            _this.fsext.rmkdirSync(options.storageDir);
            BrowserFS.install(_this);
            _this.installStreamHandlers();
            resolve();
          });
        });
      });
    }
  }, {
    key: '_mountJava',
    value: function _mountJava(src, fRegJarPath) {
      var _this2 = this;

      var Buffer = global.BrowserFS.BFSRequire('buffer').Buffer;
      var options = this.getOptions();

      return new _promise2.default(function (resolve, reject) {
        if (_CommonUtils2.default.isZipFile(src)) {
          return _this2.mountFileViaXHR(src).then(fRegJarPath.bind(_this2, resolve, reject), reject);
        } else {
          // remote file, we need to download the file data of that url and parse the type.
          _CommonUtils2.default.xhrRetrieve(src, 'arraybuffer').then(function (fileData) {
            var fileDataBuf = new Buffer(fileData);

            // remote java class/jar file
            if (_CommonUtils2.default.isClassFile(fileDataBuf)) {
              //return WrapperUtil.dispatchOnJVM(this, 'FS_MOUNT_CLASS', 10, {src:script.src});
              return _this2.writeRemoteClassFileIntoFS(src, fileDataBuf).then(resolve, reject);
            } else if (_CommonUtils2.default.isZipFile(fileDataBuf)) {
              //return WrapperUtil.dispatchOnJVM(this, 'FS_MOUNT_JAR', 10, {src:script.src});
              return _this2.writeRemoteJarFileIntoFS(src, fileDataBuf).then(fRegJarPath.bind(_this2, resolve, reject), reject);
            }

            // remote java source code file
            var classInfo = _CommonUtils2.default.detectClassAndPackageNames(fileDataBuf.toString());
            if (classInfo && classInfo.class) {
              var className = classInfo.class;
              var packageName = classInfo.package;
              return _WrapperUtil2.default.dispatchOnJVM(_this2.javapoly, 'FILE_COMPILE', 10, [className, packageName ? packageName : '', options.storageDir, fileDataBuf.toString()], resolve, reject);
            }

            console.log('Unknown java file type', src);
            reject('Unknown java file type' + src);
          }, function () {
            console.log('URL Not Found', src);
            reject('Unknown java file type' + src);
          });
        }
      });
    }
  }, {
    key: 'mountJava',
    value: function mountJava(src) {
      var _this3 = this;

      this.bfsReady.then(function () {
        _this3.mountHub.push(_this3._mountJava(src, function (resolve, reject, jarStorePath) {
          _this3.classpath.push(jarStorePath);resolve("OK");
        }));
      });
    }
  }, {
    key: 'dynamicMountJava',
    value: function dynamicMountJava(src) {
      var _this4 = this;

      var Buffer = global.BrowserFS.BFSRequire('buffer').Buffer;
      var options = this.getOptions();
      return this._mountJava(src, function (resolve, reject, jarStorePath) {
        return _WrapperUtil2.default.dispatchOnJVM(_this4.javapoly, 'JAR_PATH_ADD', 10, ['file://' + jarStorePath], resolve, reject);
      });
    }
  }, {
    key: 'mountFileViaXHR',
    value: function mountFileViaXHR(src) {
      var _this5 = this;

      var options = this.getOptions();

      return new _promise2.default(function (resolve, reject) {
        var fileName = _this5.path.basename(src);
        var dirName = _this5.path.join(src.replace(/[\///\:]/gi, ''));

        if (!_this5.fs.existsSync('/xhrdirs/' + dirName)) {
          var listingObject = {};listingObject[fileName] = null;
          var lastSlash = 0;
          for (var ti = 0; (ti = src.indexOf('/', lastSlash + 1)) > 0; lastSlash = ti) {}
          var mountPoint = new BrowserFS.FileSystem.XmlHttpRequest(listingObject, src.substr(0, lastSlash));

          _this5.xhrdirs.mount('/' + dirName, mountPoint);
        }

        resolve(_this5.path.join('/xhrdirs', dirName, fileName));
      });
    }
  }, {
    key: 'writeRemoteJarFileIntoFS',
    value: function writeRemoteJarFileIntoFS(src, jarFileData) {
      var _this6 = this;

      var Buffer = global.BrowserFS.BFSRequire('buffer').Buffer;
      var options = this.getOptions();
      return new _promise2.default(function (resolve, reject) {
        var jarName = _this6.path.basename(src);
        var jarStorePath = _this6.path.join(options.storageDir, jarName);
        // store the .jar file to $storageDir
        _this6.fs.writeFile(jarStorePath, jarFileData, function (err) {
          if (err) {
            console.error(err.message);
            reject(err.message);
          } else {
            // add .jar file path to the URL of URLClassLoader
            //this.classpath.push(jarStorePath);

            //need to pass the path, will add that path to ClassLoader of Main.java
            resolve(jarStorePath);
          }
        });
      });
    }
  }, {
    key: 'writeRemoteClassFileIntoFS',
    value: function writeRemoteClassFileIntoFS(src, classFileData) {
      var _this7 = this;

      var Buffer = global.BrowserFS.BFSRequire('buffer').Buffer;
      var options = this.getOptions();
      return new _promise2.default(function (resolve, reject) {
        var classFileInfo = classfile.analyze(classFileData);
        var className = _this7.path.basename(classFileInfo.this_class);
        var packageName = _this7.path.dirname(classFileInfo.this_class);

        _this7.fsext.rmkdirSync(_this7.path.join(options.storageDir, packageName));

        _this7.fs.writeFile(_this7.path.join(options.storageDir, classFileInfo.this_class + '.class'), classFileData, function (err) {
          if (err) {
            console.error(err.message);
            reject(err.message);
          } else {
            resolve("OK");
          }
        });
      });
    }
  }, {
    key: 'initJVM',
    value: function initJVM() {
      var _this8 = this;

      var options = this.getOptions();
      var responsiveness = this.javapoly.isJavaPolyWorker ? 100 : 15;
      this.classpath.unshift("/javapoly/classes/");
      this.bfsReady.then(function () {
        _promise2.default.all(_this8.mountHub).then(function () {
          _this8.javapoly.jvm = new Doppio.VM.JVM({
            doppioHomePath: '/sys',
            classpath: _this8.classpath,
            javaHomePath: '/sys/vendor/java_home',
            extractionPath: '/tmp',
            nativeClasspath: ['/sys/natives', "/javapoly/natives"],
            assertionsEnabled: options.assertionsEnabled,
            responsiveness: responsiveness
          }, function (err, jvm) {
            if (err) {
              console.log('err loading JVM ' + _this8.javapoly.getId() + ' :', err);
            } else {
              jvm.runClass('com.javapoly.Main', [_this8.javapoly.getId()], function (exitCode) {
                // Control flow shouldn't reach here under normal circumstances,
                // because Main thread keeps polling for messages.
                console.log("JVM Exit code: ", exitCode);
              });
            }
          });
        });
      });
    }
  }, {
    key: 'installStreamHandlers',
    value: function installStreamHandlers() {
      var _this9 = this;

      this.process.stdout.on('data', function (data) {
        var ds = data.toString();
        if (ds != "\n") {
          console.log("JVM " + _this9.javapoly.getId() + " stdout>", ds);
        }
      });
      this.process.stderr.on('data', function (data) {
        var ds = data.toString();
        if (ds != "\n") {
          console.warn("JVM " + _this9.javapoly.getId() + " stderr>", ds);
        }
      });
    }
  }]);
  return DoppioManager;
}();

exports.default = DoppioManager;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../core/CommonUtils.js":115,"../core/WrapperUtil.js":122,"./../tools/classfile.js":128,"./../tools/fsext":129,"babel-runtime/core-js/promise":9,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13}],127:[function(require,module,exports){
(function (global){
"use strict";

var _JavaPoly = require('./core/JavaPoly');

var _JavaPoly2 = _interopRequireDefault(_JavaPoly);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Create main object that will be accessed via global objects J and Java
global.window.javapoly = new _JavaPoly2.default({
  doppioLibUrl: 'https://www.javapoly.com/doppio/',
  browserfsLibUrl: 'https://www.javapoly.com/browserfs/'
});

module.exports = _JavaPoly2.default;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./core/JavaPoly":118}],128:[function(require,module,exports){
(function (global){
'use strict';

var MAGIC_NUMBER = 'cafebabe';
var CP_TAG_SIZE = 1;

function uintFromBuffer(buffer, from, count) {
  var res = 0;
  var bufferGetter = global.BrowserFS ? function (index) {
    return buffer.get(index);
  } : function (index) {
    return buffer[index];
  };
  for (var i = 0; i < count; i++) {
    res = res * 256 + bufferGetter(from + i);
  }
  return res;
}

function stringFromBuffer(buffer, from, count) {
  var res = '';
  var bufferGetter = global.BrowserFS ? function (index) {
    return buffer.get(index);
  } : function (index) {
    return buffer[index];
  };
  for (var i = 0; i < count; i++) {
    res += String.fromCharCode(bufferGetter(from + i));
  }
  return res;
}

function hexFromBuffer(buffer, from, count) {
  var res = '';
  var bufferGetter = global.BrowserFS ? function (index) {
    return buffer.get(index);
  } : function (index) {
    return buffer[index];
  };
  for (var i = 0; i < count; i++) {
    res += bufferGetter(from + i).toString(16);
  }
  return res;
}

function ConstantPoolClassRef(buffer, from) {
  this.ref = uintFromBuffer(buffer, from, 2);
}

/**
 * This function analyze buffer that contains class-file and returns basic info about it.
 * @param  {Buffer} buffer that contains binary data of class-file
 * @return {Object}        object that represents key-value info of file
 */
function analyze(data) {
  'use strict';

  var magic_number = hexFromBuffer(data, 0, 4);
  if (magic_number !== MAGIC_NUMBER) throw 'Class file should starts with ' + MAGIC_NUMBER + ' string';

  var minor_version = uintFromBuffer(data, 4, 2);
  var major_version = uintFromBuffer(data, 6, 2);
  var constant_pool_count = uintFromBuffer(data, 8, 2);

  var constant_pool = [];

  var cpsize = 10;

  for (var i = 1; i < constant_pool_count; i++) {
    var cp_tag = uintFromBuffer(data, cpsize, CP_TAG_SIZE);
    var size = 0;
    switch (cp_tag) {
      case 1:
        size = 2 + uintFromBuffer(data, cpsize + 1, 2);
        constant_pool[i] = stringFromBuffer(data, cpsize + 3, size - 2);
        break;
      case 3:
        size = 4;break;
      case 4:
        size = 4;break;
      case 5:
        size = 8;i++;break;
      case 6:
        size = 8;i++;break;
      case 7:
        size = 2;
        constant_pool[i] = new ConstantPoolClassRef(data, cpsize + 1);
        break;
      case 8:
        size = 2;break;
      case 9:
        size = 4;break;
      case 10:
        size = 4;break;
      case 11:
        size = 4;break;
      case 12:
        size = 4;break;
      case 15:
        size = 3;break;
      case 16:
        size = 2;break;
      case 18:
        size = 4;break;
      default:
        throw 'Wrong cp_tag: ' + cp_tag;
    }
    cpsize += CP_TAG_SIZE + size;
  }

  var access_flags = uintFromBuffer(data, cpsize, 2);
  var this_class = uintFromBuffer(data, cpsize + 2, 2);
  var super_class = uintFromBuffer(data, cpsize + 4, 2);

  return {
    minor_version: minor_version,
    major_version: major_version,
    constant_pool: constant_pool,
    this_class: constant_pool[constant_pool[this_class].ref],
    super_class: constant_pool[constant_pool[super_class].ref]
  };
}

module.exports.analyze = analyze;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],129:[function(require,module,exports){
"use strict";

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (fs, path) {
    'use strict';

    var _0777 = parseInt('0777', 8);

    /**
     * mkdir that creates folders recursive
     * it's based on https://github.com/substack/node-mkdirp
     */
    var rmkdirSync = function sync(p, opts, made) {
        if (!opts || (typeof opts === 'undefined' ? 'undefined' : (0, _typeof3.default)(opts)) !== 'object') {
            opts = { mode: opts };
        }

        var mode = opts.mode;
        var xfs = opts.fs || fs;

        if (!made) made = null;

        p = path.resolve(p);

        try {
            xfs.mkdirSync(p, mode);
            made = made || p;
        } catch (err0) {
            switch (err0.code) {
                case 'ENOENT':
                    made = sync(path.dirname(p), opts, made);
                    sync(p, opts, made);
                    break;

                // In the case of any other error, just see if there's a dir
                // there already.  If so, then hooray!  If not, then something
                // is borked.
                default:
                    var stat;
                    try {
                        stat = xfs.statSync(p);
                    } catch (err1) {
                        throw err0;
                    }
                    if (!stat.isDirectory()) throw err0;
                    break;
            }
        }

        return made;
    };

    return {
        rmkdirSync: rmkdirSync
    };
};

},{"babel-runtime/helpers/typeof":17}]},{},[127]);