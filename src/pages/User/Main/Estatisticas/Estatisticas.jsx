import React from "react";

import { STATS_GET } from "../../../../API/api";
import useFetch from "../../../../Hooks/useFetch";
import Head from "../../../Components/Helpers/Head/Head";
import Loading from "../../../Components/Helpers/Loading/Loading";
import Error from "../../../Components/Helpers/Errors/error";

const UserStatsGraphs = React.lazy(()=>import('../Estatisticas/UserStatsGraphs/UserStatsGraphs'))

function Estatisticas() {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <React.Suspense fallback={<div></div>}>
        <Head title="Estatísticas" />
        <UserStatsGraphs data={data} />
      </React.Suspense>
    );
  else return null;
}

export default Estatisticas;
