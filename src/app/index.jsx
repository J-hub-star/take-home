import React,{useState} from 'react';
import Datatable from '../datatable';
import json from '../data/planets.json';
function getFifty(data)
    {
        return data.slice(0,51)
    }
export default function App() {
    const [planets,setPlanets] = useState(getFifty(json));
    const [load,setLoad] = useState();
    
    function loadMore()
    {
        console.dir("Load More")
    }
    return (
    <Datatable
        loadMore={loadMore}
        items={planets}
        renderHead={()=>
        <tr>
            <th>Planet Name</th>
            <th>Stellar Formation</th>
            
            <th>Raduis (Jpt)</th>
           
            <th>Discovery Year</th>
          
            <th>HostStarTemp (K)</th>
            
        </tr>}
        renderRow={(row)=>
        <tr>
             <td>{row.PlanetIdentifier}</td>
             <td>{row.TypeFlag}</td>
             <td>{row.RadiusJpt}</td>
             <td>{row.DiscoveryYear}</td>
             <td>{row.HostStarTempK}</td>
        </tr>}
     />

    
    )
}
