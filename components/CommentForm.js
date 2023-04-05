import styled from "styled-components";
const Layout = styled.input`
  height: 4rem;
  width: 90%;
`;

export default function CommentForm({ slug, artPiecesInfo, setArtPiecesInfo }) {
  function handleSubmit(event) {
    event.preventDefault();

    setArtPiecesInfo(
      artPiecesInfo.map((el) => {
        if (el.slug === slug) {
          return { ...el, comment: event.target.newComment.value };
        }
        return el;
      })
    );
    event.target.reset();
  }
  return (
    <>
      <h3>Add your Comment</h3>
      <form onSubmit={handleSubmit}>
        <Layout type="text" name="newComment"></Layout>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
