export const APIS = {
    ACCOUNTS: "/api/json/v1/accounts",
    EXCHANGES: "/api/json/v1/exchanges",
    INSTRUMENTS: "/api/json/v1/instruments",
    MYORDERS: "/api/json/v1/myorders",
    MYTRADES: "/api/json/v1/mytrades",
    STRATEGIES: "/api/json/v1/strategies",
    TRADES: "/api/json/v1/trades",
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
