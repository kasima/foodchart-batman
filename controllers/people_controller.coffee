class FoodchartBatman.PeopleController extends Batman.Controller
  routingKey: 'people'

  index: ->
    @set 'newPerson', new FoodchartBatman.Person
    @render false

  create: =>
    @newPerson.save (err) =>
      if err
        throw err unless err instanceof Batman.ErrorsSet
      else
        @set 'newPerson', new FoodchartBatman.Person

  # Add actions to this controller by defining functions on it.
  #
  # show: (params) ->
  #
  # Add functions to run before an action with
  #
  # @beforeFilter 'someFunctionKey'  # or
  # @beforeFilter -> ...

