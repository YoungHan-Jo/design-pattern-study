import {
  CeilingFanOffCommandWithPrevSpeed,
  CeilingFanHighCommand,
  CeilingFanMediumCommand,
} from './domain/CeilingFanCommand';
import {
  CeilingFanOffCommand,
  CeilingFanOnCommand,
  GarageDoorOpenCommand,
  HottubOffCommand,
  HottubOnCommand,
  LightOffCommand,
  LightOnCommand,
  StereoOffCommand,
  StereoOnWithCDCommand,
  TVOffCommand,
  TVOnCommand,
} from './domain/Command';
import { MacroCommand } from './domain/MacroCommand';
import { RemoteControl } from './domain/RemoteControl';
import { RemoteControlWithUndo } from './domain/RemoteControlWithUndo';
import { SimpleRemoteControl } from './domain/SimpleRemoteControl';
import { CeilingFan, GarageDoor, Light, Stereo } from './domain/objects';
import { Hottub } from './domain/objects/Hottub';
import { TV } from './domain/objects/Tv';

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
    expect(consoleSpy).toHaveBeenCalledWith('Living Room Light is on');
    expect(consoleSpy).toHaveBeenCalledWith('Garage door is up');
  });

  it('romete loader', () => {
    // Given
    const remoteControl = new RemoteControl();

    const livingRoomLight = new Light('Living Room');
    const kitchenLight = new Light('Kitchen');
    const ceilingFan = new CeilingFan('Living Room');
    const garageDoor = new GarageDoor('Garage');
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
      offCommand: livingRoomLightOff,
    });

    remoteControl.setCommand({
      slot: 1,
      onCommand: kitchenLightOn,
      offCommand: kitchenLightOff,
    });

    remoteControl.setCommand({
      slot: 2,
      onCommand: ceilingFanOn,
      offCommand: ceilingFanOff,
    });

    remoteControl.setCommand({
      slot: 3,
      onCommand: stereoOnWithCD,
      offCommand: steroOff,
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
  });

  it('romete loader with undo', () => {
    // Given
    const remoteControl = new RemoteControlWithUndo();

    const livingRoomLight = new Light('Living Room');
    const kitchenLight = new Light('Kitchen');
    const ceilingFan = new CeilingFan('Living Room');
    const garageDoor = new GarageDoor('Garage');
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
      offCommand: livingRoomLightOff,
    });

    remoteControl.setCommand({
      slot: 1,
      onCommand: kitchenLightOn,
      offCommand: kitchenLightOff,
    });

    remoteControl.setCommand({
      slot: 2,
      onCommand: ceilingFanOn,
      offCommand: ceilingFanOff,
    });

    remoteControl.setCommand({
      slot: 3,
      onCommand: stereoOnWithCD,
      offCommand: steroOff,
    });

    // When
    console.log(remoteControl.toString());

    remoteControl.onButtonWasPushed(0);
    remoteControl.offButtonWasPushed(0);
    remoteControl.undoButtonWasPushed();

    console.log(remoteControl.toString());

    // Then
  });

  it('ceiling fan remote control', () => {
    // Given
    const remoteControl = new RemoteControlWithUndo();

    const ceilingFan = new CeilingFan('Living Room');

    const ceilingFanMedium = new CeilingFanMediumCommand(ceilingFan);
    const ceilingFanHigh = new CeilingFanHighCommand(ceilingFan);
    const ceilingFanOff = new CeilingFanOffCommandWithPrevSpeed(ceilingFan);

    remoteControl.setCommand({
      slot: 0,
      onCommand: ceilingFanMedium,
      offCommand: ceilingFanOff,
    });

    remoteControl.setCommand({
      slot: 1,
      onCommand: ceilingFanHigh,
      offCommand: ceilingFanOff,
    });

    // When & Then
    remoteControl.onButtonWasPushed(0);
    expect(ceilingFan.getSpeed()).toBe(CeilingFan.MEDIUM);

    remoteControl.offButtonWasPushed(0);
    expect(ceilingFan.getSpeed()).toBe(CeilingFan.OFF);

    remoteControl.undoButtonWasPushed();
    expect(ceilingFan.getSpeed()).toBe(CeilingFan.MEDIUM);

    remoteControl.onButtonWasPushed(1);
    expect(ceilingFan.getSpeed()).toBe(CeilingFan.HIGH);

    remoteControl.undoButtonWasPushed();
    expect(ceilingFan.getSpeed()).toBe(CeilingFan.MEDIUM);
  });

  it('macro commands', () => {
    // Given
    const light = new Light('Living Room');
    const tv = new TV('Living Room');
    const stereo = new Stereo('Living Room');
    const hottub = new Hottub();

    const lightOn = new LightOnCommand(light);
    const stereoOn = new StereoOnWithCDCommand(stereo);
    const tvOn = new TVOnCommand(tv);
    const hottubOn = new HottubOnCommand(hottub);

    const lightOff = new LightOffCommand(light);
    const stereoOff = new StereoOffCommand(stereo);
    const tvOff = new TVOffCommand(tv);
    const hottubOff = new HottubOffCommand(hottub);

    const partyOn = [lightOn, stereoOn, tvOn, hottubOn];
    const partyOff = [lightOff, stereoOff, tvOff, hottubOff];

    const partyOnMacro = new MacroCommand(partyOn);
    const partyOffMacro = new MacroCommand(partyOff);

    const remoteControl = new RemoteControlWithUndo();

    remoteControl.setCommand({
      slot: 0,
      onCommand: partyOnMacro,
      offCommand: partyOffMacro,
    });

    // When & Then
    remoteControl.onButtonWasPushed(0);
    expect(consoleSpy).toHaveBeenCalledWith('Living Room Light is on');
    expect(consoleSpy).toHaveBeenCalledWith('Living Room Stereo is on');
    expect(consoleSpy).toHaveBeenCalledWith('Living Room TV is on');
    expect(consoleSpy).toHaveBeenCalledWith('Hottub is on');

    remoteControl.offButtonWasPushed(0);
    expect(consoleSpy).toHaveBeenCalledWith('Living Room Light is off');
    expect(consoleSpy).toHaveBeenCalledWith('Living Room Stereo is off');
    expect(consoleSpy).toHaveBeenCalledWith('Living Room TV is off');
    expect(consoleSpy).toHaveBeenCalledWith('Hottub is off');

    remoteControl.undoButtonWasPushed();
  });
});
