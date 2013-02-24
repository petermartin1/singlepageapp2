requirejs.config({
	baseUrl: "js"
});

require(["app/model/HelloWorldModel", "lib/knockout"],function(HelloWorldModel, ko){
	var helloWorldModel = new HelloWorldModel();
	ko.applyBindings(helloWorldModel);
});