import { Component, Input 	} from "@angular/core";
import {CommService, DataDlnaDevices, MediaServer, MediaRenderer} from "../Services/CommService";

const htmlTemplate = `
	<h1>Composant de gestion des ressources multimédias</h1>
	<h1>{{title}}</h1>
	<hr/>
    <section>
        <h3>Liste des lecteurs UPnP/DLNA</h3>
        <m1m-media-renderer 
            *ngFor="let renderer of mediaRenderers"
            [nf]="renderer"
            >
        </m1m-media-renderer>
    </section>
    <hr/>
    <m1m-media-browser [devices]="mediaServers"></m1m-media-browser>
`;

@Component({
    selector		: "comp-multimedia-manager",
    template		: htmlTemplate
})
export class CompMultimediaManager {
    @Input() title	: string;
    mediaRenderers  : MediaRenderer[] = [];
    mediaServers    : MediaServer  [] = [];
    constructor(private comm: CommService) {
        console.log( "CommService:", comm);
        comm.init().subscribe( (data: DataDlnaDevices) => {
            console.log( "init =>", data );
            this.mediaRenderers = data.mediaRenderers;
            this.mediaServers   = data.mediaServers;
        });
    }
}
