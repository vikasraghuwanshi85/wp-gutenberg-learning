import { useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ColorPicker } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
    const { title, content, bgColor } = attributes;
    return (
        <>
            <InspectorCont rols>
                <PanelBody title="Settings">
                    <p>Background</p>
                    <ColorPicker color={bgColor} onChange={(c) => setAttributes({ bgColor: c })} />
                </PanelBody>
            </InspectorControls>
            <div {...useBlockProps({ style: { background: bgColor, padding: '40px', borderRadius: '16px', color: 'white' } })}>
                <RichText tagName="h2" value={title} onChange={(v) => setAttributes({ title: v })} />
                <RichText tagName="p" value={content} onChange={(v) => setAttributes({ content: v })} />
            </div>
        </>
    );
}
