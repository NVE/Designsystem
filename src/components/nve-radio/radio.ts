import { html } from 'lit';
const table = html`
    <hr />
    <h3>Radio</h3>
    <table class="demo">
        <thead>
            <tr>
                <th></th>
                <th>Default</th>
                <th>Disabled</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Unchecked</td>
                <td>
                    <nve-radio-group value="">
                        <nve-radio value="1"></nve-radio>
                    </nve-radio-group>
                </td>
                <td>
                    <nve-radio-group value="">
                        <nve-radio value="1" disabled></nve-radio>
                    </nve-radio-group>
                </td>
            </tr>
            <tr>
                <td>Checked</td>
                <td>
                    <nve-radio-group value="1">
                        <nve-radio value="1"></nve-radio>
                    </nve-radio-group>
                </td>
                <td>
                    <nve-radio-group value="1">
                        <nve-radio value="1" disabled></nve-radio>
                    </nve-radio-group>
                </td>
            </tr>
        </tbody>
    </table>

    <h3>Radio with label</h3>
    <table class="demo">
        <thead>
            <tr>
                <th></th>
                <th>Unchecked</th>
                <th>Checked</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Default</td>
                <td>
                    <nve-radio-group value="">
                        <nve-radio value="1">Unchecked</nve-radio>
                    </nve-radio-group>
                </td>
                <td>
                    <nve-radio-group value="1">
                        <nve-radio value="1">Checked</nve-radio>
                    </nve-radio-group>
                </td>
            </tr>
            <tr>
                <td>Disabled</td>
                <td>
                    <nve-radio-group value="">
                        <nve-radio value="1" disabled>Unchecked</nve-radio>
                    </nve-radio-group>
                </td>
                <td>
                    <nve-radio-group value="1">
                        <nve-radio value="1" disabled>Checked</nve-radio>
                    </nve-radio-group>
                </td>
            </tr>            
        </tbody>
    </table>
`;

export default table;