import { CeilingFan, GarageDoor, Light, Stereo } from "./objects";
import { Hottub } from "./objects/Hottub";
import { TV } from "./objects/Tv";

export interface Command {
    excute(): void;
    undo(): void;
}

export class NoCommand implements Command {
    excute(): void {
        console.log('No command');
    }
    undo(): void {
        console.log('No command');
    }
}

export class LightOnCommand implements Command {
    private light: Light;
    constructor(light: Light) {
        this.light = light;
    }
    excute(): void {
        this.light.on();
    }

    undo(): void {
        this.light.off();
    }
}

export class LightOffCommand implements Command {
    private light: Light;
    constructor(light: Light) {
        this.light = light;
    }
    excute(): void {
        this.light.off();
    }

    undo(): void {
        this.light.on();
    }
}

export class GarageDoorOpenCommand implements Command {
    private garageDoor: GarageDoor;
    constructor(garageDoor: GarageDoor) {
        this.garageDoor = garageDoor;
    }
    excute(): void {
        this.garageDoor.up();
    }

    undo(): void {
        this.garageDoor.down();
    }
}

export class CeilingFanOnCommand implements Command {
    private ceilingFan: CeilingFan;
    constructor(ceilingFan: CeilingFan) {
        this.ceilingFan = ceilingFan;
    }
    excute(): void {
        this.ceilingFan.high();
    }

    undo(): void {
        this.ceilingFan.off();
    }
}

export class CeilingFanOffCommand implements Command {
    private ceilingFan: CeilingFan;
    constructor(ceilingFan: CeilingFan) {
        this.ceilingFan = ceilingFan;
    }
    excute(): void {
        this.ceilingFan.off();
    }

    undo(): void {
        this.ceilingFan.high();
    }
}

export class StereoOnWithCDCommand implements Command {
    private stereo: Stereo;

    constructor(stereo: Stereo) {
        this.stereo = stereo;
    }
    excute(): void {
        this.stereo.on();
        this.stereo.setCD();
        this.stereo.setVolume(11);
    }

    undo(): void {
        this.stereo.off();
    }
}

export class StereoOffCommand implements Command {
    private stereo: Stereo;

    constructor(stereo: Stereo) {
        this.stereo = stereo;
    }
    excute(): void {
        this.stereo.off();
    }

    undo(): void {
        this.stereo.on();
        this.stereo.setCD();
        this.stereo.setVolume(11);
    }
}

export class TVOnCommand implements Command {
    private tv: TV;

    constructor(tv: TV) {
        this.tv = tv;
    }
    excute(): void {
        this.tv.on();
    }

    undo(): void {
        this.tv.off();
    }
}

export class TVOffCommand implements Command {
    private tv: TV;

    constructor(tv: TV) {
        this.tv = tv;
    }
    excute(): void {
        this.tv.off();
    }

    undo(): void {
        this.tv.on();
    }
}

export class HottubOnCommand implements Command {
    private hottub: Hottub;

    constructor(hottub: Hottub) {
        this.hottub = hottub;
    }
    excute(): void {
        this.hottub.on();
    }

    undo(): void {
        this.hottub.off();
    }
}

export class HottubOffCommand implements Command {
    private hottub: Hottub;

    constructor(hottub: Hottub) {
        this.hottub = hottub;
    }
    excute(): void {
        this.hottub.off();
    }

    undo(): void {
        this.hottub.on();
    }
}