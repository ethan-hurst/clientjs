export class ContactForm {
    static async onLoad(context: Xrm.Events.EventContext): Promise<void> {
      context
        .getFormContext()
        .getAttribute("name")
        .addOnChange(() => {
          console.log("name onchange");
        });
    }
  
    static async onSave(context: Xrm.Events.EventContext): Promise<void>{
      console.debug('name OnSave')
    }
  }
  
  