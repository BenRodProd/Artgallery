export default function onToggleFavorite({ artPiecesInfo, slug }) {
  function onToggleFavorite() {
    const thisSlug = artPiecesInfo.find((el) => el.slug === slug);
    const thisSlugLike = thisSlug.isLike;
    setArtPiecesInfo(
      artPiecesInfo.map((el) => {
        if (el.slug === slug) {
          return { ...el, isLike: !thisSlugLike };
        }
        return { ...el };
      })
    );
  }
}
