import React, {useEffect, useState} from 'react';
import axios from 'axios';

const NavInfo = (props) => {
    const [sectionList, setSections] = useState([])

    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(
            `${process.env.REACT_APP_BACKEND_URL}/sections/${props.catId}`,
          );
     
          setSections(result.data);
        };
        if (props.catId){
            fetchData();
        }
        
      },[]);

    if (sectionList) {console.log(sectionList)}
    return (
        <div className="nav-info">
            {
                sectionList && sectionList.map((item) => {
                return <p key={item.id}>{item.name}</p>
                })
            }
        </div>
    );
}

export default NavInfo;