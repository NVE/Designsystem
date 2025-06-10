import { beforeAll, afterAll, suite, test } from 'vitest';
import { type LocatorSelectors } from '@vitest/browser/context';
import { assert, fixture, fixtureCleanup } from '@open-wc/testing';
import NveBadge from './nve-badge.component';
import { getElementLocatorSelectors } from '@vitest/browser/utils';
import { html } from 'lit';

suite('Lit Component testing', () => {
  let el: NveBadge;
  //let elShadowRoot: string;
  let elLocator: LocatorSelectors;

  suite('Default', () => {
    beforeAll(async () => {
      el = await fixture(html` <nve-badge>primary</nve-badge> `);
      //elShadowRoot = el.shadowRoot?.innerHTML || '';
      elLocator = getElementLocatorSelectors(el);
    });

    afterAll(() => fixtureCleanup());

    test('Riktig innhold', () => {
      const content = elLocator.getByText('primary');
      assert.isOk(content);
    });
  });
});
