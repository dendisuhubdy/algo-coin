import {CommandRegistry} from "@phosphor/commands";
import {DockPanel} from "@phosphor/widgets";
import {DataLoader, PerspectiveDataLoader} from "phosphor-perspective-utils/data";
import {ITab} from "./utils";

export
function buildAccountsTab(commands: CommandRegistry): ITab {
  const accounts = new DockPanel();
  accounts.id = "accounts";
  accounts.title.label = "Accounts";

  const accountsList = new PerspectiveDataLoader("Accounts");
  accounts.addWidget(accountsList);

  const accountsLoader = new DataLoader([accountsList], "/api/json/v1/accounts");

  return {tab: accounts, loaders: [accountsLoader], perspectives: [accountsList]};
}
