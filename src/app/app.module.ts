import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Tealium, TealConfig } from '@ionic-native/tealium/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  // exports: [Tealium],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, Tealium],
  bootstrap: [AppComponent],
})
export class AppModule implements OnInit {
  // constructor() {}
  constructor(private tealium: Tealium) {
    // this.initTealium();
  }


  ngOnInit(): void {}


  // initTealium() {
  //   console.log('AppModule: ngOnInit Tealium');
  //   let tealConfig: TealConfig = {
  //     account: "services-naryu-ohga",
  //     profile: "angular",
  //     environment: "dev", // usually "dev", "qa" or "prod"
  //     isLifecycleEnabled: "false", // pass "false" to disable lifecycle tracking
  //     isCrashReporterEnabled: "false", // pass "true" to enable crash reporter (Android only)
  //     instance: "shopapp" // an arbitrary instance name. use the same instance name for all subsequent API calls
  //   }
  //   this.tealium.init(tealConfig).then(()=>{
  //     this.tealium.trackView({"screen_name": "homescreen"}, "shopapp");
  //   });
  // }
}