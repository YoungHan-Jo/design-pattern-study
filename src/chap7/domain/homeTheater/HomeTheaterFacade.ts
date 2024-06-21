import { Amplifier } from "./Amplifier";
import { PopcornPopper } from "./PopcornPopper";
import { Projector } from "./Projector";
import { Screen } from "./Screen";
import { StreamingPlayer } from "./SteamingPlayer";
import { TheaterLights } from "./TheaterLights";

export class HomeTheaterFacade {
    private amp: Amplifier;
    private player: StreamingPlayer;
    private projector: Projector;
    private lights: TheaterLights;
    private screen: Screen;
    private popper: PopcornPopper;

    constructor(amp: Amplifier, player: StreamingPlayer, projector: Projector, lights: TheaterLights, screen: Screen, popper: PopcornPopper) {
        this.amp = amp;
        this.player = player;
        this.projector = projector;
        this.lights = lights;
        this.screen = screen;
        this.popper = popper;
    }

    public watchMovie(movie: string): void {
        console.log('Get ready to watch a movie...');
        this.popper.on();
        this.popper.pop();
        this.lights.dim(10);
        this.screen.down();
        this.projector.on();
        this.projector.wideScreenMode();
        this.amp.on();
        this.amp.setStreamingPlayer(this.player);
        this.amp.setSurroundSound();
        this.amp.setVolume(5);
        this.player.on();
        this.player.play(movie);
    }

    public endMovie(): void {
        console.log('Shutting movie theater down...');
        this.popper.off();
        this.lights.on();
        this.screen.up();
        this.projector.off();
        this.amp.off();
        this.player.stop();
        this.player.off();
    }
}