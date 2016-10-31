System.register(["@angular/core", "@angular/common", "@angular/forms", "@angular/http", "./DragDrop/DragDropModule", "./Components/m1m-multimedia-manager", "./Components/m1m-media-renderer", "./Components/m1m-media-browser", "./Services/CommService", "@angular/material", "hammerjs"], function(exports_1, context_1) {
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
    var core_1, common_1, forms_1, http_1, DragDropModule_1, m1m_multimedia_manager_1, m1m_media_renderer_1, m1m_media_browser_1, CommService_1, material_1;
    var M1mMultimediaModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (DragDropModule_1_1) {
                DragDropModule_1 = DragDropModule_1_1;
            },
            function (m1m_multimedia_manager_1_1) {
                m1m_multimedia_manager_1 = m1m_multimedia_manager_1_1;
            },
            function (m1m_media_renderer_1_1) {
                m1m_media_renderer_1 = m1m_media_renderer_1_1;
            },
            function (m1m_media_browser_1_1) {
                m1m_media_browser_1 = m1m_media_browser_1_1;
            },
            function (CommService_1_1) {
                CommService_1 = CommService_1_1;
            },
            function (material_1_1) {
                material_1 = material_1_1;
            },
            function (_1) {}],
        execute: function() {
            M1mMultimediaModule = class M1mMultimediaModule {
            };
            M1mMultimediaModule = __decorate([
                core_1.NgModule({
                    imports: [common_1.CommonModule, forms_1.FormsModule, http_1.HttpModule, DragDropModule_1.DragDropModule, material_1.MaterialModule.forRoot()],
                    exports: [m1m_multimedia_manager_1.CompMultimediaManager],
                    declarations: [m1m_multimedia_manager_1.CompMultimediaManager, m1m_media_browser_1.M1mMediaBrowser, m1m_media_renderer_1.M1mMediaRenderer,],
                    providers: [CommService_1.CommService],
                    schemas: []
                }), 
                __metadata('design:paramtypes', [])
            ], M1mMultimediaModule);
            exports_1("M1mMultimediaModule", M1mMultimediaModule);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm0xbS1tdWx0aW1lZGlhLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF1QkE7WUFBa0MsQ0FBQztZQVBuQztnQkFBQyxlQUFRLENBQUM7b0JBQ04sT0FBTyxFQUFPLENBQUUscUJBQVksRUFBRSxtQkFBVyxFQUFFLGlCQUFVLEVBQUUsK0JBQWMsRUFBRSx5QkFBYyxDQUFDLE9BQU8sRUFBRSxDQUFFO29CQUNqRyxPQUFPLEVBQU8sQ0FBRSw4Q0FBcUIsQ0FBRTtvQkFDdkMsWUFBWSxFQUFFLENBQUUsOENBQXFCLEVBQUUsbUNBQWUsRUFBRSxxQ0FBZ0IsRUFBSTtvQkFDNUUsU0FBUyxFQUFLLENBQUUseUJBQVcsQ0FBRTtvQkFDN0IsT0FBTyxFQUFPLEVBQStCO2lCQUNoRCxDQUFDOzttQ0FBQTtZQUNGLHFEQUFtQyxDQUFBIiwiZmlsZSI6Im0xbS1tdWx0aW1lZGlhLW1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLyosIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEqLyB9IFx0XHRcdFx0ZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtDb21tb25Nb2R1bGV9ICAgICAgICAgICAgICAgZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9ICAgXHRcdFx0ZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBcdFx0XHRcdGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcblxyXG5pbXBvcnQgeyBEcmFnRHJvcE1vZHVsZSB9ICAgICAgICAgICBmcm9tIFwiLi9EcmFnRHJvcC9EcmFnRHJvcE1vZHVsZVwiO1xyXG5cclxuaW1wb3J0IHsgQ29tcE11bHRpbWVkaWFNYW5hZ2VyIH0gICAgZnJvbSBcIi4vQ29tcG9uZW50cy9tMW0tbXVsdGltZWRpYS1tYW5hZ2VyXCI7XHJcbmltcG9ydCB7IE0xbU1lZGlhUmVuZGVyZXIgfSAgICAgICAgIGZyb20gXCIuL0NvbXBvbmVudHMvbTFtLW1lZGlhLXJlbmRlcmVyXCI7XHJcbmltcG9ydCB7IE0xbU1lZGlhQnJvd3NlciB9ICAgICAgICAgIGZyb20gXCIuL0NvbXBvbmVudHMvbTFtLW1lZGlhLWJyb3dzZXJcIjtcclxuaW1wb3J0IHsgQ29tbVNlcnZpY2UgfSAgICAgICAgICAgICAgZnJvbSBcIi4vU2VydmljZXMvQ29tbVNlcnZpY2VcIjtcclxuXHJcbi8vaW1wb3J0IHsgUGFwZXJTbGlkZXIgfSAgICAgICAgICAgICAgZnJvbSBcIi4vQ29tcG9uZW50cy9Qb2x5bWVySW1wb3J0XCI7XHJcbmltcG9ydCB7IE1hdGVyaWFsTW9kdWxlIH0gICAgICAgICAgIGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgXCJoYW1tZXJqc1wiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHMgICAgIDogWyBDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBIdHRwTW9kdWxlLCBEcmFnRHJvcE1vZHVsZSwgTWF0ZXJpYWxNb2R1bGUuZm9yUm9vdCgpIF0sXHJcbiAgICBleHBvcnRzICAgICA6IFsgQ29tcE11bHRpbWVkaWFNYW5hZ2VyIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFsgQ29tcE11bHRpbWVkaWFNYW5hZ2VyLCBNMW1NZWRpYUJyb3dzZXIsIE0xbU1lZGlhUmVuZGVyZXIsICBdLFxyXG4gICAgcHJvdmlkZXJzICAgOiBbIENvbW1TZXJ2aWNlIF0sXHJcbiAgICBzY2hlbWFzICAgICA6IFsgLypDVVNUT01fRUxFTUVOVFNfU0NIRU1BKi8gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE0xbU11bHRpbWVkaWFNb2R1bGUge31cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
