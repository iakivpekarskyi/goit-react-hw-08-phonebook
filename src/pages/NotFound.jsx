const NotFound = () => {
  return (
    <main
      style={{
        display: 'grid',
        placeItems: 'center',
      }}
    >
      <h1>Sorry, wrong URL.</h1>
      <img
        src="https://i.gifer.com/7VE.gif"
        alt=""
        style={{
          width: '100%',
          height: 'auto',
        }}
      />
      <p></p>
    </main>
  );
};

export default NotFound;
