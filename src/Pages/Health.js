import ResponsiveDrawer from "../components/ResponsiveDrawer";

function Health() {
  return (
    <>
      <main>
        <h2>Technology</h2>
        <ResponsiveDrawer baseURL="https://newsapi.org/v2/top-headlines?category=health&language=en&apiKey=ccee04ed2c9849c5869e896919422d80" />
      </main>
    </>
  );
}

export default Health;
