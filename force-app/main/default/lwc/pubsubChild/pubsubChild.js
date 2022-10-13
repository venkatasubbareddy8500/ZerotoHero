import { LightningElement, api } from 'lwc';

export default class PubsubChild extends LightningElement {
    @api textMessage;
    sendMessageToParent(event){
        const sendMessageFromChild = new CustomEvent('childmessage', {detail: 'I am your Child'});
        this.dispatchEvent(sendMessageFromChild);
    }
}