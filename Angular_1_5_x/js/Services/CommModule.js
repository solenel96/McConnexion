var angular	= require( "angular"    )
var utils   = require( "./utils.js" );
var parser	= new DOMParser();

module.exports = "CommModule";
var CommModule = angular.module(module.exports, []);

CommModule.factory('CommService', function() {
    utils.initIO( location.hostname + ":" + location.port + "/m2m" );
    return {
        play        : function(mediaRendererId) {
            return utils.call(mediaRendererId, "Play" , []);
        },
        pause       : function(mediaRendererId) {
            return utils.call(mediaRendererId, "Pause", []);
        },
        stop        : function(mediaRendererId) {
            return utils.call(mediaRendererId, "Stop", []);
        },
        setVolume   : function(mediaRendererId, volume) {
            return utils.call(mediaRendererId, "setVolume", [volume]);
        },
        loadMedia   : function(mediaRendererId, mediaServerId, itemId) {
            return utils.call(mediaRendererId, "loadMedia", [mediaServerId, itemId]);
        },
        browse      : function(mediaServerId, directoryId) {
            directoryId = directoryId || 0;
            return utils.call( mediaServerId, "Browse", [directoryId] ).then( function(dataString) {
                var dataBrowse = {
                    parentDirectory : directoryId,
                    directories     : [],
                    medias          : [],
                    error           : null
                };
                try {
                    var doc         = parser.parseFromString( dataString, "text/xml" );
                    var Result      = doc.querySelector("Result");
                    var ResultDoc   = parser.parseFromString(Result.textContent, "text/xml");
                    var i, title, icon;

                    // Parse containers
                    var L_containers = ResultDoc.querySelectorAll('container');
                    for(i=0; i<L_containers.length; i++) {
                        var container = L_containers.item(i);
                        title	= container.querySelector('title').textContent;
                        icon	= container.querySelector('albumArtURI'); icon = icon?icon.textContent:"";
                        dataBrowse.directories.push( {serverId: mediaServerId, name: title, iconURL: icon, directory: container.getAttribute("id")} );
                    } // End of containers parsing

                    // Parse item
                    var L_items	= ResultDoc.querySelectorAll('item');
                    for(i=0; i<L_items.length; i++) {
                        var item	= L_items.item(i);
                        title	= item.querySelector('title').textContent; //item.getElementsByTagName('title').item(0).textContent;
                        icon	= item.querySelector('albumArtURI'); icon = icon?icon.textContent:"./images/icons/media_icon.jpg";
                        dataBrowse.medias.push( {serverId: mediaServerId, name: title, iconURL: icon, mediaId: item.getAttribute("id")} );
                    } // End of items parsing
                } catch(err) {dataBrowse.error = err;}
                return dataBrowse;
            });
        }
        //
    };
});

