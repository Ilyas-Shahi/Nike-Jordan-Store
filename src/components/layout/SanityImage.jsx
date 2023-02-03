import ImageUrlBuilder from '@sanity/image-url';

const builder = new ImageUrlBuilder({
  projectId: '6tbteecs',
  dataset: 'production',
  useCdn: true,
});

function urlFor(source) {
  return builder.image(source);
}

const SanityImage = ({ imageRef, className }) => {
  return <img src={urlFor(imageRef).url()} alt="" className={className} />;
};

export default SanityImage;
