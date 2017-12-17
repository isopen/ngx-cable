import { NgModule } from '@angular/core';
import { NgXCable} from "./ngx-cable";
import { Broadcaster} from "./broadcaster";

@NgModule({
    providers: [
        NgXCable,
        Broadcaster
    ]
})
export class NgXCableModule { }