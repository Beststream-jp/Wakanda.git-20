
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var idQueryString = {};	// @textField
// @endregion// @endlock

// eventHandlers// @lock

	idQueryString.keyup = function idQueryString_keyup (event)// @startlock
	{// @endlock
		var theName = $$("idQueryString").getValue();
		sources.company.query('name = :1 order by name', { params: [theName + "*"]});
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("idQueryString", "keyup", idQueryString.keyup, "WAF");
// @endregion
};// @endlock






