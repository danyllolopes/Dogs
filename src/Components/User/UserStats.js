import React from 'react'
import Head from '../Help/Head'
import useFetch from '../../Hooks/useFetch'
import Loading from '../Help/Loading'
import Error from '../Help/Error'
import { STATS_GET } from '../../api'
const UserStatsGraphs = React.lazy(() => import ('./UserStatsGraphs'))

const UserStatic = () => {
    const {data, error, loading, request} = useFetch()


    React.useEffect(() => {
        async function getData(){
            const {url, options} = STATS_GET()
            await request(url,options)
        }
        getData()
    }, [request])

    if(loading) return <Loading />
    if(error) return <Error error={error} />
    if(data)
    return (
        <React.Suspense fallback={<div></div>}>
            <Head title="Estatísticas" />
            <UserStatsGraphs data={data}/>
            Estatistica
        </React.Suspense>
    )
    else return null
}

export default UserStatic
