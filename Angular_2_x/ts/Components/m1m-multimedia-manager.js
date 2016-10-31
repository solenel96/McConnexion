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
    var CompMultimediaManager;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (CommService_1_1) {
                CommService_1 = CommService_1_1;
            }],
        execute: function() {
            CompMultimediaManager = class CompMultimediaManager {
                constructor(comm) {
                    this.comm = comm;
                    this.mediaRenderers = [];
                    this.mediaServers = [];
                    //console.log( "CommService:", comm);
                    comm.init(localStorage.getItem("TActHab_adresse")).subscribe((data) => {
                        //console.log( "init =>", data );
                        this.mediaRenderers = data.mediaRenderers;
                        this.mediaServers = data.mediaServers;
                    });
                }
            };
            __decorate([
                core_1.Input(), 
                __metadata('design:type', String)
            ], CompMultimediaManager.prototype, "title", void 0);
            CompMultimediaManager = __decorate([
                core_1.Component({
                    moduleId: __moduleName || module.id,
                    selector: "comp-multimedia-manager",
                    templateUrl: "m1m-multimedia-manager.html",
                    styleUrls: ["m1m-multimedia-manager.css"] // [ "ts/Components/m1m-multimedia-manager.css" ]
                }), 
                __metadata('design:paramtypes', [CommService_1.CommService])
            ], CompMultimediaManager);
            exports_1("CompMultimediaManager", CompMultimediaManager);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbXBvbmVudHMvbTFtLW11bHRpbWVkaWEtbWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVNBO2dCQUlJLFlBQW9CLElBQWlCO29CQUFqQixTQUFJLEdBQUosSUFBSSxDQUFhO29CQUZyQyxtQkFBYyxHQUFzQixFQUFFLENBQUM7b0JBQ3ZDLGlCQUFZLEdBQXdCLEVBQUUsQ0FBQztvQkFFbkMscUNBQXFDO29CQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFFLFlBQVksQ0FBQyxPQUFPLENBQUUsaUJBQWlCLENBQUUsQ0FBRSxDQUFDLFNBQVMsQ0FBRSxDQUFDLElBQXFCO3dCQUNwRixpQ0FBaUM7d0JBQ2pDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQzt3QkFDMUMsSUFBSSxDQUFDLFlBQVksR0FBSyxJQUFJLENBQUMsWUFBWSxDQUFDO29CQUM1QyxDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDO1lBQ0wsQ0FBQztZQVhHO2dCQUFDLFlBQUssRUFBRTs7Z0VBQUE7WUFQWjtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBVSxZQUFZLElBQUksTUFBTSxDQUFDLEVBQUU7b0JBQzNDLFFBQVEsRUFBSSx5QkFBeUI7b0JBQ3JDLFdBQVcsRUFBSSw2QkFBNkI7b0JBQzVDLFNBQVMsRUFBUyxDQUFFLDRCQUE0QixDQUFFLENBQUMsaURBQWlEO2lCQUN2RyxDQUFDOztxQ0FBQTtZQUNGLHlEQVlDLENBQUEiLCJmaWxlIjoiQ29tcG9uZW50cy9tMW0tbXVsdGltZWRpYS1tYW5hZ2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCBcdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtDb21tU2VydmljZSwgRGF0YURsbmFEZXZpY2VzLCBNZWRpYVNlcnZlciwgTWVkaWFSZW5kZXJlcn0gZnJvbSBcIi4uL1NlcnZpY2VzL0NvbW1TZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkICAgICAgICA6IF9fbW9kdWxlTmFtZSB8fCBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3Rvclx0XHQ6IFwiY29tcC1tdWx0aW1lZGlhLW1hbmFnZXJcIixcclxuICAgIHRlbXBsYXRlVXJsXHRcdDogXCJtMW0tbXVsdGltZWRpYS1tYW5hZ2VyLmh0bWxcIiwgLy9cInRzL0NvbXBvbmVudHMvbTFtLW11bHRpbWVkaWEtbWFuYWdlci5odG1sXCIsIC8vXHJcbiAgICBzdHlsZVVybHMgICAgICAgOiBbIFwibTFtLW11bHRpbWVkaWEtbWFuYWdlci5jc3NcIiBdIC8vIFsgXCJ0cy9Db21wb25lbnRzL20xbS1tdWx0aW1lZGlhLW1hbmFnZXIuY3NzXCIgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29tcE11bHRpbWVkaWFNYW5hZ2VyIHtcclxuICAgIEBJbnB1dCgpIHRpdGxlXHQ6IHN0cmluZztcclxuICAgIG1lZGlhUmVuZGVyZXJzICA6IE1lZGlhUmVuZGVyZXJbXSA9IFtdO1xyXG4gICAgbWVkaWFTZXJ2ZXJzICAgIDogTWVkaWFTZXJ2ZXIgIFtdID0gW107XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbW06IENvbW1TZXJ2aWNlKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyggXCJDb21tU2VydmljZTpcIiwgY29tbSk7XHJcbiAgICAgICAgY29tbS5pbml0KCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSggXCJUQWN0SGFiX2FkcmVzc2VcIiApICkuc3Vic2NyaWJlKCAoZGF0YTogRGF0YURsbmFEZXZpY2VzKSA9PiB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coIFwiaW5pdCA9PlwiLCBkYXRhICk7XHJcbiAgICAgICAgICAgIHRoaXMubWVkaWFSZW5kZXJlcnMgPSBkYXRhLm1lZGlhUmVuZGVyZXJzO1xyXG4gICAgICAgICAgICB0aGlzLm1lZGlhU2VydmVycyAgID0gZGF0YS5tZWRpYVNlcnZlcnM7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
