import { NgModule/*, CUSTOM_ELEMENTS_SCHEMA*/ } 				from "@angular/core";
import {CommonModule}               from "@angular/common";
import { FormsModule }   			from "@angular/forms";
import { HttpModule } 				from "@angular/http";

import { DragDropModule }           from "./DragDrop/DragDropModule";

import { CompMultimediaManager }    from "./Components/m1m-multimedia-manager";
import { M1mMediaRenderer }         from "./Components/m1m-media-renderer";
import { M1mMediaBrowser }          from "./Components/m1m-media-browser";
import { CommService }              from "./Services/CommService";

//import { PaperSlider }              from "./Components/PolymerImport";
import { MaterialModule }           from "@angular/material";
import "hammerjs";

@NgModule({
    imports     : [ CommonModule, FormsModule, HttpModule, DragDropModule, MaterialModule.forRoot() ],
    exports     : [ CompMultimediaManager ],
    declarations: [ CompMultimediaManager, M1mMediaBrowser, M1mMediaRenderer,  ],
    providers   : [ CommService ],
    schemas     : [ /*CUSTOM_ELEMENTS_SCHEMA*/  ]
})
export class M1mMultimediaModule {}

