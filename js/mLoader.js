MLoader = function (options){
	var $loader = $(".loader");
	var $loadingMessage = $loader.find(".loader-message");
	var $btnRetry = $loader.find(".retry");
	var $btnCancel = $loader.find(".cancel");
	var $btnDone = $loader.find(".done");

	var errorMessage = "Unable to load data";
	var successMessage = "Congo, data loaded successfully";
	var loadingMessage = "Loading your data...";

	var defaults = {
		messages: {
			success: "Loaded successfully",
			error: "Sorry unable to load",
			loading: "Loading..."
		},
		successClick: function() {

		},
		errorClick: function() {

		},
		retryClick: function() {

		}
	};
	var settings = $.extend( {}, defaults, options );

	$btnRetry.on('click', settings.retryClick);
	$btnCancel.on('click', settings.cancelClick);
	$btnDone.on('click', settings.okClick);

	return {
		show: function(type, message) {
			if(type === "loader") {
				if($loader.hasClass("error")) {
					$loader.removeClass("error");
				}
				if($loader.hasClass("success")) {
					$loader.removeClass("success");
				}
				$loadingMessage.text(message);
			}
			else if(type === "success") {
				if($loader.hasClass("error")) {
					$loader.removeClass("error");
				}
				$loader.addClass("success");
				$loadingMessage.text(message);
			}
			else if(type === "error") {
				if($loader.hasClass("success")) {
					$loader.removeClass("success");
				}
				$loader.addClass("error");
				$loadingMessage.text(message);
			}
		}
	}
}