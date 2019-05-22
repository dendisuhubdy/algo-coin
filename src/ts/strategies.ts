import {CommandRegistry} from "@phosphor/commands";
import {DockPanel} from "@phosphor/widgets";
import {ITab} from "./utils";

export
function buildStrategiesTab(commands: CommandRegistry): ITab {
  const strategies = new DockPanel();
  strategies.id = "strategies";
  strategies.title.label = "Strategies";

  return {tab: strategies, loaders: [], perspectives: []};
}
