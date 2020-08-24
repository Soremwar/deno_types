import { GenerateId } from '../../../../jss/v10.4.0/jss.d.ts';

export interface GenerateClassNameOptions {
  disableGlobal?: boolean;
  productionPrefix?: string;
  seed?: string;
}

export default function createGenerateClassName(options?: GenerateClassNameOptions): GenerateId;
