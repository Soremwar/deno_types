//import { CommonWrapper } from 'enzyme';

type CommonWrapper = unknown//CommonWrapper

export default function until<P = any, S = any>(
  selector: string,
  options: { context: any }
): CommonWrapper<P, S>;
