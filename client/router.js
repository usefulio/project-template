FlowRouter.route('/', {
	name: 'home'
	, action: function (params, queryParams) {
		BlazeLayout.render("MasterLayout", { view: "Home" });
	}
})