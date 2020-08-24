//import { render } from 'enzyme';

type render = unknown //typeof render;

export interface RenderOptions {
  render: render;
}

export default function createRender(options?: Partial<RenderOptions>): render;
