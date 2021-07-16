import { AccountAttributes, accountMetadata } from "../dataverse-gen/entities/Account";

export class AccountForm {
  static async onLoad(context: Xrm.Events.EventContext): Promise<void> {
    context
      .getFormContext()
      .getAttribute("name")
      .addOnChange(() => {
        console.log("function onchange");
      });
    console.log('function onLoad Fired');
  }

  static async onSave(context: Xrm.Events.EventContext): Promise<void> {
    console.log('function onSave Fired');
  }

  static async helpRequired(context: Xrm.Events.EventContext): Promise<void> {
    var DataverseAdvice: Boolean = context.getFormContext().getAttribute(AccountAttributes.dev_DataverseAdvice).getValue();
    if (DataverseAdvice === true) {
      return context.getFormContext().getAttribute(AccountAttributes.dev_GuideURL).getValue();
    }
  }
}