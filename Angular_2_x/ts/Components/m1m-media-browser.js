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
    var M1mMediaBrowser;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (CommService_1_1) {
                CommService_1 = CommService_1_1;
            }],
        execute: function() {
            M1mMediaBrowser = class M1mMediaBrowser {
                constructor(cs) {
                    this.cs = cs;
                    this.breadcrumb = [];
                    // console.log( "CommService:", cs);
                }
                browseMediaServer(ms) {
                    this.breadcrumb = [];
                    this.ms = ms;
                    this.data = null;
                    if (ms) {
                        this.browse();
                    }
                }
                browse(directory) {
                    let directoryId;
                    if (directory) {
                        directoryId = directory.directoryId;
                        let keep = true;
                        this.breadcrumb = this.breadcrumb.filter(D => keep && (keep = D !== directory));
                        this.breadcrumb.push(directory);
                    }
                    else {
                        directoryId = "0";
                    }
                    this.data = null;
                    return this.cs.browse(this.ms.id, directoryId).then((data) => {
                        console.log("Browse", this.ms.id, directoryId, "=>", data);
                        this.data = data;
                    });
                }
            };
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Array)
            ], M1mMediaBrowser.prototype, "devices", void 0);
            M1mMediaBrowser = __decorate([
                core_1.Component({
                    moduleId: __moduleName || module.id,
                    selector: "m1m-media-browser",
                    templateUrl: "m1m-media-browser.html",
                    styleUrls: ["m1m-media-browser.css"
                    ]
                }), 
                __metadata('design:paramtypes', [CommService_1.CommService])
            ], M1mMediaBrowser);
            exports_1("M1mMediaBrowser", M1mMediaBrowser);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbXBvbmVudHMvbTFtLW1lZGlhLWJyb3dzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFVQTtnQkFLSSxZQUFvQixFQUFlO29CQUFmLE9BQUUsR0FBRixFQUFFLENBQWE7b0JBSG5DLGVBQVUsR0FBb0IsRUFBRSxDQUFDO29CQUk3QixvQ0FBb0M7Z0JBQ3hDLENBQUM7Z0JBQ0QsaUJBQWlCLENBQUMsRUFBZTtvQkFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7b0JBQ3JCLElBQUksQ0FBQyxFQUFFLEdBQVcsRUFBRSxDQUFDO29CQUNyQixJQUFJLENBQUMsSUFBSSxHQUFTLElBQUksQ0FBQztvQkFDdkIsRUFBRSxDQUFBLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDSixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQ2xCLENBQUM7Z0JBQ0wsQ0FBQztnQkFDRCxNQUFNLENBQUUsU0FBcUI7b0JBQ3pCLElBQUksV0FBbUIsQ0FBQztvQkFDeEIsRUFBRSxDQUFBLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzt3QkFDWCxXQUFXLEdBQUcsU0FBUyxDQUFDLFdBQVcsQ0FBQzt3QkFDcEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO3dCQUNoQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFFLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLEdBQUMsQ0FBQyxLQUFLLFNBQVMsQ0FBQyxDQUFFLENBQUM7d0JBQ2hGLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUNwQyxDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNKLFdBQVcsR0FBRyxHQUFHLENBQUM7b0JBQ3RCLENBQUM7b0JBQ0QsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7b0JBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBRSxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxXQUFXLENBQUUsQ0FBQyxJQUFJLENBQUUsQ0FBQyxJQUFJO3dCQUN4RCxPQUFPLENBQUMsR0FBRyxDQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBRSxDQUFDO3dCQUM3RCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztvQkFDckIsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQztZQUNMLENBQUM7WUEvQkc7Z0JBQUMsWUFBSyxFQUFFOzs0REFBQTtZQVJaO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1AsUUFBUSxFQUFVLFlBQVksSUFBSSxNQUFNLENBQUMsRUFBRTtvQkFDM0MsUUFBUSxFQUFJLG1CQUFtQjtvQkFDL0IsV0FBVyxFQUFJLHdCQUF3QjtvQkFDdkMsU0FBUyxFQUFTLENBQUUsdUJBQXVCO3FCQUN4QjtpQkFDdEIsQ0FBQzs7K0JBQUE7WUFDRiw2Q0FnQ0MsQ0FBQSIsImZpbGUiOiJDb21wb25lbnRzL20xbS1tZWRpYS1icm93c2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCBcdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtDb21tU2VydmljZSwgRGlyZWN0b3J5LCBNZWRpYVNlcnZlciwgRGF0YUJyb3dzZX0gZnJvbSBcIi4uL1NlcnZpY2VzL0NvbW1TZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkICAgICAgICA6IF9fbW9kdWxlTmFtZSB8fCBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3Rvclx0XHQ6IFwibTFtLW1lZGlhLWJyb3dzZXJcIixcclxuICAgIHRlbXBsYXRlVXJsXHRcdDogXCJtMW0tbWVkaWEtYnJvd3Nlci5odG1sXCIsXHJcbiAgICBzdHlsZVVybHMgICAgICAgOiBbIFwibTFtLW1lZGlhLWJyb3dzZXIuY3NzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE0xbU1lZGlhQnJvd3NlciB7XHJcbiAgICBASW5wdXQoKSBkZXZpY2VzXHQ6IE1lZGlhU2VydmVyW107XHJcbiAgICBicmVhZGNydW1iICA6IERpcmVjdG9yeSAgW10gPSBbXTtcclxuICAgIGRhdGEgICAgICAgIDogRGF0YUJyb3dzZTtcclxuICAgIG1zICAgICAgICAgIDogTWVkaWFTZXJ2ZXI7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNzOiBDb21tU2VydmljZSkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCBcIkNvbW1TZXJ2aWNlOlwiLCBjcyk7XHJcbiAgICB9XHJcbiAgICBicm93c2VNZWRpYVNlcnZlcihtczogTWVkaWFTZXJ2ZXIpIHtcclxuICAgICAgICB0aGlzLmJyZWFkY3J1bWIgPSBbXTtcclxuICAgICAgICB0aGlzLm1zICAgICAgICAgPSBtcztcclxuICAgICAgICB0aGlzLmRhdGEgICAgICAgPSBudWxsO1xyXG4gICAgICAgIGlmKG1zKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnJvd3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYnJvd3NlKCBkaXJlY3Rvcnk/OiBEaXJlY3RvcnkgKSB7XHJcbiAgICAgICAgbGV0IGRpcmVjdG9yeUlkOiBzdHJpbmc7XHJcbiAgICAgICAgaWYoZGlyZWN0b3J5KSB7XHJcbiAgICAgICAgICAgIGRpcmVjdG9yeUlkID0gZGlyZWN0b3J5LmRpcmVjdG9yeUlkO1xyXG4gICAgICAgICAgICBsZXQga2VlcCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuYnJlYWRjcnVtYiA9IHRoaXMuYnJlYWRjcnVtYi5maWx0ZXIoIEQgPT4ga2VlcCAmJiAoa2VlcD1EICE9PSBkaXJlY3RvcnkpICk7XHJcbiAgICAgICAgICAgIHRoaXMuYnJlYWRjcnVtYi5wdXNoKGRpcmVjdG9yeSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGlyZWN0b3J5SWQgPSBcIjBcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kYXRhID0gbnVsbDtcclxuICAgICAgICByZXR1cm4gdGhpcy5jcy5icm93c2UoIHRoaXMubXMuaWQsIGRpcmVjdG9yeUlkICkudGhlbiggKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coIFwiQnJvd3NlXCIsIHRoaXMubXMuaWQsIGRpcmVjdG9yeUlkLCBcIj0+XCIsIGRhdGEgKTtcclxuICAgICAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9
