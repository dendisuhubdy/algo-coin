import {PerspectiveWidget} from "@finos/perspective-phosphor";
import {CommandRegistry} from "@phosphor/commands";
import {BoxPanel, MenuBar, TabPanel, Widget} from "@phosphor/widgets";
import {DataLoader} from "phosphor-perspective-utils/data";
import {Header} from "phosphor-perspective-utils/header";
import {hideLoader, showLoader} from "phosphor-perspective-utils/loader";
import {buildAccountsTab} from "./accounts";
import {buildMarketDataTab} from "./market_data";
import {buildStrategiesTab} from "./strategies";

export
function main(): void {
  // tslint:disable-next-line: no-shadowed-variable
  const main = new TabPanel();
  main.id = "main";

  /* File bar */
  const bar = new MenuBar();
  bar.id = "menuBar";

  showLoader();
  hideLoader(1000);

  const commands = new CommandRegistry();

  const tabs = [];
  let dataLoaders = [] as DataLoader[];
  let perspectiveInstances = [] as PerspectiveWidget[];

  for (const foo of [buildAccountsTab, buildMarketDataTab, buildStrategiesTab]) {
    const {tab, loaders, perspectives} = foo(commands);
    tabs.push(tab);
    dataLoaders = dataLoaders.concat(loaders);
    perspectiveInstances = perspectiveInstances.concat(perspectives);
  }

  /* main area setup */
  BoxPanel.setStretch(main, 1);
  for (const tab of tabs) {
    main.addWidget(tab);
  }

  for (const dl of dataLoaders) {
    dl.start();
  }

  /* Title bar */
  const header = new Header(perspectiveInstances);

  window.onresize = () => { main.update(); };
  Widget.attach(header, document.body);
  Widget.attach(bar, document.body);
  Widget.attach(main, document.body);
}
