import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import testData from '../data/interview.json';

export default function Home() {
  const [selected, setSelected] = useState('');
  // const url = 'https://api.va.gov/services/va_facilities/v0/facilities/'
  // const FormData = require("form-data");
  // const data = new FormData();
  // const config = {
  //   method: "get",
  //   url: `${url}`,
  //   data: data,
  // };

  // const result = await axios(config).then(function (res) {
  //   console.log("res", res);
  // });
  console.log('testData', testData);

  useEffect(() => {
    if (selected) {
      const facility = testData.data.find((item) => item.id === selected);
      console.log('facility', facility);
    }
  }, [selected]);

  return (
    <>
      {testData.data.map((facility) => (
        <button type="button" onClick={() => setSelected(facility.id)}>
          {facility.id}
        </button>
      ))}
      <div>
        {selected === '' && 'No Facility Selected'}
        {selected !== '' &&
          JSON.stringify(testData.data.find((item) => item.id === selected))}
      </div>
    </>
  );
}
