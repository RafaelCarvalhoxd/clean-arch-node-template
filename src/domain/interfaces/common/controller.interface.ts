export interface IController<I, O> {
  handle(dto: I): Promise<O>;
}
