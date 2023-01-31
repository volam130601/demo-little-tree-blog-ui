import { useEffect, useState, useRef } from "react";
import classNames from "classnames/bind";
import { BiSearch } from "react-icons/bi";
import { AiFillCloseCircle, AiOutlineLoading3Quarters } from "react-icons/ai";
import HeadlessTippy from "@tippyjs/react/headless";

// import * as searchServices from '~/services/searchService';
import { Wrapper as PopperWrapper } from "~/components/Popper";
// import AccountItem from '~/components/AccountItem';
// import { SearchIcon } from '~/components/Icons';
// import { useDebounce } from '~/hooks';
import styles from "./Search.module.scss";
import BlogItem from "~/components/BlogItem";
import images from "~/assets/images";

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);

  //   const debouncedValue = useDebounce(searchValue, 500);

  const inputRef = useRef();

  //   useEffect(() => {
  //     if (!debouncedValue.trim()) {
  //       setSearchResult([]);
  //       return;
  //     }

  //     const fetchApi = async () => {
  //       setLoading(true);

  //       const result = await searchServices.search(debouncedValue);

  //       setSearchResult(result);
  //       setLoading(false);
  //     };

  //     fetchApi();
  //   }, [debouncedValue]);

  const handleClear = () => {
    setSearchValue("");
    setSearchResult([]);
    inputRef.current.focus();
  };

  const handleHideResult = () => {
    setShowResult(false);
  };

  const handleChange = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(" ")) {
      setSearchValue(searchValue);
    }
  };

  const data = [
    {
      id: 1,
      code: "SB.Basic",
      blog_image: images.image_test,
      title: "Spring boot basic",
    },
    {
      id: 2,
      code: "SB.Advanced",
      blog_image: images.image_test,
      title: "Spring boot advanced",
    },
  ];
  useEffect(() => {
    setTimeout(() => {
      setSearchResult(data);
    }, 0);
  }, []);

  return (
    <div>
      <HeadlessTippy
        interactive
        visible={showResult && searchResult.length > 0}
        render={(attrs) => (
          <div className={cx("search-result")} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              <h4 className={cx("search-title")}>Blogs</h4>
              {searchResult.map((result) => (
                <BlogItem key={result.id} data={result} />
              ))}
            </PopperWrapper>
          </div>
        )}
        onClickOutside={handleHideResult}
      >
        <div className={cx("search")}>
          <input
            ref={inputRef}
            value={searchValue}
            placeholder="Search something..."
            spellCheck={false}
            onChange={handleChange}
            onFocus={() => setShowResult(true)}
          />

          {searchValue && !loading && (
            <button className={cx("clear")} onClick={handleClear}>
              <AiFillCloseCircle />
            </button>
          )}

          {loading && <AiOutlineLoading3Quarters className={cx("loading")} />}

          <div className={cx("search-btn")}>
            <BiSearch />
          </div>
        </div>
      </HeadlessTippy>
    </div>
  );
}

export default Search;
