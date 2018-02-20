interface Window {
  TradingView: TradingView;
}

declare var TradingView: TradingView;
interface TradingView {
  widget: TradingViewModule.Widget;
}

declare namespace TradingViewModule {
  var widget: Widget;

  interface Widget {
    new (props: WidgetProps);
  }

  interface WidgetProps {
    charts_storage_api_version: string;
    charts_storage_url: string;
    client_id: string;
    container_id: string;
    datafeed: any;
    disabled_features: string[];
    drawings_access: DrawingAccess;
    enabled_features: string[];
    fullscreen?: boolean;
    interval: string;
    library_path?: string;
    locale: string;
    symbol: string;
    user_id: string;
  }

  interface ToolDescription {
    name: string;
  }

  interface DrawingAccess {
    type: string;
    tools: ToolDescription[];
  }
}
