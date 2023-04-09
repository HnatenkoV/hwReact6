import React from 'react';
import PhoneCard from "./phoneCard";
import DeleteRecord from "./deleteRecord";



const RecordList = (props) => {
    return (
        <div>
            {props.recordList?.data &&
                props.recordList.data.map((record, index) => (<>
                        <PhoneCard index={index} record={record}/>
                        <DeleteRecord index={index}/>
                    </>
                ))}
        </div>
    );
};

export default RecordList;