//import { mount } from 'enzyme';

type mount = unknown//typeof mount;

export interface MountOptions {
  mount: mount;
  strict: boolean;
}

export default function createMount(
  options?: Partial<MountOptions>
): mount & {
  attachTo: HTMLElement;
  cleanUp(): void;
};
