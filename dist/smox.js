(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
  (global = global || self, factory(global.smox = {}, global.React));
}(this, function (exports, React) { 'use strict';

  var copy = {};
  var make;
  var oldPath;
  function produce(state, produce, path) {
      var newState = proxy(state);
      if (oldPath !== path)
          make = false;
      oldPath = path;
      produce(newState);
      return make ? copy : state;
  }
  function proxy(state) {
      var handler = {
          get: function (obj, key) {
              if (typeof obj[key] === 'object' && obj[key] !== null) {
                  return new Proxy(obj[key], handler);
              }
              return make ? copy[key] : obj[key];
          },
          set: function (_, key, val) {
              copy[key] = val;
              make = true;
              return true;
          }
      };
      return new Proxy(state, handler);
  }

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0

  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.

  See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** */
  /* global Reflect, Promise */

  var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
          function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
      return extendStatics(d, b);
  };

  function __extends(d, b) {
      extendStatics(d, b);
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }

  var __assign = function() {
      __assign = Object.assign || function __assign(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
          return t;
      };
      return __assign.apply(this, arguments);
  };

  function getPlain(path, source) {
      var i = 0;
      while (i < path.length) {
          source = source[path[i++]];
      }
      return source;
  }
  function setPlain(path, value, source) {
      var target = {};
      if (path.length) {
          target[path[0]] =
              path.length > 1 ? setPlain(path.slice(1), value, source[path[0]]) : value;
          return __assign({}, source, target);
      }
      return __assign({}, source, value);
  }

  var Smox = (function () {
      function Smox(_a) {
          var _b = _a.state, state = _b === void 0 ? {} : _b, _c = _a.actions, actions = _c === void 0 ? {} : _c, _d = _a.effects, effects = _d === void 0 ? {} : _d;
          this.state = state;
          this.actions = this.wireActions([], state, actions);
          this.effects = this.wireEffects([], actions, effects);
          this.subs = [];
      }
      Smox.prototype.wireActions = function (path, state, actions) {
          var _this = this;
          Object.keys(actions).forEach(function (key) {
              typeof actions[key] === 'function'
                  ? (function (key, action) {
                      actions[key] = function (data) {
                          var res = produce(state, function (draft) {
                              action(draft, data);
                          }, path);
                          this.state = setPlain(path, res, this.state);
                          this.subs.forEach(function (fun) { return fun(); });
                      }.bind(_this);
                  })(key, actions[key])
                  : _this.wireActions(path.concat(key), state[key], actions[key]);
          });
          return actions;
      };
      Smox.prototype.wireEffects = function (path, actions, effects) {
          var _this = this;
          Object.keys(effects).forEach(function (key) {
              typeof effects[key] === 'function'
                  ? (function (key, effect) {
                      effects[key] = function (data) {
                          effect(actions, data);
                      };
                  })(key, effects[key])
                  : _this.wireEffects(path.concat(key), actions[key], effects[key]);
          });
          return effects;
      };
      Smox.prototype.subscribe = function (sub) {
          this.subs.push(sub);
      };
      Smox.prototype.unsubscribe = function (sub) {
          this.subs = this.subs.filter(function (f) { return f !== sub; });
      };
      return Smox;
  }());

  var Context = React.createContext(null);
  var Provider = (function (_super) {
      __extends(Provider, _super);
      function Provider(props) {
          var _this = _super.call(this, props) || this;
          _this.store = _this.props.store;
          return _this;
      }
      Provider.prototype.render = function () {
          return (React.createElement(Context.Provider, { value: this.store }, this.props.children));
      };
      return Provider;
  }(React.Component));
  var path = function (path) { return function (Component) {
      var _a;
      return _a = (function (_super) {
              __extends(class_1, _super);
              function class_1(props) {
                  var _this = _super.call(this, props) || this;
                  _this.state = {
                      props: {},
                  };
                  return _this;
              }
              class_1.prototype.componentDidMount = function () {
                  var _this = this;
                  this._isMounted = true;
                  this.actionsProps = getPlain(path.split('/'), this.context.actions);
                  this.effectsProps = getPlain(path.split('/'), this.context.effects);
                  this.context.subscribe(function () { return _this.update(); });
                  this.update();
              };
              class_1.prototype.componentWillUnmount = function () {
                  var _this = this;
                  this._isMounted = false;
                  this.context.unsubscribe(function () { return _this.update(); });
              };
              class_1.prototype.update = function () {
                  if (this._isMounted) {
                      this.stateProps = getPlain(path.split('/'), this.context.state);
                      this.setState({
                          props: __assign({}, this.state.porps, this.stateProps, this.actionsProps, this.effectsProps),
                      });
                  }
              };
              class_1.prototype.render = function () {
                  return React.createElement(Component, __assign({}, this.state.props));
              };
              return class_1;
          }(React.Component)),
          _a.contextType = Context,
          _a;
  }; };
  var Path = (function (_super) {
      __extends(Path, _super);
      function Path(props) {
          var _this = _super.call(this, props) || this;
          _this.state = {};
          _this.path = props.to.split('/');
          return _this;
      }
      Path.prototype.componentDidMount = function () {
          var _this = this;
          this._isMounted = true;
          this.context.subscribe(function () { return _this.setState({}); });
          this.setState({});
      };
      Path.prototype.render = function () {
          var _a = this.context, state = _a.state, actions = _a.actions, effects = _a.effects;
          return this._isMounted
              ? this.props.children({
                  state: getPlain(this.path, state),
                  actions: getPlain(this.path, actions),
                  effects: getPlain(this.path, effects),
              })
              : null;
      };
      Path.prototype.componentWillUnmount = function () {
          var _this = this;
          this._isMounted = false;
          this.context.unsubscribe(function () { return _this.setState({}); });
      };
      Path.contextType = Context;
      return Path;
  }(React.Component));

  function usePath(path) {
      var store = React.useContext(Context);
      var state = getPlain(path.split('/'), store.state);
      var actions = getPlain(path.split('/'), store.actions);
      var effects = getPlain(path.split('/'), store.effects);
      var setter = React.useState(state)[1];
      store.subscribe(function () { return setter(state); });
      return { state: state, actions: actions, effects: effects };
  }

  exports.Path = Path;
  exports.Provider = Provider;
  exports.Smox = Smox;
  exports.path = path;
  exports.produce = produce;
  exports.usePath = usePath;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
