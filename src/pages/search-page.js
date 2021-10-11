import useSearchParams from "../hooks/useSearchParams";
import Avatar from "../components/ui/avatar";
import ResultsTitle from "../components/jokes/results-title";
import JokeList from "../components/jokes/joke-list";
import Loading from "../components/ui/loading";
import useFetch from "../hooks/useFetch";

const SearchPage = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  if (!query) {
    return (
      <section className="search-page">
        <Avatar />
        <ResultsTitle title="Search Text" value={query} />
        <p style={{ margin: "25px 0" }}>Sorry, no jokes found!</p>
      </section>
    );
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, isFetching } = useFetch(
    `https://api.chucknorris.io/jokes/search?query=${query}`
  );

  return (
    <section className="search-page">
      <Avatar />
      <ResultsTitle title="Search Text" value={query} />
      {isFetching && <Loading />}
      {data?.result && <JokeList items={data.result} />}
      {data?.result?.length === 0 && (
        <p style={{ margin: "25px 0" }}>Sorry, no jokes found!</p>
      )}
    </section>
  );
};

export default SearchPage;
