import React, {useState} from "react";
import EditCalculatorFullData from "./EditCalculatorFullData";
import EditCalculatorAdditionalParameter from "./EditCalculatorAdditionalParameter";
import EditCalculatorCurrentArray from "./EditCalculatorCurrentArray";
import { AiOutlineDown } from "react-icons/ai";
const EditCalculatorCurrentTitleBlock = ({ arrayGoods, additionalParameter, mainId, setIsFetch, goodsIndex }) => {
    const [isOpen, setIsOpen] = useState(false);
    console.log('arrayGoods?.stretchOnTheStretcher',arrayGoods?.stretchOnTheStretcher);
  return (
    <div>
      {arrayGoods?.name
      ?
      <>
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
        goodsIndex={goodsIndex}
        editPath='http://localhost:4444/update-color'/>
        }
        {arrayGoods?.eyelets.length != 0 &&
        <EditCalculatorFullData currentArray={arrayGoods?.eyelets} 
        title={'Люверси'}
        mainId={mainId}
        setIsFetch={setIsFetch}
        goodsIndex={goodsIndex}
        editPath='http://localhost:4444/update-eyelets-price'/>
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
        goodsIndex={goodsIndex}
        editPath='http://localhost:4444/update-poster'/>
        }
        {arrayGoods?.solderingOfGates.length != 0 &&
        <EditCalculatorFullData currentArray={arrayGoods?.solderingOfGates} 
        title={'Пропайка подворотов'}
        mainId={mainId}
        setIsFetch={setIsFetch}
        goodsIndex={goodsIndex}
        editPath='http://localhost:4444/update-soldering-of-gates'/>
        }
        {arrayGoods?.solderingPockets.length != 0 &&
        <EditCalculatorFullData currentArray={arrayGoods?.solderingPockets} 
        title={'Пропайка карманов'}
        mainId={mainId}
        setIsFetch={setIsFetch}
        goodsIndex={goodsIndex}
        editPath='http://localhost:4444/update-soldering-pockets'/>
        }
        {arrayGoods?.cutting.length != 0 &&
        <EditCalculatorFullData currentArray={arrayGoods?.cutting} 
        title={'Порізка'}
        mainId={mainId}
        setIsFetch={setIsFetch}
        goodsIndex={goodsIndex}
        editPath='http://localhost:4444/update-cutting'/>
        }
        {arrayGoods?.mounting && 
        <EditCalculatorAdditionalParameter
        title={'Намонтаживание'}
        mainId={mainId}
        goodsIndex={goodsIndex}
        data={arrayGoods?.mounting}
        setIsFetch={setIsFetch}
        editPath='http://localhost:4444/update-mounting'/>}
        {arrayGoods?.stamp && 
        <EditCalculatorAdditionalParameter
        title={'Печать'}
        mainId={mainId}
        goodsIndex={goodsIndex}
        data={arrayGoods?.stamp}
        setIsFetch={setIsFetch}
        editPath='http://localhost:4444/update-stamp'/>}
        </>
      )}
      <br />
      </>
      :
      <>
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
        {arrayGoods?.cutting.length != 0 &&
        <EditCalculatorFullData currentArray={arrayGoods?.cutting} 
        title={'Порізка'}
        mainId={mainId}
        setIsFetch={setIsFetch}
        goodsIndex={goodsIndex}
        editPath='http://localhost:4444/update-cutting'/>
        }
        {arrayGoods?.stretchOnTheStretcher &&
        <EditCalculatorAdditionalParameter data={arrayGoods?.stretchOnTheStretcher} 
        title={'Натяжка на подрамник'}
        mainId={mainId}
        setIsFetch={setIsFetch}
        goodsIndex={goodsIndex}
        editPath='http://localhost:4444/update-stretch-on-the-stretcher'/>
        }
        </>
      <br />
      </>}
    </div>
  );
};

export default EditCalculatorCurrentTitleBlock;
