System.register(['angular2/core', "./property-binding-component"], function(exports_1, context_1) {
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
    var core_1, property_binding_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (property_binding_component_1_1) {
                property_binding_component_1 = property_binding_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.name = '';
                    this.hobbies = '';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                        template: "\n\n<section class=\"parent\">\n    <h1>parent component</h1>\n    <h4>please enter your name</h4>\n    <input type=\"text\" [(ngModel)]=\"name\">\n    <br><br>\n    <section class=\"child\">\n\n        <my-property-binding [myName]=\"name\" [myAge]='35' (hobbiesChanged)='hobbies = $event'></my-property-binding>\n\n    </section>\n\n<h4>My hobbies are {{hobbies}}</h4>\n\n</section>\n",
                        directives: [property_binding_component_1.PropertyBindingComponent] }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUEwQkE7Z0JBQUE7b0JBQ0EsU0FBSSxHQUFHLEVBQUUsQ0FBQztvQkFDVixZQUFPLEdBQUcsRUFBRSxDQUFDO2dCQUViLENBQUM7Z0JBM0JEO29CQUFDLGdCQUFTLENBQUM7d0JBRVgsUUFBUSxFQUFFLEtBQUs7d0JBQ2YsUUFBUSxFQUFFLG9ZQWdCVDt3QkFFRCxVQUFVLEVBQUUsQ0FBQyxxREFBd0IsQ0FBQyxFQUFFLENBQUM7O2dDQUFBO2dCQU16QyxtQkFBQztZQUFELENBSkEsQUFJQyxJQUFBO1lBSkQsdUNBSUMsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtQcm9wZXJ0eUJpbmRpbmdDb21wb25lbnR9IGZyb20gXCIuL3Byb3BlcnR5LWJpbmRpbmctY29tcG9uZW50XCI7IFxuXG5AQ29tcG9uZW50KHsgXG5cbnNlbGVjdG9yOiAnYXBwJywgXG50ZW1wbGF0ZTogYFxuXG48c2VjdGlvbiBjbGFzcz1cInBhcmVudFwiPlxuICAgIDxoMT5wYXJlbnQgY29tcG9uZW50PC9oMT5cbiAgICA8aDQ+cGxlYXNlIGVudGVyIHlvdXIgbmFtZTwvaDQ+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgWyhuZ01vZGVsKV09XCJuYW1lXCI+XG4gICAgPGJyPjxicj5cbiAgICA8c2VjdGlvbiBjbGFzcz1cImNoaWxkXCI+XG5cbiAgICAgICAgPG15LXByb3BlcnR5LWJpbmRpbmcgW215TmFtZV09XCJuYW1lXCIgW215QWdlXT0nMzUnIChob2JiaWVzQ2hhbmdlZCk9J2hvYmJpZXMgPSAkZXZlbnQnPjwvbXktcHJvcGVydHktYmluZGluZz5cblxuICAgIDwvc2VjdGlvbj5cblxuPGg0Pk15IGhvYmJpZXMgYXJlIHt7aG9iYmllc319PC9oND5cblxuPC9zZWN0aW9uPlxuYCwgXG5cbmRpcmVjdGl2ZXM6IFtQcm9wZXJ0eUJpbmRpbmdDb21wb25lbnRdIH0pXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xubmFtZSA9ICcnO1xuaG9iYmllcyA9ICcnO1xuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
