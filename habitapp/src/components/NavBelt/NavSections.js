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

    console.log(sectionList)
    return (
        <div className="nav-info">
            {/* {props.items.map((item) => {
                return (
                    <p>{item}</p>
                )
            })} */}
        </div>
    );
}

export default NavInfo;