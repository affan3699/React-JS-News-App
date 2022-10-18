import ResponsiveDrawer from "../components/ResponsiveDrawer";

function TopHeadlines() {
  return (
    <>
      <ResponsiveDrawer baseURL="https://newsapi.org/v2/top-headlines?language=en&apiKey=ccee04ed2c9849c5869e896919422d80" />
    </>
  );
}

export default TopHeadlines;
