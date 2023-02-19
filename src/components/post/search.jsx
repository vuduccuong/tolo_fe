import Input from "@mui/material/Input";
import { useRef } from "react";

const SearchPost = (props) => {
  console.log("render");
  const { onSearch } = props;
  const typingTimeoutRef = useRef(null);
  const handleChange = (e) => {
    e.preventDefault();
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      return onSearch(e.target.value);
    }, 300);
  };
  return <Input onChange={handleChange} sx={{ mb: 4 }} />;
};

export default SearchPost;
