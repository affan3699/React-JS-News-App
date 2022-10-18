import ResponsiveDrawer from "../components/ResponsiveDrawer";

function Science() {
  return (
    <>
      <main>
        <h2>Science</h2>
        <ResponsiveDrawer baseURL="https://newsapi.org/v2/top-headlines?category=science&language=en&apiKey=ccee04ed2c9849c5869e896919422d80" />
      </main>
    </>
  );
}

export default Science;
