import ResponsiveDrawer from "../components/ResponsiveDrawer";

function Entertainment() {
  return (
    <>
      <main>
        <h2>Entertainment</h2>
        <ResponsiveDrawer baseURL="https://newsapi.org/v2/top-headlines?category=entertainment&language=en&apiKey=ccee04ed2c9849c5869e896919422d80" />
      </main>
    </>
  );
}

export default Entertainment;
