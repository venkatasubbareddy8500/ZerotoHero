import { LightningElement, track } from 'lwc';

export default class PubsubParent extends LightningElement {
    @track message;
    @track messageFromChild;
    sendDataToChild(event){
        this.message = 'Message From Parent!!!!'
    }
    handlechildMessage(event){
        this.messageFromChild = event.detail;
    }
}