class FoodchartBatman.Person extends Batman.Model
  @resourceName: 'person'
  # This model could be persisted locally with
  #
  @persist Batman.LocalStorage
  #
  # or over a REST endpoint with
  #
  # @persist Batman.RestStorage

  constructor: -> @set 'balance', 0

  @validate 'name', presence: yes

  @encode 'name'
  @encode 'balance'
    # encode: (v) -> v
    # decode: (str) -> parseInt(str, 10)

  increment: =>
    @set('balance', @get('balance') + 1)
    @save()

  decrement: =>
    @set('balance', @get('balance') - 1)
    @save()

  @accessor 'canDelete', -> @get('balance') == 0 && Person.get('isBalanced')

  @classAccessor 'balance',
    get: ->
      arr = @get('all').map (p) -> p.get('balance')
      if arr.length > 0
        arr.reduce (a, b) -> a + b
      else
        0

  @classAccessor 'isBalanced',
    get: ->
      @get('balance') == 0

  # @classAccessor 'inBalance',
  #   get: ->
  #     @get('all').reduce (a, b) -> a.

  # Add a computed property to this model with
  #
  # @accessor 'someKey',
  #   get: -> ...
  #   set: -> ...
  #
  # and whenever any of the properties accessed in the getter/setters change,
  # someKey will be recomputed and cached.

  # Observe a property or an event on this model with
  #
  # @observe 'someKey', (newValue, oldValue) ->
  #
  # and be notified of any changes to someKey on this model, or use
  #
  # @observeAll 'someKey', (newValue, oldValue) ->
  #
  # to be notified of any changes to someKey on any instance of the model.

  # Add an event to instances of this model with
  #
  # someEvent: @event -> ... # return value of event, passed to observers
  #
  # and fire it with
  #
  # modelInstance.someEvent()
