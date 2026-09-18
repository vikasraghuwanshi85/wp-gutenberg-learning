import { useBlockProps, RichText } from '@wordpress/block-editor';
export default function Save({ attributes }) {
    return (
        <div {...useBlockProps.save({ style: { background: attributes.bgColor, padding: '40px', borderRadius: '16px', color: 'white' } })}>
            <RichText.Content tagName="h2" value={attributes.title} />
            <RichText.Content tagName="p" value={attributes.content} />
        </div>
    );
}
