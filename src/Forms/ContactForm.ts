import { XrmContextCdsServiceClient } from "dataverse-ify";
import { ContactAttributes } from "../dataverse-gen/entities/Contact";

export class ContactForm {
  static async onLoad(context: Xrm.Events.EventContext): Promise<void> {
    context
      .getFormContext()
      .getAttribute("parentcustomerid")
      .addOnChange(() => {
        console.log("Account Name field triggered onchange");
      });
    console.log('function onLoad Fired');
    context.getFormContext().getAttribute(ContactAttributes.FullName).addOnChange(ContactForm.contactNameOnChange)
  }

  static async onSave(context: Xrm.Events.EventContext): Promise<void> {
    console.log('function onSave Fired');
  }

  static async contactNameOnChange(context: Xrm.Events.EventContext): Promise<void>{
    console.log("Full name field has changed!")
  }
}