import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app/app.component';
import { MyHelloComponent } from './hello/hello.component';

@NgModule({
  declarations: [
    AppComponent,
    MyHelloComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [
    AppComponent,
    MyHelloComponent
  ]
  // bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(MyHelloComponent, { injector });
    customElements.define('my-hello', el);

    const el2 = createCustomElement(AppComponent, { injector });
    customElements.define('app-component', el2);
  }
  ngDoBootstrap() {}
}
