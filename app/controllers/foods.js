import Ember from 'ember';

export default Ember.Controller.extend({
  restaurant: {name:'Our Awesome restaurant', yearsOpen: 1 },
  newItem:null,
  availableItems: Ember.computed.filterBy('model','isAvailable',true),
  actions : {
      makeUnavailable(food){
        Ember.set(food, 'isAvailable', false);
        food.save();
      },
      makeAvailable(food){
        Ember.set(food,'isAvailable', true);
        food.save();
      },
      saveNewItem(){
        this.store.createRecord('food', {
           isAvailable:false,
           name: this.get('newItem'),
           description: this.get('description')
        }).save()
        this.set('newItem', '')
      }
  }
});
