import { Component, Input, OnInit 	} from "@angular/core";
import {CommService, MediaRenderer, Media} from "../Services/CommService";

const htmlTemplate = `
	<section alx-dropzone
	         [alx-accept-fct] = "isMedia"
	         (alx-ondrop)     = "loadMedia($event)"
	        >
	    <h3>{{nf.name}}</h3>
	    <section>
	        <button (click)="play ()">PLAY </button>
	        <button (click)="pause()">PAUSE</button>
	        <button (click)="stop ()">STOP </button>
        </section>
	</section>
`;

@Component({
    selector		: "m1m-media-renderer",
    template		: htmlTemplate
})
export class M1mMediaRenderer implements OnInit {
    @Input() nf	: MediaRenderer;
    constructor(private cs: CommService) {
        console.log( "CommService:", cs);
    }
    ngOnInit(): void {
        let obs = this.cs.subscribe( this.nf.id );
        this.cs.call(this.nf.id, "getMediasStates", []).then( (data) => {
            console.log("ngOnInit:", this.nf.id, "getMediasStates", []);
            console.log( "\t=>", data );
        });
        obs.subscribe( (event: any) => {
           console.log( "M1mMediaRenderer UPnP event", event );
        });
    }
    play() : Promise<any> {
        return this.cs.play( this.nf.id );
    }
    pause() : Promise<any> {
        return this.cs.pause( this.nf.id );
    }
    stop() : Promise<any> {
        return this.cs.stop( this.nf.id );
    }
    isMedia(obj: any) : boolean {
        console.log("isMedia", obj);
        return true;
    }
    loadMedia(media: Media) {
        console.log(this.nf.id, "loadMedia", media.serverId, media.mediaId);
        this.cs.loadMedia( this.nf.id, media.serverId, media.mediaId ).then( (rep) => {
            console.log("rep:", rep);
            this.play();
        });
    }
}
