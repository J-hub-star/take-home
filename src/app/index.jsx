import React,{useState} from 'react';
import Datatable from '../datatable';
import json from '../data/planets.json';


    function pageData({ data, per = 50, page = 1 }) {
        return data.slice(per * (page - 1), per * page);
      }
export default function App() {
    const [state,setState] = useState(
        {
            data:pageData({data : json}),
            loading:false,
            page:1
        })
    
        function loadMore() {
            if (state.loading) return;
            setState((prev) => ({
              ...prev,
              loading: true,
            }));
            setState((prev) => (
                {
                    data: [
                        ...prev.data,
                        ...pageData({ data: json, page: prev.page + 1 }),
                      ],
                      loading: false,
                      page: prev.page + 1,
                }));
        
            
            
          }
    return (
    <Datatable
        loadMore={loadMore}
        items={state.data}
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
