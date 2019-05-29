export const APIS = {
    ACCOUNTS: "/api/v1/json/accounts",
    EXCHANGES: "/api/v1/json/exchanges",
    INSTRUMENTS: "/api/v1/json/instruments",
    MYORDERS: "/api/v1/json/myorders",
    MYTRADES: "/api/v1/json/mytrades",
    STRATEGIES: "/api/v1/json/strategies",
    STRATEGY_TRADE_REQUESTS: "/api/v1/json/strategy-trade-requests",
    STRATEGY_TRADE_RESPONSES: "/api/v1/json/strategy-trade-responses",
    TRADES: "/api/v1/json/trades",
};

export const COMMANDS = {
    HISTORICALDATA_OHLCV: "marketData:historicalDta:ohlcv",
    LIVEDATA_ORDERBOOK: "marketData:liveData:orderbook",
    LIVEDATA_TRADES: "marketData:liveData:trades",
    LIVEDATA_TRADES_BY_EXCH_ASSET: "marketData:liveData:tradesByExchangeAndAsset",
};
export const COMMAND_ICONS = {
    LIVEDATA_TRADES: "fa fa-plus",
};
