import ModalBody from "../ModalBody";

const Modal = ({ setOpen, productDetail, img }) => {
  const handleClick = () => {
    setOpen(false);
  };

  console.log(productDetail);
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
        <div className="relative my-6 mx-auto h-[70vh] w-[90%] ">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full  outline-none focus:outline-none bg-white text-slate-900">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-xl md:text-3xl font-semibold">{productDetail?.name}</h3>
              <button
                className="p-1 ml-auto border-0 float-right text-4xl font-bolder focus:outline-none "
                onClick={() => setOpen(false)}
              >
                <span className="bg-transparent text-black h-6 w-6 text-4xl block outline-none hover:text-red-400 focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-2 flex-auto">
              <ModalBody productDetail={productDetail} img={img} />
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-1 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={handleClick}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default Modal;
