import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

function Content({ json, style }) {
    return (
        <div className={style}>{documentToReactComponents(json)}</div>
    );
}
export default Content;