"use strict";

var fs = require( "fs" );
var path = require( "path" );

require( "string.prototype.endswith" );

module.exports.setup = function( app ) {
	var files = fs.readdirSync( __dirname );

	files.filter( function(file) {
		return file.endsWith(".js") && file !== path.basename( __filename );
	} ).forEach( function( file ) {

		var controller = require( "./" + file );
		var name = file.substring( 0, file.length - path.extname(file).length );

		module.exports[name] = controller.setup( app );
	} );
};
