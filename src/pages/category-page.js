import useSearchParams from "../hooks/useSearchParams";
import useFetch from "../hooks/useFetch";
import Avatar from "../components/ui/avatar";
import ResultsTitle from "../components/jokes/results-title";
import Loading from "../components/ui/loading";
import JokeItem from "../components/jokes/joke-item";

const CategoryPage = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  if (!category) {
    return (
      <section className="category-page">
        <Avatar />
        <ResultsTitle title="Category" value={category} />
        <p style={{ margin: "25px 0" }}>Sorry, no jokes found!</p>
      </section>
    );
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, isFetching } = useFetch(
    `https://api.chucknorris.io/jokes/random?category=${category}`
  );

  return (
    <section className="category-page">
      <Avatar />
      <ResultsTitle title="Category" value={category} />
      {isFetching && <Loading />}
      {data && <JokeItem joke={data} />}
    </section>
  );
};

export default CategoryPage;
