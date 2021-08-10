import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; // targeting the browser -> need to bootstrap for that platform -> has a bootstrap module function on it -> use to bootstrap the root module on the platform
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);