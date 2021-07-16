/* eslint-disable*/
import { accountMetadata } from "./entities/Account";
import { contactMetadata } from "./entities/Contact";
import { dev_budgetcategoryMetadata } from "./entities/dev_BudgetCategory";
import { dev_monthlybudgetMetadata } from "./entities/dev_MonthlyBudget";
import { systemuserMetadata } from "./entities/SystemUser";

export const Entities = {
  Account: "account",
  Contact: "contact",
  dev_BudgetCategory: "dev_budgetcategory",
  dev_MonthlyBudget: "dev_monthlybudget",
  SystemUser: "systemuser",
};

// Setup Metadata
// Usage: setMetadataCache(metadataCache);
export const metadataCache = {
  entities: {
    account: accountMetadata,
    contact: contactMetadata,
    dev_budgetcategory: dev_budgetcategoryMetadata,
    dev_monthlybudget: dev_monthlybudgetMetadata,
    systemuser: systemuserMetadata,
  },
  actions: {
  }
};