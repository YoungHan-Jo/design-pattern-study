export interface Turkey {
  gobble(): void;
  fly(): void;
}

export class WildTurkey implements Turkey {
  gobble(): void {
    console.log('Gobble gobble');
  }

  fly(): void {
    console.log('I am flying a short distance');
  }
}
