import { LightningElement } from 'lwc';

export default class C2pModalComponent extends LightningElement {
    closeHandler() { 

        const myEvent= new CustomEvent('close', {
            detail: "Hello from Modal closed successfully!!!"
        }) 

        this.dispatchEvent(myEvent) 

    } 
}