Template.Mongol_account.helpers({
	active: function () {
		if (Session.get("Mongol_currentCollection") === "account_618") {
			return "Mongol_row_expand"
		}
	},
	hasAccountsUI: function() {
		if (Template["loginButtons"]) {
			return true;
		}
	}
});


Template.Mongol_account.events({
	'click .Mongol_toggle_selected_collection': function () {
		if (Session.get("Mongol_currentCollection")) {
		  Session.set("Mongol_currentCollection", null);
		} else {
		  Session.set("Mongol_currentCollection", "account_618");
		}
	},
}); 
