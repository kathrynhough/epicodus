HipsterDo.ListRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('list', params.id);
  }
});
