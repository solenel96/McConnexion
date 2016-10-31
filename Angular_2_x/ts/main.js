System.register(["@angular/platform-browser-dynamic", "@angular/core", "@angular/platform-browser", "./m1m-multimedia-module", "./DragDrop/DragDropModule"], function(exports_1, context_1) {
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
    var platform_browser_dynamic_1, core_1, platform_browser_1, core_2, m1m_multimedia_module_1, DragDropModule_1;
    var RootManager, AppModule;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (m1m_multimedia_module_1_1) {
                m1m_multimedia_module_1 = m1m_multimedia_module_1_1;
            },
            function (DragDropModule_1_1) {
                DragDropModule_1 = DragDropModule_1_1;
            }],
        execute: function() {
            //import { PolymerElement } from "@vaadin/angular2-polymer";
            //import "@vaadin/angular2-polymer";
            RootManager = class RootManager {
            };
            RootManager = __decorate([
                core_1.Component({
                    selector: "root-manager",
                    template: `<comp-multimedia-manager title="Gestion des services UPnP/DLNA" 
											alx-dragdrop></comp-multimedia-manager>
				  `
                }), 
                __metadata('design:paramtypes', [])
            ], RootManager);
            exports_1("RootManager", RootManager);
            //enableProdMode();
            AppModule = class AppModule {
            };
            AppModule = __decorate([
                core_2.NgModule({
                    imports: [m1m_multimedia_module_1.M1mMultimediaModule, platform_browser_1.BrowserModule, DragDropModule_1.DragDropModule],
                    declarations: [RootManager],
                    bootstrap: [RootManager],
                    schemas: []
                }), 
                __metadata('design:paramtypes', [])
            ], AppModule);
            exports_1("AppModule", AppModule);
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBUUEsNERBQTREO1lBQzVELG9DQUFvQztZQVFwQztZQUNBLENBQUM7WUFQRDtnQkFBQyxnQkFBUyxDQUFDO29CQUNWLFFBQVEsRUFBRyxjQUFjO29CQUN6QixRQUFRLEVBQUc7O09BRUw7aUJBQ04sQ0FBQzs7MkJBQUE7WUFDRixxQ0FDQyxDQUFBO1lBRUQsbUJBQW1CO1lBT25CO1lBQXdCLENBQUM7WUFOekI7Z0JBQUMsZUFBUSxDQUFDO29CQUNULE9BQU8sRUFBTyxDQUFFLDJDQUFtQixFQUFFLGdDQUFhLEVBQUUsK0JBQWMsQ0FBRTtvQkFDcEUsWUFBWSxFQUFFLENBQUUsV0FBVyxDQUFFO29CQUM3QixTQUFTLEVBQUssQ0FBRSxXQUFXLENBQUU7b0JBQzFCLE9BQU8sRUFBTyxFQUErQjtpQkFDaEQsQ0FBQzs7eUJBQUE7WUFDRixpQ0FBeUIsQ0FBQTtZQUV6QixpREFBc0IsRUFBRSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcGxhdGZvcm1Ccm93c2VyRHluYW1pYyB9ICAgZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pY1wiO1xyXG5pbXBvcnQge0NvbXBvbmVudH0gICAgICAgICAgICAgICAgICBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gICAgXHRcdGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XHJcbmltcG9ydCB7IE5nTW9kdWxlLyosIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEqLyAgfSBcdFx0XHRcdGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBNMW1NdWx0aW1lZGlhTW9kdWxlIH0gXHRcdGZyb20gXCIuL20xbS1tdWx0aW1lZGlhLW1vZHVsZVwiO1xyXG5pbXBvcnQgeyBEcmFnRHJvcE1vZHVsZSB9IFx0XHRcdGZyb20gXCIuL0RyYWdEcm9wL0RyYWdEcm9wTW9kdWxlXCI7XHJcblxyXG4vL2ltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkB2YWFkaW4vYW5ndWxhcjItcG9seW1lclwiO1xyXG4vL2ltcG9ydCBcIkB2YWFkaW4vYW5ndWxhcjItcG9seW1lclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3JcdDogXCJyb290LW1hbmFnZXJcIixcclxuXHR0ZW1wbGF0ZVx0OiBgPGNvbXAtbXVsdGltZWRpYS1tYW5hZ2VyIHRpdGxlPVwiR2VzdGlvbiBkZXMgc2VydmljZXMgVVBuUC9ETE5BXCIgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbHgtZHJhZ2Ryb3A+PC9jb21wLW11bHRpbWVkaWEtbWFuYWdlcj5cclxuXHRcdFx0XHQgIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFJvb3RNYW5hZ2VyIHtcclxufVxyXG5cclxuLy9lbmFibGVQcm9kTW9kZSgpO1xyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHMgICAgIDogWyBNMW1NdWx0aW1lZGlhTW9kdWxlLCBCcm93c2VyTW9kdWxlLCBEcmFnRHJvcE1vZHVsZSBdLFxyXG5cdGRlY2xhcmF0aW9uczogWyBSb290TWFuYWdlciBdLFxyXG5cdGJvb3RzdHJhcCAgIDogWyBSb290TWFuYWdlciBdLFxyXG4gICAgc2NoZW1hcyAgICAgOiBbIC8qQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSovICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge31cclxuXHJcbnBsYXRmb3JtQnJvd3NlckR5bmFtaWMoKS5ib290c3RyYXBNb2R1bGUoQXBwTW9kdWxlKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
