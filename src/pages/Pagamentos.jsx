import React, { useContext, useEffect, useState } from "react";
import { ItemContext } from "../contexts/ItemContext";
import {
  Footer,
  Header,
  PagamentosFormaPag,
  PagamentosInfos,
  PagamentosResumo,
  Stepper,
} from "../components";
import { styles } from "../styles";
import { getItemById, getUserById } from "../api";
import { usePagamentoForm } from "../hooks/usePagamentoForm";

const Pagamentos = () => {
  const { itemId, userId } = useContext(ItemContext);
  const [user, setUser] = useState({});
  const [item, setItem] = useState({});

  const formTemplate = {
    userId: userId,
    itemId: itemId,
    nome: "",
    cpf: "",
    dtIni: "",
    dtFim: "",
    enderecoId: "",
    cartaoId: "",
  };

  const [data, setData] = useState(formTemplate);

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const formComponents = [
    <PagamentosInfos data={data} updateFieldHandler={updateFieldHandler} />,
    <PagamentosFormaPag
      data={data}
      userInfos={user}
      updateFieldHandler={updateFieldHandler}
    />,
    <PagamentosResumo data={data} item={item} user={user}/>,
  ];

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } = usePagamentoForm(formComponents);

  const getItem = async () => {
    try {
      const resposta = await getItemById(userId, itemId).then((res) => {
        setItem(res.data);
      });
      return resposta;
    } catch (error) {
      console.log(error);
    }
  };

  const getUser = async () => {
    try {
      const resposta = await getUserById(userId).then((res) => {
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
          onSubmit={(e) => changeStep(currentStep + 1, e) | console.log("data", data)}
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
                >
                  Concluir
                  <i className="mdi mdi-check text-[20px]" />
                </button>
              )}
            </div>
          </div>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default Pagamentos;
