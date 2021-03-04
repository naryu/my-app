import { Component, OnInit } from '@angular/core';
import { Tealium, TealConfig } from '@ionic-native/tealium/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}
  // export class AppComponent implements OnInit {
  // constructor(private tealium: Tealium) { }

  
  // ngOnInit(): void {
  //   let tealConfig: TealConfig = {
  //     account: "services-naryu-ohga",
  //     profile: "angular",
  //     environment: "dev", // usually "dev", "qa" or "prod"
  //     isLifecycleEnabled: "false", // pass "false" to disable lifecycle tracking
  //     isCrashReporterEnabled: "false", // pass "true" to enable crash reporter (Android only)
  //     instance: "shopapp" // an arbitrary instance name. use the same instance name for all subsequent API calls
  //    }
    
  //   // The tealium.view function will call the tealium.track function with 'view' as first param
  //   // Most tags support the 'view' event and many analytics tags also support the 'link' event
  //   this.tealium.init(tealConfig).then(()=>{
  //     this.tealium.trackView({"screen_name": "homescreen"}, "shopapp");
  //   });
  //   //this.tealium.track('view', {'event_name' : 'init'});
  // }
}
