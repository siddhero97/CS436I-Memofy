import React from 'react';
import {Sheet} from '@shopify/polaris';
import {ItemSummaryLayout} from './components';
import {Item} from '../../../../store/item/types';

interface Props {
  item: Item;
  isOpen: boolean;
  onClose: () => void;
}

export default function ItemSummary({item, isOpen, onClose}: Props) {
  const sheetContentMarkup = isOpen ? (
    <>
      <style>
        {
          `[data-portal-id] [data-polaris-layer][data-polaris-overlay] + div {pointer-events: none;}
          body[data-lock-scrolling] {overflow-y: auto;}
          #ui[data-lock-scrolling-wrapper] {overflow: auto;}`
        }
      </style>
      <ItemSummaryLayout item={item} onClose={onClose} />
    </>
  ): null;

  return (
    <Sheet open={isOpen} onClose={onClose}>
      {sheetContentMarkup}
    </Sheet>
  );
}