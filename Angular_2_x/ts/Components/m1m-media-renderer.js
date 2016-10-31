System.register(["@angular/core", "../Services/CommService"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, CommService_1;
    var PLAY_STATE, M1mMediaRenderer;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (CommService_1_1) {
                CommService_1 = CommService_1_1;
            }],
        execute: function() {
            (function (PLAY_STATE) {
                PLAY_STATE[PLAY_STATE["PLAY"] = 0] = "PLAY";
                PLAY_STATE[PLAY_STATE["PAUSE"] = 1] = "PAUSE";
                PLAY_STATE[PLAY_STATE["STOP"] = 2] = "STOP";
            })(PLAY_STATE || (PLAY_STATE = {}));
            M1mMediaRenderer = class M1mMediaRenderer {
                constructor(cs) {
                    this.cs = cs;
                    this.duration = "";
                    this.mute = false;
                    this.volume = 0;
                    this.playState = PLAY_STATE.STOP;
                    // console.log( "CommService:", cs);
                }
                ngOnInit() {
                    this.obsEvent = this.cs.subscribe(this.nf.id);
                    this.obsEvent.subscribe((event) => {
                        let data = event.data;
                        console.log("M1mMediaRenderer UPnP event", event);
                        this.state[data.serviceType][data.attribut] = data.value;
                        this.updateRenderingControl(this.state["urn:schemas-upnp-org:service:RenderingControl:1"]);
                        this.updateAVTransport(this.state["urn:schemas-upnp-org:service:AVTransport:1"]);
                    });
                    this.cs.call(this.nf.id, "getMediasStates", []).then((state) => {
                        console.log("getMediasStates =>", state);
                        this.state = state;
                        this.updateRenderingControl(this.state["urn:schemas-upnp-org:service:RenderingControl:1"]);
                        this.updateAVTransport(this.state["urn:schemas-upnp-org:service:AVTransport:1"]);
                    });
                }
                updateRenderingControl(renderingControl) {
                    if (!renderingControl)
                        return;
                    this.mute = renderingControl.Mute === "1" || renderingControl.Mute === "true";
                    this.volume = +renderingControl.Volume;
                }
                updateAVTransport(AVTransport) {
                    if (!AVTransport)
                        return;
                    this.duration = AVTransport.CurrentMediaDuration;
                    switch (AVTransport.TransportState) {
                        case "STOPPED":
                            this.playState = PLAY_STATE.STOP;
                            break;
                        case "PLAYING":
                            this.playState = PLAY_STATE.PLAY;
                            break;
                        case "PAUSED_PLAYBACK":
                            this.playState = PLAY_STATE.PAUSE;
                            break;
                    }
                }
                setVolume(volume) {
                    // console.log( "setVolume", volume );
                    clearTimeout(this.timeoutVol);
                    this.timeoutVol = window.setTimeout(() => this.cs.setVolume(this.nf.id, volume), 50);
                }
                isPlaying() { return this.playState === PLAY_STATE.PLAY; }
                isPaused() { return this.playState === PLAY_STATE.PAUSE; }
                isStopped() { return this.playState === PLAY_STATE.STOP; }
                play() {
                    return this.cs.play(this.nf.id);
                }
                pause() {
                    return this.cs.pause(this.nf.id);
                }
                stop() {
                    return this.cs.stop(this.nf.id);
                }
                isMedia(obj) {
                    console.log("isMedia", obj);
                    return true;
                }
                loadMedia(media) {
                    console.log(this.nf.id, "loadMedia", media.serverId, media.mediaId);
                    this.cs.loadMedia(this.nf.id, media.serverId, media.mediaId).then((rep) => {
                        console.log("rep:", rep);
                        this.play().then(() => {
                            // Subscribe to media server
                        });
                    });
                }
            };
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], M1mMediaRenderer.prototype, "nf", void 0);
            M1mMediaRenderer = __decorate([
                core_1.Component({
                    moduleId: __moduleName || module.id,
                    selector: "m1m-media-renderer",
                    templateUrl: "m1m-media-renderer.html",
                    styleUrls: ["m1m-media-renderer.css"]
                }), 
                __metadata('design:paramtypes', [CommService_1.CommService])
            ], M1mMediaRenderer);
            exports_1("M1mMediaRenderer", M1mMediaRenderer);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbXBvbmVudHMvbTFtLW1lZGlhLXJlbmRlcmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBdUNBLFdBQUssVUFBVTtnQkFBRSwyQ0FBSSxDQUFBO2dCQUFFLDZDQUFLLENBQUE7Z0JBQUUsMkNBQUksQ0FBQTtZQUFBLENBQUMsRUFBOUIsVUFBVSxLQUFWLFVBQVUsUUFBb0I7WUFPbkM7Z0JBV0ksWUFBb0IsRUFBZTtvQkFBZixPQUFFLEdBQUYsRUFBRSxDQUFhO29CQUxuQyxhQUFRLEdBQWtCLEVBQUUsQ0FBQztvQkFDN0IsU0FBSSxHQUFzQixLQUFLLENBQUM7b0JBQ2hDLFdBQU0sR0FBb0IsQ0FBQyxDQUFDO29CQUU1QixjQUFTLEdBQWlCLFVBQVUsQ0FBQyxJQUFJLENBQUM7b0JBRXRDLG9DQUFvQztnQkFDeEMsQ0FBQztnQkFDRCxRQUFRO29CQUNKLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUUsQ0FBQztvQkFDaEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUUsQ0FBQyxLQUFrRDt3QkFDeEUsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQzt3QkFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBRSw2QkFBNkIsRUFBRSxLQUFLLENBQUUsQ0FBQzt3QkFDcEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7d0JBQ3pELElBQUksQ0FBQyxzQkFBc0IsQ0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGlEQUFpRCxDQUFDLENBQUMsQ0FBQzt3QkFDN0YsSUFBSSxDQUFDLGlCQUFpQixDQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsNENBQTRDLENBQUMsQ0FBTSxDQUFDO29CQUNqRyxD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QUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFFLENBQUM7Z0JBQ3RDLENBQUM7Z0JBQ0QsT0FBTyxDQUFDLEdBQVE7b0JBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBQzVCLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ2hCLENBQUM7Z0JBQ0QsU0FBUyxDQUFDLEtBQVk7b0JBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsV0FBVyxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNwRSxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBRSxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUUsQ0FBQyxJQUFJLENBQUUsQ0FBQyxHQUFHO3dCQUNyRSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQzt3QkFDekIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBRTs0QkFDZCw0QkFBNEI7d0JBQ2hDLENBQUMsQ0FBQyxDQUFDO29CQUNQLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7WUFDTCxDQUFDO1lBMUVHO2dCQUFDLFlBQUssRUFBRTs7d0RBQUE7WUFQWjtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBVSxZQUFZLElBQUksTUFBTSxDQUFDLEVBQUU7b0JBQzNDLFFBQVEsRUFBSSxvQkFBb0I7b0JBQ2hDLFdBQVcsRUFBSSx5QkFBeUI7b0JBQ3hDLFNBQVMsRUFBUyxDQUFFLHdCQUF3QixDQUFFO2lCQUNqRCxDQUFDOztnQ0FBQTtZQUNGLCtDQTJFQyxDQUFBIiwiZmlsZSI6IkNvbXBvbmVudHMvbTFtLW1lZGlhLXJlbmRlcmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IFx0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0NvbW1TZXJ2aWNlLCBNZWRpYVJlbmRlcmVyLCBNZWRpYX0gZnJvbSBcIi4uL1NlcnZpY2VzL0NvbW1TZXJ2aWNlXCI7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anNcIjtcclxuXHJcbnR5cGUgUmVuZGVyaW5nQ29udHJvbFR5cGUgPSB7XHJcbiAgICBNdXRlICAgICAgICAgICAgOiBzdHJpbmc7IC8vIFwiMFwiIG91IFwiMVwiXHJcbiAgICBQcmVzZXROYW1lTGlzdCAgOiBzdHJpbmc7IC8vIGV4OiBcIkZhY3RvcnlEZWZhdWx0c1wiXHJcbiAgICBWb2x1bWUgICAgICAgICAgOiBzdHJpbmc7IC8vIFwiMFwiIMOgIFwiMTAwXCJcclxuICAgIFZvbHVtZURCICAgICAgICA6IHN0cmluZzsgLy8gZMOpZHVjdGlvbiBkZXMgZMOpY2liZWxzLCBvcHBvc8OpIGRlIFZvbHVtZVxyXG59O1xyXG50eXBlIEFWVHJhbnNwb3J0VHlwZSA9IHtcclxuICAgIEFWVHJhbnNwb3J0VVJJICAgICAgICAgICAgICA6IHN0cmluZzsgLy8gVVJJIGR1IG3DqWRpYVxyXG4gICAgQVZUcmFuc3BvcnRVUklNZXRhRGF0YSAgICAgIDogc3RyaW5nOyAvLyBSZXByw6lzZW50ZSBsZSBESURMLUxpdGUgZHUgbcOpZGlhXHJcbiAgICBDdXJyZW50TWVkaWFEdXJhdGlvbiAgICAgICAgOiBzdHJpbmc7IC8vIEZvcm1hdCB0eXBlIFwiMDE6MzY6NTBcIlxyXG4gICAgQ3VycmVudFBsYXlNb2RlICAgICAgICAgICAgIDogc3RyaW5nOyAvLyBleDogXCJOT1JNQUxcIlxyXG4gICAgQ3VycmVudFJlY29yZFF1YWxpdHlNb2RlICAgIDogc3RyaW5nOyAvLyBleDogXCJOT1RfSU1QTEVNRU5URURcIlxyXG4gICAgQ3VycmVudFRyYWNrICAgICAgICAgICAgICAgIDogc3RyaW5nOyAvLyBleDogXCIxXCJcclxuICAgIEN1cnJlbnRUcmFja0R1cmF0aW9uICAgICAgICA6IHN0cmluZzsgLy8gZXg6IFwiMDE6MzY6NTBcIlxyXG4gICAgQ3VycmVudFRyYWNrTWV0YURhdGEgICAgICAgIDogc3RyaW5nOyAvLyBSZXByw6lzZW50ZSBsZSBESURMLUxpdGUgZGUgbGEgcGlzdGVcclxuICAgIEN1cnJlbnRUcmFja1VSSSAgICAgICAgICAgICA6IHN0cmluZzsgLy8gVVJJIGRlIGxhIHBpc3RlXHJcbiAgICBDdXJyZW50VHJhbnNwb3J0QWN0aW9ucyAgICAgOiBzdHJpbmc7IC8vIEFjdGlvbnMgcG9zc2libGUsIGV4OiBcIlBsYXksUGF1c2UsU3RvcCxTZWVrLE5leHQsUHJldmlvdXNcIlxyXG4gICAgTmV4dEFWVHJhbnNwb3J0VVJJICAgICAgICAgIDogc3RyaW5nOyAvLyBQcm9jaGFpbmUgVVJJXHJcbiAgICBOZXh0QVZUcmFuc3BvcnRVUklNZXRhRGF0YSAgOiBzdHJpbmc7IC8vIFByb2NoYWluIERJRExcclxuICAgIE51bWJlck9mVHJhY2tzICAgICAgICAgICAgICA6IHN0cmluZzsgLy8gZXg6IFwiMVwiXHJcbiAgICBQbGF5YmFja1N0b3JhZ2VNZWRpdW0gICAgICAgOiBzdHJpbmc7IC8vIGV4OiBcIk5PTkVcIlxyXG4gICAgUG9zc2libGVQbGF5YmFja1N0b3JhZ2VNZWRpYTogc3RyaW5nOyAvLyBleCBcIk5PTkUsTkVUV09SSyxIREQsQ0QtREEsVU5LTk9XTlwiXHJcbiAgICBQb3NzaWJsZVJlY29yZFF1YWxpdHlNb2RlcyAgOiBzdHJpbmc7IC8vIGV4OiBcIk5PVF9JTVBMRU1FTlRFRFwiXHJcbiAgICBQb3NzaWJsZVJlY29yZFN0b3JhZ2VNZWRpYSAgOiBzdHJpbmc7IC8vIGV4IFwiTk9UX0lNUExFTUVOVEVEXCJcclxuICAgIFJlY29yZE1lZGl1bVdyaXRlU3RhdHVzICAgICA6IHN0cmluZzsgLy8gZXg6IFwiTk9UX0lNUExFTUVOVEVEXCJcclxuICAgIFJlY29yZFN0b3JhZ2VNZWRpdW0gICAgICAgICA6IHN0cmluZzsgLy8gZXg6IFwiTk9UX0lNUExFTUVOVEVEXCJcclxuICAgIFRyYW5zcG9ydFBsYXlTcGVlZCAgICAgICAgICA6IHN0cmluZzsgLy8gZXg6IFwiMVwiXHJcbiAgICBUcmFuc3BvcnRTdGF0ZSAgICAgICAgICAgICAgOiBzdHJpbmc7IC8vIGV4OiBcIlBBVVNFRF9QTEFZQkFDS1wiXHJcbiAgICBUcmFuc3BvcnRTdGF0dXMgICAgICAgICAgICAgOiBzdHJpbmc7IC8vIGV4OiBcIk9LXCJcclxufTtcclxudHlwZSBldmVudE1lZGlhUGxheWVyID0ge1xyXG4gICAgc2VydmljZVR5cGUgOiBzdHJpbmc7XHJcbiAgICBhdHRyaWJ1dCAgICA6IHN0cmluZztcclxuICAgIHZhbHVlICAgICAgIDogbnVtYmVyIHwgc3RyaW5nO1xyXG59O1xyXG5lbnVtIFBMQVlfU1RBVEUge1BMQVksIFBBVVNFLCBTVE9QfVxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkICAgICAgICA6IF9fbW9kdWxlTmFtZSB8fCBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3Rvclx0XHQ6IFwibTFtLW1lZGlhLXJlbmRlcmVyXCIsXHJcbiAgICB0ZW1wbGF0ZVVybFx0XHQ6IFwibTFtLW1lZGlhLXJlbmRlcmVyLmh0bWxcIixcclxuICAgIHN0eWxlVXJscyAgICAgICA6IFsgXCJtMW0tbWVkaWEtcmVuZGVyZXIuY3NzXCIgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTTFtTWVkaWFSZW5kZXJlciBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBASW5wdXQoKSBuZlx0OiBNZWRpYVJlbmRlcmVyO1xyXG4gICAgb2JzRXZlbnQgICAgOiBPYnNlcnZhYmxlPGFueT47XHJcbiAgICBzdGF0ZSAgICAgICA6IHsgXCJ1cm46c2NoZW1hcy11cG5wLW9yZzpzZXJ2aWNlOkFWVHJhbnNwb3J0OjFcIiAgICAgICAgOiBBVlRyYW5zcG9ydFR5cGU7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ1cm46c2NoZW1hcy11cG5wLW9yZzpzZXJ2aWNlOlJlbmRlcmluZ0NvbnRyb2w6MVwiICAgOiBSZW5kZXJpbmdDb250cm9sVHlwZTtcclxuICAgICAgICAgICAgICAgICAgfTtcclxuICAgIGR1cmF0aW9uICAgIDogc3RyaW5nICAgID0gXCJcIjtcclxuICAgIG11dGUgICAgICAgIDogYm9vbGVhbiAgID0gZmFsc2U7XHJcbiAgICB2b2x1bWUgICAgICA6IG51bWJlciAgICA9IDA7XHJcbiAgICB0aW1lb3V0Vm9sICA6IG51bWJlcjtcclxuICAgIHBsYXlTdGF0ZSAgIDogUExBWV9TVEFURT0gUExBWV9TVEFURS5TVE9QO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjczogQ29tbVNlcnZpY2UpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyggXCJDb21tU2VydmljZTpcIiwgY3MpO1xyXG4gICAgfVxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vYnNFdmVudCA9IHRoaXMuY3Muc3Vic2NyaWJlKCB0aGlzLm5mLmlkICk7XHJcbiAgICAgICAgdGhpcy5vYnNFdmVudC5zdWJzY3JpYmUoIChldmVudDoge2V2ZW50TmFtZTogc3RyaW5nLCBkYXRhOiBldmVudE1lZGlhUGxheWVyfSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IGV2ZW50LmRhdGE7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCBcIk0xbU1lZGlhUmVuZGVyZXIgVVBuUCBldmVudFwiLCBldmVudCApO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlW2RhdGEuc2VydmljZVR5cGVdW2RhdGEuYXR0cmlidXRdID0gZGF0YS52YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVSZW5kZXJpbmdDb250cm9sICggdGhpcy5zdGF0ZVtcInVybjpzY2hlbWFzLXVwbnAtb3JnOnNlcnZpY2U6UmVuZGVyaW5nQ29udHJvbDoxXCJdKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVBVlRyYW5zcG9ydCAgICAgICggdGhpcy5zdGF0ZVtcInVybjpzY2hlbWFzLXVwbnAtb3JnOnNlcnZpY2U6QVZUcmFuc3BvcnQ6MVwiXSAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmNzLmNhbGwodGhpcy5uZi5pZCwgXCJnZXRNZWRpYXNTdGF0ZXNcIiwgW10pLnRoZW4oIChzdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyggXCJnZXRNZWRpYXNTdGF0ZXMgPT5cIiwgc3RhdGUgKTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVJlbmRlcmluZ0NvbnRyb2wgKCB0aGlzLnN0YXRlW1widXJuOnNjaGVtYXMtdXBucC1vcmc6c2VydmljZTpSZW5kZXJpbmdDb250cm9sOjFcIl0pO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUFWVHJhbnNwb3J0ICAgICAgKCB0aGlzLnN0YXRlW1widXJuOnNjaGVtYXMtdXBucC1vcmc6c2VydmljZTpBVlRyYW5zcG9ydDoxXCJdICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlUmVuZGVyaW5nQ29udHJvbChyZW5kZXJpbmdDb250cm9sOiBSZW5kZXJpbmdDb250cm9sVHlwZSkge1xyXG4gICAgICAgIGlmKCFyZW5kZXJpbmdDb250cm9sKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5tdXRlICAgPSByZW5kZXJpbmdDb250cm9sLk11dGUgPT09IFwiMVwiIHx8IHJlbmRlcmluZ0NvbnRyb2wuTXV0ZSA9PT0gXCJ0cnVlXCI7XHJcbiAgICAgICAgdGhpcy52b2x1bWUgPStyZW5kZXJpbmdDb250cm9sLlZvbHVtZTtcclxuICAgIH1cclxuICAgIHVwZGF0ZUFWVHJhbnNwb3J0KEFWVHJhbnNwb3J0OiBBVlRyYW5zcG9ydFR5cGUpIHtcclxuICAgICAgICBpZighQVZUcmFuc3BvcnQpIHJldHVybjtcclxuICAgICAgICB0aGlzLmR1cmF0aW9uID0gQVZUcmFuc3BvcnQuQ3VycmVudE1lZGlhRHVyYXRpb247XHJcbiAgICAgICAgc3dpdGNoKEFWVHJhbnNwb3J0LlRyYW5zcG9ydFN0YXRlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJTVE9QUEVEXCIgICAgICAgICAgOiB0aGlzLnBsYXlTdGF0ZSA9IFBMQVlfU1RBVEUuU1RPUCA7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiUExBWUlOR1wiICAgICAgICAgIDogdGhpcy5wbGF5U3RhdGUgPSBQTEFZX1NUQVRFLlBMQVkgOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIlBBVVNFRF9QTEFZQkFDS1wiICA6IHRoaXMucGxheVN0YXRlID0gUExBWV9TVEFURS5QQVVTRTsgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2V0Vm9sdW1lKHZvbHVtZTogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coIFwic2V0Vm9sdW1lXCIsIHZvbHVtZSApO1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRWb2wpO1xyXG4gICAgICAgIHRoaXMudGltZW91dFZvbCA9IHdpbmRvdy5zZXRUaW1lb3V0ICggKCkgPT4gdGhpcy5jcy5zZXRWb2x1bWUodGhpcy5uZi5pZCwgdm9sdW1lKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICwgNTAgKTtcclxuICAgIH1cclxuICAgIGlzUGxheWluZygpIDogYm9vbGVhbiB7cmV0dXJuIHRoaXMucGxheVN0YXRlID09PSBQTEFZX1NUQVRFLlBMQVkgO31cclxuICAgIGlzUGF1c2VkICgpIDogYm9vbGVhbiB7cmV0dXJuIHRoaXMucGxheVN0YXRlID09PSBQTEFZX1NUQVRFLlBBVVNFO31cclxuICAgIGlzU3RvcHBlZCgpIDogYm9vbGVhbiB7cmV0dXJuIHRoaXMucGxheVN0YXRlID09PSBQTEFZX1NUQVRFLlNUT1AgO31cclxuICAgIHBsYXkoKSA6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3MucGxheSggdGhpcy5uZi5pZCApO1xyXG4gICAgfVxyXG4gICAgcGF1c2UoKSA6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3MucGF1c2UoIHRoaXMubmYuaWQgKTtcclxuICAgIH1cclxuICAgIHN0b3AoKSA6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3Muc3RvcCggdGhpcy5uZi5pZCApO1xyXG4gICAgfVxyXG4gICAgaXNNZWRpYShvYmo6IGFueSkgOiBib29sZWFuIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImlzTWVkaWFcIiwgb2JqKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGxvYWRNZWRpYShtZWRpYTogTWVkaWEpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm5mLmlkLCBcImxvYWRNZWRpYVwiLCBtZWRpYS5zZXJ2ZXJJZCwgbWVkaWEubWVkaWFJZCk7XHJcbiAgICAgICAgdGhpcy5jcy5sb2FkTWVkaWEoIHRoaXMubmYuaWQsIG1lZGlhLnNlcnZlcklkLCBtZWRpYS5tZWRpYUlkICkudGhlbiggKHJlcCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlcDpcIiwgcmVwKTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5KCkudGhlbiggKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gU3Vic2NyaWJlIHRvIG1lZGlhIHNlcnZlclxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9
