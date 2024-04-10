import { ConnectionStatus, Network } from '@capacitor/network';
import { PluginListenerHandle } from '@capacitor/core';

export class ConnectionStatusHelper {

  public status: ConnectionStatus;
  // private networkListener: PluginListenerHandle;

  constructor() {
    Network.addListener(
      'networkStatusChange',
      status => {
        this.status = status;
      }
    );
    this.networkStatus();
  }

  private async networkStatus(): Promise<void> {
    this.status = await Network.getStatus();
  };

}
