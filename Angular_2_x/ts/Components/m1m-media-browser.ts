import { Component, Input 	} from "@angular/core";
import {CommService, Directory, MediaServer, DataBrowse} from "../Services/CommService";


const htmlTemplate = `
    <section>
        <h3>Liste des serveurs UPnP/DLNA</h3>
        <header class="breadcrumb">
            <label (click)="browseMediaServer(null)">DLNA</label>
            <label *ngIf="ms" (click)="browseMediaServer(ms)  ">{{ms.name}}</label>
            <label *ngFor="let dir of breadcrumb"
                   (click)="browse(dir)"
                   >{{dir.name}}</label>
        </header>
        <section class="content">
            <section *ngIf="!ms">
                <p *ngFor="let server of devices" (click)="browseMediaServer(server)">
                    {{server | json}}
                </p>
            </section>
            <section *ngIf="ms && data">
                Directories:
                <p *ngFor="let dir of data.directories" 
                   (click)="browse(dir)">
                    {{dir | json}}
                </p>
                Medias:
                <p *ngFor="let media of data.medias" 
                   [alx-draggable]="media"
                   >
                    {{media | json}}
                </p>
            </section>
        </section>
    </section>
`;

@Component({
    selector		: "m1m-media-browser",
    template		: htmlTemplate
})
export class M1mMediaBrowser {
    @Input() devices	: MediaServer[];
    private breadcrumb  : Directory  [] = [];
    private data        : DataBrowse;
    private ms          : MediaServer;
    constructor(private cs: CommService) {
        // console.log( "CommService:", cs);
    }
    browseMediaServer(ms: MediaServer) {
        this.breadcrumb = [];
        this.ms         = ms;
        this.data       = null;
        if(ms) {
            this.browse();
        }
    }
    browse( directory?: Directory ) {
        let directoryId: string;
        if(directory) {
            directoryId = directory.directoryId;
            let keep = true;
            this.breadcrumb = this.breadcrumb.filter( D => keep && (keep=D !== directory) );
            this.breadcrumb.push(directory);
        } else {
            directoryId = "0";
        }
        this.data = null;
        return this.cs.browse( this.ms.id, directoryId ).then( (data) => {
            console.log( "Browse", this.ms.id, directoryId, "=>", data );
            this.data = data;
        });
    }
}
