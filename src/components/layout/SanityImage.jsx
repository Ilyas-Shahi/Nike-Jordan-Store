import ImageUrlBuilder from '@sanity/image-url';

import NikeLoading from '../../assets/nike-loading.jpeg';

const builder = new ImageUrlBuilder({
  projectId: '6tbteecs',
  dataset: 'production',
  useCdn: true,
});

function urlFor(source) {
  return builder.image(source);
}

const SanityImage = ({ imageRef, className }) => {
  return (
    <img
      src={imageRef ? urlFor(imageRef).url() : NikeLoading}
      alt=""
      className={className}
    />
  );
};

export default SanityImage;
