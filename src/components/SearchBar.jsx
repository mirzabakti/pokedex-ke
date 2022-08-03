import React from "react";

const SearchBar = () => {
  return (
    <div>
      <form action="" className="m-5 px-5 ">
        <div class="input-group mb-4">
          <input type="search" placeholder="Type pokemon that you searching for..." aria-describedby="button-addon5" class="form-control" />
          <div class="input-group-append">
            <button id="button-addon5" type="submit" class="btn btn-primary">
              <i class="fa fa-search"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
