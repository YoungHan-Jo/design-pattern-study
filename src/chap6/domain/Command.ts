import { CeilingFan, GarageDoor, Light, Stereo } from "./objects";

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