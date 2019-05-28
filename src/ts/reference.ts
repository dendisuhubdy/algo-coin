import {CommandRegistry} from "@phosphor/commands";
import {DockPanel} from "@phosphor/widgets";
import {DataLoader, PerspectiveDataLoader} from "phosphor-perspective-utils/data";
import {APIS} from "./define";
import {ITab} from "./utils";

export
function buildReferenceTab(commands: CommandRegistry): ITab {
  const reference = new DockPanel();
  reference.id = "accounts";
  reference.title.label = "Reference";

  const accountsList = new PerspectiveDataLoader("Accounts");
  reference.addWidget(accountsList);
  const accountsLoader = new DataLoader([accountsList], APIS.ACCOUNTS);

  const instrumentList = new PerspectiveDataLoader("Instruments");
  // accounts.addWidget(instrumentList, {ref: accountsList, mode: 'split-right'});
  reference.addWidget(instrumentList);
  const instrumentsLoader = new DataLoader([instrumentList], APIS.INSTRUMENTS);

  const exchangeList = new PerspectiveDataLoader("Exchanges");
  // accounts.addWidget(exchangeList, {ref: instrumentList, mode: 'split-right'});
  reference.addWidget(exchangeList);
  const exchangeLoader = new DataLoader([exchangeList], APIS.EXCHANGES);

  return {loaders: [accountsLoader, instrumentsLoader, exchangeLoader],
          menus: [],
          perspectives: [accountsList, instrumentList, exchangeList],
          tab: reference};
}
