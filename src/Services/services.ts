import {Injectable} from '@angular/core';
import { InstanceCheck } from '@ionic-native/core';

@Injectable()

export class service{

    codetribers=[];
    details=[];
    block=[];
    
    constructor(){
        this.codetribers=[
            {name:'Neo', surname:'Sehlabane', age:'28', pic:'2b390e67261983.5b3673a5b9ef9.jpg', position: 'Facilitator', department:'Codetribe'},
            {name:'Lwazi', surname:'Tongo', age:'22', pic:'2fc4f467261983.5b352cf88c74f.jpg', position: 'Scrum master', department: 'West Inc.'},
            {name:'Carol', surname:'Xaba', age:'27',pic:'22f99867261983.5b3fa169a61c2.jpg', position: 'Lead programmer', department: 'North Gods'},
            {name:'Khensani', surname:'Mathebula', age:'24', pic:'55a78667261983.5b3f9c8a8613b.jpg', position: 'Programmer', department: 'North Gods'},
            {name:'Romeo', surname:'Ngobeni', age:'27', pic:'effffb67261983.5b3377842c6a3.jpg', position: 'Lead programmer', department: 'West Inc.'},
            {name:'Senzi', surname:'Zwane', age:'23', pic:'eaeb8b67261983.5b34a4dcdc537.jpg', position: 'Scrum master', department: 'North Gods'},
            {name:'Maria', surname:'Aphane', age:'27', pic:'eaeb8b67261983.5b34a4dcdc537.jpg', position: 'Programmer', department: 'West Inc.'},
        ]


    }

    getCodetribers(){
        return this.codetribers
    }
    addDetails(index:number){
    this.details.push(this.codetribers[index]);
    }
    getDetails(){
    return this.details
    }

    getBlock(){
    return this.block
    }
}