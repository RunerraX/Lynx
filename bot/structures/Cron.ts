
import { LynxClient } from "../client/client.ts";
import client from "../index.ts";

export class Cron {
    public name: string
    public description: string
    public enabled: boolean
    public repeatTime: number //in miliseconds
    public client: LynxClient = client
    public excludeRunOnStart: boolean


    
    constructor(options: ICronOptions) {
        this.name = options.name;
        this.description = options.description
        this.enabled = options.enabled
        this.repeatTime = options.repeatTime
        this.excludeRunOnStart = options.excludeRunOnStart

    }

    public async cronExecute() {

    }


}


export interface ICronOptions {
    name: string
    description: string
    enabled: boolean
    repeatTime: number
    excludeRunOnStart: boolean

}