import React from "react";
import { Select, Space } from "antd";
import "./Filters.css";
import platformMock from "../../mocks/platform-mock.json";
import categoryMock from "../../mocks/category-mock.json";
import sortMock from "../../mocks/sort-mock.json";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCategory,
  selectFiltersLabel,
  setCategory,
  setPlatform,
  setSortBy,
} from "../../features/filter/filter-slice";

const Filters = () => {
  const dispatch = useDispatch();
  const { platform, category, sortBy } = useSelector(selectFiltersLabel);

  const handlePlatform = (_, data) => {
    dispatch(setPlatform(data));
  };

  const handleCategory = (_, data) => {
    if (data.value === "all") {
      dispatch(clearCategory());
    } else {
      dispatch(setCategory(data));
    }
  };

  const handleSort = (_, data) => {
    dispatch(setSortBy(data));
  };

  return (
    <Space wrap className="Filters__wrapper">
      <div className="Filters__element">
        <span>Platform: </span>
        <Select
          defaultValue={platform}
          style={{
            width: 150,
          }}
          onChange={handlePlatform}
          options={platformMock}
        />
      </div>
      <div className="Filters__element">
        <span>Genre: </span>
        <Select
          defaultValue={category}
          style={{
            width: 150,
          }}
          onChange={handleCategory}
          options={categoryMock}
        />
      </div>
      <div className="Filters__element">
        <span>Sort By: </span>
        <Select
          defaultValue={sortBy}
          style={{
            width: 150,
          }}
          onChange={handleSort}
          options={sortMock}
        />
      </div>
    </Space>
  );
};

export { Filters };
