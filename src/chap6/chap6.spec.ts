import { CeilingFanOffCommand, CeilingFanOnCommand, GarageDoorOpenCommand, LightOffCommand, LightOnCommand, StereoOffCommand, StereoOnWithCDCommand } from "./domain/Command";
import { RemoteControl } from "./domain/RemoteControl";
import { RemoteControlWithUndo } from "./domain/RemoteControlWithUndo";
import { SimpleRemoteControl } from "./domain/SimpleRemoteControl"
import { CeilingFan, GarageDoor, Light, Stereo } from "./domain/objects";

describe('chap6', () => {

    const consoleSpy = jest.spyOn(console, 'log');

    it('remote control test', () => {
        // Given
        const remote = new SimpleRemoteControl();

        const light = new Light();
        const lightOn = new LightOnCommand(light);
        const garageDoor = new GarageDoor();
        const garageDoorOpen = new GarageDoorOpenCommand(garageDoor);

        // When
        remote.setCommand(lightOn);
        remote.buttonWasPressed();
        remote.setCommand(garageDoorOpen);
        remote.buttonWasPressed();


        // Then
        expect(consoleSpy).toHaveBeenCalledWith('Living Room Light is on')
        expect(consoleSpy).toHaveBeenCalledWith('Garage door is up')
    })

    it('romete loader', () => {
        // Given
        const remoteControl = new RemoteControl();

        const livingRoomLight = new Light('Living Room');
        const kitchenLight = new Light('Kitchen');
        const ceilingFan = new CeilingFan('Living Room');
        const garageDoor = new GarageDoor("Garage");
        const stereo = new Stereo('Living Room');

        const livingRoomLightOn = new LightOnCommand(livingRoomLight);
        const livingRoomLightOff = new LightOffCommand(livingRoomLight);
        const kitchenLightOn = new LightOnCommand(kitchenLight);
        const kitchenLightOff = new LightOffCommand(kitchenLight);

        const ceilingFanOn = new CeilingFanOnCommand(ceilingFan);
        const ceilingFanOff = new CeilingFanOffCommand(ceilingFan);

        const stereoOnWithCD = new StereoOnWithCDCommand(stereo);
        const steroOff = new StereoOffCommand(stereo);

        remoteControl.setCommand({
            slot: 0,
            onCommand: livingRoomLightOn,
            offCommand: livingRoomLightOff
        });

        remoteControl.setCommand({
            slot: 1,
            onCommand: kitchenLightOn,
            offCommand: kitchenLightOff
        });

        remoteControl.setCommand({
            slot: 2,
            onCommand: ceilingFanOn,
            offCommand: ceilingFanOff
        });

        remoteControl.setCommand({
            slot: 3,
            onCommand: stereoOnWithCD,
            offCommand: steroOff
        });

        // When
        console.log(remoteControl.toString());

        remoteControl.onButtonWasPushed(0);
        remoteControl.offButtonWasPushed(0);
        remoteControl.onButtonWasPushed(1);
        remoteControl.offButtonWasPushed(1);
        remoteControl.onButtonWasPushed(2);
        remoteControl.offButtonWasPushed(2);
        remoteControl.onButtonWasPushed(3);
        remoteControl.offButtonWasPushed(3);


        // Then


    })

    it('romete loader with undo', () => {
        // Given
        const remoteControl = new RemoteControlWithUndo();

        const livingRoomLight = new Light('Living Room');
        const kitchenLight = new Light('Kitchen');
        const ceilingFan = new CeilingFan('Living Room');
        const garageDoor = new GarageDoor("Garage");
        const stereo = new Stereo('Living Room');

        const livingRoomLightOn = new LightOnCommand(livingRoomLight);
        const livingRoomLightOff = new LightOffCommand(livingRoomLight);
        const kitchenLightOn = new LightOnCommand(kitchenLight);
        const kitchenLightOff = new LightOffCommand(kitchenLight);

        const ceilingFanOn = new CeilingFanOnCommand(ceilingFan);
        const ceilingFanOff = new CeilingFanOffCommand(ceilingFan);

        const stereoOnWithCD = new StereoOnWithCDCommand(stereo);
        const steroOff = new StereoOffCommand(stereo);

        remoteControl.setCommand({
            slot: 0,
            onCommand: livingRoomLightOn,
            offCommand: livingRoomLightOff
        });

        remoteControl.setCommand({
            slot: 1,
            onCommand: kitchenLightOn,
            offCommand: kitchenLightOff
        });

        remoteControl.setCommand({
            slot: 2,
            onCommand: ceilingFanOn,
            offCommand: ceilingFanOff
        });

        remoteControl.setCommand({
            slot: 3,
            onCommand: stereoOnWithCD,
            offCommand: steroOff
        });

        // When
        console.log(remoteControl.toString());

        remoteControl.onButtonWasPushed(0);
        remoteControl.offButtonWasPushed(0);
        remoteControl.undoButtonWasPushed();

        console.log(remoteControl.toString());

        // Then


    })

})