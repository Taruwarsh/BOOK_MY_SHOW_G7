import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { toast } from "react-toastify";
 const PaymentModel = async (price) => {
  return new Promise((resolve) => {
    const loadScript = (src) => {
      return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;

        script.onload = () => {
          resolve(true);
        };

        script.onerror = () => {
          resolve(false);
        };

        document.body.appendChild(script);
      });
    };

    const displayRazorpay = async (price) => {
      const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );

      if (!res) {
        alert("You are offline... Failed to load Razorpay SDK");
        resolve(false);
        return;
      }

      const options = {
        key: "rzp_test_VdGdvprTKB8u1w",
        currency: "INR",
        amount: price * 100,
        name: "BookMart",
        description: "Thanks for purchasing",

        handler: function (response) {
          toast.success(`Payment Successful`, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });

          resolve(true); 
        },

        prefill: {
          name: "BookMart",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    };

    displayRazorpay(price);
  });
};



// const PaymentModel = ({ setIsOpen, isOpen, price }) => {
//   const closeModal = () => {
//     setIsOpen(false);
//   };

//   const launchRazorPay = () => {
//     let options = {
//       key: "rzp_test_Taf4Olo2TluDGc",
//       amount: price * 100,
//       currency: "INR",
//       name: "Book My Show Clone",
//       description: "Movie purchase or rental",
//       image:
//         "https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png",
//       handler: () => {
//         setIsOpen(false);
//         alert("Payment Successful");
//       },
//       theme: { color: "#c4242d" },
//     };

//     let razorPay = window.Razorpay(options);
//     razorPay.open();
//   };

//   return (
//     <>
//       <Transition appear show={isOpen} as={Fragment}>
//         <Dialog as="div" className="relative z-50" onClose={closeModal}>
//           <Transition.Child
//             as={Fragment}
//             enter="ease-out duration-300"
//             enterFrom="opacity-0"
//             enterTo="opacity-100"
//             leave="ease-in duration-200"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//           >
//             <div className="fixed inset-0 bg-black bg-opacity-25" />
//           </Transition.Child>

//           <div className="fixed inset-0 overflow-y-auto">
//             <div className="flex min-h-full items-center justify-center p-4 text-center">
//               <Transition.Child
//                 as={Fragment}
//                 enter="ease-out duration-300"
//                 enterFrom="opacity-0 scale-95"
//                 enterTo="opacity-100 scale-100"
//                 leave="ease-in duration-200"
//                 leaveFrom="opacity-100 scale-100"
//                 leaveTo="opacity-0 scale-95"
//               >
//                 <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
//                   <Dialog.Title
//                     as="h3"
//                     className="text-lg font-medium leading-6 text-gray-900"
//                   >
//                     Please make a payment
//                   </Dialog.Title>
//                   <div className="mt-2">
//                     <p className="text-sm text-gray-500">
//                       Hello please click non the below button to make a payment.
//                     </p>
//                   </div>

//                   <div className="mt-4 flex gap-3">
//                     <button
//                       type="button"
//                       className="inline-flex justify-center rounded-md border border-transparent bg-green-500 px-4 py-2 text-sm font-medium text-white hover:bg-green-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
//                       onClick={launchRazorPay}
//                     >
//                       Pay ₹{price}
//                     </button>
//                     <button
//                       type="button"
//                       className="inline-flex justify-center rounded-md border border-transparent bg-red-500  px-4 py-2 text-sm font-medium text-white hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
//                       onClick={closeModal}
//                     >
//                       Cancle Payment
//                     </button>
//                   </div>
//                 </Dialog.Panel>
//               </Transition.Child>
//             </div>
//           </div>
//         </Dialog>
//       </Transition>
//     </>
//   );
// };

export default PaymentModel;
