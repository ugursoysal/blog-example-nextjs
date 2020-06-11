import Layout from '../components/Layout';

const accessToken =
  "QI9D_FaZl0C4xcAumUAqOtH8GdsfuH9-tGTq7xlKG_8";
const spaceId = "hhcmah4wkfxr";

const query = `{
    blogPostCollection{
      items{
       title,
        dateTime,
        published,
        location{
          lat,lon
        },
        image{
          url
        }
      }
    }
  }`;

const Index = () => {
    fetch(
        `https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/master`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${accessToken}`
          },
          body: JSON.stringify({
            query
          })
        }
      )
        .then(res => res.json())
        .then(response => {
            console.log(response);
            /*
          console.log(response);
  
          const { data } = response;
          this.setState({
            loading: false,
            albums: data ? data.albumCollection.items : []
          });*/
        })
        .catch(error => {
            console.log(error);
          /*this.setState({
            loading: false,
            error: error.message
          });*/
        });
    return (
        <Layout>
            <article>Hi! Welcome to my blog page.</article>
        </Layout>
    );
}
export default Index