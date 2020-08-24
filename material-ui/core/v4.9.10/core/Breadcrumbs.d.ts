import * as React from '../../../../react/v16.13.1/react.d.ts';
import { OverridableComponent, OverrideProps } from '../OverridableComponent.d.ts';

export interface BreadcrumbsTypeMap<P = {}, D extends React.ElementType = 'nav'> {
  props: P & {
    itemsAfterCollapse?: number;
    itemsBeforeCollapse?: number;
    maxItems?: number;
    separator?: React.ReactNode;
  };
  defaultComponent: D;
  classKey: BreadcrumbsClassKey;
}

/**
 *
 * Demos:
 *
 * - [Breadcrumbs](https://material-ui.com/components/breadcrumbs/)
 *
 * API:
 *
 * - [Breadcrumbs API](https://material-ui.com/api/breadcrumbs/)
 */
declare const Breadcrumbs: OverridableComponent<BreadcrumbsTypeMap>;

export type BreadcrumbsClassKey = 'root' | 'ol' | 'li' | 'separator';

export type BreadcrumbsProps<
  D extends React.ElementType = BreadcrumbsTypeMap['defaultComponent'],
  P = {}
> = OverrideProps<BreadcrumbsTypeMap<P, D>, D>;

export default Breadcrumbs;
