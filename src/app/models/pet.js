import Backbone from 'backbone';

var Pet = Backbone.Model.extend({
  defaults: {
    name: "Lil Buddy",
    age: 0,
    breed: "cute",
    vaccinated: false
  },
  initialize: function(params) {
    console.log("Initialized pet " + this.get("name"));
  },
  toggleVaccinated: function() {
    var vaccinated = this.get("vaccinated");

    this.set("vaccinated", !vaccinated);
    this.save();
  }
});

export default Pet;
