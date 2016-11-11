// Make a component with ng.core.Component
// Select the portion of the app 'selector'
// 'template' - backticks?
// Class constructor
// Bootstrap


// First Create the Component
var AppComponent = ng.core
  .Component({
    selector: "app",
    template: `
      <p>
        Hello
        <em>Angular!</em>
      </p>
    `
  })
  .Class({
    constructor: function() {}
  });


/**
  * Next add the component to a module
  */
var AppModule =
  ng.core.NgModule({
    imports: [ ng.platformBrowser.BrowserModule ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ]
  })
  .Class({
    constructor: function() {}
  });


/**
  * Finally bootstrap
  */
ng.platformBrowserDynamic
  .platformBrowserDynamic()
  .bootstrapModule(AppModule);

// document.addEventListener('DOMContentLoaded', function() {
//   ng.platform.browser.bootstrap(AppComponent, []);
// });








// Initial State:

// var AppComponent = ng.core
//   .Component({
//   })
//   .Class({
//     constructor: function() {}
//   });

// document.addEventListener('DOMContentLoaded', function() {
//   ng.platform.browser.bootstrap(AppComponent, []);
// });





// Final State:

// var AppComponent = ng.core
//   .Component({
//     selector: 'app',
//     template:
//       `
//         <p>hello!</p>
//         <p>Hello again</p>
//       `
//   })
//   .Class({
//     constructor: function() {}
//   });

// document.addEventListener('DOMContentLoaded', function() {
//   ng.platform.browser.bootstrap(AppComponent, []);
// });
