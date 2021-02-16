export namespace IStore {
  export interface IState {
    textHistory: ILorem[];
  }
}

export interface ILorem {
  original: string;
  parsed: string[];
}