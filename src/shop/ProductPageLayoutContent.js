// @flow

import { graphql, QueryRenderer } from '@adeira/relay';
import sx from '@adeira/sx';
import { Note, Text, Image, Money, LayoutBlock } from '@adeira/sx-design';
import fbt from 'fbt';
import React, { type Node } from 'react';
import { useRouter } from 'next/router';

import useViewerContext from '../hooks/useViewerContext';

export default function ProductPageLayoutContent(): Node {
  const router = useRouter();
  const viewerContext = useViewerContext();
  const productKey = router.query.product_key;

  return (
    <QueryRenderer
      query={graphql`
        query ProductPageLayoutContentQuery($clientLocale: SupportedLocale!, $productKey: ID!) {
          commerce {
            product: getPublishedProductByKey(
              clientLocale: $clientLocale
              productKey: $productKey
            ) {
              name
              description
              price {
                unitAmount
                unitAmountCurrency
              }
              images {
                blurhash
                url
              }
            }
          }
        }
      `}
      variables={{
        clientLocale: viewerContext.languageTag.graphql,
        productKey,
      }}
      onResponse={({ commerce: { product } }) => {
        return (
          <div className={styles('layout')}>
            <LayoutBlock>
              {product.images.map((image) => (
                <Image
                  key={image.url}
                  src={image.url}
                  alt={product.name}
                  blurhash={image.blurhash}
                />
              ))}
            </LayoutBlock>

            <LayoutBlock spacing="large">
              <Text as="h1">{product.name}</Text>

              <Text size={24} weight={400}>
                <Money
                  priceUnitAmount={
                    product.price.unitAmount / 100 // adjusted for centavo
                  }
                  priceUnitAmountCurrency={product.price.unitAmountCurrency}
                />
              </Text>

              <p className={styles('description')}>{product.description}</p>

              <Note tint="warning">
                <fbt desc="not about all our products being available only in person">
                  All our products are currently available only in person in our café. We are
                  working on making them available online as well.
                </fbt>
              </Note>
            </LayoutBlock>
          </div>
        );
      }}
    />
  );
}

const styles = sx.create({
  layout: {
    'display': 'grid',
    'gap': '2rem',
    '@media (min-width: 600px)': {
      gridTemplateColumns: '1fr 1fr',
    },
  },
  description: {
    paddingBlock: 0,
    marginBlock: 0,
    whiteSpace: 'pre-line',
  },
});
