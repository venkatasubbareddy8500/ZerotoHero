import { LightningElement } from 'lwc';

export default class LifeCycleHooksChild extends LightningElement {
    constructor(){
        super()
        console.log("Child Construcotr Called")
    }

    connectedCallback(){
        console.log("Child connectedCallback Called")
    }

    renderedCallback(){
        console.log("Child renderedCallback Called") 
    }

    disconnectedCallback(){
        alert('subbareddy hello')
    }
}