import {CommandRegistry} from "@phosphor/commands";
import {DockPanel} from "@phosphor/widgets";
import {DataLoader, PerspectiveDataLoader} from "phosphor-perspective-utils/data";
import {ITab} from "./utils";

export
function buildReferenceTab(commands: CommandRegistry): ITab {
  const reference = new DockPanel();
  reference.id = "accounts";
  reference.title.label = "Reference";

  const accountsList = new PerspectiveDataLoader("Accounts");
  reference.addWidget(accountsList);
  const accountsLoader = new DataLoader([accountsList], "/api/json/v1/accounts");

  const instrumentList = new PerspectiveDataLoader("Instruments");
  // accounts.addWidget(instrumentList, {ref: accountsList, mode: 'split-right'});
  reference.addWidget(instrumentList);
  const instrumentsLoader = new DataLoader([instrumentList], "/api/json/v1/instruments");

  return {tab: reference, loaders: [accountsLoader, instrumentsLoader], perspectives: [accountsList, instrumentList], menus: []};
}
