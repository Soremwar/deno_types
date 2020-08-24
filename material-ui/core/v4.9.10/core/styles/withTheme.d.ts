import { Theme } from './createMuiTheme.d.ts';
import { PropInjector } from '../../../../types/v5.1.0/index.d.ts';

export interface WithTheme {
  theme: Theme;
}

export interface ThemedComponentProps extends Partial<WithTheme> {
  /**
   * Deprecated. Will be removed in v5. Refs are now automatically forwarded to
   * the inner component.
   * @deprecated since version 4.0
   */
  innerRef?: React.Ref<any>;
  ref?: React.Ref<unknown>;
}

declare const withTheme: PropInjector<WithTheme, ThemedComponentProps>;

export default withTheme;