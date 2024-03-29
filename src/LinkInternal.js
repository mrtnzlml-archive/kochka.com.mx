// @flow

import * as React from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { type AllCSSProperties } from '@adeira/sx';
import {
  Link as SXLink,
  Text,
  type TextSupportedSize,
  type TextSupportedWeight,
} from '@adeira/sx-design';

type Props = {
  +href: string,
  +children: React.Node,
  +xstyle?: AllCSSProperties,
  +size?: TextSupportedSize,
  +weight?: TextSupportedWeight,
};

/**
 * Use this link without worrying about the route language to navigate inside the application:
 *
 * ```
 * <LinkInternal href="/menu">Menu</LinkInternal>
 * ```
 *
 * (no `/en/menu` and similar)
 */
export default function LinkInternal(props: Props): React.Node {
  const router = useRouter();
  const isActive = router.pathname === props.href;

  return (
    <Text size={props.size} weight={props.weight}>
      <NextLink href={props.href} locale={router.locale} passHref={true}>
        <SXLink href={props.href} isActive={isActive} xstyle={props.xstyle}>
          {props.children}
        </SXLink>
      </NextLink>
    </Text>
  );
}
