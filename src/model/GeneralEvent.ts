export class GeneralEvent {
  public id?: number
  public title: string
  public start: Date
  public end: Date

  constructor (title: string, start: Date, end: Date) {
    this.title = title
    this.start = start
    this.end = end
  }
}
