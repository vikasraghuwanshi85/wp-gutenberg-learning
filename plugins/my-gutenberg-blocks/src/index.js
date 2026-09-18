import { registerBlockType } from '@wordpress/blocks';
import Edit from './hero-edit';
import Save from './hero-save';
import metadataHero from '../blocks/hero/block.json';
import metadataStats from '../blocks/stats/block.json';
import './editor.scss';
import './style.scss';

// Static block - Hero
registerBlockType(metadataHero.name, {
    ...metadataHero,
    edit: Edit,
    save: Save,
});

// Dynamic block - Stats (edit only, save handled by PHP)
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, RangeControl, TextControl } from '@wordpress/components';

registerBlockType(metadataStats.name, {
    ...metadataStats,
    edit: ({ attributes, setAttributes }) => {
        return (
            <>
                <InspectorControls>
                    <PanelBody>
                        <RangeControl label="Number" value={attributes.number} onChange={(v) => setAttributes({ number: v })} min={0} max={1000} />
                        <TextControl label="Label" value={attributes.label} onChange={(v) => setAttributes({ label: v })} />
                    </PanelBody>
                </InspectorControls>
                <div {...useBlockProps({ style: { padding: 20, border: '2px dashed #ccc' } })}>
                    <strong>{attributes.number}+ {attributes.label} (Preview)</strong>
                </div>
            </>
        );
    },
    save: () => null
});
