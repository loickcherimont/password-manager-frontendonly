// For responsive 

import src from "../assets/img/twitter_logotest.png"
import { Form } from "./Form";

import { Logo } from "./Logo";

// Appear only when we are in sizes of mobile (screens)
export function ToggleForm({ userAskForm, codes, setCodes }) {

    if (userAskForm) {
        return <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            {/*<!--
          Background backdrop, show/hide based on modal state.
      
          Entering: "ease-out duration-300"
            From: "opacity-0"
            To: "opacity-100"
          Leaving: "ease-in duration-200"
            From: "opacity-100"
            To: "opacity-0"
--> */}
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    {/*<!--
              Modal panel, show/hide based on modal state.
      
              Entering: "ease-out duration-300"
                From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                To: "opacity-100 translate-y-0 sm:scale-100"
              Leaving: "ease-in duration-200"
                From: "opacity-100 translate-y-0 sm:scale-100"
                To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            --> */}
                    <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                    <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title"><Logo src={src}/>My Accesses</h3>
                                    {/* <div className="mt-2">
                                        <p className="text-sm text-gray-500">Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.</p>
                                    </div> */}
                                    <Form codes={codes} setCodes={setCodes}/>
                                </div>
                            </div>
                        </div>
                        {/* <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <div className="space-y-2 py-6">
                                <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">LINK</a>
                                <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">LOGIN</a>
                                <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">PASSWORD</a>
                            </div>
                            <div className="py-6">
                                <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Add new password</a>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
        //         <div className="lg:hidden">
        //             <div className="lg:hidden" role="dialog" aria-modal="true">
        //                 {/* <!-- Background backdrop, show/hide based on slide-over state. -->*/}
        //                 <div className="fixed inset-0 z-50"></div>
        //                 <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        //                     <div className="flex items-center justify-between">
        //                         <a href="#" className="-m-1.5 p-1.5">
        //                             <span className="sr-only">Your Company</span>
        //                             <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
        //                         </a>
        //                         <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
        //                             <span className="sr-only">Close menu</span>
        //                             <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
        //                                 <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        //                             </svg>
        //                         </button>
        //                     </div>
        //                     <div className="mt-6 flow-root">
        //                         <div className="-my-6 divide-y divide-gray-500/10">
        //                             
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div >
        //         </div>

    } else {
        return null;
    }
}

/*

{/* 

INPUTS ON MOBILE

                            
                            

                            

*/