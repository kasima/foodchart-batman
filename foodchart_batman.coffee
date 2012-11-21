class FoodchartBatman extends Batman.App
  @set 'mission', 'fight crime'

  # Set the root route to ExamplesController#index.
  @root 'people#index'

# Make FoodchartBatman available in the global namespace so it can be used
# as a namespace and bound to in views.
window.FoodchartBatman = FoodchartBatman
