import {View} from 'react-native';
import React, {useEffect, useState} from 'react';

const FetchComponent = ({
  fetchData,
  DataComponent,
  NullComponent,
  NoConnectionComponent,
  LoadingComponent,
}) => {
  const [data, setData] = useState({
    data: null,
    total: null,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [connectionError, setConnectionError] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setIsLoading(true);
    try {
      const response = await fetchData;
      setData(response.data);
      setConnectionError(false);
    } catch (e) {
      setConnectionError(true);
    }
    setIsLoading(false);
  };

  return (
    <View>
      {/* NULL */}
      {data.total === 0 && <NullComponent />}
      {/* DATA NOT NULL */}
      {data.data && data.total !== 0 && <DataComponent data={data.data} />}
      {/* CONNECTION ERROR */}
      {connectionError && <NoConnectionComponent />}
      {/* LOADING */}
      {isLoading && <LoadingComponent />}
    </View>
  );
};

export default FetchComponent;

// EXAMPLE CALL COMPONENT

// const NullComponent = () => (
//   <View>
//     <Text>No Data</Text>
//   </View>
// );
// const DataComponent = ({data}) => (
//   <View>
//     <Text>DATANYA ADALAH : {JSON.stringify(data)}</Text>
//   </View>
// );
// const NoConnectionComponent = () => (
//   <View>
//     <Text>No connection</Text>
//   </View>
// );
// const LoadingComponent = () => (
//   <View>
//     <Text>Loading</Text>
//   </View>
// );

{
  /* <FetchComponent
  fetchData={API.post('/tes/response')}
  NoConnectionComponent={NoConnectionComponent}
  DataComponent={DataComponent}
  LoadingComponent={LoadingComponent}
  NullComponent={NullComponent}
/> */
}
