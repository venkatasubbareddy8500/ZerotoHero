import { LightningElement } from 'lwc';

export default class LifeCycleHooksParent extends LightningElement {
    isChildVisible = false
    constructor(){
        super()
        console.log("Parent Construcotr Called")
    }

    connectedCallback(){
        console.log("Parent connectedCallback Called")
    }

    renderedCallback(){
        console.log("Parent renderedCallback Called") 
    }
//     name
//     changeHandler(event){
        
//         this.name = event.target.value
//     }
// }
    handleClick(){
        this.isChildVisible = !this.isChildVisible
}
}