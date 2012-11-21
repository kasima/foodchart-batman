(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  FoodchartBatman.PeopleController = (function(_super) {

    __extends(PeopleController, _super);

    function PeopleController() {
      this.create = __bind(this.create, this);
      return PeopleController.__super__.constructor.apply(this, arguments);
    }

    PeopleController.prototype.routingKey = 'people';

    PeopleController.prototype.index = function() {
      this.set('newPerson', new FoodchartBatman.Person);
      return this.render(false);
    };

    PeopleController.prototype.create = function() {
      var _this = this;
      return this.newPerson.save(function(err) {
        if (err) {
          if (!(err instanceof Batman.ErrorsSet)) {
            throw err;
          }
        } else {
          return _this.set('newPerson', new FoodchartBatman.Person);
        }
      });
    };

    return PeopleController;

  })(Batman.Controller);

}).call(this);
