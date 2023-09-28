"use strict";

function _typeof(o) {
  "@babel/helpers - typeof";
  return (
    (_typeof =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (o) {
            return typeof o;
          }
        : function (o) {
            return o &&
              "function" == typeof Symbol &&
              o.constructor === Symbol &&
              o !== Symbol.prototype
              ? "symbol"
              : typeof o;
          }),
    _typeof(o)
  );
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true },
  });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf
    ? Object.setPrototypeOf.bind()
    : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };
  return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return self;
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf.bind()
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}
function _regeneratorRuntime() {
  "use strict";
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime =
    function _regeneratorRuntime() {
      return e;
    };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o =
      Object.defineProperty ||
      function (t, e, r) {
        t[e] = r.value;
      },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return (
      Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0,
      }),
      t[e]
    );
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return (t[e] = r);
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return { type: "normal", arg: t.call(e, r) };
    } catch (t) {
      return { type: "throw", arg: t };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g =
    (GeneratorFunctionPrototype.prototype =
    Generator.prototype =
      Object.create(p));
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await")
          ? e.resolve(h.__await).then(
              function (t) {
                invoke("next", t, i, a);
              },
              function (t) {
                invoke("throw", t, i, a);
              }
            )
          : e.resolve(h).then(
              function (t) {
                (u.value = t), i(u);
              },
              function (t) {
                return invoke("throw", t, i, a);
              }
            );
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return (r = r
          ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg)
          : callInvokeWithMethodAndArg());
      },
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw new Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return { value: t, done: !0 };
      }
      for (n.method = i, n.arg = a; ; ) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;
        else if ("throw" === n.method) {
          if (o === h) throw ((o = s), n.arg);
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (((o = n.done ? s : l), p.arg === y)) continue;
          return { value: p.arg, done: n.done };
        }
        "throw" === p.type && ((o = s), (n.method = "throw"), (n.arg = p.arg));
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t)
      return (
        (r.delegate = null),
        ("throw" === n &&
          e.iterator["return"] &&
          ((r.method = "return"),
          (r.arg = t),
          maybeInvokeDelegate(e, r),
          "throw" === r.method)) ||
          ("return" !== n &&
            ((r.method = "throw"),
            (r.arg = new TypeError(
              "The iterator does not provide a '" + n + "' method"
            )))),
        y
      );
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type)
      return (r.method = "throw"), (r.arg = i.arg), (r.delegate = null), y;
    var a = i.arg;
    return a
      ? a.done
        ? ((r[e.resultName] = a.value),
          (r.next = e.nextLoc),
          "return" !== r.method && ((r.method = "next"), (r.arg = t)),
          (r.delegate = null),
          y)
        : a
      : ((r.method = "throw"),
        (r.arg = new TypeError("iterator result is not an object")),
        (r.delegate = null),
        y);
  }
  function pushTryEntry(t) {
    var e = { tryLoc: t[0] };
    1 in t && (e.catchLoc = t[1]),
      2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
      this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    (e.type = "normal"), delete e.arg, (t.completion = e);
  }
  function Context(t) {
    (this.tryEntries = [{ tryLoc: "root" }]),
      t.forEach(pushTryEntry, this),
      this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length; )
              if (n.call(e, o))
                return (next.value = e[o]), (next.done = !1), next;
            return (next.value = t), (next.done = !0), next;
          };
        return (i.next = i);
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  return (
    (GeneratorFunction.prototype = GeneratorFunctionPrototype),
    o(g, "constructor", {
      value: GeneratorFunctionPrototype,
      configurable: !0,
    }),
    o(GeneratorFunctionPrototype, "constructor", {
      value: GeneratorFunction,
      configurable: !0,
    }),
    (GeneratorFunction.displayName = define(
      GeneratorFunctionPrototype,
      u,
      "GeneratorFunction"
    )),
    (e.isGeneratorFunction = function (t) {
      var e = "function" == typeof t && t.constructor;
      return (
        !!e &&
        (e === GeneratorFunction ||
          "GeneratorFunction" === (e.displayName || e.name))
      );
    }),
    (e.mark = function (t) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(t, GeneratorFunctionPrototype)
          : ((t.__proto__ = GeneratorFunctionPrototype),
            define(t, u, "GeneratorFunction")),
        (t.prototype = Object.create(g)),
        t
      );
    }),
    (e.awrap = function (t) {
      return { __await: t };
    }),
    defineIteratorMethods(AsyncIterator.prototype),
    define(AsyncIterator.prototype, c, function () {
      return this;
    }),
    (e.AsyncIterator = AsyncIterator),
    (e.async = function (t, r, n, o, i) {
      void 0 === i && (i = Promise);
      var a = new AsyncIterator(wrap(t, r, n, o), i);
      return e.isGeneratorFunction(r)
        ? a
        : a.next().then(function (t) {
            return t.done ? t.value : a.next();
          });
    }),
    defineIteratorMethods(g),
    define(g, u, "Generator"),
    define(g, a, function () {
      return this;
    }),
    define(g, "toString", function () {
      return "[object Generator]";
    }),
    (e.keys = function (t) {
      var e = Object(t),
        r = [];
      for (var n in e) r.push(n);
      return (
        r.reverse(),
        function next() {
          for (; r.length; ) {
            var t = r.pop();
            if (t in e) return (next.value = t), (next.done = !1), next;
          }
          return (next.done = !0), next;
        }
      );
    }),
    (e.values = values),
    (Context.prototype = {
      constructor: Context,
      reset: function reset(e) {
        if (
          ((this.prev = 0),
          (this.next = 0),
          (this.sent = this._sent = t),
          (this.done = !1),
          (this.delegate = null),
          (this.method = "next"),
          (this.arg = t),
          this.tryEntries.forEach(resetTryEntry),
          !e)
        )
          for (var r in this)
            "t" === r.charAt(0) &&
              n.call(this, r) &&
              !isNaN(+r.slice(1)) &&
              (this[r] = t);
      },
      stop: function stop() {
        this.done = !0;
        var t = this.tryEntries[0].completion;
        if ("throw" === t.type) throw t.arg;
        return this.rval;
      },
      dispatchException: function dispatchException(e) {
        if (this.done) throw e;
        var r = this;
        function handle(n, o) {
          return (
            (a.type = "throw"),
            (a.arg = e),
            (r.next = n),
            o && ((r.method = "next"), (r.arg = t)),
            !!o
          );
        }
        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
          var i = this.tryEntries[o],
            a = i.completion;
          if ("root" === i.tryLoc) return handle("end");
          if (i.tryLoc <= this.prev) {
            var c = n.call(i, "catchLoc"),
              u = n.call(i, "finallyLoc");
            if (c && u) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            } else if (c) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            } else {
              if (!u) throw new Error("try statement without catch or finally");
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            }
          }
        }
      },
      abrupt: function abrupt(t, e) {
        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
          var o = this.tryEntries[r];
          if (
            o.tryLoc <= this.prev &&
            n.call(o, "finallyLoc") &&
            this.prev < o.finallyLoc
          ) {
            var i = o;
            break;
          }
        }
        i &&
          ("break" === t || "continue" === t) &&
          i.tryLoc <= e &&
          e <= i.finallyLoc &&
          (i = null);
        var a = i ? i.completion : {};
        return (
          (a.type = t),
          (a.arg = e),
          i
            ? ((this.method = "next"), (this.next = i.finallyLoc), y)
            : this.complete(a)
        );
      },
      complete: function complete(t, e) {
        if ("throw" === t.type) throw t.arg;
        return (
          "break" === t.type || "continue" === t.type
            ? (this.next = t.arg)
            : "return" === t.type
            ? ((this.rval = this.arg = t.arg),
              (this.method = "return"),
              (this.next = "end"))
            : "normal" === t.type && e && (this.next = e),
          y
        );
      },
      finish: function finish(t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.finallyLoc === t)
            return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
        }
      },
      catch: function _catch(t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.tryLoc === t) {
            var n = r.completion;
            if ("throw" === n.type) {
              var o = n.arg;
              resetTryEntry(r);
            }
            return o;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function delegateYield(e, r, n) {
        return (
          (this.delegate = { iterator: values(e), resultName: r, nextLoc: n }),
          "next" === this.method && (this.arg = t),
          y
        );
      },
    }),
    e
  );
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
!(function () {
  "use strict";

  var t = /*#__PURE__*/ (function () {
    function t(_t) {
      _classCallCheck(this, t);
      this.params = _t;
    }
    _createClass(t, [
      {
        key: "setTitle",
        value: function setTitle(_t2) {
          document.title = _t2;
        },
      },
      {
        key: "setStyle",
        value: function setStyle(_t3) {
          document.querySelector("[data-style]").href = _t3;
        },
      },
      {
        key: "getHtml",
        value: (function () {
          var _getHtml = _asyncToGenerator(
            /*#__PURE__*/ _regeneratorRuntime().mark(function _callee() {
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1)
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      return _context.abrupt("return", "");
                    case 1:
                    case "end":
                      return _context.stop();
                  }
              }, _callee);
            })
          );
          function getHtml() {
            return _getHtml.apply(this, arguments);
          }
          return getHtml;
        })(),
      },
    ]);
    return t;
  })();
  var e = /*#__PURE__*/ (function (_t4) {
      _inherits(e, _t4);
      var _super = _createSuper(e);
      function e(t, _e) {
        var _this;
        _classCallCheck(this, e);
        (_this = _super.call(this, t, _e)),
          _this.setTitle("Talgtna"),
          _this.setStyle("/static/css/index.css");
        return _this;
      }
      _createClass(e, [
        {
          key: "getHtml",
          value: (function () {
            var _getHtml2 = _asyncToGenerator(
              /*#__PURE__*/ _regeneratorRuntime().mark(function _callee2() {
                var t, _e2, n, a, i;
                return _regeneratorRuntime().wrap(function _callee2$(
                  _context2
                ) {
                  while (1)
                    switch ((_context2.prev = _context2.next)) {
                      case 0:
                        loading(!0);
                        _context2.next = 3;
                        return fetch("http://localhost:5500/");
                      case 3:
                        t = _context2.sent;
                        _context2.next = 6;
                        return t.json();
                      case 6:
                        _e2 = _context2.sent;
                        n = _e2.companies;
                        a = _e2.offers;
                        i =
                          '\n       <div class="wrapper">\n    <div class="carousel">\n    '
                            .concat(
                              a
                                .map(function (t, _e3) {
                                  return "\n          <a data-link href='"
                                    .concat(
                                      null !== t.product
                                        ? "/product/" + t.product
                                        : "/compony/" + t.company,
                                      "' key='"
                                    )
                                    .concat(
                                      _e3,
                                      "'>\n            <img id='carousel' src=\"/static"
                                    )
                                    .concat(
                                      t.image,
                                      '" />\n          </a>\n      '
                                    );
                                })
                                .join(""),
                              "\n    </div>\n    <div class='dots'>\n    "
                            )
                            .concat(
                              a
                                .map(function (t, _e4) {
                                  return "\n      <div class='dot' id='d".concat(
                                    _e4 + 1,
                                    "'></div>\n      "
                                  );
                                })
                                .join(""),
                              "\n    </div>\n    </div>\n    <div class='container'>\n    "
                            )
                            .concat(
                              n
                                .map(function (t, _e5) {
                                  return '\n      <div class="'
                                    .concat(
                                      1 == t.soon ? "company soon" : "company",
                                      "\" key='"
                                    )
                                    .concat(
                                      _e5,
                                      "'>\n        <a data-link href=\"/compony/"
                                    )
                                    .concat(
                                      t.name,
                                      '">\n          <img src="/static'
                                    )
                                    .concat(t.image, '" alt="')
                                    .concat(t.name, '">\n          <p>')
                                    .concat(
                                      t.name,
                                      "</p>\n        </a>\n      </div>\n      "
                                    );
                                })
                                .join(""),
                              "\n    </div>"
                            );
                        return _context2.abrupt(
                          "return",
                          (localStorage.getItem("cart") ||
                            localStorage.setItem("cart", "[]"),
                          fetch("/static/siteJs/index.js")
                            .then(function (t) {
                              return !!t.ok && t.blob();
                            })
                            .then(function (t) {
                              var e = URL.createObjectURL(t);
                              document
                                .querySelectorAll("[data-script]")
                                .forEach(function (t) {
                                  t.src !== e && document.head.removeChild(t);
                                });
                              var n = document.createElement("script");
                              n.setAttribute("src", e),
                                n.setAttribute("data-script", ""),
                                n.setAttribute("type", "text/javascript"),
                                document.head.appendChild(n);
                            }),
                          loading(!1),
                          i)
                        );
                      case 11:
                      case "end":
                        return _context2.stop();
                    }
                },
                _callee2);
              })
            );
            function getHtml() {
              return _getHtml2.apply(this, arguments);
            }
            return getHtml;
          })(),
        },
      ]);
      return e;
    })(t),
    n = /*#__PURE__*/ (function (_t5) {
      _inherits(n, _t5);
      var _super2 = _createSuper(n);
      function n(t, e) {
        var _this2;
        _classCallCheck(this, n);
        (_this2 = _super2.call(this, t, e)),
          (_this2.auth = e),
          _this2.setTitle("my Profile"),
          _this2.setStyle("/static/css/profile.css");
        return _this2;
      }
      _createClass(n, [
        {
          key: "getHtml",
          value: (function () {
            var _getHtml3 = _asyncToGenerator(
              /*#__PURE__*/ _regeneratorRuntime().mark(function _callee3() {
                var _t6, _e6, _n;
                return _regeneratorRuntime().wrap(
                  function _callee3$(_context3) {
                    while (1)
                      switch ((_context3.prev = _context3.next)) {
                        case 0:
                          if (!this.auth) {
                            _context3.next = 12;
                            break;
                          }
                          if (
                            !(loading(!0), localStorage.getItem("AuthToken"))
                          ) {
                            _context3.next = 11;
                            break;
                          }
                          _t6 = new Headers();
                          _t6.append(
                            "AuthToken",
                            localStorage.getItem("AuthToken")
                          );
                          _context3.next = 6;
                          return fetch("http://localhost:5500/user/profile", {
                            method: "get",
                            headers: _t6,
                          });
                        case 6:
                          _e6 = _context3.sent;
                          _context3.next = 9;
                          return _e6.json();
                        case 9:
                          _n = _context3.sent;
                          return _context3.abrupt(
                            "return",
                            (_n.err &&
                              (localStorage.removeItem("AuthToken"),
                              localStorage.removeItem("coupons"),
                              localStorage.removeItem("favlist"),
                              (window.location = "/"),
                              CreateToast({
                                type: "success",
                                msg: "حدث خطأ ما، يرجى تسجيل الدخول والمحاولة مرة أخرى",
                                time: 5e3,
                              })),
                            fetch("/static/siteJs/profile.js")
                              .then(function (t) {
                                return !!t.ok && t.blob();
                              })
                              .then(function (t) {
                                var e = URL.createObjectURL(t);
                                document
                                  .querySelectorAll("[data-script]")
                                  .forEach(function (t) {
                                    t.src !== e && document.head.removeChild(t);
                                  });
                                var n = document.createElement("script");
                                n.setAttribute("src", e),
                                  n.setAttribute("defer", ""),
                                  n.setAttribute("data-script", ""),
                                  n.setAttribute("type", "text/javascript"),
                                  document.head.appendChild(n);
                              }),
                            loading(!1),
                            '\n          <div class="profile">\n            <p>\u0627\u0644\u0627\u0633\u0645: '
                              .concat(
                                _n.username,
                                "</p>\n            <p>\u0628\u0631\u064A\u062F \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A: "
                              )
                              .concat(
                                _n.email,
                                '</p>\n            <button onclick="logout()">\u062A\u0633\u062C\u064A\u0644 \u062E\u0631\u0648\u062C</button>\n            <a href="/edit/profile" data-link>\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0634\u062E\u0635\u064A</a>\n          </div>        \n        '
                              ))
                          );
                        case 11:
                          return _context3.abrupt(
                            "return",
                            (loading(!1),
                            "\n        <div class='notLoginPop'>\n          <a href=\"/\" data-link class=\"backToHome\"><i class='bx bxs-x-circle'></i></a>\n          <p>للأسف تحتاج إلى تسجيل الدخول للوصول إلى هذه الصفحة</p>\n          <a href='/login' data-link class=\"log\">تسجيل الدخول</a>\n          <a href='/register' data-link class=\"log\">تسجيل حساب</a>\n        </div>\n        ")
                          );
                        case 12:
                        case "end":
                          return _context3.stop();
                      }
                  },
                  _callee3,
                  this
                );
              })
            );
            function getHtml() {
              return _getHtml3.apply(this, arguments);
            }
            return getHtml;
          })(),
        },
      ]);
      return n;
    })(t),
    a = /*#__PURE__*/ (function (_t7) {
      _inherits(a, _t7);
      var _super3 = _createSuper(a);
      function a(t, e) {
        var _this3;
        _classCallCheck(this, a);
        (_this3 = _super3.call(this, t, e)),
          (_this3.auth = e),
          _this3.setTitle("my Orders"),
          _this3.setStyle("/static/css/orderHistory.css");
        return _this3;
      }
      _createClass(a, [
        {
          key: "getHtml",
          value: (function () {
            var _getHtml4 = _asyncToGenerator(
              /*#__PURE__*/ _regeneratorRuntime().mark(function _callee4() {
                var _t8, _e7, _n2, _a;
                return _regeneratorRuntime().wrap(
                  function _callee4$(_context4) {
                    while (1)
                      switch ((_context4.prev = _context4.next)) {
                        case 0:
                          if (!(loading(!0), this.auth)) {
                            _context4.next = 13;
                            break;
                          }
                          if (!localStorage.getItem("AuthToken")) {
                            _context4.next = 12;
                            break;
                          }
                          _t8 = new Headers();
                          _t8.append(
                            "AuthToken",
                            localStorage.getItem("AuthToken")
                          );
                          _context4.next = 6;
                          return fetch(
                            "http://localhost:5500/user/orderhistory",
                            {
                              method: "get",
                              headers: _t8,
                            }
                          );
                        case 6:
                          _e7 = _context4.sent;
                          _context4.next = 9;
                          return _e7.json();
                        case 9:
                          _n2 = _context4.sent;
                          _a = _n2.map(function (t, e) {
                            var n = JSON.parse(t.cart).map(function (t, e) {
                              return '\n          <div class="orderitem" key="'
                                .concat(e, '">\n            <img src="')
                                .concat(t.image, '" alt="')
                                .concat(
                                  t.name,
                                  '">\n            <div class="itemInfo">\n              <p>'
                                )
                                .concat(
                                  t.name,
                                  "</p>\n              <p>\u0627\u0644\u0643\u0645\u064A\u0629: "
                                )
                                .concat(
                                  t.quantity,
                                  "</p>\n              <p>\u0627\u0644\u0633\u0639\u0631: "
                                )
                                .concat(
                                  t.price,
                                  " \u062C</p>\n              <p>\u0627\u0644\u0633\u0639\u0631 \u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A \u0644\u0644\u0637\u0644\u0628: "
                                )
                                .concat(
                                  t.price * t.quantity,
                                  " \u062C</p>\n            </div>\n          </div>\n        "
                                );
                            });
                            return '\n          <div class="orderRec" key="'
                              .concat(
                                e,
                                '">\n        <p>\u0645\u0639\u0631\u0641 \u0627\u0644\u0637\u0644\u0628: '
                              )
                              .concat(
                                t.id,
                                '</p>\n        <div>\n          \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0637\u0644\u0628:\n          <h4 dir="ltr" style="color: #b3b2b2">\n            '
                              )
                              .concat(
                                t.date,
                                "\n          </h4>\n        </div>\n        <p>\u0634\u0627\u0631\u0639: "
                              )
                              .concat(
                                t.addrSt,
                                "</p>\n        <p>\u0639\u0645\u0627\u0631\u0647: "
                              )
                              .concat(
                                t.addrB,
                                "</p>\n        <p>\u0637\u0627\u0628\u0642: "
                              )
                              .concat(
                                t.addrF,
                                "</p>\n        <p>\u062A\u0633\u064A\u0644\u0645 \u0641\u064A: "
                              )
                              .concat(
                                t.where,
                                "</p>\n        <p>\u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645: "
                              )
                              .concat(
                                t.username,
                                "</p>\n        <p>\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641: "
                              )
                              .concat(
                                t.phone,
                                "</p>\n        <p>\u0647\u0627\u062A\u0641 \u0627\u062D\u062A\u064A\u0627\u0637\u064A: "
                              )
                              .concat(
                                t.spare_phone,
                                "</p>\n        <p>\u0627\u0644\u0645\u062C\u0645\u0648\u0639: "
                              )
                              .concat(t.total, " \u062C</p>\n        ")
                              .concat(
                                n,
                                '\n        <div class="Delivered">\n          \u062A\u0633\u0644\u064A\u0645 \u0627\u0644\u0637\u0644\u0628:  '
                              )
                              .concat(
                                1 == t.delivered ? "نعم" : "لا",
                                '\n        </div>\n        <div class="Paid">\n          \u062A\u0645 \u0627\u0644\u062F\u0641\u0639:  '
                              )
                              .concat(
                                1 == t.paid ? "نعم" : "لا",
                                " \n        </div>\n      </div>\n          "
                              );
                          });
                          return _context4.abrupt(
                            "return",
                            (console.log(_n2),
                            fetch("/static/siteJs/orderHistory.js")
                              .then(function (t) {
                                return !!t.ok && t.blob();
                              })
                              .then(function (t) {
                                var e = URL.createObjectURL(t);
                                document
                                  .querySelectorAll("[data-script]")
                                  .forEach(function (t) {
                                    t.src !== e && document.head.removeChild(t);
                                  });
                                var n = document.createElement("script");
                                n.setAttribute("src", e),
                                  n.setAttribute("defer", ""),
                                  n.setAttribute("data-script", ""),
                                  n.setAttribute("type", "text/javascript"),
                                  document.head.appendChild(n);
                              }),
                            loading(!1),
                            _n2.length > 0
                              ? _a
                              : "\n          <div class='noOrders'>\n            <div class='icons'><i class='bx bxs-package'></i><i class='bx bx-sad' ></i></div>\n            <div class='links'>\n              <p>لا توجد طلبات حتى الآن</p>\n              <a href=\"/\" data-link>الرئيسية</a>\n              <a href=/compony/عروض التوفير\" data-link class='offer'><p>اضغط لرؤية العروض</p></a>\n            </div>\n          </div>\n          ")
                          );
                        case 12:
                          return _context4.abrupt(
                            "return",
                            (loading(!1),
                            "\n        <div class='notLoginPop'>\n          <a href=\"/\" data-link class=\"backToHome\"><i class='bx bxs-x-circle'></i></a>\n          <p>للأسف تحتاج إلى تسجيل الدخول للوصول إلى هذه الصفحة</p>\n          <a href='/login' data-link class=\"log\">تسجيل الدخول</a>\n          <a href='/register' data-link class=\"log\">تسجيل حساب</a>\n        </div>\n        ")
                          );
                        case 13:
                        case "end":
                          return _context4.stop();
                      }
                  },
                  _callee4,
                  this
                );
              })
            );
            function getHtml() {
              return _getHtml4.apply(this, arguments);
            }
            return getHtml;
          })(),
        },
      ]);
      return a;
    })(t),
    i = /*#__PURE__*/ (function (_t9) {
      _inherits(i, _t9);
      var _super4 = _createSuper(i);
      function i(t, e) {
        var _this4;
        _classCallCheck(this, i);
        (_this4 = _super4.call(this, t, e)),
          (_this4.auth = e),
          _this4.setTitle("my Coupons"),
          _this4.setStyle("/static/css/coupon.css");
        return _this4;
      }
      _createClass(i, [
        {
          key: "getHtml",
          value: (function () {
            var _getHtml5 = _asyncToGenerator(
              /*#__PURE__*/ _regeneratorRuntime().mark(function _callee5() {
                var _t10, _e8, _n3, _a2;
                return _regeneratorRuntime().wrap(
                  function _callee5$(_context5) {
                    while (1)
                      switch ((_context5.prev = _context5.next)) {
                        case 0:
                          if (!(loading(!0), this.auth)) {
                            _context5.next = 14;
                            break;
                          }
                          if (!localStorage.getItem("AuthToken")) {
                            _context5.next = 13;
                            break;
                          }
                          _t10 = new Headers();
                          _t10.append(
                            "AuthToken",
                            localStorage.getItem("AuthToken")
                          );
                          _context5.next = 6;
                          return fetch("http://localhost:5500/user/coupon", {
                            method: "get",
                            headers: _t10,
                          });
                        case 6:
                          _e8 = _context5.sent;
                          _context5.next = 9;
                          return _e8.json();
                        case 9:
                          _n3 = _context5.sent;
                          _n3.err &&
                            (localStorage.removeItem("AuthToken"),
                            localStorage.removeItem("coupons"),
                            localStorage.removeItem("favlist"),
                            (window.location = "/"),
                            CreateToast({
                              type: "success",
                              msg: "حدث خطأ ما، يرجى تسجيل الدخول والمحاولة مرة أخرى",
                              time: 5e3,
                            }));
                          _a2 = _n3.coupons
                            .map(function (t, e) {
                              return "\n        <div class='coupon' key=\""
                                .concat(
                                  e,
                                  "\">\n          <h1 class='code'>\n          "
                                )
                                .concat(
                                  t.code,
                                  "\n          </h1>\n          <div class='value'>\n            <h2>\n              "
                                )
                                .concat(
                                  t.code,
                                  "\n            </h2>\n           <h1>"
                                )
                                .concat(
                                  t.value,
                                  " \u062C</h1>\n          </div>\n          <button class='useIt' onclick='useCoupon("
                                )
                                .concat(
                                  JSON.stringify(t),
                                  ")'>\u0627\u0633\u062A\u062E\u062F\u0627\u0645\u0647</button>\n        </div>"
                                );
                            })
                            .join("");
                          return _context5.abrupt(
                            "return",
                            (fetch("/static/siteJs/coupons.js")
                              .then(function (t) {
                                return !!t.ok && t.blob();
                              })
                              .then(function (t) {
                                var e = URL.createObjectURL(t);
                                document
                                  .querySelectorAll("[data-script]")
                                  .forEach(function (t) {
                                    t.src !== e && document.head.removeChild(t);
                                  });
                                var n = document.createElement("script");
                                n.setAttribute("src", e),
                                  n.setAttribute("defer", ""),
                                  n.setAttribute("data-script", ""),
                                  n.setAttribute("type", "text/javascript"),
                                  document.head.appendChild(n);
                              }),
                            loading(!1),
                            "\n        <div class='cotainer'>\n          <a href=\"/compony/\u0639\u0631\u0648\u0636 \u0627\u0644\u062A\u0648\u0641\u064A\u0631\" data-link class='offer'><p>\u0627\u0636\u063A\u0637 \u0644\u0631\u0624\u064A\u0629 \u0627\u0644\u0639\u0631\u0648\u0636</p></a>\n          ".concat(
                              _a2,
                              "\n        </div>"
                            ))
                          );
                        case 13:
                          return _context5.abrupt(
                            "return",
                            (loading(!1),
                            "\n          <div class='notLoginPop'>\n            <a href=\"/\" data-link class=\"backToHome\"><i class='bx bxs-x-circle'></i></a>\n            <p>للأسف تحتاج إلى تسجيل الدخول للوصول إلى هذه الصفحة</p>\n            <a href='/login' data-link class=\"log\">تسجيل الدخول</a>\n            <a href='/register' data-link class=\"log\">تسجيل حساب</a>\n          </div>\n        ")
                          );
                        case 14:
                        case "end":
                          return _context5.stop();
                      }
                  },
                  _callee5,
                  this
                );
              })
            );
            function getHtml() {
              return _getHtml5.apply(this, arguments);
            }
            return getHtml;
          })(),
        },
      ]);
      return i;
    })(t),
    s = /*#__PURE__*/ (function (_t11) {
      _inherits(s, _t11);
      var _super5 = _createSuper(s);
      function s(t, e) {
        var _this5;
        _classCallCheck(this, s);
        (_this5 = _super5.call(this, t, e)),
          (_this5.auth = e),
          _this5.setTitle("my CashBack balance"),
          _this5.setStyle("/static/css/cashback.css");
        return _this5;
      }
      _createClass(s, [
        {
          key: "getHtml",
          value: (function () {
            var _getHtml6 = _asyncToGenerator(
              /*#__PURE__*/ _regeneratorRuntime().mark(function _callee6() {
                var _t12, _e9, _n4;
                return _regeneratorRuntime().wrap(
                  function _callee6$(_context6) {
                    while (1)
                      switch ((_context6.prev = _context6.next)) {
                        case 0:
                          if (!(loading(!0), this.auth)) {
                            _context6.next = 12;
                            break;
                          }
                          if (!localStorage.getItem("AuthToken")) {
                            _context6.next = 11;
                            break;
                          }
                          _t12 = new Headers();
                          _t12.append(
                            "AuthToken",
                            localStorage.getItem("AuthToken")
                          );
                          _context6.next = 6;
                          return fetch("http://localhost:5500/user/cashback", {
                            method: "get",
                            headers: _t12,
                          });
                        case 6:
                          _e9 = _context6.sent;
                          _context6.next = 9;
                          return _e9.json();
                        case 9:
                          _n4 = _context6.sent;
                          return _context6.abrupt(
                            "return",
                            (_n4.err &&
                              (localStorage.removeItem("AuthToken"),
                              localStorage.removeItem("coupons"),
                              localStorage.removeItem("favlist"),
                              (window.location = "/"),
                              CreateToast({
                                type: "success",
                                msg: "حدث خطأ ما، يرجى تسجيل الدخول والمحاولة مرة أخرى",
                                time: 5e3,
                              })),
                            fetch("/static/siteJs/cashBack.js")
                              .then(function (t) {
                                return !!t.ok && t.blob();
                              })
                              .then(function (t) {
                                var e = URL.createObjectURL(t);
                                document
                                  .querySelectorAll("[data-script]")
                                  .forEach(function (t) {
                                    t.src !== e && document.head.removeChild(t);
                                  });
                                var n = document.createElement("script");
                                n.setAttribute("src", e),
                                  n.setAttribute("defer", ""),
                                  n.setAttribute("data-script", ""),
                                  n.setAttribute("type", "text/javascript"),
                                  document.head.appendChild(n);
                              }),
                            loading(!1),
                            '\n        <div class="Cashback">\n          <p>\u0631\u0635\u064A\u062F \u0643\u0627\u0634 \u0628\u0627\u0643</p>\n          <p>'
                              .concat(
                                _n4.cashback,
                                ' \u062C</p>\n        </div>\n        <div class="Orders">\n          <p>\u0639\u062F\u062F \u0627\u0644\u0637\u0644\u0628\u0627\u062A</p>\n          <p>'
                              )
                              .concat(
                                _n4.orders,
                                "</p>\n        </div>\n        "
                              ))
                          );
                        case 11:
                          return _context6.abrupt(
                            "return",
                            (loading(!1),
                            "\n          <div class='notLoginPop'>\n            <a href=\"/\" data-link class=\"backToHome\"><i class='bx bxs-x-circle'></i></a>\n            <p>للأسف تحتاج إلى تسجيل الدخول للوصول إلى هذه الصفحة</p>\n            <a href='/login' data-link class=\"log\">تسجيل الدخول</a>\n            <a href='/register' data-link class=\"log\">تسجيل حساب</a>\n          </div>\n        ")
                          );
                        case 12:
                        case "end":
                          return _context6.stop();
                      }
                  },
                  _callee6,
                  this
                );
              })
            );
            function getHtml() {
              return _getHtml6.apply(this, arguments);
            }
            return getHtml;
          })(),
        },
      ]);
      return s;
    })(t),
    c = /*#__PURE__*/ (function (_t13) {
      _inherits(c, _t13);
      var _super6 = _createSuper(c);
      function c(t, e) {
        var _this6;
        _classCallCheck(this, c);
        _this6 = _super6.call(this, t, e);
        var n = decodeURI(t.id);
        (_this6.productId = n),
          _this6.setTitle("Product: " + _this6.productId),
          _this6.setStyle("/static/css/product.css");
        return _this6;
      }
      _createClass(c, [
        {
          key: "getHtml",
          value: (function () {
            var _getHtml7 = _asyncToGenerator(
              /*#__PURE__*/ _regeneratorRuntime().mark(function _callee7() {
                var t, e, n, _t14, a;
                return _regeneratorRuntime().wrap(
                  function _callee7$(_context7) {
                    while (1)
                      switch ((_context7.prev = _context7.next)) {
                        case 0:
                          loading(!0);
                          _context7.next = 3;
                          return fetch(
                            "http://localhost:5500/product/" + this.productId
                          );
                        case 3:
                          t = _context7.sent;
                          _context7.next = 6;
                          return t.json();
                        case 6:
                          e = _context7.sent.product;
                          n = "";
                          for (_t14 = 0; _t14 < parseInt(e.inStock); _t14++)
                            n += '<option value="'
                              .concat(_t14 + 1, '">')
                              .concat(_t14 + 1, "</option>");
                          a =
                            "\n    <div class='image'>\n      <img src='/static"
                              .concat(
                                e.image,
                                "' />\n    </div>\n    <div class='details'>\n      <div class='box1'>\n        <p class='compony'>\u062A\u0631\u064A\u062F \u0631\u0624\u064A\u0629 \u0645\u0646\u062A\u062C\u0627\u062A \u0623\u062E\u0631\u0649 : <a href='/compony/"
                              )
                              .concat(e.compony, "' data-link class='seemore'>")
                              .concat(
                                e.compony,
                                "</a></p>\n        <div class='prices'>\n          "
                              )
                              .concat(
                                (function (t) {
                                  var e = t.price + t.offer,
                                    n = (Math.abs(e - t.price) / e) * 100;
                                  return t.offer > 0
                                    ? "\n        <h2 class='price'>"
                                        .concat(
                                          t.price,
                                          " \u062C</h2>\n        <p class='offer'>"
                                        )
                                        .concat(
                                          t.price + t.offer,
                                          " \u062C</p>\n        <p class='percent'>"
                                        )
                                        .concat(
                                          Math.trunc(n),
                                          "%</p>\n        "
                                        )
                                    : "\n        <h2 class='price'>".concat(
                                        t.price,
                                        " \u062C</h2>\n        "
                                      );
                                })(e),
                                "\n        </div>\n        <h2>"
                              )
                              .concat(e.name, "</h2>\n        <p>")
                              .concat(
                                e.description,
                                "</p>\n      </div>\n      <div class='box2'>\n          "
                              )
                              .concat(
                                (function (t) {
                                  return 1 == t.available && t.inStock > 0
                                    ? "\n        <div class='addToCart'>\n            <input id='productId' type='hidden' value='"
                                        .concat(
                                          JSON.stringify(t),
                                          "' />\n            <select id='quantity'>\n              "
                                        )
                                        .concat(
                                          n,
                                          '\n            </select>\n            <button onclick="addTo()">\u0623\u0636\u0641 \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629</button>\n        </div>\n        '
                                        )
                                    : "\n        <div class='unAvailable'>\n         <h2>غير متاح</h2>\n        </div>";
                                })(e),
                                "\n      </div>\n    </div>\n    "
                              );
                          return _context7.abrupt(
                            "return",
                            (fetch("/static/siteJs/product.js")
                              .then(function (t) {
                                return !!t.ok && t.blob();
                              })
                              .then(function (t) {
                                var e = URL.createObjectURL(t);
                                document
                                  .querySelectorAll("[data-script]")
                                  .forEach(function (t) {
                                    t.src !== e && document.head.removeChild(t);
                                  });
                                var n = document.createElement("script");
                                n.setAttribute("src", e),
                                  n.setAttribute("defer", ""),
                                  n.setAttribute("data-script", ""),
                                  n.setAttribute("type", "text/javascript"),
                                  document.head.appendChild(n);
                              }),
                            loading(!1),
                            a)
                          );
                        case 11:
                        case "end":
                          return _context7.stop();
                      }
                  },
                  _callee7,
                  this
                );
              })
            );
            function getHtml() {
              return _getHtml7.apply(this, arguments);
            }
            return getHtml;
          })(),
        },
      ]);
      return c;
    })(t),
    o = /*#__PURE__*/ (function (_t15) {
      _inherits(o, _t15);
      var _super7 = _createSuper(o);
      function o(t, e) {
        var _this7;
        _classCallCheck(this, o);
        _this7 = _super7.call(this, t, e);
        var n = decodeURI(t.name);
        (_this7.company = n),
          _this7.setTitle(n),
          _this7.setStyle("/static/css/company.css");
        return _this7;
      }
      _createClass(o, [
        {
          key: "getHtml",
          value: (function () {
            var _getHtml8 = _asyncToGenerator(
              /*#__PURE__*/ _regeneratorRuntime().mark(function _callee8() {
                var t, e;
                return _regeneratorRuntime().wrap(
                  function _callee8$(_context8) {
                    while (1)
                      switch ((_context8.prev = _context8.next)) {
                        case 0:
                          loading(!0);
                          _context8.next = 3;
                          return fetch(
                            "http://localhost:5500/compony/" + this.company
                          );
                        case 3:
                          t = _context8.sent;
                          _context8.next = 6;
                          return t.json();
                        case 6:
                          e = _context8.sent.products
                            .map(function (t, e) {
                              return "\n      <div class='"
                                .concat(
                                  (function () {
                                    var e = "product";
                                    return (
                                      1 !== t.available &&
                                        0 == t.inStock &&
                                        (e += " notavailable"),
                                      t.offer > 0 && (e += " offer"),
                                      e
                                    );
                                  })(),
                                  "' id='"
                                )
                                .concat(t.id, "' key='")
                                .concat(
                                  e,
                                  '\'>\n        <input type="hidden" value="'
                                )
                                .concat(
                                  t.id,
                                  '" id="productId" />\n        <input type="hidden" value="'
                                )
                                .concat(
                                  t.name,
                                  '" id="productName" />\n        <input type="hidden" value="'
                                )
                                .concat(
                                  t.image,
                                  '" id="productImage" />\n        <input type="hidden" value="'
                                )
                                .concat(
                                  t.price,
                                  '" id="productPrice" />\n        <input type="hidden" value="'
                                )
                                .concat(
                                  t.inStock,
                                  '" id="productInStock" />\n        <input type="hidden" value="1" id="productQuantity" />\n        <button id=\'addtocart\' onclick="addItemToCart('
                                )
                                .concat(
                                  t.id,
                                  ")\"><img src=\"/static/img/addtocart.png\" /></button>\n        <button id='addtofav' onclick='addToFav("
                                )
                                .concat(
                                  t.id,
                                  ")'><i class=\"bx bxs-heart\"></i></button>\n        <a href='/product/"
                                )
                                .concat(
                                  t.id,
                                  "' data-link>\n            <img class='image' src='/static/"
                                )
                                .concat(
                                  t.image,
                                  "' />\n          <div class='body'>\n            <p>"
                                )
                                .concat(
                                  t.name,
                                  "</p>\n          </div>\n        </a>\n        "
                                )
                                .concat(
                                  t.offer > 0
                                    ? '<p class="price offer">'
                                        .concat(
                                          t.price + t.offer,
                                          ' \u062C</p>\n            <p class="price">'
                                        )
                                        .concat(
                                          t.price,
                                          " \u062C</p>\n            "
                                        )
                                    : '<p class="price">'.concat(
                                        t.price,
                                        " \u062C</p>"
                                      ),
                                  "\n      </div>\n      "
                                );
                            })
                            .join("");
                          return _context8.abrupt(
                            "return",
                            (fetch("/static/siteJs/compony.js")
                              .then(function (t) {
                                return !!t.ok && t.blob();
                              })
                              .then(function (t) {
                                var e = URL.createObjectURL(t);
                                document
                                  .querySelectorAll("[data-script]")
                                  .forEach(function (t) {
                                    t.src !== e && document.head.removeChild(t);
                                  });
                                var n = document.createElement("script");
                                n.setAttribute("src", e),
                                  n.setAttribute("defer", ""),
                                  n.setAttribute("data-script", ""),
                                  n.setAttribute("type", "text/javascript"),
                                  document.head.appendChild(n);
                              }),
                            loading(!1),
                            "\n    <div class='containerProducts'>\n     ".concat(
                              e,
                              "\n    </div>\n    "
                            ))
                          );
                        case 8:
                        case "end":
                          return _context8.stop();
                      }
                  },
                  _callee8,
                  this
                );
              })
            );
            function getHtml() {
              return _getHtml8.apply(this, arguments);
            }
            return getHtml;
          })(),
        },
      ]);
      return o;
    })(t),
    r = /*#__PURE__*/ (function (_t16) {
      _inherits(r, _t16);
      var _super8 = _createSuper(r);
      function r(t, e) {
        var _this8;
        _classCallCheck(this, r);
        (_this8 = _super8.call(this, t, e)),
          _this8.setTitle("My Cart"),
          _this8.setStyle("/static/css/cart.css");
        return _this8;
      }
      _createClass(r, [
        {
          key: "getHtml",
          value: (function () {
            var _getHtml9 = _asyncToGenerator(
              /*#__PURE__*/ _regeneratorRuntime().mark(function _callee9() {
                var _t17, _e10, _n5;
                return _regeneratorRuntime().wrap(function _callee9$(
                  _context9
                ) {
                  while (1)
                    switch ((_context9.prev = _context9.next)) {
                      case 0:
                        if (!(loading(!0), Cart.length > 0)) {
                          _context9.next = 5;
                          break;
                        }
                        _t17 = function _t17() {
                          var t = Cart.reduce(function (t, e) {
                            return t + e.quantity * e.price;
                          }, 0);
                          return (
                            0 !== length &&
                              ((quantityInCart.innerHTML = length),
                              cartA.appendChild(quantityInCart)),
                            t
                          );
                        };
                        _e10 = function _e10() {
                          var t = "";
                          return (
                            Cart.forEach(function (e) {
                              return (t += "\n        <div id='"
                                .concat(
                                  e.id,
                                  "' class='productB'>\n            <img src=\"/static"
                                )
                                .concat(
                                  e.image,
                                  '"/>\n            <a data-link href="/product/'
                                )
                                .concat(e.id, '">\n            ')
                                .concat(
                                  e.name.length > 40
                                    ? "<h3>".concat(
                                        e.name.substr(0, e.name.length / 2) +
                                          "...",
                                        "</h3> "
                                      )
                                    : "<h3>".concat(e.name, "</h3> "),
                                  "\n            </a>\n            <div class='quantityDiv'>\n                <div id=\"productFunc\">\n                    <button id='inc' onclick='inc("
                                )
                                .concat(
                                  e.id,
                                  ")'>\n                        <i class='bx bx-plus'></i>\n                    </button>\n                        <p id='quan'>"
                                )
                                .concat(
                                  e.quantity,
                                  "</p>\n                    <button id='dec' onclick='dec("
                                )
                                .concat(
                                  e.id,
                                  ")'>\n                        <i class='bx bx-minus'></i>\n                    </button>\n                </div>\n                <div id=\"productTotal\">\n                    <p id='PT'>"
                                )
                                .concat(
                                  e.price * e.quantity,
                                  ' \u062C<p>\n                    <button onclick="removeProduct('
                                )
                                .concat(
                                  e.id,
                                  ")\"><i class='bx bxs-trash'></i></button>\n                </div>\n            </div>\n        </div>\n        "
                                ));
                            }),
                            t
                          );
                        };
                        _n5 =
                          "\n    <div class='Thecart'>\n        <div class='head'>\n            <p>\u0633\u0644\u0629 \u0627\u0644\u062A\u0633\u0648\u0642</p>\n            <button onclick='removeAll()'><i class='bx bxs-trash'></i> \u0625\u0632\u0627\u0644\u0629 \u062C\u0645\u064A\u0639 \u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A</button>\n        </div>\n        <div class='body'>\n            "
                            .concat(
                              _e10(),
                              "\n        </div>\n        <div class='bottomT'>\n            <div class='total'>\n                <div>\n                    <h3>\u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A</h3>\n                    <p id='TotalPro'>\u0645\u0646\u062A\u062C\u0627\u062A "
                            )
                            .concat(
                              cartLength(),
                              "</p>\n                </div>\n                <h2 id='TP'>"
                            )
                            .concat(
                              _t17(),
                              " \u062C</h2>\n            </div>\n            <a>\u0627\u0644\u062F\u0641\u0639</a>\n        </div>\n    </div>\n    "
                            );
                        return _context9.abrupt(
                          "return",
                          (fetch("/static/siteJs/cart.js")
                            .then(function (t) {
                              return !!t.ok && t.blob();
                            })
                            .then(function (t) {
                              var e = URL.createObjectURL(t);
                              document
                                .querySelectorAll("[data-script]")
                                .forEach(function (t) {
                                  t.src !== e && document.head.removeChild(t);
                                });
                              var n = document.createElement("script");
                              n.setAttribute("src", e),
                                n.setAttribute("data-script", ""),
                                n.setAttribute("type", "text/javascript"),
                                document.head.appendChild(n);
                            }),
                          loading(!1),
                          _n5)
                        );
                      case 5:
                        return _context9.abrupt(
                          "return",
                          (loading(!1),
                          "\n      <div id='emptyCart'>\n        <p>عربة التسوق فارغة</p>\n        <span>0</span>\n        <img src='/static/img/cart.png' />\n        <a data-link href=\"/\">اذهب للتسوق</a>\n      </div>\n      ")
                        );
                      case 6:
                      case "end":
                        return _context9.stop();
                    }
                },
                _callee9);
              })
            );
            function getHtml() {
              return _getHtml9.apply(this, arguments);
            }
            return getHtml;
          })(),
        },
      ]);
      return r;
    })(t),
    d = /*#__PURE__*/ (function (_t18) {
      _inherits(d, _t18);
      var _super9 = _createSuper(d);
      function d(t, e) {
        var _this9;
        _classCallCheck(this, d);
        (_this9 = _super9.call(this, t, e)),
          (_this9.auth = e),
          _this9.setTitle("Login"),
          _this9.setStyle("/static/css/login.css");
        return _this9;
      }
      _createClass(d, [
        {
          key: "getHtml",
          value: (function () {
            var _getHtml10 = _asyncToGenerator(
              /*#__PURE__*/ _regeneratorRuntime().mark(function _callee10() {
                return _regeneratorRuntime().wrap(function _callee10$(
                  _context10
                ) {
                  while (1)
                    switch ((_context10.prev = _context10.next)) {
                      case 0:
                        if (
                          !(loading(!0), !localStorage.getItem("AuthToken"))
                        ) {
                          _context10.next = 2;
                          break;
                        }
                        return _context10.abrupt(
                          "return",
                          (fetch("/static/siteJs/login.js")
                            .then(function (t) {
                              return !!t.ok && t.blob();
                            })
                            .then(function (t) {
                              var e = URL.createObjectURL(t);
                              document
                                .querySelectorAll("[data-script]")
                                .forEach(function (t) {
                                  t.src !== e && document.head.removeChild(t);
                                });
                              var n = document.createElement("script");
                              n.setAttribute("src", e),
                                n.setAttribute("defer", ""),
                                n.setAttribute("data-script", ""),
                                n.setAttribute("type", "text/javascript"),
                                document.head.appendChild(n);
                            }),
                          loading(!1),
                          '\n      <div class=\'logIn\'>\n        <div class="logo">            \n          <img src="/static/img/logo.png"/>\n        </div>\n        <form id="login">\n            <div class=\'input\'>\n                <label>بريد إلكتروني</label>\n                <input type=\'email\' name="email" placeholder="بريد إلكتروني" />\n            </div>\n            <div class=\'input\'>\n                <label>كلمة المرور</label>\n                <input type="password" name="password" placeholder="كلمة المرور">            </div>\n            <a href="/forget" data-link>هل نسيت كلمة المرور الخاصة بك؟</a>\n            <div class="input">\n                <button type="submit">تسجيل الدخول</button>\n            </div>\n        </form>\n        <div class="media">\n            <p>أو قم بتسجيل الدخول باستخدام</p>\n            <div class="mediaBtns"> \n                <button><i class=\'bx bxl-facebook\'></i></button>\n                <button><i class=\'bx bxl-twitter\'></i></button>\n                <button><i class=\'bx bxl-google\'></i></button>\n            </div>\n        </div>\n        <div class="signup">\n            <a href="/register" data-link>أو قم بتسجيل حساب</a>\n        </div>\n      </div>\n      ')
                        );
                      case 2:
                        location.replace("/");
                      case 3:
                      case "end":
                        return _context10.stop();
                    }
                },
                _callee10);
              })
            );
            function getHtml() {
              return _getHtml10.apply(this, arguments);
            }
            return getHtml;
          })(),
        },
      ]);
      return d;
    })(t),
    l = /*#__PURE__*/ (function (_t19) {
      _inherits(l, _t19);
      var _super10 = _createSuper(l);
      function l(t, e) {
        var _this10;
        _classCallCheck(this, l);
        (_this10 = _super10.call(this, t, e)),
          (_this10.auth = e),
          _this10.setTitle("Register"),
          _this10.setStyle("/static/css/login.css");
        return _this10;
      }
      _createClass(l, [
        {
          key: "getHtml",
          value: (function () {
            var _getHtml11 = _asyncToGenerator(
              /*#__PURE__*/ _regeneratorRuntime().mark(function _callee11() {
                return _regeneratorRuntime().wrap(
                  function _callee11$(_context11) {
                    while (1)
                      switch ((_context11.prev = _context11.next)) {
                        case 0:
                          if (this.auth) {
                            _context11.next = 2;
                            break;
                          }
                          return _context11.abrupt(
                            "return",
                            (loading(!0),
                            fetch("/static/siteJs/register.js")
                              .then(function (t) {
                                return !!t.ok && t.blob();
                              })
                              .then(function (t) {
                                var e = URL.createObjectURL(t);
                                document
                                  .querySelectorAll("[data-script]")
                                  .forEach(function (t) {
                                    t.src !== e && document.head.removeChild(t);
                                  });
                                var n = document.createElement("script");
                                n.setAttribute("src", e),
                                  n.setAttribute("defer", ""),
                                  n.setAttribute("data-script", ""),
                                  n.setAttribute("type", "text/javascript"),
                                  document.head.appendChild(n);
                              }),
                            loading(!1),
                            '\n      <div class=\'logIn\'>\n        <div class="logo">\n            <img src="/static/img/logo.png"/>\n        </div>\n        <form id="register">\n            <div class=\'input\'>\n                <label>اسم المستخدم</label>\n                <input type=\'text\' name="username" placeholder="اسم المستخدم" />\n            </div>\n            <div class=\'input\'>\n                <label>بريد إلكتروني</label>\n                <input type=\'email\' name="email" placeholder="بريد إلكتروني" />\n            </div>\n            <div class=\'input\'>\n                <label>كلمة المرور</label>\n                <input type="password" name="password" placeholder="كلمة المرور" />\n            </div>\n            <div class=\'input\'>\n                <label>تأكيد كلمة المرور</label>\n                <input type="password" name="password2" placeholder="تأكيد كلمة المرور" />\n            </div>\n            <div class=\'terms\'>\n                <a href=\'/terms\' data-link>هل تقبل الشروط والأحكام</a>\n                <input type="checkbox" name="terms" value="yes" placeholder="تأكيد كلمة المرور" />\n            </div>\n            <div class="input">\n                <button type="submit">تسجيل حساب</button>\n            </div>\n        </form>\n      </div>\n      ')
                          );
                        case 2:
                          location.replace("/");
                        case 3:
                        case "end":
                          return _context11.stop();
                      }
                  },
                  _callee11,
                  this
                );
              })
            );
            function getHtml() {
              return _getHtml11.apply(this, arguments);
            }
            return getHtml;
          })(),
        },
      ]);
      return l;
    })(t),
    p = /*#__PURE__*/ (function (_t20) {
      _inherits(p, _t20);
      var _super11 = _createSuper(p);
      function p(t, e) {
        var _this11;
        _classCallCheck(this, p);
        (_this11 = _super11.call(this, t, e)),
          (_this11.auth = e),
          _this11.setTitle("my Profile"),
          _this11.setStyle("/static/css/editprofile.css");
        return _this11;
      }
      _createClass(p, [
        {
          key: "getHtml",
          value: (function () {
            var _getHtml12 = _asyncToGenerator(
              /*#__PURE__*/ _regeneratorRuntime().mark(function _callee12() {
                return _regeneratorRuntime().wrap(
                  function _callee12$(_context12) {
                    while (1)
                      switch ((_context12.prev = _context12.next)) {
                        case 0:
                          if (!this.auth) {
                            _context12.next = 2;
                            break;
                          }
                          return _context12.abrupt(
                            "return",
                            (loading(!0),
                            localStorage.getItem("AuthToken")
                              ? (fetch("/static/siteJs/editprofile.js")
                                  .then(function (t) {
                                    return !!t.ok && t.blob();
                                  })
                                  .then(function (t) {
                                    var e = URL.createObjectURL(t);
                                    document
                                      .querySelectorAll("[data-script]")
                                      .forEach(function (t) {
                                        t.src !== e &&
                                          document.head.removeChild(t);
                                      });
                                    var n = document.createElement("script");
                                    n.setAttribute("src", e),
                                      n.setAttribute("defer", ""),
                                      n.setAttribute("data-script", ""),
                                      n.setAttribute("type", "text/javascript"),
                                      document.head.appendChild(n);
                                  }),
                                loading(!1),
                                '\n          <div class="EditProfile">\n            <form id="EditName" class=\'editform\'>\n            <h2>تعديل اسم المستخدم</h2>\n            <div class="input">\n                <label>اسم مستخدم جديد</label>\n                <input type="text" name="username" />\n            </div>\n            <div class="input">\n                <label>كلمة السر الحالية</label>\n                <input type="password" name="password" />\n            </div>\n            <div class="input">\n                <button type="submit">تعديل</button>\n            </div>\n            </form>\n            <form id="EditEmail" class=\'editform\'>\n            <h2>تعديل البريد الإلكتروني</h2>\n            <div class="input">\n                <label>بريد إلكتروني جديد</label>\n                <input type="email" name="email" />\n            </div>\n            <div class="input">\n                <label>كلمة السر الحالية</label>\n                <input type="password" name="password" />\n            </div>\n            <div class="input">\n                <button type="submit">تعديل</button>\n            </div>\n            </form>\n            <form id="EditPassword" class=\'editform\'>\n            <h2>تعديل كلمة المرور</h2>\n            <div class="input">\n                <label>كلمة السر الحالية</label>\n                <input type="password" name="password" />\n            </div>\n            <div class="input">\n                <label>كلمة المرور الجديدة</label>\n                <input type="password" name="password2" />\n            </div>\n            <div class="input">\n                <button type="submit">تعديل</button>\n            </div>\n            </form>\n        </div>        \n        ')
                              : (loading(!1),
                                "\n        <div class='notLoginPop'>\n          <a href=\"/\" data-link class=\"backToHome\"><i class='bx bxs-x-circle'></i></a>\n          <p>للأسف تحتاج إلى تسجيل الدخول للوصول إلى هذه الصفحة</p>\n          <a href='/login' data-link class=\"log\">تسجيل الدخول</a>\n          <a href='/register' data-link class=\"log\">تسجيل حساب</a>\n        </div>\n        "))
                          );
                        case 2:
                        case "end":
                          return _context12.stop();
                      }
                  },
                  _callee12,
                  this
                );
              })
            );
            function getHtml() {
              return _getHtml12.apply(this, arguments);
            }
            return getHtml;
          })(),
        },
      ]);
      return p;
    })(t),
    u = /*#__PURE__*/ (function (_t21) {
      _inherits(u, _t21);
      var _super12 = _createSuper(u);
      function u(t, e) {
        var _this12;
        _classCallCheck(this, u);
        (_this12 = _super12.call(this, t, e)),
          (_this12.auth = e),
          _this12.setTitle("my Favourite"),
          _this12.setStyle("/static/css/company.css");
        return _this12;
      }
      _createClass(u, [
        {
          key: "getHtml",
          value: (function () {
            var _getHtml13 = _asyncToGenerator(
              /*#__PURE__*/ _regeneratorRuntime().mark(function _callee13() {
                var _t22, _e11, _n6, _a3;
                return _regeneratorRuntime().wrap(
                  function _callee13$(_context13) {
                    while (1)
                      switch ((_context13.prev = _context13.next)) {
                        case 0:
                          if (!(loading(!0), this.auth)) {
                            _context13.next = 14;
                            break;
                          }
                          if (!localStorage.getItem("AuthToken")) {
                            _context13.next = 13;
                            break;
                          }
                          _t22 = new Headers();
                          _t22.append(
                            "AuthToken",
                            localStorage.getItem("AuthToken")
                          );
                          _context13.next = 6;
                          return fetch("http://localhost:5500/user/fav", {
                            method: "get",
                            headers: _t22,
                          });
                        case 6:
                          _e11 = _context13.sent;
                          _context13.next = 9;
                          return _e11.json();
                        case 9:
                          _n6 = _context13.sent;
                          _n6.err &&
                            (localStorage.removeItem("AuthToken"),
                            localStorage.removeItem("coupons"),
                            localStorage.removeItem("favlist"),
                            (window.location = "/"),
                            CreateToast({
                              type: "success",
                              msg: "حدث خطأ ما، يرجى تسجيل الدخول والمحاولة مرة أخرى",
                              time: 5e3,
                            }));
                          _a3 = _n6.fav
                            .map(function (t, e) {
                              return "\n        <div class='"
                                .concat(
                                  (function () {
                                    var e = "product";
                                    return (
                                      1 !== t.available &&
                                        0 == t.inStock &&
                                        (e += " notavailable"),
                                      t.offer > 0 && (e += " offer"),
                                      e
                                    );
                                  })(),
                                  "' id='"
                                )
                                .concat(t.id, "' key='")
                                .concat(
                                  e,
                                  '\'>\n          <input type="hidden" value="'
                                )
                                .concat(
                                  t.id,
                                  '" id="productId" />\n          <input type="hidden" value="'
                                )
                                .concat(
                                  t.name,
                                  '" id="productName" />\n          <input type="hidden" value="'
                                )
                                .concat(
                                  t.image,
                                  '" id="productImage" />\n          <input type="hidden" value="'
                                )
                                .concat(
                                  t.price,
                                  '" id="productPrice" />\n          <input type="hidden" value="'
                                )
                                .concat(
                                  t.inStock,
                                  '" id="productInStock" />\n          <input type="hidden" value="1" id="productQuantity" />\n          <button id=\'addtocart\' onclick="addItemToCart('
                                )
                                .concat(
                                  t.id,
                                  ")\"><img src=\"/static/img/addtocart.png\" /></button>\n          <button id='addtofav' onclick='delToFav("
                                )
                                .concat(
                                  t.id,
                                  ")'><i class='bx bxs-x-circle'></i></button>\n          <a href='/product/"
                                )
                                .concat(
                                  t.id,
                                  "' data-link>\n              <img class='image' src='/static/"
                                )
                                .concat(
                                  t.image,
                                  "' />\n            <div class='body'>\n              <p>"
                                )
                                .concat(
                                  t.name,
                                  "</p>\n            </div>\n          </a>\n          "
                                )
                                .concat(
                                  t.offer > 0
                                    ? '<p class="price offer">'
                                        .concat(
                                          t.price + t.offer,
                                          ' \u062C</p>\n              <p class="price">'
                                        )
                                        .concat(
                                          t.price,
                                          " \u062C</p>\n              "
                                        )
                                    : '<p class="price">'.concat(
                                        t.price,
                                        " \u062C</p>"
                                      ),
                                  "\n        </div>\n        "
                                );
                            })
                            .join("");
                          return _context13.abrupt(
                            "return",
                            (fetch("/static/siteJs/fav.js")
                              .then(function (t) {
                                return !!t.ok && t.blob();
                              })
                              .then(function (t) {
                                var e = URL.createObjectURL(t);
                                document
                                  .querySelectorAll("[data-script]")
                                  .forEach(function (t) {
                                    t.src !== e && document.head.removeChild(t);
                                  });
                                var n = document.createElement("script");
                                n.setAttribute("src", e),
                                  n.setAttribute("defer", ""),
                                  n.setAttribute("data-script", ""),
                                  n.setAttribute("type", "text/javascript"),
                                  document.head.appendChild(n);
                              }),
                            loading(!1),
                            "\n        <div class='containerProducts'>\n          ".concat(
                              _a3,
                              "\n        </div>\n        "
                            ))
                          );
                        case 13:
                          return _context13.abrupt(
                            "return",
                            (loading(!1),
                            "\n          <div class='notLoginPop'>\n            <a href=\"/\" data-link class=\"backToHome\"><i class='bx bxs-x-circle'></i></a>\n            <p>للأسف تحتاج إلى تسجيل الدخول للوصول إلى هذه الصفحة</p>\n            <a href='/login' data-link class=\"log\">تسجيل الدخول</a>\n            <a href='/register' data-link class=\"log\">تسجيل حساب</a>\n          </div>\n        ")
                          );
                        case 14:
                        case "end":
                          return _context13.stop();
                      }
                  },
                  _callee13,
                  this
                );
              })
            );
            function getHtml() {
              return _getHtml13.apply(this, arguments);
            }
            return getHtml;
          })(),
        },
      ]);
      return u;
    })(t);
  var h = function h(t) {
      history.pushState(null, null, t), m();
    },
    m = /*#__PURE__*/ (function () {
      var _ref = _asyncToGenerator(
        /*#__PURE__*/ _regeneratorRuntime().mark(function _callee14() {
          var t, h, m;
          return _regeneratorRuntime().wrap(function _callee14$(_context14) {
            while (1)
              switch ((_context14.prev = _context14.next)) {
                case 0:
                  t = [
                    {
                      path: "/",
                      view: e,
                      auth: !1,
                    },
                    {
                      path: "/cart",
                      view: r,
                      auth: !1,
                    },
                    {
                      path: "/login",
                      view: d,
                      auth: !1,
                    },
                    {
                      path: "/register",
                      view: l,
                      auth: !1,
                    },
                    {
                      path: "/profile",
                      view: n,
                      auth: !0,
                    },
                    {
                      path: "/product/:id",
                      view: c,
                      auth: !1,
                    },
                    {
                      path: "/compony/:name",
                      view: o,
                      auth: !1,
                    },
                    {
                      path: "/cashback",
                      view: s,
                      auth: !0,
                    },
                    {
                      path: "/coupons",
                      view: i,
                      auth: !0,
                    },
                    {
                      path: "/orderHistory",
                      view: a,
                      auth: !0,
                    },
                    {
                      path: "/edit/profile",
                      view: p,
                      auth: !0,
                    },
                    {
                      path: "/fav",
                      view: u,
                      auth: !0,
                    },
                  ];
                  h = t
                    .map(function (t) {
                      return {
                        route: t,
                        result: location.pathname.match(
                          ((e = t.path),
                          new RegExp(
                            "^" +
                              e.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") +
                              "$"
                          ))
                        ),
                      };
                      var e;
                    })
                    .find(function (t) {
                      return null !== t.result;
                    });
                  h ||
                    (h = {
                      route: t[0],
                      result: [location.pathname],
                    });
                  m = new h.route.view(
                    (function (t) {
                      var e = t.result.slice(1),
                        n = Array.from(t.route.path.matchAll(/:(\w+)/g)).map(
                          function (t) {
                            return t[1];
                          }
                        );
                      return Object.fromEntries(
                        n.map(function (t, n) {
                          return [t, e[n]];
                        })
                      );
                    })(h),
                    h.route.auth
                  );
                  if (!h.route.auth) {
                    _context14.next = 11;
                    break;
                  }
                  localStorage.getItem("AuthToken");
                  _context14.next = 8;
                  return m.getHtml();
                case 8:
                  document.querySelector("#app").innerHTML = _context14.sent;
                  _context14.next = 14;
                  break;
                case 11:
                  _context14.next = 13;
                  return m.getHtml();
                case 13:
                  document.querySelector("#app").innerHTML = _context14.sent;
                case 14:
                case "end":
                  return _context14.stop();
              }
          }, _callee14);
        })
      );
      return function m() {
        return _ref.apply(this, arguments);
      };
    })();
  window.addEventListener("popstate", m),
    document.addEventListener("DOMContentLoaded", function () {
      document.body.addEventListener("click", function (t) {
        t.target.matches("[data-link]")
          ? (t.preventDefault(), h(t.target.href))
          : t.target.parentElement.matches("[data-link]") &&
            (t.preventDefault(), h(t.target.parentElement.href));
      }),
        m();
    });
})();
