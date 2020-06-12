import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

function Content({ json }) {
    return (
        <div>{documentToReactComponents(json)}</div>
    );
}
export default Content;