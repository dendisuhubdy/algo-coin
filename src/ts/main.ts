import {PerspectiveWidget} from "@finos/perspective-phosphor";
import {CommandRegistry} from "@phosphor/commands";
import {BoxPanel, Menu, TabPanel, Widget} from "@phosphor/widgets";
import {DataLoader} from "phosphor-perspective-utils/data";
import {Header} from "phosphor-perspective-utils/header";
import {hideLoader, showLoader} from "phosphor-perspective-utils/loader";
import {buildMarketDataTab} from "./market_data";
import {buildOrderEntryTab} from "./orders";
import {buildReferenceTab} from "./reference";
import {buildStrategiesTab} from "./strategies";

export
function main(): void {
  // tslint:disable-next-line: no-shadowed-variable
  const main = new TabPanel();
  main.id = "main";

  showLoader();
  hideLoader(1000);

  const commands = new CommandRegistry();

  const tabs = [];
  let allMenus = [] as Menu[];
  let dataLoaders = [] as DataLoader[];
  let perspectiveInstances = [] as PerspectiveWidget[];

  for (const foo of [buildReferenceTab, buildMarketDataTab, buildStrategiesTab, buildOrderEntryTab]) {
    const {tab, loaders, perspectives, menus} = foo(commands);
    tabs.push(tab);
    allMenus = allMenus.concat(menus);
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
  Widget.attach(main, document.body);

}
