import React, {useState, useEffect} from 'react';
import EditCalculatorTitleBlock from './EditCalculatorFullTitleBlock';
const EditCalculator = () => {
    const [goodsList, setGoodsList] = useState ([]);
    const [isFetch, setIsFetch] = useState(false);

    useEffect(() => {
        fetch('https://ponto-print.herokuapp.com/get-all-calc')
       .then(response => response.json())
       .then(res => setGoodsList(res))
     },[isFetch])

     console.log('goodsList',goodsList);
     console.log('isFetch',isFetch);

    return (
        <div>
            <div>
            <p>Банери</p>
            <p>Пленка</p>
            </div>
            <div>
                {/* {goodsList} */}
                <EditCalculatorTitleBlock 
                goods={goodsList.length != 0 && goodsList[1]}
                mainId={goodsList.length != 0 && goodsList[1]._id}
                setIsFetch={setIsFetch}/>
            </div>
        </div>
    );
};

export default EditCalculator;