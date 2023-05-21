import React, {useState} from "react";
import EditCalculatorFullData from "./EditCalculatorFullData";
import { AiOutlineDown } from "react-icons/ai";
const EditCalculatorCurrentTitleBlock = ({ arrayGoods, additionalParameter, mainId, setIsFetch, goodsIndex }) => {
    const [isOpen, setIsOpen] = useState(false);
    console.log('arrayGoods',arrayGoods);
    console.log('additionalParameter',additionalParameter);
  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "center" }}
        onClick={() => setIsOpen((state) => !state)}
      >
        <p>{arrayGoods.name}</p>
        <AiOutlineDown />
      </div>
      {isOpen && (
        <>
        {arrayGoods?.quality.length != 0 &&
        <EditCalculatorFullData currentArray={arrayGoods?.quality} 
        title={'Якість'}
        mainId={mainId}
        setIsFetch={setIsFetch}
        goodsIndex={goodsIndex}
        editPath='https://ponto-print.herokuapp.com/update-quality'
        />
        }
        {arrayGoods?.color.length != 0 &&
        <EditCalculatorFullData currentArray={arrayGoods?.color} 
        title={'Колір'}
        mainId={mainId}
        setIsFetch={setIsFetch}
        goodsIndex={goodsIndex}/>
        }
        {arrayGoods?.eyelets.length != 0 &&
        <EditCalculatorFullData currentArray={arrayGoods?.eyelets} 
        title={'Люверси'}
        mainId={mainId}
        setIsFetch={setIsFetch}
        goodsIndex={goodsIndex}/>
        }
        {arrayGoods?.lamination.length != 0 &&
        <EditCalculatorFullData currentArray={arrayGoods?.lamination} 
        title={'Ламінація'}
        mainId={mainId}
        setIsFetch={setIsFetch}
        goodsIndex={goodsIndex}/>
        }
        {arrayGoods?.poster.length != 0 &&
        <EditCalculatorFullData currentArray={arrayGoods?.poster} 
        title={'Постер'}
        mainId={mainId}
        setIsFetch={setIsFetch}
        goodsIndex={goodsIndex}/>
        }
        {arrayGoods?.solderingOfGates.length != 0 &&
        <EditCalculatorFullData currentArray={arrayGoods?.solderingOfGates} 
        title={'Пропайка подворотов'}
        mainId={mainId}
        setIsFetch={setIsFetch}
        goodsIndex={goodsIndex}/>
        }
        {arrayGoods?.solderingPockets.length != 0 &&
        <EditCalculatorFullData currentArray={arrayGoods?.solderingPockets} 
        title={'Пропайка карманов'}
        mainId={mainId}
        setIsFetch={setIsFetch}
        goodsIndex={goodsIndex}/>
        }
        {arrayGoods?.cutting.length != 0 &&
        <EditCalculatorFullData currentArray={arrayGoods?.cutting} 
        title={'Порізка'}
        mainId={mainId}
        setIsFetch={setIsFetch}
        goodsIndex={goodsIndex}/>
        }
        </>
      )}
      <br />
    </div>
  );
};

export default EditCalculatorCurrentTitleBlock;
