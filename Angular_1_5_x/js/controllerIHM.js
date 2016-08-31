require( "angular-material/angular-material.css" );
require( "./controllerIHM.css" );

var angular			= require( "angular"			)
  , angularMaterial	= require( "angular-material"	)
  , CommModule		= require( "./Services/CommModule.js" )
  , ngDraggable 	= require( "ng-draggable" )
  ;

angular	.module( "m1m-client-Module", [angularMaterial, "ngDraggable", CommModule])
		.controller	( "m1m-client-Controller"
					, ["$scope", "CommService", function($scope, CommService) {
						 console.log( "Init m1m-client", $scope, CommService, ngDraggable );
					  }]
					)
		;
