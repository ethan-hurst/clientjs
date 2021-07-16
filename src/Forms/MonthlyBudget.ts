import { XrmContextCdsServiceClient } from "dataverse-ify";

export class AccountForm {
  static async onLoad(context: Xrm.Events.EventContext): Promise<void> {
    console.log('function onLoad Fired');
  }

  static async onSave(context: Xrm.Events.EventContext): Promise<void> {
    console.log('function onSave Fired');
  }
}