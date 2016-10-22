import { NgModule } 				from "@angular/core";
import {CommonModule}               from "@angular/common";
import { FormsModule }   			from "@angular/forms";
import { HttpModule } 				from "@angular/http";

import { DragDropModule }           from "./DragDrop/DragDropModule";

import { CompMultimediaManager }    from "./Components/m1m-multimedia-manager";
import { M1mMediaRenderer }         from "./Components/m1m-media-renderer";
import { M1mMediaBrowser }          from "./Components/m1m-media-browser";
import { CommService }              from "./Services/CommService";

@NgModule({
    imports     : [ CommonModule, FormsModule, HttpModule, DragDropModule],
    exports     : [ CompMultimediaManager ],
    declarations: [ CompMultimediaManager, M1mMediaBrowser, M1mMediaRenderer ],
    providers   : [ CommService ]
})
export class M1mMultimediaModule {}

