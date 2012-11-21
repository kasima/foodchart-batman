(function() {
  var FoodchartBatman,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  FoodchartBatman = (function(_super) {

    __extends(FoodchartBatman, _super);

    function FoodchartBatman() {
      return FoodchartBatman.__super__.constructor.apply(this, arguments);
    }

    FoodchartBatman.set('mission', 'fight crime');

    FoodchartBatman.root('people#index');

    return FoodchartBatman;

  })(Batman.App);

  window.FoodchartBatman = FoodchartBatman;

}).call(this);
