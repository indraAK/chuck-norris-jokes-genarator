import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import JokesSearchText from "../components/jokes/jokes-search-text";
import Avatar from "../components/ui/avatar";
import JokeItem from "../components/jokes/joke-item";
import Button from "../components/ui/button";
import JokesSearchCategory from "../components/jokes/jokes-search-category";
import Loading from "../components/ui/loading";
import fetchJokes from "../helpers/api-util";

const HomePage = () => {
  const [randomJoke, setRandomJoke] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const history = useHistory();

  useEffect(() => {
    setRandomJoke(null);
    setIsFetching(true);

    const getRandomJoke = async () => {
      const data = await fetchJokes("https://api.chucknorris.io/jokes/random");
      setRandomJoke(data);
      setIsFetching(false);
    };

    getRandomJoke();
  }, []);

  async function getRandomJokeHandler() {
    let url = "https://api.chucknorris.io/jokes/random";

    if (selectedCategory) {
      url = `https://api.chucknorris.io/jokes/random?category=${selectedCategory}`;
    }

    setRandomJoke(null);
    setIsFetching(true);
    const data = await fetchJokes(url);
    setRandomJoke(data);
    setIsFetching(false);
  }

  function searchJokesByText(keyword) {
    history.push(`/jokes/search?query=${keyword}`);
  }

  function searchJokesByCategory(category) {
    history.push(`/jokes/random?category=${category}`);
  }

  return (
    <section className="home-page text-center">
      <JokesSearchText onSearch={searchJokesByText} />
      <Avatar />
      {isFetching && <Loading />}
      {randomJoke && (
        <JokeItem style={{ margin: "25px 0" }} joke={randomJoke} />
      )}
      <Button width="103px" height="42px" onClick={getRandomJokeHandler}>
        Another!
      </Button>
      <JokesSearchCategory
        onSearch={searchJokesByCategory}
        onSelect={setSelectedCategory}
      />
    </section>
  );
};

export default HomePage;
