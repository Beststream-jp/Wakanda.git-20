
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button1 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

		queryStr = "fox";
		sources.queryStr.sync();
		sources.company.query('name = :1 order by name', {params : [queryStr + '*']});

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		sources.company.query('name = :1 order by name', {params : [queryStr + '*']});
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button1", "click", button1.click, "WAF");
// @endregion
};// @endlock
