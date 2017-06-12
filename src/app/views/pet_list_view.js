import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import PetView from './pet_view';

var PetListView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;

    this.listenTo(this.model, "update", this.render);
  },
  render: function() {
    this.$('#pet-list').empty();

    var self = this;
    this.model.each(function(pet) {
      var petView = new PetView({
        model: pet,
        templete: self.template
      });
      that.$('#pet-list').append(petView.render().el);
    });

    return this;
  },
  events: {
    "click .." : "addPet"
  },
  getFormData: function() {
    var inputName = this.$("input[name='name']");
    var inputAge = this.$("input[name='age']");
    var inputBreed = this.$("input[name='breed']");
    var inputVacinnated = this.$("input[name='vaccinated']");
    // console.log(inputName + inputAge + inputBreed + inputVacinnated);

    if (inputName.val()) {
      var formName = inputName.val();
    }
    inputName.val('');

    if (inputAge.val()) {
      var formAge = inputAge.val();
    }
    inputAge.val('');

    if (inputBreed.val()) {
      var formBreed = inputBreed.val();
    }
    inputBreed.val('');

    if (inputVacinnated.val()) {
      var formVacinnated = inputVacinnated.val();
    }
    inputVacinnated.val('');

    return {
      name: formName,
      age: formAge,
      breed: formBreed,
      vaccinated: formVacinnated
    };
  },
  addPet: function() {
    var pet = new Pet(this.getFormData());

    this.model.create(pet);
  }
});

export default PetListView;
