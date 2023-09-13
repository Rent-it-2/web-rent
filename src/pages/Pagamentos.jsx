import React, { useContext, useEffect, useState } from "react";
import { ItemContext } from "../contexts/ItemContext";
import {
  Footer,
  Header,
  Modal,
  PagamentosFormaPag,
  PagamentosInfos,
  PagamentosResumo,
  Stepper,
} from "../components";
import { styles } from "../styles";
import { getItemById, getUserById, postAlugarItem, postAvaliacao } from "../api";
import { usePagamentoForm } from "../hooks/usePagamentoForm";
import { Rating } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Pagamentos = () => {
  const { itemId, userId } = useContext(ItemContext);
  const [user, setUser] = useState({});
  const [item, setItem] = useState({});
  const [openModal, setOpenModal] = useState(false);

  const formTemplate = {
    cartaoId:"",
    cpf: "",
    dtFim: "",
    dtInicio: "",
    enderecoId:"",
    itemId:"",
    idUso:"",
    valorFinal:""
  };

  const [data, setData] = useState(formTemplate);

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const formComponents = [
    <PagamentosInfos
      data={data}
      userInfos={user}
      updateFieldHandler={updateFieldHandler}
    />,
    <PagamentosFormaPag
      data={data}
      userInfos={user}
      updateFieldHandler={updateFieldHandler}
    />,
    <PagamentosResumo data={data} item={item} user={user} />,
  ];

  const concluir = () => {
    console.log("concluir", data);
    postAlugarItem(data);
  }

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } =
    usePagamentoForm(formComponents);

  const getItem = async () => {
    try {
      const resposta = 
await
 getItemById(userId, itemId).then((res) => {
        setItem(res.data);
      });
      return resposta;
    } catch (error) {
      console.log(error);
    }
  };

  const getUser = async () => {
    try {
      const resposta = 
await
 getUserById(userId).then((res) => {
        setUser(res.data);
      });
      return resposta;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getItem();
    getUser();
  }, []);

  return (
    <>
      <Header />
      <main className={`${styles.mainConfig}`}>
        <form
          onSubmit={(e) =>
            changeStep(currentStep + 1, e) | console.log("data", data)
          }
          className="w-full flex justify-center flex-wrap gap-10"
        >
          <div
            className={`${styles.cardWhite} w-full flex flex-col gap-10 rounded-lg p-10 sm:flex-wrap ss:w-4/5`}
          >
            <Stepper currentStep={currentStep} />
            {currentComponent}
            <div className="w-2/4 flex gap-5 items-end self-end px-10">
              {!isFirstStep && (
                <button
                  type="button"
                  className={`w-full ${styles.botaoPadraoPrimary} ${styles.hoverPadraoPrimary}`}
                  onClick={() => changeStep(currentStep - 1)}
                >
                  <i className="mdi mdi-chevron-left text-[20px]" />
                  Voltar
                </button>
              )}

              {!isLastStep ? (
                <button
                  type="submit"
                  className={`w-full ${styles.botaoPadraoPrimary} ${styles.hoverPadraoPrimary}`}
                >
                  Próximo
                  <i className="mdi mdi-chevron-right text-[20px]" />
                </button>
              ) : (
                <button
                  type="submit"
                  className={`w-full ${styles.botaoPadraoPrimary} ${styles.hoverPadraoPrimary}`}
                  onClick={() => {setOpenModal(true) | concluir()}}
                >
                  Concluir
                  <i className="mdi mdi-check text-[20px]" />
                </button>
              )}
            </div>

            <Modal
              title={"Transação Completa"}
              isOpen={openModal}
              setModalOpen={() => setOpenModal(!openModal)}
            >
              <Form userId={userId} />
            </Modal>
          </div>
        </form>
      </main>
      <Footer />
    </>
  );
};

export const Form = ({ userId }) => {
  const [value, setValue] = useState(0);
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const getUser = async () => {
    try {
      const resposta = 
await
 getUserById(userId).then((res) => {
        setUser(res.data);
      });
      return resposta;
    } catch (error) {
      console.log(error);
    }
  };

  const avaliar = (newValue) => {
    setValue(newValue);
  }

  const enviarAvaliar = () => {
    console.log(value);
    postAvaliacao(value);
    navigate("/")
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <form className="flex flex-col items-center gap-5 mt-5">
      <h1 className="font-poppins font-bold text-lg">Avaliar {user.apelido}</h1>
      <div className="">
        <Rating
          name="simple-controlled"
          precision={0.5}
          value={value}
          onChange={(event, newValue) => {
            avaliar(newValue);
          }}
          size="large"
        />
      </div>

      <button
        type="submit"
        className={`w-full ${styles.botaoPadraoPrimary} ${styles.hoverPadraoPrimary}`}
        onClick={enviarAvaliar}
      >
        Enviar
      </button>
    </form>
  );
};

export default Pagamentos;
