export interface IProps {
  style?: Record<any, any>
  children?: any
  ref?: any
  key?: any
}

export type AppProps = {
  message: string;
  count: number;
  names: string[];
  obj: {};
  onSomething: Function;
  /** Function that doesn't take or return anything */
  onClick: () => void;
  /** Function with named prop */
  onChange: (value: number | string) => void;
  /** Alternative function type syntax that takes an event */
};