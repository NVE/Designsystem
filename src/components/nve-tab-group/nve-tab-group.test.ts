import { afterEach, describe, expect, it } from 'vitest';
import { fixture, fixtureCleanup } from '@open-wc/testing';
import { html } from 'lit';
import NveTabGroup from './nve-tab-group.component';
import NveTab from '../nve-tab/nve-tab.component';
import NveTabPanel from '../nve-tab-panel/nve-tab-panel.component';

if (!customElements.get('nve-tab-group')) {
  customElements.define('nve-tab-group', NveTabGroup);
}

if (!customElements.get('nve-tab')) {
  customElements.define('nve-tab', NveTab);
}

if (!customElements.get('nve-tab-panel')) {
  customElements.define('nve-tab-panel', NveTabPanel);
}

/**
 * Hjelper for å trigge slotchange hendelse i tab group. Trengs for å kalle syncTabsAndPanels i testene.
 */
async function triggerSlotChange(tabGroup: NveTabGroup, slotName = 'nav') {
  const newEl = document.createElement('div');
  newEl.setAttribute('slot', slotName);

  const slot = tabGroup.shadowRoot?.querySelector(`slot[name="${slotName}"]`);
  await new Promise<void>((resolve) => {
    slot?.addEventListener(
      'slotchange',
      async () => {
        await tabGroup.updateComplete;
        resolve();
      },
      { once: true }
    );
    tabGroup.appendChild(newEl);
  });
}

describe('nve-tab-group', () => {
  afterEach(() => {
    fixtureCleanup();
  });

  it('has role tablist', async () => {
    const tabGroup = await fixture<NveTabGroup>(html`<nve-tab-group></nve-tab-group>`);
    expect(tabGroup.getAttribute('role')).toBe('tablist');
  });

  it('has aria-controls on each tab corresponding to the correct tab they control', async () => {
    const tabGroup = await fixture<NveTabGroup>(
      html`<nve-tab-group>
        <nve-tab slot="nav" panel="panel-1">tab 1</nve-tab>
        <nve-tab slot="nav" panel="panel-2">tab 2</nve-tab>

        <nve-tab-panel name="panel-1">this is panel 1</nve-tab-panel>
        <nve-tab-panel name="panel-2">this is panel 2</nve-tab-panel>
      </nve-tab-group>`
    );

    await triggerSlotChange(tabGroup);

    const tabs = tabGroup.querySelectorAll('nve-tab');
    const panels = tabGroup.querySelectorAll('nve-tab-panel');
    tabs.forEach((tab) => {
      const panel = Array.from(panels).find(
        (p) => p.getAttribute('id') === tab.getAttribute('aria-controls')
      ) as NveTabPanel;
      expect(panel).toBeDefined();
      expect(tab.getAttribute('aria-controls')).toBe(panel.id);
    });
  });

  it('has large default size on the group, and all tabs have large propertiy attached to them', async () => {
    const tabGroup = await fixture<NveTabGroup>(
      html` <nve-tab-group>
        <nve-tab slot="nav" panel="panel-1">tab 1</nve-tab>
        <nve-tab slot="nav" panel="panel-2">tab 2</nve-tab>

        <nve-tab-panel name="panel-1">this is panel 1</nve-tab-panel>
        <nve-tab-panel name="panel-2">this is panel 2</nve-tab-panel>
      </nve-tab-group>`
    );
    const tabs = tabGroup.querySelectorAll('nve-tab');
    expect(tabGroup.size).toBe('large');
    tabs.forEach((tab) => {
      expect(tab.size).toBe('large');
    });
  });

  it('has proper aria-labelledby', async () => {
    const wrapper = await fixture(
      html`<div>
        <span id="label">Tab group 1</span>
        <nve-tab-group ariaLabelId="label"></nve-tab-group>
      </div>`
    );
    const tabGroup = wrapper.querySelector('nve-tab-group');
    expect(tabGroup?.getAttribute('aria-labelledby')).toBe('label');
  });

  it('updates activeTab when a tab is clicked', async () => {
    const tabGroup = await fixture<NveTabGroup>(
      html` <nve-tab-group activeTab="panel-1">
        <nve-tab slot="nav" panel="panel-1">tab 1</nve-tab>
        <nve-tab slot="nav" panel="panel-2">tab 2</nve-tab>
        <nve-tab-panel name="panel-1">this is panel 1</nve-tab-panel>
        <nve-tab-panel name="panel-2">this is panel 2</nve-tab-panel>
      </nve-tab-group>`
    );

    expect(tabGroup.activeTab).toBe('panel-1');
    // Finn andre fanen
    const secondTab = tabGroup.querySelectorAll('nve-tab')[1];
    expect(secondTab).toBeDefined();

    // Simulere musklikk på den andre fanen
    secondTab.dispatchEvent(new MouseEvent('click', { bubbles: true, composed: true }));

    expect(tabGroup.activeTab).toBe('panel-2');
  });

  it('navigates focus on ArrowLeft, ArrowRight, Home, and End keys', async () => {
    const tabGroup = await fixture<NveTabGroup>(html`
      <nve-tab-group>
        <nve-tab slot="nav" panel="panel-1">Tab 1</nve-tab>
        <nve-tab slot="nav" panel="panel-2">Tab 2</nve-tab>
        <nve-tab slot="nav" panel="panel-3">Tab 3</nve-tab>
        <nve-tab-panel name="panel-1"></nve-tab-panel>
        <nve-tab-panel name="panel-2"></nve-tab-panel>
        <nve-tab-panel name="panel-3"></nve-tab-panel>
      </nve-tab-group>
    `);

    await triggerSlotChange(tabGroup);

    const tabs = Array.from(tabGroup.querySelectorAll('nve-tab'));

    // Fokusere første tab
    tabs[0].focus();

    // Simulere tastetrykk
    const dispatchKey = (key: string) => {
      const event = new KeyboardEvent('keydown', { key, bubbles: true, cancelable: true });
      document.activeElement?.dispatchEvent(event);
    };

    dispatchKey('ArrowRight');
    expect(document.activeElement).toBe(tabs[1]);

    dispatchKey('ArrowRight');
    expect(document.activeElement).toBe(tabs[2]);

    dispatchKey('ArrowRight');
    expect(document.activeElement).toBe(tabs[0]);

    dispatchKey('ArrowLeft');
    expect(document.activeElement).toBe(tabs[2]);

    dispatchKey('Home');
    expect(document.activeElement).toBe(tabs[0]);

    dispatchKey('End');
    expect(document.activeElement).toBe(tabs[2]);
  });
});
