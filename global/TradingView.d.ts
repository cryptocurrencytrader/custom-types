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
    debug?: boolean;
    disabled_features: string[];
    drawings_access: DrawingAccess;
    enabled_features: string[];
    fullscreen?: boolean;
    height?: number;
    interval: string;
    library_path?: string;
    locale: string;
    overrides?: { [key: string]: string };
    symbol: string;
    timeframe?: string;
    time_frames?: TimeFrame[];
    width?: number;
    user_id: string;
  }

  interface DrawingAccess {
    type: string;
    tools: ToolDescription[];
  }

  interface ToolDescription {
    name: string;
  }

  interface TimeFrame {
    text: string;
    resolution: string;
    description?: string;
    title?: string;
  }
}
