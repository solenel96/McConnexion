/// <reference path="../typings/index.d.ts" />

import { platformBrowserDynamic }   from "@angular/platform-browser-dynamic";
import {Component}                  from "@angular/core";
import { BrowserModule }    		from "@angular/platform-browser";
import { NgModule } 				from "@angular/core";

import { M1mMultimediaModule } 		from "./m1m-multimedia-module";
import { DragDropModule } 			from "./DragDrop/DragDropModule";

@Component({
	selector	: "root-manager",
	template	: `<comp-multimedia-manager title="Gestion des services UPnP/DLNA" 
											alx-dragdrop></comp-multimedia-manager>
				  `
})
class RootManager {
}

//enableProdMode();
@NgModule({
	imports     : [ M1mMultimediaModule, BrowserModule, DragDropModule ],
	declarations: [ RootManager ],
	bootstrap   : [ RootManager ]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
