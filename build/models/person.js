(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  FoodchartBatman.Person = (function(_super) {

    __extends(Person, _super);

    Person.resourceName = 'person';

    Person.persist(Batman.LocalStorage);

    function Person() {
      this.decrement = __bind(this.decrement, this);

      this.increment = __bind(this.increment, this);
      this.set('balance', 0);
    }

    Person.validate('name', {
      presence: true
    });

    Person.encode('name');

    Person.encode('balance');

    Person.prototype.increment = function() {
      this.set('balance', this.get('balance') + 1);
      return this.save();
    };

    Person.prototype.decrement = function() {
      this.set('balance', this.get('balance') - 1);
      return this.save();
    };

    Person.accessor('canDelete', function() {
      return this.get('balance') === 0 && Person.get('isBalanced');
    });

    Person.classAccessor('balance', {
      get: function() {
        var arr;
        arr = this.get('all').map(function(p) {
          return p.get('balance');
        });
        if (arr.length > 0) {
          return arr.reduce(function(a, b) {
            return a + b;
          });
        } else {
          return 0;
        }
      }
    });

    Person.classAccessor('isBalanced', {
      get: function() {
        return this.get('balance') === 0;
      }
    });

    return Person;

  })(Batman.Model);

}).call(this);
