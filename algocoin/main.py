from aat.trading import TradingEngine
from aat.parser import parse_command_line_config
from .ui.server import ServerApplication


def main(argv: list) -> None:
    config = parse_command_line_config(argv)

    # Instantiate trading engine
    #
    # The engine is responsible for managing the different components,
    # including the strategies, the bank/risk engine, and the
    # exchange/backtest engine.

    te = TradingEngine(config, ServerApplication)

    # Run the live trading engine
    te.run()
