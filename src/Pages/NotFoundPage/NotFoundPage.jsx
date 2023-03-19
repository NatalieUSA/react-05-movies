const NotFoundPage = () => {
  return (
    <div
      style={{ textAlign: 'center', backgroundColor: 'red', opacity: '95%' }}
    >
      {/* <Link to="/">back to Home page</Link> */}
      <h2 style={{ fontSize: 44, color: 'white' }}>
        Sorry, we couldn't find that movie :(
      </h2>
      <img
        src="https://media.istockphoto.com/id/1172451964/vector/cat-eating-popcorn-in-movie-theater-cute-cartoon-character-film-show-cinema-background.jpg?s=612x612&w=0&k=20&c=X2AliN_yO43HaC5tsaf39eVOSwt-pGCyxM9FTHENs8w="
        alt="Not Found "
      />
    </div>
  );
};
export default NotFoundPage;
