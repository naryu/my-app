import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tealium, TealConfig } from '@ionic-native/tealium/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [Tealium]
})
export class AppComponent implements OnInit{
  // constructor() {}
  constructor(
    private tealium: Tealium,
    public router: Router
  ) {
    this.initTealium();
  }

  initTealium() {
    let tealConfig: TealConfig = {
      account: "services-naryu-ohga",
      profile: "angular",
      environment: "dev", // usually "dev", "qa" or "prod"
      isLifecycleEnabled: "false", // pass "false" to disable lifecycle tracking
      isCrashReporterEnabled: "false", // pass "true" to enable crash reporter (Android only)
      instance: "shopapp", // an arbitrary instance name. use the same instance name for all subsequent API calls
      collectDispatchURL : "https://collect.tealiumiq.com/vdata/i.gif?tealium_account=services-naryu-ohga&tealium_profile=angular"
     }

    //  console.log(this.tealium.init);
    this.tealium.init(tealConfig).then(()=>{
      console.log('tealConfig = ', tealConfig);
      this.tealium.trackView({"screen_name": "homescreen"}, "shopapp");
    });

    this.router.events.subscribe( event => {
      console.log('router events', this.tealium.getVisitorId());
      this.tealium.getPersistent("tealium_visitor_id","shopapp",function(t) {console.log('t = ' + t);})
      this.tealium.trackEvent({"tealium_event": "app event"}, "shopapp");
    })
  }
  ngOnInit(): void {
  //   console.log('ngOnInit with TealConfig');

  }
}
