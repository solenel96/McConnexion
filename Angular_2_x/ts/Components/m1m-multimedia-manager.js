"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
// import "@types/jquery";
// import * as $ from "jquery";
// declare var $;
var CompMultimediaManager = (function () {
    function CompMultimediaManager(comm) {
        var _this = this;
        this.comm = comm;
        this.mediaRenderers = [];
        this.mediaServers = [];
        //console.log( "CommService:", comm);
        comm.init(localStorage.getItem("TActHab_adresse")).subscribe(function (data) {
            //console.log( "init =>", data );
            _this.mediaRenderers = data.mediaRenderers;
            _this.mediaServers = data.mediaServers;
        });
    }
    CompMultimediaManager.prototype.Play = function (media) {
        var _this = this;
        console.log("Play", media);
        var index = $("#carousel-Renderers  *.item.active").index();
        console.log("index", index);
        try {
            var mediaRenderer_1 = this.mediaRenderers[0];
            this.comm.loadMedia(mediaRenderer_1.id, media.serverId, media.mediaId).then(function () {
                _this.comm.play(mediaRenderer_1.id).then(function () { return _this.playingRenderer = mediaRenderer_1; });
            });
        }
        catch (err) {
            console.error("Error playing", media, "on renderer at index", index, ":\n", err);
        }
    };
    __decorate([
        core_1.Input()
    ], CompMultimediaManager.prototype, "title");
    CompMultimediaManager = __decorate([
        core_1.Component({
            selector: "comp-multimedia-manager",
            templateUrl: "ts/Components/m1m-multimedia-manager.html",
            styleUrls: ["ts/Components/m1m-multimedia-manager.css"]
        })
    ], CompMultimediaManager);
    return CompMultimediaManager;
}());
exports.CompMultimediaManager = CompMultimediaManager;
