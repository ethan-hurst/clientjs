/* eslint-disable*/
import { accountMetadata } from "./entities/Account";
import { contactMetadata } from "./entities/Contact";
import { systemuserMetadata } from "./entities/SystemUser";

export const Entities = {
  Account: "account",
  Contact: "contact",
  SystemUser: "systemuser",
};

// Setup Metadata
// Usage: setMetadataCache(metadataCache);
export const metadataCache = {
  entities: {
    account: accountMetadata,
    contact: contactMetadata,
    systemuser: systemuserMetadata,
  },
  actions: {
  }
};