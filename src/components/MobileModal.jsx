// For responsive 
import { MobileForm } from "./MobileForm";

// Appear only when we are in sizes of mobile (screens)
export function MobileModal({ userAskForm, codes, setCodes, setUserAskForm }) {
    return <div className={`${!userAskForm && "hidden"} relative z-10`} aria-labelledby="modal-title" role="dialog" aria-modal="true">

        {/* Background backdrop, show / hide based on modal state. */}
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex justify-center p-4 text-center">
                {/*<!--
          Modal panel, show/hide based on modal state.
  
          Entering: "ease-out duration-300"
            From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            To: "opacity-100 translate-y-0 sm:scale-100"
          Leaving: "ease-in duration-200"
            From: "opacity-100 translate-y-0 sm:scale-100"
            To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
-->*/}
                <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">

                    <MobileForm userAskForm={userAskForm} setUserAskForm={setUserAskForm} codes={codes} setCodes={setCodes} />
                </div>
            </div>
        </div>
    </div >
}