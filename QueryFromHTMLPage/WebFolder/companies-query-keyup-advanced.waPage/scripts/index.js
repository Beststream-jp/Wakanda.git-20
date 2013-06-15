
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var idQueryString = {};	// @textField
// @endregion// @endlock

// eventHandlers// @lock

	idQueryString.keyup = function idQueryString_keyup (event)// @startlock
	{// @endlock
		var gKeyUpCount, theName;
		if(!gKeyUpCount) {
			gKeyUpCount = 0;
		}
		theName = $$('idQueryString').getValue();

		if(theName === '') { // User is reseting the list
			gKeyUpCount = 0;
			ds.Company.allEntities();
		} else {
			gKeyUpCount += 1;
		    ds.Company.query('name = :1 order by name', {
                  params	: [theName + "*"],
                    
                  onSuccess	: function(evt) {
                  // evt.userData contains the value of gKeyUpCount when query() was called
                      if(evt.userData === gKeyUpCount) {
                        sources.company.setEntityCollection( evt.entityCollection );
                       }
                      },
                     userData : gKeyUpCount	 // Retrieved in evt.userData in the callback
               });
		}
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("idQueryString", "keyup", idQueryString.keyup, "WAF");
// @endregion
};// @endlock






