$(document).ready(function() {
	loader = MLoader({
		messages: {
			success: "Loaded successfully",
			error: "Sorry unable to load data",
			loading: "loading your data"
		},
		okClick: function() {
			console.log("in ok click");
		},
		cancelClick: function() {
			console.log("in cancel click");
		},
		retryClick: function() {
			console.log("in retry click");
			loader.show("loader", "loading again");
		}
	});
	setTimeout(function() {
		loader.show("error", "loaded successfully");
	}, 500);
});
