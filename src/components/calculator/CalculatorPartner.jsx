import React, { useState, useRef, useEffect } from "react";
import Select from "./Select";
import SelectSec from "./SelectSecond";
import SelectedColor from "./SelectedColor";
import ChoseRoleSelect from "./ChoseRoleSelect";
import ProgressBar from "./ProgressBar";
import InputsTamplate from "../template/InputsTamplate";
import ModalPrice from "./ModalPrice";
import ModalProgram from "../Modal/ModalProgram";
import ForLayouts from "./ForLayouts";
import DeliveryAddress from "./DeliveryAddress";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { currentUser } from "../../store/auth";
import { fetchLanguage } from "../../store/language";
import "../../style/calculator.scss";
import Loader from "../Loader/Loader";
import DownloadProgram from "./DownloadProgram";
import ChoseAddressSelect from "./ChoseAddressSelect";

const CalculatorPartner = () => {
  const [goodsList, setGoodsList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenProgramModal, setIsOpenProgramModal] = useState(false);
  const [isOpenLayoust, setIsOpenLayoust] = useState(false);
  const [isOpenAllusers, setIsOpenAllusers] = useState(false);
  const [currentItem, setСurrentItem] = useState({});
  const [width, setWitdh] = useState("");
  const [height, setHeight] = useState("");
  const [count, setCount] = useState(1);
  const [selectedFile, setselectedFile] = useState(null);
  const [selectedFileBoolean, setselectedFileBoolean] = useState(true);
  const [progress, setProgress] = useState(null);
  const [isProgresBar, setIsProgressBar] = useState(false);
  const [isPosterDisabled, setIsPosterDisabled] = useState(false);
  const [totalSizeFile, setTotalSizeFile] = useState(null);
  const [currentSizeFile, setCurrentSizeFile] = useState(null);
  const [coment, setComent] = useState("");
  const [delivery, setDelivery] = useState("");
  const [totalSum, setTotalSum] = useState(0);
  const [validationWidth, setValidationWidth] = useState(false);
  const [validationHeight, setValidationHeight] = useState(false);
  const [validationCount, setValidationCount] = useState(false);
  const [validationFile, setValidationFile] = useState(false);
  const [validationCurrentItem, setValidationCurrentItem] = useState(false);
  const [validationOptionQuality, seValidationtOptionQuality] = useState(false);
  const [validationOptionColor, setValidationOptionColor] = useState(false);
  const [waitingSendOrder, setWaitingSendOrder] = useState(false);

  const [selectedOptionQuality, setSelectedOptionQuality] = useState("");
  const [selectedOptionCutting, setSelectedOptionCutting] = useState("");
  const [selectedOptionSolderGates, setSelectedOptionSolderGates] =
    useState("");
  const [selectedOptionSolderPockets, setSelectedOptionSolderPockets] =
    useState("");
  const [selectedOptionLamination, setSelectedOptionLamination] = useState("");
  const [selectedOptionColor, setSelectedOptionColor] = useState("");
  const [selectedOptionPoster, setSelectedOptionPoster] = useState("");
  const [selectedOptionEyelets, setSelectedOptionEyelets] = useState("");
  const [selectedOptionEyeletsValue, setSelectedOptionEyeletsValue] =
    useState(30);
  const [isStamp, setIsStamp] = useState(false);
  const [isStretch, setIsStretch] = useState(false);
  const [isMounting, setIsMounting] = useState(false);
  const [isBilateral, setIsBilateral] = useState(false);
  const [descArray, setdescArray] = useState({});
  const [allUsers, setAllUsers] = useState([]);
  const [currentId, setCurrentId] = useState("");
  const [currentUserState, setCurrentUserState] = useState("");
  const [choseAnotherUser, setChoseAnotherUser] = useState("");
  const [currentDiscount, setCurrentDiscount] = useState("");
  const [currentDiscountTwentyMeter, setCurrentDiscountTwentyMeter] =
    useState("");
  const [currentPersonalDiscount, setCurrentPersonalDiscount] = useState("");
  const [currentLuversDisplay, setCurrentLuversDisplay] = useState(0);
  const [solderGatesDisplay, setSolderGatesDisplay] = useState(0);
  const [solderPocketsDisplay, setSolderPocketsDisplay] = useState(0);
  const [cuttingDisplay, setCuttingDisplay] = useState(0);
  const [stampDisplay, setStampDisplay] = useState(0);
  const [laminationDisplay, setLaminationDisplay] = useState(0);
  const [stretchOnTheStretcherDisplay, setStretchOnTheStretcherDisplay] =
    useState(0);
  const [status] = useState({
    name: "New",
    currentStatus: "new",
    paid: false,
  });
  const inputFileRef = useRef(null);

  const { t } = useTranslation();

  const { currency } = useSelector((state) => state.currency);
  console.log('width',width);
  console.log('height',height);

  const currentItemOracal = currentItem?.nameUa == "Кольорова плівка серії Oracal 641";
  console.log('currentItemOracal',currentItemOracal);

  const quadrature =  ((currentItemOracal ? (Number(1000)) : (Number(width))) * Number(height)) / 1000000;
  console.log('quadrature',quadrature);
  const linearMeter = (width / 1000 + height / 1000) * 2;

  const user = useSelector(currentUser);
  const dispatch = useDispatch();

  const lang = useSelector((state) => state.lang.language);

  const additionalHeightOrcal = 150;

  useEffect(() => {
    fetch("http://91.206.30.132:4444/get-all-calc")
      .then((response) => response.json())
      .then((res) => setGoodsList(res));
  }, []);

  useEffect(() => {
    fetch("http://91.206.30.132:4444/get-all-user")
      .then((response) => response.json())
      .then((res) => {
        setAllUsers(res);
        const newArr = res.filter((item) => user._id == item._id);
        setCurrentId(newArr[0]._id);
      });
  }, [user]);

  useEffect(() => {
    dispatch(fetchLanguage());
  }, [lang]);

  useEffect(() => {
    if (selectedOptionPoster.nameUa == "3x4м") {
      setWitdh(3000);
      setHeight(4000);
      setIsPosterDisabled(true);
    } else if (selectedOptionPoster.nameUa == "3x6м") {
      setWitdh(3000);
      setHeight(6000);
      setIsPosterDisabled(true);
    } else if (selectedOptionPoster.nameUa == "3x12м") {
      setWitdh(3000);
      setHeight(12000);
      setIsPosterDisabled(true);
    }
  }, [selectedOptionPoster]);

  useEffect(() => {
    const descriptionObj = {
      cutting: {
        option:
          selectedOptionCutting && selectedOptionCutting.nameUa != "Ні"
            ? lang == "Ua"
              ? "Порізка: "
              : "Порезка: "
            : "",
        name:
          selectedOptionCutting && selectedOptionCutting.nameUa != "Ні"
            ? lang == "Ua"
              ? selectedOptionCutting?.nameUa
              : selectedOptionCutting?.nameRu
            : "",
      },
      solderGates: {
        option: selectedOptionSolderGates?.price
          ? lang == "Ua"
            ? "Пропаювання підворіт: "
            : "Пропайка подворотов: "
          : "",
        name: selectedOptionSolderGates?.price
          ? lang == "Ua"
            ? selectedOptionSolderGates?.nameUa
            : selectedOptionSolderGates?.nameRu
          : "",
      },
      solderPockets: {
        option: selectedOptionSolderPockets?.price
          ? lang == "Ua"
            ? "Пропаювання кишень: "
            : "Пропайка карманов: "
          : "",
        name: selectedOptionSolderPockets?.price
          ? lang == "Ua"
            ? selectedOptionSolderPockets?.nameUa
            : selectedOptionSolderPockets?.nameRu
          : "",
      },
      lamination: {
        option: selectedOptionLamination?.price
          ? lang == "Ua"
            ? "Ламінація: "
            : "Ламинация: "
          : "",
        name: selectedOptionLamination?.price
          ? lang == "Ua"
            ? selectedOptionLamination?.nameUa
            : selectedOptionLamination?.nameRu
          : "",
      },
      poster: {
        option: selectedOptionPoster?.price
          ? lang == "Ua"
            ? "Постер: "
            : "Постер: "
          : "",
        name: selectedOptionPoster?.price
          ? lang == "Ua"
            ? selectedOptionPoster?.nameUa
            : selectedOptionPoster?.nameRu
          : "",
      },
      stretch: {
        name: isStretch
          ? lang == "Ua"
            ? "Натяжка на підрамник "
            : "Натяжка на подрамник "
          : "",
      },
      stamp: {
        name: isStamp ? (lang == "Ua" ? "З друком " : "С печатью ") : "",
      },
      mounting: {
        name: isMounting
          ? lang == "Ua"
            ? "Намонтування "
            : "Намонтаживание "
          : "",
      },
      eyelets: {
        option: selectedOptionEyelets?.price
          ? lang == "Ua"
            ? " Люверси: "
            : " Люверсы: "
          : "",
        name: selectedOptionEyelets?.price
          ? lang == "Ua"
            ? selectedOptionEyelets?.nameUa
            : selectedOptionEyelets?.nameRu
          : "",
        value: selectedOptionEyelets?.price
          ? ` ${selectedOptionEyeletsValue} см`
          : "",
      },
      bilateral: {
        name: isBilateral
          ? lang == "Ua"
            ? " Двосторонній"
            : " Двусторонний"
          : "",
      },
    };
    setdescArray(descriptionObj);
  }, [
    selectedOptionCutting,
    isMounting,
    selectedOptionEyelets,
    selectedOptionEyeletsValue,
    selectedOptionSolderPockets,
    selectedOptionSolderGates,
    selectedOptionPoster,
    selectedOptionLamination,
    isStretch,
    isBilateral,
    isStamp,
  ]);

  const checkedSolder = (name) => {
    switch (name) {
      case "По периметру":
        return (width / 1000 + height / 1000) * 2;
      case "Ліворуч і праворуч":
        return (height / 1000) * 2;
      case "Зверху та знизу":
        return (width / 1000) * 2;
      case "Літерою П":
        return (width / 2000 + height / 1000) * 2;
      case "Ліворуч":
        return (height / 2000) * 2;
      case "Праворуч":
        return (height / 2000) * 2;
      case "Зверху":
        return (width / 2000) * 2;
      case "Знизу":
        return (width / 2000) * 2;
    }
  };

  useEffect(() => {
    const standartLuvers = linearMeter / 0.3;

    const currentLuvers = linearMeter / (selectedOptionEyeletsValue / 100);

    let differenceLuvers = 0;
    let currentLuversPrice = 0;

    if (currentLuvers > standartLuvers) {
      differenceLuvers = currentLuvers - standartLuvers;
    }

    if (differenceLuvers) {
      currentLuversPrice = selectedOptionEyelets.price * differenceLuvers;
    }
    setCurrentLuversDisplay(currentLuversPrice);

    const currentSolderGates =
      (!isBilateral
        ? selectedOptionSolderGates?.price *
          checkedSolder(selectedOptionSolderGates?.nameUa)
        : (selectedOptionSolderGates?.price *
            checkedSolder(selectedOptionSolderGates?.nameUa)) /
          2) || 0;
    const currentSolderPockets =
      (!isBilateral
        ? selectedOptionSolderPockets?.price *
          checkedSolder(selectedOptionSolderPockets?.nameUa)
        : (selectedOptionSolderPockets?.price *
            checkedSolder(selectedOptionSolderPockets?.nameUa)) /
          2) || 0;
    const currentCutting =
      (selectedOptionCutting?.nameUa == "Плоттерна"
        ? currentItem?.nameUa == "Кольорова плівка серії Oracal 641"
          ? selectedOptionCutting?.price *
            ((Number(1000) * Number(height) + additionalHeightOrcal) / 1000000)
          : selectedOptionCutting?.price * quadrature
        : selectedOptionCutting?.price * linearMeter) || 0;
    const currentStamp = isStamp
      ? currentItem?.nameUa == "Кольорова плівка серії Oracal 641"
        ? currentItem?.stamp *
          ((Number(1000) * (Number(height) + additionalHeightOrcal)) / 1000000)
        : currentItem?.stamp * linearMeter
      : 0;
    const currentStretchOnTheStretcher = isStretch
      ? currentItem?.goods &&
        (quadrature < 0.5
          ? currentItem?.goods[0]?.stretchOnTheStretcherMin * quadrature
          : currentItem?.goods[0]?.stretchOnTheStretcher * quadrature)
      : 0;
    const currentLamination = selectedOptionLamination?.price * quadrature || 0;
    setSolderGatesDisplay(currentSolderGates);
    setSolderPocketsDisplay(currentSolderPockets);
    setCuttingDisplay(currentCutting);
    setStampDisplay(currentStamp);
    setStretchOnTheStretcherDisplay(currentStretchOnTheStretcher);
    setLaminationDisplay(currentLamination);

    const totalSum1 =
      (currentLuversPrice || 0) +
      (isPosterDisabled ? 0 : selectedOptionQuality?.price * quadrature || 0) +
      (selectedOptionColor?.price *
        ((Number(1000) * (Number(height) + additionalHeightOrcal)) / 1000000) ||
        0) +
      currentLamination +
      (currentSolderGates || 0) +
      (currentSolderPockets || 0) +
      currentCutting +
      (selectedOptionPoster?.price || 0) +
      currentStamp +
      currentStretchOnTheStretcher +
      (isMounting ? currentItem?.mounting * quadrature : 0);

      console.log('isMounting',isMounting);
      console.log('currentItem?.mounting',currentItem?.mounting);
      console.log('quadrature',quadrature);

    const sumMultiplyCurrency = totalSum1 * currency.currency || 0;
    const sumAndCount = sumMultiplyCurrency * count;

    const onlyDiscount = sumAndCount * (user.discountValue || currentDiscount);
    let discountTwentyMeter = 0;
    setCurrentPersonalDiscount(onlyDiscount);
    //  const sumAndDiscountUser = sumAndCount - onlyDiscount;

    if (quadrature >= 20 || quadrature * count >= 20) {
      discountTwentyMeter = sumAndCount * 0.1;
      setCurrentDiscountTwentyMeter(discountTwentyMeter);
    } else {
      setCurrentDiscountTwentyMeter("");
    }
    const finalSum = sumAndCount - onlyDiscount - discountTwentyMeter;
    const minimalOrder = 1.5 * currency.currency;
    if (finalSum < minimalOrder && finalSum != 0) {
      return setTotalSum(minimalOrder);
    }
    setTotalSum(sumAndCount - onlyDiscount - discountTwentyMeter);
  }, [
    count,
    selectedOptionCutting,
    selectedOptionSolderGates,
    selectedOptionSolderPockets,
    selectedOptionLamination,
    selectedOptionPoster,
    selectedOptionColor,
    isStamp,
    selectedOptionQuality,
    isStretch,
    isMounting,
    currentDiscount,
    selectedOptionEyelets,
    selectedOptionEyeletsValue,
    height,
    width,
    isBilateral,
  ]);

  useEffect(() => {
    setSelectedOptionQuality("");
    setSelectedOptionCutting("");
    setSelectedOptionSolderGates("");
    setSelectedOptionSolderPockets("");
    setSelectedOptionLamination("");
    setSelectedOptionColor("");
    setSelectedOptionPoster("");
    setIsStamp(false);
    setIsStretch(false);
    setIsMounting(false);
    setWitdh("");
    setHeight("");
    setCount(1);
    setComent("");
    setDelivery("");
    setSelectedOptionEyelets("");
    setIsPosterDisabled(false);
    // console.log("work");
  }, [currentItem]);

  const finlObj = {
    material: lang == "Ua" ? currentItem?.nameUa : currentItem?.nameRu,
    width: width,
    height: height,
    count: count,
    adding: descArray,
    coment: coment ? coment : "",
    deliveryt: delivery ? delivery : "",
    totalSumt: totalSum ? totalSum : "",
  };

  const handleChange = (event) => {
    const file = event.target.files[0];
    const allowedExtensions = ["jpg", "tiff", "tif", "rar", "zip", "7z", "cdr"];
    const fileExtension = getFileExtension(file.name);

    if (allowedExtensions.includes(fileExtension)) {
      setselectedFile(file);
      setselectedFileBoolean(false);
      setValidationFile(false);
    } else {
      alert(
        "Невірний формат файлу. Файл має бути формату: jpg, tiff, tif, rar, zip, 7z, cdr"
      );
      // Очищення вибраного файлу
      event.target.value = null;
      setselectedFile(null);
      setselectedFileBoolean(true);
    }
  };

  const getFileExtension = (filename) => {
    return filename.slice(filename.lastIndexOf(".") + 1);
  };

  const validationFunc = () => {
    setValidationWidth(false);
    setValidationHeight(false);
    setValidationCount(false);
    setValidationCurrentItem(false);
    seValidationtOptionQuality(false);
    setValidationOptionColor(false);
    let isValid = true;

    const isEmptyCurrentItem = JSON.stringify(currentItem) === "{}";

    if (currentItem?.nameUa == "Виберіть матеріал" || isEmptyCurrentItem) {
      setValidationCurrentItem(true);
      isValid = false;
    }

    if (
      (selectedOptionQuality == "" ||
        selectedOptionQuality.nameUa == "Виберіть якість") &&
      currentItem.nameUa !== "Кольорова плівка серії Oracal 641"
    ) {
      seValidationtOptionQuality(true);
      isValid = false;
    }
    if (
      currentItem.nameUa == "Кольорова плівка серії Oracal 641" &&
      selectedOptionColor == ""
    ) {
      setValidationOptionColor(true);
      isValid = false;
    }

    if (
      width <= 0 &&
      currentItem.nameUa !== "Кольорова плівка серії Oracal 641"
    ) {
      setValidationWidth(true);
      isValid = false;
    }

    if (height <= 0) {
      setValidationHeight(true);
      isValid = false;
    }

    if (count <= 0) {
      setValidationCount(true);
      isValid = false;
    }

    if (selectedFileBoolean) {
      setValidationFile(true);
      isValid = false;
    }

    return isValid;
  };

  const handleTotalSum = () => {
    const isValid = validationFunc();

    if (isValid) {
      setWaitingSendOrder(true);
      setIsProgressBar(true);
      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append(
        "material",
        lang === "Ua" ? currentItem?.nameUa : currentItem?.nameRu
      );
      formData.append(
        "quality",
        selectedOptionQuality
          ? lang === "Ua"
            ? selectedOptionQuality?.nameUa
            : selectedOptionQuality?.nameRu
          : lang === "Ua"
          ? selectedOptionColor?.nameUa
          : selectedOptionColor?.nameRu
      );
      if (selectedOptionColor) {
        formData.append(
          "color",
          lang === "Ua"
            ? selectedOptionColor?.nameUa
            : selectedOptionColor?.nameRu
        );
      }
      formData.append("width", width);
      formData.append("height", height);
      formData.append("count", count);
      formData.append("userId", currentId);
      formData.append("sum", totalSum);
      formData.append("conditions", JSON.stringify(descArray));
      formData.append("notes", coment);
      formData.append("address", delivery);
      formData.append("status", JSON.stringify(status));

      const xhr = new XMLHttpRequest();
      xhr.open("POST", "http://91.206.30.132:4444/create-table", true);

      xhr.upload.addEventListener("progress", (event) => {
        const loaded = event.loaded / (1024 * 1024);
        const total = event.total / (1024 * 1024);
        setTotalSizeFile(total.toFixed(0));
        setCurrentSizeFile(loaded.toFixed(0));

        const calculatedProgress = Math.round((loaded / total) * 100);
        setProgress(calculatedProgress);
      });

      xhr.onload = () => {
        if (xhr.status === 200) {
          window.location.reload();
        } else {
          // Завантаження не вдалось
          console.error("Upload failed");
        }
      };

      xhr.send(formData);
    }
  };

  const handleStamp = () => {
    setIsStamp((state) => !state);
  };
  const handleStretch = () => {
    setIsStretch((state) => !state);
  };
  const handleMounting = () => {
    setIsMounting((state) => !state);
  };

  const setCurrentIdFunc = (e) => {
    setIsOpenAllusers((state) => !state);
    setCurrentId(e._id);
    setIsOpenAllusers((state) => !state);
    setCurrentUserState(e);
    setCurrentDiscount(e.discountValue);
    setChoseAnotherUser(e);
  };

  const displayOrderStory = () => {
    const orderItems = [];

    if (isPosterDisabled ? 0 : selectedOptionQuality?.price * quadrature) {
      orderItems.push(
        `${t(`Printing`)} ${(
          selectedOptionQuality?.price *
          quadrature *
          currency.currency
        ).toFixed(0)} грн`
      );
    }

    if (
      selectedOptionColor?.price *
      ((Number(1000) * (Number(height) + 100)) / 1000000)
    ) {
      orderItems.push(
        `${t(`Color`)} ${(
          selectedOptionColor?.price *
            ((Number(1000) * (Number(height) + additionalHeightOrcal)) /
              1000000) *
            currency.currency || 0
        ).toFixed(0)} грн`
      );
    }

    if (selectedOptionPoster?.price) {
      orderItems.push(
        `${t(`Постер`)} ${(
          selectedOptionPoster?.price * currency.currency
        ).toFixed(0)} грн`
      );
    }
    if (currentLuversDisplay) {
      orderItems.push(
        `${t(`Eyelets`)} ${(currentLuversDisplay * currency.currency).toFixed(
          0
        )} грн`
      );
    }

    if (cuttingDisplay) {
      orderItems.push(
        `${t(`Cutting`)} ${(cuttingDisplay * currency.currency).toFixed(0)} грн`
      );
    }

    if (solderGatesDisplay) {
      orderItems.push(
        `${t(`SolderingOfGates`)} ${(
          solderGatesDisplay * currency.currency
        ).toFixed(0)} грн`
      );
    }

    if (solderPocketsDisplay) {
      orderItems.push(
        `${t(`SolderingPockets`)} ${(
          solderPocketsDisplay * currency.currency
        ).toFixed(0)} грн`
      );
    }

    if (selectedOptionLamination?.price) {
      orderItems.push(
        `${t(`Lamination`)} ${(laminationDisplay * currency.currency).toFixed(
          0
        )} грн`
      );
    }

    if (stampDisplay) {
      orderItems.push(
        `${t(`WithAStamp`)} ${(stampDisplay * currency.currency).toFixed(
          0
        )} грн`
      );
    }

    if (stretchOnTheStretcherDisplay) {
      orderItems.push(
        `${t(`StretchOnTheStretcher`)} ${(
          stretchOnTheStretcherDisplay * currency.currency
        ).toFixed(0)} грн`
      );
    }

    if (isMounting) {
      orderItems.push(
        `${t(`Mounting`)} ${(
          currentItem?.mounting *
          quadrature *
          currency.currency
        ).toFixed(0)} грн`
      );
    }

    if (currentDiscountTwentyMeter) {
      orderItems.push(
        `- ${t(`Discount`)} ${Number(currentDiscountTwentyMeter).toFixed(
          0
        )} грн`
      );
    }

    if (currentPersonalDiscount !== 0) {
      orderItems.push(
        `- ${t(`Personal Discount`)} ${Number(currentPersonalDiscount).toFixed(
          0
        )} грн`
      );
    }

    if (count && totalSum !== 0) {
      orderItems.push(`x ${count} ${t(`Circulation`)}`);
    }

    if (totalSum !== 0) {
      orderItems.push(`= ${t(`Total`)} ${Number(totalSum).toFixed(0)} грн`);
    }

    return (
      <div className="display_order_story">
        {orderItems.map((item, index) => {
          if (index === 0) {
            return item;
          } else if (
            item.startsWith("-") ||
            item.startsWith("=") ||
            item.startsWith("x")
          ) {
            return ` ${item}`;
          } else {
            return ` + ${item}`;
          }
        })}
      </div>
    );
  };

  // console.log("isMounting", isMounting);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          maxWidth: "1140px",
        }}
      >
        <div style={{ textAlign: "start" }}>
          <p style={{ color: "red", fontSize: "14px", paddingBottom: "5px" }}>
            Напоминание
          </p>
          <ul
            style={{ color: "#222935", fontSize: "14px", lineHeight: "18px" }}
          >
            <li>-{t(`Files must be in the CMYK color model`)}</li>
            <li>-{t(`Files must be 1:1 in size`)}</li>
            <li>-{t(`Vector files must have curved fonts`)}</li>
            <li>
              -
              {t(
                `In raster files, all layers must be flattened into a single layer`
              )}
            </li>
            <li>
              -{t(`For more information, read the Layout Requirements section`)}
            </li>
          </ul>
          <p
            style={{
              color: "red",
              fontSize: "14px",
              padding: "10px 0px",
              lineHeight: "18px",
            }}
          >
            {t(`ATTENTION! When uploading filenames`)}
          </p>
        </div>
      </div>
      <div className="calc_wrap">
        {goodsList.length != 0 && allUsers.length != 0 ? (
          <>
            <title>
              <ChoseRoleSelect
                user={user && user}
                setIsOpenAllusers={setIsOpenAllusers}
                allUsers={allUsers}
                currentUserState={currentUserState?.name}
                isOpenAllusers={isOpenAllusers}
                setCurrentIdFunc={setCurrentIdFunc}
              />
              <div style={{ display: "flex" }}>
                <button
                  className="btn"
                  onClick={() => setIsOpenProgramModal(!isOpenProgramModal)}
                >
                  {t(`Calculation of quadrature`)}
                </button>
                <ModalProgram
                  isOpen={isOpenProgramModal}
                  setIsOpen={setIsOpenProgramModal}
                />
                <button
                  className="btn"
                  onClick={() => setIsOpenLayoust(!isOpenLayoust)}
                  style={{ margin: "0px 10px" }}
                >
                  {t(`REQUIREMENTS FOR LAYOUTS`)}
                </button>
                <ForLayouts
                  isOpen={isOpenLayoust}
                  setIsOpen={setIsOpenLayoust}
                />
                <button className="btn" onClick={() => setIsOpen(!isOpen)}>
                  {t(`Prices for 1m2`)}
                </button>
                <ModalPrice
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                  goodsList={goodsList}
                />
              </div>
            </title>
            <div className="wrap_row">
              <div className="calc-item material">
                <h3>{t(`Material`)}</h3>
                <Select goods={goodsList} setcurrentItem={setСurrentItem} />
                {validationCurrentItem && (
                  <p style={{ color: "red" }}>{t(`Validation material`)}</p>
                )}
              </div>

              <div className="calc-item quality">
                {currentItem?.color && currentItem?.color != 0 && (
                  <SelectedColor
                    item={currentItem?.color}
                    title={"Color"}
                    selectedOption={selectedOptionColor}
                    setSelectedOption={setSelectedOptionColor}
                  />
                )}
                {validationOptionColor && (
                  <p style={{ color: "red" }}>{t(`Validation color`)}</p>
                )}
                {currentItem?.quality && currentItem?.quality.length != 0 && (
                  <SelectSec
                    item={currentItem?.quality}
                    title={"Quality"}
                    selectedOption={selectedOptionQuality}
                    setSelectedOption={setSelectedOptionQuality}
                  />
                )}
                {currentItem?.goods && currentItem?.goods.length != 0 && (
                  <SelectSec
                    item={currentItem?.goods[0]?.quality}
                    title={"Quality"}
                    selectedOption={selectedOptionQuality}
                    setSelectedOption={setSelectedOptionQuality}
                  />
                )}
                {validationOptionQuality && currentItem?.quality && (
                  <p style={{ color: "red" }}>{t(`Validation quality`)}</p>
                )}
              </div>
            </div>
            <div className="wrap_row">
              {currentItem &&
              currentItem?.nameUa == "Кольорова плівка серії Oracal 641" ? (
                <>
                  <div className="calc-item input_size">
                    <InputsTamplate
                      title={"Width"}
                      type={"number"}
                      placeholder={"Enter the width in mm"}
                      value={1000}
                      handleCangeInput={setWitdh}
                      disabled={true}
                    />
                  </div>
                  <div className="calc-item input_size">
                    <InputsTamplate
                      title={"Height"}
                      type={"number"}
                      placeholder={"Enter the height in mm"}
                      value={height}
                      handleCangeInput={setHeight}
                    />
                    {validationHeight && (
                      <p style={{ color: "red" }}>{t(`Validation height`)}</p>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <div className="calc-item input_size">
                    <InputsTamplate
                      title={"Width"}
                      type={"number"}
                      placeholder={"Enter the width in mm"}
                      value={width}
                      handleCangeInput={setWitdh}
                      disabled={isPosterDisabled}
                    />
                    {validationWidth && (
                      <p style={{ color: "red" }}>{t(`Validation width`)}</p>
                    )}
                  </div>
                  <div className="calc-item input_size">
                    <InputsTamplate
                      title={"Height"}
                      type={"number"}
                      placeholder={"Enter the height in mm"}
                      value={height}
                      handleCangeInput={setHeight}
                      disabled={isPosterDisabled}
                    />
                    {validationHeight && (
                      <p style={{ color: "red" }}>{t(`Validation height`)}</p>
                    )}
                  </div>
                </>
              )}
              <div className="calc-item input_size">
                <InputsTamplate
                  title={"Circulation"}
                  type={"number"}
                  placeholder={"Enter circulation"}
                  value={count}
                  handleCangeInput={setCount}
                />
                {validationCount && (
                  <p style={{ color: "red" }}>{t(`Validation circulation`)}</p>
                )}
              </div>
            </div>
            <div className="wrap_row adding">
              <div className="colum ">
                {currentItem?.eyelets && currentItem?.eyelets.length != 0 && (
                  <div className="eyelets_wrap">
                    <SelectSec
                      item={currentItem?.eyelets}
                      title={"Eyelets"}
                      selectedOption={selectedOptionEyelets}
                      setSelectedOption={setSelectedOptionEyelets}
                    />
                    {selectedOptionEyelets?.nameUa !== "По кутах" ? (
                      <InputsTamplate
                        title={"через (cм)"}
                        type={"number"}
                        placeholder={"30"}
                        value={selectedOptionEyeletsValue}
                        handleCangeInput={setSelectedOptionEyeletsValue}
                      />
                    ) : (
                      <InputsTamplate
                        title={"через (cм)"}
                        type={"number"}
                        placeholder={"30"}
                        value={selectedOptionEyeletsValue}
                        handleCangeInput={setSelectedOptionEyeletsValue}
                        disabled={true}
                      />
                    )}
                  </div>
                )}
                {currentItem?.cutting && currentItem?.cutting.length != 0 && (
                  <SelectSec
                    item={currentItem?.cutting}
                    title={"Cutting"}
                    selectedOption={selectedOptionCutting}
                    setSelectedOption={setSelectedOptionCutting}
                  />
                )}
                {currentItem &&
                  currentItem.goods &&
                  currentItem.goods.length > 0 &&
                  currentItem.goods[0].cutting.length !== 0 && (
                    <SelectSec
                      item={currentItem.goods[0].cutting}
                      title={"Cutting"}
                      selectedOption={selectedOptionCutting}
                      setSelectedOption={setSelectedOptionCutting}
                    />
                  )}
                {currentItem?.lamination &&
                  currentItem?.lamination.length != 0 && (
                    <SelectSec
                      item={currentItem?.lamination}
                      title={"Lamination"}
                      selectedOption={selectedOptionLamination}
                      setSelectedOption={setSelectedOptionLamination}
                    />
                  )}
                {currentItem?.poster && currentItem?.poster.length != 0 && (
                  <SelectSec
                    item={currentItem?.poster}
                    title={"Poster"}
                    selectedOption={selectedOptionPoster}
                    setSelectedOption={setSelectedOptionPoster}
                  />
                )}

                {currentItem?.goods &&
                  currentItem?.goods[0]?.stretchOnTheStretcher && (
                    <div>
                      <h3>{t(`StretchOnTheStretcher`)}</h3>
                      <input
                        type="checkbox"
                        value={isStretch}
                        onChange={handleStretch}
                      />
                    </div>
                  )}
                {currentItem?.mounting && (
                  <div>
                    <h3>{t(`Mounting`)}</h3>
                    <input
                      type="checkbox"
                      checked={isMounting}
                      onChange={handleMounting}
                    />
                  </div>
                )}
                {currentItem?.stamp && (
                  <div>
                    <h3>{t(`WithAStamp`)}</h3>
                    <input
                      type="checkbox"
                      value={isStamp}
                      onChange={handleStamp}
                    />
                  </div>
                )}
                <div>
                  {currentItem &&
                    (currentItem?.nameUa == "Банер 440 гр. Ламінований" ||
                      currentItem?.nameUa == "Банер 510 гр. литий" ||
                      currentItem?.nameUa == "Сітка банерна 380 гр.") && (
                      <div>
                        <h3>{t(`Bilateral`)}</h3>
                        <input
                          type="checkbox"
                          value={isBilateral}
                          onChange={() => setIsBilateral((state) => !state)}
                        />
                      </div>
                    )}
                </div>
                {currentItem?.solderingOfGates &&
                  currentItem?.solderingOfGates.length != 0 && (
                    <div className="soldering">
                      <div className="soldering_item">
                        <SelectSec
                          item={currentItem?.solderingOfGates}
                          title={"SolderingOfGates"}
                          selectedOption={selectedOptionSolderGates}
                          setSelectedOption={setSelectedOptionSolderGates}
                        />
                      </div>
                      <div className="soldering_item">
                        <SelectSec
                          item={currentItem?.solderingPockets}
                          title={"SolderingPockets"}
                          selectedOption={selectedOptionSolderPockets}
                          setSelectedOption={setSelectedOptionSolderPockets}
                        />
                      </div>
                    </div>
                  )}
              </div>
              {((choseAnotherUser &&
                choseAnotherUser.name != "ponto-print@ukr.net") ||
                (user.name != "ponto-print@ukr.net" &&
                  user.name != "undefined")) && (
                <div className="colum upload">
                  <h3>Файл</h3>
                  <input
                    type="file"
                    accept=".jpg, .tiff, .tif, .rar, .zip, .7z, .cdr"
                    hidden
                    onChange={handleChange}
                    ref={inputFileRef}
                  />
                  <button
                    onClick={() => inputFileRef.current.click()}
                    disabled={isProgresBar}
                  >
                    {t(`Download the file`)}
                  </button>
                  <div>
                    {selectedFile && (
                      <p>
                        {t(`File selected`)}: {selectedFile.name}
                      </p>
                    )}
                  </div>
                  <ProgressBar
                    isProgresBar={isProgresBar}
                    currentSizeFile={currentSizeFile}
                    totalSizeFile={totalSizeFile}
                    progress={progress}
                  />
                  <div>
                    {validationFile && (
                      <p style={{ color: "red" }}>{t(`File not selected`)}</p>
                    )}
                  </div>
                </div>
              )}
            </div>
            <div className="wrap_row">
              <div className="calc-item">
                <h3>{t(`Description`)}</h3>
                <div className="description">
                  {descArray.length !== 0 &&
                    Object.entries(descArray)
                      .filter(([_, value]) => value.name !== "")
                      .map(([key, item], idx) => (
                        <p key={idx}>
                          {item?.option && t(`${item?.option}`)}
                          {t(`${item?.name}`)}
                          {item?.value}
                        </p>
                      ))}
                </div>
              </div>
              <div className="calc-item">
                <h3>{t(`Notes`)}</h3>
                <textarea
                  name="coment"
                  id=""
                  cols="50"
                  rows="6"
                  value={coment}
                  onChange={(e) => setComent(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className="wrap_row footer_calc">
              <div className="calc-item delivery">
                <DeliveryAddress
                  title={t(`Delivery address`)}
                  type={"text"}
                  placeholder={t(`Address`)}
                  value={delivery}
                  handleCangeInput={setDelivery}
                  currentUser={currentUserState || user}
                />
                <div className="saved_address_text_wrap">
                  <p className="saved_address_text">Збережені адресси</p>
                </div>
                <ChoseAddressSelect
                  allAddress={currentUserState.address || user.address}
                  currentUser={currentUserState || user}
                  handleCangeInput={setDelivery}
                />
              </div>
              <div className="total_sum">
                <h3>
                  {" "}
                  {t(`Total`)}:{" "}
                  <p>{isNaN(totalSum.toFixed(0)) ? 0 : totalSum.toFixed(0)}</p>{" "}
                  грн
                </h3>
              </div>
              {((choseAnotherUser &&
                choseAnotherUser.name != "ponto-print@ukr.net") ||
                (user.name != "ponto-print@ukr.net" &&
                  user.name != "undefined")) && (
                <div className="send_button_and_validation_wrap">
                  <button
                    onClick={() => handleTotalSum()}
                    disabled={isProgresBar}
                  >
                    {waitingSendOrder ? (
                      <p>{t(`Sending the order`)}</p>
                    ) : (
                      <p>{t(`Download the order`)}</p>
                    )}
                  </button>
                  <div className="validation_wrap">
                    {validationCurrentItem && <p>{t(`Validation material`)}</p>}
                    {validationOptionQuality && currentItem?.quality && (
                      <p>{t(`Validation quality`)}</p>
                    )}
                    {validationOptionColor && <p>{t(`Validation color`)}</p>}
                    {validationWidth && <p>{t(`Validation width`)}</p>}
                    {validationHeight && <p>{t(`Validation height`)}</p>}
                    {validationFile && <p>{t(`File not selected`)}</p>}
                  </div>
                </div>
              )}
            </div>
            {displayOrderStory()}
          </>
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};

export default CalculatorPartner;
