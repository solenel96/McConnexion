"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var M1mMediaBrowser = (function () {
    function M1mMediaBrowser(cs) {
        this.cs = cs;
        this.mediaSelect = new core_1.EventEmitter();
        this.breadcrumb = [];
        // console.log( "CommService:", cs);
    }
    M1mMediaBrowser.prototype.selectMedia = function (media) {
        // console.log("selectMedia", media);
        this.mediaSelect.emit(media);
    };
    M1mMediaBrowser.prototype.browseMediaServer = function (ms) {
        this.breadcrumb = [];
        this.ms = ms;
        this.data = null;
        if (ms) {
            this.browse();
        }
    };
    M1mMediaBrowser.prototype.browse = function (directory) {
        var _this = this;
        var directoryId;
        if (directory) {
            directoryId = directory.directoryId;
            var keep_1 = true;
            this.breadcrumb = this.breadcrumb.filter(function (D) { return keep_1 && (keep_1 = D !== directory); });
            this.breadcrumb.push(directory);
        }
        else {
            directoryId = "0";
        }
        this.data = null;
        return this.cs.browse(this.ms.id, directoryId).then(function (data) {
            // console.log( "Browse", this.ms.id, directoryId, "=>", data );
            _this.data = data;
        });
    };
    __decorate([
        core_1.Input()
    ], M1mMediaBrowser.prototype, "devices");
    __decorate([
        core_1.Output("on-media-select")
    ], M1mMediaBrowser.prototype, "mediaSelect");
    M1mMediaBrowser = __decorate([
        core_1.Component({
            selector: "m1m-media-browser",
            templateUrl: "ts/Components/m1m-media-browser.html",
            styleUrls: ["ts/Components/m1m-media-browser.css"
            ]
        })
    ], M1mMediaBrowser);
    return M1mMediaBrowser;
}());
exports.M1mMediaBrowser = M1mMediaBrowser;
