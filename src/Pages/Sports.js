import ResponsiveDrawer from "../components/ResponsiveDrawer";

function Sports() {
  return (
    <>
      <main>
        <h1>Sports</h1>
        <ResponsiveDrawer baseURL="https://newsapi.org/v2/top-headlines?category=sports&language=en&apiKey=ccee04ed2c9849c5869e896919422d80" />
      </main>
    </>
  );
}

export default Sports;
