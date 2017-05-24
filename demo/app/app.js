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
        <em>!!!!!!!!!</em>
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
