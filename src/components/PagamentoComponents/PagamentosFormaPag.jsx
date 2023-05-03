import React, { useEffect, useState } from "react";
import CardCartao from "../CardCartao";
import { getUserLogged } from "../../api";
import { IMaskInput } from "react-imask";
import { styles } from "../../styles";

import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const PagamentosFormaPag = ({ data, userInfos, updateFieldHandler }) => {
  // const [periodo, setPeriodo] = useState(new Date());

  // const [startDate, setStartDate] = useState(new Date());

  const [selectedDate, setselectedDate] = useState(null);

  return (
    <div className="flex flex-wrap gap-5 px-5 sm:px-10">
      <div className="w-full flex flex-col gap-5">
        <h2 className="text-rentBlue font-semibold font-poppins">
          Período que é pretendido para locação do item
        </h2>

        <div className="w-full flex flex-wrap gap-5 sm:flex-nowrap">
          <div className="w-full flex gap-2">
            <label className="text-sm text-rentBlue">De:</label>

            <IMaskInput
              type="text"
              name="dtIni"
              as={IMaskInput}
              mask="00/00/0000"
              placeholder="00/00/0000"
              value={data.dtIni || ""}
              onChange={(e) => updateFieldHandler("dtIni", e.target.value)}
              className={`${styles.inputPadrao}`}
            />
          </div>

          <div className="w-full flex gap-2">
            <label className="text-sm text-rentBlue">Até:</label>
            {/* <IMaskInput
              type="text"
              name="dtFim"
              as={IMaskInput}
              mask="00/00/0000"
              placeholder="00/00/0000"
              value={data.dtFim || ""}
              onChange={(e) => updateFieldHandler("dtFim", e.target.value)}
              className={`${styles.inputPadrao}`}
            /> */}
            <ReactDatePicker
              id="dtFim"
              selected={data.dtFim || ""}
              onChange={e => updateFieldHandler("dtFim", e)}
              className={`${styles.inputPadrao}`}
              dateFormat={"yyyy/MM/dd"}
            />

          </div>

        </div>
      </div>

      <h2 className="text-rentBlue font-semibold font-poppins">
        Forma de Pagamento
      </h2>

      <div className="w-full flex flex-wrap gap-5 justify-center lg:justify-start">
        <CardCartao cartaoInfos={userInfos} showEdit={false}>
          <input
            type="radio"
            name="cartaoId"
            defaultChecked={data.cartaoId === userInfos.cartaoId}
            value={userInfos.cartaoId}
            className="checked:bg-primary"
            onChange={(e) => updateFieldHandler("cartaoId", e.target.value)}
          />
        </CardCartao>

        <CardCartao cartaoInfos={userInfos} showEdit={false}>
          <input
            type="radio"
            name="cartaoId"
            defaultChecked={data.cartaoId === userInfos.cartaoId2}
            value={userInfos.cartaoId2}
            className="checked:bg-primary"
            onChange={(e) => updateFieldHandler("cartaoId", e.target.value)}
          />
        </CardCartao>
      </div>
    </div>
  );
};

export default PagamentosFormaPag;
