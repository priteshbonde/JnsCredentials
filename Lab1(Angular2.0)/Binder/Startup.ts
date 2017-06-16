import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CustomerModuleLibrary } from '../Binder/CustomerModuleLibrary';
const platform = platformBrowserDynamic();
platform.bootstrapModule(CustomerModuleLibrary);
