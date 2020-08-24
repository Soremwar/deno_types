//import { shallow, EnzymeSelector, ShallowRendererProps } from 'enzyme';

type shallow = unknown//typeof shallow
type ShallowOptions = unknown//ShallowOptions
/*
export interface ShallowOptions extends ShallowRendererProps {
  shallow: shallow;
  dive: boolean;
  untilSelector: EnzymeSelector;
}
*/
export default function createShallow(options?: Partial<unknown>): shallow;
