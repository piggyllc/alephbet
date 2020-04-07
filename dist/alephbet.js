(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["AlephBet"] = factory();
	else
		root["AlephBet"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/alephbet.coffee");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/basil.js/build/basil.js":
/*!**********************************************!*\
  !*** ./node_modules/basil.js/build/basil.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;(function () {
	// Basil
	var Basil = function (options) {
		return Basil.utils.extend({}, Basil.plugins, new Basil.Storage().init(options));
	};

	// Version
	Basil.version = '0.4.10';

	// Utils
	Basil.utils = {
		extend: function () {
			var destination = typeof arguments[0] === 'object' ? arguments[0] : {};
			for (var i = 1; i < arguments.length; i++) {
				if (arguments[i] && typeof arguments[i] === 'object')
					for (var property in arguments[i])
						destination[property] = arguments[i][property];
			}
			return destination;
		},
		each: function (obj, fnIterator, context) {
			if (this.isArray(obj)) {
				for (var i = 0; i < obj.length; i++)
					if (fnIterator.call(context, obj[i], i) === false) return;
			} else if (obj) {
				for (var key in obj)
					if (fnIterator.call(context, obj[key], key) === false) return;
			}
		},
		tryEach: function (obj, fnIterator, fnError, context) {
			this.each(obj, function (value, key) {
				try {
					return fnIterator.call(context, value, key);
				} catch (error) {
					if (this.isFunction(fnError)) {
						try {
							fnError.call(context, value, key, error);
						} catch (error) {}
					}
				}
			}, this);
		},
		registerPlugin: function (methods) {
			Basil.plugins = this.extend(methods, Basil.plugins);
		},
		getTypeOf: function (obj) {
			if (typeof obj === 'undefined' || obj === null)
				return '' + obj;
			return Object.prototype.toString.call(obj).replace(/^\[object\s(.*)\]$/, function ($0, $1) { return $1.toLowerCase(); });
		}
	};

	// Add some isType methods: isArguments, isBoolean, isFunction, isString, isArray, isNumber, isDate, isRegExp, isUndefined, isNull.
	var types = ['Arguments', 'Boolean', 'Function', 'String', 'Array', 'Number', 'Date', 'RegExp', 'Undefined', 'Null'];
	for (var i = 0; i < types.length; i++) {
		Basil.utils['is' + types[i]] = (function (type) {
			return function (obj) {
				return Basil.utils.getTypeOf(obj) === type.toLowerCase();
			};
		})(types[i]);
	}

	// Plugins
	Basil.plugins = {};

	// Options
	Basil.options = Basil.utils.extend({
		namespace: 'b45i1',
		storages: ['local', 'cookie', 'session', 'memory'],
		expireDays: 365,
		keyDelimiter: '.'
	}, window.Basil ? window.Basil.options : {});

	// Storage
	Basil.Storage = function () {
		var _salt = 'b45i1' + (Math.random() + 1)
				.toString(36)
				.substring(7),
			_storages = {},
			_isValidKey = function (key) {
				var type = Basil.utils.getTypeOf(key);
				return (type === 'string' && key) || type === 'number' || type === 'boolean';
			},
			_toStoragesArray = function (storages) {
				if (Basil.utils.isArray(storages))
					return storages;
				return Basil.utils.isString(storages) ? [storages] : [];
			},
			_toStoredKey = function (namespace, path, delimiter) {
				var key = '';
				if (_isValidKey(path)) {
					key += path;
				} else if (Basil.utils.isArray(path)) {
					path = Basil.utils.isFunction(path.filter) ? path.filter(_isValidKey) : path;
					key = path.join(delimiter);
				}
				return key && _isValidKey(namespace) ? namespace + delimiter + key : key;
 			},
			_toKeyName = function (namespace, key, delimiter) {
				if (!_isValidKey(namespace))
					return key;
				return key.replace(new RegExp('^' + namespace + delimiter), '');
			},
			_toStoredValue = function (value) {
				return JSON.stringify(value);
			},
			_fromStoredValue = function (value) {
				return value ? JSON.parse(value) : null;
			};

		// HTML5 web storage interface
		var webStorageInterface = {
			engine: null,
			check: function () {
				try {
					window[this.engine].setItem(_salt, true);
					window[this.engine].removeItem(_salt);
				} catch (e) {
					return false;
				}
				return true;
			},
			set: function (key, value, options) {
				if (!key)
					throw Error('invalid key');
				window[this.engine].setItem(key, value);
			},
			get: function (key) {
				return window[this.engine].getItem(key);
			},
			remove: function (key) {
				window[this.engine].removeItem(key);
			},
			reset: function (namespace) {
				for (var i = 0, key; i < window[this.engine].length; i++) {
					key = window[this.engine].key(i);
					if (!namespace || key.indexOf(namespace) === 0) {
						this.remove(key);
						i--;
					}
				}
			},
			keys: function (namespace, delimiter) {
				var keys = [];
				for (var i = 0, key; i < window[this.engine].length; i++) {
					key = window[this.engine].key(i);
					if (!namespace || key.indexOf(namespace) === 0)
						keys.push(_toKeyName(namespace, key, delimiter));
				}
				return keys;
			}
		};

		// local storage
		_storages.local = Basil.utils.extend({}, webStorageInterface, {
			engine: 'localStorage'
		});
		// session storage
		_storages.session = Basil.utils.extend({}, webStorageInterface, {
			engine: 'sessionStorage'
		});

		// memory storage
		_storages.memory = {
			_hash: {},
			check: function () {
				return true;
			},
			set: function (key, value, options) {
				if (!key)
					throw Error('invalid key');
				this._hash[key] = value;
			},
			get: function (key) {
				return this._hash[key] || null;
			},
			remove: function (key) {
				delete this._hash[key];
			},
			reset: function (namespace) {
				for (var key in this._hash) {
					if (!namespace || key.indexOf(namespace) === 0)
						this.remove(key);
				}
			},
			keys: function (namespace, delimiter) {
				var keys = [];
				for (var key in this._hash)
					if (!namespace || key.indexOf(namespace) === 0)
						keys.push(_toKeyName(namespace, key, delimiter));
				return keys;
			}
		};

		// cookie storage
		_storages.cookie = {
			check: function (options) {
				if (!navigator.cookieEnabled)
					return false;
				if (window.self !== window.top) {
					// we need to check third-party cookies;
					var cookie = 'thirdparty.check=' + Math.round(Math.random() * 1000);
					document.cookie = cookie + '; path=/';
					return document.cookie.indexOf(cookie) !== -1;
				}
				// if cookie secure activated, ensure it works (not the case if we are in http only)
				if (options && options.secure) {
					try {
						this.set(_salt, _salt, options);
						var hasSecurelyPersited = this.get(_salt) === _salt;
						this.remove(_salt);
						return hasSecurelyPersited;
					} catch (error) {
						return false;
					}
				}
				return true;
			},
			set: function (key, value, options) {
				if (!this.check())
					throw Error('cookies are disabled');
				options = options || {};
				if (!key)
					throw Error('invalid key');
				var cookie = encodeURIComponent(key) + '=' + encodeURIComponent(value);
				// handle expiration days
				if (options.expireDays) {
					var date = new Date();
					date.setTime(date.getTime() + (options.expireDays * 24 * 60 * 60 * 1000));
					cookie += '; expires=' + date.toGMTString();
				}
				// handle domain
				if (options.domain && options.domain !== document.domain) {
					var _domain = options.domain.replace(/^\./, '');
					if (document.domain.indexOf(_domain) === -1 || _domain.split('.').length <= 1)
						throw Error('invalid domain');
					cookie += '; domain=' + options.domain;
				}
				// handle secure
				if (options.secure === true) {
					cookie += '; Secure';
				}
				document.cookie = cookie + '; path=/';
			},
			get: function (key) {
				if (!this.check())
					throw Error('cookies are disabled');
				var encodedKey = encodeURIComponent(key);
				var cookies = document.cookie ? document.cookie.split(';') : [];
				// retrieve last updated cookie first
				for (var i = cookies.length - 1, cookie; i >= 0; i--) {
					cookie = cookies[i].replace(/^\s*/, '');
					if (cookie.indexOf(encodedKey + '=') === 0)
						return decodeURIComponent(cookie.substring(encodedKey.length + 1, cookie.length));
				}
				return null;
			},
			remove: function (key) {
				// remove cookie from main domain
				this.set(key, '', { expireDays: -1 });
				// remove cookie from upper domains
				var domainParts = document.domain.split('.');
				for (var i = domainParts.length; i > 1; i--) {
					this.set(key, '', { expireDays: -1, domain: '.' + domainParts.slice(- i).join('.') });
				}
			},
			reset: function (namespace) {
				var cookies = document.cookie ? document.cookie.split(';') : [];
				for (var i = 0, cookie, key; i < cookies.length; i++) {
					cookie = cookies[i].replace(/^\s*/, '');
					key = cookie.substr(0, cookie.indexOf('='));
					if (!namespace || key.indexOf(namespace) === 0)
						this.remove(key);
				}
			},
			keys: function (namespace, delimiter) {
				if (!this.check())
					throw Error('cookies are disabled');
				var keys = [],
					cookies = document.cookie ? document.cookie.split(';') : [];
				for (var i = 0, cookie, key; i < cookies.length; i++) {
					cookie = cookies[i].replace(/^\s*/, '');
					key = decodeURIComponent(cookie.substr(0, cookie.indexOf('=')));
					if (!namespace || key.indexOf(namespace) === 0)
						keys.push(_toKeyName(namespace, key, delimiter));
				}
				return keys;
			}
		};

		return {
			init: function (options) {
				this.setOptions(options);
				return this;
			},
			setOptions: function (options) {
				this.options = Basil.utils.extend({}, this.options || Basil.options, options);
			},
			support: function (storage) {
				return _storages.hasOwnProperty(storage);
			},
			check: function (storage) {
				if (this.support(storage))
					return _storages[storage].check(this.options);
				return false;
			},
			set: function (key, value, options) {
				options = Basil.utils.extend({}, this.options, options);
				if (!(key = _toStoredKey(options.namespace, key, options.keyDelimiter)))
					return false;
				value = options.raw === true ? value : _toStoredValue(value);
				var where = null;
				// try to set key/value in first available storage
				Basil.utils.tryEach(_toStoragesArray(options.storages), function (storage, index) {
					_storages[storage].set(key, value, options);
					where = storage;
					return false; // break;
				}, null, this);
				if (!where) {
					// key has not been set anywhere
					return false;
				}
				// remove key from all other storages
				Basil.utils.tryEach(_toStoragesArray(options.storages), function (storage, index) {
					if (storage !== where)
						_storages[storage].remove(key);
				}, null, this);
				return true;
			},
			get: function (key, options) {
				options = Basil.utils.extend({}, this.options, options);
				if (!(key = _toStoredKey(options.namespace, key, options.keyDelimiter)))
					return null;
				var value = null;
				Basil.utils.tryEach(_toStoragesArray(options.storages), function (storage, index) {
					if (value !== null)
						return false; // break if a value has already been found.
					value = _storages[storage].get(key, options) || null;
					value = options.raw === true ? value : _fromStoredValue(value);
				}, function (storage, index, error) {
					value = null;
				}, this);
				return value;
			},
			remove: function (key, options) {
				options = Basil.utils.extend({}, this.options, options);
				if (!(key = _toStoredKey(options.namespace, key, options.keyDelimiter)))
					return;
				Basil.utils.tryEach(_toStoragesArray(options.storages), function (storage) {
					_storages[storage].remove(key);
				}, null, this);
			},
			reset: function (options) {
				options = Basil.utils.extend({}, this.options, options);
				Basil.utils.tryEach(_toStoragesArray(options.storages), function (storage) {
					_storages[storage].reset(options.namespace);
				}, null, this);
			},
			keys: function (options) {
				options = options || {};
				var keys = [];
				for (var key in this.keysMap(options))
					keys.push(key);
				return keys;
			},
			keysMap: function (options) {
				options = Basil.utils.extend({}, this.options, options);
				var map = {};
				Basil.utils.tryEach(_toStoragesArray(options.storages), function (storage) {
					Basil.utils.each(_storages[storage].keys(options.namespace, options.keyDelimiter), function (key) {
						map[key] = Basil.utils.isArray(map[key]) ? map[key] : [];
						map[key].push(storage);
					}, this);
				}, null, this);
				return map;
			}
		};
	};

	// Access to native storages, without namespace or basil value decoration
	Basil.memory = new Basil.Storage().init({ storages: 'memory', namespace: null, raw: true });
	Basil.cookie = new Basil.Storage().init({ storages: 'cookie', namespace: null, raw: true });
	Basil.localStorage = new Basil.Storage().init({ storages: 'local', namespace: null, raw: true });
	Basil.sessionStorage = new Basil.Storage().init({ storages: 'session', namespace: null, raw: true });

	// browser export
	window.Basil = Basil;

	// AMD export
	if (true) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
			return Basil;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	// commonjs export
	} else {}

})();


/***/ }),

/***/ "./node_modules/crypto-js/core.js":
/*!****************************************!*\
  !*** ./node_modules/crypto-js/core.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory();
	}
	else {}
}(this, function () {

	/**
	 * CryptoJS core components.
	 */
	var CryptoJS = CryptoJS || (function (Math, undefined) {
	    /*
	     * Local polyfil of Object.create
	     */
	    var create = Object.create || (function () {
	        function F() {};

	        return function (obj) {
	            var subtype;

	            F.prototype = obj;

	            subtype = new F();

	            F.prototype = null;

	            return subtype;
	        };
	    }())

	    /**
	     * CryptoJS namespace.
	     */
	    var C = {};

	    /**
	     * Library namespace.
	     */
	    var C_lib = C.lib = {};

	    /**
	     * Base object for prototypal inheritance.
	     */
	    var Base = C_lib.Base = (function () {


	        return {
	            /**
	             * Creates a new object that inherits from this object.
	             *
	             * @param {Object} overrides Properties to copy into the new object.
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         field: 'value',
	             *
	             *         method: function () {
	             *         }
	             *     });
	             */
	            extend: function (overrides) {
	                // Spawn
	                var subtype = create(this);

	                // Augment
	                if (overrides) {
	                    subtype.mixIn(overrides);
	                }

	                // Create default initializer
	                if (!subtype.hasOwnProperty('init') || this.init === subtype.init) {
	                    subtype.init = function () {
	                        subtype.$super.init.apply(this, arguments);
	                    };
	                }

	                // Initializer's prototype is the subtype object
	                subtype.init.prototype = subtype;

	                // Reference supertype
	                subtype.$super = this;

	                return subtype;
	            },

	            /**
	             * Extends this object and runs the init method.
	             * Arguments to create() will be passed to init().
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var instance = MyType.create();
	             */
	            create: function () {
	                var instance = this.extend();
	                instance.init.apply(instance, arguments);

	                return instance;
	            },

	            /**
	             * Initializes a newly created object.
	             * Override this method to add some logic when your objects are created.
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         init: function () {
	             *             // ...
	             *         }
	             *     });
	             */
	            init: function () {
	            },

	            /**
	             * Copies properties into this object.
	             *
	             * @param {Object} properties The properties to mix in.
	             *
	             * @example
	             *
	             *     MyType.mixIn({
	             *         field: 'value'
	             *     });
	             */
	            mixIn: function (properties) {
	                for (var propertyName in properties) {
	                    if (properties.hasOwnProperty(propertyName)) {
	                        this[propertyName] = properties[propertyName];
	                    }
	                }

	                // IE won't copy toString using the loop above
	                if (properties.hasOwnProperty('toString')) {
	                    this.toString = properties.toString;
	                }
	            },

	            /**
	             * Creates a copy of this object.
	             *
	             * @return {Object} The clone.
	             *
	             * @example
	             *
	             *     var clone = instance.clone();
	             */
	            clone: function () {
	                return this.init.prototype.extend(this);
	            }
	        };
	    }());

	    /**
	     * An array of 32-bit words.
	     *
	     * @property {Array} words The array of 32-bit words.
	     * @property {number} sigBytes The number of significant bytes in this word array.
	     */
	    var WordArray = C_lib.WordArray = Base.extend({
	        /**
	         * Initializes a newly created word array.
	         *
	         * @param {Array} words (Optional) An array of 32-bit words.
	         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.create();
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
	         */
	        init: function (words, sigBytes) {
	            words = this.words = words || [];

	            if (sigBytes != undefined) {
	                this.sigBytes = sigBytes;
	            } else {
	                this.sigBytes = words.length * 4;
	            }
	        },

	        /**
	         * Converts this word array to a string.
	         *
	         * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
	         *
	         * @return {string} The stringified word array.
	         *
	         * @example
	         *
	         *     var string = wordArray + '';
	         *     var string = wordArray.toString();
	         *     var string = wordArray.toString(CryptoJS.enc.Utf8);
	         */
	        toString: function (encoder) {
	            return (encoder || Hex).stringify(this);
	        },

	        /**
	         * Concatenates a word array to this word array.
	         *
	         * @param {WordArray} wordArray The word array to append.
	         *
	         * @return {WordArray} This word array.
	         *
	         * @example
	         *
	         *     wordArray1.concat(wordArray2);
	         */
	        concat: function (wordArray) {
	            // Shortcuts
	            var thisWords = this.words;
	            var thatWords = wordArray.words;
	            var thisSigBytes = this.sigBytes;
	            var thatSigBytes = wordArray.sigBytes;

	            // Clamp excess bits
	            this.clamp();

	            // Concat
	            if (thisSigBytes % 4) {
	                // Copy one byte at a time
	                for (var i = 0; i < thatSigBytes; i++) {
	                    var thatByte = (thatWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                    thisWords[(thisSigBytes + i) >>> 2] |= thatByte << (24 - ((thisSigBytes + i) % 4) * 8);
	                }
	            } else {
	                // Copy one word at a time
	                for (var i = 0; i < thatSigBytes; i += 4) {
	                    thisWords[(thisSigBytes + i) >>> 2] = thatWords[i >>> 2];
	                }
	            }
	            this.sigBytes += thatSigBytes;

	            // Chainable
	            return this;
	        },

	        /**
	         * Removes insignificant bits.
	         *
	         * @example
	         *
	         *     wordArray.clamp();
	         */
	        clamp: function () {
	            // Shortcuts
	            var words = this.words;
	            var sigBytes = this.sigBytes;

	            // Clamp
	            words[sigBytes >>> 2] &= 0xffffffff << (32 - (sigBytes % 4) * 8);
	            words.length = Math.ceil(sigBytes / 4);
	        },

	        /**
	         * Creates a copy of this word array.
	         *
	         * @return {WordArray} The clone.
	         *
	         * @example
	         *
	         *     var clone = wordArray.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);
	            clone.words = this.words.slice(0);

	            return clone;
	        },

	        /**
	         * Creates a word array filled with random bytes.
	         *
	         * @param {number} nBytes The number of random bytes to generate.
	         *
	         * @return {WordArray} The random word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.random(16);
	         */
	        random: function (nBytes) {
	            var words = [];

	            var r = (function (m_w) {
	                var m_w = m_w;
	                var m_z = 0x3ade68b1;
	                var mask = 0xffffffff;

	                return function () {
	                    m_z = (0x9069 * (m_z & 0xFFFF) + (m_z >> 0x10)) & mask;
	                    m_w = (0x4650 * (m_w & 0xFFFF) + (m_w >> 0x10)) & mask;
	                    var result = ((m_z << 0x10) + m_w) & mask;
	                    result /= 0x100000000;
	                    result += 0.5;
	                    return result * (Math.random() > .5 ? 1 : -1);
	                }
	            });

	            for (var i = 0, rcache; i < nBytes; i += 4) {
	                var _r = r((rcache || Math.random()) * 0x100000000);

	                rcache = _r() * 0x3ade67b7;
	                words.push((_r() * 0x100000000) | 0);
	            }

	            return new WordArray.init(words, nBytes);
	        }
	    });

	    /**
	     * Encoder namespace.
	     */
	    var C_enc = C.enc = {};

	    /**
	     * Hex encoding strategy.
	     */
	    var Hex = C_enc.Hex = {
	        /**
	         * Converts a word array to a hex string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The hex string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var hexChars = [];
	            for (var i = 0; i < sigBytes; i++) {
	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                hexChars.push((bite >>> 4).toString(16));
	                hexChars.push((bite & 0x0f).toString(16));
	            }

	            return hexChars.join('');
	        },

	        /**
	         * Converts a hex string to a word array.
	         *
	         * @param {string} hexStr The hex string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
	         */
	        parse: function (hexStr) {
	            // Shortcut
	            var hexStrLength = hexStr.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < hexStrLength; i += 2) {
	                words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << (24 - (i % 8) * 4);
	            }

	            return new WordArray.init(words, hexStrLength / 2);
	        }
	    };

	    /**
	     * Latin1 encoding strategy.
	     */
	    var Latin1 = C_enc.Latin1 = {
	        /**
	         * Converts a word array to a Latin1 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The Latin1 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var latin1Chars = [];
	            for (var i = 0; i < sigBytes; i++) {
	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                latin1Chars.push(String.fromCharCode(bite));
	            }

	            return latin1Chars.join('');
	        },

	        /**
	         * Converts a Latin1 string to a word array.
	         *
	         * @param {string} latin1Str The Latin1 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
	         */
	        parse: function (latin1Str) {
	            // Shortcut
	            var latin1StrLength = latin1Str.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < latin1StrLength; i++) {
	                words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
	            }

	            return new WordArray.init(words, latin1StrLength);
	        }
	    };

	    /**
	     * UTF-8 encoding strategy.
	     */
	    var Utf8 = C_enc.Utf8 = {
	        /**
	         * Converts a word array to a UTF-8 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The UTF-8 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            try {
	                return decodeURIComponent(escape(Latin1.stringify(wordArray)));
	            } catch (e) {
	                throw new Error('Malformed UTF-8 data');
	            }
	        },

	        /**
	         * Converts a UTF-8 string to a word array.
	         *
	         * @param {string} utf8Str The UTF-8 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
	         */
	        parse: function (utf8Str) {
	            return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
	        }
	    };

	    /**
	     * Abstract buffered block algorithm template.
	     *
	     * The property blockSize must be implemented in a concrete subtype.
	     *
	     * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0
	     */
	    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
	        /**
	         * Resets this block algorithm's data buffer to its initial state.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm.reset();
	         */
	        reset: function () {
	            // Initial values
	            this._data = new WordArray.init();
	            this._nDataBytes = 0;
	        },

	        /**
	         * Adds new data to this block algorithm's buffer.
	         *
	         * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm._append('data');
	         *     bufferedBlockAlgorithm._append(wordArray);
	         */
	        _append: function (data) {
	            // Convert string to WordArray, else assume WordArray already
	            if (typeof data == 'string') {
	                data = Utf8.parse(data);
	            }

	            // Append
	            this._data.concat(data);
	            this._nDataBytes += data.sigBytes;
	        },

	        /**
	         * Processes available data blocks.
	         *
	         * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
	         *
	         * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
	         *
	         * @return {WordArray} The processed data.
	         *
	         * @example
	         *
	         *     var processedData = bufferedBlockAlgorithm._process();
	         *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
	         */
	        _process: function (doFlush) {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;
	            var dataSigBytes = data.sigBytes;
	            var blockSize = this.blockSize;
	            var blockSizeBytes = blockSize * 4;

	            // Count blocks ready
	            var nBlocksReady = dataSigBytes / blockSizeBytes;
	            if (doFlush) {
	                // Round up to include partial blocks
	                nBlocksReady = Math.ceil(nBlocksReady);
	            } else {
	                // Round down to include only full blocks,
	                // less the number of blocks that must remain in the buffer
	                nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
	            }

	            // Count words ready
	            var nWordsReady = nBlocksReady * blockSize;

	            // Count bytes ready
	            var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);

	            // Process blocks
	            if (nWordsReady) {
	                for (var offset = 0; offset < nWordsReady; offset += blockSize) {
	                    // Perform concrete-algorithm logic
	                    this._doProcessBlock(dataWords, offset);
	                }

	                // Remove processed words
	                var processedWords = dataWords.splice(0, nWordsReady);
	                data.sigBytes -= nBytesReady;
	            }

	            // Return processed words
	            return new WordArray.init(processedWords, nBytesReady);
	        },

	        /**
	         * Creates a copy of this object.
	         *
	         * @return {Object} The clone.
	         *
	         * @example
	         *
	         *     var clone = bufferedBlockAlgorithm.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);
	            clone._data = this._data.clone();

	            return clone;
	        },

	        _minBufferSize: 0
	    });

	    /**
	     * Abstract hasher template.
	     *
	     * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
	     */
	    var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
	        /**
	         * Configuration options.
	         */
	        cfg: Base.extend(),

	        /**
	         * Initializes a newly created hasher.
	         *
	         * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
	         *
	         * @example
	         *
	         *     var hasher = CryptoJS.algo.SHA256.create();
	         */
	        init: function (cfg) {
	            // Apply config defaults
	            this.cfg = this.cfg.extend(cfg);

	            // Set initial values
	            this.reset();
	        },

	        /**
	         * Resets this hasher to its initial state.
	         *
	         * @example
	         *
	         *     hasher.reset();
	         */
	        reset: function () {
	            // Reset data buffer
	            BufferedBlockAlgorithm.reset.call(this);

	            // Perform concrete-hasher logic
	            this._doReset();
	        },

	        /**
	         * Updates this hasher with a message.
	         *
	         * @param {WordArray|string} messageUpdate The message to append.
	         *
	         * @return {Hasher} This hasher.
	         *
	         * @example
	         *
	         *     hasher.update('message');
	         *     hasher.update(wordArray);
	         */
	        update: function (messageUpdate) {
	            // Append
	            this._append(messageUpdate);

	            // Update the hash
	            this._process();

	            // Chainable
	            return this;
	        },

	        /**
	         * Finalizes the hash computation.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} messageUpdate (Optional) A final message update.
	         *
	         * @return {WordArray} The hash.
	         *
	         * @example
	         *
	         *     var hash = hasher.finalize();
	         *     var hash = hasher.finalize('message');
	         *     var hash = hasher.finalize(wordArray);
	         */
	        finalize: function (messageUpdate) {
	            // Final message update
	            if (messageUpdate) {
	                this._append(messageUpdate);
	            }

	            // Perform concrete-hasher logic
	            var hash = this._doFinalize();

	            return hash;
	        },

	        blockSize: 512/32,

	        /**
	         * Creates a shortcut function to a hasher's object interface.
	         *
	         * @param {Hasher} hasher The hasher to create a helper for.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
	         */
	        _createHelper: function (hasher) {
	            return function (message, cfg) {
	                return new hasher.init(cfg).finalize(message);
	            };
	        },

	        /**
	         * Creates a shortcut function to the HMAC's object interface.
	         *
	         * @param {Hasher} hasher The hasher to use in this HMAC helper.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
	         */
	        _createHmacHelper: function (hasher) {
	            return function (message, key) {
	                return new C_algo.HMAC.init(hasher, key).finalize(message);
	            };
	        }
	    });

	    /**
	     * Algorithm namespace.
	     */
	    var C_algo = C.algo = {};

	    return C;
	}(Math));


	return CryptoJS;

}));

/***/ }),

/***/ "./node_modules/crypto-js/sha1.js":
/*!****************************************!*\
  !*** ./node_modules/crypto-js/sha1.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_algo = C.algo;

	    // Reusable object
	    var W = [];

	    /**
	     * SHA-1 hash algorithm.
	     */
	    var SHA1 = C_algo.SHA1 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new WordArray.init([
	                0x67452301, 0xefcdab89,
	                0x98badcfe, 0x10325476,
	                0xc3d2e1f0
	            ]);
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcut
	            var H = this._hash.words;

	            // Working variables
	            var a = H[0];
	            var b = H[1];
	            var c = H[2];
	            var d = H[3];
	            var e = H[4];

	            // Computation
	            for (var i = 0; i < 80; i++) {
	                if (i < 16) {
	                    W[i] = M[offset + i] | 0;
	                } else {
	                    var n = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
	                    W[i] = (n << 1) | (n >>> 31);
	                }

	                var t = ((a << 5) | (a >>> 27)) + e + W[i];
	                if (i < 20) {
	                    t += ((b & c) | (~b & d)) + 0x5a827999;
	                } else if (i < 40) {
	                    t += (b ^ c ^ d) + 0x6ed9eba1;
	                } else if (i < 60) {
	                    t += ((b & c) | (b & d) | (c & d)) - 0x70e44324;
	                } else /* if (i < 80) */ {
	                    t += (b ^ c ^ d) - 0x359d3e2a;
	                }

	                e = d;
	                d = c;
	                c = (b << 30) | (b >>> 2);
	                b = a;
	                a = t;
	            }

	            // Intermediate hash value
	            H[0] = (H[0] + a) | 0;
	            H[1] = (H[1] + b) | 0;
	            H[2] = (H[2] + c) | 0;
	            H[3] = (H[3] + d) | 0;
	            H[4] = (H[4] + e) | 0;
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
	            data.sigBytes = dataWords.length * 4;

	            // Hash final blocks
	            this._process();

	            // Return final computed hash
	            return this._hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        }
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA1('message');
	     *     var hash = CryptoJS.SHA1(wordArray);
	     */
	    C.SHA1 = Hasher._createHelper(SHA1);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA1(message, key);
	     */
	    C.HmacSHA1 = Hasher._createHmacHelper(SHA1);
	}());


	return CryptoJS.SHA1;

}));

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/adapters.coffee":
/*!*****************************!*\
  !*** ./src/adapters.coffee ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Adapters, Storage, utils;
utils = __webpack_require__(/*! ./utils */ "./src/utils.coffee");
Storage = __webpack_require__(/*! ./storage */ "./src/storage.coffee");

Adapters = function () {
  var Adapters = function Adapters() {
    _classCallCheck(this, Adapters);
  };

  ; //# Adapter for using the gimel backend. See https://github.com/Alephbet/gimel
  //# uses jQuery to send data if `$.ajax` is found. Falls back on plain js xhr
  //# params:
  //# - url: Gimel track URL to post events to
  //# - namepsace: namespace for Gimel (allows setting different environments etc)
  //# - storage (optional) - storage adapter for the queue

  Adapters.GimelAdapter = function () {
    var GimelAdapter =
    /*#__PURE__*/
    function () {
      function GimelAdapter(url, namespace) {
        var storage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Adapters.LocalStorageAdapter;

        _classCallCheck(this, GimelAdapter);

        this._storage = storage;
        this.url = url;
        this.namespace = namespace;
        this._queue = JSON.parse(this._storage.get(this.queue_name) || '[]');

        this._flush();
      }

      _createClass(GimelAdapter, [{
        key: "_remove_quuid",
        value: function _remove_quuid(quuid) {
          var _this = this;

          return function (err, res) {
            if (err) {
              return;
            }

            utils.remove(_this._queue, function (el) {
              return el.properties._quuid === quuid;
            });
            return _this._storage.set(_this.queue_name, JSON.stringify(_this._queue));
          };
        }
      }, {
        key: "_jquery_get",
        value: function _jquery_get(url, data, callback) {
          utils.log('send request using jQuery');
          return window.jQuery.ajax({
            method: 'GET',
            url: url,
            data: data,
            success: callback
          });
        }
      }, {
        key: "_plain_js_get",
        value: function _plain_js_get(url, data, callback) {
          var k, params, v, xhr;
          utils.log('fallback on plain js xhr');
          xhr = new XMLHttpRequest();

          params = function () {
            var results;
            results = [];

            for (k in data) {
              v = data[k];
              results.push("".concat(encodeURIComponent(k), "=").concat(encodeURIComponent(v)));
            }

            return results;
          }();

          params = params.join('&').replace(/%20/g, '+');
          xhr.open('GET', "".concat(url, "?").concat(params));

          xhr.onload = function () {
            if (xhr.status === 200) {
              return callback();
            }
          };

          return xhr.send();
        }
      }, {
        key: "_ajax_get",
        value: function _ajax_get(url, data, callback) {
          var ref;

          if ((ref = window.jQuery) != null ? ref.ajax : void 0) {
            return this._jquery_get(url, data, callback);
          } else {
            return this._plain_js_get(url, data, callback);
          }
        }
      }, {
        key: "_flush",
        value: function _flush() {
          var callback, i, item, len, ref, results;
          ref = this._queue;
          results = [];

          for (i = 0, len = ref.length; i < len; i++) {
            item = ref[i];
            callback = this._remove_quuid(item.properties._quuid);

            this._ajax_get(this.url, utils.omit(item.properties, '_quuid'), callback);

            results.push(null);
          }

          return results;
        }
      }, {
        key: "_user_uuid",
        value: function _user_uuid(experiment, goal) {
          if (!experiment.user_id) {
            return utils.uuid();
          }

          if (!goal.unique) {
            // if goal is not unique, we track it every time. return a new random uuid
            return utils.uuid();
          } // for a given user id, namespace and experiment, the uuid will always be the same
          // this avoids counting goals twice for the same user across different devices


          return utils.sha1("".concat(this.namespace, ".").concat(experiment.name, ".").concat(experiment.user_id));
        }
      }, {
        key: "_track",
        value: function _track(experiment, variant, goal) {
          utils.log("Persistent Queue Gimel track: ".concat(this.namespace, ", ").concat(experiment.name, ", ").concat(variant, ", ").concat(goal.name));

          if (this._queue.length > 100) {
            this._queue.shift();
          }

          this._queue.push({
            properties: {
              experiment: experiment.name,
              _quuid: utils.uuid(),
              // queue uuid (used only internally)
              uuid: this._user_uuid(experiment, goal),
              variant: variant,
              event: goal.name,
              namespace: this.namespace
            }
          });

          this._storage.set(this.queue_name, JSON.stringify(this._queue));

          return this._flush();
        }
      }, {
        key: "experiment_start",
        value: function experiment_start(experiment, variant) {
          return this._track(experiment, variant, {
            name: 'participate',
            unique: true
          });
        }
      }, {
        key: "goal_complete",
        value: function goal_complete(experiment, variant, goal_name, props) {
          return this._track(experiment, variant, utils.defaults({
            name: goal_name
          }, props));
        }
      }]);

      return GimelAdapter;
    }();

    ;
    GimelAdapter.prototype.queue_name = '_gimel_queue';
    return GimelAdapter;
  }.call(this);

  Adapters.PersistentQueueGoogleAnalyticsAdapter = function () {
    var PersistentQueueGoogleAnalyticsAdapter =
    /*#__PURE__*/
    function () {
      function PersistentQueueGoogleAnalyticsAdapter() {
        var storage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Adapters.LocalStorageAdapter;

        _classCallCheck(this, PersistentQueueGoogleAnalyticsAdapter);

        this._storage = storage;
        this._queue = JSON.parse(this._storage.get(this.queue_name) || '[]');

        this._flush();
      }

      _createClass(PersistentQueueGoogleAnalyticsAdapter, [{
        key: "_remove_uuid",
        value: function _remove_uuid(uuid) {
          var _this2 = this;

          return function () {
            utils.remove(_this2._queue, function (el) {
              return el.uuid === uuid;
            });
            return _this2._storage.set(_this2.queue_name, JSON.stringify(_this2._queue));
          };
        }
      }, {
        key: "_flush",
        value: function _flush() {
          var callback, i, item, len, ref, results;

          if (typeof ga !== 'function') {
            throw new Error('ga not defined. Please make sure your Universal analytics is set up correctly');
          }

          ref = this._queue;
          results = [];

          for (i = 0, len = ref.length; i < len; i++) {
            item = ref[i];
            callback = this._remove_uuid(item.uuid);
            results.push(ga('send', 'event', item.category, item.action, item.label, {
              'hitCallback': callback,
              'nonInteraction': 1
            }));
          }

          return results;
        }
      }, {
        key: "_track",
        value: function _track(category, action, label) {
          utils.log("Persistent Queue Google Universal Analytics track: ".concat(category, ", ").concat(action, ", ").concat(label));

          if (this._queue.length > 100) {
            this._queue.shift();
          }

          this._queue.push({
            uuid: utils.uuid(),
            category: category,
            action: action,
            label: label
          });

          this._storage.set(this.queue_name, JSON.stringify(this._queue));

          return this._flush();
        }
      }, {
        key: "experiment_start",
        value: function experiment_start(experiment, variant) {
          return this._track(this.namespace, "".concat(experiment.name, " | ").concat(variant), 'Visitors');
        }
      }, {
        key: "goal_complete",
        value: function goal_complete(experiment, variant, goal_name, _props) {
          return this._track(this.namespace, "".concat(experiment.name, " | ").concat(variant), goal_name);
        }
      }]);

      return PersistentQueueGoogleAnalyticsAdapter;
    }();

    ;
    PersistentQueueGoogleAnalyticsAdapter.prototype.namespace = 'alephbet';
    PersistentQueueGoogleAnalyticsAdapter.prototype.queue_name = '_ga_queue';
    return PersistentQueueGoogleAnalyticsAdapter;
  }.call(this);

  Adapters.PersistentQueueKeenAdapter = function () {
    var PersistentQueueKeenAdapter =
    /*#__PURE__*/
    function () {
      function PersistentQueueKeenAdapter(keen_client) {
        var storage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Adapters.LocalStorageAdapter;

        _classCallCheck(this, PersistentQueueKeenAdapter);

        this.client = keen_client;
        this._storage = storage;
        this._queue = JSON.parse(this._storage.get(this.queue_name) || '[]');

        this._flush();
      }

      _createClass(PersistentQueueKeenAdapter, [{
        key: "_remove_quuid",
        value: function _remove_quuid(quuid) {
          var _this3 = this;

          return function (err, res) {
            if (err) {
              return;
            }

            utils.remove(_this3._queue, function (el) {
              return el.properties._quuid === quuid;
            });
            return _this3._storage.set(_this3.queue_name, JSON.stringify(_this3._queue));
          };
        }
      }, {
        key: "_flush",
        value: function _flush() {
          var callback, i, item, len, ref, results;
          ref = this._queue;
          results = [];

          for (i = 0, len = ref.length; i < len; i++) {
            item = ref[i];
            callback = this._remove_quuid(item.properties._quuid);
            results.push(this.client.addEvent(item.experiment_name, utils.omit(item.properties, '_quuid'), callback));
          }

          return results;
        }
      }, {
        key: "_user_uuid",
        value: function _user_uuid(experiment, goal) {
          if (!experiment.user_id) {
            return utils.uuid();
          }

          if (!goal.unique) {
            // if goal is not unique, we track it every time. return a new random uuid
            return utils.uuid();
          } // for a given user id, namespace and experiment, the uuid will always be the same
          // this avoids counting goals twice for the same user across different devices


          return utils.sha1("".concat(this.namespace, ".").concat(experiment.name, ".").concat(experiment.user_id));
        }
      }, {
        key: "_track",
        value: function _track(experiment, variant, goal) {
          utils.log("Persistent Queue Keen track: ".concat(experiment.name, ", ").concat(variant, ", ").concat(event));

          if (this._queue.length > 100) {
            this._queue.shift();
          }

          this._queue.push({
            experiment_name: experiment.name,
            properties: {
              _quuid: utils.uuid(),
              // queue uuid (used only internally)
              uuid: this._user_uuid(experiment, goal),
              variant: variant,
              event: goal.name
            }
          });

          this._storage.set(this.queue_name, JSON.stringify(this._queue));

          return this._flush();
        }
      }, {
        key: "experiment_start",
        value: function experiment_start(experiment, variant) {
          return this._track(experiment, variant, {
            name: 'participate',
            unique: true
          });
        }
      }, {
        key: "goal_complete",
        value: function goal_complete(experiment, variant, goal_name, props) {
          return this._track(experiment, variant, utils.defaults({
            name: goal_name
          }, props));
        }
      }]);

      return PersistentQueueKeenAdapter;
    }();

    ;
    PersistentQueueKeenAdapter.prototype.queue_name = '_keen_queue';
    return PersistentQueueKeenAdapter;
  }.call(this);

  Adapters.GoogleUniversalAnalyticsAdapter = function () {
    var GoogleUniversalAnalyticsAdapter =
    /*#__PURE__*/
    function () {
      function GoogleUniversalAnalyticsAdapter() {
        _classCallCheck(this, GoogleUniversalAnalyticsAdapter);
      }

      _createClass(GoogleUniversalAnalyticsAdapter, null, [{
        key: "_track",
        value: function _track(category, action, label) {
          utils.log("Google Universal Analytics track: ".concat(category, ", ").concat(action, ", ").concat(label));

          if (typeof ga !== 'function') {
            throw new Error('ga not defined. Please make sure your Universal analytics is set up correctly');
          }

          return ga('send', 'event', category, action, label, {
            'nonInteraction': 1
          });
        }
      }, {
        key: "experiment_start",
        value: function experiment_start(experiment, variant) {
          return this._track(this.namespace, "".concat(experiment.name, " | ").concat(variant), 'Visitors');
        }
      }, {
        key: "goal_complete",
        value: function goal_complete(experiment, variant, goal_name, _props) {
          return this._track(this.namespace, "".concat(experiment.name, " | ").concat(variant), goal_name);
        }
      }]);

      return GoogleUniversalAnalyticsAdapter;
    }();

    ;
    GoogleUniversalAnalyticsAdapter.namespace = 'alephbet';
    return GoogleUniversalAnalyticsAdapter;
  }.call(this);

  Adapters.LocalStorageAdapter = function () {
    var LocalStorageAdapter =
    /*#__PURE__*/
    function () {
      function LocalStorageAdapter() {
        _classCallCheck(this, LocalStorageAdapter);
      }

      _createClass(LocalStorageAdapter, null, [{
        key: "set",
        value: function set(key, value) {
          return new Storage(this.namespace).set(key, value);
        }
      }, {
        key: "get",
        value: function get(key) {
          return new Storage(this.namespace).get(key);
        }
      }]);

      return LocalStorageAdapter;
    }();

    ;
    LocalStorageAdapter.namespace = 'alephbet';
    return LocalStorageAdapter;
  }.call(this);

  Adapters.PiggyStorageAdapter = function () {
    var PiggyStorageAdapter =
    /*#__PURE__*/
    function () {
      function PiggyStorageAdapter() {
        _classCallCheck(this, PiggyStorageAdapter);
      }

      _createClass(PiggyStorageAdapter, null, [{
        key: "set",
        value: function set(key, value) {
          return new Storage(this.namespace).set(key, value);
        }
      }, {
        key: "get",
        value: function get(key) {
          return new Storage(this.namespace).get(key);
        }
      }]);

      return PiggyStorageAdapter;
    }();

    ;
    PiggyStorageAdapter.namespace = '_piggy:alephbet';
    return PiggyStorageAdapter;
  }.call(this);

  return Adapters;
}.call(void 0);

module.exports = Adapters;

/***/ }),

/***/ "./src/alephbet.coffee":
/*!*****************************!*\
  !*** ./src/alephbet.coffee ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AlephBet, adapters, options, utils;
utils = __webpack_require__(/*! ./utils */ "./src/utils.coffee");
adapters = __webpack_require__(/*! ./adapters */ "./src/adapters.coffee");
options = __webpack_require__(/*! ./options */ "./src/options.coffee");

AlephBet = function () {
  var AlephBet = function AlephBet() {
    _classCallCheck(this, AlephBet);
  };

  ;
  AlephBet.options = options;
  AlephBet.utils = utils;
  AlephBet.GimelAdapter = adapters.GimelAdapter;
  AlephBet.PersistentQueueGoogleAnalyticsAdapter = adapters.PersistentQueueGoogleAnalyticsAdapter;
  AlephBet.PersistentQueueKeenAdapter = adapters.PersistentQueueKeenAdapter;

  AlephBet.Experiment = function () {
    var _validate;

    var Experiment =
    /*#__PURE__*/
    function () {
      function Experiment() {
        var options1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Experiment);

        this.options = options1;
        Object.defineProperty(this, 'user_id', {
          enumerable: true,
          configurable: true,
          get: function get() {
            if (typeof this._user_id === 'function') {
              return this._user_id();
            }

            return this._user_id;
          },
          set: function set(value) {
            return this._user_id = value;
          }
        });
        utils.defaults(this.options, Experiment._options);

        _validate.call(this);

        this.name = this.options.name;
        this.variants = this.options.variants;
        this._variant_value = null;
        this.user_id = this.options.user_id;
        this.variant_names = utils.keys(this.variants);
        this.run();
      }

      _createClass(Experiment, [{
        key: "run",
        value: function run() {
          return this._run();
        }
      }, {
        key: "_run",
        value: function _run() {
          var variant;
          utils.log("running with options: ".concat(JSON.stringify(this.options)));

          if (variant = this.get_stored_variant()) {
            // a variant was already chosen. activate it
            utils.log("".concat(variant, " active"));
            return this.activate_variant(variant);
          } else {
            return this.conditionally_activate_variant();
          }
        }
      }, {
        key: "get_variant_value",
        value: function get_variant_value() {
          return this._variant_value;
        }
      }, {
        key: "activate_variant",
        value: function activate_variant(variant) {
          var ref, ref1;
          this._variant_value = (ref = this.variants[variant]) != null ? ref.activate(this) : void 0;
          this.storage().set("".concat(this.options.name, ":variant"), variant);

          if ((ref1 = this.tracking()) != null) {
            ref1.variant_activated(this, variant);
          }

          return utils.log("activated variant : ".concat(variant), "variant value: ".concat(this._variant_value));
        } // if experiment conditions match, pick and activate a variant, track experiment start

      }, {
        key: "conditionally_activate_variant",
        value: function conditionally_activate_variant() {
          var variant;

          if (!this.options.trigger()) {
            return;
          }

          utils.log('trigger set');

          if (!this.in_sample()) {
            return;
          }

          utils.log('in sample');
          variant = this.pick_variant();
          this.tracking().experiment_start(this, variant);
          return this.activate_variant(variant);
        }
      }, {
        key: "goal_complete",
        value: function goal_complete(goal_name) {
          var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var variant;
          utils.defaults(props, {
            unique: true
          });

          if (props.unique && this.storage().get("".concat(this.options.name, ":").concat(goal_name))) {
            return;
          }

          variant = this.get_stored_variant();

          if (!variant) {
            return;
          }

          if (props.unique) {
            this.storage().set("".concat(this.options.name, ":").concat(goal_name), true);
          }

          utils.log("experiment: ".concat(this.options.name, " variant:").concat(variant, " goal:").concat(goal_name, " complete"));
          return this.tracking().goal_complete(this, variant, goal_name, props);
        }
      }, {
        key: "get_stored_variant",
        value: function get_stored_variant() {
          return this.storage().get("".concat(this.options.name, ":variant"));
        }
      }, {
        key: "pick_variant",
        value: function pick_variant() {
          var all_variants_have_weights;
          all_variants_have_weights = utils.check_weights(this.variants);
          utils.log("all variants have weights: ".concat(all_variants_have_weights));

          if (all_variants_have_weights) {
            return this.pick_weighted_variant();
          } else {
            return this.pick_unweighted_variant();
          }
        }
      }, {
        key: "pick_weighted_variant",
        value: function pick_weighted_variant() {
          var key, ref, value, weighted_index, weights_sum; // Choosing a weighted variant:
          // For A, B, C with weights 1, 3, 6
          // variants = A, B, C
          // weights = 1, 3, 6
          // weights_sum = 10 (sum of weights)
          // weighted_index = 2.1 (random number between 0 and weight sum)
          // ABBBCCCCCC
          // ==^
          // Select B

          weights_sum = utils.sum_weights(this.variants);
          weighted_index = Math.ceil(this._random('variant') * weights_sum);
          ref = this.variants;

          for (key in ref) {
            value = ref[key]; // then we are substracting variant weight from selected number
            // and it it reaches 0 (or below) we are selecting this variant

            weighted_index -= value.weight;

            if (weighted_index <= 0) {
              return key;
            }
          }
        }
      }, {
        key: "pick_unweighted_variant",
        value: function pick_unweighted_variant() {
          var chosen_partition, partitions, variant;
          partitions = 1.0 / this.variant_names.length;
          chosen_partition = Math.floor(this._random('variant') / partitions);
          variant = this.variant_names[chosen_partition];
          utils.log("".concat(variant, " picked"));
          return variant;
        }
      }, {
        key: "in_sample",
        value: function in_sample() {
          var active;
          active = this.storage().get("".concat(this.options.name, ":in_sample"));

          if (typeof active !== 'undefined') {
            return active;
          }

          active = this._random('sample') <= this.options.sample;
          this.storage().set("".concat(this.options.name, ":in_sample"), active);
          return active;
        }
      }, {
        key: "_random",
        value: function _random(salt) {
          var seed;

          if (!this.user_id) {
            return utils.random();
          }

          seed = "".concat(this.name, ".").concat(salt, ".").concat(this.user_id);
          return utils.random(seed);
        }
      }, {
        key: "add_goal",
        value: function add_goal(goal) {
          return goal.add_experiment(this);
        }
      }, {
        key: "add_goals",
        value: function add_goals(goals) {
          var goal, i, len, results;
          results = [];

          for (i = 0, len = goals.length; i < len; i++) {
            goal = goals[i];
            results.push(this.add_goal(goal));
          }

          return results;
        }
      }, {
        key: "storage",
        value: function storage() {
          return this.options.storage_adapter;
        }
      }, {
        key: "tracking",
        value: function tracking() {
          return this.options.tracking_adapter;
        }
      }]);

      return Experiment;
    }();

    ;
    Experiment._options = {
      name: null,
      variants: null,
      user_id: null,
      sample: 1.0,
      trigger: function trigger() {
        return true;
      },
      tracking_adapter: adapters.GoogleUniversalAnalyticsAdapter,
      storage_adapter: adapters.PiggyStorageAdapter
    };

    _validate = function _validate() {
      var all_variants_have_weights;

      if (this.options.name === null) {
        throw new Error('an experiment name must be specified');
      }

      if (this.options.variants === null) {
        throw new Error('variants must be provided');
      }

      if (typeof this.options.trigger !== 'function') {
        throw new Error('trigger must be a function');
      }

      all_variants_have_weights = utils.validate_weights(this.options.variants);

      if (!all_variants_have_weights) {
        throw new Error('not all variants have weights');
      }
    };

    return Experiment;
  }.call(this);

  AlephBet.Goal =
  /*#__PURE__*/
  function () {
    function Goal(name) {
      var props1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, Goal);

      this.name = name;
      this.props = props1;
      utils.defaults(this.props, {
        unique: true
      });
      this.experiments = [];
    }

    _createClass(Goal, [{
      key: "add_experiment",
      value: function add_experiment(experiment) {
        return this.experiments.push(experiment);
      }
    }, {
      key: "add_experiments",
      value: function add_experiments(experiments) {
        var experiment, i, len, results;
        results = [];

        for (i = 0, len = experiments.length; i < len; i++) {
          experiment = experiments[i];
          results.push(this.add_experiment(experiment));
        }

        return results;
      }
    }, {
      key: "complete",
      value: function complete() {
        var experiment, i, len, ref, results;
        ref = this.experiments;
        results = [];

        for (i = 0, len = ref.length; i < len; i++) {
          experiment = ref[i];
          results.push(experiment.goal_complete(this.name, this.props));
        }

        return results;
      }
    }]);

    return Goal;
  }();

  return AlephBet;
}.call(void 0);

module.exports = AlephBet;

/***/ }),

/***/ "./src/options.coffee":
/*!****************************!*\
  !*** ./src/options.coffee ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  debug: true
};

/***/ }),

/***/ "./src/storage.coffee":
/*!****************************!*\
  !*** ./src/storage.coffee ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Basil, Storage, store;
Basil = __webpack_require__(/*! basil.js */ "./node_modules/basil.js/build/basil.js");
store = new Basil({
  namespace: null
}); // a thin wrapper around basil.js for easy swapping

Storage =
/*#__PURE__*/
function () {
  function Storage() {
    var namespace = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'alephbet';

    _classCallCheck(this, Storage);

    this.namespace = namespace;
    this.storage = store.get(this.namespace) || {};
  }

  _createClass(Storage, [{
    key: "set",
    value: function set(key, value) {
      this.storage[key] = value;
      store.set(this.namespace, this.storage);
      return value;
    }
  }, {
    key: "get",
    value: function get(key) {
      return this.storage[key];
    }
  }]);

  return Storage;
}(); // store.get("#{@namespace}:#{key}")


module.exports = Storage;

/***/ }),

/***/ "./src/utils.coffee":
/*!**************************!*\
  !*** ./src/utils.coffee ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// NOTE: using a custom build of lodash, to save space
var Utils, _, options, _sha, uuid;

_ = __webpack_require__(/*! ../vendor/lodash.custom.min */ "./vendor/lodash.custom.min.js");
uuid = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'node-uuid'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
_sha = __webpack_require__(/*! crypto-js/sha1 */ "./node_modules/crypto-js/sha1.js");
options = __webpack_require__(/*! ./options */ "./src/options.coffee");

Utils = function () {
  var Utils =
  /*#__PURE__*/
  function () {
    function Utils() {
      _classCallCheck(this, Utils);
    }

    _createClass(Utils, null, [{
      key: "log",
      value: function log(message) {
        if (options.debug) {
          return console.log(message);
        }
      }
    }, {
      key: "sha1",
      value: function sha1(text) {
        return _sha(text).toString();
      }
    }, {
      key: "random",
      value: function random(seed) {
        if (!seed) {
          return Math.random();
        } // a MUCH simplified version inspired by PlanOut.js


        return parseInt(this.sha1(seed).substr(0, 13), 16) / 0xFFFFFFFFFFFFF;
      }
    }, {
      key: "check_weights",
      value: function check_weights(variants) {
        var contains_weight, key, value;
        contains_weight = [];

        for (key in variants) {
          value = variants[key];
          contains_weight.push(value.weight != null);
        }

        return contains_weight.every(function (has_weight) {
          return has_weight;
        });
      }
    }, {
      key: "sum_weights",
      value: function sum_weights(variants) {
        var key, sum, value;
        sum = 0;

        for (key in variants) {
          value = variants[key];
          sum += value.weight || 0;
        }

        return sum;
      }
    }, {
      key: "validate_weights",
      value: function validate_weights(variants) {
        var contains_weight, key, value;
        contains_weight = [];

        for (key in variants) {
          value = variants[key];
          contains_weight.push(value.weight != null);
        }

        return contains_weight.every(function (has_weight) {
          return has_weight || contains_weight.every(function (has_weight) {
            return !has_weight;
          });
        });
      }
    }]);

    return Utils;
  }();

  ;
  Utils.defaults = _.defaults;
  Utils.keys = _.keys;
  Utils.remove = _.remove;
  Utils.omit = _.omit;
  Utils.uuid = uuid.v4;
  return Utils;
}.call(void 0);

module.exports = Utils;

/***/ }),

/***/ "./vendor/lodash.custom.min.js":
/*!*************************************!*\
  !*** ./vendor/lodash.custom.min.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {/**
 * @license
 * Lodash (Custom Build) lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 * Build: `lodash -p include="keys,defaults,remove,omit" exports="node" -o ./vendor/lodash.custom.min.js`
 */
;(function(){function t(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}function e(t,e){for(var r=-1,n=null==t?0:t.length;++r<n&&false!==e(t[r],r,t););}function r(t,e){for(var r=-1,n=null==t?0:t.length,o=0,c=[];++r<n;){var u=t[r];e(u,r,t)&&(c[o++]=u)}return c}function n(t,e){for(var r=-1,n=null==t?0:t.length,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}function o(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];
return t}function c(t,e){for(var r=-1,n=null==t?0:t.length;++r<n;)if(e(t[r],r,t))return true;return false}function u(t){return function(e){return null==e?Bt:e[t]}}function a(t){return function(e){return t(e)}}function i(t){var e=-1,r=Array(t.size);return t.forEach(function(t,n){r[++e]=[n,t]}),r}function f(t){var e=Object;return function(r){return t(e(r))}}function l(t){var e=-1,r=Array(t.size);return t.forEach(function(t){r[++e]=t}),r}function s(){}function b(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){
var n=t[e];this.set(n[0],n[1])}}function h(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function p(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function y(t){var e=-1,r=null==t?0:t.length;for(this.__data__=new p;++e<r;)this.add(t[e])}function j(t){this.size=(this.__data__=new h(t)).size}function _(t,e){var r=Ke(t),n=!r&&Je(t),o=!r&&!n&&Qe(t),c=!r&&!n&&!o&&Ze(t);if(r=r||n||o||c){for(var n=t.length,u=String,a=-1,i=Array(n);++a<n;)i[a]=u(a);
n=i}else n=[];var f,u=n.length;for(f in t)!e&&!ue.call(t,f)||r&&("length"==f||o&&("offset"==f||"parent"==f)||c&&("buffer"==f||"byteLength"==f||"byteOffset"==f)||ct(f,u))||n.push(f);return n}function g(t,e,r){var n=t[e];ue.call(t,e)&&yt(n,r)&&(r!==Bt||e in t)||w(t,e,r)}function v(t,e){for(var r=t.length;r--;)if(yt(t[r][0],e))return r;return-1}function d(t,e){return t&&W(e,zt(e),t)}function A(t,e){return t&&W(e,kt(e),t)}function w(t,e,r){"__proto__"==e&&Ae?Ae(t,e,{configurable:true,enumerable:true,value:r,
writable:true}):t[e]=r}function m(t,r,n,o,c,u){var a,i=1&r,f=2&r,l=4&r;if(n&&(a=c?n(t,o,c,u):n(t)),a!==Bt)return a;if(!vt(t))return t;if(o=Ke(t)){if(a=rt(t),!i)return N(t,a)}else{var s=Ge(t),b="[object Function]"==s||"[object GeneratorFunction]"==s;if(Qe(t))return R(t,i);if("[object Object]"==s||"[object Arguments]"==s||b&&!c){if(a=f||b?{}:typeof t.constructor!="function"||at(t)?{}:Re(ye(t)),!i)return f?q(t,A(a,t)):G(t,d(a,t))}else{if(!Wt[s])return c?t:{};a=nt(t,s,i)}}if(u||(u=new j),c=u.get(t))return c;
if(u.set(t,a),Ye(t))return t.forEach(function(e){a.add(m(e,r,n,e,t,u))}),a;if(Xe(t))return t.forEach(function(e,o){a.set(o,m(e,r,n,o,t,u))}),a;var f=l?f?X:Q:f?kt:zt,h=o?Bt:f(t);return e(h||t,function(e,o){h&&(o=e,e=t[o]),g(a,o,m(e,r,n,o,t,u))}),a}function O(t,e,r,n,c){var u=-1,a=t.length;for(r||(r=ot),c||(c=[]);++u<a;){var i=t[u];0<e&&r(i)?1<e?O(i,e-1,r,n,c):o(c,i):n||(c[c.length]=i)}return c}function S(t,e){e=V(e,t);for(var r=0,n=e.length;null!=t&&r<n;)t=t[lt(e[r++])];return r&&r==n?t:Bt}function z(t,e,r){
return e=e(t),Ke(t)?e:o(e,r(t))}function k(t){if(null==t)t=t===Bt?"[object Undefined]":"[object Null]";else if(de&&de in Object(t)){var e=ue.call(t,de),r=t[de];try{t[de]=Bt;var n=true}catch(t){}var o=ie.call(t);n&&(e?t[de]=r:delete t[de]),t=o}else t=ie.call(t);return t}function x(t){return dt(t)&&"[object Arguments]"==k(t)}function E(t,e,r,n,o){if(t===e)e=true;else if(null==t||null==e||!dt(t)&&!dt(e))e=t!==t&&e!==e;else t:{var c=Ke(t),u=Ke(e),a=c?"[object Array]":Ge(t),i=u?"[object Array]":Ge(e),a="[object Arguments]"==a?"[object Object]":a,i="[object Arguments]"==i?"[object Object]":i,f="[object Object]"==a,u="[object Object]"==i;
if((i=a==i)&&Qe(t)){if(!Qe(e)){e=false;break t}c=true,f=false}if(i&&!f)o||(o=new j),e=c||Ze(t)?J(t,e,r,n,E,o):K(t,e,a,r,n,E,o);else{if(!(1&r)&&(c=f&&ue.call(t,"__wrapped__"),a=u&&ue.call(e,"__wrapped__"),c||a)){t=c?t.value():t,e=a?e.value():e,o||(o=new j),e=E(t,e,r,n,o);break t}if(i)e:if(o||(o=new j),c=1&r,a=Q(t),u=a.length,i=Q(e).length,u==i||c){for(f=u;f--;){var l=a[f];if(!(c?l in e:ue.call(e,l))){e=false;break e}}if((i=o.get(t))&&o.get(e))e=i==e;else{i=true,o.set(t,e),o.set(e,t);for(var s=c;++f<u;){var l=a[f],b=t[l],h=e[l];
if(n)var p=c?n(h,b,l,e,t,o):n(b,h,l,t,e,o);if(p===Bt?b!==h&&!E(b,h,r,n,o):!p){i=false;break}s||(s="constructor"==l)}i&&!s&&(r=t.constructor,n=e.constructor,r!=n&&"constructor"in t&&"constructor"in e&&!(typeof r=="function"&&r instanceof r&&typeof n=="function"&&n instanceof n)&&(i=false)),o.delete(t),o.delete(e),e=i}}else e=false;else e=false}}return e}function F(t){return dt(t)&&"[object Map]"==Ge(t)}function I(t,e){var r=e.length,n=r;if(null==t)return!n;for(t=Object(t);r--;){var o=e[r];if(o[2]?o[1]!==t[o[0]]:!(o[0]in t))return false;
}for(;++r<n;){var o=e[r],c=o[0],u=t[c],a=o[1];if(o[2]){if(u===Bt&&!(c in t))return false}else if(o=new j,void 0===Bt?!E(a,u,3,void 0,o):1)return false}return true}function M(t){return dt(t)&&"[object Set]"==Ge(t)}function U(t){return dt(t)&&gt(t.length)&&!!Nt[k(t)]}function B(t){return typeof t=="function"?t:null==t?Et:typeof t=="object"?Ke(t)?P(t[0],t[1]):D(t):It(t)}function D(t){var e=tt(t);return 1==e.length&&e[0][2]?it(e[0][0],e[0][1]):function(r){return r===t||I(r,e)}}function P(t,e){return ut(t)&&e===e&&!vt(e)?it(lt(t),e):function(r){
var n=Ot(r,t);return n===Bt&&n===e?St(r,t):E(e,n,3)}}function $(t){return function(e){return S(e,t)}}function L(t){if(typeof t=="string")return t;if(Ke(t))return n(t,L)+"";if(wt(t))return Ve?Ve.call(t):"";var e=t+"";return"0"==e&&1/t==-Dt?"-0":e}function C(t,e){e=V(e,t);var r;if(2>e.length)r=t;else{r=e;var n=0,o=-1,c=-1,u=r.length;for(0>n&&(n=-n>u?0:u+n),o=o>u?u:o,0>o&&(o+=u),u=n>o?0:o-n>>>0,n>>>=0,o=Array(u);++c<u;)o[c]=r[c+n];r=S(t,o)}t=r,null==t||delete t[lt(ht(e))]}function V(t,e){return Ke(t)?t:ut(t,e)?[t]:He(mt(t));
}function R(t,e){if(e)return t.slice();var r=t.length,r=pe?pe(r):new t.constructor(r);return t.copy(r),r}function T(t){var e=new t.constructor(t.byteLength);return new he(e).set(new he(t)),e}function N(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e}function W(t,e,r){var n=!r;r||(r={});for(var o=-1,c=e.length;++o<c;){var u=e[o],a=Bt;a===Bt&&(a=t[u]),n?w(r,u,a):g(r,u,a)}return r}function G(t,e){return W(t,Ne(t),e)}function q(t,e){return W(t,We(t),e)}function H(t){return At(t)?Bt:t;
}function J(t,e,r,n,o,u){var a=1&r,i=t.length,f=e.length;if(i!=f&&!(a&&f>i))return false;if((f=u.get(t))&&u.get(e))return f==e;var f=-1,l=true,s=2&r?new y:Bt;for(u.set(t,e),u.set(e,t);++f<i;){var b=t[f],h=e[f];if(n)var p=a?n(h,b,f,e,t,u):n(b,h,f,t,e,u);if(p!==Bt){if(p)continue;l=false;break}if(s){if(!c(e,function(t,e){if(!s.has(e)&&(b===t||o(b,t,r,n,u)))return s.push(e)})){l=false;break}}else if(b!==h&&!o(b,h,r,n,u)){l=false;break}}return u.delete(t),u.delete(e),l}function K(t,e,r,n,o,c,u){switch(r){case"[object DataView]":
if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)break;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":if(t.byteLength!=e.byteLength||!c(new he(t),new he(e)))break;return true;case"[object Boolean]":case"[object Date]":case"[object Number]":return yt(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case"[object Map]":var a=i;case"[object Set]":if(a||(a=l),t.size!=e.size&&!(1&n))break;return(r=u.get(t))?r==e:(n|=2,
u.set(t,e),e=J(a(t),a(e),n,o,c,u),u.delete(t),e);case"[object Symbol]":if(Ce)return Ce.call(t)==Ce.call(e)}return false}function Q(t){return z(t,zt,Ne)}function X(t){return z(t,kt,We)}function Y(){var t=s.iteratee||Ft,t=t===Ft?B:t;return arguments.length?t(arguments[0],arguments[1]):t}function Z(t,e){var r=t.__data__,n=typeof e;return("string"==n||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==e:null===e)?r[typeof e=="string"?"string":"hash"]:r.map}function tt(t){for(var e=zt(t),r=e.length;r--;){
var n=e[r],o=t[n];e[r]=[n,o,o===o&&!vt(o)]}return e}function et(t,e){var r=null==t?Bt:t[e];return(!vt(r)||ae&&ae in r?0:(_t(r)?le:Rt).test(st(r)))?r:Bt}function rt(t){var e=t.length,r=new t.constructor(e);return e&&"string"==typeof t[0]&&ue.call(t,"index")&&(r.index=t.index,r.input=t.input),r}function nt(t,e,r){var n=t.constructor;switch(e){case"[object ArrayBuffer]":return T(t);case"[object Boolean]":case"[object Date]":return new n(+t);case"[object DataView]":return e=r?T(t.buffer):t.buffer,new t.constructor(e,t.byteOffset,t.byteLength);
case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return e=r?T(t.buffer):t.buffer,new t.constructor(e,t.byteOffset,t.length);case"[object Map]":return new n;case"[object Number]":case"[object String]":return new n(t);case"[object RegExp]":return e=new t.constructor(t.source,Vt.exec(t)),e.lastIndex=t.lastIndex,
e;case"[object Set]":return new n;case"[object Symbol]":return Ce?Object(Ce.call(t)):{}}}function ot(t){return Ke(t)||Je(t)||!!(ve&&t&&t[ve])}function ct(t,e){var r=typeof t;return e=null==e?9007199254740991:e,!!e&&("number"==r||"symbol"!=r&&Tt.test(t))&&-1<t&&0==t%1&&t<e}function ut(t,e){if(Ke(t))return false;var r=typeof t;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!wt(t))||($t.test(t)||!Pt.test(t)||null!=e&&t in Object(e))}function at(t){var e=t&&t.constructor;return t===(typeof e=="function"&&e.prototype||ne);
}function it(t,e){return function(r){return null!=r&&(r[t]===e&&(e!==Bt||t in Object(r)))}}function ft(e,r,n){return r=Se(r===Bt?e.length-1:r,0),function(){for(var o=arguments,c=-1,u=Se(o.length-r,0),a=Array(u);++c<u;)a[c]=o[r+c];for(c=-1,u=Array(r+1);++c<r;)u[c]=o[c];return u[r]=n(a),t(e,this,u)}}function lt(t){if(typeof t=="string"||wt(t))return t;var e=t+"";return"0"==e&&1/t==-Dt?"-0":e}function st(t){if(null!=t){try{return ce.call(t)}catch(t){}return t+""}return""}function bt(t){return(null==t?0:t.length)?O(t,1):[];
}function ht(t){var e=null==t?0:t.length;return e?t[e-1]:Bt}function pt(t,e){function r(){var n=arguments,o=e?e.apply(this,n):n[0],c=r.cache;return c.has(o)?c.get(o):(n=t.apply(this,n),r.cache=c.set(o,n)||c,n)}if(typeof t!="function"||null!=e&&typeof e!="function")throw new TypeError("Expected a function");return r.cache=new(pt.Cache||p),r}function yt(t,e){return t===e||t!==t&&e!==e}function jt(t){return null!=t&&gt(t.length)&&!_t(t)}function _t(t){return!!vt(t)&&(t=k(t),"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t);
}function gt(t){return typeof t=="number"&&-1<t&&0==t%1&&9007199254740991>=t}function vt(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function dt(t){return null!=t&&typeof t=="object"}function At(t){return!(!dt(t)||"[object Object]"!=k(t))&&(t=ye(t),null===t||(t=ue.call(t,"constructor")&&t.constructor,typeof t=="function"&&t instanceof t&&ce.call(t)==fe))}function wt(t){return typeof t=="symbol"||dt(t)&&"[object Symbol]"==k(t)}function mt(t){return null==t?"":L(t)}function Ot(t,e,r){
return t=null==t?Bt:S(t,e),t===Bt?r:t}function St(t,e){var r;if(r=null!=t){r=t;var n;n=V(e,r);for(var o=-1,c=n.length,u=false;++o<c;){var a=lt(n[o]);if(!(u=null!=r&&null!=r&&a in Object(r)))break;r=r[a]}u||++o!=c?r=u:(c=null==r?0:r.length,r=!!c&&gt(c)&&ct(a,c)&&(Ke(r)||Je(r)))}return r}function zt(t){if(jt(t))t=_(t);else if(at(t)){var e,r=[];for(e in Object(t))ue.call(t,e)&&"constructor"!=e&&r.push(e);t=r}else t=Oe(t);return t}function kt(t){if(jt(t))t=_(t,true);else if(vt(t)){var e,r=at(t),n=[];for(e in t)("constructor"!=e||!r&&ue.call(t,e))&&n.push(e);
t=n}else{if(e=[],null!=t)for(r in Object(t))e.push(r);t=e}return t}function xt(t){return function(){return t}}function Et(t){return t}function Ft(t){return B(typeof t=="function"?t:m(t,1))}function It(t){return ut(t)?u(lt(t)):$(t)}function Mt(){return[]}function Ut(){return false}var Bt,Dt=1/0,Pt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,$t=/^\w*$/,Lt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ct=/\\(\\)?/g,Vt=/\w*$/,Rt=/^\[object .+?Constructor\]$/,Tt=/^(?:0|[1-9]\d*)$/,Nt={};
Nt["[object Float32Array]"]=Nt["[object Float64Array]"]=Nt["[object Int8Array]"]=Nt["[object Int16Array]"]=Nt["[object Int32Array]"]=Nt["[object Uint8Array]"]=Nt["[object Uint8ClampedArray]"]=Nt["[object Uint16Array]"]=Nt["[object Uint32Array]"]=true,Nt["[object Arguments]"]=Nt["[object Array]"]=Nt["[object ArrayBuffer]"]=Nt["[object Boolean]"]=Nt["[object DataView]"]=Nt["[object Date]"]=Nt["[object Error]"]=Nt["[object Function]"]=Nt["[object Map]"]=Nt["[object Number]"]=Nt["[object Object]"]=Nt["[object RegExp]"]=Nt["[object Set]"]=Nt["[object String]"]=Nt["[object WeakMap]"]=false;
var Wt={};Wt["[object Arguments]"]=Wt["[object Array]"]=Wt["[object ArrayBuffer]"]=Wt["[object DataView]"]=Wt["[object Boolean]"]=Wt["[object Date]"]=Wt["[object Float32Array]"]=Wt["[object Float64Array]"]=Wt["[object Int8Array]"]=Wt["[object Int16Array]"]=Wt["[object Int32Array]"]=Wt["[object Map]"]=Wt["[object Number]"]=Wt["[object Object]"]=Wt["[object RegExp]"]=Wt["[object Set]"]=Wt["[object String]"]=Wt["[object Symbol]"]=Wt["[object Uint8Array]"]=Wt["[object Uint8ClampedArray]"]=Wt["[object Uint16Array]"]=Wt["[object Uint32Array]"]=true,
Wt["[object Error]"]=Wt["[object Function]"]=Wt["[object WeakMap]"]=false;var Gt,qt=typeof global=="object"&&global&&global.Object===Object&&global,Ht=typeof self=="object"&&self&&self.Object===Object&&self,Jt=qt||Ht||Function("return this")(),Kt= true&&exports&&!exports.nodeType&&exports,Qt=Kt&&typeof module=="object"&&module&&!module.nodeType&&module,Xt=Qt&&Qt.exports===Kt,Yt=Xt&&qt.process;t:{try{Gt=Yt&&Yt.binding&&Yt.binding("util");break t}catch(t){}Gt=void 0}var Zt=Gt&&Gt.isMap,te=Gt&&Gt.isSet,ee=Gt&&Gt.isTypedArray,re=Array.prototype,ne=Object.prototype,oe=Jt["__core-js_shared__"],ce=Function.prototype.toString,ue=ne.hasOwnProperty,ae=function(){
var t=/[^.]+$/.exec(oe&&oe.keys&&oe.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),ie=ne.toString,fe=ce.call(Object),le=RegExp("^"+ce.call(ue).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),se=Xt?Jt.Buffer:Bt,be=Jt.Symbol,he=Jt.Uint8Array,pe=se?se.a:Bt,ye=f(Object.getPrototypeOf),je=Object.create,_e=ne.propertyIsEnumerable,ge=re.splice,ve=be?be.isConcatSpreadable:Bt,de=be?be.toStringTag:Bt,Ae=function(){try{var t=et(Object,"defineProperty");
return t({},"",{}),t}catch(t){}}(),we=Object.getOwnPropertySymbols,me=se?se.isBuffer:Bt,Oe=f(Object.keys),Se=Math.max,ze=Date.now,ke=et(Jt,"DataView"),xe=et(Jt,"Map"),Ee=et(Jt,"Promise"),Fe=et(Jt,"Set"),Ie=et(Jt,"WeakMap"),Me=et(Object,"create"),Ue=st(ke),Be=st(xe),De=st(Ee),Pe=st(Fe),$e=st(Ie),Le=be?be.prototype:Bt,Ce=Le?Le.valueOf:Bt,Ve=Le?Le.toString:Bt,Re=function(){function t(){}return function(e){return vt(e)?je?je(e):(t.prototype=e,e=new t,t.prototype=Bt,e):{}}}();b.prototype.clear=function(){
this.__data__=Me?Me(null):{},this.size=0},b.prototype.delete=function(t){return t=this.has(t)&&delete this.__data__[t],this.size-=t?1:0,t},b.prototype.get=function(t){var e=this.__data__;return Me?(t=e[t],"__lodash_hash_undefined__"===t?Bt:t):ue.call(e,t)?e[t]:Bt},b.prototype.has=function(t){var e=this.__data__;return Me?e[t]!==Bt:ue.call(e,t)},b.prototype.set=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=Me&&e===Bt?"__lodash_hash_undefined__":e,this},h.prototype.clear=function(){
this.__data__=[],this.size=0},h.prototype.delete=function(t){var e=this.__data__;return t=v(e,t),!(0>t)&&(t==e.length-1?e.pop():ge.call(e,t,1),--this.size,true)},h.prototype.get=function(t){var e=this.__data__;return t=v(e,t),0>t?Bt:e[t][1]},h.prototype.has=function(t){return-1<v(this.__data__,t)},h.prototype.set=function(t,e){var r=this.__data__,n=v(r,t);return 0>n?(++this.size,r.push([t,e])):r[n][1]=e,this},p.prototype.clear=function(){this.size=0,this.__data__={hash:new b,map:new(xe||h),string:new b
}},p.prototype.delete=function(t){return t=Z(this,t).delete(t),this.size-=t?1:0,t},p.prototype.get=function(t){return Z(this,t).get(t)},p.prototype.has=function(t){return Z(this,t).has(t)},p.prototype.set=function(t,e){var r=Z(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this},y.prototype.add=y.prototype.push=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},y.prototype.has=function(t){return this.__data__.has(t)},j.prototype.clear=function(){this.__data__=new h,
this.size=0},j.prototype.delete=function(t){var e=this.__data__;return t=e.delete(t),this.size=e.size,t},j.prototype.get=function(t){return this.__data__.get(t)},j.prototype.has=function(t){return this.__data__.has(t)},j.prototype.set=function(t,e){var r=this.__data__;if(r instanceof h){var n=r.__data__;if(!xe||199>n.length)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new p(n)}return r.set(t,e),this.size=r.size,this};var Te=Ae?function(t,e){return Ae(t,"toString",{configurable:true,
enumerable:false,value:xt(e),writable:true})}:Et,Ne=we?function(t){return null==t?[]:(t=Object(t),r(we(t),function(e){return _e.call(t,e)}))}:Mt,We=we?function(t){for(var e=[];t;)o(e,Ne(t)),t=ye(t);return e}:Mt,Ge=k;(ke&&"[object DataView]"!=Ge(new ke(new ArrayBuffer(1)))||xe&&"[object Map]"!=Ge(new xe)||Ee&&"[object Promise]"!=Ge(Ee.resolve())||Fe&&"[object Set]"!=Ge(new Fe)||Ie&&"[object WeakMap]"!=Ge(new Ie))&&(Ge=function(t){var e=k(t);if(t=(t="[object Object]"==e?t.constructor:Bt)?st(t):"")switch(t){
case Ue:return"[object DataView]";case Be:return"[object Map]";case De:return"[object Promise]";case Pe:return"[object Set]";case $e:return"[object WeakMap]"}return e});var qe=function(t){var e=0,r=0;return function(){var n=ze(),o=16-(n-r);if(r=n,0<o){if(800<=++e)return arguments[0]}else e=0;return t.apply(Bt,arguments)}}(Te),He=function(t){t=pt(t,function(t){return 500===e.size&&e.clear(),t});var e=t.cache;return t}(function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Lt,function(t,r,n,o){
e.push(n?o.replace(Ct,"$1"):r||t)}),e});pt.Cache=p;var Je=x(function(){return arguments}())?x:function(t){return dt(t)&&ue.call(t,"callee")&&!_e.call(t,"callee")},Ke=Array.isArray,Qe=me||Ut,Xe=Zt?a(Zt):F,Ye=te?a(te):M,Ze=ee?a(ee):U,tr=function(t,e){return qe(ft(t,e,Et),t+"")}(function(t,e){t=Object(t);var r,n=-1,o=e.length,c=2<o?e[2]:Bt;if(r=c){r=e[0];var u=e[1];if(vt(c)){var a=typeof u;r=!!("number"==a?jt(c)&&ct(u,c.length):"string"==a&&u in c)&&yt(c[u],r)}else r=false}for(r&&(o=1);++n<o;)for(c=e[n],
r=kt(c),u=-1,a=r.length;++u<a;){var i=r[u],f=t[i];(f===Bt||yt(f,ne[i])&&!ue.call(t,i))&&(t[i]=c[i])}return t}),er=function(t){return qe(ft(t,Bt,bt),t+"")}(function(t,e){var r={};if(null==t)return r;var o=false;e=n(e,function(e){return e=V(e,t),o||(o=1<e.length),e}),W(t,X(t),r),o&&(r=m(r,7,H));for(var c=e.length;c--;)C(r,e[c]);return r});s.constant=xt,s.defaults=tr,s.flatten=bt,s.iteratee=Ft,s.keys=zt,s.keysIn=kt,s.memoize=pt,s.omit=er,s.property=It,s.remove=function(t,e){var r=[];if(!t||!t.length)return r;
var n=-1,o=[],c=t.length;for(e=Y(e,3);++n<c;){var u=t[n];e(u,n,t)&&(r.push(u),o.push(n))}for(n=t?o.length:0,c=n-1;n--;)if(u=o[n],n==c||u!==a){var a=u;ct(u)?ge.call(t,u,1):C(t,u)}return r},s.eq=yt,s.get=Ot,s.hasIn=St,s.identity=Et,s.isArguments=Je,s.isArray=Ke,s.isArrayLike=jt,s.isBuffer=Qe,s.isFunction=_t,s.isLength=gt,s.isMap=Xe,s.isObject=vt,s.isObjectLike=dt,s.isPlainObject=At,s.isSet=Ye,s.isSymbol=wt,s.isTypedArray=Ze,s.last=ht,s.stubArray=Mt,s.stubFalse=Ut,s.toString=mt,s.VERSION="4.17.5",Qt&&((Qt.exports=s)._=s,
Kt._=s)}).call(this);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9BbGVwaEJldC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vQWxlcGhCZXQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQWxlcGhCZXQvLi9ub2RlX21vZHVsZXMvYmFzaWwuanMvYnVpbGQvYmFzaWwuanMiLCJ3ZWJwYWNrOi8vQWxlcGhCZXQvLi9ub2RlX21vZHVsZXMvY3J5cHRvLWpzL2NvcmUuanMiLCJ3ZWJwYWNrOi8vQWxlcGhCZXQvLi9ub2RlX21vZHVsZXMvY3J5cHRvLWpzL3NoYTEuanMiLCJ3ZWJwYWNrOi8vQWxlcGhCZXQvKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovL0FsZXBoQmV0Lyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly9BbGVwaEJldC8uL3NyYy9hZGFwdGVycy5jb2ZmZWUiLCJ3ZWJwYWNrOi8vQWxlcGhCZXQvLi9zcmMvYWxlcGhiZXQuY29mZmVlIiwid2VicGFjazovL0FsZXBoQmV0Ly4vc3JjL29wdGlvbnMuY29mZmVlIiwid2VicGFjazovL0FsZXBoQmV0Ly4vc3JjL3N0b3JhZ2UuY29mZmVlIiwid2VicGFjazovL0FsZXBoQmV0Ly4vc3JjL3V0aWxzLmNvZmZlZSIsIndlYnBhY2s6Ly9BbGVwaEJldC8uL3ZlbmRvci9sb2Rhc2guY3VzdG9tLm1pbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztR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Y2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJBbGVwaEJldFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJBbGVwaEJldFwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYWxlcGhiZXQuY29mZmVlXCIpO1xuIiwiKGZ1bmN0aW9uICgpIHtcblx0Ly8gQmFzaWxcblx0dmFyIEJhc2lsID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblx0XHRyZXR1cm4gQmFzaWwudXRpbHMuZXh0ZW5kKHt9LCBCYXNpbC5wbHVnaW5zLCBuZXcgQmFzaWwuU3RvcmFnZSgpLmluaXQob3B0aW9ucykpO1xuXHR9O1xuXG5cdC8vIFZlcnNpb25cblx0QmFzaWwudmVyc2lvbiA9ICcwLjQuMTAnO1xuXG5cdC8vIFV0aWxzXG5cdEJhc2lsLnV0aWxzID0ge1xuXHRcdGV4dGVuZDogZnVuY3Rpb24gKCkge1xuXHRcdFx0dmFyIGRlc3RpbmF0aW9uID0gdHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gJ29iamVjdCcgPyBhcmd1bWVudHNbMF0gOiB7fTtcblx0XHRcdGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChhcmd1bWVudHNbaV0gJiYgdHlwZW9mIGFyZ3VtZW50c1tpXSA9PT0gJ29iamVjdCcpXG5cdFx0XHRcdFx0Zm9yICh2YXIgcHJvcGVydHkgaW4gYXJndW1lbnRzW2ldKVxuXHRcdFx0XHRcdFx0ZGVzdGluYXRpb25bcHJvcGVydHldID0gYXJndW1lbnRzW2ldW3Byb3BlcnR5XTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBkZXN0aW5hdGlvbjtcblx0XHR9LFxuXHRcdGVhY2g6IGZ1bmN0aW9uIChvYmosIGZuSXRlcmF0b3IsIGNvbnRleHQpIHtcblx0XHRcdGlmICh0aGlzLmlzQXJyYXkob2JqKSkge1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG9iai5sZW5ndGg7IGkrKylcblx0XHRcdFx0XHRpZiAoZm5JdGVyYXRvci5jYWxsKGNvbnRleHQsIG9ialtpXSwgaSkgPT09IGZhbHNlKSByZXR1cm47XG5cdFx0XHR9IGVsc2UgaWYgKG9iaikge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gb2JqKVxuXHRcdFx0XHRcdGlmIChmbkl0ZXJhdG9yLmNhbGwoY29udGV4dCwgb2JqW2tleV0sIGtleSkgPT09IGZhbHNlKSByZXR1cm47XG5cdFx0XHR9XG5cdFx0fSxcblx0XHR0cnlFYWNoOiBmdW5jdGlvbiAob2JqLCBmbkl0ZXJhdG9yLCBmbkVycm9yLCBjb250ZXh0KSB7XG5cdFx0XHR0aGlzLmVhY2gob2JqLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHJldHVybiBmbkl0ZXJhdG9yLmNhbGwoY29udGV4dCwgdmFsdWUsIGtleSk7XG5cdFx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdFx0aWYgKHRoaXMuaXNGdW5jdGlvbihmbkVycm9yKSkge1xuXHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0Zm5FcnJvci5jYWxsKGNvbnRleHQsIHZhbHVlLCBrZXksIGVycm9yKTtcblx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcyk7XG5cdFx0fSxcblx0XHRyZWdpc3RlclBsdWdpbjogZnVuY3Rpb24gKG1ldGhvZHMpIHtcblx0XHRcdEJhc2lsLnBsdWdpbnMgPSB0aGlzLmV4dGVuZChtZXRob2RzLCBCYXNpbC5wbHVnaW5zKTtcblx0XHR9LFxuXHRcdGdldFR5cGVPZjogZnVuY3Rpb24gKG9iaikge1xuXHRcdFx0aWYgKHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnIHx8IG9iaiA9PT0gbnVsbClcblx0XHRcdFx0cmV0dXJuICcnICsgb2JqO1xuXHRcdFx0cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopLnJlcGxhY2UoL15cXFtvYmplY3RcXHMoLiopXFxdJC8sIGZ1bmN0aW9uICgkMCwgJDEpIHsgcmV0dXJuICQxLnRvTG93ZXJDYXNlKCk7IH0pO1xuXHRcdH1cblx0fTtcblxuXHQvLyBBZGQgc29tZSBpc1R5cGUgbWV0aG9kczogaXNBcmd1bWVudHMsIGlzQm9vbGVhbiwgaXNGdW5jdGlvbiwgaXNTdHJpbmcsIGlzQXJyYXksIGlzTnVtYmVyLCBpc0RhdGUsIGlzUmVnRXhwLCBpc1VuZGVmaW5lZCwgaXNOdWxsLlxuXHR2YXIgdHlwZXMgPSBbJ0FyZ3VtZW50cycsICdCb29sZWFuJywgJ0Z1bmN0aW9uJywgJ1N0cmluZycsICdBcnJheScsICdOdW1iZXInLCAnRGF0ZScsICdSZWdFeHAnLCAnVW5kZWZpbmVkJywgJ051bGwnXTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0eXBlcy5sZW5ndGg7IGkrKykge1xuXHRcdEJhc2lsLnV0aWxzWydpcycgKyB0eXBlc1tpXV0gPSAoZnVuY3Rpb24gKHR5cGUpIHtcblx0XHRcdHJldHVybiBmdW5jdGlvbiAob2JqKSB7XG5cdFx0XHRcdHJldHVybiBCYXNpbC51dGlscy5nZXRUeXBlT2Yob2JqKSA9PT0gdHlwZS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0fTtcblx0XHR9KSh0eXBlc1tpXSk7XG5cdH1cblxuXHQvLyBQbHVnaW5zXG5cdEJhc2lsLnBsdWdpbnMgPSB7fTtcblxuXHQvLyBPcHRpb25zXG5cdEJhc2lsLm9wdGlvbnMgPSBCYXNpbC51dGlscy5leHRlbmQoe1xuXHRcdG5hbWVzcGFjZTogJ2I0NWkxJyxcblx0XHRzdG9yYWdlczogWydsb2NhbCcsICdjb29raWUnLCAnc2Vzc2lvbicsICdtZW1vcnknXSxcblx0XHRleHBpcmVEYXlzOiAzNjUsXG5cdFx0a2V5RGVsaW1pdGVyOiAnLidcblx0fSwgd2luZG93LkJhc2lsID8gd2luZG93LkJhc2lsLm9wdGlvbnMgOiB7fSk7XG5cblx0Ly8gU3RvcmFnZVxuXHRCYXNpbC5TdG9yYWdlID0gZnVuY3Rpb24gKCkge1xuXHRcdHZhciBfc2FsdCA9ICdiNDVpMScgKyAoTWF0aC5yYW5kb20oKSArIDEpXG5cdFx0XHRcdC50b1N0cmluZygzNilcblx0XHRcdFx0LnN1YnN0cmluZyg3KSxcblx0XHRcdF9zdG9yYWdlcyA9IHt9LFxuXHRcdFx0X2lzVmFsaWRLZXkgPSBmdW5jdGlvbiAoa2V5KSB7XG5cdFx0XHRcdHZhciB0eXBlID0gQmFzaWwudXRpbHMuZ2V0VHlwZU9mKGtleSk7XG5cdFx0XHRcdHJldHVybiAodHlwZSA9PT0gJ3N0cmluZycgJiYga2V5KSB8fCB0eXBlID09PSAnbnVtYmVyJyB8fCB0eXBlID09PSAnYm9vbGVhbic7XG5cdFx0XHR9LFxuXHRcdFx0X3RvU3RvcmFnZXNBcnJheSA9IGZ1bmN0aW9uIChzdG9yYWdlcykge1xuXHRcdFx0XHRpZiAoQmFzaWwudXRpbHMuaXNBcnJheShzdG9yYWdlcykpXG5cdFx0XHRcdFx0cmV0dXJuIHN0b3JhZ2VzO1xuXHRcdFx0XHRyZXR1cm4gQmFzaWwudXRpbHMuaXNTdHJpbmcoc3RvcmFnZXMpID8gW3N0b3JhZ2VzXSA6IFtdO1xuXHRcdFx0fSxcblx0XHRcdF90b1N0b3JlZEtleSA9IGZ1bmN0aW9uIChuYW1lc3BhY2UsIHBhdGgsIGRlbGltaXRlcikge1xuXHRcdFx0XHR2YXIga2V5ID0gJyc7XG5cdFx0XHRcdGlmIChfaXNWYWxpZEtleShwYXRoKSkge1xuXHRcdFx0XHRcdGtleSArPSBwYXRoO1xuXHRcdFx0XHR9IGVsc2UgaWYgKEJhc2lsLnV0aWxzLmlzQXJyYXkocGF0aCkpIHtcblx0XHRcdFx0XHRwYXRoID0gQmFzaWwudXRpbHMuaXNGdW5jdGlvbihwYXRoLmZpbHRlcikgPyBwYXRoLmZpbHRlcihfaXNWYWxpZEtleSkgOiBwYXRoO1xuXHRcdFx0XHRcdGtleSA9IHBhdGguam9pbihkZWxpbWl0ZXIpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBrZXkgJiYgX2lzVmFsaWRLZXkobmFtZXNwYWNlKSA/IG5hbWVzcGFjZSArIGRlbGltaXRlciArIGtleSA6IGtleTtcbiBcdFx0XHR9LFxuXHRcdFx0X3RvS2V5TmFtZSA9IGZ1bmN0aW9uIChuYW1lc3BhY2UsIGtleSwgZGVsaW1pdGVyKSB7XG5cdFx0XHRcdGlmICghX2lzVmFsaWRLZXkobmFtZXNwYWNlKSlcblx0XHRcdFx0XHRyZXR1cm4ga2V5O1xuXHRcdFx0XHRyZXR1cm4ga2V5LnJlcGxhY2UobmV3IFJlZ0V4cCgnXicgKyBuYW1lc3BhY2UgKyBkZWxpbWl0ZXIpLCAnJyk7XG5cdFx0XHR9LFxuXHRcdFx0X3RvU3RvcmVkVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRcdFx0cmV0dXJuIEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcblx0XHRcdH0sXG5cdFx0XHRfZnJvbVN0b3JlZFZhbHVlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0XHRcdHJldHVybiB2YWx1ZSA/IEpTT04ucGFyc2UodmFsdWUpIDogbnVsbDtcblx0XHRcdH07XG5cblx0XHQvLyBIVE1MNSB3ZWIgc3RvcmFnZSBpbnRlcmZhY2Vcblx0XHR2YXIgd2ViU3RvcmFnZUludGVyZmFjZSA9IHtcblx0XHRcdGVuZ2luZTogbnVsbCxcblx0XHRcdGNoZWNrOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0d2luZG93W3RoaXMuZW5naW5lXS5zZXRJdGVtKF9zYWx0LCB0cnVlKTtcblx0XHRcdFx0XHR3aW5kb3dbdGhpcy5lbmdpbmVdLnJlbW92ZUl0ZW0oX3NhbHQpO1xuXHRcdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fSxcblx0XHRcdHNldDogZnVuY3Rpb24gKGtleSwgdmFsdWUsIG9wdGlvbnMpIHtcblx0XHRcdFx0aWYgKCFrZXkpXG5cdFx0XHRcdFx0dGhyb3cgRXJyb3IoJ2ludmFsaWQga2V5Jyk7XG5cdFx0XHRcdHdpbmRvd1t0aGlzLmVuZ2luZV0uc2V0SXRlbShrZXksIHZhbHVlKTtcblx0XHRcdH0sXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdFx0cmV0dXJuIHdpbmRvd1t0aGlzLmVuZ2luZV0uZ2V0SXRlbShrZXkpO1xuXHRcdFx0fSxcblx0XHRcdHJlbW92ZTogZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0XHR3aW5kb3dbdGhpcy5lbmdpbmVdLnJlbW92ZUl0ZW0oa2V5KTtcblx0XHRcdH0sXG5cdFx0XHRyZXNldDogZnVuY3Rpb24gKG5hbWVzcGFjZSkge1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMCwga2V5OyBpIDwgd2luZG93W3RoaXMuZW5naW5lXS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGtleSA9IHdpbmRvd1t0aGlzLmVuZ2luZV0ua2V5KGkpO1xuXHRcdFx0XHRcdGlmICghbmFtZXNwYWNlIHx8IGtleS5pbmRleE9mKG5hbWVzcGFjZSkgPT09IDApIHtcblx0XHRcdFx0XHRcdHRoaXMucmVtb3ZlKGtleSk7XG5cdFx0XHRcdFx0XHRpLS07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0a2V5czogZnVuY3Rpb24gKG5hbWVzcGFjZSwgZGVsaW1pdGVyKSB7XG5cdFx0XHRcdHZhciBrZXlzID0gW107XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwLCBrZXk7IGkgPCB3aW5kb3dbdGhpcy5lbmdpbmVdLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0a2V5ID0gd2luZG93W3RoaXMuZW5naW5lXS5rZXkoaSk7XG5cdFx0XHRcdFx0aWYgKCFuYW1lc3BhY2UgfHwga2V5LmluZGV4T2YobmFtZXNwYWNlKSA9PT0gMClcblx0XHRcdFx0XHRcdGtleXMucHVzaChfdG9LZXlOYW1lKG5hbWVzcGFjZSwga2V5LCBkZWxpbWl0ZXIpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4ga2V5cztcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0Ly8gbG9jYWwgc3RvcmFnZVxuXHRcdF9zdG9yYWdlcy5sb2NhbCA9IEJhc2lsLnV0aWxzLmV4dGVuZCh7fSwgd2ViU3RvcmFnZUludGVyZmFjZSwge1xuXHRcdFx0ZW5naW5lOiAnbG9jYWxTdG9yYWdlJ1xuXHRcdH0pO1xuXHRcdC8vIHNlc3Npb24gc3RvcmFnZVxuXHRcdF9zdG9yYWdlcy5zZXNzaW9uID0gQmFzaWwudXRpbHMuZXh0ZW5kKHt9LCB3ZWJTdG9yYWdlSW50ZXJmYWNlLCB7XG5cdFx0XHRlbmdpbmU6ICdzZXNzaW9uU3RvcmFnZSdcblx0XHR9KTtcblxuXHRcdC8vIG1lbW9yeSBzdG9yYWdlXG5cdFx0X3N0b3JhZ2VzLm1lbW9yeSA9IHtcblx0XHRcdF9oYXNoOiB7fSxcblx0XHRcdGNoZWNrOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fSxcblx0XHRcdHNldDogZnVuY3Rpb24gKGtleSwgdmFsdWUsIG9wdGlvbnMpIHtcblx0XHRcdFx0aWYgKCFrZXkpXG5cdFx0XHRcdFx0dGhyb3cgRXJyb3IoJ2ludmFsaWQga2V5Jyk7XG5cdFx0XHRcdHRoaXMuX2hhc2hba2V5XSA9IHZhbHVlO1xuXHRcdFx0fSxcblx0XHRcdGdldDogZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5faGFzaFtrZXldIHx8IG51bGw7XG5cdFx0XHR9LFxuXHRcdFx0cmVtb3ZlOiBmdW5jdGlvbiAoa2V5KSB7XG5cdFx0XHRcdGRlbGV0ZSB0aGlzLl9oYXNoW2tleV07XG5cdFx0XHR9LFxuXHRcdFx0cmVzZXQ6IGZ1bmN0aW9uIChuYW1lc3BhY2UpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIHRoaXMuX2hhc2gpIHtcblx0XHRcdFx0XHRpZiAoIW5hbWVzcGFjZSB8fCBrZXkuaW5kZXhPZihuYW1lc3BhY2UpID09PSAwKVxuXHRcdFx0XHRcdFx0dGhpcy5yZW1vdmUoa2V5KTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGtleXM6IGZ1bmN0aW9uIChuYW1lc3BhY2UsIGRlbGltaXRlcikge1xuXHRcdFx0XHR2YXIga2V5cyA9IFtdO1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gdGhpcy5faGFzaClcblx0XHRcdFx0XHRpZiAoIW5hbWVzcGFjZSB8fCBrZXkuaW5kZXhPZihuYW1lc3BhY2UpID09PSAwKVxuXHRcdFx0XHRcdFx0a2V5cy5wdXNoKF90b0tleU5hbWUobmFtZXNwYWNlLCBrZXksIGRlbGltaXRlcikpO1xuXHRcdFx0XHRyZXR1cm4ga2V5cztcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0Ly8gY29va2llIHN0b3JhZ2Vcblx0XHRfc3RvcmFnZXMuY29va2llID0ge1xuXHRcdFx0Y2hlY2s6IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cdFx0XHRcdGlmICghbmF2aWdhdG9yLmNvb2tpZUVuYWJsZWQpXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZiAod2luZG93LnNlbGYgIT09IHdpbmRvdy50b3ApIHtcblx0XHRcdFx0XHQvLyB3ZSBuZWVkIHRvIGNoZWNrIHRoaXJkLXBhcnR5IGNvb2tpZXM7XG5cdFx0XHRcdFx0dmFyIGNvb2tpZSA9ICd0aGlyZHBhcnR5LmNoZWNrPScgKyBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwKTtcblx0XHRcdFx0XHRkb2N1bWVudC5jb29raWUgPSBjb29raWUgKyAnOyBwYXRoPS8nO1xuXHRcdFx0XHRcdHJldHVybiBkb2N1bWVudC5jb29raWUuaW5kZXhPZihjb29raWUpICE9PSAtMTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBpZiBjb29raWUgc2VjdXJlIGFjdGl2YXRlZCwgZW5zdXJlIGl0IHdvcmtzIChub3QgdGhlIGNhc2UgaWYgd2UgYXJlIGluIGh0dHAgb25seSlcblx0XHRcdFx0aWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5zZWN1cmUpIHtcblx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0dGhpcy5zZXQoX3NhbHQsIF9zYWx0LCBvcHRpb25zKTtcblx0XHRcdFx0XHRcdHZhciBoYXNTZWN1cmVseVBlcnNpdGVkID0gdGhpcy5nZXQoX3NhbHQpID09PSBfc2FsdDtcblx0XHRcdFx0XHRcdHRoaXMucmVtb3ZlKF9zYWx0KTtcblx0XHRcdFx0XHRcdHJldHVybiBoYXNTZWN1cmVseVBlcnNpdGVkO1xuXHRcdFx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fSxcblx0XHRcdHNldDogZnVuY3Rpb24gKGtleSwgdmFsdWUsIG9wdGlvbnMpIHtcblx0XHRcdFx0aWYgKCF0aGlzLmNoZWNrKCkpXG5cdFx0XHRcdFx0dGhyb3cgRXJyb3IoJ2Nvb2tpZXMgYXJlIGRpc2FibGVkJyk7XG5cdFx0XHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXHRcdFx0XHRpZiAoIWtleSlcblx0XHRcdFx0XHR0aHJvdyBFcnJvcignaW52YWxpZCBrZXknKTtcblx0XHRcdFx0dmFyIGNvb2tpZSA9IGVuY29kZVVSSUNvbXBvbmVudChrZXkpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcblx0XHRcdFx0Ly8gaGFuZGxlIGV4cGlyYXRpb24gZGF5c1xuXHRcdFx0XHRpZiAob3B0aW9ucy5leHBpcmVEYXlzKSB7XG5cdFx0XHRcdFx0dmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xuXHRcdFx0XHRcdGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSArIChvcHRpb25zLmV4cGlyZURheXMgKiAyNCAqIDYwICogNjAgKiAxMDAwKSk7XG5cdFx0XHRcdFx0Y29va2llICs9ICc7IGV4cGlyZXM9JyArIGRhdGUudG9HTVRTdHJpbmcoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBoYW5kbGUgZG9tYWluXG5cdFx0XHRcdGlmIChvcHRpb25zLmRvbWFpbiAmJiBvcHRpb25zLmRvbWFpbiAhPT0gZG9jdW1lbnQuZG9tYWluKSB7XG5cdFx0XHRcdFx0dmFyIF9kb21haW4gPSBvcHRpb25zLmRvbWFpbi5yZXBsYWNlKC9eXFwuLywgJycpO1xuXHRcdFx0XHRcdGlmIChkb2N1bWVudC5kb21haW4uaW5kZXhPZihfZG9tYWluKSA9PT0gLTEgfHwgX2RvbWFpbi5zcGxpdCgnLicpLmxlbmd0aCA8PSAxKVxuXHRcdFx0XHRcdFx0dGhyb3cgRXJyb3IoJ2ludmFsaWQgZG9tYWluJyk7XG5cdFx0XHRcdFx0Y29va2llICs9ICc7IGRvbWFpbj0nICsgb3B0aW9ucy5kb21haW47XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gaGFuZGxlIHNlY3VyZVxuXHRcdFx0XHRpZiAob3B0aW9ucy5zZWN1cmUgPT09IHRydWUpIHtcblx0XHRcdFx0XHRjb29raWUgKz0gJzsgU2VjdXJlJztcblx0XHRcdFx0fVxuXHRcdFx0XHRkb2N1bWVudC5jb29raWUgPSBjb29raWUgKyAnOyBwYXRoPS8nO1xuXHRcdFx0fSxcblx0XHRcdGdldDogZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0XHRpZiAoIXRoaXMuY2hlY2soKSlcblx0XHRcdFx0XHR0aHJvdyBFcnJvcignY29va2llcyBhcmUgZGlzYWJsZWQnKTtcblx0XHRcdFx0dmFyIGVuY29kZWRLZXkgPSBlbmNvZGVVUklDb21wb25lbnQoa2V5KTtcblx0XHRcdFx0dmFyIGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUgPyBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKSA6IFtdO1xuXHRcdFx0XHQvLyByZXRyaWV2ZSBsYXN0IHVwZGF0ZWQgY29va2llIGZpcnN0XG5cdFx0XHRcdGZvciAodmFyIGkgPSBjb29raWVzLmxlbmd0aCAtIDEsIGNvb2tpZTsgaSA+PSAwOyBpLS0pIHtcblx0XHRcdFx0XHRjb29raWUgPSBjb29raWVzW2ldLnJlcGxhY2UoL15cXHMqLywgJycpO1xuXHRcdFx0XHRcdGlmIChjb29raWUuaW5kZXhPZihlbmNvZGVkS2V5ICsgJz0nKSA9PT0gMClcblx0XHRcdFx0XHRcdHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoY29va2llLnN1YnN0cmluZyhlbmNvZGVkS2V5Lmxlbmd0aCArIDEsIGNvb2tpZS5sZW5ndGgpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH0sXG5cdFx0XHRyZW1vdmU6IGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdFx0Ly8gcmVtb3ZlIGNvb2tpZSBmcm9tIG1haW4gZG9tYWluXG5cdFx0XHRcdHRoaXMuc2V0KGtleSwgJycsIHsgZXhwaXJlRGF5czogLTEgfSk7XG5cdFx0XHRcdC8vIHJlbW92ZSBjb29raWUgZnJvbSB1cHBlciBkb21haW5zXG5cdFx0XHRcdHZhciBkb21haW5QYXJ0cyA9IGRvY3VtZW50LmRvbWFpbi5zcGxpdCgnLicpO1xuXHRcdFx0XHRmb3IgKHZhciBpID0gZG9tYWluUGFydHMubGVuZ3RoOyBpID4gMTsgaS0tKSB7XG5cdFx0XHRcdFx0dGhpcy5zZXQoa2V5LCAnJywgeyBleHBpcmVEYXlzOiAtMSwgZG9tYWluOiAnLicgKyBkb21haW5QYXJ0cy5zbGljZSgtIGkpLmpvaW4oJy4nKSB9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHJlc2V0OiBmdW5jdGlvbiAobmFtZXNwYWNlKSB7XG5cdFx0XHRcdHZhciBjb29raWVzID0gZG9jdW1lbnQuY29va2llID8gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7JykgOiBbXTtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDAsIGNvb2tpZSwga2V5OyBpIDwgY29va2llcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGNvb2tpZSA9IGNvb2tpZXNbaV0ucmVwbGFjZSgvXlxccyovLCAnJyk7XG5cdFx0XHRcdFx0a2V5ID0gY29va2llLnN1YnN0cigwLCBjb29raWUuaW5kZXhPZignPScpKTtcblx0XHRcdFx0XHRpZiAoIW5hbWVzcGFjZSB8fCBrZXkuaW5kZXhPZihuYW1lc3BhY2UpID09PSAwKVxuXHRcdFx0XHRcdFx0dGhpcy5yZW1vdmUoa2V5KTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGtleXM6IGZ1bmN0aW9uIChuYW1lc3BhY2UsIGRlbGltaXRlcikge1xuXHRcdFx0XHRpZiAoIXRoaXMuY2hlY2soKSlcblx0XHRcdFx0XHR0aHJvdyBFcnJvcignY29va2llcyBhcmUgZGlzYWJsZWQnKTtcblx0XHRcdFx0dmFyIGtleXMgPSBbXSxcblx0XHRcdFx0XHRjb29raWVzID0gZG9jdW1lbnQuY29va2llID8gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7JykgOiBbXTtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDAsIGNvb2tpZSwga2V5OyBpIDwgY29va2llcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGNvb2tpZSA9IGNvb2tpZXNbaV0ucmVwbGFjZSgvXlxccyovLCAnJyk7XG5cdFx0XHRcdFx0a2V5ID0gZGVjb2RlVVJJQ29tcG9uZW50KGNvb2tpZS5zdWJzdHIoMCwgY29va2llLmluZGV4T2YoJz0nKSkpO1xuXHRcdFx0XHRcdGlmICghbmFtZXNwYWNlIHx8IGtleS5pbmRleE9mKG5hbWVzcGFjZSkgPT09IDApXG5cdFx0XHRcdFx0XHRrZXlzLnB1c2goX3RvS2V5TmFtZShuYW1lc3BhY2UsIGtleSwgZGVsaW1pdGVyKSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGtleXM7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdHJldHVybiB7XG5cdFx0XHRpbml0OiBmdW5jdGlvbiAob3B0aW9ucykge1xuXHRcdFx0XHR0aGlzLnNldE9wdGlvbnMob3B0aW9ucyk7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fSxcblx0XHRcdHNldE9wdGlvbnM6IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cdFx0XHRcdHRoaXMub3B0aW9ucyA9IEJhc2lsLnV0aWxzLmV4dGVuZCh7fSwgdGhpcy5vcHRpb25zIHx8IEJhc2lsLm9wdGlvbnMsIG9wdGlvbnMpO1xuXHRcdFx0fSxcblx0XHRcdHN1cHBvcnQ6IGZ1bmN0aW9uIChzdG9yYWdlKSB7XG5cdFx0XHRcdHJldHVybiBfc3RvcmFnZXMuaGFzT3duUHJvcGVydHkoc3RvcmFnZSk7XG5cdFx0XHR9LFxuXHRcdFx0Y2hlY2s6IGZ1bmN0aW9uIChzdG9yYWdlKSB7XG5cdFx0XHRcdGlmICh0aGlzLnN1cHBvcnQoc3RvcmFnZSkpXG5cdFx0XHRcdFx0cmV0dXJuIF9zdG9yYWdlc1tzdG9yYWdlXS5jaGVjayh0aGlzLm9wdGlvbnMpO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9LFxuXHRcdFx0c2V0OiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSwgb3B0aW9ucykge1xuXHRcdFx0XHRvcHRpb25zID0gQmFzaWwudXRpbHMuZXh0ZW5kKHt9LCB0aGlzLm9wdGlvbnMsIG9wdGlvbnMpO1xuXHRcdFx0XHRpZiAoIShrZXkgPSBfdG9TdG9yZWRLZXkob3B0aW9ucy5uYW1lc3BhY2UsIGtleSwgb3B0aW9ucy5rZXlEZWxpbWl0ZXIpKSlcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdHZhbHVlID0gb3B0aW9ucy5yYXcgPT09IHRydWUgPyB2YWx1ZSA6IF90b1N0b3JlZFZhbHVlKHZhbHVlKTtcblx0XHRcdFx0dmFyIHdoZXJlID0gbnVsbDtcblx0XHRcdFx0Ly8gdHJ5IHRvIHNldCBrZXkvdmFsdWUgaW4gZmlyc3QgYXZhaWxhYmxlIHN0b3JhZ2Vcblx0XHRcdFx0QmFzaWwudXRpbHMudHJ5RWFjaChfdG9TdG9yYWdlc0FycmF5KG9wdGlvbnMuc3RvcmFnZXMpLCBmdW5jdGlvbiAoc3RvcmFnZSwgaW5kZXgpIHtcblx0XHRcdFx0XHRfc3RvcmFnZXNbc3RvcmFnZV0uc2V0KGtleSwgdmFsdWUsIG9wdGlvbnMpO1xuXHRcdFx0XHRcdHdoZXJlID0gc3RvcmFnZTtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7IC8vIGJyZWFrO1xuXHRcdFx0XHR9LCBudWxsLCB0aGlzKTtcblx0XHRcdFx0aWYgKCF3aGVyZSkge1xuXHRcdFx0XHRcdC8vIGtleSBoYXMgbm90IGJlZW4gc2V0IGFueXdoZXJlXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIHJlbW92ZSBrZXkgZnJvbSBhbGwgb3RoZXIgc3RvcmFnZXNcblx0XHRcdFx0QmFzaWwudXRpbHMudHJ5RWFjaChfdG9TdG9yYWdlc0FycmF5KG9wdGlvbnMuc3RvcmFnZXMpLCBmdW5jdGlvbiAoc3RvcmFnZSwgaW5kZXgpIHtcblx0XHRcdFx0XHRpZiAoc3RvcmFnZSAhPT0gd2hlcmUpXG5cdFx0XHRcdFx0XHRfc3RvcmFnZXNbc3RvcmFnZV0ucmVtb3ZlKGtleSk7XG5cdFx0XHRcdH0sIG51bGwsIHRoaXMpO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH0sXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uIChrZXksIG9wdGlvbnMpIHtcblx0XHRcdFx0b3B0aW9ucyA9IEJhc2lsLnV0aWxzLmV4dGVuZCh7fSwgdGhpcy5vcHRpb25zLCBvcHRpb25zKTtcblx0XHRcdFx0aWYgKCEoa2V5ID0gX3RvU3RvcmVkS2V5KG9wdGlvbnMubmFtZXNwYWNlLCBrZXksIG9wdGlvbnMua2V5RGVsaW1pdGVyKSkpXG5cdFx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHRcdHZhciB2YWx1ZSA9IG51bGw7XG5cdFx0XHRcdEJhc2lsLnV0aWxzLnRyeUVhY2goX3RvU3RvcmFnZXNBcnJheShvcHRpb25zLnN0b3JhZ2VzKSwgZnVuY3Rpb24gKHN0b3JhZ2UsIGluZGV4KSB7XG5cdFx0XHRcdFx0aWYgKHZhbHVlICE9PSBudWxsKVxuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlOyAvLyBicmVhayBpZiBhIHZhbHVlIGhhcyBhbHJlYWR5IGJlZW4gZm91bmQuXG5cdFx0XHRcdFx0dmFsdWUgPSBfc3RvcmFnZXNbc3RvcmFnZV0uZ2V0KGtleSwgb3B0aW9ucykgfHwgbnVsbDtcblx0XHRcdFx0XHR2YWx1ZSA9IG9wdGlvbnMucmF3ID09PSB0cnVlID8gdmFsdWUgOiBfZnJvbVN0b3JlZFZhbHVlKHZhbHVlKTtcblx0XHRcdFx0fSwgZnVuY3Rpb24gKHN0b3JhZ2UsIGluZGV4LCBlcnJvcikge1xuXHRcdFx0XHRcdHZhbHVlID0gbnVsbDtcblx0XHRcdFx0fSwgdGhpcyk7XG5cdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdH0sXG5cdFx0XHRyZW1vdmU6IGZ1bmN0aW9uIChrZXksIG9wdGlvbnMpIHtcblx0XHRcdFx0b3B0aW9ucyA9IEJhc2lsLnV0aWxzLmV4dGVuZCh7fSwgdGhpcy5vcHRpb25zLCBvcHRpb25zKTtcblx0XHRcdFx0aWYgKCEoa2V5ID0gX3RvU3RvcmVkS2V5KG9wdGlvbnMubmFtZXNwYWNlLCBrZXksIG9wdGlvbnMua2V5RGVsaW1pdGVyKSkpXG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRCYXNpbC51dGlscy50cnlFYWNoKF90b1N0b3JhZ2VzQXJyYXkob3B0aW9ucy5zdG9yYWdlcyksIGZ1bmN0aW9uIChzdG9yYWdlKSB7XG5cdFx0XHRcdFx0X3N0b3JhZ2VzW3N0b3JhZ2VdLnJlbW92ZShrZXkpO1xuXHRcdFx0XHR9LCBudWxsLCB0aGlzKTtcblx0XHRcdH0sXG5cdFx0XHRyZXNldDogZnVuY3Rpb24gKG9wdGlvbnMpIHtcblx0XHRcdFx0b3B0aW9ucyA9IEJhc2lsLnV0aWxzLmV4dGVuZCh7fSwgdGhpcy5vcHRpb25zLCBvcHRpb25zKTtcblx0XHRcdFx0QmFzaWwudXRpbHMudHJ5RWFjaChfdG9TdG9yYWdlc0FycmF5KG9wdGlvbnMuc3RvcmFnZXMpLCBmdW5jdGlvbiAoc3RvcmFnZSkge1xuXHRcdFx0XHRcdF9zdG9yYWdlc1tzdG9yYWdlXS5yZXNldChvcHRpb25zLm5hbWVzcGFjZSk7XG5cdFx0XHRcdH0sIG51bGwsIHRoaXMpO1xuXHRcdFx0fSxcblx0XHRcdGtleXM6IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cdFx0XHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXHRcdFx0XHR2YXIga2V5cyA9IFtdO1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gdGhpcy5rZXlzTWFwKG9wdGlvbnMpKVxuXHRcdFx0XHRcdGtleXMucHVzaChrZXkpO1xuXHRcdFx0XHRyZXR1cm4ga2V5cztcblx0XHRcdH0sXG5cdFx0XHRrZXlzTWFwOiBmdW5jdGlvbiAob3B0aW9ucykge1xuXHRcdFx0XHRvcHRpb25zID0gQmFzaWwudXRpbHMuZXh0ZW5kKHt9LCB0aGlzLm9wdGlvbnMsIG9wdGlvbnMpO1xuXHRcdFx0XHR2YXIgbWFwID0ge307XG5cdFx0XHRcdEJhc2lsLnV0aWxzLnRyeUVhY2goX3RvU3RvcmFnZXNBcnJheShvcHRpb25zLnN0b3JhZ2VzKSwgZnVuY3Rpb24gKHN0b3JhZ2UpIHtcblx0XHRcdFx0XHRCYXNpbC51dGlscy5lYWNoKF9zdG9yYWdlc1tzdG9yYWdlXS5rZXlzKG9wdGlvbnMubmFtZXNwYWNlLCBvcHRpb25zLmtleURlbGltaXRlciksIGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdFx0XHRcdG1hcFtrZXldID0gQmFzaWwudXRpbHMuaXNBcnJheShtYXBba2V5XSkgPyBtYXBba2V5XSA6IFtdO1xuXHRcdFx0XHRcdFx0bWFwW2tleV0ucHVzaChzdG9yYWdlKTtcblx0XHRcdFx0XHR9LCB0aGlzKTtcblx0XHRcdFx0fSwgbnVsbCwgdGhpcyk7XG5cdFx0XHRcdHJldHVybiBtYXA7XG5cdFx0XHR9XG5cdFx0fTtcblx0fTtcblxuXHQvLyBBY2Nlc3MgdG8gbmF0aXZlIHN0b3JhZ2VzLCB3aXRob3V0IG5hbWVzcGFjZSBvciBiYXNpbCB2YWx1ZSBkZWNvcmF0aW9uXG5cdEJhc2lsLm1lbW9yeSA9IG5ldyBCYXNpbC5TdG9yYWdlKCkuaW5pdCh7IHN0b3JhZ2VzOiAnbWVtb3J5JywgbmFtZXNwYWNlOiBudWxsLCByYXc6IHRydWUgfSk7XG5cdEJhc2lsLmNvb2tpZSA9IG5ldyBCYXNpbC5TdG9yYWdlKCkuaW5pdCh7IHN0b3JhZ2VzOiAnY29va2llJywgbmFtZXNwYWNlOiBudWxsLCByYXc6IHRydWUgfSk7XG5cdEJhc2lsLmxvY2FsU3RvcmFnZSA9IG5ldyBCYXNpbC5TdG9yYWdlKCkuaW5pdCh7IHN0b3JhZ2VzOiAnbG9jYWwnLCBuYW1lc3BhY2U6IG51bGwsIHJhdzogdHJ1ZSB9KTtcblx0QmFzaWwuc2Vzc2lvblN0b3JhZ2UgPSBuZXcgQmFzaWwuU3RvcmFnZSgpLmluaXQoeyBzdG9yYWdlczogJ3Nlc3Npb24nLCBuYW1lc3BhY2U6IG51bGwsIHJhdzogdHJ1ZSB9KTtcblxuXHQvLyBicm93c2VyIGV4cG9ydFxuXHR3aW5kb3cuQmFzaWwgPSBCYXNpbDtcblxuXHQvLyBBTUQgZXhwb3J0XG5cdGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcblx0XHRkZWZpbmUoZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gQmFzaWw7XG5cdFx0fSk7XG5cdC8vIGNvbW1vbmpzIGV4cG9ydFxuXHR9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBCYXNpbDtcblx0fVxuXG59KSgpO1xuIiwiOyhmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuXHRpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcblx0XHQvLyBDb21tb25KU1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0fVxuXHRlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIEFNRFxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0Ly8gR2xvYmFsIChicm93c2VyKVxuXHRcdHJvb3QuQ3J5cHRvSlMgPSBmYWN0b3J5KCk7XG5cdH1cbn0odGhpcywgZnVuY3Rpb24gKCkge1xuXG5cdC8qKlxuXHQgKiBDcnlwdG9KUyBjb3JlIGNvbXBvbmVudHMuXG5cdCAqL1xuXHR2YXIgQ3J5cHRvSlMgPSBDcnlwdG9KUyB8fCAoZnVuY3Rpb24gKE1hdGgsIHVuZGVmaW5lZCkge1xuXHQgICAgLypcblx0ICAgICAqIExvY2FsIHBvbHlmaWwgb2YgT2JqZWN0LmNyZWF0ZVxuXHQgICAgICovXG5cdCAgICB2YXIgY3JlYXRlID0gT2JqZWN0LmNyZWF0ZSB8fCAoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIGZ1bmN0aW9uIEYoKSB7fTtcblxuXHQgICAgICAgIHJldHVybiBmdW5jdGlvbiAob2JqKSB7XG5cdCAgICAgICAgICAgIHZhciBzdWJ0eXBlO1xuXG5cdCAgICAgICAgICAgIEYucHJvdG90eXBlID0gb2JqO1xuXG5cdCAgICAgICAgICAgIHN1YnR5cGUgPSBuZXcgRigpO1xuXG5cdCAgICAgICAgICAgIEYucHJvdG90eXBlID0gbnVsbDtcblxuXHQgICAgICAgICAgICByZXR1cm4gc3VidHlwZTtcblx0ICAgICAgICB9O1xuXHQgICAgfSgpKVxuXG5cdCAgICAvKipcblx0ICAgICAqIENyeXB0b0pTIG5hbWVzcGFjZS5cblx0ICAgICAqL1xuXHQgICAgdmFyIEMgPSB7fTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBMaWJyYXJ5IG5hbWVzcGFjZS5cblx0ICAgICAqL1xuXHQgICAgdmFyIENfbGliID0gQy5saWIgPSB7fTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBCYXNlIG9iamVjdCBmb3IgcHJvdG90eXBhbCBpbmhlcml0YW5jZS5cblx0ICAgICAqL1xuXHQgICAgdmFyIEJhc2UgPSBDX2xpYi5CYXNlID0gKGZ1bmN0aW9uICgpIHtcblxuXG5cdCAgICAgICAgcmV0dXJuIHtcblx0ICAgICAgICAgICAgLyoqXG5cdCAgICAgICAgICAgICAqIENyZWF0ZXMgYSBuZXcgb2JqZWN0IHRoYXQgaW5oZXJpdHMgZnJvbSB0aGlzIG9iamVjdC5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IG92ZXJyaWRlcyBQcm9wZXJ0aWVzIHRvIGNvcHkgaW50byB0aGUgbmV3IG9iamVjdC5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSBUaGUgbmV3IG9iamVjdC5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiAgICAgdmFyIE15VHlwZSA9IENyeXB0b0pTLmxpYi5CYXNlLmV4dGVuZCh7XG5cdCAgICAgICAgICAgICAqICAgICAgICAgZmllbGQ6ICd2YWx1ZScsXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqICAgICAgICAgbWV0aG9kOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgICAqICAgICAgICAgfVxuXHQgICAgICAgICAgICAgKiAgICAgfSk7XG5cdCAgICAgICAgICAgICAqL1xuXHQgICAgICAgICAgICBleHRlbmQ6IGZ1bmN0aW9uIChvdmVycmlkZXMpIHtcblx0ICAgICAgICAgICAgICAgIC8vIFNwYXduXG5cdCAgICAgICAgICAgICAgICB2YXIgc3VidHlwZSA9IGNyZWF0ZSh0aGlzKTtcblxuXHQgICAgICAgICAgICAgICAgLy8gQXVnbWVudFxuXHQgICAgICAgICAgICAgICAgaWYgKG92ZXJyaWRlcykge1xuXHQgICAgICAgICAgICAgICAgICAgIHN1YnR5cGUubWl4SW4ob3ZlcnJpZGVzKTtcblx0ICAgICAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGRlZmF1bHQgaW5pdGlhbGl6ZXJcblx0ICAgICAgICAgICAgICAgIGlmICghc3VidHlwZS5oYXNPd25Qcm9wZXJ0eSgnaW5pdCcpIHx8IHRoaXMuaW5pdCA9PT0gc3VidHlwZS5pbml0KSB7XG5cdCAgICAgICAgICAgICAgICAgICAgc3VidHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBzdWJ0eXBlLiRzdXBlci5pbml0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdCAgICAgICAgICAgICAgICAgICAgfTtcblx0ICAgICAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAgICAgLy8gSW5pdGlhbGl6ZXIncyBwcm90b3R5cGUgaXMgdGhlIHN1YnR5cGUgb2JqZWN0XG5cdCAgICAgICAgICAgICAgICBzdWJ0eXBlLmluaXQucHJvdG90eXBlID0gc3VidHlwZTtcblxuXHQgICAgICAgICAgICAgICAgLy8gUmVmZXJlbmNlIHN1cGVydHlwZVxuXHQgICAgICAgICAgICAgICAgc3VidHlwZS4kc3VwZXIgPSB0aGlzO1xuXG5cdCAgICAgICAgICAgICAgICByZXR1cm4gc3VidHlwZTtcblx0ICAgICAgICAgICAgfSxcblxuXHQgICAgICAgICAgICAvKipcblx0ICAgICAgICAgICAgICogRXh0ZW5kcyB0aGlzIG9iamVjdCBhbmQgcnVucyB0aGUgaW5pdCBtZXRob2QuXG5cdCAgICAgICAgICAgICAqIEFyZ3VtZW50cyB0byBjcmVhdGUoKSB3aWxsIGJlIHBhc3NlZCB0byBpbml0KCkuXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gVGhlIG5ldyBvYmplY3QuXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogICAgIHZhciBpbnN0YW5jZSA9IE15VHlwZS5jcmVhdGUoKTtcblx0ICAgICAgICAgICAgICovXG5cdCAgICAgICAgICAgIGNyZWF0ZTogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAgICAgdmFyIGluc3RhbmNlID0gdGhpcy5leHRlbmQoKTtcblx0ICAgICAgICAgICAgICAgIGluc3RhbmNlLmluaXQuYXBwbHkoaW5zdGFuY2UsIGFyZ3VtZW50cyk7XG5cblx0ICAgICAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZTtcblx0ICAgICAgICAgICAgfSxcblxuXHQgICAgICAgICAgICAvKipcblx0ICAgICAgICAgICAgICogSW5pdGlhbGl6ZXMgYSBuZXdseSBjcmVhdGVkIG9iamVjdC5cblx0ICAgICAgICAgICAgICogT3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gYWRkIHNvbWUgbG9naWMgd2hlbiB5b3VyIG9iamVjdHMgYXJlIGNyZWF0ZWQuXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqICAgICB2YXIgTXlUeXBlID0gQ3J5cHRvSlMubGliLkJhc2UuZXh0ZW5kKHtcblx0ICAgICAgICAgICAgICogICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgICAqICAgICAgICAgICAgIC8vIC4uLlxuXHQgICAgICAgICAgICAgKiAgICAgICAgIH1cblx0ICAgICAgICAgICAgICogICAgIH0pO1xuXHQgICAgICAgICAgICAgKi9cblx0ICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICB9LFxuXG5cdCAgICAgICAgICAgIC8qKlxuXHQgICAgICAgICAgICAgKiBDb3BpZXMgcHJvcGVydGllcyBpbnRvIHRoaXMgb2JqZWN0LlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcGVydGllcyBUaGUgcHJvcGVydGllcyB0byBtaXggaW4uXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqICAgICBNeVR5cGUubWl4SW4oe1xuXHQgICAgICAgICAgICAgKiAgICAgICAgIGZpZWxkOiAndmFsdWUnXG5cdCAgICAgICAgICAgICAqICAgICB9KTtcblx0ICAgICAgICAgICAgICovXG5cdCAgICAgICAgICAgIG1peEluOiBmdW5jdGlvbiAocHJvcGVydGllcykge1xuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgcHJvcGVydHlOYW1lIGluIHByb3BlcnRpZXMpIHtcblx0ICAgICAgICAgICAgICAgICAgICBpZiAocHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eU5hbWUpKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbcHJvcGVydHlOYW1lXSA9IHByb3BlcnRpZXNbcHJvcGVydHlOYW1lXTtcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgICAgIC8vIElFIHdvbid0IGNvcHkgdG9TdHJpbmcgdXNpbmcgdGhlIGxvb3AgYWJvdmVcblx0ICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KCd0b1N0cmluZycpKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy50b1N0cmluZyA9IHByb3BlcnRpZXMudG9TdHJpbmc7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH0sXG5cblx0ICAgICAgICAgICAgLyoqXG5cdCAgICAgICAgICAgICAqIENyZWF0ZXMgYSBjb3B5IG9mIHRoaXMgb2JqZWN0LlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBjbG9uZS5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogICAgIHZhciBjbG9uZSA9IGluc3RhbmNlLmNsb25lKCk7XG5cdCAgICAgICAgICAgICAqL1xuXHQgICAgICAgICAgICBjbG9uZTogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5pdC5wcm90b3R5cGUuZXh0ZW5kKHRoaXMpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfTtcblx0ICAgIH0oKSk7XG5cblx0ICAgIC8qKlxuXHQgICAgICogQW4gYXJyYXkgb2YgMzItYml0IHdvcmRzLlxuXHQgICAgICpcblx0ICAgICAqIEBwcm9wZXJ0eSB7QXJyYXl9IHdvcmRzIFRoZSBhcnJheSBvZiAzMi1iaXQgd29yZHMuXG5cdCAgICAgKiBAcHJvcGVydHkge251bWJlcn0gc2lnQnl0ZXMgVGhlIG51bWJlciBvZiBzaWduaWZpY2FudCBieXRlcyBpbiB0aGlzIHdvcmQgYXJyYXkuXG5cdCAgICAgKi9cblx0ICAgIHZhciBXb3JkQXJyYXkgPSBDX2xpYi5Xb3JkQXJyYXkgPSBCYXNlLmV4dGVuZCh7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogSW5pdGlhbGl6ZXMgYSBuZXdseSBjcmVhdGVkIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge0FycmF5fSB3b3JkcyAoT3B0aW9uYWwpIEFuIGFycmF5IG9mIDMyLWJpdCB3b3Jkcy5cblx0ICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gc2lnQnl0ZXMgKE9wdGlvbmFsKSBUaGUgbnVtYmVyIG9mIHNpZ25pZmljYW50IGJ5dGVzIGluIHRoZSB3b3Jkcy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHdvcmRBcnJheSA9IENyeXB0b0pTLmxpYi5Xb3JkQXJyYXkuY3JlYXRlKCk7XG5cdCAgICAgICAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy5saWIuV29yZEFycmF5LmNyZWF0ZShbMHgwMDAxMDIwMywgMHgwNDA1MDYwN10pO1xuXHQgICAgICAgICAqICAgICB2YXIgd29yZEFycmF5ID0gQ3J5cHRvSlMubGliLldvcmRBcnJheS5jcmVhdGUoWzB4MDAwMTAyMDMsIDB4MDQwNTA2MDddLCA2KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBpbml0OiBmdW5jdGlvbiAod29yZHMsIHNpZ0J5dGVzKSB7XG5cdCAgICAgICAgICAgIHdvcmRzID0gdGhpcy53b3JkcyA9IHdvcmRzIHx8IFtdO1xuXG5cdCAgICAgICAgICAgIGlmIChzaWdCeXRlcyAhPSB1bmRlZmluZWQpIHtcblx0ICAgICAgICAgICAgICAgIHRoaXMuc2lnQnl0ZXMgPSBzaWdCeXRlcztcblx0ICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgIHRoaXMuc2lnQnl0ZXMgPSB3b3Jkcy5sZW5ndGggKiA0O1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbnZlcnRzIHRoaXMgd29yZCBhcnJheSB0byBhIHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7RW5jb2Rlcn0gZW5jb2RlciAoT3B0aW9uYWwpIFRoZSBlbmNvZGluZyBzdHJhdGVneSB0byB1c2UuIERlZmF1bHQ6IENyeXB0b0pTLmVuYy5IZXhcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIHN0cmluZ2lmaWVkIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBzdHJpbmcgPSB3b3JkQXJyYXkgKyAnJztcblx0ICAgICAgICAgKiAgICAgdmFyIHN0cmluZyA9IHdvcmRBcnJheS50b1N0cmluZygpO1xuXHQgICAgICAgICAqICAgICB2YXIgc3RyaW5nID0gd29yZEFycmF5LnRvU3RyaW5nKENyeXB0b0pTLmVuYy5VdGY4KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICB0b1N0cmluZzogZnVuY3Rpb24gKGVuY29kZXIpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIChlbmNvZGVyIHx8IEhleCkuc3RyaW5naWZ5KHRoaXMpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb25jYXRlbmF0ZXMgYSB3b3JkIGFycmF5IHRvIHRoaXMgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fSB3b3JkQXJyYXkgVGhlIHdvcmQgYXJyYXkgdG8gYXBwZW5kLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGlzIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHdvcmRBcnJheTEuY29uY2F0KHdvcmRBcnJheTIpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGNvbmNhdDogZnVuY3Rpb24gKHdvcmRBcnJheSkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIHRoaXNXb3JkcyA9IHRoaXMud29yZHM7XG5cdCAgICAgICAgICAgIHZhciB0aGF0V29yZHMgPSB3b3JkQXJyYXkud29yZHM7XG5cdCAgICAgICAgICAgIHZhciB0aGlzU2lnQnl0ZXMgPSB0aGlzLnNpZ0J5dGVzO1xuXHQgICAgICAgICAgICB2YXIgdGhhdFNpZ0J5dGVzID0gd29yZEFycmF5LnNpZ0J5dGVzO1xuXG5cdCAgICAgICAgICAgIC8vIENsYW1wIGV4Y2VzcyBiaXRzXG5cdCAgICAgICAgICAgIHRoaXMuY2xhbXAoKTtcblxuXHQgICAgICAgICAgICAvLyBDb25jYXRcblx0ICAgICAgICAgICAgaWYgKHRoaXNTaWdCeXRlcyAlIDQpIHtcblx0ICAgICAgICAgICAgICAgIC8vIENvcHkgb25lIGJ5dGUgYXQgYSB0aW1lXG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoYXRTaWdCeXRlczsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIHRoYXRCeXRlID0gKHRoYXRXb3Jkc1tpID4+PiAyXSA+Pj4gKDI0IC0gKGkgJSA0KSAqIDgpKSAmIDB4ZmY7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpc1dvcmRzWyh0aGlzU2lnQnl0ZXMgKyBpKSA+Pj4gMl0gfD0gdGhhdEJ5dGUgPDwgKDI0IC0gKCh0aGlzU2lnQnl0ZXMgKyBpKSAlIDQpICogOCk7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICAvLyBDb3B5IG9uZSB3b3JkIGF0IGEgdGltZVxuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGF0U2lnQnl0ZXM7IGkgKz0gNCkge1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXNXb3Jkc1sodGhpc1NpZ0J5dGVzICsgaSkgPj4+IDJdID0gdGhhdFdvcmRzW2kgPj4+IDJdO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIHRoaXMuc2lnQnl0ZXMgKz0gdGhhdFNpZ0J5dGVzO1xuXG5cdCAgICAgICAgICAgIC8vIENoYWluYWJsZVxuXHQgICAgICAgICAgICByZXR1cm4gdGhpcztcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogUmVtb3ZlcyBpbnNpZ25pZmljYW50IGJpdHMuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHdvcmRBcnJheS5jbGFtcCgpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGNsYW1wOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgd29yZHMgPSB0aGlzLndvcmRzO1xuXHQgICAgICAgICAgICB2YXIgc2lnQnl0ZXMgPSB0aGlzLnNpZ0J5dGVzO1xuXG5cdCAgICAgICAgICAgIC8vIENsYW1wXG5cdCAgICAgICAgICAgIHdvcmRzW3NpZ0J5dGVzID4+PiAyXSAmPSAweGZmZmZmZmZmIDw8ICgzMiAtIChzaWdCeXRlcyAlIDQpICogOCk7XG5cdCAgICAgICAgICAgIHdvcmRzLmxlbmd0aCA9IE1hdGguY2VpbChzaWdCeXRlcyAvIDQpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDcmVhdGVzIGEgY29weSBvZiB0aGlzIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBjbG9uZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIGNsb25lID0gd29yZEFycmF5LmNsb25lKCk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgY2xvbmU6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgdmFyIGNsb25lID0gQmFzZS5jbG9uZS5jYWxsKHRoaXMpO1xuXHQgICAgICAgICAgICBjbG9uZS53b3JkcyA9IHRoaXMud29yZHMuc2xpY2UoMCk7XG5cblx0ICAgICAgICAgICAgcmV0dXJuIGNsb25lO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDcmVhdGVzIGEgd29yZCBhcnJheSBmaWxsZWQgd2l0aCByYW5kb20gYnl0ZXMuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gbkJ5dGVzIFRoZSBudW1iZXIgb2YgcmFuZG9tIGJ5dGVzIHRvIGdlbmVyYXRlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgcmFuZG9tIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy5saWIuV29yZEFycmF5LnJhbmRvbSgxNik7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgcmFuZG9tOiBmdW5jdGlvbiAobkJ5dGVzKSB7XG5cdCAgICAgICAgICAgIHZhciB3b3JkcyA9IFtdO1xuXG5cdCAgICAgICAgICAgIHZhciByID0gKGZ1bmN0aW9uIChtX3cpIHtcblx0ICAgICAgICAgICAgICAgIHZhciBtX3cgPSBtX3c7XG5cdCAgICAgICAgICAgICAgICB2YXIgbV96ID0gMHgzYWRlNjhiMTtcblx0ICAgICAgICAgICAgICAgIHZhciBtYXNrID0gMHhmZmZmZmZmZjtcblxuXHQgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgICAgICAgICBtX3ogPSAoMHg5MDY5ICogKG1feiAmIDB4RkZGRikgKyAobV96ID4+IDB4MTApKSAmIG1hc2s7XG5cdCAgICAgICAgICAgICAgICAgICAgbV93ID0gKDB4NDY1MCAqIChtX3cgJiAweEZGRkYpICsgKG1fdyA+PiAweDEwKSkgJiBtYXNrO1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSAoKG1feiA8PCAweDEwKSArIG1fdykgJiBtYXNrO1xuXHQgICAgICAgICAgICAgICAgICAgIHJlc3VsdCAvPSAweDEwMDAwMDAwMDtcblx0ICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gMC41O1xuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQgKiAoTWF0aC5yYW5kb20oKSA+IC41ID8gMSA6IC0xKTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfSk7XG5cblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIHJjYWNoZTsgaSA8IG5CeXRlczsgaSArPSA0KSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgX3IgPSByKChyY2FjaGUgfHwgTWF0aC5yYW5kb20oKSkgKiAweDEwMDAwMDAwMCk7XG5cblx0ICAgICAgICAgICAgICAgIHJjYWNoZSA9IF9yKCkgKiAweDNhZGU2N2I3O1xuXHQgICAgICAgICAgICAgICAgd29yZHMucHVzaCgoX3IoKSAqIDB4MTAwMDAwMDAwKSB8IDApO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgcmV0dXJuIG5ldyBXb3JkQXJyYXkuaW5pdCh3b3JkcywgbkJ5dGVzKTtcblx0ICAgICAgICB9XG5cdCAgICB9KTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBFbmNvZGVyIG5hbWVzcGFjZS5cblx0ICAgICAqL1xuXHQgICAgdmFyIENfZW5jID0gQy5lbmMgPSB7fTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBIZXggZW5jb2Rpbmcgc3RyYXRlZ3kuXG5cdCAgICAgKi9cblx0ICAgIHZhciBIZXggPSBDX2VuYy5IZXggPSB7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29udmVydHMgYSB3b3JkIGFycmF5IHRvIGEgaGV4IHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fSB3b3JkQXJyYXkgVGhlIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBoZXggc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgaGV4U3RyaW5nID0gQ3J5cHRvSlMuZW5jLkhleC5zdHJpbmdpZnkod29yZEFycmF5KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBzdHJpbmdpZnk6IGZ1bmN0aW9uICh3b3JkQXJyYXkpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciB3b3JkcyA9IHdvcmRBcnJheS53b3Jkcztcblx0ICAgICAgICAgICAgdmFyIHNpZ0J5dGVzID0gd29yZEFycmF5LnNpZ0J5dGVzO1xuXG5cdCAgICAgICAgICAgIC8vIENvbnZlcnRcblx0ICAgICAgICAgICAgdmFyIGhleENoYXJzID0gW107XG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2lnQnl0ZXM7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgdmFyIGJpdGUgPSAod29yZHNbaSA+Pj4gMl0gPj4+ICgyNCAtIChpICUgNCkgKiA4KSkgJiAweGZmO1xuXHQgICAgICAgICAgICAgICAgaGV4Q2hhcnMucHVzaCgoYml0ZSA+Pj4gNCkudG9TdHJpbmcoMTYpKTtcblx0ICAgICAgICAgICAgICAgIGhleENoYXJzLnB1c2goKGJpdGUgJiAweDBmKS50b1N0cmluZygxNikpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgcmV0dXJuIGhleENoYXJzLmpvaW4oJycpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyBhIGhleCBzdHJpbmcgdG8gYSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGhleFN0ciBUaGUgaGV4IHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy5lbmMuSGV4LnBhcnNlKGhleFN0cmluZyk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgcGFyc2U6IGZ1bmN0aW9uIChoZXhTdHIpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRcblx0ICAgICAgICAgICAgdmFyIGhleFN0ckxlbmd0aCA9IGhleFN0ci5sZW5ndGg7XG5cblx0ICAgICAgICAgICAgLy8gQ29udmVydFxuXHQgICAgICAgICAgICB2YXIgd29yZHMgPSBbXTtcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBoZXhTdHJMZW5ndGg7IGkgKz0gMikge1xuXHQgICAgICAgICAgICAgICAgd29yZHNbaSA+Pj4gM10gfD0gcGFyc2VJbnQoaGV4U3RyLnN1YnN0cihpLCAyKSwgMTYpIDw8ICgyNCAtIChpICUgOCkgKiA0KTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIHJldHVybiBuZXcgV29yZEFycmF5LmluaXQod29yZHMsIGhleFN0ckxlbmd0aCAvIDIpO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cblx0ICAgIC8qKlxuXHQgICAgICogTGF0aW4xIGVuY29kaW5nIHN0cmF0ZWd5LlxuXHQgICAgICovXG5cdCAgICB2YXIgTGF0aW4xID0gQ19lbmMuTGF0aW4xID0ge1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbnZlcnRzIGEgd29yZCBhcnJheSB0byBhIExhdGluMSBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheX0gd29yZEFycmF5IFRoZSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgTGF0aW4xIHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIGxhdGluMVN0cmluZyA9IENyeXB0b0pTLmVuYy5MYXRpbjEuc3RyaW5naWZ5KHdvcmRBcnJheSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgc3RyaW5naWZ5OiBmdW5jdGlvbiAod29yZEFycmF5KSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgd29yZHMgPSB3b3JkQXJyYXkud29yZHM7XG5cdCAgICAgICAgICAgIHZhciBzaWdCeXRlcyA9IHdvcmRBcnJheS5zaWdCeXRlcztcblxuXHQgICAgICAgICAgICAvLyBDb252ZXJ0XG5cdCAgICAgICAgICAgIHZhciBsYXRpbjFDaGFycyA9IFtdO1xuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpZ0J5dGVzOyBpKyspIHtcblx0ICAgICAgICAgICAgICAgIHZhciBiaXRlID0gKHdvcmRzW2kgPj4+IDJdID4+PiAoMjQgLSAoaSAlIDQpICogOCkpICYgMHhmZjtcblx0ICAgICAgICAgICAgICAgIGxhdGluMUNoYXJzLnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZShiaXRlKSk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICByZXR1cm4gbGF0aW4xQ2hhcnMuam9pbignJyk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbnZlcnRzIGEgTGF0aW4xIHN0cmluZyB0byBhIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbGF0aW4xU3RyIFRoZSBMYXRpbjEgc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHdvcmRBcnJheSA9IENyeXB0b0pTLmVuYy5MYXRpbjEucGFyc2UobGF0aW4xU3RyaW5nKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBwYXJzZTogZnVuY3Rpb24gKGxhdGluMVN0cikge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dFxuXHQgICAgICAgICAgICB2YXIgbGF0aW4xU3RyTGVuZ3RoID0gbGF0aW4xU3RyLmxlbmd0aDtcblxuXHQgICAgICAgICAgICAvLyBDb252ZXJ0XG5cdCAgICAgICAgICAgIHZhciB3b3JkcyA9IFtdO1xuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhdGluMVN0ckxlbmd0aDsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICB3b3Jkc1tpID4+PiAyXSB8PSAobGF0aW4xU3RyLmNoYXJDb2RlQXQoaSkgJiAweGZmKSA8PCAoMjQgLSAoaSAlIDQpICogOCk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICByZXR1cm4gbmV3IFdvcmRBcnJheS5pbml0KHdvcmRzLCBsYXRpbjFTdHJMZW5ndGgpO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cblx0ICAgIC8qKlxuXHQgICAgICogVVRGLTggZW5jb2Rpbmcgc3RyYXRlZ3kuXG5cdCAgICAgKi9cblx0ICAgIHZhciBVdGY4ID0gQ19lbmMuVXRmOCA9IHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyBhIHdvcmQgYXJyYXkgdG8gYSBVVEYtOCBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheX0gd29yZEFycmF5IFRoZSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgVVRGLTggc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgdXRmOFN0cmluZyA9IENyeXB0b0pTLmVuYy5VdGY4LnN0cmluZ2lmeSh3b3JkQXJyYXkpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHN0cmluZ2lmeTogZnVuY3Rpb24gKHdvcmRBcnJheSkge1xuXHQgICAgICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChlc2NhcGUoTGF0aW4xLnN0cmluZ2lmeSh3b3JkQXJyYXkpKSk7XG5cdCAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcblx0ICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWFsZm9ybWVkIFVURi04IGRhdGEnKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyBhIFVURi04IHN0cmluZyB0byBhIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXRmOFN0ciBUaGUgVVRGLTggc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHdvcmRBcnJheSA9IENyeXB0b0pTLmVuYy5VdGY4LnBhcnNlKHV0ZjhTdHJpbmcpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHBhcnNlOiBmdW5jdGlvbiAodXRmOFN0cikge1xuXHQgICAgICAgICAgICByZXR1cm4gTGF0aW4xLnBhcnNlKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudCh1dGY4U3RyKSkpO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cblx0ICAgIC8qKlxuXHQgICAgICogQWJzdHJhY3QgYnVmZmVyZWQgYmxvY2sgYWxnb3JpdGhtIHRlbXBsYXRlLlxuXHQgICAgICpcblx0ICAgICAqIFRoZSBwcm9wZXJ0eSBibG9ja1NpemUgbXVzdCBiZSBpbXBsZW1lbnRlZCBpbiBhIGNvbmNyZXRlIHN1YnR5cGUuXG5cdCAgICAgKlxuXHQgICAgICogQHByb3BlcnR5IHtudW1iZXJ9IF9taW5CdWZmZXJTaXplIFRoZSBudW1iZXIgb2YgYmxvY2tzIHRoYXQgc2hvdWxkIGJlIGtlcHQgdW5wcm9jZXNzZWQgaW4gdGhlIGJ1ZmZlci4gRGVmYXVsdDogMFxuXHQgICAgICovXG5cdCAgICB2YXIgQnVmZmVyZWRCbG9ja0FsZ29yaXRobSA9IENfbGliLkJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0gPSBCYXNlLmV4dGVuZCh7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogUmVzZXRzIHRoaXMgYmxvY2sgYWxnb3JpdGhtJ3MgZGF0YSBidWZmZXIgdG8gaXRzIGluaXRpYWwgc3RhdGUuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIGJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0ucmVzZXQoKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICByZXNldDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAvLyBJbml0aWFsIHZhbHVlc1xuXHQgICAgICAgICAgICB0aGlzLl9kYXRhID0gbmV3IFdvcmRBcnJheS5pbml0KCk7XG5cdCAgICAgICAgICAgIHRoaXMuX25EYXRhQnl0ZXMgPSAwO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBBZGRzIG5ldyBkYXRhIHRvIHRoaXMgYmxvY2sgYWxnb3JpdGhtJ3MgYnVmZmVyLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBkYXRhIFRoZSBkYXRhIHRvIGFwcGVuZC4gU3RyaW5ncyBhcmUgY29udmVydGVkIHRvIGEgV29yZEFycmF5IHVzaW5nIFVURi04LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICBidWZmZXJlZEJsb2NrQWxnb3JpdGhtLl9hcHBlbmQoJ2RhdGEnKTtcblx0ICAgICAgICAgKiAgICAgYnVmZmVyZWRCbG9ja0FsZ29yaXRobS5fYXBwZW5kKHdvcmRBcnJheSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgX2FwcGVuZDogZnVuY3Rpb24gKGRhdGEpIHtcblx0ICAgICAgICAgICAgLy8gQ29udmVydCBzdHJpbmcgdG8gV29yZEFycmF5LCBlbHNlIGFzc3VtZSBXb3JkQXJyYXkgYWxyZWFkeVxuXHQgICAgICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT0gJ3N0cmluZycpIHtcblx0ICAgICAgICAgICAgICAgIGRhdGEgPSBVdGY4LnBhcnNlKGRhdGEpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gQXBwZW5kXG5cdCAgICAgICAgICAgIHRoaXMuX2RhdGEuY29uY2F0KGRhdGEpO1xuXHQgICAgICAgICAgICB0aGlzLl9uRGF0YUJ5dGVzICs9IGRhdGEuc2lnQnl0ZXM7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIFByb2Nlc3NlcyBhdmFpbGFibGUgZGF0YSBibG9ja3MuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBUaGlzIG1ldGhvZCBpbnZva2VzIF9kb1Byb2Nlc3NCbG9jayhvZmZzZXQpLCB3aGljaCBtdXN0IGJlIGltcGxlbWVudGVkIGJ5IGEgY29uY3JldGUgc3VidHlwZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gZG9GbHVzaCBXaGV0aGVyIGFsbCBibG9ja3MgYW5kIHBhcnRpYWwgYmxvY2tzIHNob3VsZCBiZSBwcm9jZXNzZWQuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBwcm9jZXNzZWQgZGF0YS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHByb2Nlc3NlZERhdGEgPSBidWZmZXJlZEJsb2NrQWxnb3JpdGhtLl9wcm9jZXNzKCk7XG5cdCAgICAgICAgICogICAgIHZhciBwcm9jZXNzZWREYXRhID0gYnVmZmVyZWRCbG9ja0FsZ29yaXRobS5fcHJvY2VzcyghISdmbHVzaCcpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIF9wcm9jZXNzOiBmdW5jdGlvbiAoZG9GbHVzaCkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIGRhdGEgPSB0aGlzLl9kYXRhO1xuXHQgICAgICAgICAgICB2YXIgZGF0YVdvcmRzID0gZGF0YS53b3Jkcztcblx0ICAgICAgICAgICAgdmFyIGRhdGFTaWdCeXRlcyA9IGRhdGEuc2lnQnl0ZXM7XG5cdCAgICAgICAgICAgIHZhciBibG9ja1NpemUgPSB0aGlzLmJsb2NrU2l6ZTtcblx0ICAgICAgICAgICAgdmFyIGJsb2NrU2l6ZUJ5dGVzID0gYmxvY2tTaXplICogNDtcblxuXHQgICAgICAgICAgICAvLyBDb3VudCBibG9ja3MgcmVhZHlcblx0ICAgICAgICAgICAgdmFyIG5CbG9ja3NSZWFkeSA9IGRhdGFTaWdCeXRlcyAvIGJsb2NrU2l6ZUJ5dGVzO1xuXHQgICAgICAgICAgICBpZiAoZG9GbHVzaCkge1xuXHQgICAgICAgICAgICAgICAgLy8gUm91bmQgdXAgdG8gaW5jbHVkZSBwYXJ0aWFsIGJsb2Nrc1xuXHQgICAgICAgICAgICAgICAgbkJsb2Nrc1JlYWR5ID0gTWF0aC5jZWlsKG5CbG9ja3NSZWFkeSk7XG5cdCAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICAvLyBSb3VuZCBkb3duIHRvIGluY2x1ZGUgb25seSBmdWxsIGJsb2Nrcyxcblx0ICAgICAgICAgICAgICAgIC8vIGxlc3MgdGhlIG51bWJlciBvZiBibG9ja3MgdGhhdCBtdXN0IHJlbWFpbiBpbiB0aGUgYnVmZmVyXG5cdCAgICAgICAgICAgICAgICBuQmxvY2tzUmVhZHkgPSBNYXRoLm1heCgobkJsb2Nrc1JlYWR5IHwgMCkgLSB0aGlzLl9taW5CdWZmZXJTaXplLCAwKTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIENvdW50IHdvcmRzIHJlYWR5XG5cdCAgICAgICAgICAgIHZhciBuV29yZHNSZWFkeSA9IG5CbG9ja3NSZWFkeSAqIGJsb2NrU2l6ZTtcblxuXHQgICAgICAgICAgICAvLyBDb3VudCBieXRlcyByZWFkeVxuXHQgICAgICAgICAgICB2YXIgbkJ5dGVzUmVhZHkgPSBNYXRoLm1pbihuV29yZHNSZWFkeSAqIDQsIGRhdGFTaWdCeXRlcyk7XG5cblx0ICAgICAgICAgICAgLy8gUHJvY2VzcyBibG9ja3Ncblx0ICAgICAgICAgICAgaWYgKG5Xb3Jkc1JlYWR5KSB7XG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBvZmZzZXQgPSAwOyBvZmZzZXQgPCBuV29yZHNSZWFkeTsgb2Zmc2V0ICs9IGJsb2NrU2l6ZSkge1xuXHQgICAgICAgICAgICAgICAgICAgIC8vIFBlcmZvcm0gY29uY3JldGUtYWxnb3JpdGhtIGxvZ2ljXG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy5fZG9Qcm9jZXNzQmxvY2soZGF0YVdvcmRzLCBvZmZzZXQpO1xuXHQgICAgICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgICAgICAvLyBSZW1vdmUgcHJvY2Vzc2VkIHdvcmRzXG5cdCAgICAgICAgICAgICAgICB2YXIgcHJvY2Vzc2VkV29yZHMgPSBkYXRhV29yZHMuc3BsaWNlKDAsIG5Xb3Jkc1JlYWR5KTtcblx0ICAgICAgICAgICAgICAgIGRhdGEuc2lnQnl0ZXMgLT0gbkJ5dGVzUmVhZHk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBSZXR1cm4gcHJvY2Vzc2VkIHdvcmRzXG5cdCAgICAgICAgICAgIHJldHVybiBuZXcgV29yZEFycmF5LmluaXQocHJvY2Vzc2VkV29yZHMsIG5CeXRlc1JlYWR5KTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ3JlYXRlcyBhIGNvcHkgb2YgdGhpcyBvYmplY3QuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBjbG9uZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIGNsb25lID0gYnVmZmVyZWRCbG9ja0FsZ29yaXRobS5jbG9uZSgpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGNsb25lOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIHZhciBjbG9uZSA9IEJhc2UuY2xvbmUuY2FsbCh0aGlzKTtcblx0ICAgICAgICAgICAgY2xvbmUuX2RhdGEgPSB0aGlzLl9kYXRhLmNsb25lKCk7XG5cblx0ICAgICAgICAgICAgcmV0dXJuIGNsb25lO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBfbWluQnVmZmVyU2l6ZTogMFxuXHQgICAgfSk7XG5cblx0ICAgIC8qKlxuXHQgICAgICogQWJzdHJhY3QgaGFzaGVyIHRlbXBsYXRlLlxuXHQgICAgICpcblx0ICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBibG9ja1NpemUgVGhlIG51bWJlciBvZiAzMi1iaXQgd29yZHMgdGhpcyBoYXNoZXIgb3BlcmF0ZXMgb24uIERlZmF1bHQ6IDE2ICg1MTIgYml0cylcblx0ICAgICAqL1xuXHQgICAgdmFyIEhhc2hlciA9IENfbGliLkhhc2hlciA9IEJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0uZXh0ZW5kKHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb25maWd1cmF0aW9uIG9wdGlvbnMuXG5cdCAgICAgICAgICovXG5cdCAgICAgICAgY2ZnOiBCYXNlLmV4dGVuZCgpLFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogSW5pdGlhbGl6ZXMgYSBuZXdseSBjcmVhdGVkIGhhc2hlci5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjZmcgKE9wdGlvbmFsKSBUaGUgY29uZmlndXJhdGlvbiBvcHRpb25zIHRvIHVzZSBmb3IgdGhpcyBoYXNoIGNvbXB1dGF0aW9uLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgaGFzaGVyID0gQ3J5cHRvSlMuYWxnby5TSEEyNTYuY3JlYXRlKCk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgaW5pdDogZnVuY3Rpb24gKGNmZykge1xuXHQgICAgICAgICAgICAvLyBBcHBseSBjb25maWcgZGVmYXVsdHNcblx0ICAgICAgICAgICAgdGhpcy5jZmcgPSB0aGlzLmNmZy5leHRlbmQoY2ZnKTtcblxuXHQgICAgICAgICAgICAvLyBTZXQgaW5pdGlhbCB2YWx1ZXNcblx0ICAgICAgICAgICAgdGhpcy5yZXNldCgpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBSZXNldHMgdGhpcyBoYXNoZXIgdG8gaXRzIGluaXRpYWwgc3RhdGUuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIGhhc2hlci5yZXNldCgpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHJlc2V0OiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIC8vIFJlc2V0IGRhdGEgYnVmZmVyXG5cdCAgICAgICAgICAgIEJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0ucmVzZXQuY2FsbCh0aGlzKTtcblxuXHQgICAgICAgICAgICAvLyBQZXJmb3JtIGNvbmNyZXRlLWhhc2hlciBsb2dpY1xuXHQgICAgICAgICAgICB0aGlzLl9kb1Jlc2V0KCk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIFVwZGF0ZXMgdGhpcyBoYXNoZXIgd2l0aCBhIG1lc3NhZ2UuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IG1lc3NhZ2VVcGRhdGUgVGhlIG1lc3NhZ2UgdG8gYXBwZW5kLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7SGFzaGVyfSBUaGlzIGhhc2hlci5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgaGFzaGVyLnVwZGF0ZSgnbWVzc2FnZScpO1xuXHQgICAgICAgICAqICAgICBoYXNoZXIudXBkYXRlKHdvcmRBcnJheSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgdXBkYXRlOiBmdW5jdGlvbiAobWVzc2FnZVVwZGF0ZSkge1xuXHQgICAgICAgICAgICAvLyBBcHBlbmRcblx0ICAgICAgICAgICAgdGhpcy5fYXBwZW5kKG1lc3NhZ2VVcGRhdGUpO1xuXG5cdCAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgaGFzaFxuXHQgICAgICAgICAgICB0aGlzLl9wcm9jZXNzKCk7XG5cblx0ICAgICAgICAgICAgLy8gQ2hhaW5hYmxlXG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBGaW5hbGl6ZXMgdGhlIGhhc2ggY29tcHV0YXRpb24uXG5cdCAgICAgICAgICogTm90ZSB0aGF0IHRoZSBmaW5hbGl6ZSBvcGVyYXRpb24gaXMgZWZmZWN0aXZlbHkgYSBkZXN0cnVjdGl2ZSwgcmVhZC1vbmNlIG9wZXJhdGlvbi5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gbWVzc2FnZVVwZGF0ZSAoT3B0aW9uYWwpIEEgZmluYWwgbWVzc2FnZSB1cGRhdGUuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBoYXNoLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgaGFzaCA9IGhhc2hlci5maW5hbGl6ZSgpO1xuXHQgICAgICAgICAqICAgICB2YXIgaGFzaCA9IGhhc2hlci5maW5hbGl6ZSgnbWVzc2FnZScpO1xuXHQgICAgICAgICAqICAgICB2YXIgaGFzaCA9IGhhc2hlci5maW5hbGl6ZSh3b3JkQXJyYXkpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGZpbmFsaXplOiBmdW5jdGlvbiAobWVzc2FnZVVwZGF0ZSkge1xuXHQgICAgICAgICAgICAvLyBGaW5hbCBtZXNzYWdlIHVwZGF0ZVxuXHQgICAgICAgICAgICBpZiAobWVzc2FnZVVwZGF0ZSkge1xuXHQgICAgICAgICAgICAgICAgdGhpcy5fYXBwZW5kKG1lc3NhZ2VVcGRhdGUpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gUGVyZm9ybSBjb25jcmV0ZS1oYXNoZXIgbG9naWNcblx0ICAgICAgICAgICAgdmFyIGhhc2ggPSB0aGlzLl9kb0ZpbmFsaXplKCk7XG5cblx0ICAgICAgICAgICAgcmV0dXJuIGhhc2g7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIGJsb2NrU2l6ZTogNTEyLzMyLFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ3JlYXRlcyBhIHNob3J0Y3V0IGZ1bmN0aW9uIHRvIGEgaGFzaGVyJ3Mgb2JqZWN0IGludGVyZmFjZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7SGFzaGVyfSBoYXNoZXIgVGhlIGhhc2hlciB0byBjcmVhdGUgYSBoZWxwZXIgZm9yLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7RnVuY3Rpb259IFRoZSBzaG9ydGN1dCBmdW5jdGlvbi5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIFNIQTI1NiA9IENyeXB0b0pTLmxpYi5IYXNoZXIuX2NyZWF0ZUhlbHBlcihDcnlwdG9KUy5hbGdvLlNIQTI1Nik7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgX2NyZWF0ZUhlbHBlcjogZnVuY3Rpb24gKGhhc2hlcikge1xuXHQgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG1lc3NhZ2UsIGNmZykge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBoYXNoZXIuaW5pdChjZmcpLmZpbmFsaXplKG1lc3NhZ2UpO1xuXHQgICAgICAgICAgICB9O1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDcmVhdGVzIGEgc2hvcnRjdXQgZnVuY3Rpb24gdG8gdGhlIEhNQUMncyBvYmplY3QgaW50ZXJmYWNlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtIYXNoZXJ9IGhhc2hlciBUaGUgaGFzaGVyIHRvIHVzZSBpbiB0aGlzIEhNQUMgaGVscGVyLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7RnVuY3Rpb259IFRoZSBzaG9ydGN1dCBmdW5jdGlvbi5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIEhtYWNTSEEyNTYgPSBDcnlwdG9KUy5saWIuSGFzaGVyLl9jcmVhdGVIbWFjSGVscGVyKENyeXB0b0pTLmFsZ28uU0hBMjU2KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBfY3JlYXRlSG1hY0hlbHBlcjogZnVuY3Rpb24gKGhhc2hlcikge1xuXHQgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG1lc3NhZ2UsIGtleSkge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDX2FsZ28uSE1BQy5pbml0KGhhc2hlciwga2V5KS5maW5hbGl6ZShtZXNzYWdlKTtcblx0ICAgICAgICAgICAgfTtcblx0ICAgICAgICB9XG5cdCAgICB9KTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBBbGdvcml0aG0gbmFtZXNwYWNlLlxuXHQgICAgICovXG5cdCAgICB2YXIgQ19hbGdvID0gQy5hbGdvID0ge307XG5cblx0ICAgIHJldHVybiBDO1xuXHR9KE1hdGgpKTtcblxuXG5cdHJldHVybiBDcnlwdG9KUztcblxufSkpOyIsIjsoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XG5cdFx0Ly8gQ29tbW9uSlNcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2NvcmVcIikpO1xuXHR9XG5cdGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gQU1EXG5cdFx0ZGVmaW5lKFtcIi4vY29yZVwiXSwgZmFjdG9yeSk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0Ly8gR2xvYmFsIChicm93c2VyKVxuXHRcdGZhY3Rvcnkocm9vdC5DcnlwdG9KUyk7XG5cdH1cbn0odGhpcywgZnVuY3Rpb24gKENyeXB0b0pTKSB7XG5cblx0KGZ1bmN0aW9uICgpIHtcblx0ICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgdmFyIEMgPSBDcnlwdG9KUztcblx0ICAgIHZhciBDX2xpYiA9IEMubGliO1xuXHQgICAgdmFyIFdvcmRBcnJheSA9IENfbGliLldvcmRBcnJheTtcblx0ICAgIHZhciBIYXNoZXIgPSBDX2xpYi5IYXNoZXI7XG5cdCAgICB2YXIgQ19hbGdvID0gQy5hbGdvO1xuXG5cdCAgICAvLyBSZXVzYWJsZSBvYmplY3Rcblx0ICAgIHZhciBXID0gW107XG5cblx0ICAgIC8qKlxuXHQgICAgICogU0hBLTEgaGFzaCBhbGdvcml0aG0uXG5cdCAgICAgKi9cblx0ICAgIHZhciBTSEExID0gQ19hbGdvLlNIQTEgPSBIYXNoZXIuZXh0ZW5kKHtcblx0ICAgICAgICBfZG9SZXNldDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICB0aGlzLl9oYXNoID0gbmV3IFdvcmRBcnJheS5pbml0KFtcblx0ICAgICAgICAgICAgICAgIDB4Njc0NTIzMDEsIDB4ZWZjZGFiODksXG5cdCAgICAgICAgICAgICAgICAweDk4YmFkY2ZlLCAweDEwMzI1NDc2LFxuXHQgICAgICAgICAgICAgICAgMHhjM2QyZTFmMFxuXHQgICAgICAgICAgICBdKTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgX2RvUHJvY2Vzc0Jsb2NrOiBmdW5jdGlvbiAoTSwgb2Zmc2V0KSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0XG5cdCAgICAgICAgICAgIHZhciBIID0gdGhpcy5faGFzaC53b3JkcztcblxuXHQgICAgICAgICAgICAvLyBXb3JraW5nIHZhcmlhYmxlc1xuXHQgICAgICAgICAgICB2YXIgYSA9IEhbMF07XG5cdCAgICAgICAgICAgIHZhciBiID0gSFsxXTtcblx0ICAgICAgICAgICAgdmFyIGMgPSBIWzJdO1xuXHQgICAgICAgICAgICB2YXIgZCA9IEhbM107XG5cdCAgICAgICAgICAgIHZhciBlID0gSFs0XTtcblxuXHQgICAgICAgICAgICAvLyBDb21wdXRhdGlvblxuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDgwOyBpKyspIHtcblx0ICAgICAgICAgICAgICAgIGlmIChpIDwgMTYpIHtcblx0ICAgICAgICAgICAgICAgICAgICBXW2ldID0gTVtvZmZzZXQgKyBpXSB8IDA7XG5cdCAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciBuID0gV1tpIC0gM10gXiBXW2kgLSA4XSBeIFdbaSAtIDE0XSBeIFdbaSAtIDE2XTtcblx0ICAgICAgICAgICAgICAgICAgICBXW2ldID0gKG4gPDwgMSkgfCAobiA+Pj4gMzEpO1xuXHQgICAgICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgICAgICB2YXIgdCA9ICgoYSA8PCA1KSB8IChhID4+PiAyNykpICsgZSArIFdbaV07XG5cdCAgICAgICAgICAgICAgICBpZiAoaSA8IDIwKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdCArPSAoKGIgJiBjKSB8ICh+YiAmIGQpKSArIDB4NWE4Mjc5OTk7XG5cdCAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGkgPCA0MCkge1xuXHQgICAgICAgICAgICAgICAgICAgIHQgKz0gKGIgXiBjIF4gZCkgKyAweDZlZDllYmExO1xuXHQgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpIDwgNjApIHtcblx0ICAgICAgICAgICAgICAgICAgICB0ICs9ICgoYiAmIGMpIHwgKGIgJiBkKSB8IChjICYgZCkpIC0gMHg3MGU0NDMyNDtcblx0ICAgICAgICAgICAgICAgIH0gZWxzZSAvKiBpZiAoaSA8IDgwKSAqLyB7XG5cdCAgICAgICAgICAgICAgICAgICAgdCArPSAoYiBeIGMgXiBkKSAtIDB4MzU5ZDNlMmE7XG5cdCAgICAgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgICAgIGUgPSBkO1xuXHQgICAgICAgICAgICAgICAgZCA9IGM7XG5cdCAgICAgICAgICAgICAgICBjID0gKGIgPDwgMzApIHwgKGIgPj4+IDIpO1xuXHQgICAgICAgICAgICAgICAgYiA9IGE7XG5cdCAgICAgICAgICAgICAgICBhID0gdDtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIEludGVybWVkaWF0ZSBoYXNoIHZhbHVlXG5cdCAgICAgICAgICAgIEhbMF0gPSAoSFswXSArIGEpIHwgMDtcblx0ICAgICAgICAgICAgSFsxXSA9IChIWzFdICsgYikgfCAwO1xuXHQgICAgICAgICAgICBIWzJdID0gKEhbMl0gKyBjKSB8IDA7XG5cdCAgICAgICAgICAgIEhbM10gPSAoSFszXSArIGQpIHwgMDtcblx0ICAgICAgICAgICAgSFs0XSA9IChIWzRdICsgZSkgfCAwO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBfZG9GaW5hbGl6ZTogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIGRhdGEgPSB0aGlzLl9kYXRhO1xuXHQgICAgICAgICAgICB2YXIgZGF0YVdvcmRzID0gZGF0YS53b3JkcztcblxuXHQgICAgICAgICAgICB2YXIgbkJpdHNUb3RhbCA9IHRoaXMuX25EYXRhQnl0ZXMgKiA4O1xuXHQgICAgICAgICAgICB2YXIgbkJpdHNMZWZ0ID0gZGF0YS5zaWdCeXRlcyAqIDg7XG5cblx0ICAgICAgICAgICAgLy8gQWRkIHBhZGRpbmdcblx0ICAgICAgICAgICAgZGF0YVdvcmRzW25CaXRzTGVmdCA+Pj4gNV0gfD0gMHg4MCA8PCAoMjQgLSBuQml0c0xlZnQgJSAzMik7XG5cdCAgICAgICAgICAgIGRhdGFXb3Jkc1soKChuQml0c0xlZnQgKyA2NCkgPj4+IDkpIDw8IDQpICsgMTRdID0gTWF0aC5mbG9vcihuQml0c1RvdGFsIC8gMHgxMDAwMDAwMDApO1xuXHQgICAgICAgICAgICBkYXRhV29yZHNbKCgobkJpdHNMZWZ0ICsgNjQpID4+PiA5KSA8PCA0KSArIDE1XSA9IG5CaXRzVG90YWw7XG5cdCAgICAgICAgICAgIGRhdGEuc2lnQnl0ZXMgPSBkYXRhV29yZHMubGVuZ3RoICogNDtcblxuXHQgICAgICAgICAgICAvLyBIYXNoIGZpbmFsIGJsb2Nrc1xuXHQgICAgICAgICAgICB0aGlzLl9wcm9jZXNzKCk7XG5cblx0ICAgICAgICAgICAgLy8gUmV0dXJuIGZpbmFsIGNvbXB1dGVkIGhhc2hcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2hhc2g7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIGNsb25lOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIHZhciBjbG9uZSA9IEhhc2hlci5jbG9uZS5jYWxsKHRoaXMpO1xuXHQgICAgICAgICAgICBjbG9uZS5faGFzaCA9IHRoaXMuX2hhc2guY2xvbmUoKTtcblxuXHQgICAgICAgICAgICByZXR1cm4gY2xvbmU7XG5cdCAgICAgICAgfVxuXHQgICAgfSk7XG5cblx0ICAgIC8qKlxuXHQgICAgICogU2hvcnRjdXQgZnVuY3Rpb24gdG8gdGhlIGhhc2hlcidzIG9iamVjdCBpbnRlcmZhY2UuXG5cdCAgICAgKlxuXHQgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGhhc2guXG5cdCAgICAgKlxuXHQgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgaGFzaC5cblx0ICAgICAqXG5cdCAgICAgKiBAc3RhdGljXG5cdCAgICAgKlxuXHQgICAgICogQGV4YW1wbGVcblx0ICAgICAqXG5cdCAgICAgKiAgICAgdmFyIGhhc2ggPSBDcnlwdG9KUy5TSEExKCdtZXNzYWdlJyk7XG5cdCAgICAgKiAgICAgdmFyIGhhc2ggPSBDcnlwdG9KUy5TSEExKHdvcmRBcnJheSk7XG5cdCAgICAgKi9cblx0ICAgIEMuU0hBMSA9IEhhc2hlci5fY3JlYXRlSGVscGVyKFNIQTEpO1xuXG5cdCAgICAvKipcblx0ICAgICAqIFNob3J0Y3V0IGZ1bmN0aW9uIHRvIHRoZSBITUFDJ3Mgb2JqZWN0IGludGVyZmFjZS5cblx0ICAgICAqXG5cdCAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gaGFzaC5cblx0ICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30ga2V5IFRoZSBzZWNyZXQga2V5LlxuXHQgICAgICpcblx0ICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIEhNQUMuXG5cdCAgICAgKlxuXHQgICAgICogQHN0YXRpY1xuXHQgICAgICpcblx0ICAgICAqIEBleGFtcGxlXG5cdCAgICAgKlxuXHQgICAgICogICAgIHZhciBobWFjID0gQ3J5cHRvSlMuSG1hY1NIQTEobWVzc2FnZSwga2V5KTtcblx0ICAgICAqL1xuXHQgICAgQy5IbWFjU0hBMSA9IEhhc2hlci5fY3JlYXRlSG1hY0hlbHBlcihTSEExKTtcblx0fSgpKTtcblxuXG5cdHJldHVybiBDcnlwdG9KUy5TSEExO1xuXG59KSk7IiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0aWYgKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XG5cdFx0bW9kdWxlLnBhdGhzID0gW107XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwidXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJylcblN0b3JhZ2UgPSByZXF1aXJlKCcuL3N0b3JhZ2UnKVxuXG5jbGFzcyBBZGFwdGVyc1xuXG4gICMjIEFkYXB0ZXIgZm9yIHVzaW5nIHRoZSBnaW1lbCBiYWNrZW5kLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0FsZXBoYmV0L2dpbWVsXG4gICMjIHVzZXMgalF1ZXJ5IHRvIHNlbmQgZGF0YSBpZiBgJC5hamF4YCBpcyBmb3VuZC4gRmFsbHMgYmFjayBvbiBwbGFpbiBqcyB4aHJcbiAgIyMgcGFyYW1zOlxuICAjIyAtIHVybDogR2ltZWwgdHJhY2sgVVJMIHRvIHBvc3QgZXZlbnRzIHRvXG4gICMjIC0gbmFtZXBzYWNlOiBuYW1lc3BhY2UgZm9yIEdpbWVsIChhbGxvd3Mgc2V0dGluZyBkaWZmZXJlbnQgZW52aXJvbm1lbnRzIGV0YylcbiAgIyMgLSBzdG9yYWdlIChvcHRpb25hbCkgLSBzdG9yYWdlIGFkYXB0ZXIgZm9yIHRoZSBxdWV1ZVxuICBjbGFzcyBAR2ltZWxBZGFwdGVyXG4gICAgcXVldWVfbmFtZTogJ19naW1lbF9xdWV1ZSdcblxuICAgIGNvbnN0cnVjdG9yOiAodXJsLCBuYW1lc3BhY2UsIHN0b3JhZ2UgPSBBZGFwdGVycy5Mb2NhbFN0b3JhZ2VBZGFwdGVyKSAtPlxuICAgICAgQF9zdG9yYWdlID0gc3RvcmFnZVxuICAgICAgQHVybCA9IHVybFxuICAgICAgQG5hbWVzcGFjZSA9IG5hbWVzcGFjZVxuICAgICAgQF9xdWV1ZSA9IEpTT04ucGFyc2UoQF9zdG9yYWdlLmdldChAcXVldWVfbmFtZSkgfHwgJ1tdJylcbiAgICAgIEBfZmx1c2goKVxuXG4gICAgX3JlbW92ZV9xdXVpZDogKHF1dWlkKSAtPlxuICAgICAgKGVyciwgcmVzKSA9PlxuICAgICAgICByZXR1cm4gaWYgZXJyXG4gICAgICAgIHV0aWxzLnJlbW92ZShAX3F1ZXVlLCAoZWwpIC0+IGVsLnByb3BlcnRpZXMuX3F1dWlkID09IHF1dWlkKVxuICAgICAgICBAX3N0b3JhZ2Uuc2V0KEBxdWV1ZV9uYW1lLCBKU09OLnN0cmluZ2lmeShAX3F1ZXVlKSlcblxuICAgIF9qcXVlcnlfZ2V0OiAodXJsLCBkYXRhLCBjYWxsYmFjaykgLT5cbiAgICAgIHV0aWxzLmxvZygnc2VuZCByZXF1ZXN0IHVzaW5nIGpRdWVyeScpXG4gICAgICB3aW5kb3cualF1ZXJ5LmFqYXhcbiAgICAgICAgbWV0aG9kOiAnR0VUJ1xuICAgICAgICB1cmw6IHVybFxuICAgICAgICBkYXRhOiBkYXRhXG4gICAgICAgIHN1Y2Nlc3M6IGNhbGxiYWNrXG5cbiAgICBfcGxhaW5fanNfZ2V0OiAodXJsLCBkYXRhLCBjYWxsYmFjaykgLT5cbiAgICAgIHV0aWxzLmxvZygnZmFsbGJhY2sgb24gcGxhaW4ganMgeGhyJylcbiAgICAgIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpXG4gICAgICBwYXJhbXMgPSAoXCIje2VuY29kZVVSSUNvbXBvbmVudChrKX09I3tlbmNvZGVVUklDb21wb25lbnQodil9XCIgZm9yIGssdiBvZiBkYXRhKVxuICAgICAgcGFyYW1zID0gcGFyYW1zLmpvaW4oJyYnKS5yZXBsYWNlKC8lMjAvZywgJysnKVxuICAgICAgeGhyLm9wZW4oJ0dFVCcsIFwiI3t1cmx9PyN7cGFyYW1zfVwiKVxuICAgICAgeGhyLm9ubG9hZCA9IC0+XG4gICAgICAgIGlmIHhoci5zdGF0dXMgPT0gMjAwXG4gICAgICAgICAgY2FsbGJhY2soKVxuICAgICAgeGhyLnNlbmQoKVxuXG4gICAgX2FqYXhfZ2V0OiAodXJsLCBkYXRhLCBjYWxsYmFjaykgLT5cbiAgICAgIGlmIHdpbmRvdy5qUXVlcnk/LmFqYXhcbiAgICAgICAgQF9qcXVlcnlfZ2V0KHVybCwgZGF0YSwgY2FsbGJhY2spXG4gICAgICBlbHNlXG4gICAgICAgIEBfcGxhaW5fanNfZ2V0KHVybCwgZGF0YSwgY2FsbGJhY2spXG5cbiAgICBfZmx1c2g6IC0+XG4gICAgICBmb3IgaXRlbSBpbiBAX3F1ZXVlXG4gICAgICAgIGNhbGxiYWNrID0gQF9yZW1vdmVfcXV1aWQoaXRlbS5wcm9wZXJ0aWVzLl9xdXVpZClcbiAgICAgICAgQF9hamF4X2dldChAdXJsLCB1dGlscy5vbWl0KGl0ZW0ucHJvcGVydGllcywgJ19xdXVpZCcpLCBjYWxsYmFjaylcbiAgICAgICAgbnVsbFxuXG4gICAgX3VzZXJfdXVpZDogKGV4cGVyaW1lbnQsIGdvYWwpIC0+XG4gICAgICByZXR1cm4gdXRpbHMudXVpZCgpIHVubGVzcyBleHBlcmltZW50LnVzZXJfaWRcbiAgICAgICMgaWYgZ29hbCBpcyBub3QgdW5pcXVlLCB3ZSB0cmFjayBpdCBldmVyeSB0aW1lLiByZXR1cm4gYSBuZXcgcmFuZG9tIHV1aWRcbiAgICAgIHJldHVybiB1dGlscy51dWlkKCkgdW5sZXNzIGdvYWwudW5pcXVlXG4gICAgICAjIGZvciBhIGdpdmVuIHVzZXIgaWQsIG5hbWVzcGFjZSBhbmQgZXhwZXJpbWVudCwgdGhlIHV1aWQgd2lsbCBhbHdheXMgYmUgdGhlIHNhbWVcbiAgICAgICMgdGhpcyBhdm9pZHMgY291bnRpbmcgZ29hbHMgdHdpY2UgZm9yIHRoZSBzYW1lIHVzZXIgYWNyb3NzIGRpZmZlcmVudCBkZXZpY2VzXG4gICAgICB1dGlscy5zaGExKFwiI3tAbmFtZXNwYWNlfS4je2V4cGVyaW1lbnQubmFtZX0uI3tleHBlcmltZW50LnVzZXJfaWR9XCIpXG5cbiAgICBfdHJhY2s6IChleHBlcmltZW50LCB2YXJpYW50LCBnb2FsKSAtPlxuICAgICAgdXRpbHMubG9nKFwiUGVyc2lzdGVudCBRdWV1ZSBHaW1lbCB0cmFjazogI3tAbmFtZXNwYWNlfSwgI3tleHBlcmltZW50Lm5hbWV9LCAje3ZhcmlhbnR9LCAje2dvYWwubmFtZX1cIilcbiAgICAgIEBfcXVldWUuc2hpZnQoKSBpZiBAX3F1ZXVlLmxlbmd0aCA+IDEwMFxuICAgICAgQF9xdWV1ZS5wdXNoXG4gICAgICAgIHByb3BlcnRpZXM6XG4gICAgICAgICAgZXhwZXJpbWVudDogZXhwZXJpbWVudC5uYW1lXG4gICAgICAgICAgX3F1dWlkOiB1dGlscy51dWlkKCkgICMgcXVldWUgdXVpZCAodXNlZCBvbmx5IGludGVybmFsbHkpXG4gICAgICAgICAgdXVpZDogQF91c2VyX3V1aWQoZXhwZXJpbWVudCwgZ29hbClcbiAgICAgICAgICB2YXJpYW50OiB2YXJpYW50XG4gICAgICAgICAgZXZlbnQ6IGdvYWwubmFtZVxuICAgICAgICAgIG5hbWVzcGFjZTogQG5hbWVzcGFjZVxuICAgICAgQF9zdG9yYWdlLnNldChAcXVldWVfbmFtZSwgSlNPTi5zdHJpbmdpZnkoQF9xdWV1ZSkpXG4gICAgICBAX2ZsdXNoKClcblxuICAgIGV4cGVyaW1lbnRfc3RhcnQ6IChleHBlcmltZW50LCB2YXJpYW50KSAtPlxuICAgICAgQF90cmFjayhleHBlcmltZW50LCB2YXJpYW50LCB7bmFtZTogJ3BhcnRpY2lwYXRlJywgdW5pcXVlOiB0cnVlfSlcblxuICAgIGdvYWxfY29tcGxldGU6IChleHBlcmltZW50LCB2YXJpYW50LCBnb2FsX25hbWUsIHByb3BzKSAtPlxuICAgICAgQF90cmFjayhleHBlcmltZW50LCB2YXJpYW50LCB1dGlscy5kZWZhdWx0cyh7bmFtZTogZ29hbF9uYW1lfSwgcHJvcHMpKVxuXG5cbiAgY2xhc3MgQFBlcnNpc3RlbnRRdWV1ZUdvb2dsZUFuYWx5dGljc0FkYXB0ZXJcbiAgICBuYW1lc3BhY2U6ICdhbGVwaGJldCdcbiAgICBxdWV1ZV9uYW1lOiAnX2dhX3F1ZXVlJ1xuXG4gICAgY29uc3RydWN0b3I6IChzdG9yYWdlID0gQWRhcHRlcnMuTG9jYWxTdG9yYWdlQWRhcHRlcikgLT5cbiAgICAgIEBfc3RvcmFnZSA9IHN0b3JhZ2VcbiAgICAgIEBfcXVldWUgPSBKU09OLnBhcnNlKEBfc3RvcmFnZS5nZXQoQHF1ZXVlX25hbWUpIHx8ICdbXScpXG4gICAgICBAX2ZsdXNoKClcblxuICAgIF9yZW1vdmVfdXVpZDogKHV1aWQpIC0+XG4gICAgICA9PlxuICAgICAgICB1dGlscy5yZW1vdmUoQF9xdWV1ZSwgKGVsKSAtPiBlbC51dWlkID09IHV1aWQpXG4gICAgICAgIEBfc3RvcmFnZS5zZXQoQHF1ZXVlX25hbWUsIEpTT04uc3RyaW5naWZ5KEBfcXVldWUpKVxuXG4gICAgX2ZsdXNoOiAtPlxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdnYSBub3QgZGVmaW5lZC4gUGxlYXNlIG1ha2Ugc3VyZSB5b3VyIFVuaXZlcnNhbCBhbmFseXRpY3MgaXMgc2V0IHVwIGNvcnJlY3RseScpIGlmIHR5cGVvZiBnYSBpc250ICdmdW5jdGlvbidcbiAgICAgIGZvciBpdGVtIGluIEBfcXVldWVcbiAgICAgICAgY2FsbGJhY2sgPSBAX3JlbW92ZV91dWlkKGl0ZW0udXVpZClcbiAgICAgICAgZ2EoJ3NlbmQnLCAnZXZlbnQnLCBpdGVtLmNhdGVnb3J5LCBpdGVtLmFjdGlvbiwgaXRlbS5sYWJlbCwgeydoaXRDYWxsYmFjayc6IGNhbGxiYWNrLCAnbm9uSW50ZXJhY3Rpb24nOiAxfSlcblxuICAgIF90cmFjazogKGNhdGVnb3J5LCBhY3Rpb24sIGxhYmVsKSAtPlxuICAgICAgdXRpbHMubG9nKFwiUGVyc2lzdGVudCBRdWV1ZSBHb29nbGUgVW5pdmVyc2FsIEFuYWx5dGljcyB0cmFjazogI3tjYXRlZ29yeX0sICN7YWN0aW9ufSwgI3tsYWJlbH1cIilcbiAgICAgIEBfcXVldWUuc2hpZnQoKSBpZiBAX3F1ZXVlLmxlbmd0aCA+IDEwMFxuICAgICAgQF9xdWV1ZS5wdXNoKHt1dWlkOiB1dGlscy51dWlkKCksIGNhdGVnb3J5OiBjYXRlZ29yeSwgYWN0aW9uOiBhY3Rpb24sIGxhYmVsOiBsYWJlbH0pXG4gICAgICBAX3N0b3JhZ2Uuc2V0KEBxdWV1ZV9uYW1lLCBKU09OLnN0cmluZ2lmeShAX3F1ZXVlKSlcbiAgICAgIEBfZmx1c2goKVxuXG4gICAgZXhwZXJpbWVudF9zdGFydDogKGV4cGVyaW1lbnQsIHZhcmlhbnQpIC0+XG4gICAgICBAX3RyYWNrKEBuYW1lc3BhY2UsIFwiI3tleHBlcmltZW50Lm5hbWV9IHwgI3t2YXJpYW50fVwiLCAnVmlzaXRvcnMnKVxuXG4gICAgZ29hbF9jb21wbGV0ZTogKGV4cGVyaW1lbnQsIHZhcmlhbnQsIGdvYWxfbmFtZSwgX3Byb3BzKSAtPlxuICAgICAgQF90cmFjayhAbmFtZXNwYWNlLCBcIiN7ZXhwZXJpbWVudC5uYW1lfSB8ICN7dmFyaWFudH1cIiwgZ29hbF9uYW1lKVxuXG5cbiAgY2xhc3MgQFBlcnNpc3RlbnRRdWV1ZUtlZW5BZGFwdGVyXG4gICAgcXVldWVfbmFtZTogJ19rZWVuX3F1ZXVlJ1xuXG4gICAgY29uc3RydWN0b3I6IChrZWVuX2NsaWVudCwgc3RvcmFnZSA9IEFkYXB0ZXJzLkxvY2FsU3RvcmFnZUFkYXB0ZXIpIC0+XG4gICAgICBAY2xpZW50ID0ga2Vlbl9jbGllbnRcbiAgICAgIEBfc3RvcmFnZSA9IHN0b3JhZ2VcbiAgICAgIEBfcXVldWUgPSBKU09OLnBhcnNlKEBfc3RvcmFnZS5nZXQoQHF1ZXVlX25hbWUpIHx8ICdbXScpXG4gICAgICBAX2ZsdXNoKClcblxuICAgIF9yZW1vdmVfcXV1aWQ6IChxdXVpZCkgLT5cbiAgICAgIChlcnIsIHJlcykgPT5cbiAgICAgICAgcmV0dXJuIGlmIGVyclxuICAgICAgICB1dGlscy5yZW1vdmUoQF9xdWV1ZSwgKGVsKSAtPiBlbC5wcm9wZXJ0aWVzLl9xdXVpZCA9PSBxdXVpZClcbiAgICAgICAgQF9zdG9yYWdlLnNldChAcXVldWVfbmFtZSwgSlNPTi5zdHJpbmdpZnkoQF9xdWV1ZSkpXG5cbiAgICBfZmx1c2g6IC0+XG4gICAgICBmb3IgaXRlbSBpbiBAX3F1ZXVlXG4gICAgICAgIGNhbGxiYWNrID0gQF9yZW1vdmVfcXV1aWQoaXRlbS5wcm9wZXJ0aWVzLl9xdXVpZClcbiAgICAgICAgQGNsaWVudC5hZGRFdmVudChpdGVtLmV4cGVyaW1lbnRfbmFtZSwgdXRpbHMub21pdChpdGVtLnByb3BlcnRpZXMsICdfcXV1aWQnKSwgY2FsbGJhY2spXG5cbiAgICBfdXNlcl91dWlkOiAoZXhwZXJpbWVudCwgZ29hbCkgLT5cbiAgICAgIHJldHVybiB1dGlscy51dWlkKCkgdW5sZXNzIGV4cGVyaW1lbnQudXNlcl9pZFxuICAgICAgIyBpZiBnb2FsIGlzIG5vdCB1bmlxdWUsIHdlIHRyYWNrIGl0IGV2ZXJ5IHRpbWUuIHJldHVybiBhIG5ldyByYW5kb20gdXVpZFxuICAgICAgcmV0dXJuIHV0aWxzLnV1aWQoKSB1bmxlc3MgZ29hbC51bmlxdWVcbiAgICAgICMgZm9yIGEgZ2l2ZW4gdXNlciBpZCwgbmFtZXNwYWNlIGFuZCBleHBlcmltZW50LCB0aGUgdXVpZCB3aWxsIGFsd2F5cyBiZSB0aGUgc2FtZVxuICAgICAgIyB0aGlzIGF2b2lkcyBjb3VudGluZyBnb2FscyB0d2ljZSBmb3IgdGhlIHNhbWUgdXNlciBhY3Jvc3MgZGlmZmVyZW50IGRldmljZXNcbiAgICAgIHV0aWxzLnNoYTEoXCIje0BuYW1lc3BhY2V9LiN7ZXhwZXJpbWVudC5uYW1lfS4je2V4cGVyaW1lbnQudXNlcl9pZH1cIilcblxuICAgIF90cmFjazogKGV4cGVyaW1lbnQsIHZhcmlhbnQsIGdvYWwpIC0+XG4gICAgICB1dGlscy5sb2coXCJQZXJzaXN0ZW50IFF1ZXVlIEtlZW4gdHJhY2s6ICN7ZXhwZXJpbWVudC5uYW1lfSwgI3t2YXJpYW50fSwgI3tldmVudH1cIilcbiAgICAgIEBfcXVldWUuc2hpZnQoKSBpZiBAX3F1ZXVlLmxlbmd0aCA+IDEwMFxuICAgICAgQF9xdWV1ZS5wdXNoXG4gICAgICAgIGV4cGVyaW1lbnRfbmFtZTogZXhwZXJpbWVudC5uYW1lXG4gICAgICAgIHByb3BlcnRpZXM6XG4gICAgICAgICAgX3F1dWlkOiB1dGlscy51dWlkKCkgICMgcXVldWUgdXVpZCAodXNlZCBvbmx5IGludGVybmFsbHkpXG4gICAgICAgICAgdXVpZDogQF91c2VyX3V1aWQoZXhwZXJpbWVudCwgZ29hbClcbiAgICAgICAgICB2YXJpYW50OiB2YXJpYW50XG4gICAgICAgICAgZXZlbnQ6IGdvYWwubmFtZVxuICAgICAgQF9zdG9yYWdlLnNldChAcXVldWVfbmFtZSwgSlNPTi5zdHJpbmdpZnkoQF9xdWV1ZSkpXG4gICAgICBAX2ZsdXNoKClcblxuICAgIGV4cGVyaW1lbnRfc3RhcnQ6IChleHBlcmltZW50LCB2YXJpYW50KSAtPlxuICAgICAgQF90cmFjayhleHBlcmltZW50LCB2YXJpYW50LCB7bmFtZTogJ3BhcnRpY2lwYXRlJywgdW5pcXVlOiB0cnVlfSlcblxuICAgIGdvYWxfY29tcGxldGU6IChleHBlcmltZW50LCB2YXJpYW50LCBnb2FsX25hbWUsIHByb3BzKSAtPlxuICAgICAgQF90cmFjayhleHBlcmltZW50LCB2YXJpYW50LCB1dGlscy5kZWZhdWx0cyh7bmFtZTogZ29hbF9uYW1lfSwgcHJvcHMpKVxuXG5cbiAgY2xhc3MgQEdvb2dsZVVuaXZlcnNhbEFuYWx5dGljc0FkYXB0ZXJcbiAgICBAbmFtZXNwYWNlOiAnYWxlcGhiZXQnXG5cbiAgICBAX3RyYWNrOiAoY2F0ZWdvcnksIGFjdGlvbiwgbGFiZWwpIC0+XG4gICAgICB1dGlscy5sb2coXCJHb29nbGUgVW5pdmVyc2FsIEFuYWx5dGljcyB0cmFjazogI3tjYXRlZ29yeX0sICN7YWN0aW9ufSwgI3tsYWJlbH1cIilcbiAgICAgIHRocm93IG5ldyBFcnJvcignZ2Egbm90IGRlZmluZWQuIFBsZWFzZSBtYWtlIHN1cmUgeW91ciBVbml2ZXJzYWwgYW5hbHl0aWNzIGlzIHNldCB1cCBjb3JyZWN0bHknKSBpZiB0eXBlb2YgZ2EgaXNudCAnZnVuY3Rpb24nXG4gICAgICBnYSgnc2VuZCcsICdldmVudCcsIGNhdGVnb3J5LCBhY3Rpb24sIGxhYmVsLCB7J25vbkludGVyYWN0aW9uJzogMX0pXG5cbiAgICBAZXhwZXJpbWVudF9zdGFydDogKGV4cGVyaW1lbnQsIHZhcmlhbnQpIC0+XG4gICAgICBAX3RyYWNrKEBuYW1lc3BhY2UsIFwiI3tleHBlcmltZW50Lm5hbWV9IHwgI3t2YXJpYW50fVwiLCAnVmlzaXRvcnMnKVxuXG4gICAgQGdvYWxfY29tcGxldGU6IChleHBlcmltZW50LCB2YXJpYW50LCBnb2FsX25hbWUsIF9wcm9wcykgLT5cbiAgICAgIEBfdHJhY2soQG5hbWVzcGFjZSwgXCIje2V4cGVyaW1lbnQubmFtZX0gfCAje3ZhcmlhbnR9XCIsIGdvYWxfbmFtZSlcblxuXG4gIGNsYXNzIEBMb2NhbFN0b3JhZ2VBZGFwdGVyXG4gICAgQG5hbWVzcGFjZTogJ2FsZXBoYmV0J1xuICAgIEBzZXQ6IChrZXksIHZhbHVlKSAtPlxuICAgICAgbmV3IFN0b3JhZ2UoQG5hbWVzcGFjZSkuc2V0KGtleSwgdmFsdWUpXG4gICAgQGdldDogKGtleSkgLT5cbiAgICAgIG5ldyBTdG9yYWdlKEBuYW1lc3BhY2UpLmdldChrZXkpXG5cbiAgY2xhc3MgQFBpZ2d5U3RvcmFnZUFkYXB0ZXJcbiAgICBAbmFtZXNwYWNlOiAnX3BpZ2d5OmFsZXBoYmV0J1xuICAgIEBzZXQ6IChrZXksIHZhbHVlKSAtPlxuICAgICAgbmV3IFN0b3JhZ2UoQG5hbWVzcGFjZSkuc2V0KGtleSwgdmFsdWUpXG4gICAgQGdldDogKGtleSkgLT5cbiAgICAgIG5ldyBTdG9yYWdlKEBuYW1lc3BhY2UpLmdldChrZXkpXG5cbm1vZHVsZS5leHBvcnRzID0gQWRhcHRlcnNcbiIsInV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpXG5hZGFwdGVycyA9IHJlcXVpcmUoJy4vYWRhcHRlcnMnKVxub3B0aW9ucyA9IHJlcXVpcmUoJy4vb3B0aW9ucycpXG5cbmNsYXNzIEFsZXBoQmV0XG4gIEBvcHRpb25zID0gb3B0aW9uc1xuICBAdXRpbHMgPSB1dGlsc1xuXG4gIEBHaW1lbEFkYXB0ZXIgPSBhZGFwdGVycy5HaW1lbEFkYXB0ZXJcbiAgQFBlcnNpc3RlbnRRdWV1ZUdvb2dsZUFuYWx5dGljc0FkYXB0ZXIgPSBhZGFwdGVycy5QZXJzaXN0ZW50UXVldWVHb29nbGVBbmFseXRpY3NBZGFwdGVyXG4gIEBQZXJzaXN0ZW50UXVldWVLZWVuQWRhcHRlciA9IGFkYXB0ZXJzLlBlcnNpc3RlbnRRdWV1ZUtlZW5BZGFwdGVyXG5cbiAgY2xhc3MgQEV4cGVyaW1lbnRcbiAgICBAX29wdGlvbnM6XG4gICAgICBuYW1lOiBudWxsXG4gICAgICB2YXJpYW50czogbnVsbFxuICAgICAgdXNlcl9pZDogbnVsbFxuICAgICAgc2FtcGxlOiAxLjBcbiAgICAgIHRyaWdnZXI6IC0+IHRydWVcbiAgICAgIHRyYWNraW5nX2FkYXB0ZXI6IGFkYXB0ZXJzLkdvb2dsZVVuaXZlcnNhbEFuYWx5dGljc0FkYXB0ZXJcbiAgICAgIHN0b3JhZ2VfYWRhcHRlcjogYWRhcHRlcnMuUGlnZ3lTdG9yYWdlQWRhcHRlclxuXG4gICAgY29uc3RydWN0b3I6IChAb3B0aW9ucyA9IHt9KSAtPlxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5IEAsICd1c2VyX2lkJywge1xuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICBnZXQ6IC0+XG4gICAgICAgICAgaWYgdHlwZW9mIEBfdXNlcl9pZCBpcyAnZnVuY3Rpb24nIHRoZW4gcmV0dXJuIEBfdXNlcl9pZCgpO1xuICAgICAgICAgIHJldHVybiBAX3VzZXJfaWQ7XG4gICAgICAgIHNldDogKHZhbHVlKSAtPlxuICAgICAgICAgIEBfdXNlcl9pZCA9IHZhbHVlXG4gICAgICB9XG5cbiAgICAgIHV0aWxzLmRlZmF1bHRzKEBvcHRpb25zLCBFeHBlcmltZW50Ll9vcHRpb25zKVxuICAgICAgX3ZhbGlkYXRlLmNhbGwodGhpcylcbiAgICAgIEBuYW1lID0gQG9wdGlvbnMubmFtZVxuICAgICAgQHZhcmlhbnRzID0gQG9wdGlvbnMudmFyaWFudHNcbiAgICAgIEBfdmFyaWFudF92YWx1ZSA9IG51bGxcbiAgICAgIEB1c2VyX2lkID0gQG9wdGlvbnMudXNlcl9pZFxuICAgICAgQHZhcmlhbnRfbmFtZXMgPSB1dGlscy5rZXlzKEB2YXJpYW50cylcbiAgICAgIEBydW4oKVxuXG4gICAgcnVuOiAtPiBAX3J1bigpXG5cbiAgICBfcnVuOiAtPlxuICAgICAgdXRpbHMubG9nKFwicnVubmluZyB3aXRoIG9wdGlvbnM6ICN7SlNPTi5zdHJpbmdpZnkoQG9wdGlvbnMpfVwiKVxuICAgICAgaWYgdmFyaWFudCA9IEBnZXRfc3RvcmVkX3ZhcmlhbnQoKVxuIyBhIHZhcmlhbnQgd2FzIGFscmVhZHkgY2hvc2VuLiBhY3RpdmF0ZSBpdFxuICAgICAgICB1dGlscy5sb2coXCIje3ZhcmlhbnR9IGFjdGl2ZVwiKVxuICAgICAgICBAYWN0aXZhdGVfdmFyaWFudCh2YXJpYW50KVxuICAgICAgZWxzZVxuICAgICAgICBAY29uZGl0aW9uYWxseV9hY3RpdmF0ZV92YXJpYW50KClcblxuICAgIGdldF92YXJpYW50X3ZhbHVlOiAtPiBAX3ZhcmlhbnRfdmFsdWVcblxuICAgIGFjdGl2YXRlX3ZhcmlhbnQ6ICh2YXJpYW50KSAtPlxuICAgICAgQF92YXJpYW50X3ZhbHVlID0gQHZhcmlhbnRzW3ZhcmlhbnRdPy5hY3RpdmF0ZSh0aGlzKVxuICAgICAgQHN0b3JhZ2UoKS5zZXQoXCIje0BvcHRpb25zLm5hbWV9OnZhcmlhbnRcIiwgdmFyaWFudClcbiAgICAgIEB0cmFja2luZygpPy52YXJpYW50X2FjdGl2YXRlZCh0aGlzLCB2YXJpYW50KVxuICAgICAgdXRpbHMubG9nKFwiYWN0aXZhdGVkIHZhcmlhbnQgOiAje3ZhcmlhbnR9XCIsIFwidmFyaWFudCB2YWx1ZTogI3tAX3ZhcmlhbnRfdmFsdWV9XCIpXG5cbiMgaWYgZXhwZXJpbWVudCBjb25kaXRpb25zIG1hdGNoLCBwaWNrIGFuZCBhY3RpdmF0ZSBhIHZhcmlhbnQsIHRyYWNrIGV4cGVyaW1lbnQgc3RhcnRcbiAgICBjb25kaXRpb25hbGx5X2FjdGl2YXRlX3ZhcmlhbnQ6IC0+XG4gICAgICByZXR1cm4gdW5sZXNzIEBvcHRpb25zLnRyaWdnZXIoKVxuICAgICAgdXRpbHMubG9nKCd0cmlnZ2VyIHNldCcpXG4gICAgICByZXR1cm4gdW5sZXNzIEBpbl9zYW1wbGUoKVxuICAgICAgdXRpbHMubG9nKCdpbiBzYW1wbGUnKVxuICAgICAgdmFyaWFudCA9IEBwaWNrX3ZhcmlhbnQoKVxuICAgICAgQHRyYWNraW5nKCkuZXhwZXJpbWVudF9zdGFydCh0aGlzLCB2YXJpYW50KVxuICAgICAgQGFjdGl2YXRlX3ZhcmlhbnQodmFyaWFudClcblxuICAgIGdvYWxfY29tcGxldGU6IChnb2FsX25hbWUsIHByb3BzID0ge30pIC0+XG4gICAgICB1dGlscy5kZWZhdWx0cyhwcm9wcywge3VuaXF1ZTogdHJ1ZX0pXG4gICAgICByZXR1cm4gaWYgcHJvcHMudW5pcXVlICYmIEBzdG9yYWdlKCkuZ2V0KFwiI3tAb3B0aW9ucy5uYW1lfToje2dvYWxfbmFtZX1cIilcbiAgICAgIHZhcmlhbnQgPSBAZ2V0X3N0b3JlZF92YXJpYW50KClcbiAgICAgIHJldHVybiB1bmxlc3MgdmFyaWFudFxuICAgICAgQHN0b3JhZ2UoKS5zZXQoXCIje0BvcHRpb25zLm5hbWV9OiN7Z29hbF9uYW1lfVwiLCB0cnVlKSBpZiBwcm9wcy51bmlxdWVcbiAgICAgIHV0aWxzLmxvZyhcImV4cGVyaW1lbnQ6ICN7QG9wdGlvbnMubmFtZX0gdmFyaWFudDoje3ZhcmlhbnR9IGdvYWw6I3tnb2FsX25hbWV9IGNvbXBsZXRlXCIpXG4gICAgICBAdHJhY2tpbmcoKS5nb2FsX2NvbXBsZXRlKHRoaXMsIHZhcmlhbnQsIGdvYWxfbmFtZSwgcHJvcHMpXG5cbiAgICBnZXRfc3RvcmVkX3ZhcmlhbnQ6IC0+XG4gICAgICBAc3RvcmFnZSgpLmdldChcIiN7QG9wdGlvbnMubmFtZX06dmFyaWFudFwiKVxuXG4gICAgcGlja192YXJpYW50OiAtPlxuICAgICAgYWxsX3ZhcmlhbnRzX2hhdmVfd2VpZ2h0cyA9IHV0aWxzLmNoZWNrX3dlaWdodHMoQHZhcmlhbnRzKVxuICAgICAgdXRpbHMubG9nKFwiYWxsIHZhcmlhbnRzIGhhdmUgd2VpZ2h0czogI3thbGxfdmFyaWFudHNfaGF2ZV93ZWlnaHRzfVwiKVxuICAgICAgaWYgYWxsX3ZhcmlhbnRzX2hhdmVfd2VpZ2h0cyB0aGVuIEBwaWNrX3dlaWdodGVkX3ZhcmlhbnQoKSBlbHNlIEBwaWNrX3Vud2VpZ2h0ZWRfdmFyaWFudCgpXG5cbiAgICBwaWNrX3dlaWdodGVkX3ZhcmlhbnQ6IC0+XG5cbiMgQ2hvb3NpbmcgYSB3ZWlnaHRlZCB2YXJpYW50OlxuIyBGb3IgQSwgQiwgQyB3aXRoIHdlaWdodHMgMSwgMywgNlxuIyB2YXJpYW50cyA9IEEsIEIsIENcbiMgd2VpZ2h0cyA9IDEsIDMsIDZcbiMgd2VpZ2h0c19zdW0gPSAxMCAoc3VtIG9mIHdlaWdodHMpXG4jIHdlaWdodGVkX2luZGV4ID0gMi4xIChyYW5kb20gbnVtYmVyIGJldHdlZW4gMCBhbmQgd2VpZ2h0IHN1bSlcbiMgQUJCQkNDQ0NDQ1xuIyA9PV5cbiMgU2VsZWN0IEJcbiAgICAgIHdlaWdodHNfc3VtID0gdXRpbHMuc3VtX3dlaWdodHMoQHZhcmlhbnRzKVxuICAgICAgd2VpZ2h0ZWRfaW5kZXggPSBNYXRoLmNlaWwoKEBfcmFuZG9tKCd2YXJpYW50JykgKiB3ZWlnaHRzX3N1bSkpXG4gICAgICBmb3Iga2V5LCB2YWx1ZSBvZiBAdmFyaWFudHNcbiMgdGhlbiB3ZSBhcmUgc3Vic3RyYWN0aW5nIHZhcmlhbnQgd2VpZ2h0IGZyb20gc2VsZWN0ZWQgbnVtYmVyXG4jIGFuZCBpdCBpdCByZWFjaGVzIDAgKG9yIGJlbG93KSB3ZSBhcmUgc2VsZWN0aW5nIHRoaXMgdmFyaWFudFxuICAgICAgICB3ZWlnaHRlZF9pbmRleCAtPSB2YWx1ZS53ZWlnaHRcbiAgICAgICAgcmV0dXJuIGtleSBpZiB3ZWlnaHRlZF9pbmRleCA8PSAwXG5cbiAgICBwaWNrX3Vud2VpZ2h0ZWRfdmFyaWFudDogLT5cbiAgICAgIHBhcnRpdGlvbnMgPSAxLjAgLyBAdmFyaWFudF9uYW1lcy5sZW5ndGhcbiAgICAgIGNob3Nlbl9wYXJ0aXRpb24gPSBNYXRoLmZsb29yKEBfcmFuZG9tKCd2YXJpYW50JykgLyBwYXJ0aXRpb25zKVxuICAgICAgdmFyaWFudCA9IEB2YXJpYW50X25hbWVzW2Nob3Nlbl9wYXJ0aXRpb25dXG4gICAgICB1dGlscy5sb2coXCIje3ZhcmlhbnR9IHBpY2tlZFwiKVxuICAgICAgdmFyaWFudFxuXG4gICAgaW5fc2FtcGxlOiAtPlxuICAgICAgYWN0aXZlID0gQHN0b3JhZ2UoKS5nZXQoXCIje0BvcHRpb25zLm5hbWV9OmluX3NhbXBsZVwiKVxuICAgICAgcmV0dXJuIGFjdGl2ZSB1bmxlc3MgdHlwZW9mIGFjdGl2ZSBpcyAndW5kZWZpbmVkJ1xuICAgICAgYWN0aXZlID0gQF9yYW5kb20oJ3NhbXBsZScpIDw9IEBvcHRpb25zLnNhbXBsZVxuICAgICAgQHN0b3JhZ2UoKS5zZXQoXCIje0BvcHRpb25zLm5hbWV9OmluX3NhbXBsZVwiLCBhY3RpdmUpXG4gICAgICBhY3RpdmVcblxuICAgIF9yYW5kb206IChzYWx0KSAtPlxuICAgICAgcmV0dXJuIHV0aWxzLnJhbmRvbSgpIHVubGVzcyBAdXNlcl9pZFxuICAgICAgc2VlZCA9IFwiI3tAbmFtZX0uI3tzYWx0fS4je0B1c2VyX2lkfVwiXG4gICAgICB1dGlscy5yYW5kb20oc2VlZClcblxuICAgIGFkZF9nb2FsOiAoZ29hbCkgLT5cbiAgICAgIGdvYWwuYWRkX2V4cGVyaW1lbnQodGhpcylcblxuICAgIGFkZF9nb2FsczogKGdvYWxzKSAtPlxuICAgICAgQGFkZF9nb2FsKGdvYWwpIGZvciBnb2FsIGluIGdvYWxzXG5cbiAgICBzdG9yYWdlOiAtPiBAb3B0aW9ucy5zdG9yYWdlX2FkYXB0ZXJcblxuICAgIHRyYWNraW5nOiAtPiBAb3B0aW9ucy50cmFja2luZ19hZGFwdGVyXG5cbiAgICBfdmFsaWRhdGUgPSAtPlxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdhbiBleHBlcmltZW50IG5hbWUgbXVzdCBiZSBzcGVjaWZpZWQnKSBpZiBAb3B0aW9ucy5uYW1lIGlzIG51bGxcbiAgICAgIHRocm93IG5ldyBFcnJvcigndmFyaWFudHMgbXVzdCBiZSBwcm92aWRlZCcpIGlmIEBvcHRpb25zLnZhcmlhbnRzIGlzIG51bGxcbiAgICAgIHRocm93IG5ldyBFcnJvcigndHJpZ2dlciBtdXN0IGJlIGEgZnVuY3Rpb24nKSBpZiB0eXBlb2YgQG9wdGlvbnMudHJpZ2dlciBpc250ICdmdW5jdGlvbidcbiAgICAgIGFsbF92YXJpYW50c19oYXZlX3dlaWdodHMgPSB1dGlscy52YWxpZGF0ZV93ZWlnaHRzIEBvcHRpb25zLnZhcmlhbnRzXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vdCBhbGwgdmFyaWFudHMgaGF2ZSB3ZWlnaHRzJykgaWYgIWFsbF92YXJpYW50c19oYXZlX3dlaWdodHNcblxuICBjbGFzcyBAR29hbFxuICAgIGNvbnN0cnVjdG9yOiAoQG5hbWUsIEBwcm9wcyA9IHt9KSAtPlxuICAgICAgdXRpbHMuZGVmYXVsdHMoQHByb3BzLCB7dW5pcXVlOiB0cnVlfSlcbiAgICAgIEBleHBlcmltZW50cyA9IFtdXG5cbiAgICBhZGRfZXhwZXJpbWVudDogKGV4cGVyaW1lbnQpIC0+XG4gICAgICBAZXhwZXJpbWVudHMucHVzaChleHBlcmltZW50KVxuXG4gICAgYWRkX2V4cGVyaW1lbnRzOiAoZXhwZXJpbWVudHMpIC0+XG4gICAgICBAYWRkX2V4cGVyaW1lbnQoZXhwZXJpbWVudCkgZm9yIGV4cGVyaW1lbnQgaW4gZXhwZXJpbWVudHNcblxuICAgIGNvbXBsZXRlOiAtPlxuICAgICAgZm9yIGV4cGVyaW1lbnQgaW4gQGV4cGVyaW1lbnRzXG4gICAgICAgIGV4cGVyaW1lbnQuZ29hbF9jb21wbGV0ZShAbmFtZSwgQHByb3BzKVxuXG5cbm1vZHVsZS5leHBvcnRzID0gQWxlcGhCZXRcbiIsIm1vZHVsZS5leHBvcnRzID1cbiAgZGVidWc6IHRydWVcbiIsIkJhc2lsID0gcmVxdWlyZSgnYmFzaWwuanMnKVxuc3RvcmUgPSBuZXcgQmFzaWwobmFtZXNwYWNlOiBudWxsKVxuXG4jIGEgdGhpbiB3cmFwcGVyIGFyb3VuZCBiYXNpbC5qcyBmb3IgZWFzeSBzd2FwcGluZ1xuY2xhc3MgU3RvcmFnZVxuICBjb25zdHJ1Y3RvcjogKEBuYW1lc3BhY2U9J2FsZXBoYmV0JykgLT5cbiAgICBAc3RvcmFnZSA9IHN0b3JlLmdldChAbmFtZXNwYWNlKSB8fCB7fVxuICBzZXQ6IChrZXksIHZhbHVlKSAtPlxuICAgIEBzdG9yYWdlW2tleV0gPSB2YWx1ZVxuICAgIHN0b3JlLnNldChAbmFtZXNwYWNlLCBAc3RvcmFnZSlcbiAgICByZXR1cm4gdmFsdWVcbiAgZ2V0OiAoa2V5KSAtPlxuICAgIEBzdG9yYWdlW2tleV1cbiAgICAjIHN0b3JlLmdldChcIiN7QG5hbWVzcGFjZX06I3trZXl9XCIpXG5cbm1vZHVsZS5leHBvcnRzID0gU3RvcmFnZVxuIiwiIyBOT1RFOiB1c2luZyBhIGN1c3RvbSBidWlsZCBvZiBsb2Rhc2gsIHRvIHNhdmUgc3BhY2Vcbl8gPSByZXF1aXJlKCcuLi92ZW5kb3IvbG9kYXNoLmN1c3RvbS5taW4nKVxudXVpZCA9IHJlcXVpcmUoJ25vZGUtdXVpZCcpXG5zaGExID0gcmVxdWlyZSgnY3J5cHRvLWpzL3NoYTEnKVxub3B0aW9ucyA9IHJlcXVpcmUoJy4vb3B0aW9ucycpXG5cbmNsYXNzIFV0aWxzXG4gIEBkZWZhdWx0czogXy5kZWZhdWx0c1xuICBAa2V5czogXy5rZXlzXG4gIEByZW1vdmU6IF8ucmVtb3ZlXG4gIEBvbWl0OiBfLm9taXRcbiAgQGxvZzogKG1lc3NhZ2UpIC0+XG4gICAgY29uc29sZS5sb2cobWVzc2FnZSkgaWYgb3B0aW9ucy5kZWJ1Z1xuICBAdXVpZDogdXVpZC52NFxuICBAc2hhMTogKHRleHQpIC0+XG4gICAgc2hhMSh0ZXh0KS50b1N0cmluZygpXG4gIEByYW5kb206IChzZWVkKSAtPlxuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpIHVubGVzcyBzZWVkXG4gICAgIyBhIE1VQ0ggc2ltcGxpZmllZCB2ZXJzaW9uIGluc3BpcmVkIGJ5IFBsYW5PdXQuanNcbiAgICBwYXJzZUludChAc2hhMShzZWVkKS5zdWJzdHIoMCwgMTMpLCAxNikgLyAweEZGRkZGRkZGRkZGRkZcbiAgQGNoZWNrX3dlaWdodHM6ICh2YXJpYW50cykgLT5cbiAgICBjb250YWluc193ZWlnaHQgPSBbXVxuICAgIGNvbnRhaW5zX3dlaWdodC5wdXNoKHZhbHVlLndlaWdodD8pIGZvciBrZXksIHZhbHVlIG9mIHZhcmlhbnRzXG4gICAgY29udGFpbnNfd2VpZ2h0LmV2ZXJ5IChoYXNfd2VpZ2h0KSAtPiBoYXNfd2VpZ2h0XG4gIEBzdW1fd2VpZ2h0czogKHZhcmlhbnRzKSAtPlxuICAgIHN1bSA9IDBcbiAgICBmb3Iga2V5LCB2YWx1ZSBvZiB2YXJpYW50c1xuICAgICAgc3VtICs9IHZhbHVlLndlaWdodCB8fCAwXG4gICAgc3VtXG4gIEB2YWxpZGF0ZV93ZWlnaHRzOiAodmFyaWFudHMpIC0+XG4gICAgY29udGFpbnNfd2VpZ2h0ID0gW11cbiAgICBjb250YWluc193ZWlnaHQucHVzaCh2YWx1ZS53ZWlnaHQ/KSBmb3Iga2V5LCB2YWx1ZSBvZiB2YXJpYW50c1xuICAgIGNvbnRhaW5zX3dlaWdodC5ldmVyeSAoaGFzX3dlaWdodCkgLT4gaGFzX3dlaWdodCBvciBjb250YWluc193ZWlnaHQuZXZlcnkgKGhhc193ZWlnaHQpIC0+ICFoYXNfd2VpZ2h0XG5tb2R1bGUuZXhwb3J0cyA9IFV0aWxzXG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBMb2Rhc2ggKEN1c3RvbSBCdWlsZCkgbG9kYXNoLmNvbS9saWNlbnNlIHwgVW5kZXJzY29yZS5qcyAxLjguMyB1bmRlcnNjb3JlanMub3JnL0xJQ0VOU0VcbiAqIEJ1aWxkOiBgbG9kYXNoIC1wIGluY2x1ZGU9XCJrZXlzLGRlZmF1bHRzLHJlbW92ZSxvbWl0XCIgZXhwb3J0cz1cIm5vZGVcIiAtbyAuL3ZlbmRvci9sb2Rhc2guY3VzdG9tLm1pbi5qc2BcbiAqL1xuOyhmdW5jdGlvbigpe2Z1bmN0aW9uIHQodCxlLHIpe3N3aXRjaChyLmxlbmd0aCl7Y2FzZSAwOnJldHVybiB0LmNhbGwoZSk7Y2FzZSAxOnJldHVybiB0LmNhbGwoZSxyWzBdKTtjYXNlIDI6cmV0dXJuIHQuY2FsbChlLHJbMF0sclsxXSk7Y2FzZSAzOnJldHVybiB0LmNhbGwoZSxyWzBdLHJbMV0sclsyXSl9cmV0dXJuIHQuYXBwbHkoZSxyKX1mdW5jdGlvbiBlKHQsZSl7Zm9yKHZhciByPS0xLG49bnVsbD09dD8wOnQubGVuZ3RoOysrcjxuJiZmYWxzZSE9PWUodFtyXSxyLHQpOyk7fWZ1bmN0aW9uIHIodCxlKXtmb3IodmFyIHI9LTEsbj1udWxsPT10PzA6dC5sZW5ndGgsbz0wLGM9W107KytyPG47KXt2YXIgdT10W3JdO2UodSxyLHQpJiYoY1tvKytdPXUpfXJldHVybiBjfWZ1bmN0aW9uIG4odCxlKXtmb3IodmFyIHI9LTEsbj1udWxsPT10PzA6dC5sZW5ndGgsbz1BcnJheShuKTsrK3I8bjspb1tyXT1lKHRbcl0scix0KTtyZXR1cm4gb31mdW5jdGlvbiBvKHQsZSl7Zm9yKHZhciByPS0xLG49ZS5sZW5ndGgsbz10Lmxlbmd0aDsrK3I8bjspdFtvK3JdPWVbcl07XG5yZXR1cm4gdH1mdW5jdGlvbiBjKHQsZSl7Zm9yKHZhciByPS0xLG49bnVsbD09dD8wOnQubGVuZ3RoOysrcjxuOylpZihlKHRbcl0scix0KSlyZXR1cm4gdHJ1ZTtyZXR1cm4gZmFsc2V9ZnVuY3Rpb24gdSh0KXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PWU/QnQ6ZVt0XX19ZnVuY3Rpb24gYSh0KXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIHQoZSl9fWZ1bmN0aW9uIGkodCl7dmFyIGU9LTEscj1BcnJheSh0LnNpemUpO3JldHVybiB0LmZvckVhY2goZnVuY3Rpb24odCxuKXtyWysrZV09W24sdF19KSxyfWZ1bmN0aW9uIGYodCl7dmFyIGU9T2JqZWN0O3JldHVybiBmdW5jdGlvbihyKXtyZXR1cm4gdChlKHIpKX19ZnVuY3Rpb24gbCh0KXt2YXIgZT0tMSxyPUFycmF5KHQuc2l6ZSk7cmV0dXJuIHQuZm9yRWFjaChmdW5jdGlvbih0KXtyWysrZV09dH0pLHJ9ZnVuY3Rpb24gcygpe31mdW5jdGlvbiBiKHQpe3ZhciBlPS0xLHI9bnVsbD09dD8wOnQubGVuZ3RoO2Zvcih0aGlzLmNsZWFyKCk7KytlPHI7KXtcbnZhciBuPXRbZV07dGhpcy5zZXQoblswXSxuWzFdKX19ZnVuY3Rpb24gaCh0KXt2YXIgZT0tMSxyPW51bGw9PXQ/MDp0Lmxlbmd0aDtmb3IodGhpcy5jbGVhcigpOysrZTxyOyl7dmFyIG49dFtlXTt0aGlzLnNldChuWzBdLG5bMV0pfX1mdW5jdGlvbiBwKHQpe3ZhciBlPS0xLHI9bnVsbD09dD8wOnQubGVuZ3RoO2Zvcih0aGlzLmNsZWFyKCk7KytlPHI7KXt2YXIgbj10W2VdO3RoaXMuc2V0KG5bMF0sblsxXSl9fWZ1bmN0aW9uIHkodCl7dmFyIGU9LTEscj1udWxsPT10PzA6dC5sZW5ndGg7Zm9yKHRoaXMuX19kYXRhX189bmV3IHA7KytlPHI7KXRoaXMuYWRkKHRbZV0pfWZ1bmN0aW9uIGoodCl7dGhpcy5zaXplPSh0aGlzLl9fZGF0YV9fPW5ldyBoKHQpKS5zaXplfWZ1bmN0aW9uIF8odCxlKXt2YXIgcj1LZSh0KSxuPSFyJiZKZSh0KSxvPSFyJiYhbiYmUWUodCksYz0hciYmIW4mJiFvJiZaZSh0KTtpZihyPXJ8fG58fG98fGMpe2Zvcih2YXIgbj10Lmxlbmd0aCx1PVN0cmluZyxhPS0xLGk9QXJyYXkobik7KythPG47KWlbYV09dShhKTtcbm49aX1lbHNlIG49W107dmFyIGYsdT1uLmxlbmd0aDtmb3IoZiBpbiB0KSFlJiYhdWUuY2FsbCh0LGYpfHxyJiYoXCJsZW5ndGhcIj09Znx8byYmKFwib2Zmc2V0XCI9PWZ8fFwicGFyZW50XCI9PWYpfHxjJiYoXCJidWZmZXJcIj09Znx8XCJieXRlTGVuZ3RoXCI9PWZ8fFwiYnl0ZU9mZnNldFwiPT1mKXx8Y3QoZix1KSl8fG4ucHVzaChmKTtyZXR1cm4gbn1mdW5jdGlvbiBnKHQsZSxyKXt2YXIgbj10W2VdO3VlLmNhbGwodCxlKSYmeXQobixyKSYmKHIhPT1CdHx8ZSBpbiB0KXx8dyh0LGUscil9ZnVuY3Rpb24gdih0LGUpe2Zvcih2YXIgcj10Lmxlbmd0aDtyLS07KWlmKHl0KHRbcl1bMF0sZSkpcmV0dXJuIHI7cmV0dXJuLTF9ZnVuY3Rpb24gZCh0LGUpe3JldHVybiB0JiZXKGUsenQoZSksdCl9ZnVuY3Rpb24gQSh0LGUpe3JldHVybiB0JiZXKGUsa3QoZSksdCl9ZnVuY3Rpb24gdyh0LGUscil7XCJfX3Byb3RvX19cIj09ZSYmQWU/QWUodCxlLHtjb25maWd1cmFibGU6dHJ1ZSxlbnVtZXJhYmxlOnRydWUsdmFsdWU6cixcbndyaXRhYmxlOnRydWV9KTp0W2VdPXJ9ZnVuY3Rpb24gbSh0LHIsbixvLGMsdSl7dmFyIGEsaT0xJnIsZj0yJnIsbD00JnI7aWYobiYmKGE9Yz9uKHQsbyxjLHUpOm4odCkpLGEhPT1CdClyZXR1cm4gYTtpZighdnQodCkpcmV0dXJuIHQ7aWYobz1LZSh0KSl7aWYoYT1ydCh0KSwhaSlyZXR1cm4gTih0LGEpfWVsc2V7dmFyIHM9R2UodCksYj1cIltvYmplY3QgRnVuY3Rpb25dXCI9PXN8fFwiW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl1cIj09cztpZihRZSh0KSlyZXR1cm4gUih0LGkpO2lmKFwiW29iamVjdCBPYmplY3RdXCI9PXN8fFwiW29iamVjdCBBcmd1bWVudHNdXCI9PXN8fGImJiFjKXtpZihhPWZ8fGI/e306dHlwZW9mIHQuY29uc3RydWN0b3IhPVwiZnVuY3Rpb25cInx8YXQodCk/e306UmUoeWUodCkpLCFpKXJldHVybiBmP3EodCxBKGEsdCkpOkcodCxkKGEsdCkpfWVsc2V7aWYoIVd0W3NdKXJldHVybiBjP3Q6e307YT1udCh0LHMsaSl9fWlmKHV8fCh1PW5ldyBqKSxjPXUuZ2V0KHQpKXJldHVybiBjO1xuaWYodS5zZXQodCxhKSxZZSh0KSlyZXR1cm4gdC5mb3JFYWNoKGZ1bmN0aW9uKGUpe2EuYWRkKG0oZSxyLG4sZSx0LHUpKX0pLGE7aWYoWGUodCkpcmV0dXJuIHQuZm9yRWFjaChmdW5jdGlvbihlLG8pe2Euc2V0KG8sbShlLHIsbixvLHQsdSkpfSksYTt2YXIgZj1sP2Y/WDpROmY/a3Q6enQsaD1vP0J0OmYodCk7cmV0dXJuIGUoaHx8dCxmdW5jdGlvbihlLG8pe2gmJihvPWUsZT10W29dKSxnKGEsbyxtKGUscixuLG8sdCx1KSl9KSxhfWZ1bmN0aW9uIE8odCxlLHIsbixjKXt2YXIgdT0tMSxhPXQubGVuZ3RoO2ZvcihyfHwocj1vdCksY3x8KGM9W10pOysrdTxhOyl7dmFyIGk9dFt1XTswPGUmJnIoaSk/MTxlP08oaSxlLTEscixuLGMpOm8oYyxpKTpufHwoY1tjLmxlbmd0aF09aSl9cmV0dXJuIGN9ZnVuY3Rpb24gUyh0LGUpe2U9VihlLHQpO2Zvcih2YXIgcj0wLG49ZS5sZW5ndGg7bnVsbCE9dCYmcjxuOyl0PXRbbHQoZVtyKytdKV07cmV0dXJuIHImJnI9PW4/dDpCdH1mdW5jdGlvbiB6KHQsZSxyKXtcbnJldHVybiBlPWUodCksS2UodCk/ZTpvKGUscih0KSl9ZnVuY3Rpb24gayh0KXtpZihudWxsPT10KXQ9dD09PUJ0P1wiW29iamVjdCBVbmRlZmluZWRdXCI6XCJbb2JqZWN0IE51bGxdXCI7ZWxzZSBpZihkZSYmZGUgaW4gT2JqZWN0KHQpKXt2YXIgZT11ZS5jYWxsKHQsZGUpLHI9dFtkZV07dHJ5e3RbZGVdPUJ0O3ZhciBuPXRydWV9Y2F0Y2godCl7fXZhciBvPWllLmNhbGwodCk7biYmKGU/dFtkZV09cjpkZWxldGUgdFtkZV0pLHQ9b31lbHNlIHQ9aWUuY2FsbCh0KTtyZXR1cm4gdH1mdW5jdGlvbiB4KHQpe3JldHVybiBkdCh0KSYmXCJbb2JqZWN0IEFyZ3VtZW50c11cIj09ayh0KX1mdW5jdGlvbiBFKHQsZSxyLG4sbyl7aWYodD09PWUpZT10cnVlO2Vsc2UgaWYobnVsbD09dHx8bnVsbD09ZXx8IWR0KHQpJiYhZHQoZSkpZT10IT09dCYmZSE9PWU7ZWxzZSB0Ont2YXIgYz1LZSh0KSx1PUtlKGUpLGE9Yz9cIltvYmplY3QgQXJyYXldXCI6R2UodCksaT11P1wiW29iamVjdCBBcnJheV1cIjpHZShlKSxhPVwiW29iamVjdCBBcmd1bWVudHNdXCI9PWE/XCJbb2JqZWN0IE9iamVjdF1cIjphLGk9XCJbb2JqZWN0IEFyZ3VtZW50c11cIj09aT9cIltvYmplY3QgT2JqZWN0XVwiOmksZj1cIltvYmplY3QgT2JqZWN0XVwiPT1hLHU9XCJbb2JqZWN0IE9iamVjdF1cIj09aTtcbmlmKChpPWE9PWkpJiZRZSh0KSl7aWYoIVFlKGUpKXtlPWZhbHNlO2JyZWFrIHR9Yz10cnVlLGY9ZmFsc2V9aWYoaSYmIWYpb3x8KG89bmV3IGopLGU9Y3x8WmUodCk/Sih0LGUscixuLEUsbyk6Syh0LGUsYSxyLG4sRSxvKTtlbHNle2lmKCEoMSZyKSYmKGM9ZiYmdWUuY2FsbCh0LFwiX193cmFwcGVkX19cIiksYT11JiZ1ZS5jYWxsKGUsXCJfX3dyYXBwZWRfX1wiKSxjfHxhKSl7dD1jP3QudmFsdWUoKTp0LGU9YT9lLnZhbHVlKCk6ZSxvfHwobz1uZXcgaiksZT1FKHQsZSxyLG4sbyk7YnJlYWsgdH1pZihpKWU6aWYob3x8KG89bmV3IGopLGM9MSZyLGE9USh0KSx1PWEubGVuZ3RoLGk9UShlKS5sZW5ndGgsdT09aXx8Yyl7Zm9yKGY9dTtmLS07KXt2YXIgbD1hW2ZdO2lmKCEoYz9sIGluIGU6dWUuY2FsbChlLGwpKSl7ZT1mYWxzZTticmVhayBlfX1pZigoaT1vLmdldCh0KSkmJm8uZ2V0KGUpKWU9aT09ZTtlbHNle2k9dHJ1ZSxvLnNldCh0LGUpLG8uc2V0KGUsdCk7Zm9yKHZhciBzPWM7KytmPHU7KXt2YXIgbD1hW2ZdLGI9dFtsXSxoPWVbbF07XG5pZihuKXZhciBwPWM/bihoLGIsbCxlLHQsbyk6bihiLGgsbCx0LGUsbyk7aWYocD09PUJ0P2IhPT1oJiYhRShiLGgscixuLG8pOiFwKXtpPWZhbHNlO2JyZWFrfXN8fChzPVwiY29uc3RydWN0b3JcIj09bCl9aSYmIXMmJihyPXQuY29uc3RydWN0b3Isbj1lLmNvbnN0cnVjdG9yLHIhPW4mJlwiY29uc3RydWN0b3JcImluIHQmJlwiY29uc3RydWN0b3JcImluIGUmJiEodHlwZW9mIHI9PVwiZnVuY3Rpb25cIiYmciBpbnN0YW5jZW9mIHImJnR5cGVvZiBuPT1cImZ1bmN0aW9uXCImJm4gaW5zdGFuY2VvZiBuKSYmKGk9ZmFsc2UpKSxvLmRlbGV0ZSh0KSxvLmRlbGV0ZShlKSxlPWl9fWVsc2UgZT1mYWxzZTtlbHNlIGU9ZmFsc2V9fXJldHVybiBlfWZ1bmN0aW9uIEYodCl7cmV0dXJuIGR0KHQpJiZcIltvYmplY3QgTWFwXVwiPT1HZSh0KX1mdW5jdGlvbiBJKHQsZSl7dmFyIHI9ZS5sZW5ndGgsbj1yO2lmKG51bGw9PXQpcmV0dXJuIW47Zm9yKHQ9T2JqZWN0KHQpO3ItLTspe3ZhciBvPWVbcl07aWYob1syXT9vWzFdIT09dFtvWzBdXTohKG9bMF1pbiB0KSlyZXR1cm4gZmFsc2U7XG59Zm9yKDsrK3I8bjspe3ZhciBvPWVbcl0sYz1vWzBdLHU9dFtjXSxhPW9bMV07aWYob1syXSl7aWYodT09PUJ0JiYhKGMgaW4gdCkpcmV0dXJuIGZhbHNlfWVsc2UgaWYobz1uZXcgaix2b2lkIDA9PT1CdD8hRShhLHUsMyx2b2lkIDAsbyk6MSlyZXR1cm4gZmFsc2V9cmV0dXJuIHRydWV9ZnVuY3Rpb24gTSh0KXtyZXR1cm4gZHQodCkmJlwiW29iamVjdCBTZXRdXCI9PUdlKHQpfWZ1bmN0aW9uIFUodCl7cmV0dXJuIGR0KHQpJiZndCh0Lmxlbmd0aCkmJiEhTnRbayh0KV19ZnVuY3Rpb24gQih0KXtyZXR1cm4gdHlwZW9mIHQ9PVwiZnVuY3Rpb25cIj90Om51bGw9PXQ/RXQ6dHlwZW9mIHQ9PVwib2JqZWN0XCI/S2UodCk/UCh0WzBdLHRbMV0pOkQodCk6SXQodCl9ZnVuY3Rpb24gRCh0KXt2YXIgZT10dCh0KTtyZXR1cm4gMT09ZS5sZW5ndGgmJmVbMF1bMl0/aXQoZVswXVswXSxlWzBdWzFdKTpmdW5jdGlvbihyKXtyZXR1cm4gcj09PXR8fEkocixlKX19ZnVuY3Rpb24gUCh0LGUpe3JldHVybiB1dCh0KSYmZT09PWUmJiF2dChlKT9pdChsdCh0KSxlKTpmdW5jdGlvbihyKXtcbnZhciBuPU90KHIsdCk7cmV0dXJuIG49PT1CdCYmbj09PWU/U3Qocix0KTpFKGUsbiwzKX19ZnVuY3Rpb24gJCh0KXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIFMoZSx0KX19ZnVuY3Rpb24gTCh0KXtpZih0eXBlb2YgdD09XCJzdHJpbmdcIilyZXR1cm4gdDtpZihLZSh0KSlyZXR1cm4gbih0LEwpK1wiXCI7aWYod3QodCkpcmV0dXJuIFZlP1ZlLmNhbGwodCk6XCJcIjt2YXIgZT10K1wiXCI7cmV0dXJuXCIwXCI9PWUmJjEvdD09LUR0P1wiLTBcIjplfWZ1bmN0aW9uIEModCxlKXtlPVYoZSx0KTt2YXIgcjtpZigyPmUubGVuZ3RoKXI9dDtlbHNle3I9ZTt2YXIgbj0wLG89LTEsYz0tMSx1PXIubGVuZ3RoO2ZvcigwPm4mJihuPS1uPnU/MDp1K24pLG89bz51P3U6bywwPm8mJihvKz11KSx1PW4+bz8wOm8tbj4+PjAsbj4+Pj0wLG89QXJyYXkodSk7KytjPHU7KW9bY109cltjK25dO3I9Uyh0LG8pfXQ9cixudWxsPT10fHxkZWxldGUgdFtsdChodChlKSldfWZ1bmN0aW9uIFYodCxlKXtyZXR1cm4gS2UodCk/dDp1dCh0LGUpP1t0XTpIZShtdCh0KSk7XG59ZnVuY3Rpb24gUih0LGUpe2lmKGUpcmV0dXJuIHQuc2xpY2UoKTt2YXIgcj10Lmxlbmd0aCxyPXBlP3BlKHIpOm5ldyB0LmNvbnN0cnVjdG9yKHIpO3JldHVybiB0LmNvcHkocikscn1mdW5jdGlvbiBUKHQpe3ZhciBlPW5ldyB0LmNvbnN0cnVjdG9yKHQuYnl0ZUxlbmd0aCk7cmV0dXJuIG5ldyBoZShlKS5zZXQobmV3IGhlKHQpKSxlfWZ1bmN0aW9uIE4odCxlKXt2YXIgcj0tMSxuPXQubGVuZ3RoO2ZvcihlfHwoZT1BcnJheShuKSk7KytyPG47KWVbcl09dFtyXTtyZXR1cm4gZX1mdW5jdGlvbiBXKHQsZSxyKXt2YXIgbj0hcjtyfHwocj17fSk7Zm9yKHZhciBvPS0xLGM9ZS5sZW5ndGg7KytvPGM7KXt2YXIgdT1lW29dLGE9QnQ7YT09PUJ0JiYoYT10W3VdKSxuP3cocix1LGEpOmcocix1LGEpfXJldHVybiByfWZ1bmN0aW9uIEcodCxlKXtyZXR1cm4gVyh0LE5lKHQpLGUpfWZ1bmN0aW9uIHEodCxlKXtyZXR1cm4gVyh0LFdlKHQpLGUpfWZ1bmN0aW9uIEgodCl7cmV0dXJuIEF0KHQpP0J0OnQ7XG59ZnVuY3Rpb24gSih0LGUscixuLG8sdSl7dmFyIGE9MSZyLGk9dC5sZW5ndGgsZj1lLmxlbmd0aDtpZihpIT1mJiYhKGEmJmY+aSkpcmV0dXJuIGZhbHNlO2lmKChmPXUuZ2V0KHQpKSYmdS5nZXQoZSkpcmV0dXJuIGY9PWU7dmFyIGY9LTEsbD10cnVlLHM9MiZyP25ldyB5OkJ0O2Zvcih1LnNldCh0LGUpLHUuc2V0KGUsdCk7KytmPGk7KXt2YXIgYj10W2ZdLGg9ZVtmXTtpZihuKXZhciBwPWE/bihoLGIsZixlLHQsdSk6bihiLGgsZix0LGUsdSk7aWYocCE9PUJ0KXtpZihwKWNvbnRpbnVlO2w9ZmFsc2U7YnJlYWt9aWYocyl7aWYoIWMoZSxmdW5jdGlvbih0LGUpe2lmKCFzLmhhcyhlKSYmKGI9PT10fHxvKGIsdCxyLG4sdSkpKXJldHVybiBzLnB1c2goZSl9KSl7bD1mYWxzZTticmVha319ZWxzZSBpZihiIT09aCYmIW8oYixoLHIsbix1KSl7bD1mYWxzZTticmVha319cmV0dXJuIHUuZGVsZXRlKHQpLHUuZGVsZXRlKGUpLGx9ZnVuY3Rpb24gSyh0LGUscixuLG8sYyx1KXtzd2l0Y2gocil7Y2FzZVwiW29iamVjdCBEYXRhVmlld11cIjpcbmlmKHQuYnl0ZUxlbmd0aCE9ZS5ieXRlTGVuZ3RofHx0LmJ5dGVPZmZzZXQhPWUuYnl0ZU9mZnNldClicmVhazt0PXQuYnVmZmVyLGU9ZS5idWZmZXI7Y2FzZVwiW29iamVjdCBBcnJheUJ1ZmZlcl1cIjppZih0LmJ5dGVMZW5ndGghPWUuYnl0ZUxlbmd0aHx8IWMobmV3IGhlKHQpLG5ldyBoZShlKSkpYnJlYWs7cmV0dXJuIHRydWU7Y2FzZVwiW29iamVjdCBCb29sZWFuXVwiOmNhc2VcIltvYmplY3QgRGF0ZV1cIjpjYXNlXCJbb2JqZWN0IE51bWJlcl1cIjpyZXR1cm4geXQoK3QsK2UpO2Nhc2VcIltvYmplY3QgRXJyb3JdXCI6cmV0dXJuIHQubmFtZT09ZS5uYW1lJiZ0Lm1lc3NhZ2U9PWUubWVzc2FnZTtjYXNlXCJbb2JqZWN0IFJlZ0V4cF1cIjpjYXNlXCJbb2JqZWN0IFN0cmluZ11cIjpyZXR1cm4gdD09ZStcIlwiO2Nhc2VcIltvYmplY3QgTWFwXVwiOnZhciBhPWk7Y2FzZVwiW29iamVjdCBTZXRdXCI6aWYoYXx8KGE9bCksdC5zaXplIT1lLnNpemUmJiEoMSZuKSlicmVhaztyZXR1cm4ocj11LmdldCh0KSk/cj09ZToobnw9MixcbnUuc2V0KHQsZSksZT1KKGEodCksYShlKSxuLG8sYyx1KSx1LmRlbGV0ZSh0KSxlKTtjYXNlXCJbb2JqZWN0IFN5bWJvbF1cIjppZihDZSlyZXR1cm4gQ2UuY2FsbCh0KT09Q2UuY2FsbChlKX1yZXR1cm4gZmFsc2V9ZnVuY3Rpb24gUSh0KXtyZXR1cm4geih0LHp0LE5lKX1mdW5jdGlvbiBYKHQpe3JldHVybiB6KHQsa3QsV2UpfWZ1bmN0aW9uIFkoKXt2YXIgdD1zLml0ZXJhdGVlfHxGdCx0PXQ9PT1GdD9COnQ7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg/dChhcmd1bWVudHNbMF0sYXJndW1lbnRzWzFdKTp0fWZ1bmN0aW9uIFoodCxlKXt2YXIgcj10Ll9fZGF0YV9fLG49dHlwZW9mIGU7cmV0dXJuKFwic3RyaW5nXCI9PW58fFwibnVtYmVyXCI9PW58fFwic3ltYm9sXCI9PW58fFwiYm9vbGVhblwiPT1uP1wiX19wcm90b19fXCIhPT1lOm51bGw9PT1lKT9yW3R5cGVvZiBlPT1cInN0cmluZ1wiP1wic3RyaW5nXCI6XCJoYXNoXCJdOnIubWFwfWZ1bmN0aW9uIHR0KHQpe2Zvcih2YXIgZT16dCh0KSxyPWUubGVuZ3RoO3ItLTspe1xudmFyIG49ZVtyXSxvPXRbbl07ZVtyXT1bbixvLG89PT1vJiYhdnQobyldfXJldHVybiBlfWZ1bmN0aW9uIGV0KHQsZSl7dmFyIHI9bnVsbD09dD9CdDp0W2VdO3JldHVybighdnQocil8fGFlJiZhZSBpbiByPzA6KF90KHIpP2xlOlJ0KS50ZXN0KHN0KHIpKSk/cjpCdH1mdW5jdGlvbiBydCh0KXt2YXIgZT10Lmxlbmd0aCxyPW5ldyB0LmNvbnN0cnVjdG9yKGUpO3JldHVybiBlJiZcInN0cmluZ1wiPT10eXBlb2YgdFswXSYmdWUuY2FsbCh0LFwiaW5kZXhcIikmJihyLmluZGV4PXQuaW5kZXgsci5pbnB1dD10LmlucHV0KSxyfWZ1bmN0aW9uIG50KHQsZSxyKXt2YXIgbj10LmNvbnN0cnVjdG9yO3N3aXRjaChlKXtjYXNlXCJbb2JqZWN0IEFycmF5QnVmZmVyXVwiOnJldHVybiBUKHQpO2Nhc2VcIltvYmplY3QgQm9vbGVhbl1cIjpjYXNlXCJbb2JqZWN0IERhdGVdXCI6cmV0dXJuIG5ldyBuKCt0KTtjYXNlXCJbb2JqZWN0IERhdGFWaWV3XVwiOnJldHVybiBlPXI/VCh0LmJ1ZmZlcik6dC5idWZmZXIsbmV3IHQuY29uc3RydWN0b3IoZSx0LmJ5dGVPZmZzZXQsdC5ieXRlTGVuZ3RoKTtcbmNhc2VcIltvYmplY3QgRmxvYXQzMkFycmF5XVwiOmNhc2VcIltvYmplY3QgRmxvYXQ2NEFycmF5XVwiOmNhc2VcIltvYmplY3QgSW50OEFycmF5XVwiOmNhc2VcIltvYmplY3QgSW50MTZBcnJheV1cIjpjYXNlXCJbb2JqZWN0IEludDMyQXJyYXldXCI6Y2FzZVwiW29iamVjdCBVaW50OEFycmF5XVwiOmNhc2VcIltvYmplY3QgVWludDhDbGFtcGVkQXJyYXldXCI6Y2FzZVwiW29iamVjdCBVaW50MTZBcnJheV1cIjpjYXNlXCJbb2JqZWN0IFVpbnQzMkFycmF5XVwiOnJldHVybiBlPXI/VCh0LmJ1ZmZlcik6dC5idWZmZXIsbmV3IHQuY29uc3RydWN0b3IoZSx0LmJ5dGVPZmZzZXQsdC5sZW5ndGgpO2Nhc2VcIltvYmplY3QgTWFwXVwiOnJldHVybiBuZXcgbjtjYXNlXCJbb2JqZWN0IE51bWJlcl1cIjpjYXNlXCJbb2JqZWN0IFN0cmluZ11cIjpyZXR1cm4gbmV3IG4odCk7Y2FzZVwiW29iamVjdCBSZWdFeHBdXCI6cmV0dXJuIGU9bmV3IHQuY29uc3RydWN0b3IodC5zb3VyY2UsVnQuZXhlYyh0KSksZS5sYXN0SW5kZXg9dC5sYXN0SW5kZXgsXG5lO2Nhc2VcIltvYmplY3QgU2V0XVwiOnJldHVybiBuZXcgbjtjYXNlXCJbb2JqZWN0IFN5bWJvbF1cIjpyZXR1cm4gQ2U/T2JqZWN0KENlLmNhbGwodCkpOnt9fX1mdW5jdGlvbiBvdCh0KXtyZXR1cm4gS2UodCl8fEplKHQpfHwhISh2ZSYmdCYmdFt2ZV0pfWZ1bmN0aW9uIGN0KHQsZSl7dmFyIHI9dHlwZW9mIHQ7cmV0dXJuIGU9bnVsbD09ZT85MDA3MTk5MjU0NzQwOTkxOmUsISFlJiYoXCJudW1iZXJcIj09cnx8XCJzeW1ib2xcIiE9ciYmVHQudGVzdCh0KSkmJi0xPHQmJjA9PXQlMSYmdDxlfWZ1bmN0aW9uIHV0KHQsZSl7aWYoS2UodCkpcmV0dXJuIGZhbHNlO3ZhciByPXR5cGVvZiB0O3JldHVybiEoXCJudW1iZXJcIiE9ciYmXCJzeW1ib2xcIiE9ciYmXCJib29sZWFuXCIhPXImJm51bGwhPXQmJiF3dCh0KSl8fCgkdC50ZXN0KHQpfHwhUHQudGVzdCh0KXx8bnVsbCE9ZSYmdCBpbiBPYmplY3QoZSkpfWZ1bmN0aW9uIGF0KHQpe3ZhciBlPXQmJnQuY29uc3RydWN0b3I7cmV0dXJuIHQ9PT0odHlwZW9mIGU9PVwiZnVuY3Rpb25cIiYmZS5wcm90b3R5cGV8fG5lKTtcbn1mdW5jdGlvbiBpdCh0LGUpe3JldHVybiBmdW5jdGlvbihyKXtyZXR1cm4gbnVsbCE9ciYmKHJbdF09PT1lJiYoZSE9PUJ0fHx0IGluIE9iamVjdChyKSkpfX1mdW5jdGlvbiBmdChlLHIsbil7cmV0dXJuIHI9U2Uocj09PUJ0P2UubGVuZ3RoLTE6ciwwKSxmdW5jdGlvbigpe2Zvcih2YXIgbz1hcmd1bWVudHMsYz0tMSx1PVNlKG8ubGVuZ3RoLXIsMCksYT1BcnJheSh1KTsrK2M8dTspYVtjXT1vW3IrY107Zm9yKGM9LTEsdT1BcnJheShyKzEpOysrYzxyOyl1W2NdPW9bY107cmV0dXJuIHVbcl09bihhKSx0KGUsdGhpcyx1KX19ZnVuY3Rpb24gbHQodCl7aWYodHlwZW9mIHQ9PVwic3RyaW5nXCJ8fHd0KHQpKXJldHVybiB0O3ZhciBlPXQrXCJcIjtyZXR1cm5cIjBcIj09ZSYmMS90PT0tRHQ/XCItMFwiOmV9ZnVuY3Rpb24gc3QodCl7aWYobnVsbCE9dCl7dHJ5e3JldHVybiBjZS5jYWxsKHQpfWNhdGNoKHQpe31yZXR1cm4gdCtcIlwifXJldHVyblwiXCJ9ZnVuY3Rpb24gYnQodCl7cmV0dXJuKG51bGw9PXQ/MDp0Lmxlbmd0aCk/Tyh0LDEpOltdO1xufWZ1bmN0aW9uIGh0KHQpe3ZhciBlPW51bGw9PXQ/MDp0Lmxlbmd0aDtyZXR1cm4gZT90W2UtMV06QnR9ZnVuY3Rpb24gcHQodCxlKXtmdW5jdGlvbiByKCl7dmFyIG49YXJndW1lbnRzLG89ZT9lLmFwcGx5KHRoaXMsbik6blswXSxjPXIuY2FjaGU7cmV0dXJuIGMuaGFzKG8pP2MuZ2V0KG8pOihuPXQuYXBwbHkodGhpcyxuKSxyLmNhY2hlPWMuc2V0KG8sbil8fGMsbil9aWYodHlwZW9mIHQhPVwiZnVuY3Rpb25cInx8bnVsbCE9ZSYmdHlwZW9mIGUhPVwiZnVuY3Rpb25cIil0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgYSBmdW5jdGlvblwiKTtyZXR1cm4gci5jYWNoZT1uZXcocHQuQ2FjaGV8fHApLHJ9ZnVuY3Rpb24geXQodCxlKXtyZXR1cm4gdD09PWV8fHQhPT10JiZlIT09ZX1mdW5jdGlvbiBqdCh0KXtyZXR1cm4gbnVsbCE9dCYmZ3QodC5sZW5ndGgpJiYhX3QodCl9ZnVuY3Rpb24gX3QodCl7cmV0dXJuISF2dCh0KSYmKHQ9ayh0KSxcIltvYmplY3QgRnVuY3Rpb25dXCI9PXR8fFwiW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl1cIj09dHx8XCJbb2JqZWN0IEFzeW5jRnVuY3Rpb25dXCI9PXR8fFwiW29iamVjdCBQcm94eV1cIj09dCk7XG59ZnVuY3Rpb24gZ3QodCl7cmV0dXJuIHR5cGVvZiB0PT1cIm51bWJlclwiJiYtMTx0JiYwPT10JTEmJjkwMDcxOTkyNTQ3NDA5OTE+PXR9ZnVuY3Rpb24gdnQodCl7dmFyIGU9dHlwZW9mIHQ7cmV0dXJuIG51bGwhPXQmJihcIm9iamVjdFwiPT1lfHxcImZ1bmN0aW9uXCI9PWUpfWZ1bmN0aW9uIGR0KHQpe3JldHVybiBudWxsIT10JiZ0eXBlb2YgdD09XCJvYmplY3RcIn1mdW5jdGlvbiBBdCh0KXtyZXR1cm4hKCFkdCh0KXx8XCJbb2JqZWN0IE9iamVjdF1cIiE9ayh0KSkmJih0PXllKHQpLG51bGw9PT10fHwodD11ZS5jYWxsKHQsXCJjb25zdHJ1Y3RvclwiKSYmdC5jb25zdHJ1Y3Rvcix0eXBlb2YgdD09XCJmdW5jdGlvblwiJiZ0IGluc3RhbmNlb2YgdCYmY2UuY2FsbCh0KT09ZmUpKX1mdW5jdGlvbiB3dCh0KXtyZXR1cm4gdHlwZW9mIHQ9PVwic3ltYm9sXCJ8fGR0KHQpJiZcIltvYmplY3QgU3ltYm9sXVwiPT1rKHQpfWZ1bmN0aW9uIG10KHQpe3JldHVybiBudWxsPT10P1wiXCI6TCh0KX1mdW5jdGlvbiBPdCh0LGUscil7XG5yZXR1cm4gdD1udWxsPT10P0J0OlModCxlKSx0PT09QnQ/cjp0fWZ1bmN0aW9uIFN0KHQsZSl7dmFyIHI7aWYocj1udWxsIT10KXtyPXQ7dmFyIG47bj1WKGUscik7Zm9yKHZhciBvPS0xLGM9bi5sZW5ndGgsdT1mYWxzZTsrK288Yzspe3ZhciBhPWx0KG5bb10pO2lmKCEodT1udWxsIT1yJiZudWxsIT1yJiZhIGluIE9iamVjdChyKSkpYnJlYWs7cj1yW2FdfXV8fCsrbyE9Yz9yPXU6KGM9bnVsbD09cj8wOnIubGVuZ3RoLHI9ISFjJiZndChjKSYmY3QoYSxjKSYmKEtlKHIpfHxKZShyKSkpfXJldHVybiByfWZ1bmN0aW9uIHp0KHQpe2lmKGp0KHQpKXQ9Xyh0KTtlbHNlIGlmKGF0KHQpKXt2YXIgZSxyPVtdO2ZvcihlIGluIE9iamVjdCh0KSl1ZS5jYWxsKHQsZSkmJlwiY29uc3RydWN0b3JcIiE9ZSYmci5wdXNoKGUpO3Q9cn1lbHNlIHQ9T2UodCk7cmV0dXJuIHR9ZnVuY3Rpb24ga3QodCl7aWYoanQodCkpdD1fKHQsdHJ1ZSk7ZWxzZSBpZih2dCh0KSl7dmFyIGUscj1hdCh0KSxuPVtdO2ZvcihlIGluIHQpKFwiY29uc3RydWN0b3JcIiE9ZXx8IXImJnVlLmNhbGwodCxlKSkmJm4ucHVzaChlKTtcbnQ9bn1lbHNle2lmKGU9W10sbnVsbCE9dClmb3IociBpbiBPYmplY3QodCkpZS5wdXNoKHIpO3Q9ZX1yZXR1cm4gdH1mdW5jdGlvbiB4dCh0KXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gdH19ZnVuY3Rpb24gRXQodCl7cmV0dXJuIHR9ZnVuY3Rpb24gRnQodCl7cmV0dXJuIEIodHlwZW9mIHQ9PVwiZnVuY3Rpb25cIj90Om0odCwxKSl9ZnVuY3Rpb24gSXQodCl7cmV0dXJuIHV0KHQpP3UobHQodCkpOiQodCl9ZnVuY3Rpb24gTXQoKXtyZXR1cm5bXX1mdW5jdGlvbiBVdCgpe3JldHVybiBmYWxzZX12YXIgQnQsRHQ9MS8wLFB0PS9cXC58XFxbKD86W15bXFxdXSp8KFtcIiddKSg/Oig/IVxcMSlbXlxcXFxdfFxcXFwuKSo/XFwxKVxcXS8sJHQ9L15cXHcqJC8sTHQ9L1teLltcXF1dK3xcXFsoPzooLT9cXGQrKD86XFwuXFxkKyk/KXwoW1wiJ10pKCg/Oig/IVxcMilbXlxcXFxdfFxcXFwuKSo/KVxcMilcXF18KD89KD86XFwufFxcW1xcXSkoPzpcXC58XFxbXFxdfCQpKS9nLEN0PS9cXFxcKFxcXFwpPy9nLFZ0PS9cXHcqJC8sUnQ9L15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLyxUdD0vXig/OjB8WzEtOV1cXGQqKSQvLE50PXt9O1xuTnRbXCJbb2JqZWN0IEZsb2F0MzJBcnJheV1cIl09TnRbXCJbb2JqZWN0IEZsb2F0NjRBcnJheV1cIl09TnRbXCJbb2JqZWN0IEludDhBcnJheV1cIl09TnRbXCJbb2JqZWN0IEludDE2QXJyYXldXCJdPU50W1wiW29iamVjdCBJbnQzMkFycmF5XVwiXT1OdFtcIltvYmplY3QgVWludDhBcnJheV1cIl09TnRbXCJbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XVwiXT1OdFtcIltvYmplY3QgVWludDE2QXJyYXldXCJdPU50W1wiW29iamVjdCBVaW50MzJBcnJheV1cIl09dHJ1ZSxOdFtcIltvYmplY3QgQXJndW1lbnRzXVwiXT1OdFtcIltvYmplY3QgQXJyYXldXCJdPU50W1wiW29iamVjdCBBcnJheUJ1ZmZlcl1cIl09TnRbXCJbb2JqZWN0IEJvb2xlYW5dXCJdPU50W1wiW29iamVjdCBEYXRhVmlld11cIl09TnRbXCJbb2JqZWN0IERhdGVdXCJdPU50W1wiW29iamVjdCBFcnJvcl1cIl09TnRbXCJbb2JqZWN0IEZ1bmN0aW9uXVwiXT1OdFtcIltvYmplY3QgTWFwXVwiXT1OdFtcIltvYmplY3QgTnVtYmVyXVwiXT1OdFtcIltvYmplY3QgT2JqZWN0XVwiXT1OdFtcIltvYmplY3QgUmVnRXhwXVwiXT1OdFtcIltvYmplY3QgU2V0XVwiXT1OdFtcIltvYmplY3QgU3RyaW5nXVwiXT1OdFtcIltvYmplY3QgV2Vha01hcF1cIl09ZmFsc2U7XG52YXIgV3Q9e307V3RbXCJbb2JqZWN0IEFyZ3VtZW50c11cIl09V3RbXCJbb2JqZWN0IEFycmF5XVwiXT1XdFtcIltvYmplY3QgQXJyYXlCdWZmZXJdXCJdPVd0W1wiW29iamVjdCBEYXRhVmlld11cIl09V3RbXCJbb2JqZWN0IEJvb2xlYW5dXCJdPVd0W1wiW29iamVjdCBEYXRlXVwiXT1XdFtcIltvYmplY3QgRmxvYXQzMkFycmF5XVwiXT1XdFtcIltvYmplY3QgRmxvYXQ2NEFycmF5XVwiXT1XdFtcIltvYmplY3QgSW50OEFycmF5XVwiXT1XdFtcIltvYmplY3QgSW50MTZBcnJheV1cIl09V3RbXCJbb2JqZWN0IEludDMyQXJyYXldXCJdPVd0W1wiW29iamVjdCBNYXBdXCJdPVd0W1wiW29iamVjdCBOdW1iZXJdXCJdPVd0W1wiW29iamVjdCBPYmplY3RdXCJdPVd0W1wiW29iamVjdCBSZWdFeHBdXCJdPVd0W1wiW29iamVjdCBTZXRdXCJdPVd0W1wiW29iamVjdCBTdHJpbmddXCJdPVd0W1wiW29iamVjdCBTeW1ib2xdXCJdPVd0W1wiW29iamVjdCBVaW50OEFycmF5XVwiXT1XdFtcIltvYmplY3QgVWludDhDbGFtcGVkQXJyYXldXCJdPVd0W1wiW29iamVjdCBVaW50MTZBcnJheV1cIl09V3RbXCJbb2JqZWN0IFVpbnQzMkFycmF5XVwiXT10cnVlLFxuV3RbXCJbb2JqZWN0IEVycm9yXVwiXT1XdFtcIltvYmplY3QgRnVuY3Rpb25dXCJdPVd0W1wiW29iamVjdCBXZWFrTWFwXVwiXT1mYWxzZTt2YXIgR3QscXQ9dHlwZW9mIGdsb2JhbD09XCJvYmplY3RcIiYmZ2xvYmFsJiZnbG9iYWwuT2JqZWN0PT09T2JqZWN0JiZnbG9iYWwsSHQ9dHlwZW9mIHNlbGY9PVwib2JqZWN0XCImJnNlbGYmJnNlbGYuT2JqZWN0PT09T2JqZWN0JiZzZWxmLEp0PXF0fHxIdHx8RnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpLEt0PXR5cGVvZiBleHBvcnRzPT1cIm9iamVjdFwiJiZleHBvcnRzJiYhZXhwb3J0cy5ub2RlVHlwZSYmZXhwb3J0cyxRdD1LdCYmdHlwZW9mIG1vZHVsZT09XCJvYmplY3RcIiYmbW9kdWxlJiYhbW9kdWxlLm5vZGVUeXBlJiZtb2R1bGUsWHQ9UXQmJlF0LmV4cG9ydHM9PT1LdCxZdD1YdCYmcXQucHJvY2Vzczt0Ont0cnl7R3Q9WXQmJll0LmJpbmRpbmcmJll0LmJpbmRpbmcoXCJ1dGlsXCIpO2JyZWFrIHR9Y2F0Y2godCl7fUd0PXZvaWQgMH12YXIgWnQ9R3QmJkd0LmlzTWFwLHRlPUd0JiZHdC5pc1NldCxlZT1HdCYmR3QuaXNUeXBlZEFycmF5LHJlPUFycmF5LnByb3RvdHlwZSxuZT1PYmplY3QucHJvdG90eXBlLG9lPUp0W1wiX19jb3JlLWpzX3NoYXJlZF9fXCJdLGNlPUZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZyx1ZT1uZS5oYXNPd25Qcm9wZXJ0eSxhZT1mdW5jdGlvbigpe1xudmFyIHQ9L1teLl0rJC8uZXhlYyhvZSYmb2Uua2V5cyYmb2Uua2V5cy5JRV9QUk9UT3x8XCJcIik7cmV0dXJuIHQ/XCJTeW1ib2woc3JjKV8xLlwiK3Q6XCJcIn0oKSxpZT1uZS50b1N0cmluZyxmZT1jZS5jYWxsKE9iamVjdCksbGU9UmVnRXhwKFwiXlwiK2NlLmNhbGwodWUpLnJlcGxhY2UoL1tcXFxcXiQuKis/KClbXFxde318XS9nLFwiXFxcXCQmXCIpLnJlcGxhY2UoL2hhc093blByb3BlcnR5fChmdW5jdGlvbikuKj8oPz1cXFxcXFwoKXwgZm9yIC4rPyg/PVxcXFxcXF0pL2csXCIkMS4qP1wiKStcIiRcIiksc2U9WHQ/SnQuQnVmZmVyOkJ0LGJlPUp0LlN5bWJvbCxoZT1KdC5VaW50OEFycmF5LHBlPXNlP3NlLmE6QnQseWU9ZihPYmplY3QuZ2V0UHJvdG90eXBlT2YpLGplPU9iamVjdC5jcmVhdGUsX2U9bmUucHJvcGVydHlJc0VudW1lcmFibGUsZ2U9cmUuc3BsaWNlLHZlPWJlP2JlLmlzQ29uY2F0U3ByZWFkYWJsZTpCdCxkZT1iZT9iZS50b1N0cmluZ1RhZzpCdCxBZT1mdW5jdGlvbigpe3RyeXt2YXIgdD1ldChPYmplY3QsXCJkZWZpbmVQcm9wZXJ0eVwiKTtcbnJldHVybiB0KHt9LFwiXCIse30pLHR9Y2F0Y2godCl7fX0oKSx3ZT1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzLG1lPXNlP3NlLmlzQnVmZmVyOkJ0LE9lPWYoT2JqZWN0LmtleXMpLFNlPU1hdGgubWF4LHplPURhdGUubm93LGtlPWV0KEp0LFwiRGF0YVZpZXdcIikseGU9ZXQoSnQsXCJNYXBcIiksRWU9ZXQoSnQsXCJQcm9taXNlXCIpLEZlPWV0KEp0LFwiU2V0XCIpLEllPWV0KEp0LFwiV2Vha01hcFwiKSxNZT1ldChPYmplY3QsXCJjcmVhdGVcIiksVWU9c3Qoa2UpLEJlPXN0KHhlKSxEZT1zdChFZSksUGU9c3QoRmUpLCRlPXN0KEllKSxMZT1iZT9iZS5wcm90b3R5cGU6QnQsQ2U9TGU/TGUudmFsdWVPZjpCdCxWZT1MZT9MZS50b1N0cmluZzpCdCxSZT1mdW5jdGlvbigpe2Z1bmN0aW9uIHQoKXt9cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiB2dChlKT9qZT9qZShlKToodC5wcm90b3R5cGU9ZSxlPW5ldyB0LHQucHJvdG90eXBlPUJ0LGUpOnt9fX0oKTtiLnByb3RvdHlwZS5jbGVhcj1mdW5jdGlvbigpe1xudGhpcy5fX2RhdGFfXz1NZT9NZShudWxsKTp7fSx0aGlzLnNpemU9MH0sYi5wcm90b3R5cGUuZGVsZXRlPWZ1bmN0aW9uKHQpe3JldHVybiB0PXRoaXMuaGFzKHQpJiZkZWxldGUgdGhpcy5fX2RhdGFfX1t0XSx0aGlzLnNpemUtPXQ/MTowLHR9LGIucHJvdG90eXBlLmdldD1mdW5jdGlvbih0KXt2YXIgZT10aGlzLl9fZGF0YV9fO3JldHVybiBNZT8odD1lW3RdLFwiX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfX1wiPT09dD9CdDp0KTp1ZS5jYWxsKGUsdCk/ZVt0XTpCdH0sYi5wcm90b3R5cGUuaGFzPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuX19kYXRhX187cmV0dXJuIE1lP2VbdF0hPT1CdDp1ZS5jYWxsKGUsdCl9LGIucHJvdG90eXBlLnNldD1mdW5jdGlvbih0LGUpe3ZhciByPXRoaXMuX19kYXRhX187cmV0dXJuIHRoaXMuc2l6ZSs9dGhpcy5oYXModCk/MDoxLHJbdF09TWUmJmU9PT1CdD9cIl9fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX19cIjplLHRoaXN9LGgucHJvdG90eXBlLmNsZWFyPWZ1bmN0aW9uKCl7XG50aGlzLl9fZGF0YV9fPVtdLHRoaXMuc2l6ZT0wfSxoLnByb3RvdHlwZS5kZWxldGU9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5fX2RhdGFfXztyZXR1cm4gdD12KGUsdCksISgwPnQpJiYodD09ZS5sZW5ndGgtMT9lLnBvcCgpOmdlLmNhbGwoZSx0LDEpLC0tdGhpcy5zaXplLHRydWUpfSxoLnByb3RvdHlwZS5nZXQ9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5fX2RhdGFfXztyZXR1cm4gdD12KGUsdCksMD50P0J0OmVbdF1bMV19LGgucHJvdG90eXBlLmhhcz1mdW5jdGlvbih0KXtyZXR1cm4tMTx2KHRoaXMuX19kYXRhX18sdCl9LGgucHJvdG90eXBlLnNldD1mdW5jdGlvbih0LGUpe3ZhciByPXRoaXMuX19kYXRhX18sbj12KHIsdCk7cmV0dXJuIDA+bj8oKyt0aGlzLnNpemUsci5wdXNoKFt0LGVdKSk6cltuXVsxXT1lLHRoaXN9LHAucHJvdG90eXBlLmNsZWFyPWZ1bmN0aW9uKCl7dGhpcy5zaXplPTAsdGhpcy5fX2RhdGFfXz17aGFzaDpuZXcgYixtYXA6bmV3KHhlfHxoKSxzdHJpbmc6bmV3IGJcbn19LHAucHJvdG90eXBlLmRlbGV0ZT1mdW5jdGlvbih0KXtyZXR1cm4gdD1aKHRoaXMsdCkuZGVsZXRlKHQpLHRoaXMuc2l6ZS09dD8xOjAsdH0scC5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKHQpe3JldHVybiBaKHRoaXMsdCkuZ2V0KHQpfSxwLnByb3RvdHlwZS5oYXM9ZnVuY3Rpb24odCl7cmV0dXJuIFoodGhpcyx0KS5oYXModCl9LHAucHJvdG90eXBlLnNldD1mdW5jdGlvbih0LGUpe3ZhciByPVoodGhpcyx0KSxuPXIuc2l6ZTtyZXR1cm4gci5zZXQodCxlKSx0aGlzLnNpemUrPXIuc2l6ZT09bj8wOjEsdGhpc30seS5wcm90b3R5cGUuYWRkPXkucHJvdG90eXBlLnB1c2g9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuX19kYXRhX18uc2V0KHQsXCJfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fXCIpLHRoaXN9LHkucHJvdG90eXBlLmhhcz1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXModCl9LGoucHJvdG90eXBlLmNsZWFyPWZ1bmN0aW9uKCl7dGhpcy5fX2RhdGFfXz1uZXcgaCxcbnRoaXMuc2l6ZT0wfSxqLnByb3RvdHlwZS5kZWxldGU9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5fX2RhdGFfXztyZXR1cm4gdD1lLmRlbGV0ZSh0KSx0aGlzLnNpemU9ZS5zaXplLHR9LGoucHJvdG90eXBlLmdldD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5fX2RhdGFfXy5nZXQodCl9LGoucHJvdG90eXBlLmhhcz1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXModCl9LGoucHJvdG90eXBlLnNldD1mdW5jdGlvbih0LGUpe3ZhciByPXRoaXMuX19kYXRhX187aWYociBpbnN0YW5jZW9mIGgpe3ZhciBuPXIuX19kYXRhX187aWYoIXhlfHwxOTk+bi5sZW5ndGgpcmV0dXJuIG4ucHVzaChbdCxlXSksdGhpcy5zaXplPSsrci5zaXplLHRoaXM7cj10aGlzLl9fZGF0YV9fPW5ldyBwKG4pfXJldHVybiByLnNldCh0LGUpLHRoaXMuc2l6ZT1yLnNpemUsdGhpc307dmFyIFRlPUFlP2Z1bmN0aW9uKHQsZSl7cmV0dXJuIEFlKHQsXCJ0b1N0cmluZ1wiLHtjb25maWd1cmFibGU6dHJ1ZSxcbmVudW1lcmFibGU6ZmFsc2UsdmFsdWU6eHQoZSksd3JpdGFibGU6dHJ1ZX0pfTpFdCxOZT13ZT9mdW5jdGlvbih0KXtyZXR1cm4gbnVsbD09dD9bXToodD1PYmplY3QodCkscih3ZSh0KSxmdW5jdGlvbihlKXtyZXR1cm4gX2UuY2FsbCh0LGUpfSkpfTpNdCxXZT13ZT9mdW5jdGlvbih0KXtmb3IodmFyIGU9W107dDspbyhlLE5lKHQpKSx0PXllKHQpO3JldHVybiBlfTpNdCxHZT1rOyhrZSYmXCJbb2JqZWN0IERhdGFWaWV3XVwiIT1HZShuZXcga2UobmV3IEFycmF5QnVmZmVyKDEpKSl8fHhlJiZcIltvYmplY3QgTWFwXVwiIT1HZShuZXcgeGUpfHxFZSYmXCJbb2JqZWN0IFByb21pc2VdXCIhPUdlKEVlLnJlc29sdmUoKSl8fEZlJiZcIltvYmplY3QgU2V0XVwiIT1HZShuZXcgRmUpfHxJZSYmXCJbb2JqZWN0IFdlYWtNYXBdXCIhPUdlKG5ldyBJZSkpJiYoR2U9ZnVuY3Rpb24odCl7dmFyIGU9ayh0KTtpZih0PSh0PVwiW29iamVjdCBPYmplY3RdXCI9PWU/dC5jb25zdHJ1Y3RvcjpCdCk/c3QodCk6XCJcIilzd2l0Y2godCl7XG5jYXNlIFVlOnJldHVyblwiW29iamVjdCBEYXRhVmlld11cIjtjYXNlIEJlOnJldHVyblwiW29iamVjdCBNYXBdXCI7Y2FzZSBEZTpyZXR1cm5cIltvYmplY3QgUHJvbWlzZV1cIjtjYXNlIFBlOnJldHVyblwiW29iamVjdCBTZXRdXCI7Y2FzZSAkZTpyZXR1cm5cIltvYmplY3QgV2Vha01hcF1cIn1yZXR1cm4gZX0pO3ZhciBxZT1mdW5jdGlvbih0KXt2YXIgZT0wLHI9MDtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgbj16ZSgpLG89MTYtKG4tcik7aWYocj1uLDA8byl7aWYoODAwPD0rK2UpcmV0dXJuIGFyZ3VtZW50c1swXX1lbHNlIGU9MDtyZXR1cm4gdC5hcHBseShCdCxhcmd1bWVudHMpfX0oVGUpLEhlPWZ1bmN0aW9uKHQpe3Q9cHQodCxmdW5jdGlvbih0KXtyZXR1cm4gNTAwPT09ZS5zaXplJiZlLmNsZWFyKCksdH0pO3ZhciBlPXQuY2FjaGU7cmV0dXJuIHR9KGZ1bmN0aW9uKHQpe3ZhciBlPVtdO3JldHVybiA0Nj09PXQuY2hhckNvZGVBdCgwKSYmZS5wdXNoKFwiXCIpLHQucmVwbGFjZShMdCxmdW5jdGlvbih0LHIsbixvKXtcbmUucHVzaChuP28ucmVwbGFjZShDdCxcIiQxXCIpOnJ8fHQpfSksZX0pO3B0LkNhY2hlPXA7dmFyIEplPXgoZnVuY3Rpb24oKXtyZXR1cm4gYXJndW1lbnRzfSgpKT94OmZ1bmN0aW9uKHQpe3JldHVybiBkdCh0KSYmdWUuY2FsbCh0LFwiY2FsbGVlXCIpJiYhX2UuY2FsbCh0LFwiY2FsbGVlXCIpfSxLZT1BcnJheS5pc0FycmF5LFFlPW1lfHxVdCxYZT1adD9hKFp0KTpGLFllPXRlP2EodGUpOk0sWmU9ZWU/YShlZSk6VSx0cj1mdW5jdGlvbih0LGUpe3JldHVybiBxZShmdCh0LGUsRXQpLHQrXCJcIil9KGZ1bmN0aW9uKHQsZSl7dD1PYmplY3QodCk7dmFyIHIsbj0tMSxvPWUubGVuZ3RoLGM9MjxvP2VbMl06QnQ7aWYocj1jKXtyPWVbMF07dmFyIHU9ZVsxXTtpZih2dChjKSl7dmFyIGE9dHlwZW9mIHU7cj0hIShcIm51bWJlclwiPT1hP2p0KGMpJiZjdCh1LGMubGVuZ3RoKTpcInN0cmluZ1wiPT1hJiZ1IGluIGMpJiZ5dChjW3VdLHIpfWVsc2Ugcj1mYWxzZX1mb3IociYmKG89MSk7KytuPG87KWZvcihjPWVbbl0sXG5yPWt0KGMpLHU9LTEsYT1yLmxlbmd0aDsrK3U8YTspe3ZhciBpPXJbdV0sZj10W2ldOyhmPT09QnR8fHl0KGYsbmVbaV0pJiYhdWUuY2FsbCh0LGkpKSYmKHRbaV09Y1tpXSl9cmV0dXJuIHR9KSxlcj1mdW5jdGlvbih0KXtyZXR1cm4gcWUoZnQodCxCdCxidCksdCtcIlwiKX0oZnVuY3Rpb24odCxlKXt2YXIgcj17fTtpZihudWxsPT10KXJldHVybiByO3ZhciBvPWZhbHNlO2U9bihlLGZ1bmN0aW9uKGUpe3JldHVybiBlPVYoZSx0KSxvfHwobz0xPGUubGVuZ3RoKSxlfSksVyh0LFgodCksciksbyYmKHI9bShyLDcsSCkpO2Zvcih2YXIgYz1lLmxlbmd0aDtjLS07KUMocixlW2NdKTtyZXR1cm4gcn0pO3MuY29uc3RhbnQ9eHQscy5kZWZhdWx0cz10cixzLmZsYXR0ZW49YnQscy5pdGVyYXRlZT1GdCxzLmtleXM9enQscy5rZXlzSW49a3Qscy5tZW1vaXplPXB0LHMub21pdD1lcixzLnByb3BlcnR5PUl0LHMucmVtb3ZlPWZ1bmN0aW9uKHQsZSl7dmFyIHI9W107aWYoIXR8fCF0Lmxlbmd0aClyZXR1cm4gcjtcbnZhciBuPS0xLG89W10sYz10Lmxlbmd0aDtmb3IoZT1ZKGUsMyk7KytuPGM7KXt2YXIgdT10W25dO2UodSxuLHQpJiYoci5wdXNoKHUpLG8ucHVzaChuKSl9Zm9yKG49dD9vLmxlbmd0aDowLGM9bi0xO24tLTspaWYodT1vW25dLG49PWN8fHUhPT1hKXt2YXIgYT11O2N0KHUpP2dlLmNhbGwodCx1LDEpOkModCx1KX1yZXR1cm4gcn0scy5lcT15dCxzLmdldD1PdCxzLmhhc0luPVN0LHMuaWRlbnRpdHk9RXQscy5pc0FyZ3VtZW50cz1KZSxzLmlzQXJyYXk9S2Uscy5pc0FycmF5TGlrZT1qdCxzLmlzQnVmZmVyPVFlLHMuaXNGdW5jdGlvbj1fdCxzLmlzTGVuZ3RoPWd0LHMuaXNNYXA9WGUscy5pc09iamVjdD12dCxzLmlzT2JqZWN0TGlrZT1kdCxzLmlzUGxhaW5PYmplY3Q9QXQscy5pc1NldD1ZZSxzLmlzU3ltYm9sPXd0LHMuaXNUeXBlZEFycmF5PVplLHMubGFzdD1odCxzLnN0dWJBcnJheT1NdCxzLnN0dWJGYWxzZT1VdCxzLnRvU3RyaW5nPW10LHMuVkVSU0lPTj1cIjQuMTcuNVwiLFF0JiYoKFF0LmV4cG9ydHM9cykuXz1zLFxuS3QuXz1zKX0pLmNhbGwodGhpcyk7Il0sInNvdXJjZVJvb3QiOiIifQ==